const aboutContent = {
  headline: "About Me",
  subtitle: "Frontend systems with production-grade backend integration",

  intro: `I'm Marcus Hudnell, a Los Angeles–based software engineer who builds frontend systems with production-grade backend integration.`,

  philosophy: `My focus is on architecting interfaces and application state that remain stable as complexity grows — from authentication and multi-tenant theming to CMS-driven content and analytics pipelines. I value type safety, explicit contracts, and predictable behavior, especially in products that serve real users at scale.`,

  background: `I've worked with organizations including LIQUID Rewards, Simpson Street, and IAM21, contributing to platforms, marketing systems, and internal tools. My work typically spans frontend architecture, API integration, and system design decisions that reduce long-term maintenance cost.`,

  approach: `I approach software as a long-lived system, not a one-off build — optimizing for clarity, reliability, and teams who inherit the code after me.`,

  expertise: {
    title: "Technical Expertise",
    areas: [
      {
        category: "Frontend Architecture",
        description: "Building scalable interfaces with React, TypeScript, and modern state management — designed for maintainability as systems grow."
      },
      {
        category: "Backend Integration",
        description: "Connecting frontends to APIs with typed contracts, resilient error handling, and predictable data flows."
      },
      {
        category: "Authentication & Multi-tenancy",
        description: "Implementing auth patterns (OAuth, SSO) and theming systems that scale across branded deployments."
      },
      {
        category: "CMS & Content Systems",
        description: "Designing content models and integrations that empower non-technical teams without breaking layouts."
      }
    ]
  },

  skills: {
    title: "Technical Toolkit",
    groups: [
      {
        name: "Languages",
        items: ["TypeScript", "JavaScript", "Python"]
      },
      {
        name: "Frontend",
        items: ["React", "Next.js", "Tailwind", "Framer Motion"]
      },
      {
        name: "State",
        items: ["Zustand", "React Query", "Context"]
      },
      {
        name: "Backend",
        items: ["Node.js", "FastAPI", "REST APIs"]
      },
      {
        name: "CMS",
        items: ["Sanity", "Webflow", "GROQ"]
      },
      {
        name: "Tools",
        items: ["Git", "Vite", "PostHog", "Auth0"]
      }
    ]
  },
};

export default aboutContent;
