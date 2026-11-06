"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { nav, profile } from "@/lib/data";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const lenis = useLenis();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [menuOpen, lenis]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-colors ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-x flex h-16 items-center justify-between"
        >
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span className="text-sm font-medium tracking-tight">
              {profile.name}
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-[13px] tracking-wide uppercase transition-colors link-underline ${
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span className="mr-1.5 font-mono text-[11px] text-ink-soft/70">
                      {nav.findIndex((n) => n.id === item.id) + 1}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink md:flex"
            >
              <span
                aria-hidden="true"
                className="availability-dot h-2 w-2 rounded-full bg-[#9abd2f]"
              />
              {profile.availability}
            </Link>

            <ThemeToggle />

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
              className="relative grid h-9 w-9 place-items-center border border-line bg-paper text-ink md:hidden"
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <span aria-hidden="true" className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 block h-px w-full bg-current transition-all duration-300 ease-out ${
                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 block h-px w-full bg-current transition-all duration-300 ease-out ${
                    menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-paper md:hidden"
          >
            <ul className="container-x flex flex-col divide-y divide-line">
              {nav.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : 0.08 + index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="font-display text-3xl">{item.label}</span>
                    <span className="font-mono text-xs text-ink-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.4 }}
              className="mt-auto pb-10"
            >
              <div className="container-x flex flex-wrap items-center justify-between gap-4">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="availability-dot h-2 w-2 rounded-full bg-[#9abd2f]"
                  />
                  {profile.availability}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-[11px] tracking-wide text-ink-soft underline underline-offset-4"
                >
                  {profile.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
