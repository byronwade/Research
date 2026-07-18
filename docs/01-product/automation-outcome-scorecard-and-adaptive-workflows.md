# Automation outcome scorecard and adaptive workflows

**Review date:** 2026-07-17
**Status:** specification, not implemented

Research automation should be judged by useful outcomes, not by how many agent runs, tool calls, recipes, or notifications it creates. The Automation Outcome Scorecard is the Project surface that shows whether automation improved trust, speed, documentation quality, source freshness, cost, approval burden, and user effort.

This document governs `AUTO-003` and `PERF-004`.

North-star outcome metrics, StrategicBetScorecards, OutcomeReviews, baselines, anti-metrics, and launch gates that keep automation value tied to measurable user outcomes are governed by [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md).
Automation failure recovery records, severity, safe next actions, learning artifacts, and launch blockers are governed by [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md).

## Sources reviewed

Official capability references reviewed on 2026-07-17:

- [ChatGPT Workspace Agents for Enterprise and Business](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business)
- [OpenAI: Introducing workspace agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)
- [Glean Agent Development Lifecycle](https://docs.glean.com/agents/agent-development-lifecycle/adlc)
- [Zapier: Understand your agent's statuses](https://help.zapier.com/hc/en-us/articles/36818600959501-Understand-your-agent-s-statuses)
- [Zapier Agents](https://zapier.com/agents)
- [Atlassian Rovo agents](https://support.atlassian.com/rovo/docs/agents/)
- [Atlassian Rovo agents in automations](https://support.atlassian.com/rovo/docs/agents-in-automations/)

Public user-opinion and practitioner signals reviewed on 2026-07-17:

- [AI agents becoming the real story of 2026 discussion](https://www.reddit.com/r/ArtificialInteligence/comments/1sqlooe/are_ai_agents_quietly_becoming_the_real_story_of/)
- [AI agent issues in 2026 discussion](https://www.reddit.com/r/ArtificialInteligence/comments/1qsr4b9/ai_agent_issues_in_2026/)
- [Zapier pricing and reliability discussion](https://www.reddit.com/r/automation/comments/1o1rl8h/tired_of_zapier/)
- [Zapier agent usage-limits discussion](https://www.reddit.com/r/zapier/comments/1qz8uua/how_have_you_used_zapier_agents/)
- [Notion custom agent pricing discussion](https://www.reddit.com/r/Notion/comments/1rdd3av/petition_the_new_pricing_of_notion_custom_agents/)
- [Agent workflow reliability discussion](https://www.reddit.com/r/AI_Agents/comments/1s4xjz0/when_to_use_zapiermake_vs_ai_agent_builders_a/)
- [Hacker News discussion of whether agents do real work](https://news.ycombinator.com/item?id=42629498)
- [Hacker News discussion of AI-agent rule breaking](https://news.ycombinator.com/item?id=46067995)

These public signals are directional. They should shape product controls and test cases, not customer-facing market claims.

## Market baseline

Current workspace-agent products are converging on:

- agent creation from templates or prompts;
- tool, connector, channel, and schedule configuration;
- preview or test before publishing;
- activity status such as needs action, in progress, failed, cancelled, completed, or test;
- organization sharing, role-based access, approvals, and admin monitoring;
- usage analytics such as runs, users, recent activity, and adoption;
- lifecycle guidance for ownership, safety, launch, and continuous improvement.

Research should exceed the baseline by measuring whether each automation produced a verified useful outcome. An automation that runs often but produces rejected patches, unsupported claims, slow loops, cost surprises, or repeated approval fatigue is not successful. Delegated-trust grants and approval batches are successful only when they reduce repeated low-risk prompts without increasing reversals, stale receipt reuse, scope drift, or hard-stop bypass attempts.

## Product purpose

The Outcome Scorecard answers:

- What useful work did this automation produce?
- Which outputs were accepted, edited, rejected, ignored, or reversed?
- Did it reduce stale claims, unsupported claims, documentation drift, source lag, manual review time, or support burden?
- Did it increase cost, latency, approval burden, error rate, permission risk, or user confusion?
- Which source, model, tool, prompt, workflow, or policy change improved the outcome?
- Should the automation stay active, downgrade, ask for review, change mode, or retire?

The scorecard appears from the automation registry, recipe library, run debugger, Activity timeline, Product Truth Board, release evidence bundle, and support-safe diagnostics.

## Outcome model

Each automation has outcome dimensions:

| Dimension | Examples |
|---|---|
| Trust | supported claims created, unsupported claims blocked, contradictions resolved, publication blockers prevented |
| Speed | time to first useful result, time to accepted patch, queue delay, human waiting time |
| Source freshness | stale claims found, source changes classified, safe document patches proposed, current-source reviews completed |
| Documentation quality | accepted Markdown patches, reduced duplicate authority, fixed broken links, updated requirements and routing |
| User effort | avoided clarifications, fewer manual steps, fewer repeated approvals, fewer support escalations |
| Approval load | batched equivalent approvals, scoped delegated-trust grants accepted, fatigue warnings reduced, stale approvals rejected, revocations honored |
| Cost | cost per accepted output, cost per stale claim resolved, recurring monthly projection, budget anomalies |
| Reliability | completed runs, failed steps, replay success, idempotency safety, provider fallback impact |
| Safety | blocked unsafe writes, least-privilege checks, approval-class correctness, redaction correctness |
| Recovery learning | recovery records resolved, quiet wrong outcomes caught, side-effect uncertainties reconciled, fixtures or simulations created, non-action decisions reviewed |

The scorecard separates activity from value. A high run count, large output, or high token volume is not a positive outcome without accepted evidence.

## Adaptive workflow behavior

Research can recommend workflow adaptations when outcomes show repeated friction:

- switch from Deep Research to Focused Retrieval when broad source search repeatedly finds no new evidence;
- switch from Quick Answer to Focused Retrieval when users repeatedly inspect citations, correct claims, or save outputs;
- pause scheduled automation when cost rises without accepted patches or freshness improvements;
- propose or narrow a delegated-trust grant when repeated low-risk approval prompts fit one stable envelope;
- downgrade model role or agent depth when deterministic checks explain most outcomes;
- escalate to human review when automation repeatedly needs approval, hits connector errors, or creates contradictions;
- create or escalate an AutomationFailureRecoveryRecord when the automation repeatedly fails, quietly produces wrong outcomes, or cannot prove side-effect state;
- propose a reusable template when similar successful runs repeat across Projects;
- propose, canary, pause, revise, or retire an Automation Recipe when trigger clarity, simulation coverage, or outcome evidence changes;
- retire an automation when it produces low acceptance, high cost, or unresolved safety blockers.

Adaptation is visible and reversible. Research may recommend a mode, schedule, model role, budget, source scope, approval change, or delegated-trust grant, but it cannot silently widen permissions, hide evidence, bypass approval, publish, send external writes, reuse stale receipts, or change billing state.

## UX requirements

Outcome scorecards must be understandable without reading logs:

- show current status, last useful output, next review action, and reason for any downgrade or pause;
- compare recent outcome windows with a declared baseline;
- show accepted, edited, rejected, ignored, reverted, and blocked outputs separately;
- link each metric to authorized run, activity, source, claim, patch, publication, or truth-board evidence;
- explain whether a recommendation is deterministic, evidence-derived, or AI-suggested;
- let users dismiss, accept, defer, or convert recommendations into action cards;
- preserve keyboard, screen-reader, and narrow-screen usability.

## Non-goals

- Do not optimize for activity volume, token use, or agent autonomy as a success metric.
- Do not claim time saved without a declared baseline or user-confirmed proxy.
- Do not use private source text, document bodies, raw prompts, credentials, or hidden reasoning in product analytics.
- Do not let outcome scoring become a second truth store for Claims, Documents, Sources, Publications, or Product Truth Board decisions.
- Do not auto-tune high-risk automation without review and approval receipts.
- Do not treat a delegated-trust grant as an automation success metric unless its scope, use, revocation, fatigue, and reversal evidence are visible.

## Acceptance criteria

Outcome-scored automation is production-ready only when:

- `AUTO-003` and `PERF-004` are implemented and tested;
- every saved or scheduled automation has a scorecard with owner, baseline, metric window, outcome dimensions, and evidence links;
- every active Automation Recipe version has scorecard links to recipe runs, accepted outputs, simulation coverage, canary results, and activation blockers;
- activity, run-debugger, Product Truth Board, analytics, launch evidence, and support views agree on automation outcome state;
- adaptive recommendations create typed action cards with expected versions and approval classes;
- outcome metrics can be calculated without private-content leakage;
- cost, latency, approval burden, and failure rates are visible before an automation is expanded;
- failed, degraded, cancelled, stale, quiet-wrong, and side-effect-uncertain runs have recovery records, safe next actions, and learning links before they can be treated as healthy outcome evidence;
- delegated-trust grant use, approval batching, approval-load budget consumption, fatigue signals, stale receipt rejections, revocations, and reversals are visible in the scorecard where they affect automation outcomes;
- release gates reject automations that show unresolved high-risk regressions or missing outcome evidence.
- automation outcome claims link to current OutcomeMetricDefinitions, StrategicBetScorecards where the automation is part of a strategic bet, and OutcomeReviews at the release commit.

## Documentation update rule

Changes to outcome-scored automation, adaptive workflow routing, automation scorecards, or automation-good-event definitions must update:

- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md)
- [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md)
- [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
- routing and implementation metadata
