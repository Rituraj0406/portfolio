export const SKILLS = {
  "Core": ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
  "Frameworks": ["React.js", "Next.js", "Angular", "React Native"],
  "State & Forms": ["Redux", "Formik"],
  "UI & Design": ["Material UI", "Figma", "Responsive Design"],
  "Tools & APIs": ["RESTful APIs", "Git", "Jest", "React Testing Library"],
};

export const EXPERIENCE = [
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

export const PROJECTS = [
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

export const LEARNING = [
  { skill: "Node.js", progress: 60, note: "Building REST APIs, middleware, Express routing" },
  { skill: "Express.js", progress: 55, note: "Route handlers, error middleware, MVC pattern" },
  { skill: "MongoDB & Mongoose", progress: 65, note: "Schema design, aggregation pipelines, indexing" },
  { skill: "JWT & Auth", progress: 70, note: "Applied in Expense Tracker & Chat App projects" },
];