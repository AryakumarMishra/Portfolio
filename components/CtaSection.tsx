import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/data";

export function CtaSection() {
  return (
    <section aria-labelledby="cta-heading" className="pt-20 md:pt-28">
      <div className="container-x">
        <Reveal>
          <div className="border border-line px-6 py-14 text-center md:px-12 md:py-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              {profile.availability}
            </p>
            <h2
              id="cta-heading"
              className="mx-auto mt-6 max-w-3xl font-display text-fluid-3xl leading-[1.05]"
            >
              Have something interesting to build?
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink-soft">
              Thoughtful engineering problems, useful AI products, and
              collaborations that push ideas beyond the prototype.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-transparent hover:text-ink"
              >
                Get in touch
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
              >
                Explore all work
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
