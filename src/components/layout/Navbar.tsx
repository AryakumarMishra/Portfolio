"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLenis } from "lenis/react";
import { navLinks, siteConfig } from "@/lib/data";
import { easeOut } from "@/lib/motion";

/**
 * Navbar morph: at the top of the page the links sit centered. As the first
 * pinned section transition progresses (scrollY spanning one viewport), the
 * name fades in on the left and the links glide to the right — one
 * coordinated motion driven by the same scroll value.
 *
 * On mobile the centered links cross-fade out on scroll, a hamburger appears
 * on the right, and it opens a full-screen menu overlay.
 */
export function Navbar() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [bounds, setBounds] = useState({ centered: 0, right: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  const morph = useMotionValue(0);
  const smooth = useSpring(
    morph,
    reduceMotion
      ? { stiffness: 500, damping: 60 }
      : { stiffness: 120, damping: 24, mass: 0.6 }
  );
  const navX = useTransform(
    smooth,
    (p) => bounds.centered + (bounds.right - bounds.centered) * p
  );
  const nameX = useTransform(smooth, (p) => -10 * (1 - Math.min(p * 3, 1)));
  const nameOpacity = useTransform(smooth, (p) => Math.min(p * 3, 1));

  const mobileLinksOpacity = useTransform(smooth, [0.12, 0.42], [1, 0]);
  const mobileLinksPointer = useTransform(smooth, (p) =>
    p > 0.3 ? "none" : "auto"
  );
  const burgerOpacity = useTransform(smooth, [0.12, 0.42], [0, 1]);
  const burgerPointer = useTransform(smooth, (p) =>
    p > 0.3 ? "auto" : "none"
  );

  useLayoutEffect(() => {
    const measure = () => {
      const c = containerRef.current;
      const n = navRef.current;
      if (!c || !n) return;
      const cw = c.clientWidth;
      const nw = n.offsetWidth;
      const padding = parseFloat(getComputedStyle(c).paddingLeft);
      const centered = Math.max((cw - nw) / 2, 0);
      const right = Math.max(cw - nw - padding, centered);
      setBounds({ centered, right });
    };
    measure();
    window.addEventListener("resize", measure);

    const onScroll = () => {
      const p = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
      morph.set(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, [morph]);

  useEffect(() => {
    if (!menuOpen) return;
    lenis?.stop();
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      burgerRef.current?.focus();
    };
  }, [menuOpen, lenis]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-brass/25 bg-obsidian/90 backdrop-blur-sm">
        <div
          ref={containerRef}
          className="relative mx-auto flex h-16 max-w-7xl items-center px-6 sm:px-8"
        >
          <motion.div
            style={{ x: nameX, opacity: nameOpacity }}
            className="absolute inset-y-0 left-6 flex items-center sm:left-8"
          >
            <Link
              href="/"
              aria-label="Aryakumar Mishra — home"
              className="text-[15px] font-medium tracking-tight text-bone-white transition-colors duration-300 hover:text-brass"
            >
              {siteConfig.name}
            </Link>
          </motion.div>

          {/* Desktop: centered at top, glides right on scroll */}
          <div className="absolute inset-y-0 left-0 hidden items-center md:flex">
            <motion.nav
              ref={navRef}
              style={{ x: navX }}
              aria-label="Primary"
              className="flex items-center gap-6 sm:gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.18em] text-bone-white-soft transition-colors duration-300 hover:text-brass"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          </div>

          {/* Mobile: centered links that cross-fade to the hamburger on scroll */}
          <motion.nav
            style={{ opacity: mobileLinksOpacity, pointerEvents: mobileLinksPointer }}
            aria-label="Primary"
            className="absolute inset-0 flex items-center justify-center gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.18em] text-bone-white-soft transition-colors duration-300 hover:text-brass"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          <motion.button
            ref={burgerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            style={{ opacity: burgerOpacity, pointerEvents: burgerPointer }}
            className="absolute inset-y-0 right-6 flex items-center text-bone-white transition-colors duration-300 hover:text-brass sm:right-8 md:hidden"
          >
            <span className="relative block h-[10px] w-[18px]" aria-hidden="true">
              <span className="absolute left-0 top-0 h-px w-full bg-current" />
              <span className="absolute bottom-0 left-0 h-px w-full bg-current" />
            </span>
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-obsidian/85 backdrop-blur-lg md:hidden"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={
              reduceMotion ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0)" }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, clipPath: "inset(0 0 100% 0)", transition: { duration: 0.35, ease: easeOut } }
            }
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOut }}
          >
            <div className="relative z-10 flex h-16 items-center justify-between border-b border-brass/25 px-6 sm:px-8">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-[15px] font-medium tracking-tight text-bone-white transition-colors duration-300 hover:text-brass"
              >
                {siteConfig.name}
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-bone-white transition-colors duration-300 hover:text-brass"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav
              aria-label="Primary"
              className="relative z-10 flex flex-1 flex-col items-start justify-center gap-1 px-6 sm:px-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.5, ease: easeOut, delay: 0.08 + i * 0.07 }
                  }
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-4 py-2 text-[clamp(2.25rem,9vw,3rem)] font-semibold tracking-[-0.015em] text-bone-white transition-colors duration-300 hover:text-brass"
                  >
                    <span
                      className="text-[12px] tracking-[0.18em] text-brass"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      0{i + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOut, delay: 0.32 }}
              className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-3 px-6 pb-12 sm:px-8"
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[12px] uppercase tracking-[0.14em] text-bone-white-soft transition-colors duration-300 hover:text-brass"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {siteConfig.email}
              </a>
              {[
                { label: "GitHub", href: siteConfig.social.github },
                { label: "LinkedIn", href: siteConfig.social.linkedin },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] uppercase tracking-[0.14em] text-bone-white-faint transition-colors duration-300 hover:text-brass"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {link.label} ↗
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
