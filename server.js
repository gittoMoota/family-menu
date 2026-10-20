
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cron = require('node-cron');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const db = new sqlite3.Database('./votes.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    breakfast TEXT,
    lunch TEXT,
    dinner TEXT,
    delivery TEXT,
    customLocation TEXT,
    customTime TEXT,
    allergies TEXT,
    submittedAt TEXT
  )`);

  // Add allergies column to an existing database if needed
  db.all('PRAGMA table_info(submissions)', (err, columns) => {
    if (err) {
      console.error('Error checking database columns:', err);
      return;
    }

    if (!columns.some(column => column.name === 'allergies')) {
      db.run(
        'ALTER TABLE submissions ADD COLUMN allergies TEXT',
        err => {
          if (err) {
            console.error('Error adding allergies column:', err);
          }
        }
      );
    }
  });
});

// Save votes and allergies
app.post('/submit', (req, res) => {
  const {
    name,
    breakfast,
    lunch,
    dinner,
    delivery,
    customLocation,
    customTime,
    allergies,
    submittedAt
  } = req.body;

  db.run(
    `INSERT INTO submissions
    (name, breakfast, lunch, dinner, delivery, customLocation,
     customTime, allergies, submittedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      name,
      breakfast,
      lunch,
      dinner,
      delivery,
      customLocation,
      customTime,
      allergies,
      submittedAt || new Date().toISOString()
    ],
    function(err) {
      if (err) {
        console.error('Error saving submission:', err);
        return res.status(500).send('Error saving submission');
      }

      res.send('Submission saved successfully');
    }
  );
});

// Get all submissions for the results page
app.get('/submissions', (req, res) => {
  db.all('SELECT * FROM submissions', [], (err, rows) => {
    if (err) {
      console.error('Error retrieving submissions:', err);
      return res.status(500).send('Error retrieving submissions');
    }

    res.json(rows);
  });
});

// Clear votes and allergies every day at 9 PM
cron.schedule('0 21 * * *', () => {
  db.run('DELETE FROM submissions', function(err) {
    if (err) {
      console.error('Daily reset failed:', err);
      return;
    }

    console.log(
      `Daily reset completed at ${new Date().toLocaleString('en-ZA', {
        timeZone: 'Africa/Johannesburg'
      })}. Deleted ${this.changes} submissions.`
    );
  });
}, {
  timezone: 'Africa/Johannesburg'
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Daily submissions reset scheduled for 9:00 PM South African time.');
});
