# Latency-aware progressive workflows

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research must feel responsive while it performs work that can legitimately take seconds, minutes, or hours. The product should return useful, authorized state immediately, progressively reveal what is known, and label incomplete or stale results honestly. Speed is valuable only when it preserves source scope, citation support, permissions, cancellation, recovery, and user trust.

This document governs `PERF-005` and `PERF-006`. Advanced operating-layer progressive-delivery differentiation is governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md). Project Operating Layer Work Packets and next safe actions are governed by [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md); progressive shells may include compact Work Packet state, but material actions still revalidate before execution. Offline fallback, device capability labels, local drafts, local queues, reconnect, and sync-conflict behavior are governed by [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md). Native companion capture previews, blocked-capture labels, local companion queues, and deep-link status are governed by [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md).

## Sources reviewed

Official guidance and implementation references:

- [Web.dev Core Web Vitals](https://web.dev/articles/vitals)
- [Web.dev Interaction to Next Paint](https://web.dev/articles/inp)
- [Material Design progress indicators](https://m3.material.io/components/progress-indicators/overview)
- [Apple Human Interface Guidelines: progress indicators](https://developer.apple.com/design/human-interface-guidelines/progress-indicators)
- [Microsoft Fluent 2 Skeleton](https://fluent2.microsoft.design/components/web/react/core/skeleton/usage)
- [Vercel AI SDK streaming foundations](https://ai-sdk.dev/docs/foundations/streaming)
- [Vercel AI SDK resumable chat streams](https://ai-sdk.dev/docs/ai-sdk-ui/chatbot-resume-streams)
- [TanStack Router data loading](https://tanstack.com/router/v1/docs/guide/data-loading)
- [TanStack Router preloading](https://tanstack.com/router/v1/docs/guide/preloading)
- [TanStack Router latest data loading](https://tanstack.com/router/latest/docs/guide/data-loading)
- [TanStack Router latest preloading](https://tanstack.com/router/latest/docs/guide/preloading)
- [Chrome Speculation Rules implementation guide](https://developer.chrome.com/docs/web-platform/implementing-speculation-rules)
- [Chrome prerender pages guide](https://developer.chrome.com/docs/web-platform/prerender-pages)
- [MDN Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API)
- [Web.dev prefetching, prerendering, and precaching](https://web.dev/learn/performance/prefetching-prerendering-precaching)

Directional public user-opinion signals:

- [ChatGPT long-chat latency and continuity complaint](https://www.reddit.com/r/ChatGPTPro/comments/1kg620f/anyone_found_a_good_workaround_for_chatgpt_chats/)
- [Perplexity Deep Research comparison](https://www.reddit.com/r/perplexity_ai/comments/1j7dl2m/how_good_is_perplexity_deep_research/)
- [Perplexity versus ChatGPT source and depth tradeoff discussion](https://www.reddit.com/r/perplexity_ai/comments/1l4va7f/whats_the_1_reason_to_use_perplexity_over_chatgpt/)
- [Hacker News discussion of optimistic UI and data locality](https://news.ycombinator.com/item?id=35626015)
- [Hacker News discussion of optimistic UI implementation complexity](https://news.ycombinator.com/item?id=35626706)
- [TanStack Router practitioner discussion of separate code and data preload policy](https://github.com/TanStack/router/discussions/1593)

The product lesson is consistent: users tolerate deep work when progress, partiality, cost, and recovery are visible. They lose trust when a product blocks on a spinner, hides source coverage, makes long chats sluggish, spends resources invisibly, or presents a quick partial answer as if it were complete.

## Product purpose

Latency-aware progressive workflows answer:

- What can I do immediately?
- What is already known, and what is still running?
- Is this answer complete, partial, stale, queued, degraded, or unsupported?
- Which sources, claims, citations, and document sections are covered so far?
- Can I cancel, continue, save, branch, schedule, or inspect evidence now?
- Why is this taking longer, and what will change if I switch modes?
- Which fast result came from a cache, deterministic path, or stale-while-revalidate projection?
- What was prepared speculatively, what policy allowed it, and can I clear or cancel it?

The goal is not to make every deep operation instant. The goal is to make every wait legible, useful, interruptible, and safe.

## Core concepts

### Progressive Delivery

Progressive Delivery is the user-facing contract for staged results. A request can deliver:

1. an immediate authorized shell and accepted operation state;
2. source scope, mode, cost class, expected latency, and cancellation controls;
3. retrieval and coverage progress;
4. partial answer, outline, table, patch, or artifact sections with explicit completeness state;
5. citation and claim-support state as evidence arrives;
6. final answer, document patch, export, or automation result;
7. post-completion maintenance, invalidation, and follow-up actions.

Each stage states what is usable now and what is not yet proven.

### Partial Result

A Partial Result is a useful intermediate output that is not complete enough to satisfy the original intent. Partial Results must show:

- source coverage and omitted scope;
- claim-support state;
- citation availability;
- freshness or stale status;
- pending stages;
- known blockers;
- safe next actions.

A Partial Result can be saved as a draft or note only when its partial status stays attached. It cannot become a publication-ready claim or final document section without the required evidence checks.

### Fast Path

A Fast Path is a deterministic or cached route that returns a safe result without repeating expensive work. Examples include:

- opening the Project shell from bounded Focus State and cached authorized lists;
- serving a current document outline while detailed claims load;
- returning a cached source inventory projection after reauthorization;
- using an unchanged retrieval plan, verified index generation, or previous citation-support check;
- showing stale-while-revalidate status for read-only projections.

Fast Paths must never bypass authorization, source-version checks, policy version checks, retention rules, or expected-version checks.

### Speculative Preparation

Speculative Preparation preloads or warms likely next state only after policy allows it. Examples include route preloading, source-list warming, index manifest reads, provider readiness checks, or model-role selection. Speculation cannot widen connector scope, perform hidden model calls with private content, reserve paid browser or sandbox work, spend material budget, or create external side effects without visible intent, policy, budget, and approval.

Speculative Preparation uses a product ladder from cheapest and safest to prohibited:

1. **Level 0, public assets:** public route modules, static assets, and CDN-cacheable pages with no Project data.
2. **Level 1, authorized shell:** Project shell routes, layout code, empty panes, command metadata, and safe labels after authentication.
3. **Level 2, authorized metadata:** source lists, Work Packet refs, index manifests, stale counters, and policy-safe summaries without raw private source text or document bodies.
4. **Level 3, reversible draft:** local edit buffers, draft-only previews, deterministic dry-run inputs, and UI state that can be discarded without canonical mutation.
5. **Level 4, material preparation:** provider warmup, model-role reservation, browser or Sandbox reservation, non-cacheable origin fetches, or connector readiness checks only after explicit user intent, budget policy, privacy policy, and approval class permit the work.
6. **Level 5, prohibited speculation:** hidden private-content model calls, connector scope widening, external writes, publication, deletion, billing, repository pushes, notification sends, permission changes, unbounded browser work, or anything that would be unsafe if the user never follows the predicted path.

Surfaces that use Speculative Preparation must expose a compact prepared-state indicator when user-visible resources or budgets are affected. Users can inspect why the work was prepared, what level was used, what budget was consumed or reserved, whether it was a hit, miss, cancelled, denied, or expired, and can clear eligible prepared state without losing canonical work.

### Latency Budget

A Latency Budget defines the expected response envelope for a service class, route, event, command, or operation stage. Budgets use percentiles and good-event definitions rather than averages. A result is not good just because it is fast if it hides incompleteness, source scope, or recovery state.

## Surface behavior

### Project shell

Project open returns the shell, active source scope, compact Focus State, compact Resume Digest, current operation summary, compact Work Packet, and primary next action before loading expensive detail panels. Skeletons are appropriate only when layout is known and a section is expected to resolve quickly. Long-running work needs real progress state, not indefinite placeholders.

### Chat

Chat shows request acceptance, mode, source scope, queue state, first progress event, first useful answer event, citation readiness, and cancellation status. Streaming output is labeled by support state. If a user navigates away or reloads, the stream resumes or the user sees a clear recovery path from durable Operation state.

### Documents and canvas

Documents can render outline, stable blocks, comment counts, and safe metadata before loading claim details, citation previews, artifacts, or heavy editor extensions. Optimistic local edits remain local or draft until expected-base-version checks and document patch validation succeed.

### Sources

Source lists can show known stored/searchable/citable status quickly, then refine parser confidence, coverage, stale state, and rights decisions. A source is never represented as fully understood before parsing, indexing, and evidence-locator validation prove it.

### Activity and automation

Long-running work exposes ordered progress, queued/degraded state, retries, pauses, approvals, and cost/latency changes. Activity cards should reveal enough state to decide whether to wait, cancel, continue, or inspect details without reading backend logs.

## Product rules

- Every long-running action produces a visible Operation or Activity state before expensive work begins.
- Every progressive stage distinguishes final, partial, stale, degraded, queued, blocked, unsupported, and cancelled states.
- Every partial answer identifies source scope and citation support before users can publish or treat it as final.
- Fast Paths and cached projections reauthorize before use.
- Offline fallback, local drafts, local queue state, and cached device projections remain labeled local, stale, offline, or pending until the server accepts current state.
- Native companion capture previews, selected-context packets, active-tab captures, file-watch events, notification actions, and deep links remain labeled preview, queued, blocked, revoked, stale, or pending until server-owned authorization and preflight accept current state.
- Optimistic UI is allowed for reversible local intent and draft state, not for canonical content, publication, external writes, billing, deletion, or connector scope.
- Preloading and speculative work are bounded by the Speculative Preparation ladder, policy, budget, privacy, source scope, and user intent.
- Every Speculative Preparation record captures the trigger, allowed level, denied level where applicable, expected latency benefit, privacy class, budget state, user-visible state, and hit, miss, cancelled, denied, or expired outcome.
- Cancellation and status paths retain reserved capacity during background saturation.
- Progress indicators must reflect real stages or indeterminate state honestly; fake precision is prohibited.
- Users can switch from quick to focused, deep, or scheduled mode without losing already collected evidence.

## Non-goals

- Do not hide a slow deep-research run behind a spinner-only waiting state.
- Do not use cached private content without authorization, policy, and source-version rechecks.
- Do not present partial, stale, inferred, or unsupported results as complete.
- Do not spend material model, connector, or browser budget speculatively without visible policy.
- Do not run speculative model calls over private content, connector calls, external writes, repository actions, publication, deletion, billing, notification sends, permission changes, or browser work that can outlive policy or user intent.
- Do not let optimistic UI silently mutate canonical documents, sources, publications, repositories, external systems, or billing.
- Do not expose hidden reasoning, raw private source text, raw prompts, credentials, or connector payloads through progressive events.

## Acceptance criteria

Latency-aware workflows are production-ready only when:

- `PERF-005` and `PERF-006` are implemented and tested;
- Project, Chat, Documents, Sources, Activity, Command Center, Focus, Work Packets, native companion, automation, API, SDK, CLI, and MCP surfaces expose compatible status language;
- first shell response, first progress event, first useful answer event, citation-ready state, cancellation acknowledgement, reconnect, and finalization are measured;
- partial results carry source coverage, claim status, citation state, freshness, and pending-stage labels;
- caches and preloads include tenant, Project, viewer, capability, policy, source-version, document-revision, index-generation, model-role, parser-version, and retention dimensions where applicable;
- Speculative Preparation level selection, budget enforcement, privacy classification, denial reasons, cancellation, expiry, and hit/miss outcomes are captured as release evidence;
- authorization, membership, source rights, deletion, retention, policy, document, and source-version changes invalidate affected projections;
- load tests prove status and cancellation remain available during provider degradation and background saturation;
- accessibility tests cover progress announcements, skeleton usage, keyboard cancellation, and screen-reader state changes;
- release evidence records user-perceived latency, partial-result correctness, cache hit safety, stale-label correctness, speculative-preparation effectiveness, wasted-work ceilings, and recovery behavior.

## Documentation update rule

Changes to Progressive Delivery, Partial Results, Fast Paths, Speculative Preparation, Latency Budgets, or progressive status language must update:

- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`chat.md`](chat.md)
- [`project-workspace.md`](project-workspace.md)
- [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md)
- [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`../02-architecture/progressive-delivery-and-fast-path-cache-policy.md`](../02-architecture/progressive-delivery-and-fast-path-cache-policy.md)
- [`../02-architecture/offline-sync-local-cache-and-device-policy.md`](../02-architecture/offline-sync-local-cache-and-device-policy.md)
- [`../02-architecture/native-companion-shell-and-os-adapter-policy.md`](../02-architecture/native-companion-shell-and-os-adapter-policy.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../02-architecture/durable-workflows-idempotency-and-outbox.md`](../02-architecture/durable-workflows-idempotency-and-outbox.md)
- [`../02-architecture/tenancy-authorization-and-capabilities.md`](../02-architecture/tenancy-authorization-and-capabilities.md)
- [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
