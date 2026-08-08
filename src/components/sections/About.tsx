"use client";

import { siteConfig, principles } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function About() {
  return (
    <Section id="about" className="pt-12 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
      <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeader
              label="About"
              title="Building AI that ships"
              description="I work where machine learning and product engineering meet: curious about models, meticulous about systems, and focused on things real people actually use."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-foreground-muted sm:text-base">
              <p>
                I&apos;m not someone who lives entirely in the model. The part
                that gets me out of bed is the full journey: framing the
                problem, the data, the evaluation, the API, the security, and
                the screen a person ends up staring at.
              </p>
              <p>
                That usually means translating research into software: taking
                papers and prototypes and turning them into pipelines that run,
                and products that survive contact with real traffic.
              </p>
              <p>
                I stay a student by choice, but I also practice restraint.
                Simple interfaces, measurements that matter, and systems that
                won&apos;t fall apart when the AI stack shifts under them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs font-medium tracking-wide text-foreground-subtle">
                  Based in
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">
                  {siteConfig.location}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-wide text-foreground-subtle">
                  Focus
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">
                  AI systems & products
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-wide text-foreground-subtle">
                  Approach
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">
                  Research → Production
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-wide text-foreground-subtle">
                  Currently
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">
                  LLMs, Security, MLOps
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Stagger className="space-y-4" stagger={0.1}>
            {principles.map((principle) => (
              <StaggerItem key={principle.number}>
                <div className="card-premium group flex gap-5 p-6 sm:gap-6 sm:p-7">
                  <span className="shrink-0 font-mono text-xs font-medium tracking-wider text-foreground-subtle">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
