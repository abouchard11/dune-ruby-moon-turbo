import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BrainView,
  GraphView,
  HardRule,
  PromptDeck,
  StackView,
  ViewSwitch,
} from "@/components/atlas-views";
import type { ViewId } from "@/lib/atlas";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [view, setView] = useState<ViewId>("stack");

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 pb-16 pt-8 sm:px-6">
      <header className="mb-6">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
          MidnightDev
        </p>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Atlas
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          Directed stack, memory lanes, and the Dozen graph — readable, not
          generated. Image models will scramble this. Use the copy buttons if you
          still want a poster.
        </p>
      </header>

      <HardRule />

      <div className="my-6">
        <ViewSwitch view={view} onChange={setView} />
      </div>

      {view === "stack" ? <StackView /> : null}
      {view === "brain" ? <BrainView /> : null}
      {view === "graph" ? <GraphView /> : null}

      <PromptDeck />
    </main>
  );
}
