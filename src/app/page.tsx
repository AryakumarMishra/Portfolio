import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StackedPanels } from "@/components/motion/StackedPanels";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Toolkit } from "@/components/sections/Toolkit";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-obsidian">
      <Navbar />
      <main>
        <StackedPanels pinCount={3}>
          <Hero />
          <FeaturedProjects />
          <Toolkit />
          <Contact />
        </StackedPanels>
      </main>
      <Footer />
    </div>
  );
}
