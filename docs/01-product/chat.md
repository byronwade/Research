# Project Chat

Chat is the conversational orchestration surface for a Project. Cross-surface command discovery, shortcuts, and contextual action routing are governed by [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md). Adaptive personalization and preference controls are governed by [`adaptive-personalization-and-preference-controls.md`](adaptive-personalization-and-preference-controls.md). Latency-aware response behavior, Partial Results, cancellation, recovery, and permission-safe Fast Paths are governed by [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md).

## Modes

The composer infers an operation while exposing a reversible mode chip. Material requests also create an intent record governed by [`intent-capture-and-prompt-friction.md`](intent-capture-and-prompt-friction.md), so Chat can proceed with safe assumptions or ask a grouped clarification only when the answer changes scope, risk, cost, source authority, approval, or output structure.
Mode changes can be initiated from the composer or Command Center, but both paths resolve to the same intent and preflight policy.

- Answer
- Research
- Build document
- Update document
- Verify
- Compare
- Create artifact
- Propose repository change

## Context assembly

Every message resolves:

1. Project policy and instructions.
2. User preferences, approved adaptive preference summaries, and active work state.
3. Selected conversations and document context.
4. Authorized source scope and exact source versions.
5. Relevant claims, evidence, open questions, and accepted decisions.
6. Tool and model policy, budget, and risk level.

Memory and approved preference summaries can guide continuity, tone, formatting, and interface defaults, but they cannot replace evidence where a citation is required or override current authorization, source scope, approval policy, or user correction.

## Streaming response

The user sees request acceptance, mode, source scope, queue state, text, citations, attachments, tool states, source discoveries, research-plan changes, approvals, warnings, and document patches as typed message parts. Streams persist server-side and can resume after reload or disconnection. When output is partial, stale, degraded, unsupported, or waiting on citation verification, Chat labels that state before the user can save, publish, or treat the answer as final.

## Research interaction

A deep-research request may trigger intent capture, deterministic preflight, clarification, a structured research contract, an editable plan, live progress, candidate sources, evidence gaps, contradiction notices, Partial Results, and partial artifacts. The user can modify source scope, interrupt work, switch modes, save a labeled draft, or approve high-impact stages without losing already collected evidence.

## Document interaction

Chat can answer without modifying documents, propose a new document, propose a typed patch to one or more files, explain why a section is stale, or convert an accepted answer into a durable artifact. Published content and locked human-authored regions are never silently overwritten.

## Response actions

Responses support copy, branch, regenerate, verify, save to document, add note, inspect evidence, open trust blockers, report a problem, and reuse as a research contract. These actions are also exposed as typed command descriptors where useful. Generated summaries remain derived material and retain upstream provenance.
