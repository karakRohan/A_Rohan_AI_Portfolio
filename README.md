🤖 Rohan AI — Personal AI Portfolio Agent

<p align="center">
  <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Groq-LLM-F55036?style=for-the-badge" alt="Groq" />
  <img src="https://img.shields.io/badge/MERN-Stack-000000?style=for-the-badge" alt="MERN" />
  <img src="https://img.shields.io/badge/Deployed-Vercel%20%7C%20Render-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deployment" />
</p>

<p align="center">
  <strong>An AI-powered personal portfolio that turns a traditional developer profile into an interactive conversational experience.</strong>
</p>

<p align="center">
  <a href="https://rohan-personal-ai-agent.vercel.app/">🌐 Live Portfolio</a> •
  <a href="https://github.com/karakRohan/Rohan_personal_AI_Agent">💻 Repository</a> •
  <a href="https://leetcode.com/u/Code_Rider42/">🧩 LeetCode</a>
</p>

✨ Overview

Rohan AI is a full-stack AI portfolio agent built to make a developer portfolio more interactive, informative, and recruiter-friendly.

Instead of relying only on static pages, visitors can ask questions and explore Rohan's professional profile through an AI interface. The application combines a React frontend, an Express backend, a Groq-powered LLM, a structured knowledge base, and live developer-data integrations.

What visitors can explore

💻 Technical skills and core technologies

🚀 Projects and key contributions

🤖 AI / LLM interests and work

🧠 Coding journey and problem-solving progress

🐙 GitHub profile and repository activity

🧩 LeetCode statistics and progress

🎓 Education

💼 Hiring and professional information

📄 Resume and contact information

🎯 Why This Project?

A traditional portfolio mostly shows information. Rohan AI is designed to communicate that information.

The core idea is simple:

Turn a portfolio website into an AI-powered digital representative.

This project explores how conversational AI, live APIs, and modern frontend engineering can work together to create a more engaging developer experience.

🏗️ System Architecture

flowchart TB
    U[👤 Visitor / Recruiter]
    FE[🌐 React + Vite Frontend]
    BE[⚙️ Node.js + Express Backend]
    KB[📚 knowledge.json\nProfile & Portfolio Knowledge]
    AI[🤖 Groq LLM\nopenai/gpt-oss-20b]
    GH[🐙 GitHub REST API]
    LC[🧩 LeetCode GraphQL API]
    RES[📄 Resume & Static Assets]

    U --> FE
    FE -->|Chat / Profile / GitHub / LeetCode| BE
    BE --> KB
    BE --> AI
    BE --> GH
    BE --> LC
    FE --> RES
    AI --> BE
    GH --> BE
    LC --> BE
    BE --> FE
    FE --> U

Request Flow

Visitor
   │
   ▼
React UI
   │
   ▼
Express API
   │
   ├──► knowledge.json ──► Known profile / FAQ answer
   │
   ├──► Groq LLM ────────► AI-generated portfolio response
   │
   ├──► GitHub API ──────► Live repositories / profile data
   │
   └──► LeetCode API ────► Coding statistics / progress
   │
   ▼
React UI
   │
   ▼
Visitor

🧠 AI Response Architecture

The backend is designed to keep portfolio answers grounded in the application's known data before using the LLM for broader conversational responses.

flowchart LR
    Q[❓ User Question]
    N[🧹 Normalize Input]
    P[🔒 Privacy / Safety Check]
    F[📌 FAQ / Knowledge Match]
    G[🤖 Groq LLM]
    R[💬 Final Response]

    Q --> N --> P --> F
    F -->|Matched| R
    F -->|No Match| G --> R

This approach helps the agent answer common portfolio questions directly while retaining an AI-powered conversational experience for other supported queries.

🚀 Key Features

🤖 AI Portfolio Chat

Ask natural-language questions about Rohan's professional profile, including:

Skills

Projects

Coding journey

AI / LLM interests

Education

Career goals

Hiring information

⚡ Quick AI Actions

Quick actions provide one-click access to important portfolio questions:

Ask About Skills

Show My Projects

Why Hire Rohan?

Coding Journey

🐙 Live GitHub Dashboard

The backend connects to GitHub to retrieve profile and repository information, allowing the portfolio to present developer activity instead of relying only on manually written static content.

🧩 Live LeetCode Dashboard

The application integrates with LeetCode data to display coding progress and problem-solving activity.

🚀 Projects Showcase

Current featured projects include:

Project

Stack

Focus

Doctor Appointment Web

MERN

Healthcare & appointment management

Text To Image Generator

MERN

AI-powered image generation

Video Calling Chat App

MERN + WebRTC

Real-time communication

📄 Interactive Resume

The portfolio includes resume access with a preview experience so recruiters can quickly review the profile.

💼 Hire Me Section

A dedicated hiring section provides professional contact options for recruiters, companies, and collaboration opportunities.

📱 Responsive UI

The interface is designed for desktop, laptop, tablet, and mobile screens.

🔐 Privacy-Aware Design

The AI experience is structured to avoid exposing private personal information and to focus on relevant professional/public profile details.

🛠️ Technology Stack

Frontend

Technology

Purpose

React.js

Component-based UI

Vite

Frontend development and build tooling

JavaScript

Application logic

HTML5

Page structure

CSS3

Responsive styling and animations

Lucide React

Interface icons

Backend

Technology

Purpose

Node.js

Server runtime

Express.js

REST API server

CORS

Cross-origin communication

OpenAI SDK

LLM client interface

Groq API

LLM inference

knowledge.json

Structured portfolio knowledge

External APIs

🐙 GitHub REST API

🧩 LeetCode GraphQL API

🤖 Groq OpenAI-compatible API

Deployment

▲ Vercel — Frontend

☁️ Render — Backend

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

⚙️ Local Development

1. Clone the repository

git clone https://github.com/karakRohan/Rohan_personal_AI_Agent.git

2. Enter the project

cd Rohan_personal_AI_Agent

3. Install frontend dependencies

cd frontend
npm install

4. Install backend dependencies

Open another terminal:

cd backend
npm install

5. Configure environment variables

Create backend/.env:

PORT=5000
GROQ_API_KEY=YOUR_GROQ_API_KEY
GROQ_MODEL=openai/gpt-oss-20b

⚠️ Security: Never commit your real API key to GitHub.

6. Start the backend

cd backend
npm start

Backend:

http://localhost:5000

7. Start the frontend

In a second terminal:

cd frontend
npm run dev

Frontend:

http://localhost:5173

🌐 Production Deployment

Frontend — Vercel

Deploy the frontend directory to Vercel.

Backend — Render

Deploy the backend directory as a Node.js Web Service on Render.

After the backend is deployed, update the frontend API base URL in:

frontend/src/main.jsx

Example:

const API = "https://your-backend-url.onrender.com";

The deployed frontend should always point to the production backend URL, not http://localhost:5000.

🔑 Environment Variables

The backend uses:

GROQ_API_KEY=your_api_key
GROQ_MODEL=openai/gpt-oss-20b
PORT=5000

Recommended .gitignore

node_modules/
.env
.env.local
.env.*.local
npm-debug.log*

Never expose API keys, tokens, or other secrets in source code, screenshots, commits, or README files.

🔌 Backend API Overview

Endpoint

Purpose

GET /api/health

Backend health and configuration status

GET /api/profile

Portfolio profile data

GET /api/github

GitHub profile and repository data

GET /api/leetcode

LeetCode statistics/data

POST /api/chat

AI portfolio conversation

Example health check

GET /api/health

Use this endpoint after deployment to verify that the backend is reachable.

🧩 Core Project Modules

flowchart LR
    A[Frontend UI]
    B[Portfolio Sections]
    C[AI Chat]
    D[GitHub Dashboard]
    E[LeetCode Dashboard]
    F[Resume]
    G[Hire Me]
    H[Backend API]
    I[Knowledge Base]
    J[External APIs]

    A --> B
    A --> C
    A --> D
    A --> E
    A --> F
    A --> G
    C --> H
    D --> H
    E --> H
    H --> I
    H --> J

🎯 Project Goals

This project explores the practical combination of:

Full Stack Web Development

Artificial Intelligence

Large Language Models

API Integration

Real-Time Developer Data

Conversational Interfaces

Interactive UI/UX

Portfolio Engineering

The broader goal is to build a portfolio that does more than display information — it should help communicate the developer behind it.

📈 Future Roadmap

Phase 1 — Core AI Portfolio ✅

AI portfolio chat

Portfolio knowledge base

GitHub integration

LeetCode integration

Resume access

Recruiter-focused sections

Phase 2 — Interaction & Discovery 🚧

Smarter follow-up questions

Deeper project exploration

Improved recruiter workflows

Better conversational navigation

Phase 3 — Intelligence & Analytics 🔮

Recruiter Mode

Advanced developer analytics

Interactive technology explorer

AI-powered project recommendations

Phase 4 — Premium Experience 🔮

🎙️ Voice interaction

🌐 Multilingual AI — English, বাংলা, हिन्दी

✨ Premium animations and transitions

👨‍💻 About Rohan

Rohan Karak is a Full Stack Developer and AI/ML enthusiast focused on building intelligent, scalable, and user-focused applications.

His technical interests and experience include:

MERN Stack • Python • AI/ML • LLMs • Generative AI • REST APIs • Data Structures & Algorithms

He is currently pursuing a B.Tech in Computer Science and Engineering and continuously works on software projects, problem-solving, and AI-powered applications.

🏆 Coding & Achievements

🔥 LeetCode 50 Days, 100 Days, 200 Days and 365 Days Coding Streak Badges

💻 430+ LeetCode Problems Solved

🧩 450+ GeeksforGeeks Problems Solved

🎯 GeeksforGeeks 100 Days Coding Challenge

🚀 Participated in College Hackathons at IEM Kolkata and NIT Rourkela

📜 Open Source GitHub Certificate — GDSC

📊 Current Developer Profile

┌──────────────────────────────────────────┐
│             ROHAN KARAK                   │
├──────────────────────────────────────────┤
│ Role        : Full Stack Developer       │
│ Focus       : AI / LLM / GenAI           │
│ Education   : B.Tech CSE                 │
│ GitHub      : karakRohan                 │
│ LeetCode    : Code_Rider42               │
│ Projects    : MERN + AI + WebRTC         │
└──────────────────────────────────────────┘

🌐 Connect With Rohan

Platform

Link

🐙 GitHub

https://github.com/karakRohan

💼 LinkedIn

https://www.linkedin.com/in/rohan-karak-9a0b78288/

🌐 Portfolio

https://rohanportfolio-eight.vercel.app/

🧩 LeetCode

https://leetcode.com/u/Code_Rider42/

📚 GeeksforGeeks

https://www.geeksforgeeks.org/profile/rohankarak

⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.

Your support helps motivate continued learning, experimentation, and development.

✨ Developer Motto

✨ Eat(). Sleep(). Code(). Repeat(). ✨

🙏 Trusting God's plan — every step, every decision 🕉️

<p align="center">
  Built with ❤️, React, Node.js, Groq, APIs, and a lot of curiosity.
</p>
