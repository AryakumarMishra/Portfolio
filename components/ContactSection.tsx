import Link from "next/link";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { contact, profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { BrandIcon } from "@/components/BrandIcon";

const socials = [
  { label: "GitHub", href: "https://github.com/AryakumarMishra", brand: "github" as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aryakumar-mishra-747a39256/", brand: "linkedin" as const },
  { label: "X / Twitter", href: "https://x.com/aryakumarmishr", brand: "x" as const },
  { label: "Résumé (PDF)", href: "https://drive.google.com/file/d/1PSYX-DTkRFEsChBQ82NJg-jFsj2LgTUk/view?usp=sharing", brand: "resume" as const },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-charcoal"
    >
      <div className="container-x py-20 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal-soft">
          <span className="mr-2 text-ivory">01</span> — Contact
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <Reveal>
                <h2
                  id="contact-heading"
                  className="max-w-4xl font-display text-fluid-4xl leading-[1.02] text-ivory"
                >
                  {contact.headline}
                  <span className="text-accent">→</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 max-w-xl text-fluid-xl leading-relaxed text-charcoal-soft">
                  {contact.supporting}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    "Let's build something"
                  )}`}
                  className="group inline-flex items-center gap-2.5 border border-ink bg-accent px-7 py-3.5 text-base font-medium text-[#171816] transition-colors hover:bg-white"
                >
                  <Mail size={17} aria-hidden="true" />
                  Send email
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-sm tracking-wide text-charcoal-soft transition-colors hover:text-ivory link-underline"
                >
                  {profile.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-charcoal-soft">
                <span
                  aria-hidden="true"
                  className="availability-dot h-2 w-2 rounded-full bg-accent"
                />
                {profile.availability} — Mumbai, IST
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:pt-2">
            <div className="border border-charcoal-soft/40">
              <p className="border-b border-charcoal-soft/40 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal-soft">
                Socials &amp; documents
              </p>
              <ul>
                {socials.map((item) => (
                  <li key={item.label} className="border-b border-charcoal-soft/30 last:border-b-0">
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-paper/5"
                    >
                      <span className="flex items-center gap-3.5">
                        {item.brand === "resume" ? (
                          <FileText
                            size={18}
                            aria-hidden="true"
                            className="shrink-0 text-charcoal-soft transition-colors duration-300 group-hover:text-accent"
                          />
                        ) : (
                          <span className="text-charcoal-soft transition-colors duration-300 group-hover:text-accent">
                            <BrandIcon brand={item.brand} />
                          </span>
                        )}
                        <span className="text-fluid-xl font-medium tracking-tight text-ivory">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="shrink-0 text-charcoal-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="border-t border-charcoal-soft/40 px-6 py-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-charcoal-soft">
                Résumé opens as a Google Drive document
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
