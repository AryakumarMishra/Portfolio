"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

type Node = {
  x: number;
  y: number;
  label: string;
  caption: string;
  edges: number[];
};

type Edge = {
  a: number;
  b: number;
  curve: number;
};

const EDGES: Edge[] = [
  { a: 0, b: 1, curve: -34 },
  { a: 1, b: 2, curve: 30 },
  { a: 2, b: 3, curve: -30 },
  { a: 3, b: 4, curve: 26 },
  { a: 2, b: 4, curve: -62 },
];

const NODES: Node[] = [
  { x: 60, y: 84, label: "X₀", caption: "input", edges: [0] },
  { x: 168, y: 214, label: "W₂", caption: "weight", edges: [1] },
  { x: 250, y: 136, label: "h₃", caption: "hidden", edges: [2, 4] },
  { x: 322, y: 292, label: "σΣ", caption: "activation", edges: [3] },
  { x: 402, y: 190, label: "ŷ", caption: "output", edges: [] },
];

function edgePath(edge: Edge) {
  const from = NODES[edge.a];
  const to = NODES[edge.b];
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 + edge.curve;
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export function HeroDiagram() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const relatedEdges = new Set(
    active === null
      ? EDGES.map((_, i) => i)
      : NODES[active].edges.concat(
          EDGES.flatMap((e, i) => (e.a === active || e.b === active ? [i] : []))
        )
  );

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="rule-grid absolute inset-0 opacity-40 [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]"
      />
      <svg
        viewBox="0 0 460 400"
        className="relative block w-full"
        role="img"
        aria-label="Abstract diagram of a signal flowing through a small network of labeled nodes"
        onMouseLeave={() => setActive(null)}
      >
        <text
          x="18"
          y="26"
          fontSize="10"
          fill="var(--color-ink-soft)"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.16em" }}
        >
          FIG. 01 — SIGNAL FLOW
        </text>
        <text
          x="18"
          y="44"
          fontSize="10"
          fill="var(--color-ink-soft)"
          opacity="0.7"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          f(x) = σ(Wx + b)
        </text>

        {NODES.map((node) => (
          <text
            key={`cap-${node.label}`}
            x={node.x}
            y={node.y + 34}
            textAnchor="middle"
            fontSize="9.5"
            fill="var(--color-ink-soft)"
            className={active === NODES.indexOf(node) ? "opacity-100" : "opacity-60"}
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}
          >
            {node.caption}
          </text>
        ))}

        {EDGES.map((edge, i) => (
          <g key={i}>
            <path
              d={edgePath(edge)}
              fill="none"
              stroke="var(--color-line)"
              strokeWidth="10"
            />
            <motion.path
              d={edgePath(edge)}
              fill="none"
              stroke={
                active !== null && !relatedEdges.has(i)
                  ? "var(--color-charcoal-soft)"
                  : "var(--color-ink)"
              }
              strokeWidth={active !== null && relatedEdges.has(i) ? 1.6 : 1.1}
              className="pointer-events-none opacity-90"
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 1.2,
                delay: reduceMotion ? 0 : 0.4 + i * 0.16,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {NODES.map((node, i) => {
          const isActive = active === i;
          const isRelated = active !== null && relatedEdges.size > 0 && NODES[i].edges.some((e) => relatedEdges.has(e)) || (active !== null && EDGES.some((e, j) => relatedEdges.has(j) && (e.a === i || e.b === i)));
          return (
            <g
              key={node.label}
              tabIndex={-1}
              onMouseEnter={() => setActive(i)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 20 : 16}
                fill={
                  isActive
                    ? "var(--color-accent)"
                    : isRelated
                      ? "var(--color-accent)"
                      : "var(--color-paper)"
                }
                stroke="var(--color-ink)"
                strokeWidth="1.2"
                className="opacity-90"
                style={{ transition: "r 0.25s ease, fill 0.25s ease" }}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="26"
                fill="transparent"
                pointerEvents={reduceMotion ? "none" : "visiblePainted"}
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fontSize="13"
                fill="var(--color-ink)"
                style={{ fontFamily: "var(--font-mono)" }}
                pointerEvents="none"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        <g
          stroke="var(--color-ink-soft)"
          strokeWidth="1"
          opacity="0.55"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <line x1="18" y1="360" x2="442" y2="360" />
          {[0, 1, 2, 3].map((tick) => (
            <line
              key={tick}
              x1={24 + tick * 140}
              y1={356}
              x2={24 + tick * 140}
              y2={364}
            />
          ))}
          <text
            x="24"
            y="378"
            fontSize="9"
            fill="var(--color-ink-soft)"
            stroke="none"
          >
            t₀
          </text>
          <text
            x="408"
            y="378"
            fontSize="9"
            fill="var(--color-ink-soft)"
            stroke="none"
          >
            t₁
          </text>
        </g>
      </svg>
    </div>
  );
}
