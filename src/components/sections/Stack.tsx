"use client";

import { motion, useReducedMotion } from "framer-motion";
import { capabilities, skillGroups } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

function TechChip({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-flex items-center rounded-full border border-border bg-background-elevated/80 px-3.5 py-1.5 text-[13px] font-medium text-foreground-muted shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-border-strong hover:text-foreground"
      initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }}
      whileInView={
        reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.03,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }
      }
    >
      {label}
    </motion.span>
  );
}

export function Stack() {
  return (
    <Section id="stack" className="py-16 sm:py-20 lg:py-24">
      <Reveal>
        <SectionHeader
          label="Stack & capabilities"
          title="The tools behind the work"
          description="Grouped by the jobs I actually do with them: model development, LLM apps, backends, and deployment. Not a résumé checklist."
        />
      </Reveal>

      {/* Capability pillars */}
      <Stagger
        className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        stagger={0.08}
      >
        {capabilities.map((item, index) => (
          <StaggerItem key={item.title}>
            <div className="card-premium group flex h-full flex-col p-6 sm:p-7">
              <span className="mb-8 font-mono text-[11px] font-medium tracking-wider text-foreground-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-[1.05rem]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Skill ecosystems — floating chips */}
      <div className="mt-16 space-y-10 sm:mt-20 sm:space-y-12">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.05}>
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-10 lg:items-start">
              <div className="lg:col-span-3">
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                  {group.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:col-span-9">
                {group.items.map((item, i) => (
                  <TechChip key={item} label={item} index={i + gi * 4} />
                ))}
              </div>
            </div>
            {gi < skillGroups.length - 1 && (
              <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent sm:mt-12" />
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
