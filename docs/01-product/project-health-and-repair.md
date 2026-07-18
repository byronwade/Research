# Project health and repair

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should be able to tell a user why a Project is slow, stale, blocked, expensive, under-supported, or risky, then offer the smallest safe repair path. This is not generic device troubleshooting and not autonomous background repair. It is a Project-scoped health and repair surface over canonical Research state.

This document governs `HEALTH-001` and informs `HEALTH-002`. Diagnostic records and repair execution are governed by [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md). Reversible Work recovery cards, compensation, reconciliation, and irreversible-effect labels are governed by [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md).

## Sources reviewed

Official capability references:

- [Microsoft Support: PC insights](https://support.microsoft.com/en-us/microsoft-copilot/pc-insights)
- [Microsoft Support: Copilot troubleshooters](https://support.microsoft.com/en-us/support/get-help/copilot-troubleshooters)
- [Microsoft Learn: Manage Click to Do for Windows clients](https://learn.microsoft.com/en-us/windows/client-management/manage-click-to-do)
- [Microsoft Support: Using Copilot Vision with Microsoft Copilot](https://support.microsoft.com/en-us/microsoft-copilot/using-copilot-vision-with-microsoft-copilot)
- [Windows Developer Blog: Furthering Windows as the trusted platform for development](https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development/)
- [Microsoft Learn: Click to Do overview for Windows apps](https://learn.microsoft.com/en-us/windows/apps/develop/windows-integration/click-to-do)
- [Apple Developer: Apple Intelligence](https://developer.apple.com/apple-intelligence/)
- [Windows Experience Blog: User transparency and consent](https://blogs.windows.com/windowsexperience/2026/02/09/strengthening-windows-trust-and-security-through-user-transparency-and-consent/)
- [Microsoft Learn: Policy CSP - WindowsAI](https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-windowsai)
- [LangSmith Observability](https://www.langchain.com/langsmith/observability)
- [LangSmith Evaluation](https://www.langchain.com/langsmith/evaluation)
- [OpenTelemetry Signals](https://opentelemetry.io/docs/concepts/signals/)
- [OpenTelemetry GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/)
- [Sentry Seer](https://docs.sentry.io/product/ai-in-sentry/seer/)
- [GitHub security and quality AI features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features)
- [Microsoft Learn: Copilot Autofix for Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-code-scanning-autofix)
- [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity)
- [Zapier agent statuses](https://help.zapier.com/hc/en-us/articles/36818600959501-Understand-your-agent-s-statuses)
- [Causely: What agents really need is causal history](https://arxiv.org/abs/2605.18327)
- [Traccia: OpenTelemetry-based agent governance](https://arxiv.org/abs/2607.14309)

Public user-opinion and practitioner signals:

- [Automation fatigue discussion](https://www.reddit.com/r/automation/comments/1ppfdrs/the_ai_agent_fatigue_is_real_can_we_talk_about/)
- [State of automation in 2026 discussion](https://www.reddit.com/r/automation/comments/1sfmp7t/state_of_automation_in_2026_are_you_powering/)
- [n8n AI agents reliability discussion](https://www.reddit.com/r/n8n/comments/1mg0z79/is_anyone_else_tired_of_ai_agents_that_dont/)
- [AI agent skepticism discussion](https://news.ycombinator.com/item?id=47194611)
- [Windows Recall privacy discussion](https://www.reddit.com/r/Windows11/comments/1d1fedu/what_do_you_think_about_windows_recalls_new/)
- [LangChain agent debugging discussion](https://www.reddit.com/r/LangChain/comments/1udre9c/im_curious_how_people_building_ai_agents_handle/)
- [AI agents in production discussion](https://www.reddit.com/r/AI_Agents/comments/1rtiplc/running_ai_agents_in_production_what_does_your/)
- [Hacker News observability cost and noise discussion](https://news.ycombinator.com/item?id=46617744)
- [Agent causal history discussion](https://www.reddit.com/r/AI_Agents/comments/1uw82dv/you_need_to_go_beyond_mere_observability_ai/)
- [LangChain trajectory evaluation discussion](https://www.reddit.com/r/LangChain/comments/1rh2cvq/evaluating_langchain_agents_beyond_final_output/)
- [Silent LangChain production failure discussion](https://www.reddit.com/r/LangChain/comments/1txgw4q/we_deployed_a_langchain_agent_for_a_client/)
- [Production agent durable-state and action-ledger discussion](https://www.reddit.com/r/AI_Agents/comments/1uf7ihq/does_running_a_reliable_production_agent_with/)

These user-opinion sources are directional signals only. They are not statistical proof and must not become customer-facing claims.

## Product lesson

Current operating-system AI features are moving toward screen-aware actions, natural-language automation, local device diagnostics, taskbar agents, and developer-environment setup. Agent and developer platforms are also moving toward tracing, evaluation, root-cause assistance, activity inspection, and AI-assisted fix suggestions. The stronger products are adding visible consent, review, testing, and policy controls because users do not trust hidden automation or unsupported automated repair.

Research has a different opportunity: it already owns the Project graph, sources, claims, documents, activity, work packets, recipes, approvals, reversal records, release evidence, support diagnostics, and telemetry needed to explain health without recording the user's operating system. Project health should be causal, evidence-backed, repairable, recoverable, audit-friendly, and honest when the available evidence supports only a suspected cause or an unknown state.

## Product purpose

Project Health answers:

- Why does this Project feel slow or blocked?
- Which sources, claims, documents, automations, Worksets, publications, connectors, or policies need attention?
- What is stale, disputed, unsupported, over budget, under-indexed, inaccessible, or failing?
- Which dependency caused or likely caused the issue, what evidence supports that cause, and what evidence is missing or contradictory?
- Which repair actions are safe to run now, which need a dry run, and which need approval?
- What changed after a repair, and did it actually improve the Project?
- Which issues are product limitations rather than user mistakes?

The Health surface is a projection over canonical Project records. It is not a second observability system, second support authority, second document authority, or agent memory.

## Causal health, not raw observability

Project Health translates authorized traces, telemetry aggregates, ActivityEvents, Operations, Product Truth records, AutomationFailureRecoveryRecords, SupportDiagnosticBundle refs, release evidence, source state, document state, claim state, and policy decisions into causally scoped findings. It does not make users inspect raw spans or long execution logs to infer the cause themselves.

A user-facing diagnosis must separate:

- observed signal;
- suspected cause;
- cause confidence;
- supporting evidence;
- counterevidence;
- unknowns and missing evidence;
- affected Project resources;
- reversible, external, or irreversible effects;
- repair eligibility and safest next action.

When the evidence is incomplete, the Health Console should say what is unknown, what diagnostic evidence would narrow the cause, and whether the next step is repair, observation, support handoff, Product Truth correction, or no action. A model may summarize that state, but a model-only root-cause explanation is not a HealthFinding.

## Health Console

The `ProjectHealthConsole` is a contextual Project view available from Project open, Command Center, Work Packets, Activity, Trust Dashboard, Project Atlas, Scenario Lab, Reversible Work, automation run debugger, settings, SupportDiagnosticBundles, and support-safe diagnostics.

It shows health by domain instead of hiding everything behind one opaque score:

| Domain | Typical signals | User-visible repair path |
|---|---|---|
| Source intake | failed uploads, parser errors, skipped derivatives, stale source versions, connector loss | retry parse, reconnect source, inspect unsupported format, schedule refresh |
| Retrieval and evidence | low coverage, stale index manifests, unsupported claims, citation holes | rebuild index, open Trust blocker, create evidence review ActionCard |
| Documents | drift risk, blocked patches, conflicts, locked sections, stale public projection | open patch review, run no-drift check, preview publication repair |
| Automation | failed runs, noisy approvals, low accepted outcome rate, canary stop | inspect run, dry-run recipe, pause, narrow trigger, create repair ActionCard |
| Work control | stale Work Packets, unavailable panes, broken Worksets, invalid next actions | rebuild work state, recover Workset, dismiss or correct recommendation |
| Causal diagnostics | repeated failure class, changed dependency, divergent trajectory, suspicious latency edge, invalidated belief, noisy trace cluster | inspect evidence chain, record unknown, create replay fixture, open support-safe diagnostic, dry-run repair |
| Recovery | stale recovery card, uncertain external side effect, failed restore, compensation incomplete | open Reversible Work, reconcile external state, rerun recovery preflight, create compensation ActionCard |
| Performance | slow Project open, long first useful result, saturated queues, cache misses | switch mode, cancel work, inspect latency source, run bounded rebuild |
| Cost and capacity | budget reservation blocked, provider quota, expensive repeated work | estimate, defer, downgrade mode, require owner approval |
| Permissions and policy | revoked source, missing connector scope, residency blocker, support grant required | request access, narrow scope, open settings, create approval request |
| Publication readiness | rights blocker, unsupported claim, private content risk, export failure | run release preflight, open Trust Dashboard, create withdrawal or patch card |

The console should show the current state, the supporting Project records, the user impact, and the smallest safe next action. It must not claim a repair is complete until the owning domain state and validation evidence change.

## Findings

A `HealthFinding` is a reviewable diagnosis. It includes:

- affected Project resource and expected version;
- health domain and reason code;
- severity and user impact;
- evidence links to ActivityEvents, Operations, SourceVersions, Claims, DocumentRevisions, WorkPackets, RecipeRuns, scorecards, policies, or telemetry aggregates;
- causal lineage edges from observed signal to suspected cause, affected resources, invalidated assumptions, repair candidate, and outcome observation;
- confidence, counterevidence, unknowns, missing evidence, false-cause risk, and diagnostic-waste classification;
- redaction summary when some supporting detail is hidden;
- proposed repair playbook or explicit no-repair state;
- owner, expiry, dismissal, snooze, and resolved state.

Findings are not factual evidence for user documents. They are operational projections that help maintain Project quality.

## Repair playbooks

A `RepairPlaybook` is a typed, deterministic-first response to a finding. Examples:

- retry a failed parser with the same immutable SourceVersion and current parser version;
- rebuild an index manifest for a known stale source set;
- revalidate stale claims and propose minimal document patches;
- recover a Workset with stale, deleted, redacted, or unavailable panes;
- pause a noisy automation and open a dry-run recommendation;
- open a Scenario Lab repair preview before a costly, external, destructive, publication-affecting, or user-visible repair;
- open a Reversible Work recovery card when repair must restore, withdraw, replay, compensate, reconcile, or label irreversible effects;
- run a publication preflight and create ActionCards for blockers;
- refresh a connector cursor after a scoped reconnection;
- rebuild a WorkPacket after policy, Activity, Workset, or document-version drift.

Repairs follow the same rules as every other material action:

- dry-run first when the effect is material, costly, external, destructive, or user-visible;
- use expected versions and idempotency keys;
- reserve budget before expensive work;
- create ActionCards for high-risk work;
- record ActivityEvents and audit where required;
- attach rollback, withdrawal, or recovery paths when supported;
- write reversal records, compensation plans, or reconciliation checks when a repair reverses or offsets prior work;
- measure outcome after execution.

Model assistance may explain a finding or draft a patch, but repair selection, authorization, approval class, and mutation safety remain deterministic and server-owned.

## UX behavior

The Health Console should:

- open quickly with immediate authorized status and progressively hydrate detail;
- group findings by user impact, not internal service name;
- distinguish broken, stale, degraded, blocked, over budget, unsupported, and unknown;
- expose why a finding exists with safe links to Project records;
- show what happened, why the cause is suspected, what evidence contradicts it, what is still unknown, and how safe repair will prove or disprove it;
- make repair cost, latency, approval class, and side effects visible before execution;
- allow snooze, dismiss, assign, convert to issue, or create ActionCard where policy allows;
- show repair progress and final validation result;
- connect repeated repairs to recipe drafts only after simulation and owner approval;
- connect repeated false causes, noisy diagnostics, and unresolved unknowns to Product Truth, runbooks, fixtures, documentation defects, or implementation backlog instead of retry loops;
- route material repair previews through Scenario Lab when users need to compare repair, defer, canary, or no-repair options;
- route recovery-shaped repairs through Reversible Work when users need to restore a version, replay an Operation, withdraw a projection, compensate an external effect, or reconcile uncertain provider state;
- make SupportDiagnosticBundle IDs and support-safe diagnostic IDs visible without exposing private content;
- explain whether support can diagnose the finding from metadata-only evidence or must request a scoped SupportAccessSession.

## Support diagnostic handoff

Project Health can create a SupportDiagnosticBundle when a finding needs customer support, production triage, or release-readiness investigation. The bundle is a content-minimized handoff over HealthFindings, Operations, ActivityEvents, telemetry aggregates, policy decisions, repair dry-runs, SupportAccessRequests, and support cases.

The handoff must:

- preserve the HealthSnapshot, HealthFinding, expected versions, redaction summary, and repair eligibility used to produce the bundle;
- label whether private source text, prompts, document bodies, connector payloads, credentials, hidden reasoning, screenshots, clipboard content, browser history, operating-system state, and unredacted support notes are absent;
- expose metadata-only diagnosis first;
- open a SupportAccessRequest only when metadata is insufficient and policy allows a narrowly scoped session;
- create Activity and audit evidence for bundle creation, access, export, expiry, revocation, and break-glass review;
- feed repeated support outcomes into Product Truth, repair playbook quality, automation debugger fixtures, runbooks, and documentation defects.

Support does not gain mutation authority through a bundle. Any repair still uses the owning command, ActionCard, approval, preflight, idempotency, side-effect, reversal, and release gates.

## Privacy and control

Project Health must not inspect the user's operating system, screen, browser history, clipboard, local files, or device state outside explicit Project sources and integrations.

Specifically:

- no ambient screenshots, screen recording, window-state capture, clipboard scraping, browser-history scraping, or device telemetry collection;
- no background monitoring outside Project-owned operations, connectors, automations, and approved telemetry;
- no hidden content in health telemetry, analytics, support diagnostics, or repair records;
- no "capture everything" observability store, raw prompt/tool/content trace, or private source trace in general health analytics;
- no OpenTelemetry or GenAI content capture outside an explicit diagnostic workflow with authorization, redaction, expiry, and customer-visible audit;
- no repair that silently publishes, deletes sources, widens permissions, sends notifications, bills, merges code, or changes administration state;
- no support-only repair path that users cannot inspect later in Activity or audit records where applicable.

Health findings can mention hidden state only through authorized redaction summaries. A finding must not reveal that an inaccessible source, document, comment, connector, or private projection exists unless policy allows that disclosure.

## Non-goals

- Do not become a general operating-system troubleshooting assistant.
- Do not promise to fix device, network, browser, or account problems outside Research-owned systems.
- Do not run autonomous repair in the background without policy, registry visibility, and approval rules.
- Do not create a single gamified health score that hides evidence, severity, or tradeoffs.
- Do not ship a raw trace explorer as the primary Health surface.
- Do not claim "AI root cause" or "self-healing Projects" without canonical evidence, deterministic safeguards, tests, and owner-visible repair outcome proof.
- Do not treat telemetry volume, trace volume, token volume, or logging depth as product value.
- Do not treat health telemetry as a substitute for Product Truth, observability, audit, support, or release evidence.
- Do not use model guesses as a diagnosis without Project-record support.

## Acceptance criteria

Project Health is production-ready only when:

- `HEALTH-001` and `HEALTH-002` are implemented and tested;
- Health Console reads are authorization-filtered, content-minimized, and progressively delivered;
- each HealthFinding links to the canonical Project records that explain it;
- each causal HealthFinding separates observed signal, suspected cause, counterevidence, confidence, unknowns, diagnostic-waste class, and false-cause risk;
- trace-to-finding benchmarks prove Research can convert authorized spans, Activity, Operations, release evidence, and domain records into reviewable findings without exposing raw private content;
- false-cause, false-positive, dismissal, repeated-finding, diagnostic-waste, and repair-validation metrics are release evidence;
- repair playbooks have typed inputs, expected versions, idempotency, approval classes, dry-run behavior, rollback or withdrawal notes, and Activity evidence;
- repair simulations label unknowns, live-test boundaries, stale inputs, side-effect class, approval class, cost, latency, and recovery path before an apply candidate can be created;
- recovery-shaped repairs create ReversalRecords, ReversalSnapshots, CompensationPlans, ReconciliationChecks, or irreversible acknowledgements through the reversal ledger;
- repairs cannot bypass command, approval, delegated-trust, budget, rights, residency, support-grant, or publication policy;
- support diagnostics expose metadata-first findings without raw source text, prompts, private document bodies, connector payloads, credentials, or hidden reasoning;
- OpenTelemetry-compatible traces, GenAI telemetry, tool calls, prompts, completions, and connector payloads are content-minimized or absent unless an explicit diagnostic workflow authorizes redacted, expiring capture;
- SupportDiagnosticBundles and SupportAccessSessions are tied to support cases, grants, explicit purpose, scope, expiry, Activity, audit, and revocation evidence;
- browser tests cover Project open, Health Console, finding drill-down, dry-run, approval, repair progress, failed repair, snooze, dismissal, Workset recovery, stale-claim repair, and publication blocker repair;
- performance tests prove first health status and top findings remain responsive under large Project, indexing, automation, and export load;
- accessibility tests cover keyboard, pointer, touch, screen reader, severity, disabled reasons, progress updates, and redaction summaries;
- release evidence includes false-positive rate, dismissal rate, repair success, repeated repair frequency, latency, cost, approval burden, privacy, authorization, and support-readiness validation.

## Documentation update rule

Changes to Project Health, health domains, findings, repair playbooks, repair runs, diagnostic snapshots, or repair telemetry must update:

- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`trust-dashboard-and-evidence-coverage.md`](trust-dashboard-and-evidence-coverage.md)
- [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md)
- [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md)
- [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md)
- [`project-settings-and-administration.md`](project-settings-and-administration.md)
- [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md)
- [`../02-architecture/scenario-simulation-engine.md`](../02-architecture/scenario-simulation-engine.md)
- [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md)
- [`../02-architecture/project-operating-layer-control-plane.md`](../02-architecture/project-operating-layer-control-plane.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
