"use client";

/** Understated node-and-edge field — CSS opacity pulses only. */
export function NeuralField({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 12, y: 22 },
    { x: 28, y: 48 },
    { x: 45, y: 18 },
    { x: 58, y: 55 },
    { x: 72, y: 30 },
    { x: 88, y: 62 },
    { x: 35, y: 72 },
    { x: 65, y: 78 },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
    [3, 5],
    [4, 5],
    [1, 6],
    [3, 7],
    [6, 7],
    [5, 7],
  ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {edges.map(([a, b], i) => (
          <line
            key={`e-${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="currentColor"
            strokeWidth="0.15"
            className="edge-pulse text-foreground"
            style={
              {
                "--pulse-duration": `${8 + i * 0.5}s`,
                "--pulse-delay": `${i * 0.25}s`,
              } as React.CSSProperties
            }
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={`n-${i}`}
            cx={n.x}
            cy={n.y}
            r="0.55"
            className="node-pulse fill-foreground"
            style={
              {
                "--pulse-duration": `${5 + (i % 3)}s`,
                "--pulse-delay": `${i * 0.35}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </svg>

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 0.55px, transparent 0.65px)",
          backgroundSize: "22px 22px",
          color: "var(--foreground)",
        }}
      />
    </div>
  );
}

export function MatrixMesh({ variant = "default" }: { variant?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          color: "var(--foreground)",
          opacity: 0.05,
        }}
      />
      {variant === "security" && (
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-12deg, transparent, transparent 18px, rgba(128,128,128,0.06) 18px, rgba(128,128,128,0.06) 19px)",
          }}
        />
      )}
      {variant === "nlp" && (
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(99,140,255,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(140,120,255,0.15), transparent 35%)",
          }}
        />
      )}
      {variant === "agent" && (
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 40%, rgba(168,130,255,0.3), transparent 45%)",
          }}
        />
      )}
    </div>
  );
}