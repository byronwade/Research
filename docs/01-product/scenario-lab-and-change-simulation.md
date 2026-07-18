# Scenario Lab and change simulation

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should let a user ask what would happen before a Project change runs. Scenario Lab is the Project-wide simulation surface for source changes, document patches, publication, recipe activation, repair playbooks, policy edits, model routing, costs, release candidates, connector actions, repository proposals, and recovery actions. It is not a fourth primary surface; it appears contextually around Chat, Documents, Sources, Activity, Project Health, Project Atlas, Reversible Work, Work Packets, recipes, settings, and the developer API.

This document governs `SIM-001` and informs `SIM-002`. Advanced operating-layer scenario-before-side-effect differentiation is governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md). The simulation engine is governed by [`../02-architecture/scenario-simulation-engine.md`](../02-architecture/scenario-simulation-engine.md). Project automation registry, reusable dry-run review, and Automation Run Debugger behavior are governed by [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md); Scenario Lab owns Project-wide option comparison before material activation, widening, pausing, retirement, or recovery.

## Sources reviewed

Official capability references:

- [Microsoft Learn: Test cloud flows](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/test-cloud-flows)
- [Zapier: Test Zap steps](https://help.zapier.com/hc/en-us/articles/18811411817741-Test-Zap-steps)
- [Terraform CLI: plan](https://developer.hashicorp.com/terraform/cli/commands/plan)
- [Microsoft Learn: Windows Developer Configurations](https://learn.microsoft.com/en-us/windows/dev-configs/)
- [Microsoft MXC repository](https://github.com/microsoft/mxc)
- [Apple Support: Enable or disable a personal automation](https://support.apple.com/guide/shortcuts/enable-or-disable-a-personal-automation-apd602971e63/ios)
- [GitHub Docs: Re-run workflows and jobs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs)

Directional public user-opinion and practitioner signals:

- [Hacker News: In praise of --dry-run](https://news.ycombinator.com/item?id=46840612)
- [Reddit Shortcuts discussion: Ask Before Running](https://www.reddit.com/r/shortcuts/comments/wzd6ku/please_explain_ask_before_running/)
- [Hacker News Terraform and production database discussion](https://news.ycombinator.com/item?id=47275157)

These public-discussion sources are directional signals only. They are not statistical proof and must not become customer-facing claims.

## Product lesson

Automation and infrastructure tools expose previews, test records, dry-runs, mocks, saved plans, safe reruns, and declarative re-application because users need confidence before side effects. The gaps are just as important: many automation tests are live actions, partial simulations can miss the failing path, and stale plans can become unsafe when upstream state changes.

Research has a stronger product opportunity because it owns Project evidence, claims, documents, publications, recipes, Activity, Work Packets, Project Health, Project Atlas, approvals, policies, telemetry, and release evidence. Scenario Lab should make the likely effect of a Project change inspectable before mutation while being honest about unknowns, stale inputs, live-test boundaries, and approval requirements.

## Product purpose

Scenario Lab answers:

- What happens if I refresh, revoke, replace, reprocess, or delete this source?
- What happens if I accept this document patch or publish this document?
- What happens if I activate, widen, pause, or retire this automation recipe?
- What happens if I run this Project Health repair playbook?
- What happens if I change model mode, source scope, budget, retention, residency, connector scope, or Project policy?
- Which option is fastest, safest, cheapest, most complete, least disruptive, or easiest to recover?
- Which claims, documents, publications, exports, Worksets, Work Packets, recipes, approvals, costs, latencies, support risks, and rollback paths are involved?

The result is a simulation record and decision trail. It is not a promise that the future will match the plan.

## Scenario Lab experience

Scenario Lab appears from:

- Command Center and keyboard workflows;
- Project Operating Layer Work Packets and NextActionCandidates;
- Project Health findings and repair dry-runs;
- Project Atlas neighborhoods and Impact Reports;
- automation registry, dry-run review, recipe builder, run debugger, and activation flow;
- document patch review, publication preflight, export, and release-candidate flow;
- source detail, source change, retention, and connector settings;
- Project settings, policy, budget, model-routing, residency, and support-grant changes;
- public API, SDK, CLI, MCP, and webhook diagnostics where policy allows.

The default view is a focused scenario card, not a decorative flowchart. A scenario card shows:

- target resource and expected version;
- proposed change and source scope;
- options being compared;
- likely affected resources;
- support, freshness, publication, rights, privacy, residency, and retention impact;
- approval class, delegated-trust eligibility, and hard-stop actions;
- external side-effect class;
- expected cost, latency, queue, and capacity effect;
- recovery, rollback, withdrawal, or no-rollback state;
- unknowns, unsupported checks, redactions, and stale inputs;
- safest next actions.

## Scenario types

Initial scenario types:

- `source_change`: refresh, revoke, replace, delete, reprocess, rights change, parser change, or retention change.
- `document_change`: accept patch, regenerate section, resolve contradiction, unlock region, or merge review suggestion.
- `publication_export`: publish, withdraw, republish, export, redact, or package release artifact.
- `recipe_activation`: activate, widen, pause, canary, retire, or reroute an automation recipe.
- `repair_playbook`: preview a Project Health repair, repeated repair escalation, or support-safe diagnostic action.
- `policy_admin_change`: change model roles, connector scopes, residency, budget, support grants, Project settings, or administration policy.
- `work_control_change`: rebuild Work Packet, capture repeated work, update next-action recommendation, or restore Workset.
- `recovery_action`: restore canonical state, replay Operation, withdraw publication, compensate external side effect, reconcile connector state, or acknowledge irreversible effect.
- `repository_change`: apply GitHub source refresh, branch proposal, validation run, commit, or pull-request draft.
- `release_candidate`: evaluate production readiness, migration, rollback, launch claim, or waiver effect.

Each scenario type has a deterministic base schema. Product copy may summarize the scenario, but the engine-owned record carries the authority.

## Simulation behavior

Scenario Lab must:

- run authorization before collecting any candidate input;
- assemble a content-minimized input snapshot from canonical Project records;
- prefer deterministic analyzers, policy checks, graph traversal, and typed mocks before model reasoning;
- label model-estimated results separately from deterministic results;
- avoid live mutation during simulation;
- clearly mark any connector test that would perform a live action as a live test, not a no-side-effect simulation;
- show stale, partial, unsupported, redacted, and unknown state instead of hiding gaps;
- require revalidation immediately before any apply candidate can mutate state;
- invalidate simulations when dependencies, expected versions, policies, permissions, budgets, source versions, document revisions, recipe versions, model-routing policy, or connector scope changes;
- emit ActivityEvents for material simulation records, decisions, and apply candidates;
- link outcomes back to the original simulation so accuracy can be measured.

Simulated effects are advisory until an owning service performs the real preflight and mutation. Scenario Lab cannot bypass approval, delegated-trust, budget, source-rights, residency, publication, security, support, or release gates.

## Comparisons

Users should be able to compare options such as:

- publish now, publish after patch review, or do not publish;
- refresh a source now, defer until quiet hours, or revoke it;
- run a repair, create an ActionCard, or leave the finding unresolved;
- use quick, focused, deep, or scheduled research mode;
- run a recipe once, canary it, or keep it as a draft;
- lower model cost, preserve current model role, or escalate to council verification.

Comparison views must make tradeoffs explicit. A cheaper option that increases unsupported claims, publication blockers, or human review should not be presented as simply better.

## Relationship to existing Project systems

- Project Atlas provides graph neighborhoods and Impact Reports that can become scenario inputs.
- Project Health provides findings and repair playbooks that can be simulated before repair.
- Automation Recipes provide draft, test, canary, and activation inputs.
- Reversible Work provides recovery actions that can be simulated before restore, withdrawal, compensation, or reconciliation.
- Project Operating Layer turns scenario outcomes into Work Packet next actions only after revalidation.
- Activity records scenario creation, simulation runs, decisions, invalidations, and apply candidates.
- Approval policy determines whether an option can proceed, needs an ActionCard, or fails closed.
- Product Truth can track repeated failed simulations, inaccurate estimates, user corrections, and launch gaps.

Scenario Lab coordinates those systems. It does not replace them.

## Privacy and control

Scenario Lab must not:

- capture ambient screen state, browser history, clipboard content, operating-system window state, local files outside explicit Project sources, or raw device telemetry;
- store raw source text, private document bodies, prompts, hidden reasoning, credentials, private URLs, full connector payloads, or screenshots in simulation records;
- reveal hidden resources through counts, labels, side effects, or recommendations when policy does not allow disclosure;
- make external writes, send notifications, publish, delete, widen permissions, bill, merge code, or change administration state during simulation;
- use support-only knowledge that the user cannot inspect through authorized Activity or support-safe diagnostics.

Simulation records store identifiers, versions, hashes, safe labels, classifications, redaction summaries, cost and latency classes, and dependency references.

## Non-goals

- Do not promise perfect prediction.
- Do not treat simulation as a substitute for tests, release gates, publication checks, or real preflight.
- Do not hide that a connector test is live.
- Do not create a general operating-system simulator.
- Do not capture user device behavior to infer scenarios.
- Do not turn every safe action into an approval-heavy scenario.
- Do not allow old saved plans to apply after Project state drifts.

## Acceptance criteria

Scenario Lab is production-ready only when:

- `SIM-001` and `SIM-002` are implemented and tested;
- every simulation input is authorization-filtered and content-minimized;
- scenario cards show expected versions, target, scope, effects, unknowns, redactions, cost, latency, approval class, side-effect class, and recovery path;
- live connector tests are labeled as live tests and cannot be represented as no-side-effect simulations;
- stale simulations cannot create apply candidates until revalidated;
- apply candidates route through the owning mutation service, deterministic preflight, idempotency, expected versions, approval receipts, budget checks, and ActivityEvents;
- recovery apply candidates route through the reversal ledger, side-effect ledger, owning mutation service, and compensation or reconciliation policy before mutation;
- Project Atlas, Health, recipes, publications, document patches, source changes, settings, API, SDK, CLI, and MCP expose consistent scenario records;
- tests cover simulation creation, comparison, redaction, invalidation, stale apply rejection, live-test labeling, approval routing, cost and latency estimates, and outcome observation;
- release evidence includes simulation accuracy, false-safe rate, stale-plan rejection, user correction, approval burden, privacy, authorization, and support-readiness validation.

## Documentation update rule

Changes to Scenario Lab, simulation types, simulation cards, comparison behavior, apply candidates, invalidation, or outcome observation must update:

- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`project-health-and-repair.md`](project-health-and-repair.md)
- [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md)
- [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md)
- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md)
- [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`../02-architecture/scenario-simulation-engine.md`](../02-architecture/scenario-simulation-engine.md)
- [`../02-architecture/project-operating-layer-control-plane.md`](../02-architecture/project-operating-layer-control-plane.md)
- [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md)
- [`../02-architecture/project-map-and-impact-analysis.md`](../02-architecture/project-map-and-impact-analysis.md)
- [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
