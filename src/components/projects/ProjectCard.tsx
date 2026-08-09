"use client";

import { type MouseEvent } from "react";
import { Magnetic } from "@/components/motion/Magnetic";
import { StatusPill, type Tone } from "@/components/projects/StatusPill";
import { useToast } from "@/components/ui/Toast";
import { type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  compact = false,
  tone = "obsidian",
}: {
  project: Project;
  compact?: boolean;
  tone?: Tone;
}) {
  const { toast } = useToast();
  const dark = tone === "obsidian";

  const handleLive = (event: MouseEvent<HTMLAnchorElement>) => {
    if (project.live === "#") {
      event.preventDefault();
      toast("This project is not yet hosted");
    }
  };

  const hasDetails = project.bullets.length > 0;

  return (
    <Magnetic className="h-full will-change-transform">
      <article
        className={cn(
          "group flex h-full flex-col border transition-colors duration-500",
          dark ? "border-brass/30 bg-obsidian-raised" : "border-obsidian/20 bg-bone-white",
          compact ? "p-6 sm:p-7" : "p-7 sm:p-10"
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <StatusPill status={project.status} tone={tone} />
          <div className="flex items-center gap-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-[12px] uppercase tracking-[0.14em] transition-colors duration-300 hover:text-brass",
                dark ? "text-bone-white-faint" : "text-graphite"
              )}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              GitHub ↗
            </a>
            <a
              href={project.live}
              onClick={handleLive}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-[12px] uppercase tracking-[0.14em] transition-colors duration-300 hover:text-brass",
                dark ? "text-bone-white-faint" : "text-graphite"
              )}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Live ↗
            </a>
          </div>
        </div>

        <h3
          className={cn(
            "font-semibold tracking-[-0.01em]",
            dark ? "text-bone-white" : "text-obsidian",
            compact ? "mt-6 text-2xl" : "mt-8 text-[clamp(1.5rem,3vw,2rem)]"
          )}
        >
          {project.title}
        </h3>
        <p
          className={cn(
            "mt-3 max-w-2xl text-pretty leading-relaxed",
            dark ? "text-bone-white-soft" : "text-graphite",
            compact ? "text-sm sm:text-[15px]" : "text-[15px] sm:text-base"
          )}
        >
          {project.tagline}
        </p>

        {hasDetails && (
          <>
            <div
              className={cn("h-px w-full bg-brass/25", compact ? "my-6" : "my-7")}
              aria-hidden="true"
            />

            <div className="grid gap-7 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <ul className={cn("space-y-3", compact && "space-y-2.5")}>
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={cn(
                      "flex gap-4 leading-relaxed",
                      dark ? "text-bone-white-soft" : "text-graphite",
                      compact ? "text-[13px] sm:text-[14px]" : "text-[14px] sm:text-[15px]"
                    )}
                  >
                    <span className="mt-px select-none text-brass" aria-hidden="true">
                      
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {project.stack.length > 0 && (
                <ul className="flex flex-wrap content-start gap-2 lg:justify-end">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className={cn(
                        "border px-3 py-1 text-[11px] uppercase tracking-[0.12em]",
                        dark ? "border-brass/25 text-bone-white-faint" : "border-obsidian/25 text-graphite"
                      )}
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </article>
    </Magnetic>
  );
}
