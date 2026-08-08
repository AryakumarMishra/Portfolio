"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { easeOut } from "@/lib/motion";

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="experience" className="py-16 sm:py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeader
              label="Experience"
              title="From research to shipped systems"
              description="Where I've practiced: taking AI research into working evaluations, pipelines, and products people depend on."
            />
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Stagger className="relative" stagger={0.12} delay={0.08}>
            {/* Animated spine — scaleY from top (transform only) */}
            <motion.div
              className="timeline-line absolute bottom-4 left-[7px] top-4 w-px origin-top bg-gradient-to-b from-border-strong via-border to-transparent"
              aria-hidden
              initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px", amount: 0.15 }}
              transition={{ duration: 1.1, ease: easeOut, delay: 0.1 }}
            />

            <div className="space-y-0">
              {experience.map((item, index) => (
                <StaggerItem key={`${item.role}-${item.company}`}>
                  <div className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
                    <div className="relative z-10 mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                      <motion.span
                        className="absolute h-3.5 w-3.5 rounded-full border border-border-strong bg-background-elevated shadow-sm"
                        initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          ease: easeOut,
                          delay: 0.15 + index * 0.1,
                        }}
                      />
                      <motion.span
                        className="relative h-1.5 w-1.5 rounded-full bg-foreground/40"
                        initial={reduceMotion ? false : { scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          ease: easeOut,
                          delay: 0.25 + index * 0.1,
                        }}
                      />
                      {/* Soft pulse — opacity only, once on enter */}
                      {!reduceMotion && (
                        <motion.span
                          className="absolute h-3.5 w-3.5 rounded-full border border-foreground/15"
                          initial={{ scale: 1, opacity: 0.45 }}
                          whileInView={{
                            scale: [1, 1.65, 1.65],
                            opacity: [0.4, 0, 0],
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            ease: easeOut,
                            delay: 0.35 + index * 0.12,
                          }}
                          aria-hidden
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                          {item.role}
                        </h3>
                        <span className="shrink-0 text-xs font-medium tracking-wide text-foreground-subtle sm:text-[13px]">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-foreground-muted">
                        {item.company}
                      </p>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-foreground-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
