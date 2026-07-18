# Automation failure recovery and learning loop

**Review date:** 2026-07-18
**Status:** delivery and Product Truth contract, not runtime behavior

Automation failures are product moments, not just log events. Research must tell the user what failed, what is affected, what is safe to do next, who owns follow-up, and how the same class of failure will be prevented, tested, or deliberately accepted next time.

This contract defines `AUTO-006`. It closes the gap between the Automation Registry and Run Debugger, automation outcome scorecards, Product Truth, release evidence, and user-facing recovery UX. It does not create a second workflow engine, incident system, telemetry authority, evidence model, Product Truth authority, support database, or document authority.

## Source basis

Official product, operations, observability, and usability references reviewed on 2026-07-18:

- [Zapier workflow error troubleshooting](https://help.zapier.com/hc/en-us/articles/8496037690637-How-to-troubleshoot-errors-in-Zap-workflows) for surfaced status, error detail, HTTP logs, replay, autoreplay, and custom error-handling behavior.
- [n8n Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/) for routing failed workflow executions into dedicated error workflows with execution IDs, retry links, last-executed node, and error data.
- [n8n HTTP Request common issues](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/common-issues/) for permission, scope, rate-limit, and retry behavior.
- [Google SRE incident management guide](https://sre.google/resources/practices-and-processes/incident-management-guide/) for minimizing user impact, coordinating response, learning from incidents, and preventing recurrence.
- [Temporal Retry Policies](https://docs.temporal.io/encyclopedia/retry-policies) for explicit retry timing, retry eligibility, and the boundary between Activity retry and Workflow retry.
- [OpenTelemetry exception log semantic conventions](https://opentelemetry.io/docs/specs/semconv/exceptions/exceptions-logs/) for stable exception event naming, severity, attributes, stack traces, and exception metadata.
- [Nielsen Norman Group usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) and [severity rating guidance](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/) for plain-language error recovery, constructive next steps, frequency, impact, persistence, and release-priority severity.

Directional public practitioner and user-opinion signals reviewed on 2026-07-18:

- [AI agent state-ledger observability discussion](https://www.reddit.com/r/AI_Agents/comments/1uka5ql/maybe_agent_observability_should_start_with_state/) for practitioner concerns that traces are insufficient when receipt state, retry state, and next safe action are unclear.
- [Production AI agents flying blind discussion](https://www.reddit.com/r/AI_Agents/comments/1unkx8j/unpopular_opinion_most_production_ai_agents_are/) for the risk that green traces can still hide wrong outcomes unless domain assertions, sampled review, and regression fixtures exist.
- [Long-running agent debugging discussion](https://www.reddit.com/r/AI_Agents/comments/1qlto3u/how_do_you_debug_longrunning_agents_after_they/) for user frustration with partial logs, hangs, manual kills, and missing replay context.
- [n8n quiet wrong outcome discussion](https://www.reddit.com/r/n8n/comments/1uonmvb/found_a_bug_in_my_production_workflow_that_never/) for the risk that a workflow can appear successful while producing bad data.
- [n8n workflow debugging discussion](https://www.reddit.com/r/n8n/comments/1s1jjgc/how_i_debug_n8n_workflows_without_losing_my_mind/) for practitioner use of checkpoints, known-good inputs, and explicit debug artifacts.
- [Hacker News multi-agent debugging discussion](https://news.ycombinator.com/item?id=47358618) and [AgentLens discussion](https://news.ycombinator.com/item?id=47205382) for production debugging pain around multi-step agents, tools, retries, silent failures, and pre-action intent state.

Public discussions are directional signals only. They can create requirements, fixtures, review questions, or non-action decisions, but they cannot become statistical proof, customer-facing claims, or launch evidence without screened user research, runtime evidence, telemetry, benchmarks, Product Truth decisions, and release evidence.

## Authority and relationship

This contract governs `AUTO-006` and depends on:

- [`../01-product/automation-registry-and-run-debugger.md`](../01-product/automation-registry-and-run-debugger.md) for registry state, dry-run review, debugger, failure taxonomy, trace comparison, replay eligibility, fixture creation, side-effect safety, and support-safe diagnostics;
- [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md) for lifecycle states, approval classes, execution records, retries, replay, and operational launch gates;
- [`../01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md) and [`../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md) for outcome value, adaptive recommendations, and activity-versus-value separation;
- [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md) and [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md) for recipe versions, simulations, triggers, canary activation, and stop conditions;
- [`../01-product/reversible-work-and-project-history.md`](../01-product/reversible-work-and-project-history.md) and [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md) for retry, replay, rollback, restore, withdrawal, compensation, reconciliation, and irreversible-effect labeling;
- [`../01-product/project-health-and-repair.md`](../01-product/project-health-and-repair.md) and [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md) for user-visible health findings, repair playbooks, support-safe diagnostics, and repair outcomes;
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md), [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md), [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md), [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md), and [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) for release gates.

If this contract conflicts with a product or architecture contract, correct the governing contract first and then update this delivery projection.

## Product purpose

AUTO-006 answers:

- What happened and how confident is Research about the cause?
- What user-visible work, source state, document state, publication state, connector state, notification state, repository state, billing state, or external side effect might be affected?
- Did the automation fail loudly, degrade, get cancelled, become stale, silently produce a wrong outcome, or complete with uncertain side effects?
- What is the single safest next action and why are other actions disabled?
- Can the user retry, replay, reconcile, compensate, roll back, withdraw, pause, retire, create a fixture, open Scenario Lab, open Project Health, escalate, or record a non-action decision?
- What evidence proves the recovery worked or that the risk was accepted?
- What learning artifact prevents the same failure class from recurring without creating uncontrolled automation scope?

## Recovery record

Every failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain automation run creates or updates an `AutomationFailureRecoveryRecord`:

```text
id
project_id
automation_id
recipe_id
recipe_version_id
run_id
operation_id
activity_event_ids
failure_class
recovery_severity: AFR-0 | AFR-1 | AFR-2 | AFR-3
recovery_state
detected_by: deterministic-check | model-check | user-report | operator-review | telemetry | support | benchmark | product-truth | release-gate
cause_confidence: confirmed | likely | uncertain | disputed | unknown
user_impact
affected_resources
affected_external_effects
source_scope
connector_scope
destination_scope
side_effect_state: none | not-started | completed | partial | uncertain | duplicate-risk | irreversible | reconciled
safe_next_action
disabled_actions
retry_policy_ref
replay_policy_ref
reconciliation_check_ref
compensation_plan_ref
reversal_record_ref
support_diagnostic_bundle_ref
human_ai_interaction_finding_ref
outcome_scorecard_ref
product_truth_signal_ref
benchmark_scenario_ref
fixture_ref
owner
review_due
expiry
release_blocker
customer_claim_blocker
outcome_evidence
learning_links
non_action_decision_ref
```

The record is content-minimized. It stores identifiers, classifications, summaries, timings, safe excerpts where policy allows, redaction summaries, and links to authorized records. It must not store hidden model reasoning, raw private source text, raw prompts where policy disallows them, private document bodies, credentials, private URLs, full connector payloads, or support-only notes outside their governing support access policy.

## Recovery state model

`AutomationFailureRecoveryRecord.recovery_state` uses one of these stable states:

| State | Meaning |
|---|---|
| `detected` | Failure, degradation, stale state, cancellation, quiet wrong outcome, or side-effect uncertainty has been identified. |
| `triaged` | Failure class, severity, affected resources, and cause confidence are recorded. |
| `blocked` | No action may proceed until missing permission, policy, evidence, owner, or expected-version state is resolved. |
| `needs-user-action` | A user, owner, admin, reviewer, or support role must decide the next step. |
| `retry-eligible` | The failed step can be retried because idempotency or reconciliation proves duplicate side effects will not occur. |
| `replay-eligible` | A replay can run against valid immutable inputs, policy, model route, and destination state. |
| `reconcile-first` | External effect state is unknown or duplicate-risk exists, so reconciliation must run before retry, replay, or compensation. |
| `compensating` | A CompensationPlan or ReversalRecord is in progress because direct undo is unavailable or incomplete. |
| `recovered` | Recovery action completed and outcome evidence shows the intended safe state. |
| `accepted-risk` | Owner accepted bounded residual risk with expiry, limitation, and customer-claim blocker where needed. |
| `non-action` | A reviewed NonActionDecision records why no product, test, support, or documentation change is needed. |
| `learning-created` | A fixture, simulation, benchmark scenario, Product Truth signal, scorecard threshold, or documentation patch was created from the failure. |

Status labels in registry rows, Activity cards, debugger summaries, Operation status, API responses, SDK/CLI/MCP views, webhook payloads, SupportDiagnosticBundles, and release evidence must project from the same recovery state.

## Severity model

Severity combines user impact, frequency, persistence, side-effect risk, recovery availability, and release-claim exposure.

| Severity | Meaning | Required handling |
|---|---|---|
| `AFR-0` | Release-blocking safety or trust failure. Examples include unauthorized external effect, private/public leakage, data loss, hidden publication, hidden billing or cost effect, unsupported public claim, irreversible action mislabeled reversible, side-effect uncertainty without reconciliation path, or no safe next action. | Block launch, expansion, customer-facing claims, canary widening, and automation activation until resolved or removed from scope. |
| `AFR-1` | Launch-blocking user recovery failure. Examples include primary workflow failure without clear next action, repeated quiet wrong outcome, missing receipt, ambiguous side-effect state, high support burden, or repeated user confusion around retry/replay. | Block affected launch journey and automation expansion until recovery evidence, owner, and prevention artifact exist. |
| `AFR-2` | Required before expansion. Examples include recoverable failure with unclear wording, high retry rate, recurring provider or permission issue, high latency or cost retry loop, or missing fixture for a known failure class. | Allow bounded internal use only with owner, due milestone, and test or simulation follow-up. |
| `AFR-3` | Local cleanup. Examples include low-risk copy improvement, small diagnostic classification issue, or rare recoverable confusion with no material side effect. | Track to owner with expiry and validation method; does not block release unless it recurs or affects a claim. |

No `AFR-0` or launch-relevant `AFR-1` may remain unresolved for a release candidate. Waivers cannot convert hidden side effects, private-content leakage, unsupported public claims, or missing recovery actions into a pass.

## Safe next action policy

Every affected automation state must show one primary safe next action:

| Condition | Required next action |
|---|---|
| Failed deterministic check with no side effect | Retry failed step, edit input, or open dry-run review. |
| Provider timeout before mutation | Retry with same idempotency scope, switch to approved fallback, or schedule later. |
| Missing permission or connector scope | Request scoped permission or pause automation; do not retry blindly. |
| Stale source, policy, approval, or expected version | Revalidate, open Scenario Lab, or regenerate dry-run before execution. |
| External side effect may have happened | Reconcile first; retry and replay stay disabled until the side-effect ledger is safe. |
| External side effect happened but was wrong | Open Reversible Work, withdrawal, compensation, or support escalation path. |
| Quiet wrong outcome with green run state | Create domain assertion, outcome review, fixture, or Product Truth signal before treating the automation as healthy. |
| Repeated same-class failure | Create fixture, simulation case, scorecard threshold, adaptive-routing recommendation, or owner review ActionCard. |
| User cancelled or manually killed work | Preserve partial state, show cleanup status, and expose restart or replay only when safe. |
| Unsupported action class | Explain the unsupported boundary and record a non-action or research-more decision. |

Unknown external effect state always means `reconcile-first`. The system must not default to retry when it cannot prove whether a write, notification, publication, billing action, repository mutation, or connector mutation occurred.

## User-facing recovery UX

Every user-facing failure summary must show:

- the automation, run, recipe version, trigger, owner, and affected Project;
- a plain-language status and severity;
- the failed stage and whether the cause is confirmed, likely, uncertain, disputed, or unknown;
- affected Documents, Sources, Claims, publications, exports, notifications, GitHub proposals, connector destinations, billing effects, and support diagnostics where authorized;
- the primary safe next action and disabled reasons for unsafe actions;
- whether retry, replay, reconcile, compensation, rollback, withdrawal, pause, retire, fixture creation, Scenario Lab, Project Health, support escalation, or non-action is available;
- cost, latency, queue, provider, permission, approval, and side-effect context where it affects the decision;
- redaction summary and support-safe diagnostic link where policy allows;
- owner, review due date, expiry, and release or customer-claim blocker state.

Error messages must describe the problem precisely, use user vocabulary, avoid blaming the user or the model, and name a constructive next step. Technical details belong behind progressive disclosure unless they are necessary for the decision.

## Learning loop

Every material failure follows this loop:

```text
ExecutionRecord / RecipeRun / ActivityEvent / user report / support case / telemetry signal
-> AutomationFailureRecoveryRecord
-> severity and safe-next-action decision
-> RecoveryActionCard / ActionCard / ReconciliationCheck / CompensationPlan / ReversalRecord
-> outcome evidence
-> learning artifact or NonActionDecision
-> Product Truth / fixture / simulation / benchmark / scorecard threshold / doc patch / launch blocker
```

`AutomationFailureLearningRecord` captures durable follow-up:

```text
id
failure_recovery_record_id
learning_type: fixture | recipe-simulation | benchmark-scenario | domain-assertion | scorecard-threshold | adaptive-routing-rule | product-truth-signal | support-runbook | documentation-patch | non-action
owner
target_requirement
target_doc
validation_command_or_method
promotion_state: proposed | accepted | rejected | deferred | non-action | stale
release_blocker
customer_claim_blocker
evidence_ref
revisit_trigger
```

Repeated failures must not only create more alerts. They must create one of:

- a deterministic preflight or validation rule;
- a fixture or benchmark case;
- a recipe simulation case;
- a Product Truth signal or contradiction;
- a scorecard threshold or adaptive-routing rule;
- a support-safe diagnostic or runbook update;
- a documentation patch;
- a reviewed non-action decision with rationale and revisit trigger.

## Telemetry and event boundaries

Automation failure telemetry is approved only when it has an owner, user-value question, allowed properties, prohibited properties, privacy class, retention class, and release-claim boundary defined in [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md).

Initial event families include:

- `automation.failure_detected`;
- `automation.failure_triaged`;
- `automation.recovery_action_created`;
- `automation.reconciliation_requested`;
- `automation.recovery_action_resolved`;
- `automation.failure_learning_created`;
- `automation.failure_non_action_recorded`.

Allowed event properties include identifiers, failure class, recovery severity, recovery state, cause confidence, side-effect state, action class, owner slice, elapsed time, retry count, replay eligibility, reconciliation outcome, compensation state, and linked Product Truth or release-evidence references. Prohibited properties include raw private content, prompts, hidden reasoning, credentials, connector payloads, private URLs, full stack traces with secrets, support-only notes, and document bodies.

## Launch gates

Automation failure recovery is production-ready only when:

- every failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain automation run creates an `AutomationFailureRecoveryRecord`;
- registry rows, Activity cards, debugger summaries, Operation status, API responses, SDK/CLI/MCP views, webhook payloads, SupportDiagnosticBundles, outcome scorecards, Product Truth, and release evidence agree on recovery state;
- every unresolved `AFR-0` and launch-relevant `AFR-1` blocks release promotion, canary widening, automation expansion, and customer-facing automation claims;
- unknown external side effects route to `reconcile-first` before retry, replay, compensation, or irreversible acknowledgement;
- quiet wrong outcomes can become domain assertions, fixtures, recipe simulation cases, benchmark scenarios, Product Truth signals, scorecard thresholds, or non-action decisions;
- retry, replay, rollback, withdrawal, compensation, reconciliation, pause, retire, and support escalation prove authorization, expected versions, idempotency, side-effect ledgers, approval policy, and redaction behavior;
- user-facing error and recovery states pass HumanAIInteractionReview, accessibility checks, screen-reader and keyboard journeys, narrow-screen review, and observed-task validation where launch claims depend on them;
- telemetry and support diagnostics remain content-minimized and cannot become shadow stores of private Project content;
- launch evidence includes current recovery records, unresolved severity, learning artifacts, validation commands, owner disposition, and remaining limitations.

## Documentation update rule

Changes to automation failure recovery records, severity, safe next actions, retry/replay/reconciliation rules, recovery UX, learning artifacts, failure telemetry, launch gates, or AUTO-006 ownership must update:

- [`../01-product/automation-registry-and-run-debugger.md`](../01-product/automation-registry-and-run-debugger.md)
- [`../01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md)
- [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md)
- [`../01-product/project-health-and-repair.md`](../01-product/project-health-and-repair.md)
- [`../01-product/reversible-work-and-project-history.md`](../01-product/reversible-work-and-project-history.md)
- [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [`../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md)
- [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md)
- [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
