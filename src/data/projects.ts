import liquidCover from "../assets/liquid_cover.png";
import simpsonCover from "../assets/simpsonst_cover.png";
import iam21Cover from "../assets/iam21_cover.png"

export interface ProjectData {
    id: number;
    title: string;
    description: string;
    role: string;
    duration: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    features: string[];
    challenge: string;
    solution: string;
  }

  const projects: ProjectData[] = [
    {
        id: 1,
        title: "IAM21 Productions",
        description: "Complex web application using Webflow CMS with advanced animations and interactive experiences.",
    role: "Frontend Developer (Contract)",
    duration: "November 2024 - Present",
    image: iam21Cover, 
    technologies: ["Webflow", "JavaScript", "jQuery", "CSS", "CMS"],
    liveUrl: "https://iam21.com", 
    githubUrl: "", 
    features: [
      "Advanced animations using custom JavaScript, jQuery, and CSS",
      "Scalable data structures using Webflow collections",
      "Responsive design across all devices",
      "Complex interactive experiences"
    ],
    challenge: "Creating sophisticated interactive experiences while architecting scalable data structures that mimic backend functionality.",
    solution: "Implemented advanced animations and responsive design principles while collaborating directly with the CEO/Founder and design team to ensure alignment with brand goals."
  },
  {
    id: 2,
    title: "Simpson St.",
    description: "Reusable UI component library built with React and TailwindCSS to improve development efficiency across teams.",
    role: "Frontend Developer",
    duration: "January 2024 — June 2024",
    image: simpsonCover, 
    technologies: ["React", "TailwindCSS", "Mocha/Chai", "TypeScript"],
    liveUrl: "https://www.simpsonst.com",
    githubUrl: "https://github.com/hudnellmarcus/Simpson_Street",
    features: [
      "Reusable UI component library",
      "Comprehensive testing strategy",
      "Scalable front-end architecture patterns",
      "Detailed documentation"
    ],
    challenge: "Creating a standardized component library that could be used efficiently across multiple teams while ensuring reliability and consistent implementation.",
    solution: "Built a comprehensive UI library with TailwindCSS and implemented robust testing strategies using Mocha/Chai while establishing architectural patterns for scalable front-end development."
  },
  {
    id: 3,
    title: "Liquid",
    description: "Modular React components following enterprise architecture patterns with robust data management.",
    role: "Frontend Developer",
    duration: "November 2023 — January 2024",
    image: liquidCover, 
    technologies: ["React", "TypeScript", "RESTful APIs", "TailwindCSS"],
    liveUrl: "https://hudnellmarcus.github.io/liquid-demo/",
    githubUrl: "https://github.com/hudnellmarcus/liquid-demo",
    features: [
      "Modular React components",
      "Technical documentation",
      "RESTful API integration",
      "Error handling implementation"
    ],
    challenge: "Developing components that follow enterprise architecture patterns while ensuring robust error handling for data management.",
    solution: "Created modular React components with comprehensive technical documentation while integrating RESTful APIs with robust error handling for reliable data management."
  }

  ];

  export default projects;
