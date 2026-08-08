"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  easeOut,
  revealHidden,
  revealTransition,
  revealVisible,
  viewportOnce,
} from "@/lib/motion";

const defaultVariants: Variants = {
  hidden: revealHidden,
  visible: {
    ...revealVisible,
    transition: revealTransition,
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span" | "p" | "h1" | "h2" | "h3";
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, once }}
      variants={defaultVariants}
      transition={{ delay, ...revealTransition }}
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.09,
  delay = 0,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: revealHidden,
        visible: {
          ...revealVisible,
          transition: {
            duration: 0.7,
            ease: easeOut,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.9,
        delay,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}

/** Section-level entrance: slight rise + fade for storytelling hierarchy. */
export function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -8% 0px", amount: 0.08 }}
      transition={{ duration: 0.85, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
