export type ViewId = "stack" | "brain" | "graph";

export const HARD_RULE =
  "The model drafts. It does not own accept, post, pay, publish, remember, or promote.";

export const STACK = [
  {
    id: "ago",
    name: "agentic-graph-orchestration",
    role: "Canonical work topology + linter",
    owns: "Source of truth",
    chips: ["verifier-first", "irreversible edges stay open", "lint-graph.js"],
  },
  {
    id: "mas",
    name: "midnight-agent-skills",
    role: "Packaging pair for install",
    owns: "Copy of work + memory closer",
    chips: ["work topology", "gbrain-graph-companion", "edit upstream, copy here"],
  },
  {
    id: "reason",
    name: "midnight-reasoning",
    role: "Reflection / critic library",
    owns: "Sidecar + Graphiti episodes",
    chips: ["confidence < 0.6 is a pass", "max 3 attempts", "model may not promote()"],
  },
  {
    id: "hermes",
    name: "hermes-command-center",
    role: "Operator UI + run state",
    owns: "Phone-first console",
    chips: ["six questions", "human node", "you own irreversible edges"],
  },
] as const;

export const STORES = [
  {
    name: "Sidecar JSON",
    path: ".scratch/reasoning-graph.<runId>.json",
    holds: "In-flight reflection nodes. All tiers. Discarded on escape.",
    never: "Durable facts, product state, committed files",
  },
  {
    name: "Graphiti",
    path: "group_id reasoning:<runId>",
    holds: "Entities, episodes, relationships. Only resolved nodes promote.",
    never: "GBrain pages, MEMORY.md entries, observed notes",
  },
  {
    name: "GBrain",
    path: "pages / retros / skill learnings",
    holds: "Reusable procedures. Pointers to Graphiti, not a second copy.",
    never: "Substituting for Graphiti. Raw sidecar dumps.",
  },
  {
    name: "MEMORY.md",
    path: "harness cache",
    holds: "Read-first pointer to the current top open question.",
    never: "Anything authoritative. Mid-session system of record.",
  },
] as const;

export const TIERS = [
  { name: "observed", persist: "No", closer: "Model may draft only" },
  { name: "verified", persist: "Yes", closer: "Script or policy" },
  { name: "decided", persist: "Yes", closer: "Human or policy after a node closed" },
  { name: "irreversible", persist: "Yes", closer: "Same closer as accept / post / pay. Never the model." },
] as const;

export const LOOP = [
  "Goal + verifier first",
  "Linted graph nodes",
  "Critic reflect()",
  "Keep / retry / escape",
  "Promote or discard",
  "Hermes inbox",
] as const;

export const DOZEN = [
  { id: "intake", closer: "script", lock: false },
  { id: "safety", closer: "policy", lock: true },
  { id: "assemble", closer: "script", lock: false },
  { id: "offer", closer: "script", lock: false },
  { id: "accept", closer: "human", lock: true },
  { id: "draft", closer: "model", lock: false },
  { id: "verify", closer: "script", lock: false },
  { id: "revise", closer: "script", lock: false },
  { id: "review", closer: "human", lock: false },
  { id: "post", closer: "human", lock: true },
  { id: "measure", closer: "script", lock: false },
  { id: "pay", closer: "policy", lock: true },
] as const;

export const QUESTIONS = [
  { n: "01", title: "What can make money?", kind: "money" },
  { n: "02", title: "What can ship today?", kind: "ship" },
  { n: "03", title: "What needs my decision?", kind: "decision" },
  { n: "04", title: "What is stuck?", kind: "stuck" },
  { n: "05", title: "What is wasting money?", kind: "waste" },
  { n: "06", title: "What did the agents finish while I was gone?", kind: "done" },
] as const;

export const RETRO_TRIGGERS = [
  "The same verifier failed twice or more in this run",
  "A node had no useful evidence and critic confidence stayed below 0.6",
  "The skill instructions were ambiguous enough that the agent had to guess",
  "A stop condition fired — max attempts, dollar ceiling, or no-progress",
] as const;

export const IMAGINE_PROMPTS: { title: string; ratio: string; body: string }[] = [
  {
    title: "The stack",
    ratio: "16:9",
    body: `Ultra-detailed dark-mode systems architecture poster, MidnightDev operator aesthetic. Not a cartoon, not a brain organ, not a neural net cloud. A precise product-architecture diagram as if designed by a Swiss information designer for a classified ops room.

Canvas: 16:9 cinematic widescreen, deep charcoal #0B0D10 background, hairline gold #C9A227 and pale cyan #7FD1D4 accents, off-white typography.

TITLE at top in small caps, tracking wide: MIDNIGHTDEV CLOSED-LOOP STACK
Subtitle: The model drafts. It does not own accept, post, pay, publish, remember, or promote.

Four stacked horizontal slabs, each a frosted dark glass panel with a thin gold left rail, stacked TOP to BOTTOM with a single upward caret between them labeled "consumed by" in tiny cyan caps. Do not mesh them; it is a directed stack, not a web.

TOP SLAB — agentic-graph-orchestration — canonical work topology + machine-checkable linter
SECOND SLAB — midnight-agent-skills — packaging pair (work topology | memory closer)
THIRD SLAB — midnight-reasoning — reflection / critic library (sidecar | Graphiti reasoning:*)
BOTTOM SLAB — hermes-command-center — operator UI + run state · six questions · YOU OWN THE IRREVERSIBLE EDGES

Right-side vertical legend titled HARD RULE. Bottom footer: draft → lint → surface to inbox (kind: decision) → human closer.

Crisp vector-like edges, 2.5D, subtle grain. Museum-quality information design.`,
  },
  {
    title: "The brain",
    ratio: "16:9",
    body: `Ultra-detailed dark-mode memory architecture poster for MidnightDev, titled THE BRAIN — LANES, TIERS, CLOSERS. Information-design diagram, not an anatomical brain, not neurons, not a sci-fi hologram of a head.

16:9, charcoal #0B0D10, gold #C9A227, cyan #7FD1D4, off-white type. Swiss ops-room poster.

LEFT COLUMN titled STORES as four stacked drawers:
1 SIDECAR JSON — in-flight, discarded on escape
2 GRAPHITI — canonical entities/episodes, resolved only
3 GBRAIN — pages and skill learnings, pointers not copies
4 MEMORY.md — cache only, loses every conflict

Vertical gold arrow: live sidecar > Graphiti > GBrain page > MEMORY.md cache

CENTER: TRUST TIERS ladder — observed (do not persist) · verified (script/policy) · decided (human/policy) · irreversible (never the model)

RIGHT: CLOSED LOOP hexagon — goal+verifier → graph nodes → critic reflect() → keep/retry/escape → promote or discard → Hermes inbox. Gold locks on accept, post, pay, remember, promote.

Bottom banner: RETROSPECTIVE — draft one observed note only on four triggers. Write .scratch/retro.<runId>.md. Do not edit SKILL.md.

Museum-quality dark infographic.`,
  },
  {
    title: "Hermes + Dozen",
    ratio: "16:9",
    body: `Phone-first operator console mockup poster, MidnightDev Hermes Command Center, dark charcoal UI, 16:9 cinematic.

Left: large phone frame. Header HERMES. Six stacked cards with gold/cyan left rails answering: 1 money  2 ship  3 decision  4 stuck  5 waste  6 done. Gold gate card on decision: accept / post / pay / skill-improvement candidate.

Right: Dozen marketplace graph as a horizontal pipeline:
intake → safety → assemble → offer → ACCEPT (gold lock, human) → draft → verify → revise → review → POST (gold lock, human) → measure → PAY (gold lock, policy)

Caption: inner loop draft-verify-revise maxAttempts 2, restarts []. A failed caption does not restart intake.

Footer: THE SWARM RUNS THE GRAPH. YOU OWN THE IRREVERSIBLE EDGES.

No photoreal faces, no robots. Museum-quality product design poster.`,
  },
];
