export const profile = {
  name: "Aryakumar Mishra",
  role: "AI/ML Engineer & Full-Stack Developer",
  location: "Mumbai, India",
  email: "aryakumar.ajaymishra@gmail.com",
  github: "https://github.com/AryakumarMishra",
  linkedin: "https://www.linkedin.com/in/aryakumar-mishra-747a39256/",
  x: "https://x.com/aryakumarmishr",
  resume:
    "https://drive.google.com/file/d/1PSYX-DTkRFEsChBQ82NJg-jFsj2LgTUk/view?usp=sharing",
  availability: "Open to opportunities",
  heroMeta: "AI / ML ENGINEERING · FULL-STACK DEVELOPMENT · INDIA",
} as const;

export const nav = [
  { id: "home", label: "Index", href: "/" },
  { id: "work", label: "Work", href: "/work" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export type ProjectLink = { label: string; href: string } | null;

export type Project = {
  number: string;
  id: string;
  name: string;
  title: string;
  description: string;
  stack: string[];
  category: string;
  points: string[];
  status?: "deployed";
  links: { live?: ProjectLink; source?: ProjectLink };
};

export const projects: Project[] = [
  {
    number: "P·01",
    id: "redvector",
    name: "RedVector",
    title: "RedVector - Adversarial LLM Testing Framework",
    description:
      "A plugin-based red-teaming framework for evaluating LLM applications against security vulnerabilities and OWASP LLM Top 10 attack categories.",
    stack: ["FastAPI", "LiteLLM", "React", "Docker", "Render", "Vercel"],
    category: "AI SECURITY",
    points: [
      "Plugin-based testing framework",
      "Covers seven attack categories",
      "Modular evaluators and target adapters",
      "Supports HTTP-based application testing",
      "Dashboard for monitoring and evaluation",
    ],
    links: {
      live: { label: "Live", href: "https://redvector.vercel.app/" },
      source: { label: "GitHub", href: "https://github.com/AryakumarMishra/RedVector" },
    },
  },
  {
    number: "P·02",
    id: "sar-anomaly",
    name: "SAR Anomaly Detector",
    title: "SAR Anomaly Detector - Unsupervised Computer Vision",
    description:
      "An unsupervised anomaly detection system that learns background patterns in synthetic aperture radar imagery to identify unusual regions associated with potential ships.",
    stack: [
      "Python",
      "PyTorch",
      "Convolutional Autoencoder",
      "SSDD Dataset",
      "Anomaly Detection",
      "Reconstruction-Error Heatmaps",
    ],
    category: "COMPUTER VISION",
    points: [
      "Trained on 13,920 background patches",
      "Convolutional autoencoder architecture",
      "Reconstruction-error heatmaps for anomaly localization",
      "Achieved a best validation reconstruction MSE of 0.0027922 after 50 epochs",
    ],
    links: {
      live: { label: "Live", href: "#" },
      source: { label: "GitHub", href: "https://github.com/AryakumarMishra/SAR-Anomaly-Detector" },
    },
  },
  {
    number: "P·03",
    id: "fieldassist",
    name: "FieldAssist AI",
    title: "FieldAssist AI - Air-Gapped RAG Engine",
    description:
      "A secure, air-gapped retrieval-augmented generation system designed to run completely offline for reliable access to legal and procedural information.",
    stack: [
      "Python",
      "RAG",
      "Vector Databases",
      "FastAPI",
      "React",
      "Enterprise AI",
    ],
    category: "RETRIEVAL-AUGMENTED GENERATION",
    points: [
      "Independent retrieval and generation architecture",
      "Multidomain retrieval",
      "Three specialized corpora",
      "Domain-isolation across retrieval systems",
      "Secure deployment in constrained environments",
    ],
    links: {
      live: { label: "Live", href: "#" },
      source: { label: "GitHub", href: "https://github.com/AryakumarMishra/FieldAssist-AI" },
    },
  },
  {
    number: "P·04",
    id: "sentinel-ai",
    name: "Sentinel AI",
    title: "Sentinel AI — Agentic DevOps Pipeline",
    description:
      "An autonomous agentic DevOps pipeline — self-healing CI/CD orchestration.",
    stack: ["FastAPI", "Next.js", "Google ADK", "Gemini"],
    category: "AGENTIC AI",
    points: [
      "Finds the root cause of what breaks in a deployment and proposes a fix",
      "Upon human approval, makes the changes, pushes the code, and creates a merge request",
      "Self-healing CI/CD orchestration end to end",
    ],
    status: "deployed",
    links: {
      live: { label: "Live", href: "https://sentinelai-amber.vercel.app/" },
      source: { label: "GitHub", href: "https://github.com/AryakumarMishra/Sentinel-AI" },
    },
  },
  {
    number: "P·05",
    id: "deepfake-detector",
    name: "Deepfake Detector",
    title: "Deepfake Detector — Multi-Modal Detection System",
    description:
      "A multi-modal deepfake detection system that identifies deepfakes and morphs in images, videos, and audio.",
    stack: ["FastAPI", "React", "Transformer", "ResNet", "Ensemble"],
    category: "MULTI-MODAL AI",
    points: [
      "Identifies deepfakes and morphs across images, videos, and audio",
      "Multi-modal analysis pipeline",
      "Ensemble of Transformer and ResNet backbones",
    ],
    status: "deployed",
    links: {
      live: { label: "Live", href: "https://multimodal-deepfake-detector.vercel.app/" },
      source: { label: "GitHub", href: "https://github.com/AryakumarMishra/Multimodal-Deepfake-Detector" },
    },
  },
  {
    number: "P·06",
    id: "machine-failure",
    name: "Machine Failure Prediction",
    title: "Machine Failure Prediction — Predictive Maintenance",
    description:
      "A machine-learning system that predicts potential equipment failures using operational sensor data.",
    stack: ["Python", "XGBoost", "Scikit-learn", "SMOTE", "Streamlit"],
    category: "APPLIED ML",
    points: [
      "UCI AI4I 2020 predictive maintenance dataset",
      "Handles imbalanced failure data",
      "Sensor and operational features",
      "Streamlit prediction interface",
    ],
    links: {
      live: { label: "Live", href: "#" },
      source: { label: "GitHub", href: "https://github.com/AryakumarMishra/Machine-Failure-Prediction" },
    },
  },
];

export const about = {
  heading: "Curiosity drives the build.",
  paragraphs: [
    "I'm an AI/ML engineer and software developer who enjoys building intelligent systems and solving problems through engineering.",
    "My work spans machine learning, computer vision, adversarial AI, and generative AI. From developing anomaly detection pipelines for satellite imagery to building LLM security testing frameworks and retrieval systems, I enjoy exploring how different technologies can be brought together to solve real-world problems.",
    "Beyond experimenting with models, I'm interested in the engineering that makes them work in practice, designing architectures, building reliable pipelines, developing applications, and understanding the systems behind them. I enjoy taking ideas beyond experimentation and turning them into something people can actually use.",
  ],
};

export const experience = [
  {
    org: "Renewable Power Solutions",
    location: "New Zealand",
    role: "Full Stack Engineer — Freelance",
    period: "March 2025 — Present",
    points: [
      "Built and deployed a responsive Next.js corporate website optimized for performance and accessibility.",
      "Designed branding assets, including brochures, business cards, and digital materials.",
      "Collaborated with stakeholders to deliver production-ready features under strict timelines.",
    ],
  },
  {
    org: "OpenHealthAgents",
    location: "Health Innovators",
    role: "Generative AI Intern",
    period: "September 2025 — December 2025",
    points: [
      "Designed modular pipelines for document ingestion, embedding, and retrieval in LLM-based workflows.",
      "Conducted research on system architecture and backend development for an open-source research platform.",
    ],
  },
  {
    org: "Suvidha Foundation",
    location: "Mumbai",
    role: "AI Research Intern",
    period: "April 2025 — May 2025",
    points: [
      "Built a BERT/RoBERTa-based fake news classifier, improving recall by 12% on noisy datasets through feature fusion.",
      "Evaluated model generalization and classification robustness across diverse political statements.",
    ],
  },
] as const;

export const skills = [
  {
    category: "Programming",
    items: ["Python", "C++", "SQL", "JavaScript"],
  },
  {
    category: "AI/ML & Generative AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Transformers",
      "RAG",
      "LLM Fine-Tuning",
      "LLM Orchestration",
      "Adversarial ML",
      "MCP",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    category: "Backend & Data Engineering",
    items: ["FastAPI", "Flask", "Node.js", "REST APIs", "PySpark"],
  },
  {
    category: "Databases & Cloud/DevOps",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Vector Databases",
      "AWS",
      "Docker",
      "Git",
      "Linux",
    ],
  },
  {
    category: "Core Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Analytical Thinking",
      "Leadership",
      "Communication",
      "Adaptability",
    ],
  },
] as const;

export const achievement = {
  title: "Smart India Hackathon — Grand Finalist",
  date: "December 2024",
  venue: "IIT Gandhinagar",
  project:
    "BuildVisionAI — a construction site monitoring platform using Flask and React, integrating YOLOv5 object detection and ResNet-50 + DeepLabV3+ for site analytics.",
} as const;

export const education = {
  institution: "Vidyalankar Institute of Technology",
  degree:
    "Bachelor of Technology — Electronics & Computer Science (Honors in AI/ML)",
  period: "November 2022 — May 2026",
  cgpa: "8.92",
  location: "Mumbai, India",
} as const;

export const contact = {
  headline: "Have something interesting to build?",
  supporting:
    "I'm always interested in thoughtful engineering problems, useful AI products, and collaborations that push ideas beyond the prototype.",
} as const;

export const footer = {
  note: "It works on my machine tho",
} as const;
