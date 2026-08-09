"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";

/**
 * Navbar morph: at the top of the page the links sit centered. As the first
 * pinned section transition progresses (scrollY spanning one viewport), the
 * name fades in on the left and the links glide to the right — one
 * coordinated motion driven by the same scroll value.
 */
export function Navbar() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [bounds, setBounds] = useState({ centered: 0, right: 0 });

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

  return (
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

        <div className="absolute inset-y-0 left-0 flex items-center">
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
      </div>
    </header>
  );
}
