"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { MouseLight } from "@/components/motion/MouseLight";
import { MatrixMesh } from "@/components/ui/NeuralField";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { Button } from "@/components/ui/Button";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <MouseLight
      className={cn("h-full rounded-[var(--radius-card)]")}
      size={520}
      intensity={0.5}
    >
      <article className="card-premium group relative flex h-full flex-col overflow-hidden p-1">
        <div
          className={cn(
            "relative m-2 mb-0 overflow-hidden rounded-[20px] bg-gradient-to-br",
            project.accent,
            "aspect-[16/10] w-full sm:aspect-[16/8]"
          )}
        >
          <MatrixMesh variant={project.visual} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]" />

          <ProjectVisual project={project} />

          <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2 sm:bottom-5 sm:left-5">
            <span className="rounded-full bg-[var(--badge-bg)] px-3 py-1 text-[11px] font-medium text-foreground-muted shadow-sm backdrop-blur-md">
              {project.metric}
            </span>
            <span className="hover-reveal rounded-full border border-border bg-[var(--badge-bg)] px-2.5 py-1 text-[10px] font-medium text-foreground-muted shadow-sm backdrop-blur-md">
              {project.status}
            </span>
          </div>
        </div>

        <div className="relative z-[2] flex flex-1 flex-col p-6 sm:p-8">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-xs font-medium tracking-wide text-foreground-subtle">
              {project.category}
            </span>
            <span className="text-xs text-foreground-subtle">{project.year}</span>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-[1.35rem]">
            {project.title}
            {project.flagship && (
              <span className="ml-2 align-middle text-[10px] font-medium tracking-wider text-foreground-subtle uppercase">
                Flagship
              </span>
            )}
          </h3>

          <p className="mt-3.5 flex-1 text-[15px] leading-relaxed text-foreground-muted">
            {project.description}
          </p>

          {/* Metrics — opacity/transform reveal (no max-height) */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {project.metrics.map((m, i) => (
              <div
                key={m.label}
                className="hover-reveal rounded-xl border border-border bg-surface-inset px-2.5 py-2.5"
                style={{
                  transitionDelay: reduceMotion ? "0ms" : `${i * 40}ms`,
                }}
              >
                <div className="text-[10px] font-medium tracking-wide text-foreground-subtle">
                  {m.label}
                </div>
                <div className="mt-0.5 text-xs font-semibold tracking-tight text-foreground">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="hover-reveal-tag rounded-full border border-border bg-surface-inset px-2.5 py-1.5 text-[11px] font-medium text-foreground-muted"
                style={{
                  transitionDelay: reduceMotion ? "0ms" : `${i * 28}ms`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <ProjectLinks links={project.links} reduceMotion={reduceMotion} />
          </div>
        </div>

        {/* Ambient top wash — opacity only */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 rounded-[24px]"
          initial={false}
          aria-hidden
          style={{
            background:
              "radial-gradient(500px circle at 50% 0%, var(--mouse-light), transparent 55%)",
            opacity: 0,
          }}
          whileHover={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.5, ease: easeOut }}
        />
      </article>
    </MouseLight>
  );
}

export function Work() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section
      id="work"
      className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24"
    >
      <Reveal>
        <SectionHeader
          label="Selected systems"
          title="AI products, not just models"
          description="A few projects that grew from notebooks into things running for real people."
        />
      </Reveal>

      <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <Reveal delay={0.15} className="mt-10 flex justify-center sm:mt-12">
        <Button
          href="/projects"
          variant="secondary"
          size="lg"
          className="group"
        >
          View All Projects
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Button>
      </Reveal>
    </Section>
  );
}