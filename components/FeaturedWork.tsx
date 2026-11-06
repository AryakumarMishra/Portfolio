import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectRow } from "@/components/projects/ProjectsSection";

export function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="pt-20 md:pt-28">
      <div className="container-x">
        <SectionHeading index="01" label="Featured work" />
        <Reveal>
          <h2
            id="work-heading"
            className="mt-8 max-w-3xl font-display text-fluid-3xl leading-[1.05]"
          >
            Selected Work.<br></br>
            Built, tested, and shipped
          </h2>
        </Reveal>
        <div className="mt-14 md:mt-20">
          {projects.slice(0, 2).map((project, i) => (
            <ProjectRow key={project.id} project={project} flip={i % 2 === 1} />
          ))}
        </div>
        <Reveal>
          <div className="flex justify-center pb-20 md:pb-28 mt-5">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 border border-ink px-7 py-3.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
            >
              View All Projects
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
