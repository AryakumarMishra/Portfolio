import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-line pt-20 md:pt-28"
    >
      <div className="container-x">
        <SectionHeading index="02" label="Experience" />
        <Reveal>
          <h2 id="experience-heading" className="sr-only">
            Professional experience
          </h2>
        </Reveal>

        <ol className="mt-4">
          {experience.map((job, i) => (
            <li key={job.org}>
              <Reveal delay={0.04 * i}>
                <article className="group grid gap-6 border-b border-line py-10 md:grid-cols-[180px_1fr] md:gap-12">
                  <div className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-ink-soft">
                    <p className="text-ink">{job.period.split(" — ")[0]}</p>
                    <p>{job.period.split(" — ")[1]}</p>
                  </div>
                  <div>
                    <h3 className="text-fluid-xl font-medium tracking-tight">
                      {job.role}
                      <span className="text-ink-soft"> · </span>
                      <span className="font-serif italic">{job.org}</span>
                      <span className="font-mono text-xs tracking-[0.14em] text-ink-soft">
                        {" "}
                        — {job.location}
                      </span>
                    </h3>
                    <ul className="mt-5 max-w-2xl space-y-2.5">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[9px] h-1 w-3 shrink-0 bg-ink/70"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
