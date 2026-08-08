export const siteConfig = {
  name: "Aryakumar Mishra",
  role: "AI Systems Engineer",
  tagline:
    "I build AI systems that make it out of the notebook and into production.",
  email: "aryakumar.ajaymishra@gmail.com",
  location: "India",
  availability: "Open to AI engineering roles & collaborations",
  social: {
    github: "https://github.com/aryakumarMishra",
    linkedin: "https://www.linkedin.com/in/aryakumar-mishra-747a39256/",
    twitter: "https://x.com",
  },
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  accent: string;
  metric: string;
  status: string;
  flagship?: boolean;
  featured?: boolean;
  metrics: ProjectMetric[];
  links: ProjectLink[];
  visual: "security" | "ml" | "agent" | "rag" | "cv" | "fraud";
};

export const projects: Project[] = [
  {
    title: "RedVector",
    category: "AI Security Platform",
    year: "2026",
    description:
      "A platform for poking holes in LLMs before they go live: prompt injections, jailbreaks, adversarial edge cases. It turns what breaks into a score a team can actually act on.",
    tags: [
      "AI Security",
      "FastAPI",
      "Evaluation Pipelines",
      "Orchestration",
      "Dashboards",
    ],
    accent: "from-rose-400/25 via-violet-400/12 to-transparent",
    metric: "Flagship · AI Security",
    status: "In production",
    flagship: true,
    featured: true,
    metrics: [
      { label: "Attack vectors", value: "30+" },
      { label: "Eval pipeline", value: "Automated" },
      { label: "Backend", value: "FastAPI" },
      { label: "Status", value: "Live" },
    ],
    links: [
      { label: "Live", href: "https://red-vector.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AryakumarMishra/RedVector" },
    ],
    visual: "security",
  },
  {
    title: "Sentinel-AI",
    category: "Agentic AI",
    year: "2026",
    description:
      "An agentic tool that finds the root of what breaks in a deployment, proposes a fix, and upon human approval, makes the changes, pushes the code, and creates a merge request",
    tags: ["Google ADK", "MCP", "GitLab", "FastAPI", "Gemini"],
    accent: "from-blue-500/20 via-indigo-400/10 to-transparent",
    metric: "Agentic AI",
    status: "Built → To-be-Hosted",
    featured: true,
    metrics: [
      { label: "Framework", value: "Google ADK" },
      { label: "Backend", value: "FastAPI" },
      { label: "Pipeline", value: "Agentic AI" },
      { label: "Status", value: "Hosted-Soon" },
    ],
    links: [
      { label: "Live", href: "#" },
      { label: "GitHub", href: "https://github.com/AryakumarMishra/Sentinel-AI" },
    ],
    visual: "agent",
  },
  {
    title: "FieldAssist AI",
    category: "Retrieval Augmented Reality",
    year: "2026",
    description:
      "An Offline-First, Air-Gapped RAG Engine for a legal knowledge base without any cloud or internet dependency",
    tags: ["Mistral", "Edge AI", "Streamlit", "Python"],
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    metric: "Air-Gapped System",
    status: "Deployable · Works Without Internet",
    featured: true,
    metrics: [
      { label: "Model", value: "Mistral 7B" },
      { label: "Constraint", value: "Air-Gapped" },
      { label: "UI", value: "Streamlit" },
      { label: "Status", value: "Complete" },
    ],
    links: [
      { label: "Live", href: "#" },
      { label: "GitHub", href: "https://github.com/AryakumarMishra/FieldAssist-AI" },
    ],
    visual: "rag",
  },
  {
    title: "Deepfake Detection System",
    category: "Computer Vision",
    year: "2025",
    description:
      "A Multi-Modal Deepfake Detection System that can identify the Deepfakes and morphes in Images, Videos, and Audios.",
    tags: ["Computer Vision", "Deepfake Detection", "PyTorch", "Transformers"],
    accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    metric: "Deepfake Detector",
    status: "Complete",
    metrics: [
      { label: "Method", value: "Ensemble Model" },
      { label: "Tools", value: "Computer Vision Models" },
      { label: "Stack", value: "PyTorch" },
      { label: "Accuracy", value: "Moderate" },
    ],
    links: [
      { label: "Live", href: "https://multimodal-deepfake-detector.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AryakumarMishra/Multimodal-Deepfake-Detector" },
    ],
    visual: "cv",
  },
  {
    title: "Predictive Maintenance Pipeline",
    category: "ML Pipeline",
    year: "2025",
    description:
      "Sensor telemetry turned into failure forecasts before downtime hits. An end-to-end pipeline from signal ingestion to a maintainable predictor in the field.",
    tags: ["XGBoost", "Time Series", "Python", "Feature Engineering"],
    accent: "from-sky-500/20 via-blue-400/10 to-transparent",
    metric: "Predictive ML",
    status: "Production-Minded",
    metrics: [
      { label: "Model", value: "XGBoost" },
      { label: "Horizon", value: "14 days" },
      { label: "Signal", value: "Sensor telemetry" },
      { label: "Status", value: "Complete" },
    ],
    links: [
      { label: "Live", href: "#" },
      { label: "GitHub", href: "https://github.com/AryakumarMishra/Machine-Failure-Prediction" },
    ],
    visual: "ml",
  },
  {
    title: "Fraud Detector",
    category: "ML Pipeline",
    year: "2024",
    description:
      "This project is a high-performance, modular AI system that detects fraudulent credit card transactions using XGBoost and the model has been trained on real-world credit card transaction data and achieves an impressive performance.",
    tags: ["XGBoost", "Anomaly Detection", "Imbalanced Data", "Python"],
    accent: "from-indigo-500/20 via-violet-400/10 to-transparent",
    metric: "XGBoost",
    status: "Complete",
    metrics: [
      { label: "Model", value: "XGBoost" },
      { label: "Signal", value: "0.99 F1" },
      { label: "Topic", value: "Credit Card Fraud Detection" },
      { label: "Status", value: "Complete" },
    ],
    links: [
      { label: "Live", href: "#" },
      { label: "GitHub", href: "https://github.com/AryakumarMishra/AI-Fraud-Detection" },
    ],
    visual: "fraud",
  },
];

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    description: "Model development, training, and classical ML.",
    items: [
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "Scikit-Learn",
      "XGBoost",
      "OpenCV",
    ],
  },
  {
    title: "LLMs & Agents",
    description: "Language models, evaluation, and agentic systems.",
    items: [
      "Hugging Face",
      "Prompt Engineering",
      "RAG",
      "AI Evaluation",
      "AI Agents",
      "MCP",
      "LangChain",
      "Vector Databases",
    ],
  },
  {
    title: "Backend",
    description: "APIs and systems that serve models in production.",
    items: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "Docker"],
  },
  {
    title: "Deployment & Ops",
    description: "Shipping, monitoring, and iterating on AI products.",
    items: ["Linux", "Git", "CI/CD", "AWS", "Azure"],
  },
];

export const capabilities = [
  {
    title: "AI Product Engineering",
    description:
      "I take the whole path: framing the problem, picking and testing a model, exposing it through an API, then putting it in front of real users.",
  },
  {
    title: "LLM Applications",
    description:
      "RAG, agents, and tool use, held together by the evaluation loops that keep today's language models from staying smart only in the demo.",
  },
  {
    title: "AI Security & Evaluation",
    description:
      "Red teaming and adversarial testing to find how a system fails before real users do. Failure modes treated as part of the design, not an afterthought.",
  },
  {
    title: "MLOps & Backend",
    description:
      "Inference services, orchestration, and architecture simple enough to trust. The work that turns an experiment into something that stays up.",
  },
];

export const experience = [
  {
    role: "Generative AI Intern",
    company: "OpenHealthAgents",
    period: "Sept. 2025 — Dec. 2025",
    description:
      "Designed modular pipelines for document ingestion, embedding, and retrieval (LLM-based workflows). Conducted research on system architecture and backend development for an open-source research platform.",
  },
  {
    role: "AI Research Intern",
    company: "Suvidha Foundation",
    period: "April 2025 — May 2025",
    description:
      "Built a transformer-based fake news detector with RoBERTa and sentiment-aware NLP. Owned the whole experiment pipeline: data, evaluation design, fine-tuning, then wiring it into a runnable system rather than leaving it in the report.",
  },
  {
    role: "AI Systems Builder",
    company: "Independent Projects",
    period: "2023 — Present",
    description:
      "Shipped production-minded AI products on my own: RedVector for LLM red teaming, a predictive maintenance pipeline, and an agentic knowledge system. Hands-on across modeling, backend, evaluation, and the product side.",
  },
];

export const principles = [
  {
    number: "01",
    title: "Research meets production",
    text: "A model doesn't really exist until it's served, monitored, and useful to someone. I work at that seam between the paper and the product.",
  },
  {
    number: "02",
    title: "Systems over demos",
    text: "I love experiments, but demos don't last. Honest evaluation and deployment discipline are what turn curious prototypes into products that hold up.",
  },
  {
    number: "03",
    title: "Intelligence with accountability",
    text: "How a system fails tells me as much as how it succeeds. Red teaming, metrics, and failure modes are part of the design, not something left for later.",
  },
];

export const focusAreas = [
  "AI Engineering",
  "Machine Learning",
  "LLM Applications",
  "AI Security",
  "MLOps",
  "Backend Systems",
];
