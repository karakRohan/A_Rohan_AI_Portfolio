# 🤖 Rohan AI — Personal AI Portfolio Agent

> An AI-powered personal portfolio that turns a traditional developer profile into an interactive conversational experience.

## 🌐 Live Portfolio

https://rohan-personal-ai-agent.vercel.app/

## 📖 About The Project

Rohan AI is a full-stack AI-powered personal portfolio agent built to make a developer portfolio more interactive, informative, and recruiter-friendly.

Visitors can interact with the AI assistant and learn about Rohan's:

- Technical Skills
- Projects
- AI / LLM Work
- Coding Journey
- GitHub Activity
- LeetCode Progress
- Education
- Career Information
- Resume

The main goal of this project is to transform a traditional portfolio website into an AI-powered digital representative.

---

## ✨ Features

### 🤖 AI Portfolio Chat
Visitors can ask natural-language questions about Rohan's professional profile.

### ⚡ Quick AI Actions
- Ask About Skills
- Show My Projects
- Why Hire Rohan?
- Coding Journey

### 🐙 GitHub Integration
Fetches GitHub profile and repository information using the GitHub API.

### 🧩 LeetCode Integration
Displays LeetCode coding progress and statistics.

### 🚀 Projects Showcase
Showcases Rohan's major projects with technologies, descriptions, and contributions.

### 📄 Interactive Resume
Visitors can preview and access the resume directly from the portfolio.

### 💼 Hire Me
A dedicated section for recruiters, companies, and collaboration opportunities.

### 📱 Responsive Design
Works across desktop, laptop, tablet, and mobile devices.

### 🔐 Privacy-Aware AI
The AI focuses on relevant professional/public information and avoids exposing private personal information.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Lucide React

### Backend
- Node.js
- Express.js
- CORS
- OpenAI SDK
- Groq API

### APIs
- Groq API
- GitHub REST API
- LeetCode GraphQL API

### Deployment
- Vercel
- Render

---

## 📂 Project Structure

```text
Rohan_personal_AI_Agent/
│
├── backend/
│   ├── .env
│   ├── .env.example
│   ├── knowledge.json
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   ├── profile.jpg
│   │   ├── resume.pdf
│   │   └── resume-preview.png
│   │
│   ├── src/
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
└── README.md
⚙️ Local Setup
1. Clone the Repository
git clone https://github.com/karakRohan/Rohan_personal_AI_Agent.git
2. Go to the Project Directory
cd Rohan_personal_AI_Agent
3. Install Frontend Dependencies
cd frontend
npm install
4. Install Backend Dependencies

Open another terminal:

cd backend
npm install
5. Configure Environment Variables

Create a .env file inside the backend folder:

PORT=5000
GROQ_API_KEY=YOUR_GROQ_API_KEY
GROQ_MODEL=openai/gpt-oss-20b

Never upload your real API key to GitHub.

6. Start the Backend
cd backend
npm start

Backend:

http://localhost:5000
7. Start the Frontend

Open another terminal:

cd frontend
npm run dev

Frontend:

http://localhost:5173
🌐 Production Deployment
Frontend

The frontend is deployed using Vercel.

Backend

The backend is deployed using Render.

After deploying the backend, update the API URL in:

frontend/src/main.jsx

Example:

const API = "https://your-backend-url.onrender.com";

For production, do not use:

const API = "http://localhost:5000";
🔑 Environment Variables

The backend requires:

GROQ_API_KEY=your_api_key
GROQ_MODEL=openai/gpt-oss-20b
PORT=5000

Keep your .env file private and never commit API keys or secrets to GitHub.

🔌 Backend API
Endpoint	Method	Description
/api/health	GET	Backend health check
/api/profile	GET	Portfolio profile information
/api/github	GET	GitHub profile and repository data
/api/leetcode	GET	LeetCode statistics
/api/chat	POST	AI portfolio chat
🎯 Project Goals

This project was created to explore:

Full Stack Development
Artificial Intelligence
Large Language Models
API Integration
Real-Time Data
Conversational Interfaces
Interactive UI/UX

The long-term goal is to create an AI-powered personal portfolio that can communicate a developer's skills, projects, coding journey, and professional profile.

📈 Future Improvements
🎙️ Voice Interaction
🌐 Multilingual AI
🧠 Smarter Follow-up Questions
🎯 Recruiter Mode
📊 Advanced Developer Analytics
✨ Premium Animations
🔍 AI-Powered Project Exploration
🧩 Interactive Technology Builder
👨‍💻 About Rohan

Rohan Karak is a Full Stack Developer and AI/ML enthusiast focused on building intelligent, scalable, and user-focused applications.

Technical Interests
MERN Stack
Python
AI / ML
LLMs
Generative AI
REST APIs
Data Structures & Algorithms

He is currently pursuing a B.Tech in Computer Science and Engineering and continuously works on software projects, problem-solving, and AI-powered applications.

🏆 Coding & Achievements
LeetCode 50 Days Coding Streak
LeetCode 100 Days Coding Streak
LeetCode 200 Days Coding Streak
LeetCode 365 Days Coding Streak
430+ LeetCode Problems Solved
450+ GeeksforGeeks Problems Solved
GeeksforGeeks 100 Days Coding Challenge
College Hackathon — IEM Kolkata
College Hackathon — NIT Rourkela
Open Source GitHub Certificate — GDSC
🌐 Connect With Rohan

GitHub
https://github.com/karakRohan

LinkedIn
https://www.linkedin.com/in/rohan-karak-9a0b78288/

Portfolio
https://rohanportfolio-eight.vercel.app/

LeetCode
https://leetcode.com/u/Code_Rider42/

GeeksforGeeks
https://www.geeksforgeeks.org/profile/rohankarak

⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

✨ Eat(). Sleep(). Code(). Repeat(). ✨
🙏 Trusting God's plan — every step, every decision 🕉️
<p align="center"> Built with ❤️ by Rohan Karak </p> ```
