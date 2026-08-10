"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
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

const desktopQuery = () => window.matchMedia("(min-width: 640px)");

function subscribeDesktop(callback: () => void) {
  const mq = desktopQuery();
  mq.addEventListener("change", callback);
  window.addEventListener("resize", callback);
  return () => {
    mq.removeEventListener("change", callback);
    window.removeEventListener("resize", callback);
  };
}

function getDesktopSnapshot() {
  return desktopQuery().matches;
}

function getServerSnapshot() {
  return true;
}

/**
 * Navbar morph: at the top of the page the links sit centered. As the first
 * pinned section transition progresses (scrollY spanning one viewport), the
 * name fades in on the left and the links glide to the right — one
 * coordinated motion driven by the same scroll value.
 *
 * On mobile, once scrolled, the centered links give way to a hamburger that
 * opens an animated full-screen menu.
 */
export function Navbar() {
  const reduceMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getServerSnapshot
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
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
  const mobileNavOpacity = useTransform(smooth, (p) => (p > 0.04 ? 0 : 1));
  const mobileNavPointer = useTransform(smooth, (p) =>
    p > 0.04 ? "none" : "auto"
  );
  const hamburgerOpacity = useTransform(smooth, (p) => (p > 0.04 ? 1 : 0));

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
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    if (!menuOpen) return;
    lenis?.stop();
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, lenis]);

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
            aria-label="Primary"
            style={{
              x: navX,
              opacity: isDesktop ? undefined : mobileNavOpacity,
              pointerEvents: isDesktop ? undefined : mobileNavPointer,
            }}
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

        <motion.button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          style={{
            opacity: isDesktop ? 0 : hamburgerOpacity,
            pointerEvents: isDesktop ? "none" : undefined,
          }}
          className="absolute inset-y-0 right-6 flex cursor-pointer items-center"
        >
          <span className="flex flex-col gap-[6px]" aria-hidden="true">
            <span className="h-px w-6 bg-bone-white" />
            <span className="h-px w-4 self-end bg-bone-white" />
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {!isDesktop && menuOpen && (
          <motion.div
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-obsidian"
          >
            <div className="flex h-16 items-center justify-between border-b border-brass/25 px-6">
              <span className="text-[15px] font-medium tracking-tight text-bone-white">
                {siteConfig.name}
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-bone-white-faint transition-colors duration-300 hover:text-brass"
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

            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-3 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.45,
                    ease: easeOut,
                    delay: reduceMotion ? 0 : 0.06 * (i + 1),
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 text-[clamp(1.75rem,8vw,2.5rem)] font-semibold tracking-[-0.01em] text-bone-white transition-colors duration-300 hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="border-t border-brass/25 px-6 pb-10 pt-6">
              <p
                className="text-[12px] uppercase tracking-[0.16em] text-bone-white-faint"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {siteConfig.email}
              </p>
              <div className="mt-4 flex gap-6">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[12px] uppercase tracking-[0.16em] text-bone-white-soft"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  GitHub ↗
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[12px] uppercase tracking-[0.16em] text-bone-white-soft"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
