import { cn } from "@/lib/utils";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  tone?: "obsidian" | "bone";
  className?: string;
};

export function SectionHead({
  eyebrow,
  title,
  tone = "obsidian",
  className,
}: SectionHeadProps) {
  const dark = tone === "obsidian";
  return (
    <div className={cn(className)}>
      <p
        className={cn("eyebrow", dark ? "text-bone-white-faint" : "text-graphite")}
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-balance text-[clamp(1.75rem,3.8vw,2.75rem)] font-semibold leading-tight tracking-[-0.015em]",
          dark ? "text-bone-white" : "text-obsidian"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
