# 🍽️ Family Menu: Family Meal Suggestions

<div align="center">

### 🟢 Family Meal Planning Made Simple 🔵

A collaborative family meal-planning and voting application built with **HTML, CSS, JavaScript, Firebase Authentication, Cloud Firestore, and Firebase Hosting**.

🌐 **Live Website:**  
https://familymealsuggestions-gitto1.web.app

</div>

---

## About the Project

Family Meal Suggestions makes it easier for family members to coordinate meals and communicate their preferences before a family gathering.

Family members can select their preferred breakfast, lunch, and dinner options, provide meal-arrangement details, and share allergies or dietary requirements.

Submissions are stored in **Firebase Cloud Firestore**. The results page is restricted to approved, verified Google accounts to protect family voting information and allergy details.

The application is hosted on Firebase Hosting and is designed to operate within the Firebase Spark (free) plan.

---

## ✨ Features

###  Landing Page

- Introduces the family meal-planning application.
- Provides access to the meal-selection process.
- Presents relevant information and terms for participants.

###  Meal Suggestions

Family members can select their meal preferences from the available options.

**Breakfast**
- Yes, I want breakfast.
- No, I'll skip breakfast.

**Lunch**
- Beef/Chicken Stew and Pap
- Creamy Pasta / Sontag Kos
- Takeouts

**Dinner**
- Sandwich & Fries
- Steak & Fries
- Pap, Tomato Gravy (Chakalaka) & Wors
- Takeout

###  Meal Arrangements

Participants can provide additional details for each selected meal.

- Breakfast, lunch, and dinner arrangements are handled separately.
- Meal locations can be selected or entered using an **Other** option.
- Delivery preferences can be specified.
- Lunch and dinner times can be selected.
- Breakfast does not require a meal-time selection.

###  Allergies and Dietary Requirements

Participants can submit information about:

- Food allergies
- Dietary restrictions
- Foods they avoid
- Special meal requirements
- Additional food, drink, or arrangement notes

Allergy and dietary information is treated as private submission data and is available only through the authorised results-access process.

###  Private Results Dashboard

The results page allows approved users to review submitted information, including:

- Meal preference totals
- Breakfast, lunch, and dinner selections
- Meal locations
- Delivery preferences
- Lunch and dinner times
- Allergy and dietary notes
- Associated participant names, where provided

Access requires signing in with an approved, verified Google account.

### 🔐 Authentication and Security

Firebase Authentication and Firestore Security Rules are used to control access.

- **Anonymous authentication:** Allows visitors to submit meal suggestions without manually creating an account.
- **Google authentication:** Used by authorised viewers to access the results page.
- **Approved email addresses:** Only explicitly authorised, verified Google accounts can read protected voting data.
- **Restricted database access:** Unauthorised users cannot read submissions or modify or delete existing votes through the client.
- **Default-deny rules:** Other Firestore collections and documents are denied unless explicitly permitted by the security rules.

The approved viewer list must be kept consistent between the results-page authentication checks and the Firestore Security Rules.

> **Security note:** Firebase client configuration is not a substitute for security rules. Never commit service-account private keys, passwords, or other server-side secrets to GitHub.

---

## Application Workflow

```text
Landing Page
     |
     v
Open Meal Suggestions
     |
     v
Select Breakfast, Lunch and Dinner
     |
     v
Enter Meal Arrangements
     |
     v
Add Allergies or Dietary Notes
     |
     v
Anonymous Firebase Authentication
     |
     v
Save Submission to Cloud Firestore
     |
     v
Open Results Page
     |
     v
Approved Google Sign-In
     |
     v
View Protected Meal Results
```

---

## 🗂️ Project Structure

```text
family-menu/
│
├── public/
│   ├── index.html
│   ├── suggestions.html
│   ├── arrangements.html
│   ├── suggResults.html
│   ├── style.css
│   └── images/
│       ├── caffeine-rush-coffee.gif
│       ├── lunch.gif
│       └── dinner3.gif
│
├── firebase.json
├── .firebaserc
├── .gitignore
└── README.md
```


## ☁️ Database Structure

### Firestore Collections

#### `votes`

Stores individual meal submissions and arrangement details.

Typical fields include:

| Field | Description |
|---|---|
| `name` | Participant name or nickname, when provided |
| `breakfast` | Breakfast preference |
| `breakfastLocation` | Breakfast location |
| `breakfastDelivery` | Breakfast delivery preference |
| `breakfastTime` | Breakfast time field, normally not applicable |
| `lunch` | Lunch selection |
| `lunchLocation` | Lunch location |
| `lunchDelivery` | Lunch delivery preference |
| `lunchTime` | Preferred lunch time |
| `dinner` | Dinner selection |
| `dinnerLocation` | Dinner location |
| `dinnerDelivery` | Dinner delivery preference |
| `dinnerTime` | Preferred dinner time |
| `allergies` | Allergy, dietary, food, and drink notes |
| `timestamp` | Submission timestamp in ISO 8601 format |
| `createdAt` | Firestore server-generated timestamp |

The exact values stored in meal-selection fields depend on the options selected in the application.

### `voteArchive`

The Firestore rules also provide a protected archive path for historical submissions, using the structure:

```text
voteArchive/
    {archiveId}/
        votes/
            {voteId}
```

Client-side writes to the archive are denied by the current security rules.

### Example Submission

The following is an illustrative example, not a record from the live database.

```json
{
  "name": "Gitto",
  "breakfast": "yes",
  "breakfastLocation": "Home",
  "breakfastDelivery": "no",
  "breakfastTime": "",
  "lunch": "Creamy pasta / Sontag kos",
  "lunchLocation": "Family gathering",
  "lunchDelivery": "yes",
  "lunchTime": "12:30",
  "dinner": "Steak & Fries",
  "dinnerLocation": "Home",
  "dinnerDelivery": "no",
  "dinnerTime": "18:00",
  "allergies": "No seafood",
  "timestamp": "2026-09-25T09:00:00.000Z"
}
```

---

## 🛡️ Firestore Security Model

The application uses Firebase Security Rules to protect submitted information.

| Action | Permission |
|---|---|
| Submit a new vote | Anonymous visitors and approved viewers |
| Read votes | Approved, verified Google accounts only |
| Update existing votes | Denied |
| Delete existing votes | Denied |
| Read archived votes | Approved, verified Google accounts only |
| Write to archives from the client | Denied |
| Access unspecified collections | Denied |

Security rules are enforced by Firebase, not just by the website's interface.

**Important:** Any changes to the approved email list must be reflected in both `suggResults.html` and the Firestore rules. Publish rule changes separately in the Firebase Console.

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- Responsive web design

### Backend and Authentication
- Firebase Authentication
- Cloud Firestore
- Firebase JavaScript SDK

### Hosting
- Firebase Hosting

### Development and Version Control
- Visual Studio Code
- Node.js
- npm
- Firebase CLI
- Git
- GitHub

---

## 🚀 Getting Started

### Prerequisites

Install or configure the following:

- [Node.js](https://nodejs.org/)
- [Firebase CLI](https://firebase.google.com/docs/cli)
- [Git](https://git-scm.com/)
- A Firebase project
- A GitHub repository

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd family-menu
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the URL of your repository.

### 2. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 3. Sign In to Firebase

```bash
firebase login
```

### 4. Select the Firebase Project

```bash
firebase use familymealsuggestions
```

The project alias must match the Firebase project configured for this application.

### 5. Run Locally

You can open `public/index.html` in a browser for a basic layout check. For more representative testing with Firebase, use a local web server or the Firebase Hosting emulator.

To start the Hosting emulator, run:

```bash
firebase emulators:start --only hosting
```

If the emulator needs a specific project or other Firebase services, configure those as required.

### 6. Deploy to Firebase Hosting

After reviewing and testing your changes, run:

```bash
firebase deploy --only hosting
```

This deploys the website files without deploying Firestore rules.

To deploy Firestore rules separately, use:

```bash
firebase deploy --only firestore:rules
```

Only run the rules deployment when the project's `firestore.rules` file is configured correctly and you intend to publish those rules. Otherwise, manage the rules through the Firebase Console.

---



##  Firebase Plan

The application is intended to run on the **Firebase Spark (free) plan**, subject to the services and usage limits available under that plan.

Monitor Firebase usage and quotas in the Firebase Console. Avoid introducing services that require upgrading the billing plan unless you deliberately decide to do so.

---

## 🔮 Future Enhancements

Possible future improvements include:

- 📱 Further mobile and accessibility improvements
- 📈 Historical meal reports
- 🍽️ Configurable meal options
- 📅 Meal-planning history
- 🔔 Optional reminders
- 📊 Improved results visualisation
- 🧪 Automated validation and testing
- 🛡️ Stronger validation of submitted Firestore data

---

## 🎓 Learning Outcomes

This project provides practical experience in:

- Frontend web development
- JavaScript and form validation
- Firebase Authentication
- Cloud Firestore data management
- Firestore Security Rules
- Firebase Hosting and deployment
- Responsive user-interface design
- Git and GitHub version control
- Access control for private application data

---

## 👨‍💻 Author

**gittoMoota**

---

## 📜 License

This project was developed for educational, learning, and family meal-planning purposes.

Unless a separate licence file is added, no specific open-source licence is granted by this README.

---

<div align="center">

### 🟢 Built With Family in Mind 🔵

**Plan together. Share preferences. Make family meals easier.**

</div>
