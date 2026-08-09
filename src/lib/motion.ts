export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.45, 0, 0.55, 1] as const;

export const revealHidden = { opacity: 0, y: 24 };
export const revealVisible = { opacity: 1, y: 0 };

export const viewportOnce = {
  once: true,
  margin: "-10% 0px -8% 0px" as const,
  amount: 0.15 as const,
};
