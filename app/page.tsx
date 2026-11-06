import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { SkillsSection } from "@/components/SkillsSection";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Aryakumar Mishra | AI/ML Engineer & Full-Stack Developer",
};

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <FeaturedWork />
      <SkillsSection />
      <CtaSection />
    </main>
  );
}
