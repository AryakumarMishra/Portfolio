"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { navLinks, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => lenis?.start();
  }, [open, lenis]);

  const closeMenu = () => {
    setOpen(false);
    lenis?.start();
  };

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
        className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5"
      >
        <nav
          className={cn(
            "flex w-full max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2 sm:px-4",
            "transition-[background-color,border-color,box-shadow] duration-500 ease-out",
            scrolled
              ? "glass border border-border shadow-[var(--shadow-lg)]"
              : "border border-transparent bg-transparent"
          )}
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-3"
            onClick={closeMenu}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-[11px] font-semibold tracking-tight text-[var(--bg-base)] transition-transform duration-300 will-change-transform group-hover:scale-105">
              AM
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-foreground sm:inline">
              {siteConfig.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Get in touch
            </Button>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background-elevated/70 text-foreground md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-3.5">
                <span
                  className={cn(
                    "absolute left-0 top-[5px] block h-px w-full bg-current transition-transform duration-300",
                    open && "top-[6px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[9px] block h-px w-full bg-current transition-transform duration-300",
                    open && "top-[6px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="fixed inset-0 z-30 bg-[var(--overlay)] backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-28">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.05,
                      duration: 0.4,
                      ease: easeOut,
                    }}
                    className="rounded-2xl px-3 py-4 text-2xl font-medium tracking-tight text-foreground"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
