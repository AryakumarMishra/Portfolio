import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All of Aryakumar Mishra's AI systems — LLM security, agentic AI, offline RAG, predictive ML, and NLP pipelines.",
};

export default function ProjectsPage() {
  return (
    <div className="grain relative min-h-screen">
      <GradientBlobs />
      <Navbar />
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}