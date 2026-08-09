import { Panel } from "@/components/sections/Panel";
import { SectionHead } from "@/components/ui/SectionHead";
import { toolkit } from "@/lib/data";

export function Toolkit() {
  return (
    <Panel className="bg-obsidian">
      <div className="pb-24 pt-28 sm:pb-28">
        <SectionHead eyebrow="Toolkit" title="The stack" />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {toolkit.map((group) => (
            <div key={group.title}>
              <h3
                className="text-[12px] uppercase tracking-[0.18em] text-brass"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {group.title}
              </h3>
              <div className="mt-5 h-px w-10 bg-brass/40" aria-hidden="true" />
              <ul className="mt-5 space-y-3.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] leading-none text-bone-white-soft"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
