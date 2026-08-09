import { Panel } from "@/components/sections/Panel";
import { aboutIntroLead, aboutIntroTail } from "@/lib/data";

export function IntroPanel() {
  return (
    <Panel className="grain bg-obsidian">
      <div className="pb-24 pt-32 sm:pb-28">
        <p
          className="eyebrow text-bone-white-faint"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          About
        </p>
        <h1 className="mt-10 max-w-4xl text-balance text-[clamp(2.25rem,5.2vw,4rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-bone-white">
          {aboutIntroLead}
          <em className="font-serif italic text-brass">systems</em>
          {aboutIntroTail}
        </h1>
      </div>
    </Panel>
  );
}
