"use client";

import { projects } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectRow } from "@/components/projects/ProjectRow";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      className="pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      <Reveal>
        <SectionHeader
          label="Portfolio"
          title="All projects"
          description="Every system that grew from an experiment into something built to hold up — inference, evaluation, security, and the last-mile plumbing in between."
        />
      </Reveal>

      <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05} className="h-full">
            <ProjectRow project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}