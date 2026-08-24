import { Lock, ArrowUp, Copy, Check } from "lucide-react";
import { useState } from "react";
import {
  DOZEN,
  HARD_RULE,
  IMAGINE_PROMPTS,
  LOOP,
  QUESTIONS,
  RETRO_TRIGGERS,
  STACK,
  STORES,
  TIERS,
  type ViewId,
} from "@/lib/atlas";

export function ViewSwitch({
  view,
  onChange,
}: {
  view: ViewId;
  onChange: (v: ViewId) => void;
}) {
  const tabs: { id: ViewId; label: string }[] = [
    { id: "stack", label: "Stack" },
    { id: "brain", label: "Brain" },
    { id: "graph", label: "Graph" },
  ];
  return (
    <div
      role="tablist"
      aria-label="Atlas views"
      className="grid grid-cols-3 rounded-lg border border-line bg-surface p-1"
    >
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={view === t.id}
          onClick={() => onChange(t.id)}
          className={
            "min-h-11 rounded-md px-3 text-sm font-medium transition-colors duration-150 " +
            (view === t.id
              ? "bg-panel text-fg"
              : "text-muted hover:text-fg")
          }
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export function StackView() {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-sm text-muted">
        Ownership is directed. Skills are sources of truth. Downstream consumes.
        Nothing edits upstream from product work.
      </p>
      <img
        src="/stack-maquette.jpg"
        alt="Four stacked charcoal slabs with a gold rail — the directed stack as an object."
        className="h-36 w-full rounded-xl border border-line object-cover sm:h-48"
      />
      {STACK.map((layer, i) => (
        <div key={layer.id} className="flex flex-col gap-2">
          <article className="overflow-hidden rounded-xl border border-line bg-panel">
            <div className="flex">
              <div className="w-1.5 shrink-0 bg-gold" aria-hidden />
              <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-mono text-sm font-medium tracking-tight text-fg">
                    {layer.name}
                  </h2>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold">
                    {layer.owns}
                  </span>
                </div>
                <p className="text-sm text-muted">{layer.role}</p>
                <ul className="flex flex-wrap gap-2">
                  {layer.chips.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-cyan"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
          {i < STACK.length - 1 ? (
            <div className="flex items-center gap-2 pl-4 text-cyan">
              <ArrowUp className="size-4 shrink-0" strokeWidth={2} />
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase">
                consumed by
              </span>
            </div>
          ) : null}
        </div>
      ))}
    </section>
  );
}

export function BrainView() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
          Stores
        </h2>
        <p className="mb-4 text-sm text-muted">
          Conflict order: live sidecar, then Graphiti, then GBrain, then MEMORY.md.
          A fact lives in one durable lane plus an optional pointer.
        </p>
        <img
          src="/brain-cabinet.jpg"
          alt="Four dark filing drawers — the trust cabinet of stores."
          className="mb-4 h-36 w-full rounded-xl border border-line object-cover sm:h-48"
        />
        <ol className="flex flex-col gap-2">
          {STORES.map((s, i) => (
            <li
              key={s.name}
              className="rounded-xl border border-line bg-panel p-4"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-xs tabular-nums text-gold">
                  0{i + 1}
                </span>
                <h3 className="text-sm font-medium">{s.name}</h3>
              </div>
              <p className="mb-2 font-mono text-[11px] text-cyan">{s.path}</p>
              <p className="text-sm text-muted">{s.holds}</p>
              <p className="mt-2 text-xs text-subtle">Never: {s.never}</p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
          Trust tiers
        </h2>
        <ol className="grid gap-2 sm:grid-cols-2">
          {TIERS.map((t) => (
            <li
              key={t.name}
              className="rounded-xl border border-line bg-panel p-4"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="font-mono text-sm">{t.name}</h3>
                <span
                  className={
                    "font-mono text-[11px] uppercase tracking-[0.12em] " +
                    (t.persist === "Yes" ? "text-cyan" : "text-subtle")
                  }
                >
                  persist {t.persist}
                </span>
              </div>
              <p className="text-sm text-muted">{t.closer}</p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
          Closed loop
        </h2>
        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {LOOP.map((step, i) => (
            <li
              key={step}
              className="rounded-xl border border-line bg-panel px-3 py-4"
            >
              <span className="font-mono text-[11px] tabular-nums text-gold">
                0{i + 1}
              </span>
              <p className="mt-2 text-sm">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-xl border border-gold/40 bg-panel p-4 sm:p-5">
        <h2 className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
          Retrospective
        </h2>
        <p className="mb-3 text-sm text-muted">
          After every invocation, draft one observed note only if a trigger fires.
          Write{" "}
          <span className="font-mono text-fg">{".scratch/retro.<runId>.md"}</span>.
          Do not edit skills. Do not promote.
        </p>
        <ul className="flex flex-col gap-2">
          {RETRO_TRIGGERS.map((r) => (
            <li key={r} className="flex gap-2 text-sm text-fg">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function GraphView() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
          Hermes — six questions
        </h2>
        <p className="mb-4 text-sm text-muted">
          Phone-first operator surface. Production approval is a human node.
        </p>
        <ol className="flex flex-col gap-2">
          {QUESTIONS.map((q) => (
            <li
              key={q.kind}
              className="flex items-start gap-3 rounded-xl border border-line bg-panel p-4"
            >
              <span className="font-mono text-xs tabular-nums text-gold">{q.n}</span>
              <div>
                <p className="text-sm font-medium">{q.title}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  {q.kind}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
          Dozen graph
        </h2>
        <p className="mb-4 text-sm text-muted">
          Inner loop draft-verify-revise, max 2 attempts, restarts empty. A failed
          caption does not restart intake.
        </p>
        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {DOZEN.map((n) => (
            <li
              key={n.id}
              className={
                "rounded-xl border p-3 " +
                (n.lock
                  ? "border-gold/50 bg-panel"
                  : "border-line bg-panel")
              }
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="font-mono text-sm">{n.id}</span>
                {n.lock ? (
                  <Lock className="size-3.5 text-gold" strokeWidth={2} />
                ) : null}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                closer {n.closer}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PromptDeck() {
  return (
    <section className="mt-10 border-t border-line pt-8">
      <h2 className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
        Grok Imagine prompts
      </h2>
      <p className="mb-4 text-sm text-muted">
        Image models garble labels. This atlas is the accurate picture. Use these
        if you want a poster. Aspect 16:9. Append the negatives if it drifts.
      </p>
      <div className="flex flex-col gap-3">
        {IMAGINE_PROMPTS.map((p) => (
          <PromptCard key={p.title} prompt={p} />
        ))}
      </div>
      <p className="mt-4 text-xs text-subtle">
        Negatives: no cartoon brain, no neurons, no photoreal people, no robots,
        no circuit-board filler, no other-company logos, no unreadably tiny type,
        no mesh of circular arrows between repos.
      </p>
    </section>
  );
}

function PromptCard({
  prompt,
}: {
  prompt: (typeof IMAGINE_PROMPTS)[number];
}) {
  const [copied, setCopied] = useState(false);
  return (
    <article className="rounded-xl border border-line bg-panel p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium">{prompt.title}</h3>
          <p className="font-mono text-[11px] text-subtle">{prompt.ratio}</p>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-line px-3 text-sm text-fg transition-colors hover:border-gold/50"
          onClick={async () => {
            await navigator.clipboard.writeText(prompt.body);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          }}
        >
          {copied ? (
            <Check className="size-4 text-cyan" strokeWidth={2} />
          ) : (
            <Copy className="size-4" strokeWidth={2} />
          )}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre className="max-h-48 overflow-auto whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-muted">
        {prompt.body}
      </pre>
    </article>
  );
}

export function HardRule() {
  return (
    <p className="rounded-xl border border-gold/40 bg-surface px-4 py-3 text-sm leading-snug text-fg">
      {HARD_RULE}
    </p>
  );
}
