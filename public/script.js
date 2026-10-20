
function updateDateTime() {
  const datetime = document.getElementById("datetime");

  if (datetime) {
    datetime.textContent = new Date().toLocaleString("en-ZA", {
      timeZone: "Africa/Johannesburg"
    });
  }
}

function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.remove("active");
  });

  const selectedTab = document.getElementById(tabId);

  if (selectedTab) {
    selectedTab.classList.add("active");
  }

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle(
      "active",
      tab.getAttribute("onclick")?.includes(`'${tabId}'`)
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateDateTime();
  setInterval(updateDateTime, 1000);

  if (document.getElementById("breakfast")) {
    showTab("breakfast");
  }
});
