"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { profile } from "@/lib/data";

export function ProjectLinks({ project }: { project: Project }) {
  const [toast, setToast] = useState<string | null>(null);
  const { live, source } = project.links;

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const handle = (href: string, message: string) => (event: React.MouseEvent) => {
    if (href === "#") {
      event.preventDefault();
      setToast(message);
    }
  };

  return (
    <div className="flex items-center gap-6">
      {live && (
        <a
          href={live.href}
          target={live.href === "#" ? undefined : "_blank"}
          rel={live.href === "#" ? undefined : "noreferrer"}
          onClick={handle(live.href, "This project is not yet hosted")}
          className="group inline-flex items-center gap-1.5 text-sm font-medium link-underline"
        >
          {live.label}
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      )}
      <a
        href={source && source.href !== "#" ? source.href : profile.github}
        target="_blank"
        rel="noreferrer"
        onClick={handle(
          source?.href ?? "",
          "Repository not public yet"
        )}
        className="group inline-flex items-center gap-1.5 text-sm font-medium link-underline"
      >
        GitHub
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 z-60 -translate-x-1/2 border border-line bg-ink px-5 py-3 font-mono text-xs tracking-wide text-paper"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
