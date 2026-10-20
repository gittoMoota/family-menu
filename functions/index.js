const { onSchedule } = require("firebase-functions/v2/scheduler");
const { initializeApp } = require("firebase-admin/app");
const {
  getFirestore,
  FieldValue,
} = require("firebase-admin/firestore");
const logger = require("firebase-functions/logger");

initializeApp();

const db = getFirestore();

function getSouthAfricanDate() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Johannesburg",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const values = Object.fromEntries(
    parts.map(({ type, value }) => [type, value])
  );

  return `${values.year}-${values.month}-${values.day}`;
}

exports.resetDailySubmissions = onSchedule(
  {
    schedule: "0 21 * * *",
    timeZone: "Africa/Johannesburg",
    region: "africa-south1",
    timeoutSeconds: 300,
  },
  async () => {
    const archiveDate = getSouthAfricanDate();
    const activeVotes = db.collection("votes");
    const archiveRef = db
      .collection("voteArchive")
      .doc(archiveDate);

    const marker = await archiveRef.get();

    if (marker.exists && marker.data().status === "completed") {
      logger.info("Archive already completed", { archiveDate });
      return;
    }

    await archiveRef.set({
      date: archiveDate,
      status: "running",
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });

    let archivedCount = 0;

    try {
      const archivedVotes = archiveRef.collection("votes");

      while (true) {
        const snapshot = await activeVotes.limit(200).get();
        if (snapshot.empty) break;

        const batch = db.batch();

        for (const vote of snapshot.docs) {
          batch.set(archivedVotes.doc(vote.id), {
            ...vote.data(),
            originalVoteId: vote.id,
            archivedAt: FieldValue.serverTimestamp(),
          });
          batch.delete(vote.ref);
        }

        await batch.commit();
        archivedCount += snapshot.size;
      }

      await archiveRef.set({
        status: "completed",
        archivedCount,
        completedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      }, { merge: true });

      logger.info("Daily archive completed", {
        archiveDate,
        archivedCount,
      });
    } catch (error) {
      await archiveRef.set({
        status: "failed",
        error: String(error.message || error).slice(0, 500),
        updatedAt: FieldValue.serverTimestamp(),
      }, { merge: true });

      logger.error("Daily archive failed", { archiveDate, error });
      throw error;
    }
  }
);
