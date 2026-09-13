import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Bot,
  Github,
  Linkedin,
  Code2,
  Sparkles,
  Send,
  UserRound,
  BriefcaseBusiness,
  BrainCircuit,
  FileText,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import "./styles.css";

const API = "http://localhost:5000";

const suggestions = [
  "Who is Rohan?",
  "What are Rohan's strongest technical skills?",
  "Tell me about Rohan's projects.",
  "What AI/LLM work has Rohan done?",
  "Tell me about Rohan's coding journey.",
  "Why should a company hire Rohan?",
];

// ======================================================
// RENDER AI MESSAGE
// Removes **bold** markers and makes URLs clickable
// ======================================================

function renderMessage(text) {
  const cleanText = String(text || "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/<br\s*\/?>/gi, "\n");

  // Convert table-style AI answers into readable bullet paragraphs.
  const rawLines = cleanText.split(/\r?\n/);
  const lines = [];

  for (const rawLine of rawLines) {
    const line = rawLine.trim();

    if (!line || /^[|\s:-]+$/.test(line)) {
      continue;
    }

    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line
        .slice(1, -1)
        .split("|")
        .map((cell) => cell.trim())
        .filter(Boolean);

      if (cells.length >= 2) {
        lines.push(`• ${cells[0]}: ${cells.slice(1).join(" — ")}`);
        continue;
      }
    }

    lines.push(line);
  }

  function renderLinks(line, lineIndex) {
    const markdownRegex =
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = markdownRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }

      parts.push(
        <a
          key={`markdown-${lineIndex}-${match.index}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-link"
          onClick={(e) => e.stopPropagation()}
        >
          {match[1]}
          <ExternalLink size={12} />
        </a>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex));
    }

    return parts.flatMap((part, partIndex) => {
      if (typeof part !== "string") {
        return part;
      }

      const urlRegex = /(https?:\/\/[^\s<]+)/g;
      const urlParts = part.split(urlRegex);

      return urlParts.map((urlPart, urlPartIndex) => {
        if (/^https?:\/\//i.test(urlPart)) {
          const cleanUrl = urlPart.replace(
            /[.,;:!?)}\]]+$/,
            ""
          );

          return (
            <a
              key={`${lineIndex}-${partIndex}-${urlPartIndex}`}
              href={cleanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-link"
              onClick={(e) => e.stopPropagation()}
            >
              {cleanUrl}
              <ExternalLink size={12} />
            </a>
          );
        }

        return (
          <React.Fragment
            key={`${lineIndex}-${partIndex}-${urlPartIndex}`}
          >
            {urlPart}
          </React.Fragment>
        );
      });
    });
  }

  return (
    <div style={{ width: "100%" }}>
      {lines.map((line, index) => {
        const bulletMatch = line.match(/^•\s*(.*?)(?::\s*)(.*)$/);

        if (bulletMatch) {
          return (
            <div
              key={index}
              style={{
                margin: "0 0 16px",
                padding: "13px 16px",
                borderLeft: "3px solid #8b7cf6",
                borderBottom: "1px solid #2b2b34",
                borderRadius: "0 10px 10px 0",
                background: "rgba(255,255,255,.018)",
                color: "#c7c7d1",
                fontSize: "14px",
                lineHeight: 1.8,
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  color: "#a99cff",
                  fontWeight: 750,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                • {bulletMatch[1]}:
              </span>{" "}
              {renderLinks(bulletMatch[2], index)}
            </div>
          );
        }

        return (
          <p
            key={index}
            style={{
              margin: "0 0 16px",
              color: "#c7c7d1",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            {renderLinks(line, index)}
          </p>
        );
      })}
    </div>
  );
}


// ======================================================
// APP
// ======================================================

function App() {
  const [profile, setProfile] = useState(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Rohan's AI agent. Ask me anything about his skills, projects, coding journey, experience or background.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);


  // ====================================================
  // LOAD PROFILE
  // ====================================================

  useEffect(() => {
    fetch(`${API}/api/profile`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.error(
          "Profile loading error:",
          error
        );
      });
  }, []);


  // ====================================================
  // SEND MESSAGE
  // ====================================================

  async function sendMessage(text = input) {
    const message = text.trim();

    if (!message || loading) return;

    // Show live LeetCode dashboard when the user asks about LeetCode
    if (message.toLowerCase().includes("leetcode")) {
      const nextMessages = [
        ...messages,
        {
          role: "user",
          content: message,
        },
      ];

      setMessages(nextMessages);
      setInput("");
      setLoading(true);

      try {
        const response = await fetch(`${API}/api/leetcode`);
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.error || "Unable to fetch live LeetCode data."
          );
        }

        setMessages([
          ...nextMessages,
          {
            role: "assistant",
            type: "leetcode",
            data,
            content: "Here is Rohan's live LeetCode profile.",
          },
        ]);
      } catch (error) {
        console.error("LeetCode loading error:", error);

        setMessages([
          ...nextMessages,
          {
            role: "assistant",
            content:
              error?.message ||
              "I can't load the live LeetCode profile right now.",
          },
        ]);
      } finally {
        setLoading(false);
      }

      return;
    }

    // Show Resume preview directly when the user asks for the resume
    if (message.toLowerCase().includes("resume")) {
      const nextMessages = [
        ...messages,
        {
          role: "user",
          content: message,
        },
      ];

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          type: "resume",
          content: "Here is Rohan's Resume",
        },
      ]);

      setInput("");
      return;
    }

    const nextMessages = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API}/api/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            history: nextMessages
              .slice(-8)
              .map(({ role, content }) => ({
                role,
                content,
              })),
          }),
        }
      );

      const data = await response.json();

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            data.answer ||
            data.error ||
            "Something went wrong.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "I can't reach the AI server. Make sure the backend is running on port 5000.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }


  // ====================================================
  // PROFILE NAME
  // ====================================================

  const name =
    profile?.name || "Rohan Karak";


  // ====================================================
  // UI
  // ====================================================

  return (
    <div className="app">

      <style>{`
        @keyframes livePulse {
          0% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(67, 209, 122, 0.7);
          }
          70% {
            transform: scale(1.15);
            opacity: 0.75;
            box-shadow: 0 0 0 7px rgba(67, 209, 122, 0);
          }
          100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(67, 209, 122, 0);
          }
        }
      `}</style>

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />


      {/* ================================================
          HEADER
      ================================================= */}

      <header className="topbar">

        <div className="brand">

          <div className="logo">
            <Bot size={22} />
          </div>

          <div>
            <strong>{name}</strong>
            <span>Personal AI Agent</span>
          </div>

        </div>


        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </header>


      {/* ================================================
          MAIN LAYOUT
      ================================================= */}

      <div className="layout">


        {/* ==============================================
            SIDEBAR
        =============================================== */}

        <aside
          className={
            open
              ? "sidebar open"
              : "sidebar"
          }
        >

          {/* PROFILE */}

          <div className="profile-card">

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  marginBottom: "2px",
                  padding: "6px 12px",
                  border: "1px solid rgba(67, 209, 122, 0.35)",
                  borderRadius: "999px",
                  background: "rgba(67, 209, 122, 0.08)",
                  color: "#43d17a",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#43d17a",
                    animation: "livePulse 1.5s infinite",
                  }}
                />
                LIVE
              </div>
              <div className="avatar">
                <img
                  src="/profile.jpg"
                  alt="Rohan Karak"
                />
              </div>

              <div>
                <h2 style={{ margin: 0 }}>{name}</h2>

                <p style={{ margin: "6px 0 0" }}>
                  MERN Full Stack Developer &amp; AI/ML Enthusiast
                </p>
              </div>
            </div>

            <div className="status">
              <i />
              Available for opportunities
            </div>



          </div>


          {/* EXPLORE */}

          <nav>

            <div className="nav-label">
              EXPLORE
            </div>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setAboutOpen(true);
                setOpen(false);

                setTimeout(() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 50);
              }}
            >
              <UserRound size={17} />
              About
            </a>

            <a
              href="https://github.com/karakRohan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={17} />
              Projects
              <ExternalLink size={13} />
            </a>

            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                setSkillsOpen(true);
                setOpen(false);

                setTimeout(() => {
                  document
                    .getElementById("skills")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 50);
              }}
            >
              <BrainCircuit size={17} />
              Skills
            </a>

            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                setExperienceOpen(true);
                setOpen(false);

                setTimeout(() => {
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 50);
              }}
            >
              <BriefcaseBusiness size={17} />
              Experience
            </a>


            {/* ================================
                RESUME
            ================================= */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={17} />
              Resume
              <ExternalLink size={13} />
            </a>

          </nav>


          {/* SOCIAL LINKS */}

          <div className="links">

            <div className="nav-label">
              PROFILES
            </div>


            {/* GitHub */}

            {profile?.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} />
                GitHub
                <ExternalLink size={13} />
              </a>
            )}


            {/* LinkedIn */}

            {profile?.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
                <ExternalLink size={13} />
              </a>
            )}


            {/* Portfolio */}

            {profile?.portfolio && (
              <a
                href={profile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={17} />
                Portfolio
                <ExternalLink size={13} />
              </a>
            )}


            {/* LeetCode */}

            {profile?.leetcode && (
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={17} />
                LeetCode
                <ExternalLink size={13} />
              </a>
            )}

          </div>

        </aside>


        {/* ==============================================
            CHAT
        =============================================== */}

        <main className="chat">


          {/* HERO */}

          <section className="hero">

            <div className="hero-icon">
              <Sparkles size={25} />
            </div>

            <p className="eyebrow">
              ASK ROHAN AI
            </p>

            <h1>
              Everything about Rohan,
              <br />
              <em>in one conversation.</em>
            </h1>

            <p className="sub">
              Explore his work, skills, projects,
              coding journey and professional
              background through his personal AI
              representative.
            </p>

          </section>


          {/* ============================================
              ABOUT ME
          ============================================= */}

          {aboutOpen && (
          <section id="about" className="about-section">
            <div className="about-header">
              <p className="about-eyebrow">ABOUT ME</p>
              <h2>
                About <span>Rohan</span>
              </h2>
            </div>

            <div className="about-content">
              <p>
                I’m a passionate <strong>Full Stack Developer and AI/ML enthusiast</strong> with a strong interest in building intelligent, scalable, and user-focused applications. I enjoy transforming ideas into real-world products using modern technologies across <strong>Web Development, Artificial Intelligence, Machine Learning, and Large Language Models (LLMs)</strong>.
              </p>

              <p>
                I have hands-on experience with technologies such as <strong>React.js, Node.js, Express.js, MongoDB, Python, JavaScript, AI APIs, and Machine Learning</strong>. I’m particularly interested in developing AI-powered applications, integrating intelligent models into web platforms, and solving real-world problems through data-driven solutions.
              </p>

              <p>
                I’m a continuous learner who enjoys <strong>problem-solving, exploring emerging technologies, building projects, and improving my technical skills</strong>. My goal is to grow as a strong <strong>Full Stack Developer &amp; AI/ML Engineer</strong> and contribute to innovative products that create meaningful real-world impact.
              </p>

              <p className="about-highlight">🚀 Build. Learn. Solve. Innovate.</p>
              <p className="about-quote">✨ “Eat(). Sleep(). Code(). Repeat().” ✨</p>
              <p className="about-quote">✨ 🙏 Trusting God’s plan — every step, every decision 🕉️ ✨</p>
            </div>
          </section>
          )}


          {skillsOpen && (
            <section id="skills" className="skills-section">
              <div className="skills-header">
                <p className="skills-eyebrow">TECHNICAL SKILLS</p>
                <h2>
                  Skills <span>&amp; Expertise</span>
                </h2>
              </div>

              <div className="skills-grid">
                <div className="skill-card">
                  <h3>Frontend Development</h3>
                  <ul className="skill-list" style={{ margin: 0, paddingLeft: "20px", color: "#b9b9c4", lineHeight: 1.9 }}>
                    {[
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                      "React.js",
                      "Tailwind CSS",
                      "Bootstrap",
                      "Responsive Web Design",
                    ].map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>⚙️ Backend Development</h3>
                  <ul className="skill-list" style={{ margin: 0, paddingLeft: "20px", color: "#b9b9c4", lineHeight: 1.9 }}>
                    {[
                      "Node.js",
                      "Express.js",
                      "REST APIs",
                      "JWT Authentication",
                      "API Integration",
                    ].map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>🗄️ Database</h3>
                  <ul className="skill-list" style={{ margin: 0, paddingLeft: "20px", color: "#b9b9c4", lineHeight: 1.9 }}>
                    {["MongoDB", "MySQL", "Mongoose"].map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>🤖 AI / Machine Learning</h3>
                  <ul className="skill-list" style={{ margin: 0, paddingLeft: "20px", color: "#b9b9c4", lineHeight: 1.9 }}>
                    {[
                      "Python",
                      "Machine Learning",
                      "Artificial Intelligence",
                      "LLMs",
                      "Generative AI",
                      "AI API Integration",
                      "Prompt Engineering",
                      "Data Processing",
                      "Model Integration",
                    ].map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>🧠 Programming &amp; Problem Solving</h3>
                  <ul className="skill-list" style={{ margin: 0, paddingLeft: "20px", color: "#b9b9c4", lineHeight: 1.9 }}>
                    {[
                      "Python",
                      "JavaScript",
                      "Data Structures & Algorithms",
                      "Object-Oriented Programming",
                      "Problem Solving",
                      "LeetCode",
                    ].map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>🛠️ Tools &amp; Technologies</h3>
                  <ul className="skill-list" style={{ margin: 0, paddingLeft: "20px", color: "#b9b9c4", lineHeight: 1.9 }}>
                    {["Git", "GitHub", "VS Code", "Postman", "npm", "Vite"].map(
                      (skill) => (
                        <li key={skill}>{skill}</li>
                      )
                    )}
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>☁️ Deployment &amp; Other</h3>
                  <ul className="skill-list" style={{ margin: 0, paddingLeft: "20px", color: "#b9b9c4", lineHeight: 1.9 }}>
                    {[
                      "GitHub",
                      "Vercel",
                      "Render",
                      "Environment Variables",
                      "API Deployment",
                    ].map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}


          {experienceOpen && (
            <section
              id="experience"
              className="experience-section"
              style={{
                width: "100%",
                margin: "40px 0 70px",
                padding: "30px",
                border: "1px solid #24242c",
                borderRadius: "22px",
                background:
                  "radial-gradient(circle at top right, rgba(139, 92, 246, 0.10), transparent 38%), linear-gradient(145deg, rgba(18, 18, 24, 0.98), rgba(12, 12, 17, 0.98))",
                boxShadow: "0 18px 55px rgba(0, 0, 0, 0.24)",
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#8b7cf6",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                  }}
                >
                  EXPERIENCE
                </p>

                <h2
                  style={{
                    margin: 0,
                    color: "#f7f7fa",
                    fontSize: "clamp(28px, 4vw, 40px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.035em",
                  }}
                >
                  Experience
                </h2>
              </div>

              <div
                style={{
                  color: "#b9b9c4",
                  fontSize: "14px",
                  lineHeight: 1.85,
                }}
              >
                <h3
                  style={{
                    margin: "0 0 16px",
                    color: "#f1f1f5",
                    fontSize: "19px",
                  }}
                >
                  Fresher | Full Stack Developer &amp; AI/ML Enthusiast
                </h3>

                <p style={{ margin: "0 0 18px" }}>
                  As a passionate fresher, I have been continuously developing
                  my skills through <strong>hands-on projects, problem-solving,
                  and self-learning</strong> in Full Stack Development,
                  Artificial Intelligence, and Machine Learning.
                </p>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "22px",
                    lineHeight: 1.9,
                  }}
                >
                  <li>
                    Built multiple <strong>full-stack web applications</strong>{" "}
                    using React.js, Node.js, Express.js, and MongoDB.
                  </li>
                  <li>
                    Developed and integrated <strong>RESTful APIs</strong> for
                    real-world application requirements.
                  </li>
                  <li>
                    Worked with <strong>Python, Artificial Intelligence,
                    Machine Learning, LLMs, and AI APIs</strong> to explore and
                    build intelligent applications.
                  </li>
                  <li>
                    Practiced <strong>Data Structures &amp; Algorithms</strong>{" "}
                    and regularly solved programming problems to strengthen
                    problem-solving skills.
                  </li>
                  <li>
                    Used <strong>Git and GitHub</strong> for version control,
                    project management, and maintaining development workflows.
                  </li>
                  <li>
                    Focused on writing clean, reusable, and maintainable code
                    while continuously improving application performance and
                    user experience.
                  </li>
                  <li>
                    Learned new technologies independently and applied them
                    through practical projects.
                  </li>
                  <li>
                    Currently seeking an opportunity to begin my professional
                    career where I can <strong>learn, contribute, grow, and
                    solve real-world problems</strong>.
                  </li>
                </ul>

                <div
                  style={{
                    marginTop: "26px",
                    padding: "16px 18px",
                    border: "1px solid #2a2935",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,.025)",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 9px",
                      color: "#f1f1f5",
                      fontSize: "15px",
                    }}
                  >
                    Career Focus
                  </h3>

                  <p style={{ margin: 0, color: "#ddd9ff" }}>
                    <strong>
                      Full Stack Development • AI/ML • Generative AI • LLMs •
                      Software Development • Problem Solving
                    </strong>
                  </p>
                </div>
              </div>
            </section>
          )}


          {/* ============================================
              MESSAGES
          ============================================= */}

          <div className="messages">

            {messages.map(
              (message, index) => (

                <div
                  className={
                    message.role === "user"
                      ? "msg user"
                      : "msg"
                  }
                  key={index}
                >

                  {message.role ===
                    "assistant" && (
                    <div className="mini-logo">
                      <Bot size={15} />
                    </div>
                  )}


                  <div className="bubble">

                    {message.type === "leetcode" ? (
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "760px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                        }}
                      >
                        <div
                          style={{
                            padding: "18px",
                            border: "1px solid #2b2b34",
                            borderRadius: "16px",
                            background:
                              "linear-gradient(145deg, rgba(18,18,24,.98), rgba(13,13,18,.98))",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "16px",
                              flexWrap: "wrap",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontSize: "18px",
                                  fontWeight: 700,
                                  color: "#fff",
                                }}
                              >
                                🧑‍💻{" "}
                                {message.data?.profile?.realName ||
                                  "Rohan Karak"}
                              </div>

                              <div
                                style={{
                                  marginTop: "4px",
                                  color: "#9696a3",
                                  fontSize: "13px",
                                }}
                              >
                                @{message.data?.username}
                              </div>
                            </div>

                            <a
                              href={message.data?.profileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chat-link"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View LeetCode Profile{" "}
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>

                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(4, minmax(0, 1fr))",
                            gap: "10px",
                          }}
                        >
                          {[
                            [
                              "Total Solved",
                              message.data?.problems?.totalSolved ?? 0,
                              "#ffffff",
                            ],
                            [
                              "Easy",
                              message.data?.problems?.easy ?? 0,
                              "#43d17a",
                            ],
                            [
                              "Medium",
                              message.data?.problems?.medium ?? 0,
                              "#f5b642",
                            ],
                            [
                              "Hard",
                              message.data?.problems?.hard ?? 0,
                              "#ff5b67",
                            ],
                          ].map(([label, value, color]) => (
                            <div
                              key={label}
                              style={{
                                padding: "16px 12px",
                                border: "1px solid #292932",
                                borderRadius: "14px",
                                background: "#111116",
                                textAlign: "center",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "25px",
                                  fontWeight: 750,
                                  color,
                                }}
                              >
                                {value}
                              </div>

                              <div
                                style={{
                                  marginTop: "5px",
                                  fontSize: "11px",
                                  color: "#858591",
                                }}
                              >
                                {label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(3, minmax(0, 1fr))",
                            gap: "10px",
                          }}
                        >
                          <div
                            style={{
                              padding: "15px",
                              border: "1px solid #292932",
                              borderRadius: "14px",
                              background: "#111116",
                            }}
                          >
                            <div
                              style={{
                                color: "#858591",
                                fontSize: "11px",
                              }}
                            >
                              Global Ranking
                            </div>

                            <div
                              style={{
                                marginTop: "5px",
                                fontSize: "18px",
                                fontWeight: 700,
                              }}
                            >
                              {message.data?.profile?.ranking
                                ? `#${Number(
                                    message.data.profile.ranking
                                  ).toLocaleString()}`
                                : "N/A"}
                            </div>
                          </div>

                          <div
                            style={{
                              padding: "15px",
                              border: "1px solid #292932",
                              borderRadius: "14px",
                              background: "#111116",
                            }}
                          >
                            <div
                              style={{
                                color: "#858591",
                                fontSize: "11px",
                              }}
                            >
                              Contest Rating
                            </div>

                            <div
                              style={{
                                marginTop: "5px",
                                fontSize: "18px",
                                fontWeight: 700,
                              }}
                            >
                              {message.data?.contest?.rating ?? "N/A"}
                            </div>
                          </div>

                          <div
                            style={{
                              padding: "15px",
                              border: "1px solid #292932",
                              borderRadius: "14px",
                              background: "#111116",
                            }}
                          >
                            <div
                              style={{
                                color: "#858591",
                                fontSize: "11px",
                              }}
                            >
                              Total Submissions
                            </div>

                            <div
                              style={{
                                marginTop: "5px",
                                fontSize: "18px",
                                fontWeight: 700,
                              }}
                            >
                              {message.data?.submissions?.total ?? 0}
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            padding: "18px",
                            border: "1px solid #292932",
                            borderRadius: "14px",
                            background: "#111116",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "15px",
                              fontWeight: 700,
                              marginBottom: "12px",
                            }}
                          >
                            🏆 Badges
                          </div>

                          {message.data?.badges?.length ? (
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "8px",
                              }}
                            >
                              {message.data.badges.map((badge) => (
                                <div
                                  key={badge.id}
                                  style={{
                                    padding: "8px 11px",
                                    borderRadius: "10px",
                                    border: "1px solid #292932",
                                    background: "#17171e",
                                    color: "#c9c9d2",
                                    fontSize: "12px",
                                  }}
                                >
                                  {badge.name}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div
                              style={{
                                color: "#777783",
                                fontSize: "12px",
                              }}
                            >
                              No badge data returned by LeetCode.
                            </div>
                          )}
                        </div>

                        <div
                          style={{
                            padding: "18px",
                            border: "1px solid #292932",
                            borderRadius: "14px",
                            background: "#111116",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "15px",
                              fontWeight: 700,
                              marginBottom: "12px",
                            }}
                          >
                            📝 Recent Accepted Problems
                          </div>

                          {message.data?.recentSubmissions?.length ? (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                              }}
                            >
                              {message.data.recentSubmissions.map(
                                (submission) => (
                                  <a
                                    key={submission.id}
                                    href={submission.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      gap: "12px",
                                      padding: "10px 12px",
                                      borderRadius: "10px",
                                      border: "1px solid #24242c",
                                      background: "#14141a",
                                      color: "#d8d8df",
                                      fontSize: "13px",
                                    }}
                                    onClick={(e) =>
                                      e.stopPropagation()
                                    }
                                  >
                                    <span>
                                      ✓ {submission.title}
                                    </span>
                                    <ExternalLink size={12} />
                                  </a>
                                )
                              )}
                            </div>
                          ) : (
                            <div
                              style={{
                                color: "#777783",
                                fontSize: "12px",
                              }}
                            >
                              No recent accepted submission data returned.
                            </div>
                          )}
                        </div>
                      </div>
                    ) : message.type === "resume" ? (
                      <div className="resume-card">

                        <p className="resume-title">
                          📄 Rohan Karak — Resume
                        </p>

                        <img
                          src="/resume-preview.png"
                          alt="Rohan Karak Resume"
                          className="resume-preview"
                        />

                        <a
                          href="/resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resume-open-btn"
                        >
                          <FileText size={16} />
                          Open Full Resume
                          <ExternalLink size={13} />
                        </a>

                      </div>
                    ) : (
                      <>
                        {message.role === "assistant" &&
                          index > 0 &&
                          /who is rohan|about rohan|profile|background|skills|projects|experience|hire rohan/i.test(
                            messages[index - 1]?.content || ""
                          ) && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "12px",
                                padding: "10px 12px",
                                border: "1px solid #2b2b34",
                                borderRadius: "14px",
                                background:
                                  "linear-gradient(145deg, rgba(25,25,34,.96), rgba(15,15,21,.96))",
                                width: "fit-content",
                                maxWidth: "100%",
                              }}
                            >
                              <img
                                src="/profile.jpg"
                                alt="Rohan Karak"
                                style={{
                                  width: "42px",
                                  height: "42px",
                                  borderRadius: "12px",
                                  objectFit: "cover",
                                  border: "1px solid #3a3748",
                                }}
                              />

                              <div>
                                <div
                                  style={{
                                    color: "#f5f5f7",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                  }}
                                >
                                  {name}
                                </div>
                                <div
                                  style={{
                                    marginTop: "3px",
                                    color: "#9998a7",
                                    fontSize: "11px",
                                  }}
                                >
                                  {profile?.headline ||
                                    "Full Stack Developer & AI/LLM Enthusiast"}
                                </div>
                              </div>

                              <span
                                style={{
                                  marginLeft: "4px",
                                  padding: "5px 8px",
                                  borderRadius: "999px",
                                  background: "#17171f",
                                  border: "1px solid #302e3c",
                                  color: "#a99cff",
                                  fontSize: "10px",
                                  fontWeight: 700,
                                }}
                              >
                                AI
                              </span>
                            </div>
                          )}

                        {renderMessage(message.content)}
                      </>
                    )}

                  </div>

                </div>
              )
            )}


            {/* TYPING */}

            {loading && (
              <div className="msg">

                <div className="mini-logo">
                  <Bot size={15} />
                </div>

                <div className="bubble typing">

                  <span />
                  <span />
                  <span />

                </div>

              </div>
            )}

          </div>


          {/* ============================================
              SUGGESTIONS
          ============================================= */}

          <div className="suggestions">

            {suggestions.map(
              (question) => (

                <button
                  key={question}
                  onClick={() =>
                    sendMessage(question)
                  }
                >
                  {question}
                </button>

              )
            )}

          </div>


          {/* ============================================
              INPUT
          ============================================= */}

          <div className="composer">

            <textarea
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {

                if (
                  e.key === "Enter" &&
                  !e.shiftKey
                ) {
                  e.preventDefault();
                  sendMessage();
                }

              }}
              placeholder="Ask anything about Rohan..."
            />


            <button
              className="send"
              onClick={() =>
                sendMessage()
              }
              disabled={loading}
            >
              <Send size={18} />
            </button>

          </div>


          {/* DISCLAIMER */}

          <p className="disclaimer">

            <Sparkles size={12} />

            Rohan AI is an AI representative.
            Answers are based on Rohan's provided
            profile data.

          </p>

        </main>

      </div>

    </div>
  );
}


// ======================================================
// START REACT APP
// ======================================================

createRoot(
  document.getElementById("root")
).render(
  <App />
);