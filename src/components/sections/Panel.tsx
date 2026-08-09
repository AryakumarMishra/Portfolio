"use client";

import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { useStacked } from "@/components/motion/StackedPanels";
import { cn } from "@/lib/utils";

type PanelProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Full-viewport stacking panel. When pinning is disabled (reduced motion or
 * small screens) the content falls back to a simple scroll-into-view fade.
 */
export function Panel({ children, className, id }: PanelProps) {
  const { pinned } = useStacked();

  return (
    <section
      id={id}
      data-panel
      className={cn("relative flex min-h-svh items-center", className)}
    >
      <Reveal pinned={pinned} className="w-full">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
          {children}
        </div>
      </Reveal>
    </section>
  );
}
