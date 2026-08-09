"use client";

import { type ProjectStatus } from "@/lib/data";
import { cn } from "@/lib/utils";

export type Tone = "obsidian" | "bone";

const statusStyles: Record<
  ProjectStatus,
  { obsidian: string; bone: string; dotObsidian: string; dotBone: string }
> = {
  ACTIVE: {
    obsidian:
      "border-brass/40 text-brass group-hover:border-ember/50 group-hover:bg-ember-soft group-hover:text-ember",
    bone: "border-brass/60 text-brass group-hover:border-ember/60 group-hover:bg-ember-soft group-hover:text-ember",
    dotObsidian: "bg-brass group-hover:bg-ember",
    dotBone: "bg-brass group-hover:bg-ember",
  },
  DEPLOYED: {
    obsidian:
      "border-ember/40 text-ember group-hover:border-brass/50 group-hover:bg-brass-faint group-hover:text-brass",
    bone: "border-ember/60 text-ember group-hover:border-brass/60 group-hover:bg-brass-faint group-hover:text-brass",
    dotObsidian: "bg-ember group-hover:bg-brass",
    dotBone: "bg-ember group-hover:bg-brass",
  },
  OFFLINE: {
    obsidian:
      "border-brass/40 text-brass group-hover:border-ember/50 group-hover:bg-ember-soft group-hover:text-ember",
    bone: "border-brass/60 text-brass group-hover:border-ember/60 group-hover:bg-ember-soft group-hover:text-ember",
    dotObsidian: "bg-brass group-hover:bg-ember",
    dotBone: "bg-brass group-hover:bg-ember",
  },
  TBA: {
    obsidian:
      "border-graphite/50 text-graphite group-hover:border-bone-white-faint/40 group-hover:text-bone-white-faint",
    bone: "border-graphite/50 text-graphite group-hover:border-obsidian/50 group-hover:text-obsidian",
    dotObsidian: "bg-graphite group-hover:bg-bone-white-faint",
    dotBone: "bg-graphite group-hover:bg-obsidian",
  },
};

export function StatusPill({
  status,
  tone = "obsidian",
}: {
  status: ProjectStatus;
  tone?: Tone;
}) {
  const styles = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-3 py-1 text-[11px] uppercase tracking-[0.16em] transition-colors duration-500",
        tone === "obsidian" ? styles.obsidian : styles.bone
      )}
      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
    >
      <span
        className={cn(
          "h-[5px] w-[5px] rounded-full transition-colors duration-500",
          tone === "obsidian" ? styles.dotObsidian : styles.dotBone
        )}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
