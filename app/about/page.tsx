import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AchievementsEducationSection } from "@/components/AchievementsEducationSection";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Curiosity drives the build. Aryakumar Mishra works at the intersection of machine learning and software development — from transformer experiments to production AI systems.",
};

export default function AboutPage() {
  return (
    <main id="top">
      <AboutSection />
      <ExperienceSection />
      <AchievementsEducationSection />
      <CtaSection />
    </main>
  );
}
