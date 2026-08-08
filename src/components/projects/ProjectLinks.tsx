"use client";

import { type MouseEvent } from "react";
import { type ProjectLink } from "@/lib/data";
import { useToast } from "@/components/ui/Toast";

type ProjectLinksProps = {
  links: ProjectLink[];
  reduceMotion?: boolean | null;
  baseDelay?: number;
};

export function ProjectLinks({
  links,
  reduceMotion = false,
  baseDelay = 80,
}: ProjectLinksProps) {
  const { toast } = useToast();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href !== "#") return;
    e.preventDefault();
    toast("This project hasn't been hosted yet.", "info");
  };

  return (
    <div className="mt-6 flex items-center gap-4">
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className="hover-reveal link-underline text-xs font-medium text-foreground-muted transition-colors duration-300 hover:text-foreground"
          style={{
            transitionDelay: reduceMotion ? "0ms" : `${baseDelay + i * 40}ms`,
          }}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={
            link.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}