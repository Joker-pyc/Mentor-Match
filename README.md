
<p align="center" style="font-size: 24px; font-weight: bold;">
MentorMatch
</p>

---
<p align="center">
  <img src="src/logo.svg" alt="MentorMatch Logo" width="200" height="200">
</p>

MentorMatch is an innovative platform that connects aspiring professionals with experienced mentors, fostering growth and knowledge sharing in various fields.

## 🚀 Key Features

- 🧠 **AI-powered Profile Matching**: Personalized mentor-mentee recommendations.
- 🗺️ **Interactive Learning Paths**: Tailored learning paths based on user goals.
- 💬 **Real-time Communication**: Chat and video mentorship sessions.
- 📊 **Skill Assessment & Feedback**: Regular evaluations and feedback loops.
- 🎯 **Progress Tracking**: Goal-setting and performance monitoring.
- 🌐 **Networking Hub**: A platform to build professional connections.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Node.js (for API and backend logic)
- **Database**: Firebase / MongoDB (for chat and profile data)
- **AI**: TensorFlow.js (for AI-powered profile matching)
- **Video/Chat**: Jitsi API / WebRTC for video calls
- **Styling**: CSS Modules, Glassmorphism UI
- **Version Control**: Git, GitHub

---

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:

- 🟢 **Node.js**: v14.17.0 or above. Install [here](https://nodejs.org/).
- 🟠 **npm** (Node Package Manager): Installed with Node.js.
- 🔵 **Git**: For version control. Install [here](https://git-scm.com/).

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. **Clone the Repository**

Clone this repository to your local machine using Git.

```bash
git clone https://github.com/your-username/MentorMatch.git
cd MentorMatch
```

### 2. **Install Node.js and npm**

If Node.js and npm are not installed, follow the instructions below:

- **MacOS**: 
  - Install Node.js via Homebrew:
    ```bash
    brew install node
    ```
  
- **Windows**:
  - Download and install Node.js from [Node.js Official Website](https://nodejs.org/en/).

Check if Node.js and npm are correctly installed:

```bash
node -v
npm -v
```

### 3. **Install Dependencies**

Run the following command in your terminal to install the required dependencies:

```bash
npm install
```

This will install all necessary packages listed in the `package.json` file, including React, TensorFlow.js, and Firebase.

---

## 💻 Running the Application

### 4. **Start the Development Server**

Once the dependencies are installed, you can start the development server:

```bash
npm start
```

This command will launch the app on your local server. Open your browser and go to `http://localhost:3000` to view it.

### 5. **Building for Production**

To build the project for production (for deployment), run:

```bash
npm run build
```

This will create an optimized build of your app in the `build/` folder, ready to be deployed.

---

## 🔌 API Integration Setup

### Video Chat Integration (Jitsi API)

If you want to enable video chat features, ensure the Jitsi API is set up correctly. Update your `.env` file with the necessary Jitsi credentials.

```bash
REACT_APP_JITSI_API_KEY=your_jitsi_api_key
```

### Firebase Integration (for Real-time Chat)

Create a Firebase project and add your Firebase configuration in the `.env` file:

```bash
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_firebase_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
```

---

## 📂 Project Structure

```bash
MentorMatch/
├── public/
│   ├── index.html
│   └── logo.svg
├── src/
│   ├── assets/       # Images, Fonts, Icons
│   ├── components/   # Reusable UI components
│   ├── pages/        # Different page components like Dashboard, Profile, etc.
│   ├── utils/        # Helper functions and API calls
│   ├── App.js        # Main App component
│   └── index.js      # Entry point of the application
├── .env              # Environment variables for API keys
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

---

## 🌟 Screenshots

Here are some screenshots of MentorMatch in action:

<p align="center">
  <img src="src/screenshots/dashboard.png" alt="Dashboard" width="400">
  <img src="src/screenshots/chat.png" alt="Chat" width="400">
</p>

---

## 🛠️ Useful Commands

- **`npm install`**: Install project dependencies.
- **`npm start`**: Run the app in development mode.
- **`npm run build`**: Create a production build.
- **`npm test`**: Run tests for your app.

---

## 🤝 Contributing

We welcome contributions to MentorMatch! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information. You can also open a [Pull Request](https://github.com/your-username/MentorMatch/pulls).

---

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.



---



## Team MentorMatch

Our talented hackathon team consists of:

- **[Santosh Maurya](https://github.com/joker-pyc)** - Project Lead & Backend Developer & AI/ML Engineer

- **[Richa Pandey](https://github.com/)** - UI/UX Designer & Frontend Developer

- **[Rishabh Singh](https://github.com/rish2260)** - management & communication

- **[Harish Rajput](https://github.com/)** - Presentation & UI/UX Designer

This diverse team brings together a range of skills and expertise to create MentorMatch, an innovative platform for connecting mentors and mentees.


---

<p align="center">
  Made with ❤️ by the MentorMatch Team
</p>

---
