import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const topProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-2">02.</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Projects</h3>

        <div className="grid gap-6">
          {topProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
