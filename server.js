const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // serve index.html + script.js from /public

// Db setup
const db = new sqlite3.Database('./votes.db');
db.run(`CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  breakfast TEXT,
  lunch TEXT,
  dinner TEXT,
  delivery TEXT,
  customLocation TEXT,
  customTime TEXT,
  submittedAt TEXT
)`);

// Save votes
app.post('/submit', (req, res) => {
  const { name, breakfast, lunch, dinner, delivery, customLocation, customTime, submittedAt } = req.body;
  db.run(`INSERT INTO submissions (name, breakfast, lunch, dinner, delivery, customLocation, customTime, submittedAt)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, breakfast, lunch, dinner, delivery, customLocation, customTime, submittedAt],
    function(err) {
      if (err) {
        return res.status(500).send("Error saving submission");
      }
      res.send("Submission saved successfully");
    });
});

// Get all votes
app.get('/submissions', (req, res) => {
  db.all("SELECT * FROM submissions", [], (err, rows) => {
    if (err) {
      return res.status(500).send("Error retrieving submissions");
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
