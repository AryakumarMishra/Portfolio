import { Panel } from "@/components/sections/Panel";
import { aboutClose, siteConfig } from "@/lib/data";

export function ClosePanel() {
  return (
    <Panel className="bg-bone text-obsidian">
      <div className="w-full pb-24 pt-28 sm:pb-28">
        <p
          className="eyebrow text-graphite"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          Close
        </p>

        <h2 className="mt-8 text-balance text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-obsidian">
          {aboutClose}
        </h2>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 border border-obsidian/30 px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-obsidian transition-colors duration-300 hover:border-brass hover:text-brass"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Download Resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </Panel>
  );
}
