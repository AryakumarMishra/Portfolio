"use client";

import { type MouseEvent } from "react";
import { Panel } from "@/components/sections/Panel";
import { StatusPill, type Tone } from "@/components/projects/StatusPill";
import { useToast } from "@/components/ui/Toast";
import { type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectSection({
  project,
  tone = "obsidian",
}: {
  project: Project;
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
    <Panel className={cn("text-obsidian", dark && "grain bg-obsidian", !dark && "bg-bone")}>
      <div className="py-20 sm:py-28">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <StatusPill status={project.status} tone={tone} />
          <div className="flex items-center gap-6">
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

        <h2
          className={cn(
            "mt-8 text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.015em]",
            dark ? "text-bone-white" : "text-obsidian"
          )}
        >
          {project.title}
        </h2>

        <p
          className={cn(
            "mt-5 max-w-3xl text-pretty text-lg leading-relaxed sm:text-xl",
            dark ? "text-bone-white-soft" : "text-graphite"
          )}
        >
          {project.tagline}
        </p>

        {hasDetails && (
          <>
            <div className="hairline mt-10 w-full" aria-hidden="true" />

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
              <ul className="space-y-4">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={cn(
                      "flex gap-4 text-pretty leading-relaxed",
                      dark ? "text-bone-white-soft" : "text-graphite"
                    )}
                  >
                    <span className="mt-px select-none text-brass" aria-hidden="true">
                      
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {project.stack.length > 0 && (
                <ul className="flex flex-wrap content-start gap-2">
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

        {!hasDetails && (
          <>
            <div className="hairline mt-10 w-full" aria-hidden="true" />
            <p
              className={cn(
                "mt-10 text-[12px] uppercase tracking-[0.18em]",
                dark ? "text-bone-white-faint" : "text-graphite"
              )}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Details and links will be posted here when this ships.
            </p>
          </>
        )}
      </div>
    </Panel>
  );
}
