"use client";

import { motion, useReducedMotion } from "framer-motion";
import { focusAreas, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HeroGlow } from "@/components/ui/GradientBlobs";
import { NeuralField } from "@/components/ui/NeuralField";
import { easeOut } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.11,
        delayChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: easeOut,
      },
    },
  };

  return (
    <Section
      id="top"
      className="relative flex min-h-[100svh] items-center pb-20 pt-32 sm:pb-28 sm:pt-36"
    >
      <HeroGlow />
      <NeuralField className="opacity-80" />

      <motion.div
        className="relative mx-auto max-w-4xl text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated/70 px-3.5 py-1.5 text-xs font-medium text-foreground-muted shadow-sm backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              {!reduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>
            {siteConfig.availability}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-5 text-sm font-medium tracking-wide text-foreground-muted sm:text-[15px]"
        >
          {siteConfig.role} · Machine Learning · LLM Systems
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]"
        >
          Engineering intelligence
          <br className="hidden sm:block" />{" "}
          <span className="text-foreground-muted">into real products.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-foreground-muted sm:mt-8 sm:text-lg sm:leading-relaxed"
        >
          I build AI that does real work: production ML pipelines, LLM
          applications, security tooling for models, and the backends that
          quietly hold it all together. From experiment to infrastructure -
          most of the fun is in the last mile.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4"
        >
          <Button href="#work" variant="primary" size="lg">
            View Projects
          </Button>
          <Button href="#stack" variant="secondary" size="lg">
            View tech stack
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs font-medium tracking-wide text-foreground-subtle sm:mt-20 sm:gap-x-6 sm:text-[13px]"
        >
          {focusAreas.map((area, i) => (
            <span
              key={area}
              className="inline-flex items-center gap-5 sm:gap-6"
            >
              {i > 0 && (
                <span className="hidden h-1 w-1 rounded-full bg-foreground-subtle/50 sm:inline-block" />
              )}
              <span>{area}</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
