"use client";

import { useReducedMotion } from "framer-motion";
import { type Project } from "@/lib/data";
import { MouseLight } from "@/components/motion/MouseLight";
import { MatrixMesh } from "@/components/ui/NeuralField";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { cn } from "@/lib/utils";

export function ProjectRow({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <MouseLight
      className="h-full rounded-[var(--radius-card)]"
      size={620}
      intensity={0.45}
    >
      <article className="card-premium group relative overflow-hidden rounded-[var(--radius-card)] p-1">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div
            className={cn(
              "relative m-2 mb-0 overflow-hidden rounded-[20px] bg-gradient-to-br",
              project.accent,
              "aspect-[16/9] w-full sm:aspect-[16/8] lg:mb-0 lg:aspect-auto lg:self-stretch"
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

          <div className="relative z-[2] flex flex-col self-center p-6 sm:p-8 lg:p-10">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-xs font-medium tracking-wide text-foreground-subtle">
                {project.category}
              </span>
              <span className="text-xs text-foreground-subtle">{project.year}</span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {project.title}
              {project.flagship && (
                <span className="ml-2 align-middle text-[10px] font-medium tracking-wider text-foreground-subtle uppercase">
                  Flagship
                </span>
              )}
            </h3>

            <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-foreground-muted">
              {project.description}
            </p>

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
              {project.links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover-reveal link-underline text-xs font-medium text-foreground-muted transition-colors duration-300 hover:text-foreground"
                  style={{
                    transitionDelay: reduceMotion ? "0ms" : `${80 + i * 40}ms`,
                  }}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[24px]"
          style={{
            background:
              "radial-gradient(600px circle at 50% 0%, var(--mouse-light), transparent 55%)",
            opacity: 0,
          }}
        />
      </article>
    </MouseLight>
  );
}