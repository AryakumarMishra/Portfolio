import { achievement, education } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Trophy } from "lucide-react";

export function AchievementsEducationSection() {
  return (
    <section
      id="record"
      aria-labelledby="record-heading"
      className="border-t border-line pt-20 md:pt-28"
    >
      <div className="container-x">
        <SectionHeading index="03" label="Achievements & education" />
        <h2 id="record-heading" className="sr-only">
          Achievements and education
        </h2>

        <div className="mt-12 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <article className="relative border-l-2 border-[#9abd2f] bg-accent/25 py-8 pl-6 pr-6 md:pl-10">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
                <Trophy size={13} aria-hidden="true" />
                {achievement.date}
              </p>
              <h3 className="mt-4 font-display text-fluid-2xl leading-tight">
                {achievement.title}
              </h3>
              <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
                {achievement.venue}
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-soft">
                {achievement.project}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="flex flex-col justify-between gap-10 border border-line p-6 md:p-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                  Education
                </p>
                <h3 className="mt-4 text-fluid-xl font-medium leading-snug tracking-tight">
                  {education.degree}
                </h3>
                <p className="mt-3 font-serif text-2xl italic">
                  {education.institution}
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
                  {education.period} — {education.location}
                </p>
              </div>
              <div className="flex items-end justify-between border-t border-line pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                  CGPA
                </p>
                <p className="font-display text-5xl leading-none">
                  {education.cgpa}
                  <span className="font-mono text-sm text-ink-soft"> / 10</span>
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
