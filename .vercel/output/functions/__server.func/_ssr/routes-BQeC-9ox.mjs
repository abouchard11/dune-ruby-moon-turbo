import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUp, i as Check, n as Lock, r as Copy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQeC-9ox.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HARD_RULE = "The model drafts. It does not own accept, post, pay, publish, remember, or promote.";
var STACK = [
	{
		id: "ago",
		name: "agentic-graph-orchestration",
		role: "Canonical work topology + linter",
		owns: "Source of truth",
		chips: [
			"verifier-first",
			"irreversible edges stay open",
			"lint-graph.js"
		]
	},
	{
		id: "mas",
		name: "midnight-agent-skills",
		role: "Packaging pair for install",
		owns: "Copy of work + memory closer",
		chips: [
			"work topology",
			"gbrain-graph-companion",
			"edit upstream, copy here"
		]
	},
	{
		id: "reason",
		name: "midnight-reasoning",
		role: "Reflection / critic library",
		owns: "Sidecar + Graphiti episodes",
		chips: [
			"confidence < 0.6 is a pass",
			"max 3 attempts",
			"model may not promote()"
		]
	},
	{
		id: "hermes",
		name: "hermes-command-center",
		role: "Operator UI + run state",
		owns: "Phone-first console",
		chips: [
			"six questions",
			"human node",
			"you own irreversible edges"
		]
	}
];
var STORES = [
	{
		name: "Sidecar JSON",
		path: ".scratch/reasoning-graph.<runId>.json",
		holds: "In-flight reflection nodes. All tiers. Discarded on escape.",
		never: "Durable facts, product state, committed files"
	},
	{
		name: "Graphiti",
		path: "group_id reasoning:<runId>",
		holds: "Entities, episodes, relationships. Only resolved nodes promote.",
		never: "GBrain pages, MEMORY.md entries, observed notes"
	},
	{
		name: "GBrain",
		path: "pages / retros / skill learnings",
		holds: "Reusable procedures. Pointers to Graphiti, not a second copy.",
		never: "Substituting for Graphiti. Raw sidecar dumps."
	},
	{
		name: "MEMORY.md",
		path: "harness cache",
		holds: "Read-first pointer to the current top open question.",
		never: "Anything authoritative. Mid-session system of record."
	}
];
var TIERS = [
	{
		name: "observed",
		persist: "No",
		closer: "Model may draft only"
	},
	{
		name: "verified",
		persist: "Yes",
		closer: "Script or policy"
	},
	{
		name: "decided",
		persist: "Yes",
		closer: "Human or policy after a node closed"
	},
	{
		name: "irreversible",
		persist: "Yes",
		closer: "Same closer as accept / post / pay. Never the model."
	}
];
var LOOP = [
	"Goal + verifier first",
	"Linted graph nodes",
	"Critic reflect()",
	"Keep / retry / escape",
	"Promote or discard",
	"Hermes inbox"
];
var DOZEN = [
	{
		id: "intake",
		closer: "script",
		lock: false
	},
	{
		id: "safety",
		closer: "policy",
		lock: true
	},
	{
		id: "assemble",
		closer: "script",
		lock: false
	},
	{
		id: "offer",
		closer: "script",
		lock: false
	},
	{
		id: "accept",
		closer: "human",
		lock: true
	},
	{
		id: "draft",
		closer: "model",
		lock: false
	},
	{
		id: "verify",
		closer: "script",
		lock: false
	},
	{
		id: "revise",
		closer: "script",
		lock: false
	},
	{
		id: "review",
		closer: "human",
		lock: false
	},
	{
		id: "post",
		closer: "human",
		lock: true
	},
	{
		id: "measure",
		closer: "script",
		lock: false
	},
	{
		id: "pay",
		closer: "policy",
		lock: true
	}
];
var QUESTIONS = [
	{
		n: "01",
		title: "What can make money?",
		kind: "money"
	},
	{
		n: "02",
		title: "What can ship today?",
		kind: "ship"
	},
	{
		n: "03",
		title: "What needs my decision?",
		kind: "decision"
	},
	{
		n: "04",
		title: "What is stuck?",
		kind: "stuck"
	},
	{
		n: "05",
		title: "What is wasting money?",
		kind: "waste"
	},
	{
		n: "06",
		title: "What did the agents finish while I was gone?",
		kind: "done"
	}
];
var RETRO_TRIGGERS = [
	"The same verifier failed twice or more in this run",
	"A node had no useful evidence and critic confidence stayed below 0.6",
	"The skill instructions were ambiguous enough that the agent had to guess",
	"A stop condition fired — max attempts, dollar ceiling, or no-progress"
];
var IMAGINE_PROMPTS = [
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

Crisp vector-like edges, 2.5D, subtle grain. Museum-quality information design.`
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

Museum-quality dark infographic.`
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

No photoreal faces, no robots. Museum-quality product design poster.`
	}
];
function ViewSwitch({ view, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		"aria-label": "Atlas views",
		className: "grid grid-cols-3 rounded-lg border border-line bg-surface p-1",
		children: [
			{
				id: "stack",
				label: "Stack"
			},
			{
				id: "brain",
				label: "Brain"
			},
			{
				id: "graph",
				label: "Graph"
			}
		].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			role: "tab",
			"aria-selected": view === t.id,
			onClick: () => onChange(t.id),
			className: "min-h-11 rounded-md px-3 text-sm font-medium transition-colors duration-150 " + (view === t.id ? "bg-panel text-fg" : "text-muted hover:text-fg"),
			children: t.label
		}, t.id))
	});
}
function StackView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Ownership is directed. Skills are sources of truth. Downstream consumes. Nothing edits upstream from product work."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/stack-maquette.jpg",
				alt: "Four stacked charcoal slabs with a gold rail — the directed stack as an object.",
				className: "h-36 w-full rounded-xl border border-line object-cover sm:h-48"
			}),
			[...STACK].reverse().map((layer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 pl-4 text-cyan",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
						className: "size-4 shrink-0",
						strokeWidth: 2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] tracking-[0.16em] uppercase",
						children: "consumed by"
					})]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "overflow-hidden rounded-xl border border-line bg-panel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-1.5 shrink-0 bg-gold",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col gap-3 p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-mono text-sm font-medium tracking-tight text-fg",
										children: layer.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] uppercase tracking-[0.14em] text-gold",
										children: layer.owns
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: layer.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-wrap gap-2",
									children: layer.chips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-cyan",
										children: c
									}, c))
								})
							]
						})]
					})
				})]
			}, layer.id))
		]
	});
}
function BrainView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold",
					children: "Stores"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm text-muted",
					children: "Conflict order: live sidecar, then Graphiti, then GBrain, then MEMORY.md. A fact lives in one durable lane plus an optional pointer."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brain-cabinet.jpg",
					alt: "Four dark filing drawers — the trust cabinet of stores.",
					className: "mb-4 h-36 w-full rounded-xl border border-line object-cover sm:h-48"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-2",
					children: STORES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line bg-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs tabular-nums text-gold",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-medium",
									children: s.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 font-mono text-[11px] text-cyan",
								children: s.path
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: s.holds
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-subtle",
								children: ["Never: ", s.never]
							})
						]
					}, s.name))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gold",
				children: "Trust tiers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-2 sm:grid-cols-2",
				children: TIERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-line bg-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-mono text-sm",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[11px] uppercase tracking-[0.12em] " + (t.persist === "Yes" ? "text-cyan" : "text-subtle"),
							children: ["persist ", t.persist]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t.closer
					})]
				}, t.name))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gold",
				children: "Closed loop"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
				children: LOOP.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-line bg-panel px-3 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[11px] tabular-nums text-gold",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: step
					})]
				}, step))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-gold/40 bg-panel p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold",
						children: "Retrospective"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 text-sm text-muted",
						children: [
							"After every invocation, draft one observed note only if a trigger fires. Write",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-fg",
								children: ".scratch/retro.<runId>.md"
							}),
							". Do not edit skills. Do not promote."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-2",
						children: RETRO_TRIGGERS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" }), r]
						}, r))
					})
				]
			})
		]
	});
}
function GraphView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold",
				children: "Hermes — six questions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm text-muted",
				children: "Phone-first operator surface. Production approval is a human node."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-2",
				children: QUESTIONS.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3 rounded-xl border border-line bg-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs tabular-nums text-gold",
						children: q.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: q.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.14em] text-subtle",
						children: q.kind
					})] })]
				}, q.kind))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold",
				children: "Dozen graph"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm text-muted",
				children: "Inner loop draft-verify-revise, max 2 attempts, restarts empty. A failed caption does not restart intake."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4",
				children: DOZEN.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border p-3 " + (n.lock ? "border-gold/50 bg-panel" : "border-line bg-panel"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm",
							children: n.id
						}), n.lock ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
							className: "size-3.5 text-gold",
							strokeWidth: 2
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.12em] text-muted",
						children: ["closer ", n.closer]
					})]
				}, n.id))
			})
		] })]
	});
}
function PromptDeck() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10 border-t border-line pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold",
				children: "Grok Imagine prompts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm text-muted",
				children: "Image models garble labels. This atlas is the accurate picture. Use these if you want a poster. Aspect 16:9. Append the negatives if it drifts."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: IMAGINE_PROMPTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptCard, { prompt: p }, p.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-subtle",
				children: "Negatives: no cartoon brain, no neurons, no photoreal people, no robots, no circuit-board filler, no other-company logos, no unreadably tiny type, no mesh of circular arrows between repos."
			})
		]
	});
}
function PromptCard({ prompt }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-line bg-panel p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-medium",
				children: prompt.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] text-subtle",
				children: prompt.ratio
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-line px-3 text-sm text-fg transition-colors hover:border-gold/50",
				onClick: async () => {
					await navigator.clipboard.writeText(prompt.body);
					setCopied(true);
					window.setTimeout(() => setCopied(false), 1600);
				},
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-4 text-cyan",
					strokeWidth: 2
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					className: "size-4",
					strokeWidth: 2
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copied ? "Copied" : "Copy" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "max-h-48 overflow-auto whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-muted",
			children: prompt.body
		})]
	});
}
function HardRule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl border border-gold/40 bg-surface px-4 py-3 text-sm leading-snug text-fg",
		children: HARD_RULE
	});
}
function Home() {
	const [view, setView] = (0, import_react.useState)("stack");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen max-w-3xl px-4 pb-16 pt-8 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gold",
						children: "MidnightDev"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Atlas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
						children: "Directed stack, memory lanes, and the Dozen graph — readable, not generated. Image models will scramble this. Use the copy buttons if you still want a poster."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardRule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewSwitch, {
					view,
					onChange: setView
				})
			}),
			view === "stack" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackView, {}) : null,
			view === "brain" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainView, {}) : null,
			view === "graph" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphView, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptDeck, {})
		]
	});
}
//#endregion
export { Home as component };
