import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-line pt-20 md:pt-28"
    >
      <div className="container-x">
        <SectionHeading index="02" label="Technical skills" />
        <Reveal>
          <h2
            id="skills-heading"
            className="mt-8 font-display text-fluid-3xl leading-[1.05]"
          >
            The toolkit, by discipline.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr]">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={0.04 * i}>
              <div className="border-t border-ink/70 pt-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em]">
                  <span className="mr-2 text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {group.category}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {group.items.map((item, j) => (
                    <span key={item}>
                      <span className="transition-colors hover:text-ink">
                        {item}
                      </span>
                      {j < group.items.length - 1 && (
                        <span aria-hidden="true" className="text-line">
                          {" · "}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
