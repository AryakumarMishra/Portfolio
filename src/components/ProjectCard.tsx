import { Github, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const handleLiveClick = (e: React.MouseEvent) => {
    if (!project.live) {
      e.preventDefault();
      toast("This project is not hosted yet", {
        description: "Check out the GitHub repository instead.",
      });
    }
  };

  return (
    <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={project.live || "#"}
            target={project.live ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={handleLiveClick}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
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
  );
};

export default ProjectCard;
