type SectionHeadingProps = {
  index: string;
  label: string;
  className?: string;
};

export function SectionHeading({ index, label, className }: SectionHeadingProps) {
  return (
    <div
      className={`flex items-center justify-between gap-4 border-b border-line pb-3 ${className ?? ""}`}
    >
      <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase">
        <span className="text-ink">{index}</span> — {label}
      </p>
    </div>
  );
}
