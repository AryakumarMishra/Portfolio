"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { HeroDiagram } from "./HeroDiagram";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="container-x pt-10 pb-14 md:pt-16 md:pb-20 lg:min-h-[78vh] lg:flex lg:flex-col lg:justify-center">
        <motion.p
          {...(reduceMotion ? {} : fadeUp(0))}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft"
        >
          <span aria-hidden="true" className="h-px w-8 bg-ink-soft/60" />
          {profile.heroMeta}
        </motion.p>

        <div className="mt-8 grid items-start gap-12 lg:mt-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
          <div>
            <motion.h1
              {...(reduceMotion ? {} : fadeUp(0.08))}
              id="hero-heading"
              className="font-display tracking-[-0.01em]"
            >
              <span className="block text-fluid-4xl leading-[0.98]">
                Aryakumar Mishra
              </span>
              <span className="mt-5 block text-fluid-2xl leading-[1.12] text-ink-soft md:mt-6">
                Building Intelligent systems.{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <em className="font-serif italic text-ink">Engineering</em>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 220 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-2 w-full text-accent"
                  >
                    <path
                      d="M2 9c60-7 130-7 216-2"
                      stroke="var(--color-ink)"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                useful products.
              </span>
            </motion.h1>

            <motion.p
              {...(reduceMotion ? {} : fadeUp(0.18))}
              className="mt-8 max-w-3xl text-fluid-xl leading-relaxed text-ink-soft"
            >
              I&apos;m Aryakumar Mishra, an AI/ML engineer and software developer who enjoys building intelligent systems — from experimenting with machine learning models to engineering the software that makes them useful in the real world.
            </motion.p>

            <motion.div
              {...(reduceMotion ? {} : fadeUp(0.26))}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-transparent hover:text-ink"
              >
                Explore my work
                <ArrowDown
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Get in touch
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            <motion.div
              {...(reduceMotion ? {} : fadeUp(0.34))}
              className="mt-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft"
            >
              <span
                aria-hidden="true"
                className="availability-dot h-2 w-2 rounded-full bg-[#9abd2f]"
              />
              {profile.availability}
            </motion.div>
          </div>

          <motion.div
            {...(reduceMotion ? {} : { ...fadeUp(0.3), initial: { opacity: 0, y: 10 } })}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <HeroDiagram />
          </motion.div>
        </div>

        <motion.div
          {...(reduceMotion ? {} : fadeUp(0.42))}
          className="mt-14 hidden w-fit lg:block"
        >
          <Link
            href="/work"
            aria-label="See featured work"
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
          >
            Scroll
            <motion.span
              aria-hidden="true"
              animate={reduceMotion ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={13} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
