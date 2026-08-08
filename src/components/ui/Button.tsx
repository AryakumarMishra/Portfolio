"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { springPress, springSoft } from "@/lib/motion";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

const variants = {
  primary:
    "bg-[var(--accent)] text-[var(--bg-base)] shadow-sm hover:shadow-md border border-transparent",
  secondary:
    "bg-background-elevated/80 text-foreground border border-border shadow-sm hover:border-border-strong hover:bg-background-elevated",
  ghost:
    "bg-transparent text-foreground-muted hover:text-foreground border border-transparent",
};

const sizes = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-12 px-7 text-[15px] gap-2",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  type = "button",
  onClick,
  disabled,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const reduceMotion = useReducedMotion();

  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium",
    "transition-colors duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:opacity-50 disabled:pointer-events-none",
    "select-none cursor-pointer",
    "will-change-transform",
    variants[variant],
    sizes[size],
    className
  );

  const motionProps = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02, y: -1 },
        whileTap: { scale: 0.985 },
        transition: springSoft,
      };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={springPress}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
