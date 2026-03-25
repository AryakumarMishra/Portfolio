export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
}

export const projects: Project[] = [
  {
    title: "Sentiment Analysis Engine",
    description:
      "An NLP pipeline that classifies text sentiment using transformer-based models, trained on large-scale datasets with fine-tuned accuracy.",
    tags: ["Python", "NLP", "Transformers", "BERT"],
    github: "#",
    live: null,
  },
  {
    title: "Image Classification System",
    description:
      "A deep learning model for multi-class image classification using convolutional neural networks with data augmentation techniques.",
    tags: ["PyTorch", "CNN", "Computer Vision"],
    github: "#",
    live: null,
  },
  {
    title: "ML Portfolio Dashboard",
    description:
      "An interactive dashboard to visualize model performance metrics, training curves, and experiment tracking for ML projects.",
    tags: ["React", "Python", "Data Viz"],
    github: "#",
    live: "#",
  },
  {
    title: "Chatbot with RAG",
    description:
      "A retrieval-augmented generation chatbot that answers domain-specific queries by combining vector search with LLM responses.",
    tags: ["LangChain", "OpenAI", "FAISS", "Python"],
    github: "#",
    live: null,
  },
  {
    title: "Object Detection API",
    description:
      "A REST API for real-time object detection in images and video streams, built with YOLOv8 and served via FastAPI.",
    tags: ["YOLOv8", "FastAPI", "Computer Vision"],
    github: "#",
    live: null,
  },
  {
    title: "Stock Price Predictor",
    description:
      "A time-series forecasting model using LSTM networks to predict stock price trends based on historical market data.",
    tags: ["LSTM", "Keras", "Finance", "Python"],
    github: "#",
    live: null,
  },
  {
    title: "Text Summarizer",
    description:
      "An abstractive text summarization tool powered by fine-tuned T5 models, capable of condensing long articles into concise summaries.",
    tags: ["T5", "Hugging Face", "NLP"],
    github: "#",
    live: "#",
  },
  {
    title: "Recommendation System",
    description:
      "A collaborative filtering recommendation engine for movies using matrix factorization and neural collaborative filtering.",
    tags: ["Python", "Scikit-learn", "Deep Learning"],
    github: "#",
    live: null,
  },
];
