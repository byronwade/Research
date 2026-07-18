# Automation registry, dry-run review, and run debugger

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research automation must be visible before it runs, inspectable while it runs, and useful after it fails. The Project automation registry, dry-run review, and Automation Run Debugger are the user-facing AUTO-002 contract for saved, scheduled, paused, failed, degraded, and retired automation.

This document governs `AUTO-002`. Reusable recipe authoring, recipe graphs, trigger policy, simulation, canary activation, and Playbooks are governed by [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md). Activity timeline cards and review-queue ActionCards are governed by [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md). Automation outcome measurement and adaptive workflow recommendations are governed by [`automation-outcome-scorecard-and-adaptive-workflows.md`](automation-outcome-scorecard-and-adaptive-workflows.md). Automation failure recovery records, severity, safe next actions, learning artifacts, and launch blockers are governed by [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md). Restore, retry, replay, withdrawal, compensation, reconciliation, and irreversible-effect labeling are governed by [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md). Scenario-level comparison before activation or widening is governed by [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md).

## Sources reviewed

Official capability references:

- [Zapier Zap history](https://help.zapier.com/hc/en-us/articles/8496291148685-View-and-manage-your-Zap-history)
- [Zapier replay](https://help.zapier.com/hc/en-us/articles/8496241726989-Replay-Zap-runs)
- [n8n debug executions](https://docs.n8n.io/build/understand-workflows/understand-executions/debug-executions)
- [n8n executions overview](https://docs.n8n.io/build/understand-workflows/understand-executions)
- [GitHub workflow run REST API](https://docs.github.com/en/rest/actions/workflow-runs)
- [GitHub workflow run logs](https://docs.github.com/actions/managing-workflow-runs/using-workflow-run-logs)
- [GitHub re-run workflows and jobs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs)
- [Temporal Web UI](https://docs.temporal.io/web-ui)
- [Temporal Event History](https://docs.temporal.io/encyclopedia/event-history)
- [LangSmith observability](https://docs.langchain.com/langsmith/observability)
- [LangSmith Studio](https://docs.langchain.com/langsmith/studio)
- [LangGraph time travel](https://docs.langchain.com/oss/python/langchain/frontend/time-travel)
- [OpenAI Agents guide](https://developers.openai.com/api/docs/guides/agents)
- [OpenAI Agents SDK tracing](https://github.com/openai/openai-agents-python/blob/main/docs/tracing.md)
- [Vercel AI SDK telemetry](https://ai-sdk.dev/docs/ai-sdk-core/telemetry)
- [Terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan)
- [Pulumi preview](https://www.pulumi.com/docs/iac/cli/commands/pulumi_preview/)
- [Pulumi update plans](https://www.pulumi.com/docs/iac/operations/stack-management/update-plans/)
- [Kubernetes server-side apply dry-run behavior](https://kubernetes.io/docs/reference/using-api/server-side-apply/)
- [Stripe testing and sandboxes](https://docs.stripe.com/testing-use-cases)

Directional public user-opinion and practitioner signals:

- [n8n production breakage discussion](https://www.reddit.com/r/n8n/comments/1sj6fog/what_actually_breaks_first_when_you_move_n8n/)
- [n8n complex workflow lessons](https://www.reddit.com/r/n8n/comments/1twqkx5/what_is_the_most_complex_n8n_workflow_youve_ever/)
- [n8n debugging gap discussion](https://www.reddit.com/r/n8n/comments/1ntltqa/what_is_the_single_biggest_gap_in_the_n8n/)
- [n8n self-hosted logging lesson](https://www.reddit.com/r/n8n/comments/1s2s4qi/i_didnt_believe_the_hype_around_n8n_then_i/)
- [AI agent observability discussion](https://www.reddit.com/r/AI_Agents/comments/1qv6wow/observability_is_broken/)
- [Tracing and debugging multi-agent systems discussion](https://www.reddit.com/r/AI_Agents/comments/1nqkvfz/tracing_and_debugging_multiagent_systems_whats/)
- [Production AI agents flying blind discussion](https://www.reddit.com/r/AI_Agents/comments/1unkx8j/unpopular_opinion_most_production_ai_agents_are/)
- [Langfuse trace debugging discussion](https://www.reddit.com/r/AI_Agents/comments/1s2czsg/langfuse_traces_told_us_the_agent_failed_still/)
- [Hacker News CI log debugging discussion](https://news.ycombinator.com/item?id=47303111)
- [Hacker News scheduled task use-case discussion](https://news.ycombinator.com/item?id=47539188)

These public-discussion sources are directional signals only. They are not statistical proof and must not become customer-facing claims.

## Product lesson

Automation users do not only need logs. They need a readable chain from trigger to decision to side effect to outcome. Official workflow products expose run history, replay, event history, logs, telemetry, previews, testing, and sandboxes because users need to know what happened and what will happen next. Practitioner signals show the missing layer: raw traces still leave teams hunting for schema drift, missing permissions, bad tool choices, duplicate triggers, idempotency gaps, hidden costs, and quiet wrong outcomes.

Research should turn that gap into a Project-native advantage. The registry should answer what is allowed to run. Dry-run review should answer what will happen before side effects. The debugger should answer why a run diverged. The recovery loop should answer what is safe to do next and how to prevent recurrence through fixtures, tests, simulations, scorecard thresholds, Product Truth signals, documentation patches, or a reviewed non-action decision.

## Product purpose

AUTO-002 answers:

- What automations exist in this Project?
- Which automations are active, scheduled, paused, failed, degraded, or retired?
- What source scope, connector scope, budget, approval policy, and owner govern each automation?
- What will this automation read, write, patch, notify, export, publish, propose, or bill before it runs?
- Why did a run fail, diverge, pause, retry, produce low-value work, or create a review item?
- What can be retried, replayed, compared, fixture-captured, downgraded, paused, retired, or routed to Scenario Lab safely?
- What evidence can support, customer support, release reviewers, SDK users, or API clients see without exposing raw private content or hidden reasoning?

The registry, dry-run review, and debugger are Project surfaces over canonical automation, Operation, Activity, side-effect, outcome, recipe, support, and audit records. They are not a second workflow engine, evidence model, memory authority, document authority, or telemetry authority.

## Automation registry

Every Project has an automation registry. It includes:

- saved automations;
- scheduled automations;
- active automations;
- paused automations;
- failed automations;
- degraded automations;
- retired automations;
- draft recipe candidates that cannot run;
- canary recipe versions;
- source-change maintenance schedules;
- notification and scheduled research configurations where policy allows.

Registry rows show:

- title, purpose, owner, and responsible reviewer;
- automation kind, Recipe Version, schedule, trigger, or manual-only state;
- lifecycle state and disabled reason;
- source scope and connector scope;
- destination and output target;
- approval policy and delegated-trust eligibility;
- side-effect class;
- expected cost class, monthly projection, and current budget state;
- next run time and quiet-hour behavior;
- last run status, useful outcome, failure reason, and recovery action;
- outcome scorecard status and adaptive recommendation state;
- last dry-run status and stale-plan state;
- Activity, Operation, Scenario Lab, Reversible Work, support-safe diagnostic, and release-evidence refs where relevant.

Registry actions include:

- open details;
- open latest Activity;
- open Automation Run Debugger;
- open dry-run review;
- open Scenario Lab for activation, widening, pausing, or retirement comparisons;
- open outcome scorecard;
- pause, resume, canary, downgrade, retire, delete draft, or request owner review;
- edit schedule, trigger, budget, source scope, approval gate, or destination through owning services;
- export support-safe diagnostics where policy allows.

The registry is the only product place where scheduled or recurring automation may be enabled. Command Center and API calls can navigate to registry actions, but they resolve to the same server-owned lifecycle transitions, expected versions, approval receipts, ActivityEvents, and audit records.

## Dry-run review

Dry-run review is the no-side-effect preview for a specific automation definition, recipe version, scheduled run, manual run, source-change maintenance run, notification rule, export, GitHub proposal, connector action, or publication-adjacent automation.

Dry-run review shows:

- trigger and dedupe inputs;
- source reads and source-version dependencies;
- context-pack refs and redaction summary;
- model roles, model route class, and estimated model calls;
- deterministic checks and policy gates;
- proposed document patches, claim changes, evidence changes, comments, review requests, and ActionCards;
- proposed notifications, exports, GitHub proposals, connector drafts, connector writes, publication checks, or support-safe diagnostic outputs;
- expected cost, latency, queue class, and capacity class;
- approval gates and delegated-trust match or mismatch;
- side-effect class for each step;
- rollback, withdrawal, compensation, reconciliation, or irreversible-effect labels;
- unknowns, unsupported checks, stale dependencies, missing permissions, and live-test boundaries;
- safest next action.

Dry-run review creates no canonical mutations and no external side effects. It may create a simulation record, dry-run record, ActivityEvent, or review ActionCard where the preview itself is material, but it cannot publish, send notifications, merge code, bill, mutate connector state, delete data, widen permission, accept evidence, or alter canonical Documents.

Dry-run review becomes stale when expected versions, source versions, permissions, policy, budgets, connector scope, model-route policy, recipe versions, trigger state, side-effect state, or destination state drift. A stale dry-run cannot be promoted to execution until the owning service revalidates it.

## Automation Run Debugger

The Automation Run Debugger is the redacted Project surface for inspecting automation and recipe runs. It is designed for product users first and operator support second. It should be readable before it becomes technical.

The debugger has three levels:

1. **Summary:** status, trigger, owner, source scope, destination, outcome, cost, latency, failed stage, approval state, side-effect state, safest next action, and redaction summary.
2. **Trace:** step graph, schema inputs and outputs, context-pack refs, source-version refs, model roles, tool calls, policy checks, gates, approvals, retries, fallbacks, side effects, output refs, and outcome links.
3. **Compare and learn:** comparison against a successful run, previous run, recipe version, model role, source scope, parameter set, deterministic gate, or dry-run; failure taxonomy; replay eligibility; fixture creation; scorecard impact; Product Truth signal; and support-safe diagnostic export.

Debugger search supports:

- run id, Operation id, ActivityEvent id, automation id, recipe id, Recipe Version, trigger, owner, actor, source scope, destination, model role, tool, connector, status, failure class, cost class, latency class, approval class, side-effect class, and outcome state.

Debugger records expose:

- searchable execution metadata;
- redacted step traces;
- context-pack refs;
- tool and model decisions without hidden reasoning;
- policy checks;
- approval receipts;
- side-effect ledger refs;
- divergence markers;
- failure taxonomy;
- trace comparison;
- replay eligibility;
- fixture candidates;
- support-safe diagnostic refs;
- outcome scorecard links.

The debugger must not expose hidden model reasoning, raw prompts where policy disallows them, raw private source content, private document bodies, credentials, private URLs, connector payloads, support-only notes, or full telemetry spans unless the viewer is authorized for that data class and the governing support or audit contract permits it.

## Failure taxonomy

Failure classes are typed, searchable, and stable enough for tests, scorecards, support, and Product Truth decisions. Initial classes include:

- trigger ambiguity;
- duplicate trigger;
- stale trigger cursor;
- missing permission;
- connector permission drift;
- stale source;
- unavailable source;
- unsupported claim;
- source-rights blocker;
- schema validation failure;
- invalid parameter;
- wrong tool selection;
- ambiguous tool description;
- unavailable tool;
- model route mismatch;
- model output policy failure;
- cost overrun;
- latency timeout;
- queue timeout;
- budget denial;
- provider degradation;
- connector failure;
- side-effect uncertainty;
- approval mismatch;
- stale approval receipt;
- delegated-trust mismatch;
- publication blocker;
- repository validation failure;
- notification safety blocker;
- quiet wrong outcome;
- user rejection pattern;
- scorecard regression;
- cancellation;
- policy denial;
- abuse throttle;
- support access denied.

Every failure record distinguishes deterministic findings, inferred findings, model-suggested findings, user-confirmed findings, and operator-confirmed findings. Failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain runs also create or update an `AutomationFailureRecoveryRecord` governed by [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md).

## Retry, replay, and comparison

Retry and replay must be explicit and side-effect safe:

- failed-step retry is allowed only when the failed step is idempotent or when reconciliation proves the prior side effect did not happen;
- side-effect uncertainty means reconcile first, not retry;
- replay against immutable source versions is allowed only when source, policy, model-route, connector, and destination dependencies are valid for the replay type;
- external writes, notifications, publication, billing, repository mutations, and connector writes require a new ActionCard or valid delegated-trust verification before mutation;
- the side-effect ledger prevents duplicate writes and records compensation or reconciliation where needed;
- replay that would change current Project state becomes a Reversible Work or Scenario Lab path, not a silent debugger command;
- comparison can run without mutation against prior traces, dry-runs, fixtures, or sanitized snapshots.

The debugger should turn repeated failures into durable improvement work:

- create an evaluation fixture;
- create a recipe simulation case;
- create a failure-class threshold;
- create an adaptive-routing recommendation;
- create a Product Truth signal;
- create a support-safe diagnostic;
- create an ActionCard;
- record a non-action decision when the behavior is accepted or intentionally unsupported.

## UX and performance rules

- Registry first load must return authorized rows and status summaries before high-volume trace hydration.
- Users can filter by lifecycle state, owner, trigger, destination, source scope, failure class, cost class, approval state, side-effect class, outcome state, and next action.
- Dry-run review must put effects and disabled reasons before trace detail.
- The debugger must be useful from a narrow screen, keyboard, and screen reader.
- Trace graphs use stable dimensions and progressive disclosure so dense runs do not become unreadable.
- Redaction summaries must explain what is hidden and why without leaking hidden counts or labels.
- Cost, latency, queue time, token class, and provider state are visible where they affect user decisions.
- The safest next action is always visible for failed, blocked, degraded, paused, stale, unsupported, and cancelled runs.
- Registry rows, dry-run cards, debugger summaries, Activity cards, Operation status, API status, SDK status, webhook payloads, SupportDiagnosticBundles, and release evidence must agree for the same run.

## Non-goals

- Do not expose hidden chain-of-thought or hidden model reasoning.
- Do not make raw telemetry spans the user interface.
- Do not let the debugger mutate canonical resources by itself.
- Do not treat dry-run review as a guarantee that live execution will match stale state.
- Do not replay external writes silently.
- Do not delete automation history when a configuration is retired.
- Do not infer automations from ambient screen, clipboard, browser history, filesystem, keylogging, camera, microphone, or OS-window capture.
- Do not make the registry a separate workflow authority from recipes, lifecycle governance, Activity, Operations, side-effect ledgers, and owning domain services.

## Acceptance criteria

AUTO-002 is production-ready only when:

- saved, scheduled, active, paused, failed, degraded, and retired automations appear in the registry with owner, trigger, source scope, connector scope, destination, lifecycle state, cost projection, approval policy, outcome state, and safe actions;
- lifecycle controls use expected versions, idempotency keys, approval receipts, ActivityEvents, audit events, and owner-service transitions;
- dry-run review is side-effect free and shows proposed source reads, context packs, model calls, document patches, claim changes, notifications, exports, GitHub proposals, connector actions, publication-adjacent effects, costs, approvals, side-effect classes, rollback or compensation paths, unknowns, stale inputs, and live-test boundaries;
- stale dry-runs cannot execute without revalidation;
- Automation Run Debugger views provide searchable metadata, redacted step traces, context-pack refs, tool and model decisions, policy checks, approvals, side-effect ledger refs, divergence markers, failure taxonomy, trace comparison, replay eligibility, fixture creation, support-safe diagnostics, and outcome links;
- failure taxonomy is typed, searchable, analytics-safe, and used by tests, outcome scorecards, support-safe diagnostics, and Product Truth signals;
- AutomationFailureRecoveryRecords capture severity, user impact, side-effect state, cause confidence, safe next action, disabled actions, owner, expiry, support-safe diagnostic refs, outcome evidence, learning artifacts, and release or customer-claim blockers;
- retry and replay prove idempotency, expected-version checks, side-effect safety, reconciliation, and approval behavior for every material effect class;
- debugger and registry views are authorization-filtered, content-minimized, accessible, responsive, and consistent across UI, API, SDK, CLI, MCP, webhook, SupportDiagnosticBundle, and release-evidence surfaces;
- repeated failure patterns can become fixtures, recipe simulation cases, evaluation cases, ActionCards, Product Truth signals, adaptive-routing recommendations, support-safe diagnostics, or explicit non-action decisions;
- validation covers cross-tenant isolation, redaction, stale-plan rejection, cost projection accuracy, failure-class accuracy, side-effect dedupe, replay safety, accessibility, narrow screens, and degraded provider behavior.

## Documentation update rule

Changes to automation registry, dry-run review, Automation Run Debugger, failure taxonomy, replay eligibility, fixture creation, trace comparison, or automation support diagnostics must update:

- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md)
- [`automation-outcome-scorecard-and-adaptive-workflows.md`](automation-outcome-scorecard-and-adaptive-workflows.md)
- [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md)
- [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md)
- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`project-settings-and-administration.md`](project-settings-and-administration.md)
- [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md)
- [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
