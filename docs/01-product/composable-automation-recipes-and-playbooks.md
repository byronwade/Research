# Composable automation recipes and playbooks

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should let users turn repeated Project work into reusable, reviewable automation without asking them to become workflow engineers or trust a hidden agent. Automation Recipes are Project-native playbooks for source maintenance, research runs, document patches, publication checks, feedback triage, GitHub proposals, notifications, exports, recovery, and review routing. Project automation registry, dry-run review, run debugging, failure taxonomy, and replay eligibility are governed by [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md). AutomationFailureRecoveryRecords, recovery severity, safe next actions, and learning artifacts are governed by [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md). Source-change maintenance behavior is governed by [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md); recipes can schedule or compose that work but cannot bypass maintenance review, evidence, or publication blockers. Delegated trust and approval-load behavior for recipe activation and repeated runs is governed by [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md). Abuse prevention, recipe throttles, trust-safety reviews, appeals, and emergency controls are governed by [`abuse-prevention-and-trust-safety.md`](abuse-prevention-and-trust-safety.md). Project-wide option comparison and apply-candidate behavior for recipe activation is governed by [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md). Reversible Work behavior for recipe restore, run replay, withdrawal, compensation, reconciliation, and irreversible effects is governed by [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md).

This document governs `AUTO-004` and `AUTO-005`.

## Sources reviewed

Official capability references:

- [Apple Shortcuts User Guide](https://support.apple.com/guide/shortcuts/welcome/ios)
- [Apple Shortcuts personal automation](https://support.apple.com/guide/shortcuts/intro-to-personal-automation-apd690170742/ios)
- [Microsoft Power Automate documentation](https://learn.microsoft.com/en-us/power-automate/)
- [Power Automate Copilot cloud flow creation](https://learn.microsoft.com/en-us/power-automate/create-cloud-flow-using-copilot)
- [Microsoft Copilot Studio agent flows](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)
- [Microsoft Copilot Studio autonomous agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/autonomous-agents)
- [Notion Custom Agents](https://www.notion.com/help/custom-agents)
- [Glean agents: how agents work](https://docs.glean.com/agents/how-agents-work)
- [Atlassian Rovo agents in automations](https://support.atlassian.com/rovo/docs/agents-in-automations/)
- [Atlassian Rovo agent tools](https://support.atlassian.com/rovo/docs/agent-actions/)
- [n8n AI Agent node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools) and [Apps SDK MCP overview](https://developers.openai.com/apps-sdk/concepts/mcp-server)
- [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/) and [Windows App Action JSON schema](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-json)

Directional public user-opinion and practitioner signals:

- [AI agents get fragile when workflows get messy](https://www.reddit.com/r/AI_Agents/comments/1thmc08/ai_agents_feel_impressive_until_the_workflow_gets/)
- [Shortcuts power versus clunky authoring discussion](https://www.reddit.com/r/shortcuts/comments/1ldedpg/i_feel_like_the_shortcuts_app_is_so_powerful_and/)
- [Power Automate unintuitive and brittle discussion](https://www.reddit.com/r/MicrosoftFlow/comments/1avn82s/am_i_stupid_or_is_power_automate_wildly/)
- [Boring AI workflows versus autonomous agents discussion](https://www.reddit.com/r/AI_Agents/comments/1u1j6wk/i_trust_boring_ai_workflows_more_than_autonomous/)
- [Zapier cost and broken-trigger discussion](https://www.reddit.com/r/zapier/)
- [AI agent fatigue and engineering discussion](https://www.reddit.com/r/automation/comments/1ppfdrs/the_ai_agent_fatigue_is_real_can_we_talk_about/)
- [Automation failure at scale discussion](https://www.reddit.com/r/AI_Agents/comments/1r64ieo/the_real_reason_automation_fails_at_scale_and_how/)
- [n8n workflow versus AI agent discussion](https://www.reddit.com/r/n8n/comments/1ieka5u/its_not_ai_agent_its_automated_workflow/)
- [Power Automate Copilot flow-authoring context discussion](https://www.reddit.com/r/PowerAutomate/comments/1tjr0j8/why_is_copilot_so_bad_at_creating_flows/)
- [MCP action schema and context-budget discussion](https://www.reddit.com/r/LLMDevs/comments/1utvb34/mcp_tool_schemas_are_quietly_eating_my_context/)

The product lesson is not "make a generic automation builder." Users want leverage, but they lose trust when authoring is clumsy, triggers are vague, failures are quiet, logs are weak, costs are surprising, or a probabilistic agent is allowed to make final changes. Research should make repeatable evidence work easy to compose while keeping recipes typed, inspectable, simulated, versioned, and outcome-measured.

## Product purpose

Automation Recipes answer:

- What repeated Project work should be captured as a reusable workflow?
- What exact event starts it, and what source scope, policy, budget, and output target does it use?
- Which steps are deterministic, which steps use AI, and where does a human review?
- What will happen in dry-run mode before the recipe runs live?
- Which canonical resources can it read, draft, patch, notify, export, or propose changes to?
- What does it do when evidence is missing, permissions change, costs spike, or a model is confidently wrong?
- How do we know the recipe produced accepted value rather than activity volume?

Recipes are Project-native. They operate over Sources, Claims, Documents, Activity, ActionCards, Research Runs, Product Truth signals, Reversible Work records, GitHub proposals, publications, and governed connectors. They are not a second workflow authority.

## Core objects

### Automation Recipe

An Automation Recipe is a reusable, versioned playbook with:

- objective and non-goals;
- owner and reviewer;
- trigger definition;
- source scope and resource selectors;
- deterministic preflight;
- AbusePolicy and throttle policy;
- typed steps;
- AI roles where needed;
- approval gates;
- output targets;
- budget and cost projection;
- stop conditions;
- rollback, withdrawal, compensation, reconciliation, or irreversible-effect path;
- simulation fixtures;
- outcome metrics.

### Recipe Version

Recipes change through immutable versions. A version can be draft, validated, approved, canary, active, paused, deprecated, or retired. A running recipe continues on the version it started with unless it reaches an explicit migration checkpoint.

### Trigger

A Trigger is the exact event or schedule that starts a recipe. Supported trigger families include:

- manual Command Center run;
- saved Chat or Research Run contract;
- schedule;
- SourceVersion created, refreshed, parsed, failed, or revoked;
- DocumentRevision, comment, review request, or ActionCard change;
- Claim becomes stale, disputed, unsupported, or publication-blocking;
- Trust Dashboard coverage threshold;
- Product Truth signal or contradiction;
- GitHub repository snapshot or validation event;
- connector webhook or authorized external event;
- budget, quota, or operational threshold.

Triggers must be specific enough to test and deduplicate. "When I get a new client" is not a trigger; "when this form creates a source record with this Project tag" can be.

### Step

Recipe steps can be:

- deterministic checks;
- retrieval or source inspection;
- AI extraction, classification, verification, drafting, or editing;
- branch, loop, wait, or join control;
- human approval or information request;
- document patch proposal;
- claim or evidence update proposal;
- notification draft or send;
- export, publication check, or GitHub proposal;
- connector draft or external write;
- sub-recipe call.

Every step declares input schema, output schema, allowed tools, retry policy, timeout, cost class, and failure behavior.

Recipe steps also bind to the Project Action Surface when they invoke Project commands, API operations, connector actions, native companion actions, browser-extension actions, MCP tools, or external writes. The recipe graph can compose descriptors, but it cannot inline a private handler, suppress disabled reasons, widen a descriptor's side-effect class, or replace command preflight with prompt text.

### Playbook

A Playbook is a curated set of recipes for a job, such as "weekly source maintenance," "publication readiness," "customer-feedback triage," "repository documentation update," or "competitor-signal refresh." Playbooks can be Project-owned, Organization-owned, or shipped as locked examples.

## Authoring experience

Users can create recipes from:

- a natural-language description;
- an existing Research Run;
- repeated Command Center actions;
- an Activity timeline selection;
- an ActionCard pattern;
- a document maintenance checklist;
- an imported Project template;
- a blank structured editor.

Natural language creates a draft recipe, not a runnable workflow. Research converts it into typed triggers, steps, gates, budgets, and outputs, then shows gaps and asks only material clarifying questions. Users can edit recipes through a structured visual editor and a readable Markdown-like recipe view.

The recipe editor should prefer a searchable action catalog over free-form tool names. Users should be able to inspect each candidate action's inputs, outputs, side effects, approval class, expected versions, disabled reasons, failure behavior, and recovery path before adding it to a recipe.

## Simulation and dry run

Before a recipe can run unattended, users can simulate it against:

- synthetic fixtures;
- authorized historical ActivityEvents;
- immutable SourceVersions;
- sample document revisions;
- past ActionCards;
- dry-run connector responses;
- expected budget and capacity conditions.

Dry-run mode shows proposed source reads, model calls, document patches, claim changes, notifications, connector actions, cost, latency, approval gates, and failure branches. It creates no external side effects and no canonical mutations. The reusable dry-run review shape, stale-preview rules, side-effect class labels, failure taxonomy, and run-debugger handoff are governed by [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md).

Recipe simulation proves recipe-specific trigger, fixture, gate, and side-effect behavior. Scenario Lab compares the broader Project effect of activating, canarying, widening, pausing, or retiring that recipe across documents, sources, publications, costs, approval load, Work Packets, Project Health, Project Atlas, Reversible Work, and release evidence.

## Safety and control

- Recipes cannot run without a trigger, source scope, owner, budget, and stop condition.
- Every trigger has deduplication and idempotency rules.
- Every trigger and run passes AbusePolicy, AbuseThrottle, provider-policy, quota, and budget checks before model calls or side effects.
- Every AI step is bounded by model role, context pack, tool policy, budget, and output schema.
- Every high-risk step requires an approval gate or ActionCard.
- Repeated low-risk gates can propose delegated trust only after simulation, canary, explicit scope, expiry, revocation, and outcome metrics are recorded.
- Every external write has a withdrawal, rollback, compensation, reconciliation, or irreversible-effect label where possible.
- Every recipe can be paused, resumed, cancelled, canaried, downgraded, or retired.
- A recipe that repeatedly fires unexpectedly, hits abuse thresholds, creates publication spam, sends notification spam, opens low-signal GitHub proposals, or attempts connector-write fanout is paused and routed to abuse review.
- Every run emits ActivityEvents and progressive status.
- Every accepted, edited, rejected, ignored, reverted, or blocked output feeds the outcome scorecard.
- Failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain recipe runs create AutomationFailureRecoveryRecords before activation can expand or outcome claims can rely on the recipe.

The recipe authoring UI must make hidden cost, trigger ambiguity, missing permissions, stale sources, untested branches, and unsupported claims visible before activation.

## Advanced Research-specific behavior

Research should go beyond generic OS or app automation by offering:

1. **Workflow crystallization:** suggest a draft recipe when a user repeats the same source, evidence, patch, review, or publication pattern.
2. **Evidence-aware triggers:** start work when claims become stale, citations lose support, source coverage drops, or a publication blocker appears.
3. **Claim-safe automation:** slow down when a result is plausible but unverified, not only when the model reports low confidence.
4. **Document patch recipes:** generate typed patches against canonical Markdown with expected-base revisions.
5. **Truth-board recipes:** convert repeated feedback, user-opinion, or official-reference changes into reviewable Product Truth updates.
6. **Runbook-grade exports:** export a recipe with schema, fixtures, run history, validation, permissions, and outcome evidence for review.
7. **Action-catalog composition:** compose Project-native actions from the same descriptor registry used by Command Center, API, SDK, CLI, MCP, native companion, browser extension, and connected-app projections.

## Non-goals

- Do not become a generic Zapier, Shortcuts, or Power Automate replacement.
- Do not capture ambient screen or OS activity to infer recipes.
- Do not let prompt-only recipes run as production automation.
- Do not let recipes call unregistered tools, private client handlers, prompt-created action names, or OS/assistant actions that are not projected through the Project Action Surface.
- Do not let a recipe hide trigger ambiguity, untested branches, or cost exposure.
- Do not let a recipe mutate canonical documents, sources, publications, billing, connectors, repositories, or external systems without expected versions, idempotency, and approval policy.
- Do not treat "agent completed" as proof of a useful or correct outcome.

## Acceptance criteria

Composable automation is production-ready only when:

- `AUTO-004` and `AUTO-005` are implemented and tested;
- recipes compile to typed triggers, steps, gates, budgets, source scopes, and outputs;
- recipe steps that invoke Project actions bind to canonical Project Action Surface descriptors with input schema, result schema, side-effect class, approval class, preflight, expected-version, idempotency, ActivityEvent, and audit requirements;
- natural-language recipe creation produces draft recipes requiring review;
- dry-run and simulation cover authorized historical and synthetic cases without side effects;
- recipe activation flows use Scenario Lab when a user must compare activate, canary, defer, or reject options across Project impact, cost, latency, approval load, and recovery;
- recipe activation requires owner approval, cost projection, stop conditions, rollback, withdrawal, compensation, reconciliation, or irreversible-effect notes, and outcome metrics;
- recipe activation and trigger execution enforce AbusePolicy, throttles, emergency controls, provider-policy checks, review paths, appeal outcomes, and false-positive measurement;
- recipe version restore, run replay, publication withdrawal, external compensation, and connector reconciliation route through Reversible Work and the reversal ledger;
- every run creates Operation, Progressive Delivery, Activity, audit, and outcome records;
- high-risk steps create ActionCards and approval receipts;
- delegated-trust grants for recurring recipe runs are scoped, expiring, revocable, and fail closed on drift;
- versioning, canary, pause, resume, cancellation, retirement, and migration behavior are tested;
- accessibility tests cover recipe authoring, simulation review, run inspection, and error recovery;
- release evidence includes trigger correctness, idempotency, permission isolation, cost projection accuracy, quiet-failure detection, and outcome scorecard behavior.
- release evidence includes AutomationFailureRecoveryRecords, unresolved severity disposition, recovery learning artifacts, and non-action decisions for recipe failures that affected activation, canary, support, or customer-facing claims.

## Documentation update rule

Changes to Automation Recipes, Playbooks, recipe authoring, trigger policy, dry-run simulation, recipe versioning, or recipe activation must update:

- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md)
- [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md)
- [`automation-outcome-scorecard-and-adaptive-workflows.md`](automation-outcome-scorecard-and-adaptive-workflows.md)
- [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md)
- [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md)
- [`notifications-and-scheduled-automation.md`](notifications-and-scheduled-automation.md)
- [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`../02-architecture/scenario-simulation-engine.md`](../02-architecture/scenario-simulation-engine.md)
- [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md)
- [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md)
- [`../02-architecture/abuse-prevention-policy-and-enforcement.md`](../02-architecture/abuse-prevention-policy-and-enforcement.md)
- [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [`../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md)
- [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md)
- [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
