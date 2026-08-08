import { siteConfig, navLinks } from "@/lib/data";
import { Section } from "@/components/ui/Section";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Section
      as="footer"
      className="border-t border-border pb-10 pt-12 sm:pb-12 sm:pt-14"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium tracking-tight text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-foreground-muted">
            {siteConfig.role}. Building AI that gets used, not just run.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-foreground-subtle">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-xs text-foreground-subtle">
          Designed & built with care.
        </p>
      </div>
    </Section>
  );
}
