"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Panel } from "@/components/sections/Panel";
import { hero, siteConfig } from "@/lib/data";
import { easeOut } from "@/lib/motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <Panel id="hero" className="grain overflow-hidden bg-obsidian">
      <div className="absolute right-6 top-24 z-10 flex items-center gap-2 sm:right-8">
        <span className="h-[6px] w-[6px] rounded-full bg-brass" aria-hidden="true" />
        <span
          className="text-[11px] uppercase tracking-[0.18em] text-bone-white-faint"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          STATUS: {siteConfig.status}
        </span>
      </div>

      <motion.div
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        className="pb-24 pt-32 sm:pb-28"
      >
        <motion.h1
          variants={item}
          className="text-balance text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-bone-white"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-pretty text-[clamp(1.25rem,2.6vw,1.75rem)] leading-snug text-bone-white-soft"
        >
          An AI engineer who builds the{" "}
          <em className="font-serif italic text-brass">
            {hero.accentWord}
          </em>
          {" - LLMs, retrieval, agents - and knows how to make them hold up "}
          under pressure.
        </motion.p>
      </motion.div>
    </Panel>
  );
}
