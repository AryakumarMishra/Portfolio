import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="grain relative min-h-screen">
      <GradientBlobs />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
