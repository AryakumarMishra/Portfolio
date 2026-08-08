"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { MouseLight } from "@/components/motion/MouseLight";
import { MatrixMesh } from "@/components/ui/NeuralField";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ProjectVisual({ project }: { project: Project }) {
  const chrome =
    "absolute inset-6 flex flex-col rounded-2xl border p-4 shadow-sm backdrop-blur-sm sm:inset-8 sm:p-5 border-[var(--media-chrome-border)] bg-[var(--media-chrome)]";

  if (project.visual === "security") {
    return (
      <div className={chrome}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
          </div>
          <span className="rounded-full bg-surface-inset px-2 py-0.5 font-mono text-[9px] tracking-wide text-foreground-muted">
            RED TEAM
          </span>
        </div>
        <div className="space-y-2">
          {[
            { w: "72%", c: "bg-rose-400/30", l: "inject" },
            { w: "48%", c: "bg-violet-400/30", l: "jailbreak" },
            { w: "91%", c: "bg-emerald-400/30", l: "eval pass" },
          ].map((row) => (
            <div key={row.l} className="flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-inset">
                <div
                  className={cn("h-full rounded-full", row.c)}
                  style={{ width: row.w }}
                />
              </div>
              <span className="font-mono text-[9px] text-foreground-subtle">
                {row.l}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-4 gap-1.5 pt-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-6 rounded-md bg-background-elevated/60 shadow-sm"
              style={{ opacity: 0.4 + (i % 3) * 0.2 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (project.visual === "nlp") {
    return (
      <div className={chrome}>
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-4/5 rounded-full bg-surface-inset" />
          <div className="h-2 w-3/5 rounded-full bg-surface-inset" />
          <div className="h-2 w-2/3 rounded-full bg-surface-inset" />
        </div>
        <div className="mt-5 flex gap-2">
          <div className="flex-1 rounded-xl border border-border bg-background-elevated/70 p-2.5 shadow-sm">
            <div className="font-mono text-[9px] text-foreground-subtle">
              RoBERTa
            </div>
            <div className="mt-1 text-xs font-semibold text-foreground">
              0.94 F1
            </div>
          </div>
          <div className="flex-1 rounded-xl border border-border bg-background-elevated/50 p-2.5 shadow-sm">
            <div className="font-mono text-[9px] text-foreground-subtle">
              Sentiment
            </div>
            <div className="mt-1 text-xs font-semibold text-foreground">
              Enhanced
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "ml") {
    return (
      <div className={chrome}>
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
        </div>
        <div className="flex flex-1 items-end gap-1.5 pb-1">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-emerald-500/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-mono text-[9px] text-foreground-subtle">
            failure risk · 14d horizon
          </span>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium text-[var(--accent)]">
            XGBoost
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={chrome}>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-400/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {["Retrieve", "Reason", "Act"].map((step, i) => (
          <div
            key={step}
            className="flex flex-col items-center justify-center rounded-xl border border-border bg-background-elevated/60 p-2 shadow-sm"
          >
            <span className="font-mono text-[8px] text-foreground-subtle">
              0{i + 1}
            </span>
            <span className="mt-1 text-[10px] font-medium text-foreground">
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-inset">
        <div className="h-full w-2/3 rounded-full bg-violet-400/35" />
      </div>
      <span className="mt-2 font-mono text-[9px] text-foreground-subtle">
        multi-agent · grounded RAG
      </span>
    </div>
  );
}

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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
