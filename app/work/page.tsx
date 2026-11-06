import type { Metadata } from "next";
import { AllProjectsSection } from "@/components/projects/ProjectsSection";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected engineering case studies: adversarial LLM testing, unsupervised computer vision, air-gapped RAG, and predictive maintenance.",
};

export default function WorkPage() {
  return (
    <main id="top">
      <AllProjectsSection />
      <CtaSection />
    </main>
  );
}
