import { Panel } from "@/components/sections/Panel";
import { ContactModal } from "@/components/ui/ContactModal";
import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <Panel id="contact" className="bg-bone text-obsidian">
      <div className="w-full pb-28 pt-28 sm:pb-32">
        <div className="hairline mb-20 w-full" aria-hidden="true" />

        <p
          className="eyebrow text-graphite"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          Contact
        </p>

        <h2 className="mt-8 text-balance text-[clamp(2.5rem,6.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-obsidian">
          Let&apos;s Build
          <br />
          Intelligent Systems
        </h2>

        <ContactModal email={siteConfig.email} />

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
          {[
            { label: "GitHub", href: siteConfig.social.github },
            { label: "LinkedIn", href: siteConfig.social.linkedin },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[13px] uppercase tracking-[0.16em] text-graphite"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              {link.label} ↗
            </a>
          ))}
          <span
            className="text-[13px] uppercase tracking-[0.16em] text-graphite/70"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            {siteConfig.location}
          </span>
        </div>
      </div>
    </Panel>
  );
}
