type LogoProps = {
  inverted?: boolean;
  className?: string;
};

/** A simple lowercase "a" mark with an accent endpoint dot. */
export function Logo({ inverted = false, className }: LogoProps) {
  return (
    <span
      className={`relative grid h-8 w-8 shrink-0 place-items-center border border-ink ${
        inverted
          ? "border-[#171816] bg-[#f5f4ef] text-[#171816]"
          : "bg-ink text-paper"
      } ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="font-display text-lg leading-none">a</span>
      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full border border-ink bg-accent" />
    </span>
  );
}
