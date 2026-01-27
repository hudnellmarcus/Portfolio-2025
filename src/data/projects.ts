// Placeholder images - will be replaced with actual screenshots
import simpsonCover from "../assets/simpsonst_cover.png";
import iam21Cover from "../assets/iam21_cover.png";
import rewardsbotCover from "../assets/rewardsbot-cover.png";
import newWaveCover from "../assets/new-wave-therapy.png";

export type ProjectLink = {
  label: "Live" | "Case Study" | "GitHub" | "Preview" | "Article";
  href: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
  context?: string;
};

export type ProjectMedia = {
  hero: string;
  thumbnail: string;
  gallery?: string[];
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Product" | "Platform" | "Marketing Site" | "Frontend System";
  status: "Live" | "In progress" | "Private";
  timeframe: {
    year: string;
    duration?: string;
  };
  summary: string;
  roleTitle: string;
  responsibilities: string[];
  stack: {
    frontend: string[];
    backend?: string[];
    infra?: string[];
    analytics?: string[];
    cms?: string[];
    testing?: string[];
  };
  services: Array<
    | "Frontend Engineering"
    | "Design Systems"
    | "State & UX Architecture"
    | "Backend Integration"
    | "Authentication"
    | "CMS & Content Modeling"
    | "SEO"
    | "Analytics"
    | "Performance"
    | "CI/CD"
  >;
  highlights: string[];
  outcomes?: string[];
  metrics?: ProjectMetric[];
  links: ProjectLink[];
  media: ProjectMedia;
  tags: string[];
  featured?: boolean;
  caseStudy?: {
    problem: string;
    approach: string[];
    solution: string[];
    whatIMovedForward: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "rewardsbot-multitenant-shopping-assistant",
    title: "Rewardsbot — Multi-Tenant AI Shopping Assistant",
    client: "Rewardsbot",
    category: "Product",
    status: "Live",
    timeframe: { year: "2025–2026" },
    summary:
      "Owned the frontend for a white-label shopping assistant deployed across branded instances, balancing theming, authentication complexity, and resilient conversational UX.",
    roleTitle: "Frontend Engineer",
    responsibilities: [
      "Owned frontend architecture and implementation for a white-label, multi-tenant product.",
      "Built typed conversational flows and stateful UX behavior (chat → refinements → results).",
      "Integrated authenticated API clients with a Python/FastAPI backend and collaborated on contracts/edge cases.",
      "Implemented dual-auth architecture (Auth0 OAuth + custom SSO) with session persistence.",
    ],
    stack: {
      frontend: ["Next.js 15", "React 19", "TypeScript", "Zustand", "Tailwind"],
      backend: ["Python", "FastAPI"],
      analytics: ["PostHog", "GTM"],
      infra: ["Static export deployment"],
    },
    services: [
      "Frontend Engineering",
      "State & UX Architecture",
      "Backend Integration",
      "Authentication",
      "Analytics",
      "Performance",
    ],
    highlights: [
      "Subdomain-based theming and asset management across branded instances.",
      "Dual authentication flow: OAuth via Auth0 + custom SSO, including browser compatibility handling.",
      "Typed request/response contracts with resilient error handling to keep UX stable under API variability.",
    ],
    metrics: [
      { label: "Branded instances", value: "13+", context: "white-label deployments" },
    ],
    links: [
      { label: "Live", href: "https://www.streetchild.liquidrewards.bot" },
    ],
    media: {
      hero: rewardsbotCover, // Placeholder - replace with actual hero
      thumbnail: rewardsbotCover,
    },
    tags: ["Next.js", "React", "TypeScript", "Zustand", "Auth0", "SSO", "Multi-tenant", "PostHog"],
    featured: true,
    caseStudy: {
      problem:
        "Scale a single product experience into many brand-safe deployments while maintaining fast UX, consistent auth, and reliable backend integration.",
      approach: [
        "Structured the UI as composable flows driven by typed contracts and predictable state transitions.",
        "Designed theming + asset management around subdomains to minimize manual setup for new instances.",
        "Hardened auth/session behavior for real-world browsers and edge-case login paths.",
      ],
      solution: [
        "A multi-tenant frontend capable of deploying branded instances with consistent UX and stable integrations.",
        "Auth patterns that support both OAuth and SSO without compromising session reliability.",
      ],
      whatIMovedForward: [
        "Typed API contracts as a UI reliability tool.",
        "State machine thinking for conversational UX.",
        "Practical multi-tenant theming patterns.",
      ],
    },
  },

  {
    slug: "new-wave-therapy-cms-marketing-platform",
    title: "New Wave Therapy — CMS-Backed Healthcare Platform",
    client: "New Wave Therapy",
    category: "Marketing Site",
    status: "Live",
    timeframe: { year: "2025–2026" },
    summary:
      "Built a production marketing platform backed by Sanity CMS so non-technical stakeholders can manage structured content safely—while maintaining strong SEO foundations.",
    roleTitle: "Frontend Engineer",
    responsibilities: [
      "Built the production marketing platform with CMS-driven page architecture.",
      "Designed Sanity schemas/content models and integrated GROQ queries for dynamic pages.",
      "Implemented SEO infrastructure: dynamic sitemap/robots and JSON-LD structured data.",
      "Collaborated directly with client stakeholders on UX, content structure, and performance iteration.",
    ],
    stack: {
      frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4", "Framer Motion"],
      cms: ["Sanity Studio", "GROQ"],
    },
    services: ["Frontend Engineering", "CMS & Content Modeling", "SEO", "Performance", "Design Systems"],
    highlights: [
      "Sanity content modeling for team profiles, resources, and FAQs with type-safe rendering.",
      "SEO infrastructure aligned with CMS updates (sitemap/robots + JSON-LD).",
      "Animation polish with Framer Motion while keeping the site performant.",
    ],
    links: [
      { label: "Live", href: "https://NewWaveTherapy.com" },
      { label: "GitHub", href: "https://github.com/hudnellmarcus/new-wave-therapy" },
    ],
    media: {
      hero: newWaveCover, // Placeholder - replace with actual hero
      thumbnail: newWaveCover,
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Sanity", "GROQ", "SEO", "JSON-LD", "Framer Motion"],
    featured: true,
    caseStudy: {
      problem:
        "Enable a healthcare brand to publish and evolve content without engineering bottlenecks, while protecting SEO and structured data quality.",
      approach: [
        "Modeled content as structured documents in Sanity to prevent layout-breaking edits.",
        "Built type-safe renderers mapped to schema intent (not ad-hoc fields).",
        "Automated SEO artifacts so updates remain consistent over time.",
      ],
      solution: [
        "A CMS-backed marketing platform with safe editing workflows and durable SEO infrastructure.",
      ],
      whatIMovedForward: [
        "Schema-first content design as a reliability strategy.",
        "SEO as product infrastructure, not a one-time checklist.",
      ],
    },
  },

  {
    slug: "simpson-street-frontend-only-brand-site",
    title: "Simpson Street — Frontend-Only Production Site",
    client: "Simpson Street",
    category: "Frontend System",
    status: "Live",
    timeframe: { year: "2024–2025" },
    summary:
      "Sole developer for a static, frontend-only site under hosting constraints—delivering polished interactive UX and a reliable CI/CD pipeline for ongoing iterations.",
    roleTitle: "Frontend Engineer",
    responsibilities: [
      "Sole developer responsible for architecture, implementation, and maintenance.",
      "Built interactive UX systems (media gallery, video modal UX, scroll-based navigation).",
      "Optimized performance for large media assets and ensured graceful degradation.",
      "Maintained automated deploy pipeline with lint/build gates.",
    ],
    stack: {
      frontend: ["React 18", "TypeScript", "Vite", "Tailwind"],
      infra: ["Static hosting", "GitHub Pages CI/CD"],
    },
    services: ["Frontend Engineering", "Performance", "CI/CD", "Design Systems"],
    highlights: [
      "High-polish media experiences that remain responsive under static hosting constraints.",
      "Performance work focused on large media assets and predictable load behavior.",
      "Automation gates to keep deployments safe and repeatable.",
    ],
    links: [
      { label: "Live", href: "https://www.simpsonst.com" },
      { label: "GitHub", href: "https://github.com/hudnellmarcus/Simpson_Street" },
    ],
    media: {
      hero: simpsonCover,
      thumbnail: simpsonCover,
    },
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Static Hosting", "CI/CD", "Performance"],
    featured: false,
    caseStudy: {
      problem:
        "Deliver an interactive brand experience without a backend, while keeping performance strong and deployments reliable under static hosting constraints.",
      approach: [
        "Built modular UI systems that stay maintainable as content evolves.",
        "Focused performance work on media delivery and interaction smoothness.",
        "Kept deployments consistent with automated checks and a clean pipeline.",
      ],
      solution: [
        "A frontend-only production site with polished UX, strong performance, and dependable CI/CD.",
      ],
      whatIMovedForward: [
        "Static-first architecture decisions that still allow rich interaction.",
        "Performance-first thinking for media-heavy experiences.",
      ],
    },
  },

  {
    slug: "iam21-webflow-site",
    title: "IAM21 — Webflow Production Site",
    client: "IAM21",
    category: "Marketing Site",
    status: "Live",
    timeframe: { year: "2024–2025" },
    summary:
      "Delivered a production marketing site built in Webflow, balancing speed, content flexibility, and long-term maintainability for a non-technical team.",
    roleTitle: "Software Engineer",
    responsibilities: [
      "Built and structured a production Webflow site with a focus on clarity, performance, and maintainability.",
      "Designed CMS collections and page structure to support ongoing content updates without engineering involvement.",
      "Ensured responsive behavior, accessibility basics, and consistent visual hierarchy across breakpoints.",
      "Collaborated with stakeholders to translate requirements into reliable, production-ready implementation.",
    ],
    stack: {
      frontend: ["Webflow"],
      cms: ["Webflow CMS"],
    },
    services: [
      "Frontend Engineering",
      "CMS & Content Modeling",
      "Performance",
      "Design Systems",
    ],
    highlights: [
      "CMS structure that empowers non-technical editors without breaking layouts.",
      "Clean component and style organization to keep the site maintainable over time.",
      "Pragmatic tooling choice prioritizing delivery speed and reliability.",
    ],
    links: [
      { label: "Live", href: "https://iam21.com" },
    ],
    media: {
      hero: iam21Cover,
      thumbnail: iam21Cover,
    },
    tags: ["Webflow", "CMS", "Marketing Site", "Content Modeling"],
    featured: false,
    caseStudy: {
      problem:
        "Enable a marketing team to manage and evolve site content quickly without ongoing engineering support.",
      approach: [
        "Chose Webflow as the primary platform to reduce complexity and speed up delivery.",
        "Structured CMS collections and page templates to prevent layout regressions.",
        "Focused on consistency, performance, and responsive behavior over custom code.",
      ],
      solution: [
        "A production-ready Webflow site that balances flexibility for editors with stability for the business.",
      ],
      whatIMovedForward: [
        "Tool selection as an architectural decision.",
        "CMS structure as a guardrail, not just convenience.",
        "Shipping the simplest system that meets real needs.",
      ],
    },
  },
];

export default projects;
