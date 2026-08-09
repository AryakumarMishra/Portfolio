import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StackedPanels } from "@/components/motion/StackedPanels";
import { IntroPanel } from "@/components/sections/about/IntroPanel";
import {
  EducationPanel,
  ExperiencePanel,
} from "@/components/sections/about/RolePanels";
import { ClosePanel } from "@/components/sections/about/ClosePanel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aryakumar Mishra — an AI/ML and full-stack engineer in Mumbai building LLM systems, RAG pipelines, and agentic AI.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-obsidian">
      <Navbar />
      <main>
        <StackedPanels pinCount={4}>
          <IntroPanel />
          <ExperiencePanel />
          <EducationPanel />
          <ClosePanel />
        </StackedPanels>
      </main>
      <Footer />
    </div>
  );
}
