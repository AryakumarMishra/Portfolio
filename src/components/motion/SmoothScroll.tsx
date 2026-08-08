"use client";

import { type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";

/**
 * Lenis smooth scrolling, mounted once at the root.
 * Respects prefers-reduced-motion and keeps native touch scrolling.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: { offset: -80 },
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}