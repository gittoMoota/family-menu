# 🍽️ Family Meal Suggestions

## Overview

Family Meal Suggestions is a web-based meal planning and voting application designed to help family members collectively decide on meals for breakfast, lunch, and dinner.

The system allows family members to:

- Enter their name or nickname.
- Read and accept Terms & Conditions.
- Vote on meal preferences.
- Submit food allergies, dietary restrictions, or foods they do not eat.
- View meal voting results.
- View dietary notes submitted by family members.

The application is hosted using Firebase Hosting and stores all votes in Firebase Firestore, allowing multiple users to access and contribute to the same shared data.

---

## Problem Statement

Planning family meals can become challenging when family members have different preferences, dietary restrictions, and allergies.

This application was developed to provide a central platform where family members can participate in meal planning by submitting their preferences and viewing collective voting results.

---

## Features

### Landing Page
The landing page allows users to:

- Enter a name or nickname.
- Read the Terms & Conditions.
- Accept and continue to the voting page.

### Meal Suggestions Page

Users can vote on the following categories:

#### Breakfast
- Yes, I want breakfast
- No, I'll skip breakfast

#### Lunch
- Beef/Chicken Stew and Pap
- Creamy Pasta / Sontag Kos
- Takeouts

#### Dinner
- Sandwich & Fries
- Steak & Fries
- Pap, Tomato Gravy (Chakalaka) & Wors
- Takeout

### Dietary Restrictions

Users can provide:
- Allergy information
- Dietary restrictions
- Foods they do not eat
- Additional meal notes

### Results Page

Displays:

- Total votes for each meal option.
- Allergy and dietary restriction submissions.
- Names associated with dietary notes.

### Cloud Database

All submissions are stored in Firebase Firestore.

This allows:

- Multiple family members to vote.
- Shared access to voting results.
- Persistent storage of meal suggestions.

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Firebase Firestore Database

### Hosting
- Firebase Hosting

### Development Tools
- Visual Studio Code
- Git
- GitHub

---

## Application Workflow

### Step 1
The user enters a name or nickname on the landing page.

### Step 2
The user reads and accepts the Terms & Conditions.

### Step 3
The user selects meal preferences for:

- Breakfast
- Lunch
- Dinner

### Step 4
The user enters any allergies or dietary restrictions.

### Step 5
The application submits the user's information to Firebase Firestore.

### Step 6
The user is redirected to the Results page.

### Step 7
The Results page retrieves all submissions and displays:

- Total meal votes.
- Allergy information.
- User names associated with submitted dietary notes.

---

## Database Structure

### Collection

```text
votes
```

### Document Example

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

## Project Structure

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

## Live Application

The application is hosted on Firebase Hosting.

```text
https://familymealsuggestions-gitto1.web.app
```

---

## Future Improvements

Planned enhancements include:

- Daily vote reset functionality.
- Automatic meal reminders.
- Push notifications.
- Real-time result updates.
- Meal history reports.
- Administrative dashboard.
- User authentication.
- Dynamic meal management.
- Mobile-friendly enhancements.

---

## Learning Outcomes

This project provided practical experience in:

- Frontend web development.
- JavaScript programming.
- Firebase Firestore integration.
- Cloud-hosted applications.
- Database design.
- User interface design.
- Git and GitHub version control.
- Firebase deployment and hosting.

---

## Author

### Kelebogile Gift Moota

- BSc Information Technology Graduate
- BSc Honours Computer Science Student
- University of Pretoria

---

## Development Environment

The following tools were used during development:

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

### Firebase Authentication

```bash
firebase login
```

### Firebase Project Initialization

```bash
firebase init
```

### Firebase Deployment

```bash
firebase deploy
```

---

## License

This project was developed for educational, learning, and family meal-planning purposes.
