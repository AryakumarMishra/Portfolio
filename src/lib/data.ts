export const siteConfig = {
  name: "Aryakumar Mishra",
  roleLine: "AI/ML Engineer | AI Systems Engineer",
  status: "Open to work",
  email: "aryakumar.ajaymishra@gmail.com",
  location: "Mumbai, India",
  social: {
    github: "https://github.com/aryakumarMishra",
    linkedin: "https://www.linkedin.com/in/aryakumar-mishra-747a39256/",
  },
};

export const hero = {
  subline:
    "An AI engineer who builds the systems - LLMs, retrieval, agents - and knows how to make them hold up under pressure.",
  accentWord: "systems",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export type ProjectStatus = "ACTIVE" | "DEPLOYED" | "OFFLINE" | "TBA";

export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  tagline: string;
  bullets: string[];
  stack: string[];
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    id: "redvector",
    title: "RedVector",
    status: "DEPLOYED",
    tagline:
      "Adversarial LLM testing framework - internally, BurpSuite for AI agents.",
    bullets: [
      "A platform for poking holes in LLMs before they go live: prompt injections, jailbreaks, adversarial edge cases. It turns what breaks into a score a team can actually act on.",
    ],
    stack: ["FastAPI", "LiteLLM", "React"],
    github: "https://github.com/AryakumarMishra/RedVector",
    live: "https://red-vector.vercel.app/",
  },
  {
    id: "sentinel",
    title: "Sentinel-AI",
    status: "TBA",
    tagline:
      "Autonomous agentic DevOps pipeline - self-healing CI/CD orchestration.",
    bullets: [
      "An agentic tool that finds the root of what breaks in a deployment, proposes a fix, and upon human approval, makes the changes, pushes the code, and creates a merge request",
    ],
    stack: ["FastAPI", "Next.js", "Google ADK", "Gemini"],
    github: "https://github.com/AryakumarMishra/Sentinel-AI",
    live: "#",
  },
  {
    id: "fieldassist",
    title: "FieldAssist AI",
    status: "OFFLINE",
    tagline:
      "Air-gapped RAG engine for secure retrieval of legal and procedural information in constrained environments.",
    bullets: [
      "An Offline-First, Air-Gapped RAG Engine for a legal knowledge base without any cloud or internet dependency.",
    ],
    stack: ["Python", "FastAPI", "React", "Vector DB"],
    github: "https://github.com/AryakumarMishra/FieldAssist-AI",
    live: "#",
  },
  {
    id: "deepfake",
    title: "Deepfake Detector",
    status: "DEPLOYED",
    tagline:
      "Multi-Modal Deepfake Detection System to identify deepfakes.",
    bullets: [
      "A Multi-Modal Deepfake Detection System that can identify the Deepfakes and morphes in Images, Videos, and Audios.",
    ],
    stack: ["FastAPI", "React", "Transformer", "ResNet", "Ensemble"],
    github: "https://github.com/AryakumarMishra/Multimodal-Deepfake-Detector",
    live: "https://multimodal-deepfake-detector.vercel.app/",
  },
  {
    id: "placeholder-1",
    title: "Predictive Maintenance Pipeline",
    status: "TBA",
    tagline: "System to identify failures in industrial machines before time.",
    bullets: [
      "Sensor telemetry turned into failure forecasts before downtime hits. An end-to-end pipeline from signal ingestion to a maintainable predictor in the field."
    ],
    stack: ["XGBoost", "Machine Learning", "Time Series"],
    github: "https://github.com/AryakumarMishra/Machine-Failure-Prediction",
    live: "#",
  },
  {
    id: "placeholder-2",
    title: "Fraud Detector",
    status: "TBA",
    tagline: "Pipeline for identification of Fraud in Credit Card Transactions",
    bullets: [
      "This project is a high-performance, modular AI system that detects fraudulent credit card transactions using XGBoost and the model has been trained on real-world credit card transaction data and achieves an impressive performance."
    ],
    stack: ["XGBoost", "Machine Learning", "Data Preprocessing"],
    github: "#",
    live: "#",
  },
];

export const featuredProjects = ["redvector", "sentinel"];

export type ToolkitGroup = {
  title: string;
  items: string[];
};

export const toolkit: ToolkitGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript / JavaScript", "SQL", "C++"],
  },
  {
    title: "AI / ML",
    items: [
      "Deep Learning",
      "Transformers",
      "RAG",
      "LangChain / LangGraph",
      "Model Context Protocol",
      "Adversarial ML",
    ],
  },
  {
    title: "Engineering",
    items: [
      "FastAPI",
      "Flask",
      "React",
      "Next.js",
      "Node.js",
      "Docker",
      "Git",
      "Linux",
      "REST APIs",
    ],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Vector DBs"],
  },
];

export type Role = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export const aboutIntroLead =
  "I got into engineering through curiosity about how ";
export const aboutIntroTail =
  " fail, and stayed for how satisfying it is to make them not fail.";

export const experience: Role[] = [
  {
    title: "Full Stack Engineer (Freelance)",
    company: "Renewable Power Solutions (NZ)",
    period: "March 2025 — Present",
    description:
      "Built and deployed a responsive Next.js corporate site optimized for performance and accessibility; designed branding assets; worked directly with stakeholders under real timelines.",
  },
  {
    title: "Generative AI Intern",
    company: "OpenHealthAgents (Health Innovators)",
    period: "Sept 2025 — Dec 2025",
    description:
      "Designed modular document ingestion, embedding, and retrieval pipelines; researched system architecture for an open-source research platform.",
  },
  {
    title: "AI Research Intern",
    company: "Suvidha Foundation",
    period: "April 2025 — May 2025",
    description:
      "Built a BERT/RoBERTa fake-news classifier, improving recall by 12% on noisy datasets through feature fusion; evaluated generalization and robustness across datasets.",
  },
];

export const education: Role[] = [
  {
    title: "B.Tech, Electronics & Computer Science (Honors in AI/ML)",
    company: "Vidyalankar Institute of Technology, University of Mumbai",
    period: "Nov 2022 — May 2026",
    description: "Pursued BTech in Electronics and Computer Science with Honors in AI/ML with a CGPA of 8.78",
  },
  {
    title: "Higher Secondary School",
    company: "Prakash Junior College of Commerce and Science",
    period: "June 2020 - March 2022",
    description:
      "Pursued Science stream with Physics, Chemistry, and Mathematics as subjects.",
  },
];

export const aboutClose = "Thanks for reading.";
