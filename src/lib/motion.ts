/** Shared motion tokens — premium, restrained, GPU-friendly. */

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.45, 0, 0.55, 1] as const;

/** Soft spring for micro-interactions (buttons, chips). */
export const springSoft = {
  type: "spring" as const,
  stiffness: 380,
  damping: 28,
  mass: 0.8,
};

/** Snappier spring for press states. */
export const springPress = {
  type: "spring" as const,
  stiffness: 500,
  damping: 32,
  mass: 0.6,
};

/** Scroll reveal — opacity + translate only (no filter/blur). */
export const revealTransition = {
  duration: 0.75,
  ease: easeOut,
};

export const revealHidden = {
  opacity: 0,
  y: 22,
};

export const revealVisible = {
  opacity: 1,
  y: 0,
};

/** Stagger defaults for card grids. */
export const staggerFast = 0.07;
export const staggerMedium = 0.1;
export const staggerSlow = 0.14;

/** Viewport config for scroll-triggered reveals. */
export const viewportOnce = {
  once: true,
  margin: "-8% 0px -6% 0px" as const,
  amount: 0.12 as const,
};

/** Long ambient loops for gradient mesh (seconds). */
export const meshLoop = {
  blue: 48,
  purple: 56,
  pink: 42,
  indigo: 60,
  hero: 36,
};
