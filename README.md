# 🤖 Rohan AI — Personal AI Portfolio Agent

> An AI-powered personal portfolio that allows recruiters, developers, and visitors to interact with Rohan through an intelligent conversational experience.

🌐 **Live Portfolio:** https://rohan-personal-ai-agent.vercel.app/

💻 **GitHub:** https://github.com/karakRohan/Rohan_personal_AI_Agent


---

## ✨ About

Rohan AI is a personal AI portfolio built to make a developer portfolio more interactive and engaging.

Instead of only browsing a traditional portfolio, visitors can ask questions and explore Rohan's:

- Technical Skills
- Projects
- AI / LLM Interests
- Coding Journey
- GitHub Activity
- LeetCode Progress
- Education
- Resume
- Career & Hiring Information

The goal is to create a portfolio that feels more like an interactive AI product than a traditional website.

---

## 🚀 Features

### 🤖 AI Portfolio Chat
Ask questions about Rohan's skills, projects, coding journey, experience, and professional profile.

### ⚡ Quick AI Actions
Quick buttons for common questions such as:

- Ask About Skills
- Show My Projects
- Why Hire Rohan?
- Coding Journey

### 🐙 GitHub Integration
Fetches GitHub profile and repository information through the GitHub API.

### 🧩 LeetCode Integration
Displays LeetCode coding progress and problem-solving statistics.

### 🚀 Projects Showcase
Showcases Rohan's major projects with technologies, descriptions, and contributions.

### 📄 Interactive Resume
Visitors can preview and access the resume directly from the portfolio.

### 💼 Hire Me
A dedicated section for recruiters and companies to connect with Rohan.

### 📱 Responsive Design
Works across desktop, laptop, tablet, and mobile devices.

### 🔐 Privacy-Aware AI
The AI focuses on relevant professional and public information while protecting private personal details.

---

## 🏗️ Architecture

```text
                     ┌───────────────────┐
                     │   👤 Visitor      │
                     │    / Recruiter    │
                     └─────────┬─────────┘
                               │
                               ▼
                     ┌───────────────────┐
                     │  ⚛️ React + Vite │
                     │     Frontend      │
                     └─────────┬─────────┘
                               │
                               ▼
                     ┌───────────────────┐
                     │ ⚙️ Node + Express│
                     │      Backend      │
                     └───────┬───────────┘
                             │
             ┌───────────────┼────────────────┐
             │               │                │
             ▼               ▼                ▼
      ┌────────────┐  ┌────────────┐  ┌────────────┐
      │ 📚 Knowledge│  │ 🤖 Groq    │  │ 🌐 APIs    │
      │    Base     │  │    LLM     │  │            │
      └────────────┘  └────────────┘  └──────┬─────┘
                                             │
                               ┌─────────────┴─────────────┐
                               ▼                           ▼
                         🐙 GitHub API              🧩 LeetCode API
🛠️ Tech Stack
Frontend
React.js
Vite
JavaScript
HTML5
CSS3
Lucide React
Backend
Node.js
Express.js
CORS
OpenAI SDK
Groq API
APIs
GitHub REST API
LeetCode GraphQL API
Groq API
Deployment
Vercel — Frontend
Render — Backend
📂 Project Structure
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
⚙️ Run Locally
1. Clone the repository
git clone https://github.com/karakRohan/Rohan_personal_AI_Agent.git
2. Open the project
cd Rohan_personal_AI_Agent
3. Install frontend dependencies
cd frontend
npm install
4. Install backend dependencies

Open another terminal:

cd backend
npm install
5. Add environment variables

Create a .env file inside backend/.

PORT=5000
GROQ_API_KEY=YOUR_GROQ_API_KEY
GROQ_MODEL=openai/gpt-oss-20b
6. Start backend
cd backend
npm start

Backend:

http://localhost:5000
7. Start frontend

In another terminal:

cd frontend
npm run dev

Frontend:

http://localhost:5173
🌐 Deployment
Frontend

Deploy the frontend folder to Vercel.

Backend

Deploy the backend folder to Render as a Node.js Web Service.

After deploying the backend, update the API URL in:

frontend/src/main.jsx

Example:

const API = "https://your-backend-url.onrender.com";

Do not use http://localhost:5000 in production.

🔑 Environment Variables
PORT=5000
GROQ_API_KEY=your_api_key
GROQ_MODEL=openai/gpt-oss-20b

⚠️ Never commit .env or expose your API key publicly.

💻 Projects
🏥 Doctor Appointment Web

Technology: MERN Stack

A healthcare platform designed for patients, doctors, and administrators with appointment scheduling, authentication, and role-based access.

🎨 Text To Image Generator

Technology: MERN Stack

An AI-powered application that converts text prompts into images using an image generation API.

📹 Video Calling Chat App

Technology: MERN + WebRTC

A real-time communication application supporting video calling, chat, authentication, and dynamic rooms.

🏆 Achievements
🔥 LeetCode 50 Days Coding Streak
🔥 LeetCode 100 Days Coding Streak
🔥 LeetCode 200 Days Coding Streak
🔥 LeetCode 365 Days Coding Streak
💻 430+ LeetCode Problems Solved
🧩 450+ GeeksforGeeks Problems Solved
🎯 GeeksforGeeks 100 Days Coding Challenge
🚀 Participated in College Hackathons
📜 Open Source GitHub Certificate — GDSC
👨‍💻 About Rohan

Rohan Karak is a Full Stack Developer and AI/ML enthusiast interested in building intelligent, scalable, and user-focused applications.

Skills
C • C++ • Java • Python
React.js • Node.js • Express.js
MongoDB • MySQL • PostgreSQL
JavaScript • TypeScript
HTML5 • CSS3
AI / ML • LLMs • Generative AI
Data Structures & Algorithms
Git • GitHub • AWS

Currently pursuing B.Tech in Computer Science and Engineering.

🌐 Connect With Me

🐙 GitHub:
https://github.com/karakRohan

💼 LinkedIn:
https://www.linkedin.com/in/rohan-karak-9a0b78288/

🌐 Portfolio:
https://rohanportfolio-eight.vercel.app/

🧩 LeetCode:
https://leetcode.com/u/Code_Rider42/

📚 GeeksforGeeks:
https://www.geeksforgeeks.org/profile/rohankarak

📈 Future Improvements
🎙️ Voice Interaction
🌐 Multilingual AI
🎯 Recruiter Mode
🧠 Smarter AI Follow-ups
📊 Developer Analytics
✨ Premium Animations
🔍 AI Project Exploration
⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

✨ Eat(). Sleep(). Code(). Repeat(). ✨
🙏 Trusting God's plan — every step, every decision 🕉️
