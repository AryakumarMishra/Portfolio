import { Panel } from "@/components/sections/Panel";

export function ProjectsIntro() {
  return (
    <Panel className="grain bg-obsidian">
      <div className="py-20 sm:py-28">
        <p
          className="eyebrow text-bone-white-faint"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          All work
        </p>
        <h1 className="mt-8 text-balance text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-bone-white">
          Projects
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-bone-white-soft">
          A selection of systems I&apos;ve built - LLM red-teaming, agentic
          pipelines, air-gapped retrieval, and computer-vision tooling.
        </p>
      </div>
    </Panel>
  );
}
