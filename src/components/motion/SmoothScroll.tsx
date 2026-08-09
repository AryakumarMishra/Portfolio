"use client";

import { useLayoutEffect, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Site-wide smooth scroll. Lenis is driven from GSAP's ticker so both stay
 * frame-locked — the documented integration pattern for these two libraries
 * (lenis.on('scroll', ScrollTrigger.update) + gsap.ticker -> lenis.raf).
 *
 * The wiring lives in a child of <ReactLenis> and reads the instance through
 * useLenis(), because ReactLenis only creates the Lenis instance in a passive
 * effect — a parent layout effect would capture a stale `undefined`.
 */
function GsapSync() {
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (!lenis) return;

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready?.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", onScroll);
      window.removeEventListener("load", refresh);
    };
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        anchors: true,
        smoothWheel: !reduceMotion,
        syncTouch: false,
      }}
    >
      <GsapSync />
      {children}
    </ReactLenis>
  );
}
