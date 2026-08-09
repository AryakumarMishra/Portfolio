import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StackedPanels } from "@/components/motion/StackedPanels";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ProjectsIntro } from "@/components/projects/ProjectsIntro";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of systems Aryakumar Mishra has built — LLM red-teaming, agentic DevOps, air-gapped RAG, and computer-vision tooling.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-obsidian">
      <Navbar />
      <main>
        <StackedPanels pinCount={6}>
          <ProjectsIntro />
          {projects.map((project, i) => (
            <ProjectSection
              key={project.id}
              project={project}
              tone={i % 2 === 0 ? "bone" : "obsidian"}
            />
          ))}
        </StackedPanels>
      </main>
      <Footer />
    </div>
  );
}
