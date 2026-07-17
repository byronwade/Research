# Project Chat

Chat is the conversational orchestration surface for a Project.

## Modes

The composer infers an operation while exposing a reversible mode chip:

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
2. User preferences and active work state.
3. Selected conversations and document context.
4. Authorized source scope and exact source versions.
5. Relevant claims, evidence, open questions, and accepted decisions.
6. Tool and model policy, budget, and risk level.

Memory can guide continuity but cannot replace evidence where a citation is required.

## Streaming response

The user sees text, citations, attachments, tool states, source discoveries, research-plan changes, approvals, warnings, and document patches as typed message parts. Streams persist server-side and can resume after reload or disconnection.

## Research interaction

A deep-research request may trigger clarification, a structured research contract, an editable plan, live progress, candidate sources, evidence gaps, contradiction notices, and partial artifacts. The user can modify source scope, interrupt work, or approve high-impact stages.

## Document interaction

Chat can answer without modifying documents, propose a new document, propose a typed patch to one or more files, explain why a section is stale, or convert an accepted answer into a durable artifact. Published content and locked human-authored regions are never silently overwritten.

## Response actions

Responses support copy, branch, regenerate, verify, save to document, add note, inspect evidence, report a problem, and reuse as a research contract. Generated summaries remain derived material and retain upstream provenance.
