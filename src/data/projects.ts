export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
}

export const projects: Project[] = [
  {
    title: "FieldAssist AI",
    description:
      'An "Offline-First" information system which can provide grounded information and guidance on Military Laws, Legal Systems, and TCCC Guidelines based on the official documents and rule books.',
    tags: ['Python', 'Retrieval Augmented Generation', 'Natural Language Processing'],
    github: "https://github.com/AryakumarMishra/FieldAssist-AI",
    live: null,
  },
  {
    title: 'Multi-Modal RAG System',
    description: 'A Multi-Modal RAG System that can answer questions based on a combination of PDFs/Text, Images, and Audios.',
    tags: ['Python', 'Retrieval Augmented Generation', 'Natural Language Processing'],
    github: "https://github.com/AryakumarMishra/Multimodal-RAG",
    live: "https://multimodal-rag-teal.vercel.app/",
  },
  {
    title: 'Multi-Modal Deepfake Detection',
    description: 'A Multi-Modal Deepfake Detection system that can detect deepfakes in Images, Videos, as well as Audios.',
    tags: ['Python', 'PyTorch', 'Computer Vision', 'Audio Processing'],
    github: "https://github.com/AryakumarMishra/Multimodal-Deepfake-Detector",
    live: "https://multimodal-deepfake-detector.vercel.app/",
  },
  {
    title: 'AI Fraud Detection',
    description: 'A Machine Learning model that can detect fraudulent credit card transactions.',
    tags: ['Python', 'Machine Learning', 'XGBoost'],
    github: "https://github.com/AryakumarMishra/ai-fraud-detection",
    live: null,
  },
  {
    title: 'AI Based Machine Failure Detection',
    description: 'A machine learning project to predict industrial machine failures based on sensor data such as temperature, rotational speed, torque, and tool wear. This system aims to enable proactive maintenance, reduce unplanned downtime, and improve operational efficiency.',
    tags: ['Python', 'Machine Learning', 'XGBoost'],
    github: "https://github.com/AryakumarMishra/Machine-Failure-Prediction",
    live: null,
  },
];
