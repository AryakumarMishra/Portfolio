"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useReducedMotion } from "motion/react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

const observers = new Set<() => void>();

const subscribe = (notify: () => void) => {
  observers.add(notify);
  const observer = new MutationObserver(notify);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => {
    observers.delete(notify);
    observer.disconnect();
  };
};

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => true;

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    /* storage unavailable — theme just won't persist */
  }
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const reduceMotion = useReducedMotion();

  const toggle = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const dark = !document.documentElement.classList.contains("dark");
      const doc = document as ViewTransitionDocument;

      const supportsRipple =
        !reduceMotion && typeof doc.startViewTransition === "function";

      if (!supportsRipple) {
        applyTheme(dark);
        return;
      }

      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = doc.startViewTransition(() => applyTheme(dark));

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [reduceMotion]
  );

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-9 w-9 place-items-center border border-line bg-paper text-ink transition-colors hover:border-ink"
    >
      {isDark ? (
        <Sun size={15} aria-hidden="true" />
      ) : (
        <Moon size={15} aria-hidden="true" />
      )}
    </button>
  );
}
