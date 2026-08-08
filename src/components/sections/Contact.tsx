"use client";

import { siteConfig } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { NeuralField } from "@/components/ui/NeuralField";

export function Contact() {
  return (
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
                href={`mailto:${siteConfig.email}`}
                variant="primary"
                size="lg"
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
  );
}
