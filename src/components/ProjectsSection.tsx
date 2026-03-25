import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description:
      "An NLP pipeline that classifies text sentiment using transformer-based models, trained on large-scale datasets with fine-tuned accuracy.",
    tags: ["Python", "NLP", "Transformers", "BERT"],
  },
  {
    title: "Image Classification System",
    description:
      "A deep learning model for multi-class image classification using convolutional neural networks with data augmentation techniques.",
    tags: ["PyTorch", "CNN", "Computer Vision"],
  },
  {
    title: "ML Portfolio Dashboard",
    description:
      "An interactive dashboard to visualize model performance metrics, training curves, and experiment tracking for ML projects.",
    tags: ["React", "Python", "Data Viz"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-2">02.</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Projects</h3>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
