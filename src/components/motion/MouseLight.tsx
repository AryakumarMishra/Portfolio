"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  useCallback,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type MouseLightProps = {
  children: ReactNode;
  className?: string;
  /** Radial glow size in px */
  size?: number;
  /** Light intensity 0–1 */
  intensity?: number;
  disabled?: boolean;
};

/**
 * Subtle mouse-follow radial lighting.
 * Uses transform-friendly motion values — no layout thrashing.
 * Disabled on touch / reduced-motion.
 */
export function MouseLight({
  children,
  className,
  size = 420,
  intensity = 0.55,
  disabled = false,
}: MouseLightProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const opacity = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 120, damping: 28, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 120, damping: 28, mass: 0.4 });
  const glowOpacity = useSpring(opacity, {
    stiffness: 180,
    damping: 30,
    mass: 0.3,
  });

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${x}% ${y}%, rgba(62,207,142,${0.16 * intensity}), transparent 55%)`;

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (disabled || reduceMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      rawX.set(px);
      rawY.set(py);
    },
    [disabled, reduceMotion, rawX, rawY]
  );

  const onEnter = useCallback(() => {
    if (disabled || reduceMotion) return;
    opacity.set(1);
  }, [disabled, reduceMotion, opacity]);

  const onLeave = useCallback(() => {
    opacity.set(0);
  }, [opacity]);

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
      {!reduceMotion && !disabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-0 mix-blend-soft-light"
          style={{
            background,
            opacity: glowOpacity,
            willChange: "opacity",
          }}
          aria-hidden
        />
      )}
    </div>
  );
}
