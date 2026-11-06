import { ArrowUp } from "lucide-react";
import { footer, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-charcoal-soft/40 bg-charcoal pb-10">
      <div className="container-x flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <p className="text-sm text-ivory">&copy; {profile.name}</p>
        </div>

        <p className="font-serif text-lg italic text-ivory">
          {footer.note}
        </p>

        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-ivory transition-colors hover: link-underline"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-ivory transition-colors hover: link-underline"
          >
            LinkedIn
          </a>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory transition-colors hover:text-ivory"
          >
            Top
            <ArrowUp
              size={13}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
