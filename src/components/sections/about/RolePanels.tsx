import { Panel } from "@/components/sections/Panel";
import { SectionHead } from "@/components/ui/SectionHead";
import { education, experience, type Role } from "@/lib/data";
import { cn } from "@/lib/utils";

type Tone = "obsidian" | "bone";

function RoleList({ roles, tone }: { roles: Role[]; tone: Tone }) {
  const dark = tone === "obsidian";
  return (
    <ul
      className={cn(
        "mt-12 border-t",
        dark ? "border-bone-white/10" : "border-obsidian/15"
      )}
    >
      {roles.map((role) => (
        <li
          key={`${role.title}-${role.company}`}
          className={cn(
            "py-7 sm:py-8",
            dark ? "border-b border-bone-white/10" : "border-b border-obsidian/15"
          )}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3
              className={cn(
                "text-[17px] font-medium leading-snug sm:text-lg",
                dark ? "text-bone-white" : "text-obsidian"
              )}
            >
              {role.title}
            </h3>
            <span
              className={cn(
                "text-[12px] uppercase tracking-[0.14em]",
                dark ? "text-bone-white-faint" : "text-graphite"
              )}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              {role.period}
            </span>
          </div>
          <p
            className={cn(
              "mt-2 text-[13px]",
              dark ? "text-bone-white-faint" : "text-graphite"
            )}
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            {role.company}
          </p>
          <p
            className={cn(
              "mt-3 max-w-3xl text-pretty text-[15px] leading-relaxed",
              dark ? "text-bone-white-soft" : "text-graphite"
            )}
          >
            {role.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function ExperiencePanel() {
  return (
    <Panel className="bg-bone text-obsidian">
      <div className="pb-24 pt-28 sm:pb-28">
        <SectionHead tone="bone" eyebrow="Experience" title="Where I've worked" />
        <RoleList roles={experience} tone="bone" />
      </div>
    </Panel>
  );
}

export function EducationPanel() {
  return (
    <Panel className="grain bg-obsidian">
      <div className="pb-24 pt-28 sm:pb-28">
        <SectionHead eyebrow="Education" title="Where I learned" />
        <RoleList roles={education} tone="obsidian" />
      </div>
    </Panel>
  );
}
