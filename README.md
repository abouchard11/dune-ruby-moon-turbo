# Midnight Atlas

A one-page map of the MidnightDev agent stack: which repo owns what, where memory is allowed to
live, and the one rule every node follows.

> The model drafts. It does not own accept, post, pay, publish, remember, or promote.

## What's on the page

- **Stack:** four repos in a directed chain, each with one job.
  - agentic-graph-orchestration: work topology and its linter, the source of truth.
  - midnight-agent-skills: packaging for install.
  - midnight-reasoning: a reflection and critic library.
  - hermes-command-center: the phone-first operator console.
- **Brain:** the memory lanes. What a per-run sidecar, Graphiti, GBrain and `MEMORY.md` may hold,
  and what each must never hold.
- **Graph:** the Dozen campaign graph, where the model closes only the draft node.
- **Prompt deck:** copy-paste prompts for poster versions. Image models scramble labels, so the page
  itself is the accurate picture.

## How it was built

Generated with Grok's App Builder and exported on Aug 24, 2026 as a single commit. The stack content
lives in `src/lib/atlas.ts` and `src/components/atlas-views.tsx`.

Everything else came from the builder's template:

- `.grok/`
- the auth scaffolding (switched off)
- the PWA plugin
- the scripts under `scripts/`

`.vercel/output` is the committed build. The repos the page describes are private; this is the
public map.

## Run it

```
npm install
npm run dev   # http://localhost:8080
```
