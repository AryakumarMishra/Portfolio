"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import { ScrollTrigger } from "@/lib/gsap";

type StackedContextValue = { pinned: boolean };
const StackedContext = createContext<StackedContextValue>({ pinned: true });

export function useStacked() {
  return useContext(StackedContext);
}

const desktopQuery = () => window.matchMedia("(min-width: 768px)");

function subscribe(callback: () => void) {
  const mq = desktopQuery();
  mq.addEventListener("change", callback);
  window.addEventListener("resize", callback);
  return () => {
    mq.removeEventListener("change", callback);
    window.removeEventListener("resize", callback);
  };
}

function getSnapshot() {
  return desktopQuery().matches;
}

function getServerSnapshot() {
  return true;
}

type StackedPanelsProps = {
  children: ReactNode;
  pinCount: number;
  className?: string;
};

/**
 * Full-viewport panels that stack: on scroll each next panel slides over the
 * pinned one, exactly reversed on scroll up (scrubbed to scroll position via
 * GSAP pinning). Disabled entirely under prefers-reduced-motion or on small
 * screens, where panels render as plain stacked sections instead.
 */
export function StackedPanels({
  children,
  pinCount,
  className,
}: StackedPanelsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const pinned = isDesktop && !reduceMotion;

  useLayoutEffect(() => {
    if (!pinned) return;
    const el = ref.current;
    if (!el) return;

    const panels = Array.from(
      el.querySelectorAll<HTMLElement>("[data-panel]")
    );
    if (panels.length === 0) return;

    const triggers = panels.slice(0, pinCount).map((panel) =>
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      })
    );

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready?.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      triggers.forEach((t) => t.kill());
      window.removeEventListener("load", refresh);
    };
  }, [pinned, pinCount]);

  return (
    <StackedContext.Provider value={{ pinned }}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </StackedContext.Provider>
  );
}
