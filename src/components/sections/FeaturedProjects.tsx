import Link from "next/link";
import { Panel } from "@/components/sections/Panel";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHead } from "@/components/ui/SectionHead";
import { featuredProjects, projects } from "@/lib/data";

const featured = featuredProjects
  .map((id) => projects.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export function FeaturedProjects() {
  return (
    <Panel className="bg-bone text-obsidian">
      <div className="pb-16 pt-20 sm:pb-20 sm:pt-24">
        <SectionHead tone="bone" eyebrow="Selected work" title="Featured projects" />

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} compact tone="bone" />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/projects"
            className="link-underline text-[13px] uppercase tracking-[0.16em] text-graphite"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            View all projects →
          </Link>
        </div>
      </div>
    </Panel>
  );
}
