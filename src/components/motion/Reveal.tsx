"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { easeOut, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span" | "p";
  /**
   * When pinned, content stays static (no fade) so the stacking effect stays
   * crisp — the fade is only used for the plain-scroll fallback.
   */
  pinned?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  pinned = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (pinned || reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <Component
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease: easeOut, delay }}
    >
      {children}
    </Component>
  );
}
