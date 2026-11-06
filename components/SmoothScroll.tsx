"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        anchors: { offset: -72 },
      }}
      autoRaf
    >
      {children}
    </ReactLenis>
  );
}
