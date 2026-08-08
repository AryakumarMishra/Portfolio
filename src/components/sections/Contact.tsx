"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { NeuralField } from "@/components/ui/NeuralField";
import { useToast } from "@/components/ui/Toast";
import { easeOut } from "@/lib/motion";

export function Contact() {
  const [emailOpen, setEmailOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!emailOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEmailOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [emailOpen]);

  const copyEmail = async () => {
    const value = siteConfig.email;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setEmailOpen(false);
    toast("Email address copied to clipboard.", "success");
  };

  return (
    <>
      <Section id="contact" className="py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card-solid px-8 py-16 text-center shadow-lg sm:rounded-[32px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <NeuralField className="opacity-50" />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 0%, var(--hero-glow-a) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 100%, var(--hero-glow-b) 0%, transparent 50%)",
              }}
            />

            <div className="relative mx-auto max-w-xl">
              <p className="section-label mb-5">Contact</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Let&apos;s build intelligent systems.
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-foreground-muted sm:text-lg">
                If you&apos;re working on AI that&apos;s heading toward real users, I&apos;d
                love to hear about it. I read every message that lands in my
                inbox.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setEmailOpen(true)}
                >
                  {siteConfig.email}
                </Button>
                <Button
                  href={siteConfig.social.linkedin}
                  variant="secondary"
                  size="lg"
                >
                  LinkedIn
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground-subtle">
                <a
                  href={siteConfig.social.github}
                  className="link-underline transition-colors duration-300 hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.social.twitter}
                  className="link-underline transition-colors duration-300 hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X / Twitter
                </a>
                <span className="text-foreground-subtle/60">·</span>
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <AnimatePresence>
        {emailOpen && (
          <motion.div
            key="email-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="fixed inset-0 z-[55] flex items-center justify-center bg-[var(--overlay)] px-4 backdrop-blur-xl"
            onClick={() => setEmailOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.4, ease: easeOut }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-[var(--card-solid)] shadow-[var(--shadow-lg)]"
            >
              <div className="relative p-8 sm:p-10">
                <NeuralField className="opacity-50" />
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setEmailOpen(false)}
                  className="absolute right-4 top-4 z-[2] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background-elevated/70 text-foreground-muted transition-colors duration-300 hover:text-foreground"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M1 1l10 10M11 1L1 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div className="relative">
                  <p className="section-label mb-3">Send an email</p>
                  <h3 className="text-balance text-2xl font-semibold tracking-tight text-foreground">
                    How would you like to reach me?
                  </h3>
                  <p className="mt-3 break-all text-sm font-medium text-[var(--accent)]">
                    {siteConfig.email}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      href={`mailto:${siteConfig.email}`}
                      variant="primary"
                      size="lg"
                      className="flex-1"
                      onClick={() => setEmailOpen(false)}
                    >
                      Open Mail
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="flex-1"
                      onClick={copyEmail}
                    >
                      Copy Email Address
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}