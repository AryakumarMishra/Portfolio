"use client";

import { motion, useReducedMotion } from "framer-motion";
import { meshLoop } from "@/lib/motion";

/**
 * Ambient gradient mesh — 30–60s transform loops only.
 * Filter-free soft gradients keep motion on the compositor.
 */
export function GradientBlobs() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="blob blob-blue"
        style={{
          width: 520,
          height: 520,
          top: "-8%",
          right: "-6%",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 36, -14, 18, 0],
                y: [0, 24, 48, 12, 0],
              }
        }
        transition={{
          duration: meshLoop.blue,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob-purple"
        style={{
          width: 440,
          height: 440,
          top: "28%",
          left: "-10%",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 28, -20, 10, 0],
                y: [0, -36, 18, -8, 0],
              }
        }
        transition={{
          duration: meshLoop.purple,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob-pink"
        style={{
          width: 380,
          height: 380,
          bottom: "8%",
          right: "10%",
          opacity: 0.35,
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -24, 18, -8, 0],
                y: [0, 28, -12, 16, 0],
              }
        }
        transition={{
          duration: meshLoop.pink,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob-green"
        style={{
          width: 320,
          height: 320,
          bottom: "20%",
          left: "20%",
          opacity: 0.28,
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 18, -22, 8, 0],
                y: [0, -18, 24, -6, 0],
              }
        }
        transition={{
          duration: meshLoop.green,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, var(--vignette) 100%)",
        }}
      />
    </div>
  );
}

export function HeroGlow() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute left-1/2 top-1/3 h-[480px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--hero-glow-a) 0%, var(--hero-glow-b) 40%, transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={
          reduceMotion
            ? { opacity: 0.6 }
            : {
                scale: [1, 1.06, 1],
                opacity: [0.52, 0.68, 0.52],
              }
        }
        transition={{
          duration: meshLoop.hero,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
