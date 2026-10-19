# 🍽️ Family Meal Suggestions

<div align="center">

### 🟢 Family Meal Planning Made Simple 🔵

A collaborative family meal voting system built using **HTML**, **CSS**, **JavaScript**, **Firebase Firestore**, and **Firebase Hosting**.

🌐 Live Site:
https://familymealsuggestions-gitto1.web.app

</div>

---

## 📖 About The Project

Family Meal Suggestions is a web application created to simplify family meal planning by allowing family members to vote on preferred meals for:

🥞 Breakfast

🍝 Lunch

🍔 Dinner

Family members can also submit:

✅ Allergies

✅ Dietary restrictions

✅ Foods they do not eat

✅ Additional meal notes

All voting data is stored in **Firebase Firestore**, making it available to every participant using the application.

---

## ✨ Features

### 🟢 Landing Page

- Enter a name or nickname
- Read Terms & Conditions
- Accept and continue to meal voting

---

### 🔵 Meal Suggestions Page

#### 🥞 Breakfast Options

- Yes, I want breakfast
- No, I'll skip breakfast

#### 🍝 Lunch Options

- Beef/Chicken Stew and Pap
- Creamy Pasta / Sontag Kos
- Takeouts

#### 🍔 Dinner Options

- Sandwich & Fries
- Steak & Fries
- Pap, Tomato Gravy (Chakalaka) & Wors
- Takeout

---

### 📝 Dietary Restrictions

Family members can provide:

- Allergies
- Dietary requirements
- Foods they avoid
- Additional notes

---

### 📊 Results Page

Displays:

- Total votes for meal options
- Allergy submissions
- User dietary notes
- Names associated with each note

---

## 🏗️ System Workflow

```text
Landing Page
     ↓
Enter Name
     ↓
Accept Terms & Conditions
     ↓
Vote For Meals
     ↓
Submit Allergies/Dietary Notes
     ↓
Save To Firestore
     ↓
Display Results
```

---

## 🗂️ Project Structure

```text
family-menu/
│
├── public/
│   ├── index.html
│   ├── suggestions.html
│   ├── suggResults.html
│   ├── style.css
│   ├── script.js
│   └── images/
│
├── firebase.json
├── .firebaserc
└── README.md
```

---

## ☁️ Database Structure

### Collection

```text
votes
```

### Example Document

```json
{
  "name": "Gift",
  "breakfast": "yes",
  "lunch": "pasta",
  "dinner": "pap",
  "allergies": "No seafood",
  "timestamp": "2026-09-25T09:00:00Z"
}
```

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Firebase Firestore

### Hosting

- Firebase Hosting

### Development

- Visual Studio Code
- Git
- GitHub

---

## 🚀 Future Enhancements

Planned improvements:

- 🔔 Meal reminders
- 📱 Mobile optimization
- ⚡ Real-time voting updates
- 📈 Meal history reports
- 👨‍💼 Admin dashboard
- 🔐 User authentication
- 🍽️ Dynamic meal management
- 📊 Analytics dashboard

---

## 🎓 Learning Outcomes

This project provided experience in:

- Web Development
- JavaScript Programming
- Firebase Firestore Integration
- Cloud Hosting
- Database Design
- User Interface Design
- Version Control with Git and GitHub

---

## 👨‍💻 Author

### Kelebogile Gift Moota

🎓 BSc Information Technology Graduate

🎓 BSc Honours Computer Science Student

🏫 University of Pretoria

---

## ⚙️ Development Environment

### Tools Used

- Visual Studio Code
- Node.js
- npm
- Firebase
- Firebase Firestore
- Firebase Hosting
- Firebase CLI
- Git
- GitHub

### Firebase CLI Installation

```bash
npm install -g firebase-tools
```

### Login To Firebase

```bash
firebase login
```

### Initialize Firebase

```bash
firebase init
```

### Deploy To Firebase Hosting

```bash
firebase deploy
```

---

## 📜 License

This project was developed for educational, learning, and family meal-planning purposes.

---

<div align="center">

### 🟢 Built With Family In Mind 🔵

