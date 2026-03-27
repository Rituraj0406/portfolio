import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Learning", "Contact"];

const SKILLS = {
  "Core": ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
  "Frameworks": ["React.js", "Next.js", "Angular", "React Native"],
  "State & Forms": ["Redux", "Formik"],
  "UI & Design": ["Material UI", "Figma", "Responsive Design"],
  "Tools & APIs": ["RESTful APIs", "Git", "Jest", "React Testing Library"],
};

const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Passer Digital Inc.",
    location: "Hyderabad, India",
    period: "Jan 2025 – Present",
    highlights: [
      "Built and shipped multiple features in a production Next.js application end-to-end.",
      "Introduced Redux for centralized state, eliminating duplicate API calls across modules.",
      "Designed an Admin Dashboard replacing spreadsheet-based internal tracking workflows.",
      "Delivered a config-driven form system via Google Sheets, enabling no-code form updates.",
      "Shipped 3 customer-facing workflows (Invoice, Property, Service Provider) in 10 days.",
    ],
  },
  {
    role: "Software Developer (Frontend)",
    company: "Nexus Tech Innovations Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Aug 2023 – Jan 2025",
    highlights: [
      "Built a high-volume wagon weighing data system for Indian Railways with strict compliance needs.",
      "Integrated RFID scanning SDK into React for real-time physical device data capture.",
      "Led a frontend team of 8 — task assignment, PR reviews, and coding standards.",
      "Contributed to a preventive maintenance dashboard for an IIoT platform.",
    ],
  },
  {
    role: "Software Developer (Frontend)",
    company: "Altorum Leren Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Oct 2020 – Jun 2023",
    highlights: [
      "Built React & Redux modules for a business credit monitoring platform.",
      "Implemented Next.js SSR and routing for IoT monitoring applications.",
      "Created shared component libraries used across multiple internal products.",
      "Delivered a salary management system for BECIL with government-aligned validations.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Oxyfind Technologies Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Jun 2020 – Sep 2020",
    highlights: [
      "Built an appointment management module with form validation and UX flows.",
      "Developed queue display interfaces adaptable across mobile and TV screen sizes.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Expense Tracker",
    type: "Full Stack",
    desc: "Secure REST API with JWT auth, transaction management, and MongoDB aggregation for monthly summaries and category analytics. Includes CSV export.",
    tags: ["Node.js", "MongoDB", "JWT", "REST API"],
    icon: "💰",
  },
  {
    name: "Real-time Chat App",
    type: "Full Stack",
    desc: "One-to-one messaging with WebSocket communication, JWT auth, online user tracking, and message persistence via MongoDB.",
    tags: ["WebSockets", "MongoDB", "JWT", "React"],
    icon: "💬",
  },
  {
    name: "Airbnb Frontend Clone",
    type: "Frontend",
    desc: "Pixel-faithful responsive layouts and core UI flows built with React.js, focusing on component reuse and mobile responsiveness.",
    tags: ["React.js", "CSS", "Responsive"],
    icon: "🏠",
  },
  {
    name: "Portfolio Website",
    type: "Frontend",
    desc: "React-based personal site showcasing professional projects, skills, and experience — the one you're looking at right now.",
    tags: ["React.js", "Design"],
    icon: "🌐",
  },
];

const LEARNING = [
  { skill: "Node.js", progress: 60, note: "Building REST APIs, middleware, Express routing" },
  { skill: "Express.js", progress: 55, note: "Route handlers, error middleware, MVC pattern" },
  { skill: "MongoDB & Mongoose", progress: 65, note: "Schema design, aggregation pipelines, indexing" },
  { skill: "JWT & Auth", progress: 70, note: "Applied in Expense Tracker & Chat App projects" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const s = {
    root: {
      fontFamily: "'Crimson Pro', 'Georgia', serif",
      background: "#fafaf8",
      color: "#1a1a1a",
      minHeight: "100vh",
      overflowX: "hidden",
    },
    nav: {
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(250,250,248,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid #e8e4dc" : "none",
      transition: "all 0.3s ease",
      padding: "0 clamp(1.5rem, 5vw, 4rem)",
    },
    navInner: {
      maxWidth: 1100, margin: "0 auto",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 64,
    },
    logo: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.3rem", fontWeight: 700,
      letterSpacing: "-0.02em", color: "#1a1a1a",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0,
    },
    navLink: (isActive) => ({
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.85rem", fontWeight: 500,
      letterSpacing: "0.06em", textTransform: "uppercase",
      cursor: "pointer", color: isActive ? "#1a1a1a" : "#6b6b6b",
      position: "relative",
      paddingBottom: "4px",
      transition: "color 0.2s ease",
    }),
    hero: {
      minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "6rem clamp(1.5rem, 5vw, 4rem) 4rem",
      maxWidth: 1100, margin: "0 auto",
      position: "relative",
    },
    heroTag: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.8rem", fontWeight: 600,
      letterSpacing: "0.12em", textTransform: "uppercase",
      color: "#8b7355", marginBottom: "1.5rem",
      display: "flex", alignItems: "center", gap: "0.5rem",
    },
    heroName: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "clamp(3.5rem, 9vw, 7rem)",
      fontWeight: 700, lineHeight: 0.95,
      letterSpacing: "-0.03em", color: "#1a1a1a",
      marginBottom: "1rem",
    },
    heroSub: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
      color: "#5a5a5a", maxWidth: 600,
      lineHeight: 1.6, marginBottom: "2.5rem", fontWeight: 400,
    },
    heroCta: {
      display: "flex", gap: "1rem", flexWrap: "wrap",
    },
    btnPrimary: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.85rem", fontWeight: 600,
      letterSpacing: "0.06em", textTransform: "uppercase",
      padding: "0.85rem 2rem",
      background: "#1a1a1a", color: "#fafaf8",
      border: "none", cursor: "pointer",
      transition: "all 0.2s",
    },
    btnOutline: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.85rem", fontWeight: 600,
      letterSpacing: "0.06em", textTransform: "uppercase",
      padding: "0.85rem 2rem",
      background: "transparent", color: "#1a1a1a",
      border: "1.5px solid #1a1a1a", cursor: "pointer",
      transition: "all 0.2s",
    },
    heroStats: {
      display: "flex", gap: "3rem", marginTop: "4rem",
      borderTop: "1px solid #e8e4dc", paddingTop: "2.5rem",
      flexWrap: "wrap",
    },
    statNum: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "2.5rem", fontWeight: 700,
      color: "#1a1a1a", lineHeight: 1,
    },
    statLabel: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.78rem", fontWeight: 500,
      letterSpacing: "0.08em", textTransform: "uppercase",
      color: "#8b7355", marginTop: "0.35rem",
    },
    section: {
      padding: "6rem clamp(1.5rem, 5vw, 4rem)",
      maxWidth: 1100, margin: "0 auto",
    },
    sectionLabel: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.75rem", fontWeight: 600,
      letterSpacing: "0.14em", textTransform: "uppercase",
      color: "#8b7355", marginBottom: "0.75rem",
    },
    sectionTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 700, letterSpacing: "-0.02em",
      color: "#1a1a1a", marginBottom: "3rem",
      lineHeight: 1.1,
    },
    divider: {
      borderTop: "1px solid #e8e4dc", margin: 0,
    },
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Crimson+Pro:ital,wght@0,400;1,400&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <div style={s.root}>
        {/* NAV */}
        <nav style={s.nav}>
          <div style={s.navInner}>
            <span style={s.logo} onClick={() => scrollTo("About")}>RR.</span>
            <ul style={{ ...s.navLinks, display: menuOpen ? "none" : "flex" }}>
              {NAV_LINKS.map(l => (
                <li key={l}    onClick={() => scrollTo(l)} className={`nav-link${active === l ? " nav-link--active" : ""}`}>{l}</li>
              ))}
            </ul>
          </div>
        </nav>

        {/* HERO */}
        <section id="about" style={{ background: "#fafaf8" }}>
          <div style={s.hero}>
            <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.1s forwards" }}>
              <div style={s.heroTag}>
                <span style={{ width: 20, height: 1.5, background: "#8b7355", display: "inline-block" }} />
                Frontend Developer · Bangalore, India
              </div>
            </div>
            <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.25s forwards" }}>
              <div style={s.heroName}>Ritu<br />Raj.</div>
            </div>
            <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.4s forwards" }}>
              <p style={s.heroSub}>
                5+ years crafting React & Next.js applications — from enterprise dashboards to government systems.
                I care deeply about clean code, thoughtful UX, and shipping things that actually work.
              </p>
            </div>
            <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.55s forwards" }}>
              <div style={s.heroCta}>
                <button className="btn-primary" style={s.btnPrimary} onClick={() => scrollTo("Projects")}>
                  View Projects
                </button>
                <button className="btn-outline" style={s.btnOutline} onClick={() => scrollTo("Contact")}>
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>
            <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.7s forwards" }}>
              <div style={s.heroStats}>
                {[["5+", "Years Experience"], ["4", "Companies"], ["10+", "Products Shipped"], ["8", "Devs Led"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={s.statNum}>{n}</div>
                    <div style={s.statLabel}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr style={s.divider} />

        {/* SKILLS */}
        <section id="skills" style={{ background: "#fafaf8" }}>
          <div style={s.section}>
            <FadeIn><div style={s.sectionLabel}>What I work with</div></FadeIn>
            <FadeIn delay={0.1}><div style={s.sectionTitle}>Skills</div></FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "2rem" }}>
              {Object.entries(SKILLS).map(([cat, items], i) => (
                <FadeIn key={cat} delay={i * 0.08}>
                  <div style={{ borderTop: "2px solid #1a1a1a", paddingTop: "1.25rem" }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b7355", marginBottom: "1rem" }}>{cat}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {items.map(skill => (
                        <span key={skill} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 500, padding: "0.35rem 0.75rem", background: "#f0ede6", color: "#3a3a3a", borderRadius: 2 }}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <hr style={s.divider} />

        {/* EXPERIENCE */}
        <section id="experience" style={{ background: "#f5f3ee" }}>
          <div style={s.section}>
            <FadeIn><div style={s.sectionLabel}>Career journey</div></FadeIn>
            <FadeIn delay={0.1}><div style={s.sectionTitle}>Experience</div></FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {EXPERIENCE.map((exp, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "2rem", padding: "2.5rem 0", borderTop: i === 0 ? "1px solid #ddd9d0" : "1px solid #ddd9d0", alignItems: "start" }}>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#8b7355", letterSpacing: "0.06em" }}>{exp.period}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#5a5a5a", marginTop: "0.25rem" }}>{exp.location}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.2rem" }}>{exp.role}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "#5a5a5a", marginBottom: "1rem", letterSpacing: "0.02em" }}>{exp.company}</div>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                        {exp.highlights.map((h, j) => (
                          <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                            <span style={{ color: "#8b7355", marginTop: "0.35rem", flexShrink: 0, fontSize: "0.6rem" }}>◆</span>
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#4a4a4a", lineHeight: 1.65 }}>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <hr style={s.divider} />

        {/* PROJECTS */}
        <section id="projects" style={{ background: "#fafaf8" }}>
          <div style={s.section}>
            <FadeIn><div style={s.sectionLabel}>Things I've built</div></FadeIn>
            <FadeIn delay={0.1}><div style={s.sectionTitle}>Projects</div></FadeIn>
            <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5px", background: "#e8e4dc" }}>
              {PROJECTS.map((p, i) => (
                <FadeIn key={i} delay={i * 0.1} style={{ height: "100%" }}>
                  <ProjectCard project={p} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <hr style={s.divider} />

        {/* LEARNING */}
        <section id="learning" style={{ background: "#f5f3ee" }}>
          <div style={s.section}>
            <FadeIn><div style={s.sectionLabel}>Currently growing</div></FadeIn>
            <FadeIn delay={0.1}><div style={s.sectionTitle}>Learning Backend</div></FadeIn>
            <FadeIn delay={0.2}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#5a5a5a", maxWidth: 560, marginBottom: "3rem", lineHeight: 1.7 }}>
                I'm actively expanding into backend development with Node.js — building REST APIs, working with databases, and understanding the full stack. Here's where I am:
              </p>
            </FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: 640 }}>
              {LEARNING.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <LearningBar item={item} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <hr style={s.divider} />

        {/* CONTACT */}
        <section id="contact" style={{ background: "#1a1a1a" }}>
          <div style={{ ...s.section, padding: "6rem clamp(1.5rem, 5vw, 4rem)" }}>
            <FadeIn>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8b7355", marginBottom: "0.75rem" }}>Let's talk</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, color: "#fafaf8", marginBottom: "1.5rem", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                Open to new<br />opportunities.
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#a09080", maxWidth: 480, marginBottom: "3rem", lineHeight: 1.7 }}>
                Whether it's a full-time role, freelance project, or just a conversation — I'd love to hear from you.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
                <a href="mailto:riturajof@gmail.com" className="contact-email" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#fafaf8", borderBottom: "1px solid #8b7355", paddingBottom: "2px", textDecoration: "none" }}>riturajof@gmail.com</a>
                <a href="https://linkedin.com/in/rajrituraj" target="_blank" rel="noreferrer" className="contact-btn" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.85rem 2rem", background: "#8b7355", color: "#fafaf8", textDecoration: "none" }}>LinkedIn ↗</a>
                <a href="https://www.rituraj-portfolio.com" target="_blank" rel="noreferrer" className="contact-btn" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.85rem 2rem", border: "1.5px solid #4a4a4a", color: "#a09080", textDecoration: "none" }}>Portfolio ↗</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div style={{ borderTop: "1px solid #2e2e2e", marginTop: "5rem", paddingTop: "2rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#4a4a4a", letterSpacing: "0.06em" }}>
                © 2025 Ritu Raj · Bangalore, India
              </div>
            </FadeIn>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        body { margin: 0; }

        /* Nav link animated underline */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: #1a1a1a;
          transition: width 0.25s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .nav-link:hover::after,
        .nav-link--active::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #1a1a1a !important;
        }

        /* Button press & slide-fill effects */
        .btn-primary {
          position: relative; overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-110%);
          transition: transform 0.35s cubic-bezier(0.76,0,0.24,1);
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary:active { transform: scale(0.97); }

        .btn-outline {
          position: relative; overflow: hidden;
        }
        .btn-outline::before {
          content: '';
          position: absolute; inset: 0;
          background: #1a1a1a;
          transform: translateY(105%);
          transition: transform 0.35s cubic-bezier(0.76,0,0.24,1);
          z-index: 0;
        }
        .btn-outline:hover::before { transform: translateY(0); }
        .btn-outline:hover { color: #fafaf8 !important; }
        .btn-outline span { position: relative; z-index: 1; }
        .btn-outline:active { transform: scale(0.97); }

        /* Contact link hover underline grow */
        .contact-email {
          position: relative;
        }
        .contact-email::after {
          content: '';
          position: absolute; bottom: -2px; left: 0;
          width: 100%; height: 1px;
          background: #fafaf8;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .contact-email:hover::after { transform: scaleX(1); }

        /* Contact buttons */
        .contact-btn {
          position: relative; overflow: hidden; display: inline-block;
          transition: transform 0.2s ease !important;
        }
        .contact-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.1);
          transform: translateX(-110%);
          transition: transform 0.35s cubic-bezier(0.76,0,0.24,1);
        }
        .contact-btn:hover::before { transform: translateX(0); }
        .contact-btn:active { transform: scale(0.97) !important; }

        /* Equal height for FadeIn wrappers inside project grid */
        .projects-grid > div { height: 100%; }

        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          [data-exp-grid] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fafaf8",
        padding: "2.5rem 2rem",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.12)" : "0 0 0 rgba(0,0,0,0)",
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}>
      {/* Slide-up dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#1a1a1a",
        transform: hovered ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.45s cubic-bezier(0.76,0,0.24,1)",
        zIndex: 0,
      }} />
      {/* Content layer */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{
          fontSize: "2rem", marginBottom: "1rem",
          transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1) rotate(0deg)",
          transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          display: "inline-block", width: "fit-content",
        }}>{project.icon}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700,
            color: hovered ? "#fafaf8" : "#1a1a1a",
            transition: "color 0.3s ease",
          }}>{project.name}</span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: hovered ? "#c8a882" : "#8b7355",
            border: hovered ? "1px solid #c8a882" : "1px solid #8b7355",
            padding: "0.15rem 0.5rem",
            transition: "color 0.3s ease, border-color 0.3s ease",
          }}>{project.type}</span>
        </div>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem",
          color: hovered ? "#a09080" : "#5a5a5a",
          lineHeight: 1.65, marginBottom: "1.5rem", flex: 1,
          transition: "color 0.3s ease",
        }}>{project.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tags.map((t, i) => (
            <span key={t} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 500,
              padding: "0.25rem 0.6rem",
              background: hovered ? "#2e2e2e" : "#f0ede6",
              color: hovered ? "#c0b8a8" : "#5a5a5a",
              borderRadius: 2,
              transform: hovered ? "translateY(0)" : "translateY(4px)",
              opacity: hovered ? 1 : 0.85,
              transition: `background 0.3s ease, color 0.3s ease, transform 0.3s ease ${i * 0.05}s, opacity 0.3s ease ${i * 0.05}s`,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function LearningBar({ item }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", alignItems: "baseline" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a1a1a" }}>{item.skill}</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "#8b7355" }}>{item.progress}%</span>
      </div>
      <div style={{ height: 3, background: "#ddd9d0", borderRadius: 2, marginBottom: "0.5rem", overflow: "hidden" }}>
        <div style={{ height: "100%", background: "#1a1a1a", borderRadius: 2, width: inView ? `${item.progress}%` : "0%", transition: "width 1s ease 0.3s" }} />
      </div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#7a7a7a" }}>{item.note}</div>
    </div>
  );
}
