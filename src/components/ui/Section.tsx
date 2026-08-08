import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "footer" | "header";
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn("relative w-full", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12",
          containerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && <p className="section-label mb-4">{label}</p>}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-foreground-muted sm:text-lg sm:leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
