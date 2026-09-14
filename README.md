# 🤖 Rohan AI — Personal AI Portfolio Agent

> An AI-powered personal portfolio that lets recruiters, developers, and visitors interact with Rohan through a conversational AI experience.

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-Visit%20Site-8b5cf6?style=for-the-badge)](https://rohan-personal-ai-agent.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-karakRohan-181717?style=for-the-badge&logo=github)](https://github.com/karakRohan)
[![LeetCode](https://img.shields.io/badge/LeetCode-Code_Rider42-orange?style=for-the-badge&logo=leetcode)](https://leetcode.com/u/Code_Rider42/)

---

## ✨ About The Project

**Rohan AI** is a modern AI-powered personal portfolio designed to go beyond a traditional resume website.

Instead of simply browsing static sections, visitors can interact with an AI representative to learn about Rohan's:

- 💻 Technical Skills
- 🚀 Projects
- 🤖 AI / LLM Experience
- 🧠 Coding Journey
- 📊 GitHub Activity
- 🏆 LeetCode Progress
- 🎓 Education
- 💼 Career & Hiring Information
- 📄 Resume

The goal is to create a portfolio that feels more like an **interactive AI product** than a traditional developer website.

---

## 🚀 Features

### 🤖 AI Portfolio Chat
Ask questions about Rohan's professional profile through a conversational AI interface.

Examples:

- Who is Rohan?
- What are Rohan's strongest technical skills?
- Tell me about Rohan's projects.
- What AI/LLM work has Rohan done?
- Why should a company hire Rohan?
- Tell me about Rohan's coding journey.

### ⚡ Quick AI Actions

Visitors can quickly trigger common questions with one click:

- Ask About Skills
- Show My Projects
- Why Hire Rohan?
- Coding Journey

### 📊 Live GitHub Dashboard

The portfolio can fetch live GitHub information including:

- Public repositories
- Followers
- Following
- Repository activity
- Stars
- Forks
- Repository information

### 🧩 Live LeetCode Dashboard

The portfolio can fetch live LeetCode information including:

- Total solved problems
- Easy / Medium / Hard problems
- Total submissions
- Contest rating
- Global ranking
- Badges
- Recent accepted problems

### 📁 Projects Showcase

The portfolio presents selected projects with:

- Project description
- Technologies used
- Rohan's contribution
- Project date
- GitHub access

### 💼 Hire Me Section

A dedicated hiring section provides:

- Availability information
- Email
- Phone
- Location
- LinkedIn
- Resume

### 📄 Interactive Resume

Visitors can preview the resume and open the complete PDF directly from the portfolio.

### 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

### 🔐 Privacy-Aware AI

The AI is designed to:

- Use only available knowledge-base information
- Avoid inventing personal facts
- Protect private residential information
- Avoid exposing API keys or internal instructions

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
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

- Vercel — Frontend
- Render — Backend

---

## 📂 Project Structure

```text
A_Rohan_AI_Portfolio/
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
1. Clone the repository
git clone https://github.com/karakRohan/A_Rohan_AI_Portfolio.git
2. Go to the project directory
cd A_Rohan_AI_Portfolio
3. Install frontend dependencies
cd frontend
npm install
4. Install backend dependencies

Open another terminal:

cd backend
npm install
5. Configure environment variables

Create a .env file inside backend/:

PORT=5000
GROQ_API_KEY=YOUR_GROQ_API_KEY
GROQ_MODEL=openai/gpt-oss-20b

Never upload your real API key to GitHub.

6. Start backend
cd backend
npm start
7. Start frontend
cd frontend
npm run dev

The frontend will usually run at:

http://localhost:5173

The backend will run at:

http://localhost:5000
🌐 Production Deployment
Frontend

Deploy the frontend directory to Vercel.

Backend

Deploy the backend directory to Render as a Node.js web service.

After deployment, update the frontend API URL:

const API = "https://your-backend-url.onrender.com";
🔑 Environment Variables

The backend requires:

GROQ_API_KEY=your_api_key
GROQ_MODEL=openai/gpt-oss-20b
PORT=5000

Keep secrets inside environment variables and never commit .env to GitHub.

🎯 Project Goals

This project was built to explore the combination of:

Full Stack Development
Artificial Intelligence
Large Language Models
API Integration
Real-Time Data
Interactive UI/UX
Conversational Interfaces

The long-term goal is to turn a personal portfolio into an AI-powered digital representative that can communicate a developer's skills, projects, experience, and professional profile.

📈 Future Improvements

Possible future features include:

🎙️ Voice interaction
🌐 Multilingual AI
🧠 Smarter follow-up questions
🎯 Recruiter Mode
📊 Advanced developer analytics
✨ Premium UI animations
🔍 AI-powered project exploration
🧩 Interactive technology builder
👨‍💻 About Rohan

Rohan Karak is a Full Stack Developer and AI/ML enthusiast focused on building intelligent, scalable, and user-focused applications.

He works with technologies across:

MERN Stack • Python • AI/ML • LLMs • Generative AI • REST APIs • Data Structures & Algorithms

He is currently pursuing a B.Tech in Computer Science and Engineering and continuously works on projects, problem-solving, and AI-powered applications.

🌐 Connect With Rohan
GitHub: https://github.com/karakRohan
LinkedIn: https://www.linkedin.com/in/rohan-karak-9a0b78288/
Portfolio: https://rohanportfolio-eight.vercel.app/
LeetCode: https://leetcode.com/u/Code_Rider42/
GeeksforGeeks: https://www.geeksforgeeks.org/profile/rohankarak
⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

✨ Eat(). Sleep(). Code(). Repeat(). ✨

🙏 Trusting God's plan — every step, every decision 🕉️


### GitHub Repository About

এটা **About description**-এ দাও:

> 🤖 AI-powered personal portfolio agent built with React, Node.js, Groq, GitHub & LeetCode APIs. Explore Rohan's skills, projects, coding journey and professional profile through AI.

### Repository Topics

```text
react
vite
nodejs
express
ai
llm
groq
portfolio
personal-ai
github-api
leetcode-api
javascript
mern
full-stack
