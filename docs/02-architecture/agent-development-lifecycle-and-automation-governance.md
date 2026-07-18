# Agent development lifecycle and automation governance

Research automation must be designed like a governed production system, not a hidden prompt that occasionally performs work. This contract applies to saved research contracts, Automation Recipes and Playbooks, scheduled maintenance, source refreshes, model-council verification governed by [`../03-ai/model-council-and-disagreement-resolution.md`](../03-ai/model-council-and-disagreement-resolution.md), GitHub proposals, publication checks, exports, notifications, and connector actions.

This contract is informed by [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md).
User-facing automation registry, dry-run review, failure taxonomy, replay eligibility, fixture creation, and run debugging are specified in [`../01-product/automation-registry-and-run-debugger.md`](../01-product/automation-registry-and-run-debugger.md). Automation failure recovery records, safe next actions, severity, reconciliation-first behavior, and learning artifacts are specified in [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md). Activity cards, review queue behavior, and ActionCards are specified in [`../01-product/activity-timeline-and-review-queue.md`](../01-product/activity-timeline-and-review-queue.md). The underlying activity event spine is specified in [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md).
Intent records, clarification decisions, deterministic preflight, and approval receipts are specified in [`intent-preflight-and-clarification-policy.md`](intent-preflight-and-clarification-policy.md).
Delegated trust, approval batching, approval-load budgets, and fatigue controls are specified in [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md).
Outcome scorecards and adaptive routing are specified in [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md).
Recipe graphs, recipe versions, triggers, gates, simulation, canary activation, and recipe runs are specified in [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md).

## Lifecycle states

| State | Meaning |
|---|---|
| `draft` | Automation is being designed and cannot run unattended. |
| `test` | Automation can run against synthetic or approved fixtures. |
| `approved` | Owner has approved scope, tools, budget, and risk class. |
| `canary` | Automation runs for a limited Project, source set, schedule, or cohort. |
| `active` | Automation can run according to policy. |
| `paused` | Automation is stopped without deleting configuration or history. |
| `degraded` | Automation runs with limited tools, providers, or source scope. |
| `failed` | Automation requires review before retry or resume. |
| `retired` | Automation cannot run again but remains auditable. |

State changes are auditable and require an actor, reason, timestamp, and policy snapshot.

## Automation definition

Each automation declares:

- Project and owner;
- objective;
- recipe or automation definition version, where applicable;
- originating intent record and accepted intent version;
- trigger or schedule;
- allowed sources and connectors;
- prohibited sources and actions;
- tool allowlist;
- model-role policy;
- deterministic preflight rules;
- budget and expected monthly usage;
- concurrency and retry policy;
- approval gates;
- stop conditions;
- output targets;
- rollback or withdrawal path;
- evaluation metrics.
- outcome scorecard metric set and baseline window.

Reusable recipes compile these declarations into immutable RecipeVersions. Natural-language authoring can draft recipe definitions, but lifecycle promotion uses typed validation, simulation, owner approval, and canary policy before activation.

No automation may run with implicit global workspace access.

## Agent development lifecycle

1. **Design:** define objective, scope, allowed actions, output, risk class, and success criteria.
2. **Preflight:** validate intent, source coverage, permissions, cost, latency, connector availability, approval policy, and expected side effects.
3. **Test:** run on synthetic or approved fixtures with no external writes.
4. **Review:** owner approves policy, budget, schedule, and action class.
5. **Canary:** run on limited scope with heightened monitoring.
6. **Operate:** run with observable status, cancellation, retry, and human handoff.
7. **Evaluate:** measure accepted outputs, failures, cost, latency, stale-claim reduction, user corrections, and incidents.
8. **Revise:** update instructions, tools, source scope, thresholds, schedule, budget, mode, or model role through review when outcome evidence supports the change.
9. **Retire:** disable and preserve audit history.

## Deterministic-first policy

Use deterministic logic before model reasoning where it improves predictability:

- source permissions;
- freshness thresholds;
- file and page limits;
- exact duplicate detection;
- known label or rule registries;
- quota checks;
- public/private publication blockers;
- connector availability;
- schema validation.

The model should reason over exceptions, ambiguous cases, synthesis, and tradeoffs rather than spend budget on obvious routing.

## Execution record

Every run records:

- automation version;
- trigger;
- actor or system identity;
- source scope;
- policy snapshot;
- preflight result;
- intent version and clarification decisions;
- task graph;
- model calls by role;
- tool calls and external requests;
- approvals requested and granted;
- approval receipt IDs where applicable;
- cost and latency;
- retries and fallbacks;
- created claims, patches, artifacts, notifications, or operations;
- accepted, edited, rejected, ignored, reverted, blocked, or expired outcomes;
- context-pack refs, step graph hash, policy-check refs, debug-trace refs, divergence markers, failure taxonomy, replay eligibility, and fixture candidates;
- AutomationFailureRecoveryRecord refs where a run failed, degraded, was cancelled, became stale, produced a quiet wrong outcome, or has uncertain side effects;
- failure reason or completion evidence.

Execution records are content-minimized but sufficient for audit, support, debugging, replay, billing, and incident response.

## Approval classes

| Class | Examples | Approval |
|---|---|---|
| Read-only | source check, stale-claim scan, retrieval evaluation | policy approval may allow scheduled execution |
| Internal patch | draft document patch, memory proposal, artifact refresh | review required before canonical mutation unless policy allows low-risk batch approval |
| External draft | GitHub branch, issue draft, connector draft | explicit approval before external creation |
| External write | send notification, publish snapshot, connector mutation | explicit approval with rollback or withdrawal path |
| Destructive | delete source, withdraw publication, revoke connector | explicit owner approval and recovery evidence |

Automation cannot escalate its own approval class.
Delegated trust can reduce repeated prompts only inside a recorded grant envelope. It cannot approve publication, deletion, billing, administration, connector widening, or new destinations unless the governing policy explicitly allows that class and the mutation boundary verifies the grant.

## Debugging and replay

Runs support an Automation Run Debugger governed by [`../01-product/automation-registry-and-run-debugger.md`](../01-product/automation-registry-and-run-debugger.md). It is searchable, redacted, and tied to Activity, recovery, and outcome records. It must answer what happened, why the run diverged, what can be safely retried, replayed, reconciled, compensated, paused, retired, or escalated, and which test, simulation, Product Truth signal, scorecard threshold, or non-action decision should prevent recurrence.

Runs support:

- step inspection;
- searchable execution metadata for trigger, owner, Project, source scope, model role, tool, outcome, cost, latency, and failure class;
- context-pack, prompt-envelope, tool-call, schema-validation, policy-check, approval, and side-effect inspection without hidden reasoning or raw private content unless policy allows the viewer to see it;
- divergence markers for missing context, ambiguous tool descriptions, wrong tool selection, invalid parameters, schema failure, stale source, permission drift, unsupported claim, cost anomaly, approval mismatch, and model-route mismatch;
- dry-run preview;
- retry from failed step where idempotent;
- replay against the same immutable source versions;
- comparison across automation versions;
- comparison across model roles, model parameters, source scopes, deterministic gates, and recipe versions;
- export of sanitized execution evidence;
- creation of AutomationFailureRecoveryRecords, evaluation fixtures, recipe simulation cases, Product Truth signals, adaptive-routing recommendations, learning records, non-action decisions, and support-safe diagnostics from repeated failure patterns;
- human handoff with context.

Replay cannot duplicate external writes. Side effects use idempotency keys and expected versions.

## Metrics

Automation quality is measured by:

- accepted document patches;
- stale claims resolved;
- unsupported claims prevented from publication;
- user corrections;
- time saved on repeated workflows;
- cost per accepted outcome;
- latency by mode;
- failure and retry rate;
- approval burden;
- adaptive recommendation acceptance, rejection, deferral, and regression rate;
- security or privacy incidents;
- support cases.

Activity volume alone is not success.

## Launch gates

Agentic automation is production-ready only when:

- lifecycle state transitions are enforced;
- deterministic preflight runs before model calls;
- run-specific intent versions, assumptions, and clarification decisions are recorded;
- budget and usage projections are visible;
- automation registry, dry-run review, and run debugging are available;
- Automation Run Debugger views are searchable, redacted, trace-comparable, replay-safe, and able to convert repeated failures into tests, simulations, scorecard thresholds, or action cards;
- failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain runs create AutomationFailureRecoveryRecords with severity, user impact, safe next action, owner, outcome evidence, and learning artifacts before automation expansion;
- outcome scorecards distinguish useful accepted outcomes from activity volume;
- adaptive routing recommendations are visible, reversible, expected-versioned, and approval-gated where required;
- cancellation preserves status and cleanup;
- approval classes are tested;
- approval receipts are tied to exact intent/action versions and idempotency keys;
- delegated-trust grants are scoped, expiring, revocable, fatigue-aware, and fail closed on scope, payload, destination, policy, budget, or expected-version drift;
- external writes are idempotent and reversible where possible;
- telemetry supports evaluation without storing private content;
- incidents can be scoped to automations, runs, sources, and outputs.
- Automation Recipes prove graph validation, trigger dedupe, simulation coverage, canary behavior, version pinning, approval receipts, and outcome scorecard integration.

## Documentation update rule

Changes to automation lifecycle states, registry behavior, run debugging, approval classes, replay, or recipe lifecycle promotion must update:

- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md)
- [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md)
- [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md)
- [`../01-product/automation-registry-and-run-debugger.md`](../01-product/automation-registry-and-run-debugger.md)
- [`../01-product/automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md)
- [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
