import { about, profile } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const interests = [
  { label: "MODELS", detail: "Transformers · Autoencoders · Adversarial ML" },
  { label: "SYSTEMS", detail: "RAG · Data Engineering · Evaluation" },
  { label: "PRODUCTS", detail: "Full-Stack Apps · APIs · Secure Deployment" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-line pt-20 md:pt-28"
    >
      <div className="container-x">
        <SectionHeading index="01" label="About" />        <div className="mt-12 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <Reveal>
              <h2
                id="about-heading"
                className="font-display text-fluid-3xl leading-[1.05]"
              >
                {about.heading}
              </h2>
            </Reveal>
            <div className="mt-8 max-w-3xl space-y-5">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph} delay={0.06 * i}>
                  <p className="text-fluid-xl leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                Read the résumé
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-14">
            <figure aria-label="A layered diagram of my interests: models, pipelines, products">
              <div className="border border-line">
                <p className="border-b border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  fig. 02 — interest stack
                </p>
                <div className="space-y-0">
                  {interests.map((item, i) => (
                    <div
                      key={item.label}
                      className="group border-b border-line last:border-b-0"
                    >
                      <div
                        className="flex items-baseline justify-between gap-4 px-4 py-6 transition-colors group-hover:bg-paper-deep"
                        style={{
                          width: `${100 - (interests.length - 1 - i) * 6}%`,
                        }}
                      >
                        <div>
                          <p className="font-mono text-sm tracking-[0.14em]">
                            {item.label}
                          </p>
                          <p className="mt-1.5 text-xs text-ink-soft">
                            {item.detail}
                          </p>
                        </div>
                        <span
                          aria-hidden="true"
                          className={`h-8 w-8 shrink-0 ${
                            i === 1 ? "bg-accent" : "bg-ink/85"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <figcaption className="border-t border-line px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                  Each layer feeds the next — models become systems, systems
                  become products.
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
