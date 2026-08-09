"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useToast } from "@/components/ui/Toast";

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      /* fall through to legacy path */
    }
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(textarea);
  return ok;
}

export function ContactModal({ email }: { email: string }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();

  const openModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const openMail = () => {
    window.location.href = `mailto:${email}`;
    closeModal();
  };

  const copyEmail = async () => {
    const ok = await copyText(email);
    closeModal();
    toast(ok ? "Email address copied" : "Could not copy email — try again");
  };

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open, lenis]);

  const cardTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 280, damping: 26 };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openModal}
        className="link-underline mt-14 inline-block cursor-pointer text-left text-[clamp(1.4rem,4vw,2.5rem)] font-medium tracking-[-0.01em] text-obsidian"
      >
        {email}
      </button>

      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            role="presentation"
          >
            <motion.button
              type="button"
              aria-label="Close"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
              className="absolute inset-0 h-full w-full cursor-default bg-obsidian/70 backdrop-blur-sm"
            />

            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              tabIndex={-1}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={cardTransition}
              className="relative w-full max-w-md border border-brass/30 bg-obsidian-raised px-8 py-9 sm:px-10"
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close dialog"
                className="absolute right-5 top-5 text-bone-white-faint transition-colors duration-300 hover:text-brass"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              <p
                className="eyebrow text-brass"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Get in touch
              </p>

              <h2
                id="contact-modal-title"
                className="mt-4 text-balance text-[clamp(1.4rem,3vw,1.75rem)] font-semibold leading-snug tracking-[-0.01em] text-bone-white"
              >
                How would you like to reach me?
              </h2>

              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  onClick={openMail}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 border border-brass/40 px-6 py-5 text-left transition-colors duration-300 hover:border-brass hover:bg-brass-faint"
                >
                  <span className="flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-brass">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                    Open Mail
                  </span>
                  <span
                    className="text-brass transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 border border-brass/40 px-6 py-5 text-left transition-colors duration-300 hover:border-brass hover:bg-brass-faint"
                >
                  <span className="flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-bone-white-soft transition-colors duration-300 group-hover:text-bone-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <rect x="9" y="9" width="12" height="12" rx="2" />
                      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                    </svg>
                    Copy Email Address
                  </span>
                  <span
                    className="text-bone-white-faint transition-colors duration-300 group-hover:text-brass"
                    aria-hidden="true"
                  >
                    ⧉
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
