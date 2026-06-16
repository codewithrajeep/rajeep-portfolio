export const data = {
  name: "Rajeep Gadal",
  title: "Backend-focused Software Engineer",
  bio: "I build reliable backend systems and APIs. Focused on Node.js, TypeScript, PostgreSQL and distributed systems. Based in Nepal, open to remote opportunities.",
  email: "rajeepgadal@gmail.com",
  github: "https://github.com/codewithrajeep",
  linkedin: "https://linkedin.com/in/codewithrajeep",

  experience: [
    {
      company: "Mahuri Ventures",
      role: "Backend Developer Intern",
      period: "Jan 2025 – Jan 2026",
      points: [
        "Developed and optimized RESTful APIs using Node.js and Express.js",
        "Managed PostgreSQL databases and optimized queries for better performance",
        "Implemented JWT-based authentication for secure user login",
        "Wrote backend API documentation for internal and external use",
        "Collaborated using Git and GitHub for version control",
      ],
      tech: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "MongoDB"],
    },
    {
      company: "W3 Developers Pvt. Ltd.",
      role: "Backend Software Engineer",
      period: "Jan 2026 – Apr 2026",
      points: [
        "Built W3 Worksphere HRM platform with 18 modules including Auth, Payroll, Attendance, Leave and CRM",
        "Migrated production database from Railway MySQL to Neon PostgreSQL",
        "Deployed full system on Render with GitHub Actions CI/CD pipeline",
        "Delivered complete API documentation and handover on contract completion",
      ],
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Express.js"],
    },
  ],

  projects: [
    {
      name: "Hookman",
      description:
        "Webhook delivery service similar to Svix/Hookdeck. Handles reliable webhook dispatch with queuing, retries, and API key auth.",
      tech: ["Node.js", "TypeScript", "BullMQ", "Redis", "PostgreSQL"],
      github: "https://github.com/codewithrajeep/hookman-backend",
      live: "",
    },
    {
      name: "Pulseboard",
      description:
        "Backend monitoring and analytics platform. Full CI/CD pipeline with Docker, deployed on Render with Neon PostgreSQL.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/codewithrajeep/pulseboard-backend",
      live: "https://pulseboard-api-ud2s.onrender.com",
    },
    {
      name: "Noted",
      description:
        "Full-stack task and project management app with JWT auth, refresh tokens, and a clean modular architecture.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Next.js", "Prisma"],
      github: "https://github.com/codewithrajeep/noted-backend",
      live: "",
    },
  ],

  skills: {
    Backend: ["Node.js", "TypeScript", "Express.js", "REST APIs", "BullMQ"],
    Database: ["PostgreSQL", "Redis", "Prisma ORM", "Neon"],
    DevOps: ["Docker", "GitHub Actions", "CI/CD", "Render"],
    Tools: ["Git", "pnpm", "Postman", "Linux"],
  },
};
