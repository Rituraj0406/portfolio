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

export const PORTFOLIO_HERO = {
  "tag": "Frontend Developer · Bangalore, India",
  "name": "Ritu Raj.",
  "sub": "5+ years crafting React & Next.js applications — from enterprise dashboards to government systems. I care deeply about clean code, thoughtful UX, and shipping things that actually work.",
  "stats": [["5+", "Years Experience"], ["4", "Companies"], ["10+", "Products Shipped"], ["8", "Devs Led"]],
  "cta": true,
};

export const PROJECTS_HERO = {
  "tag": "Ritu Raj · Project Deep-Dives",
  "name": "Things I've Built.",
  "sub": "A detailed look at 4 projects — the stack behind each one, the problems I ran into, and what I took away from building them.",
};

export const PROJECTS_LISTS = [
  {
    id: 1,
    name: "Expense Tracker",
    type: "Full Stack",
    icon: "💰",
    year: "2024",
    summary: "A secure full-stack expense management system with analytics, JWT authentication, and data export.",
    github: "https://github.com/Rituraj0406/expense-tracker-frontend",
    stack: {
      Frontend: ["React.js", "CSS Modules", "Chart.js"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB", "Mongoose"],
      Auth: ["JWT", "bcrypt"],
      Utilities: ["CSV Export", "REST API"],
    },
    challenges: [
      {
        title: "MongoDB Aggregation Pipelines",
        desc: "Designing efficient aggregation queries to compute monthly summaries and category-based analytics without over-fetching was tricky. I learned to use $group, $match, and $project stages to shape data on the server rather than the client.",
      },
      {
        title: "JWT Refresh Token Strategy",
        desc: "Managing token expiry gracefully on the frontend — silently refreshing sessions without disrupting the user — required careful handling of Axios interceptors and token lifecycle logic.",
      },
      {
        title: "CSV Export with Dynamic Filters",
        desc: "Generating a filtered CSV export server-side while keeping the endpoint stateless required building a flexible query builder that maps frontend filter state into MongoDB query parameters.",
      },
    ],
    learnings: "This project pushed me deep into backend territory. I came away with a solid mental model of the full request lifecycle — from React state changes to Express middleware to MongoDB queries — and a real appreciation for how much careful design goes into auth flows.",
    color: "#2d4a3e",
    accentLight: "#e8f2ee",
  },
  {
    id: 2,
    name: "Real-time Chat App",
    type: "Full Stack",
    icon: "💬",
    year: "2024",
    summary: "A real-time one-to-one messaging application with WebSocket communication, online presence tracking, and persistent message history.",
    github: "https://github.com/rajrituraj/chat-app",
    stack: {
      Frontend: ["React.js", "Context API", "CSS"],
      Backend: ["Node.js", "Express.js", "Socket.io"],
      Database: ["MongoDB", "Mongoose"],
      Auth: ["JWT", "bcrypt"],
      Realtime: ["WebSockets", "Socket.io"],
    },
    challenges: [
      {
        title: "WebSocket Room Management",
        desc: "Keeping socket rooms in sync with user sessions — especially when users disconnect and reconnect — required thinking carefully about how socket IDs map to user IDs and how to clean up stale connections.",
      },
      {
        title: "Online User Tracking",
        desc: "Maintaining a real-time list of online users across the server without introducing race conditions meant using a server-side Map keyed by userId and emitting updates on every connect/disconnect event.",
      },
      {
        title: "Message Ordering & Persistence",
        desc: "Ensuring messages appear in the correct order even when network latency causes out-of-order delivery required timestamp-based sorting on both the server and client side, with MongoDB storing the source of truth.",
      },
    ],
    learnings: "Building this taught me how fundamentally different real-time systems are from standard request/response APIs. Socket.io's event-driven model changed how I think about state — instead of polling or reacting to user actions, the server actively pushes state changes to every client.",
    color: "#2c3a6b",
    accentLight: "#eaecf7",
  },
  {
    id: 3,
    name: "Task Manager",
    type: "Full Stack",
    icon: "✅",
    year: "2026",
    summary: "A full-stack task management application with authentication, category & priority filtering, and real-time UI updates — designed to simulate a production-grade productivity tool with clean architecture and scalable API design.",

    github: "https://github.com/Rituraj0406/todo-fe",

    stack: {
      Frontend: ["React.js", "Material UI", "Redux Toolkit"],
      Backend: ["Node.js", "Express.js", "MongoDB"],
      Auth: ["JWT Authentication"],
      Design: ["Responsive Layout", "MUI Components", "Modern UI/UX"],
    },

    challenges: [
      {
        title: "Dynamic Filtering System",
        desc: "Implementing multi-level filtering (status, category, priority, search, sorting) required careful state management to ensure all filters worked together seamlessly without performance issues or conflicting logic.",
      },
      {
        title: "Consistent Data Handling",
        desc: "Managing consistency between frontend and backend (like category/priority casing and schema alignment) was challenging and required standardizing data formats to avoid bugs in filtering and counting logic.",
      },
      {
        title: "Real-Time UI Synchronization",
        desc: "Ensuring that UI elements like sidebar counts, progress bars, and task lists update instantly after CRUD operations required efficient Redux state updates and API integration strategies.",
      },
    ],

    learnings: "Building this full-stack application strengthened my understanding of end-to-end development — from designing RESTful APIs and handling authentication to managing complex frontend state and creating a responsive, user-friendly interface. It improved my ability to structure scalable applications and debug real-world issues across the stack.",

    color: "#4f46e5",
    accentLight: "#eef2ff",
  },
  {
    id: 4,
    name: "Portfolio Website",
    type: "Frontend",
    icon: "🌐",
    year: "2025",
    summary: "A handcrafted personal portfolio built in React — the very site you're browsing. Focused on editorial typography, scroll-driven animations, and a clean minimal aesthetic.",
    github: "https://github.com/Rituraj0406/portfolio",
    stack: {
      Frontend: ["React.js", "CSS-in-JS"],
      Animation: ["IntersectionObserver API", "CSS Transitions", "Keyframes"],
      Design: ["Playfair Display", "DM Sans", "Custom Layout"],
      Tooling: ["Vite", "ESLint"],
    },
    challenges: [
      {
        title: "Scroll-driven Fade Animations",
        desc: "Orchestrating staggered reveal animations as sections enter the viewport — without a library — meant building a reusable FadeIn component around IntersectionObserver, with configurable delay props for sequencing.",
      },
      {
        title: "Consistent Card Heights in Grid",
        desc: "Getting 4 project cards to stretch to equal height across a 2-column grid while each FadeIn wrapper preserved its own animation independently required careful use of flexbox inside the grid cells.",
      },
      {
        title: "CSS-only Button Animations",
        desc: "Implementing the slide-up fill effect on the outline button and the shimmer sweep on the primary button — purely with CSS pseudo-elements and transforms — without any JS event handlers or style mutations.",
      },
    ],
    learnings: "Designing and building your own portfolio is uniquely humbling — you are simultaneously the designer, developer, and the harshest critic. I gained a much deeper appreciation for typography scale, negative space, and the power of a single restrained accent colour.",
    color: "#4a3a1a",
    accentLight: "#f5f0e8",
  },
];