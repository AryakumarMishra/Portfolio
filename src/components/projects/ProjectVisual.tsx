import { type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const chrome =
  "absolute inset-6 flex flex-col rounded-2xl border p-4 shadow-sm backdrop-blur-sm sm:inset-8 sm:p-5 border-[var(--media-chrome-border)] bg-[var(--media-chrome)]";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "security") {
    return (
      <div className={chrome}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
          </div>
          <span className="rounded-full bg-surface-inset px-2 py-0.5 font-mono text-[9px] tracking-wide text-foreground-muted">
            RED TEAM
          </span>
        </div>
        <div className="space-y-2">
          {[
            { w: "72%", c: "bg-rose-400/30", l: "inject" },
            { w: "48%", c: "bg-violet-400/30", l: "jailbreak" },
            { w: "91%", c: "bg-blue-400/30", l: "eval pass" },
          ].map((row) => (
            <div key={row.l} className="flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-inset">
                <div
                  className={cn("h-full rounded-full", row.c)}
                  style={{ width: row.w }}
                />
              </div>
              <span className="font-mono text-[9px] text-foreground-subtle">
                {row.l}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-4 gap-1.5 pt-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-6 rounded-md bg-background-elevated/60 shadow-sm"
              style={{ opacity: 0.4 + (i % 3) * 0.2 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (project.visual === "cv") {
    return (
      <div className={chrome}>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
          </div>
          <span className="rounded-full bg-surface-inset px-2 py-0.5 font-mono text-[9px] tracking-wide text-foreground-muted">
            MULTI-MODAL
          </span>
        </div>
        <div className="mb-3 flex gap-1.5">
          {["IMAGE", "VIDEO", "AUDIO"].map((mode, i) => (
            <span
              key={mode}
              className={cn(
                "rounded-full px-2 py-0.5 font-mono text-[8px] tracking-wide",
                i === 1
                  ? "border border-border bg-blue-500/15 text-foreground"
                  : "bg-surface-inset text-foreground-subtle"
              )}
            >
              {mode}
            </span>
          ))}
        </div>
        <div className="relative mx-auto flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl border border-border bg-background-elevated/40 shadow-sm">
          <div className="absolute inset-2 rounded-lg border border-rose-400/40" />
          <div className="relative h-7 w-7 rounded-full border border-foreground/15 bg-foreground/5" />
          <div className="absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 bg-rose-400/25" />
          <div className="absolute left-1/2 top-1/2 h-3/4 w-px -translate-x-1/2 -translate-y-1/2 bg-rose-400/25" />
          <span className="absolute right-2 bottom-2 font-mono text-[8px] text-foreground-subtle">
            0.97
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="font-mono text-[9px] text-foreground-subtle">
              face region
            </div>
            <div className="mt-0.5 text-xs font-semibold text-foreground">
              Manipulated
            </div>
          </div>
          <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[9px] font-medium text-rose-300/90">
            FAKE · 0.97
          </span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-inset">
          <div className="h-full w-[92%] rounded-full bg-rose-400/40" />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-mono text-[9px] text-foreground-subtle">
            ensemble · frames + audio
          </span>
          <span className="font-mono text-[9px] text-foreground-subtle">
            60 fps
          </span>
        </div>
      </div>
    );
  }

  if (project.visual === "ml") {
    return (
      <div className={chrome}>
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
        </div>
        <div className="flex flex-1 items-end gap-1.5 pb-1">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-blue-500/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-mono text-[9px] text-foreground-subtle">
            failure risk · 14d horizon
          </span>
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[9px] font-medium text-[var(--accent)]">
            XGBoost
          </span>
        </div>
      </div>
    );
  }

  if (project.visual === "agent") {
    return (
      <div className={chrome}>
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          {["Retrieve", "Reason", "Act"].map((step, i) => (
            <div
              key={step}
              className="flex flex-col items-center justify-center rounded-xl border border-border bg-background-elevated/60 p-2 shadow-sm"
            >
              <span className="font-mono text-[8px] text-foreground-subtle">
                0{i + 1}
              </span>
              <span className="mt-1 text-[10px] font-medium text-foreground">
                {step}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-inset">
          <div className="h-full w-2/3 rounded-full bg-violet-400/35" />
        </div>
        <span className="mt-2 font-mono text-[9px] text-foreground-subtle">
          multi-agent · grounded RAG
        </span>
      </div>
    );
  }

  if (project.visual === "fraud") {
    return (
      <div className={chrome}>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
          </div>
          <span className="rounded-full bg-surface-inset px-2 py-0.5 font-mono text-[9px] tracking-wide text-foreground-muted">
            TRANSACTIONS
          </span>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-border bg-background-elevated/70 p-2.5 shadow-sm">
          <div className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-rose-400/10" />
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] tracking-widest text-foreground-subtle">
              •••• 4025
            </span>
            <span className="rounded bg-rose-500/10 px-1.5 py-0.5 font-mono text-[8px] font-medium text-rose-300/90">
              flagged
            </span>
          </div>
          <div className="mt-2.5 h-1.5 w-2/3 rounded-full bg-surface-inset" />
          <div className="mt-1 h-1.5 w-1/3 rounded-full bg-surface-inset" />
        </div>
        <div className="mt-3 flex flex-1 flex-col gap-1.5">
          {[
            { name: "INR 84,290", sub: "crypto exchange", risk: "blocked" },
            { name: "INR 1,120", sub: "retail merchant", risk: "ok" },
            { name: "INR 19,940", sub: "wallet top-up", risk: "blocked" },
          ].map((tx) => (
            <div
              key={tx.name}
              className="flex items-center gap-2 rounded-lg border border-border bg-background-elevated/50 px-2 py-1.5 shadow-sm"
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  tx.risk === "blocked" ? "bg-rose-400/50" : "bg-blue-400/50"
                )}
              />
              <span className="font-mono text-[9px] text-foreground">
                {tx.name}
              </span>
              <span className="ml-auto truncate font-mono text-[8px] text-foreground-subtle/70">
                {tx.sub}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-mono text-[9px] text-foreground-subtle">
            live risk score
          </span>
          <span className="font-mono text-[9px] font-medium text-foreground-muted">
            0.99
          </span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-inset">
          <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-blue-400/40 to-rose-400/50" />
        </div>
      </div>
    );
  }

  return (
    <div className={chrome}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
        </div>
        <span className="rounded-full bg-surface-inset px-2 py-0.5 font-mono text-[9px] tracking-wide text-foreground-muted">
          AIR-GAP
        </span>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-background-elevated/70 px-2.5 py-2 shadow-sm">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
        <span className="truncate font-mono text-[9px] text-foreground-subtle">
          query: maintenance clause · sec 44
        </span>
      </div>
      <div className="mt-3 flex flex-1 flex-col gap-2">
        {["art_44.md", "policy_v3.txt", "index_notes.pdf"].map((doc) => (
          <div
            key={doc}
            className="flex items-center gap-2 rounded-lg border border-border bg-background-elevated/50 px-2 py-1.5 shadow-sm"
          >
            <span className="h-1 w-1 rounded-full bg-cyan-400/40" />
            <span className="truncate font-mono text-[8px] text-foreground-subtle">
              {doc}
            </span>
            <span className="ml-auto font-mono text-[8px] text-foreground-subtle/60">
              0.8
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-border bg-background-elevated/60 p-2.5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] text-foreground-subtle">
            match
          </span>
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[8px] font-medium text-[var(--accent)]">
            local
          </span>
        </div>
        <div className="mt-1.5 space-y-1">
          <div className="h-1.5 w-full rounded-full bg-surface-inset" />
          <div className="h-1.5 w-4/5 rounded-full bg-surface-inset" />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-[9px] text-foreground-subtle">
          offline index · no cloud
        </span>
        <span className="rounded-full bg-surface-inset px-2 py-0.5 text-[9px] font-medium text-foreground-muted">
          Mistral 7B
        </span>
      </div>
    </div>
  );
}