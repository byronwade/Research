# Documentation change evidence log

**Review date:** 2026-07-18
**Status:** documentation-change evidence log, not runtime evidence

This log preserves specification-mode documentation evidence before the runtime Product Truth Board, release-evidence store, and implementation pull requests exist. It records semantic drift review packets, validation commands, unresolved contradiction status, source refreshes, and deliberate non-changes for material documentation work.

The log does not create product behavior, requirements, runtime maturity, or launch authority. It is subordinate to [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md), [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md), [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md), [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md), and [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md).

## Purpose

Use this log when a documentation change affects:

- requirement ownership, routing, implementation order, launch gates, or status;
- public user-opinion, survey, official-reference, competitor, model, browser, OS, automation, UX, performance, or research evidence;
- Product Truth, SignalDecisionLedger, NonActionDecision, contradiction, or semantic drift behavior;
- advanced operating-layer strategy, automation outcome scoring, user-research gates, or customer-facing claim limits.

Once runtime release evidence and Product Truth exist, this log becomes a pointer to those records. It should not compete with them.

## Record shape

Each entry records a `DocumentationChangeEvidenceRecord`:

```text
id
recorded_at
scope
change_summary
authority_level
affected_requirements
affected_owner_slices
affected_docs
source_basis
searches_and_checks
contradictions_found
contradiction_severity
resolutions
documents_deliberately_not_changed
validation_commands
validation_results
remaining_limitations
next_revisit_trigger
```

## Records

### DCE-2026-07-18-001: production documentation hardening and outcome metrics

**Recorded at:** 2026-07-18
**Scope:** documentation governance, semantic drift, public-signal evidence, human-AI interaction review, advanced-feature controls, product outcome metrics, benchmark gates, and `foundation-01` required reading.
**Authority level:** delivery and documentation-governance evidence. Governing contracts remain in product, architecture, delivery, reference, and `_meta` files.

**Change summary**

This documentation pass hardened the Research specification for production-bound implementation by:

- keeping implementation status honest: the repository is an implementation-ready specification, not a working runtime;
- adding current, source-labeled outcome measurement for performance, usability, user experience, automation value, trust, reviewability, recoverability, and advanced differentiation;
- wiring OutcomeMetricDefinitions, StrategicBetScorecards, OutcomeReviews, HumanAIInteractionReviews, benchmark scenarios, user-research packages, public-signal policy, advanced-feature incubation, and launch evidence together;
- adding the `foundation-runtime-scaffold.md` build contract so `foundation-01` has concrete runtime, simulator, CI, quality, and supply-chain expectations;
- synchronizing indexes, routing, traceability, launch-readiness, product-readiness, and implementation-build-plan metadata.

**Affected requirements**

- `DOCS-001` through `DOCS-004`
- `FND-001` through `FND-003`
- `READY-001` through `READY-003`
- `BENCH-001` through `BENCH-002`
- `TRUTH-001` through `TRUTH-003`
- `AUTO-001` through `AUTO-005`
- `PERF-001` through `PERF-006`
- `A11Y-001`, `I18N-001`, and adjacent launch-conformance requirements where evidence affects release gates

No new requirement ID was added for this record. The canonical requirement count remains owned by [`../_meta/requirements.json`](../_meta/requirements.json).

**Affected owner slices**

- `foundation-01`
- `commercial-24`
- `enterprise-25`
- `conformance-26`

**Principal affected docs**

- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md)
- [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md)
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../08-build/foundation-runtime-scaffold.md`](../08-build/foundation-runtime-scaffold.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)

**Source basis**

Official and research sources reviewed for the latest outcome and UX layer:

- [Google HEART research](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/)
- [Nielsen Norman Group response-time guidance](https://www.nngroup.com/articles/website-response-times/)
- [Web.dev Core Web Vitals](https://web.dev/articles/vitals)
- [Web.dev Interaction to Next Paint](https://web.dev/articles/inp)
- [DORA 2025 report](https://dora.dev/research/2025/dora-report/)
- [Google Cloud DORA 2025 summary](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report)
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai)
- [Pew Research Center 2026 AI attitudes summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/)
- [Pew Research Center worker AI attitudes](https://www.pewresearch.org/social-trends/2025/02/25/workers-views-of-ai-use-in-the-workplace/)
- [Nielsen Norman Group generative-AI UX research agenda](https://www.nngroup.com/articles/genai-ux-research-agenda/)
- [Nielsen Norman Group AI trust guidance](https://www.nngroup.com/articles/smarts-emotion-trust-ai/)

These sources are directional for Research product strategy unless supported by runtime evidence, observed tasks, customer evidence, or benchmark runs.

**Searches and checks run**

- Searched for stale implementation-status language and unresolved documentation terms.
- Searched for OutcomeMetricDefinition, StrategicBetScorecard, OutcomeReview, advanced-feature, public-signal, and human-AI review references across docs and metadata.
- Re-ran `agent-status` and `agent-context` after routing changes to confirm `foundation-01` remains eligible and has the correct required reading.
- Parsed changed `_meta` JSON files.
- Ran docs link and control validation.
- Ran Git whitespace validation.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was found in the validated working tree. The deliberate status boundary remains:

```text
implementation-ready specification
not production-ready runtime
runtime not scaffolded
```

`git diff --check` reports line-ending normalization warnings in existing tracked files, but no whitespace error exit.

**Documents deliberately not changed**

- [`../_meta/requirements.json`](../_meta/requirements.json) was not given a new requirement because the outcome scorecard and this evidence log refine documentation and launch controls rather than adding a separate runtime obligation.
- [`implementation-status.md`](implementation-status.md) and [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md) were not promoted beyond specified behavior because no runtime code or release evidence exists.
- Open provider decisions in [`implementation-decision-records-and-open-decisions.md`](implementation-decision-records-and-open-decisions.md) remain open because this pass did not evaluate live providers, pricing, regions, contracts, or production topology.

**Validation commands**

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
node -e "for (const f of ['docs/_meta/requirements.json','docs/_meta/agent-routing.json','docs/_meta/implementation-build-plan.json']) { JSON.parse(require('fs').readFileSync(f,'utf8')); console.log(f+' OK'); }"
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/agent-status.mjs`: repository state `implementation-ready-specification`, runtime state `not-scaffolded`, next slice `foundation-01`, status `ready`.
- `node scripts/agent-context.mjs`: `foundation-01` remains eligible and includes this evidence log in required reading.
- `_meta` JSON parse: `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json` parsed successfully.
- `pnpm docs:check`: validated 17 entry files, 26 slices, 118 requirements, 19 tooling decisions, and local Markdown links across 162 files.
- `git diff --check`: exit code 0 with existing line-ending normalization warnings; no whitespace error exit.

Validation must be refreshed whenever this log changes again.

**Remaining limitations**

- Runtime evidence is still absent.
- Product Truth, release-evidence storage, and semantic-drift records are still specified behavior, not implemented systems.
- External and public user-opinion evidence must be refreshed before any customer-facing claim or launch decision that depends on it.

**Next revisit trigger**

Refresh this record when `foundation-01` is implemented, when a material external-source watch item changes, when a StrategicBetScorecard changes launch scope, or before any release-candidate documentation evidence bundle is accepted.

### DCE-2026-07-18-002: specification signal decision ledger

**Recorded at:** 2026-07-18
**Scope:** current external-signal, public user-opinion, competitive, OS, browser, workspace-agent, automation, agent-permission, and advanced-feature decision governance.
**Authority level:** delivery-level specification evidence. Runtime Product Truth, SignalDecisionLedger, source-quality records, and release evidence remain specified behavior.

**Change summary**

This documentation pass added a specification-mode signal decision ledger so the current Research docs do not merely list current sources. The new ledger records what public, official, research, and competitive signal clusters caused Research to accept, reject, defer, research more, or explicitly avoid before runtime Product Truth exists.

The pass connected current 2026 signals about workspace agents, agent permissions, approval fatigue, OS recall, browser task grouping, AI browsers, Apple App Intents, public AI trust, automation reliability, window/workspace continuity, and self-selected user-opinion bias to accepted scope, non-actions, validation needs, owner slices, and revisit triggers.

**Affected requirements**

- `DOCS-004`
- `TRUTH-001` through `TRUTH-003`
- `FEEDBACK-001` through `FEEDBACK-002`
- `BENCH-001` through `BENCH-002`
- `READY-001` through `READY-003`
- `AUTO-001` through `AUTO-005`
- advanced operating-layer, automation, trust, performance, usability, accessibility, and launch-conformance requirements already traced through affected docs

No new requirement ID was added. The change refines evidence governance and decision traceability for existing requirements.

**Affected owner slices**

- `foundation-01`
- `commercial-24`
- `conformance-26`

**Principal affected docs**

- [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md)
- [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)

**Source basis**

Official and research sources reviewed for this signal-decision layer:

- [ChatGPT Workspace Agents for Enterprise and Business](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business)
- [Introducing workspace agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)
- [Notion Custom Agents security features](https://www.notion.com/help/custom-agents-security-features)
- [Notion Custom Agents sharing and permissions](https://www.notion.com/help/custom-agents-sharing-and-permissions)
- [How Notion built security into Custom Agents](https://www.notion.com/blog/how-we-built-security-into-custom-agents)
- [Microsoft Recall privacy and control](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience)
- [Microsoft Recall management](https://learn.microsoft.com/en-us/windows/client-management/manage-recall)
- [Copilot Journeys](https://support.microsoft.com/en-us/microsoft-copilot/copilot-journeys)
- [Microsoft Edge AI browsing updates](https://blogs.windows.com/msedgedev/2026/05/13/new-updates-to-edge-across-desktop-and-mobile/)
- [Apple advanced App Intents for Siri and Apple Intelligence](https://developer.apple.com/videos/play/wwdc2026/343/)
- [Apple App Intents capabilities](https://developer.apple.com/videos/play/wwdc2026/345/)
- [Perplexity Comet](https://www.perplexity.ai/comet/)
- [Dia](https://www.diabrowser.com/)
- [How Agents Ask for Permission](https://arxiv.org/html/2607.13718v1)
- [Oversight Has a Capacity](https://arxiv.org/html/2606.08919v1)
- [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/pdf/2605.24309)
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai)
- [Pew Research Center 2026 AI attitudes summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/)
- [Pew Research Center worker AI attitudes](https://www.pewresearch.org/social-trends/2025/02/25/workers-views-of-ai-use-in-the-workplace/)

These sources remain directional or source-scoped unless backed by Research runtime evidence, observed user studies, customer evidence, dogfood evidence, or release benchmarks.

**Searches and checks run**

- Searched current documentation for existing signal-audit, advanced-feature, Product Truth, source-quality, outcome-metric, launch-readiness, routing, and traceability references.
- Searched official, research, and product sources for current workspace-agent, OS recall, browser-agent, App Intents, AI trust, approval-fatigue, and permission-boundary signals.
- Added `SpecificationSignalDecisionRecord` terminology and required-reading references.
- Preserved implementation status as specification-only because no runtime behavior was added.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was identified in the documentation reviewed for this pass. The explicit boundary remains:

```text
current signal decisions are specification evidence
runtime Product Truth is not implemented
customer-facing claims still require runtime or release evidence
```

**Documents deliberately not changed**

- [`../_meta/requirements.json`](../_meta/requirements.json) was not given a new requirement because the ledger sharpens existing `DOCS`, `TRUTH`, `FEEDBACK`, `BENCH`, `READY`, and automation evidence obligations.
- [`implementation-status.md`](implementation-status.md) and [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md) were not promoted beyond specified behavior because no runtime system, migration, or release evidence exists.

**Validation commands**

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
node -e "for (const f of ['docs/_meta/requirements.json','docs/_meta/agent-routing.json','docs/_meta/implementation-build-plan.json']) { JSON.parse(require('fs').readFileSync(f,'utf8')); console.log(f+' OK'); }"
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/agent-status.mjs`: repository state `implementation-ready-specification`, runtime state `not-scaffolded`, next slice `foundation-01`, status `ready`.
- `node scripts/agent-context.mjs`: `foundation-01` remains eligible and includes `specification-signal-decision-ledger.md` in required reading.
- `_meta` JSON parse: `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json` parsed successfully.
- `pnpm docs:check`: validated 17 entry files, 26 slices, 118 requirements, 19 tooling decisions, and local Markdown links across 163 files.
- `git diff --check`: exit code 0 with line-ending normalization warnings; no whitespace error exit.

**Remaining limitations**

- Runtime Product Truth, source-quality storage, SignalDecisionLedger migration, release evidence, and semantic-drift automation are still not implemented.
- Current public user-opinion and practitioner signals remain directional.
- Official-source references must be refreshed before customer-facing launch claims that depend on them.

**Next revisit trigger**

Refresh this record when `foundation-01` creates runtime Product Truth storage, when a current official-source watch item changes, when a signal-driven capability enters prototype or beta, or before a release-candidate evidence bundle cites any signal-driven claim.

### DCE-2026-07-18-003: user-opinion research coverage matrix

**Recorded at:** 2026-07-18
**Scope:** user-opinion coverage, observed-task coverage, synthetic-user limits, agent-as-user coverage, advanced-feature launch claims, performance, usability, user experience, automation, accessibility, support, API, SDK, MCP, and release evidence.
**Authority level:** delivery-level coverage evidence. Runtime Product Truth, user-research records, benchmark runs, telemetry, and release evidence remain specified behavior.

**Change summary**

This documentation pass added a user-opinion research coverage matrix so Research can track whether every major product and advanced operating-layer surface has the right user evidence before claims are made. The matrix connects public signals, current AI-work survey signals, UX research method signals, synthetic-user skepticism, agent-as-user pressure, observed-task methods, accessibility coverage, benchmark links, blocked claims, owner slices, and revisit triggers.

The change makes the user-research program more complete without treating public anecdotes, synthetic users, dogfood, or agent-as-user tests as replacements for real observed users.

**Affected requirements**

- `DOCS-004`
- `FEEDBACK-001` through `FEEDBACK-002`
- `BENCH-001` through `BENCH-002`
- `READY-001` through `READY-003`
- `PERF-001` through `PERF-006`
- `AUTO-001` through `AUTO-005`
- `A11Y-001`
- `I18N-001`
- adjacent support, administration, API, SDK, Product Truth, and advanced-feature requirements already traced through affected docs

No new requirement ID was added. The matrix clarifies coverage evidence and launch-blocking claims for existing requirements.

**Affected owner slices**

- `foundation-01`
- `commercial-24`
- `enterprise-25`
- `conformance-26`

**Principal affected docs**

- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)

**Source basis**

Official, methodology, survey, and research sources reviewed for this coverage layer:

- [Nielsen Norman Group generative-AI UX research agenda](https://www.nngroup.com/articles/genai-ux-research-agenda/)
- [Nielsen Norman Group AI agents as users](https://www.nngroup.com/articles/ai-agents-as-users/)
- [Nielsen Norman Group AI-simulated behavior review](https://www.nngroup.com/articles/ai-simulations-studies/)
- [Nielsen Norman Group Synthetic Users](https://www.nngroup.com/articles/synthetic-users/)
- [User Interviews State of User Research 2025](https://www.userinterviews.com/state-of-user-research-report)
- [User Interviews State of Synthetic Users](https://www.userinterviews.com/state-of-synthetic-users-report)
- [Microsoft Work Trend Index 2026](https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization)
- [Glean Work AI Index 2026](https://www.glean.com/work-ai-institute/reports/work-ai-index)
- [Okta AI Agents at Work 2026](https://www.okta.com/newsroom/articles/ai-agents-at-work-2026-agentic-enterprise-security/)
- [Future of Work with AI Agents](https://arxiv.org/abs/2506.06576)
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai)
- [Pew public and expert AI attitudes](https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/)
- [Pew 2026 AI attitude summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/)

These sources support coverage planning and risk framing only. Real Research launch claims still require runtime evidence, observed user studies, accessibility evidence, benchmark runs, customer evidence where relevant, Product Truth decisions, and release evidence.

**Searches and checks run**

- Searched current user-research, human-AI review, benchmark, outcome, advanced-feature, signal-ledger, Product Truth, source-quality, readiness, routing, and traceability docs for overlapping coverage controls.
- Refreshed current external sources on AI work adoption, agent visibility, AI trust, synthetic-user skepticism, agent-as-user design, and user-research AI adoption.
- Added `UserOpinionCoverageRecord` terminology and release evidence bundle references.
- Preserved implementation status as specification-only because no runtime behavior was added.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was identified in the documentation reviewed for this pass. The explicit boundary remains:

```text
user-opinion coverage matrix is specification evidence
synthetic users cannot satisfy real-user launch gates
agent-as-user tests cannot satisfy human usability or trust gates
runtime Product Truth and release evidence are not implemented
```

**Documents deliberately not changed**

- [`../_meta/requirements.json`](../_meta/requirements.json) was not given a new requirement because the matrix sharpens existing `DOCS`, `FEEDBACK`, `BENCH`, `READY`, `PERF`, `AUTO`, `A11Y`, and `I18N` obligations.
- [`implementation-status.md`](implementation-status.md) was not promoted because no runtime user-research records, benchmark runs, telemetry, or release evidence exist.

**Validation commands**

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
node -e "for (const f of ['docs/_meta/requirements.json','docs/_meta/agent-routing.json','docs/_meta/implementation-build-plan.json']) { JSON.parse(require('fs').readFileSync(f,'utf8')); console.log(f+' OK'); }"
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included `docs/06-delivery/user-opinion-research-coverage-matrix.md` in required reading.
- Metadata JSON parsed successfully for `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json`.
- `pnpm docs:check` validated 17 entry files, 26 slices, 118 requirements, 19 tooling decisions, and local Markdown links across 164 files.
- `git diff --check` exited successfully with only existing LF-to-CRLF working-copy warnings.

**Remaining limitations**

- Runtime Product Truth, UserOpinionCoverageRecords, ExperienceValidationPlans, ExperienceEvidencePackages, benchmark runs, telemetry, and release evidence are still not implemented.
- Public user-opinion, vendor surveys, and practitioner signals remain directional unless supported by stronger Research evidence.
- Synthetic-user and AI-simulated participant outputs remain planning-only or gap-fill-only; they cannot prove demand or readiness.

**Next revisit trigger**

Refresh this record when `foundation-01` introduces runtime evidence storage, when a first observed-task script is added for `UOC-001`, when any coverage row moves beyond specification state, or before release-candidate evidence cites a performance, usability, automation, trust, accessibility, API, SDK, MCP, or advanced-differentiation claim.

### DCE-2026-07-18-004: telemetry and experience instrumentation matrix

**Recorded at:** 2026-07-18
**Scope:** product telemetry, experience instrumentation, performance evidence, usability evidence, automation outcome evidence, prohibited analytics, privacy minimization, benchmark instrumentation, outcome metric denominators, Product Truth signal boundaries, and release-claim limits.
**Authority level:** delivery-level instrumentation evidence. Runtime ProductTelemetryEventSpecs, event pipelines, telemetry storage, dashboards, Product Truth links, benchmark runs, and release evidence remain specified behavior.

**Change summary**

This documentation pass added a telemetry and experience instrumentation matrix so Research can measure performance, usability, user experience, automation value, accessibility, support, API, SDK, MCP, and advanced operating-layer behavior without creating a shadow content store or raw session-capture system.

The matrix defines `ProductTelemetryEventSpec` records, event families, user-value questions, allowed and prohibited properties, privacy classifications, retention, sampling, aggregation, redaction tests, event-quality gates, Product Truth links, blocked customer-facing claims, and surface-level instrumentation rows from first Project through automation debugging, Worksets, native companion, Scenario Lab, Product Truth, accessibility, developer platform, administration, and synthetic-user research workflows.

**Affected requirements**

- `ANALYTICS-001`
- `FEEDBACK-001` through `FEEDBACK-002`
- `TRUTH-001` through `TRUTH-003`
- `BENCH-001` through `BENCH-002`
- `READY-001` through `READY-003`
- `PERF-001` through `PERF-006`
- `AUTO-001` through `AUTO-005`
- `A11Y-001`
- `I18N-001`
- adjacent administration, support, API, SDK, MCP, privacy, and security requirements already traced through affected docs

No new requirement ID was added. The matrix sharpens existing analytics, feedback, performance, benchmark, readiness, automation, accessibility, and Product Truth obligations.

**Affected owner slices**

- `foundation-01`
- `commercial-24`
- `enterprise-25`
- `conformance-26`

**Principal affected docs**

- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`performance-capacity-and-load-engineering.md`](performance-capacity-and-load-engineering.md)
- [`test-strategy-and-quality-gates.md`](test-strategy-and-quality-gates.md)
- [`testing-and-validation-strategy.md`](testing-and-validation-strategy.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)

**Source basis**

Official, standards, research, and user-attitude sources reviewed for this instrumentation layer:

- [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/)
- [OpenTelemetry semantic conventions for events](https://opentelemetry.io/docs/specs/semconv/general/events/)
- [W3C Privacy Principles](https://www.w3.org/TR/privacy-principles/)
- [Web.dev Core Web Vitals](https://web.dev/articles/vitals)
- [Web.dev Interaction to Next Paint](https://web.dev/articles/inp)
- [W3C Long Animation Frames API](https://www.w3.org/TR/long-animation-frames/)
- [Google HEART research](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/)
- [Nielsen Norman Group analytics and UX](https://www.nngroup.com/courses/analytics-and-user-experience/)
- [Pew public and expert AI attitudes](https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/)
- [Pew data privacy attitudes](https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/)

These sources support instrumentation design and privacy risk framing. Real Research launch claims still require runtime telemetry, event-quality checks, user research, benchmark runs, accessibility evidence, Product Truth decisions, and release evidence.

**Searches and checks run**

- Searched current analytics, product outcome, benchmark, performance, user research, user-opinion coverage, launch readiness, data governance, source-quality, signal-ledger, traceability, routing, and build-plan docs for overlapping telemetry controls.
- Refreshed current official and standards sources on OpenTelemetry semantic conventions, event semantics, Web Vitals, Long Animation Frames, privacy minimization, HEART metrics, analytics as UX evidence, AI trust, and data privacy attitudes.
- Added `ProductTelemetryEventSpec` terminology and release-evidence bundle references.
- Preserved implementation status as specification-only because no runtime telemetry or event pipeline was added.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was identified in the documentation reviewed for this pass. The explicit boundary remains:

```text
telemetry instrumentation matrix is specification evidence
runtime ProductTelemetryEventSpecs and dashboards are not implemented
telemetry cannot replace observed user research or accessibility evidence
telemetry cannot store raw private content or hidden reasoning
```

**Documents deliberately not changed**

- [`../_meta/requirements.json`](../_meta/requirements.json) was not given a new requirement because the matrix refines existing `ANALYTICS`, `FEEDBACK`, `TRUTH`, `BENCH`, `READY`, `PERF`, `AUTO`, `A11Y`, and `I18N` obligations.
- [`implementation-status.md`](implementation-status.md) was not promoted because no runtime telemetry schemas, dashboards, ingestion jobs, privacy tests, or release evidence exist.

**Validation commands**

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
node -e "for (const f of ['docs/_meta/requirements.json','docs/_meta/agent-routing.json','docs/_meta/implementation-build-plan.json']) { JSON.parse(require('fs').readFileSync(f,'utf8')); console.log(f+' OK'); }"
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included `docs/06-delivery/telemetry-and-experience-instrumentation-matrix.md` in required reading.
- Metadata JSON parsed successfully for `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json`.
- `pnpm docs:check` validated 17 entry files, 26 slices, 118 requirements, 19 tooling decisions, and local Markdown links across 165 files.
- `git diff --check` exited successfully with only existing LF-to-CRLF working-copy warnings.

**Remaining limitations**

- Runtime ProductTelemetryEventSpecs, event schema tests, telemetry pipelines, dashboards, event-quality checks, Product Truth links, benchmark runs, user-research links, and release evidence are still not implemented.
- Telemetry-backed claims remain blocked until runtime evidence agrees with user research, benchmark evidence, accessibility evidence, privacy review, Product Truth decisions, and implementation status.
- The matrix prohibits general analytics capture of raw private content, but enforcement still depends on implementation in later slices.

**Next revisit trigger**

Refresh this record when `foundation-01` introduces runtime evidence storage, when `commercial-24` introduces analytics or experiments, when `conformance-26` records the first release-candidate telemetry evidence, or before any customer-facing claim cites telemetry for performance, usability, automation, accessibility, trust, support, API, SDK, MCP, or advanced-differentiation value.

### DCE-2026-07-18-005: customer-facing claim and evidence boundary matrix

**Recorded at:** 2026-07-18
**Scope:** customer-facing claim wording, stronger-than-specification release language, availability labels, AI accuracy and groundedness claims, performance claims, automation value claims, privacy and security commitments, accessibility claims, enterprise readiness, API, SDK, MCP, testimonials, case studies, reviews, advanced-feature differentiation, Product Truth links, source-quality gates, telemetry, benchmark, user-research, release-evidence, and launch-readiness controls.
**Authority level:** delivery-level claim-boundary evidence. Runtime CustomerClaimEvidenceRecords, Product Truth records, release-evidence storage, approval workflows, and public launch records remain specified behavior.

**Change summary**

This documentation pass added [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) and the `CustomerClaimEvidenceRecord` control so Research can describe planned product value in specification docs without letting planned, beta, directional, benchmark-only, testimonial, privacy, performance, AI, API, SDK, MCP, enterprise, or advanced-feature language become unsupported customer-facing claims.

The pass added `READY-004`, raised the canonical requirement count to 119, updated human and machine navigation, and wired the new matrix through release readiness, documentation governance, source-quality policy, Product Truth, telemetry, user-opinion coverage, benchmark, outcome, human-AI review, advanced-feature, implementation-decision, release-engineering, test-strategy, Definition of Done, and traceability docs.

**Affected requirements**

- `READY-004`
- `READY-001` through `READY-003`
- `DOCS-002` and `DOCS-004`
- `TRUTH-002` through `TRUTH-003`
- `BENCH-001`
- `PERF-001` through `PERF-006`
- `AUTO-003`
- `A11Y-001`
- `I18N-001`
- adjacent API, SDK, MCP, support, security, privacy, enterprise, analytics, user-research, and release-conformance requirements already traced through affected docs

**Affected owner slices**

- `foundation-01`
- `commercial-24`
- `enterprise-25`
- `conformance-26`

**Principal affected docs**

- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md)
- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md)
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`implementation-decision-records-and-open-decisions.md`](implementation-decision-records-and-open-decisions.md)
- [`release-engineering-and-change-control.md`](release-engineering-and-change-control.md)
- [`test-strategy-and-quality-gates.md`](test-strategy-and-quality-gates.md)
- [`testing-and-validation-strategy.md`](testing-and-validation-strategy.md)
- [`performance-capacity-and-load-engineering.md`](performance-capacity-and-load-engineering.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`../07-reference/definition-of-done.md`](../07-reference/definition-of-done.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)

**Source basis**

Official and advertising self-regulatory sources reviewed for this claim-boundary layer:

- [FTC Policy Statement Regarding Advertising Substantiation](https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation)
- [Federal Register policy statement concerning AI accuracy](https://www.federalregister.gov/documents/2026/07/07/2026-13628/policy-statement-concerning-the-suppression-of-accuracy-in-artificial-intelligence-systems)
- [FTC announcement seeking public comment on AI accuracy](https://www.ftc.gov/news-events/news/press-releases/2026/07/ftc-seeks-public-comment-policy-statement-addressing-ai-accuracy)
- [FTC Workado AI detection claim order announcement](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-order-requires-workado-back-artificial-intelligence-detection-claims)
- [FTC AI privacy and confidentiality commitments guidance](https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2024/01/ai-companies-uphold-your-privacy-confidentiality-commitments)
- [FTC Consumer Reviews and Testimonials Rule guidance](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers)
- [FTC final rule banning fake reviews and testimonials](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials)
- [FTC endorsement guidance](https://www.ftc.gov/news-events/topics/truth-advertising/advertisement-endorsements)
- [NAD Apple Intelligence availability claim decision summary](https://bbbprograms.org/media/newsroom/decisions/apple-intelligence)

These sources define claim discipline for Research documentation. They do not prove Research capabilities, launch readiness, benchmark performance, AI accuracy, privacy implementation, security posture, or customer outcomes.

**Searches and checks run**

- Searched current documentation for customer-facing, public claim, release note, availability, testimonial, performance, telemetry, benchmark, user-research, Product Truth, and READY requirement language.
- Reviewed governing release-readiness, documentation-governance, source-quality, telemetry, user-opinion, benchmark, outcome, Product Truth, implementation-decision, release-engineering, test-strategy, and Definition of Done docs for claim-boundary drift.
- Added `CustomerClaimEvidenceRecord` terminology and release-evidence bundle references.
- Added `READY-004` to canonical requirements, traceability, README surfaces, implementation-build-plan required reading, and agent routing.
- Preserved implementation status as specification-only because no runtime claim-evidence storage, Product Truth workflow, or release approval system was added.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was identified in the documentation reviewed for this pass. The explicit boundary remains:

```text
customer-facing claim boundary matrix is specification evidence
runtime CustomerClaimEvidenceRecords are not implemented
runtime Product Truth and release evidence are not implemented
planned product advantages cannot become customer-facing claims without release evidence
```

**Documents deliberately not changed**

- [`implementation-status.md`](implementation-status.md) was not promoted because no runtime CustomerClaimEvidenceRecords, Product Truth storage, release-evidence approval flow, public launch record, or customer-facing surface exists.
- Existing historical documentation-change evidence records were not rewritten from 118 to 119 requirements because they record earlier validation snapshots.
- Open implementation decisions were not accepted or closed because this pass did not evaluate live providers, pricing, regions, contracts, production topology, billing, support, security implementation, or operational readiness.

**Validation commands**

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
node -e "for (const f of ['docs/_meta/requirements.json','docs/_meta/agent-routing.json','docs/_meta/implementation-build-plan.json']) { JSON.parse(require('fs').readFileSync(f,'utf8')); console.log(f+' OK'); }"
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included `docs/06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md` in required reading.
- Metadata JSON parsed successfully for `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json`.
- `pnpm docs:check` validated 17 entry files, 26 slices, 119 requirements, 19 tooling decisions, and local Markdown links across 166 files.
- `git diff --check` exited successfully with only existing LF-to-CRLF working-copy warnings.

**Remaining limitations**

- Runtime CustomerClaimEvidenceRecords, Product Truth claim links, release-evidence bundles, legal or compliance approvals, public launch records, and customer-facing surfaces are still not implemented.
- The matrix blocks unsupported claims but enforcement still depends on later implementation in Product Truth, release evidence, review workflows, and publication controls.
- External legal, policy, AI, review, and advertising references must be refreshed before any production launch, release note, marketing page, customer deck, testimonial, benchmark page, SDK/API/MCP claim, or availability statement depends on them.

**Next revisit trigger**

Refresh this record when `foundation-01` introduces runtime evidence storage, when Product Truth or release evidence implements CustomerClaimEvidenceRecords, when the first customer-facing release copy is drafted, when testimonials or case studies are introduced, when benchmark or telemetry evidence is used externally, or before any beta, GA, enterprise, SDK, API, MCP, privacy, security, accessibility, performance, automation, or AI accuracy claim is approved.

### DCE-2026-07-18-006: user-research segment and screener governance

**Scope:** segmented user-research evidence, participant screening, excluded segments, sampling limits, public-signal synthesis, dogfood, beta, support feedback, benchmark participants, StrategicBetScorecards, Product Truth, launch evidence, and customer-facing claim boundaries.
**Authority level:** delivery evidence-governance contract and requirement metadata update.
**Runtime status:** specification only; runtime `UserResearchSegmentScreener` storage, recruiting workflows, survey systems, Product Truth records, release evidence, and customer data processing are not implemented.

**Change summary**

This documentation pass added a governed user-research segment and screener matrix so user opinions cannot be promoted from convenient anecdotes into product direction, launch evidence, outcome scorecards, Product Truth decisions, or customer-facing claims without target segments, excluded segments, job-to-be-done, agency preference, AI trust posture, automation maturity, accessibility, locale, device, privacy, security, buyer/user/operator role, sampling, denominator, representativeness, bias, consent, retention, supported claims, blocked claims, owner, expiry, and revisit metadata.

The pass added `FEEDBACK-003`, raised the canonical requirement count to 120, updated routing and build-plan required reading, and wired `UserResearchSegmentScreener` through source quality, discovery, signal decisions, user-opinion coverage, user-research validation, telemetry, benchmark, outcome, advanced-feature incubation, customer-claim, semantic-drift, release-readiness, product-readiness, terminology, traceability, and reference docs.

**Affected requirement IDs**

- `FEEDBACK-003`
- `FEEDBACK-001` through `FEEDBACK-002`
- `TRUTH-001` through `TRUTH-003`
- `BENCH-001` through `BENCH-002`
- `READY-001` through `READY-004`
- `AUTO-003`
- `PERF-001` through `PERF-006`
- `A11Y-001`
- `I18N-001`

**Owner slices**

- `conformance-26`
- `commercial-24`
- `foundation-01`

**Principal affected docs**

- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md)
- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`../../README.md`](../../README.md)
- [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md)
- [`../README.md`](../README.md)
- [`../START-HERE.md`](../START-HERE.md)

**Source basis**

User-research and market-attitude references reviewed for this screener layer:

- [Nielsen Norman Group, Recruiting and Screening Candidates for User Research Projects](https://www.nngroup.com/articles/recruiting-screening-research-candidates/)
- [AAPOR Best Practices for Survey Research](https://aapor.org/standards-and-ethics/best-practices/)
- [Pew public and expert AI attitudes](https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/)
- [Pew 2026 AI attitude summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/)
- [User Interviews State of Synthetic Users](https://www.userinterviews.com/state-of-synthetic-users-report)
- [Microsoft Work Trend Index 2026](https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization)
- [Glean Work AI Index 2026](https://www.glean.com/work-ai-institute/reports/work-ai-index)
- [Okta AI Agents at Work 2026](https://www.okta.com/newsroom/articles/ai-agents-at-work-2026-agentic-enterprise-security/)
- [Future of Work with AI Agents](https://arxiv.org/abs/2506.06576)

These sources define the need to screen, segment, disclose method limits, preserve human-agency and AI-trust context, and treat public or synthetic signals carefully. They do not prove Research demand, runtime quality, usability, accessibility, automation value, enterprise readiness, or launch readiness.

**Searches and checks run**

- Reviewed governing user-research, user-opinion coverage, source-quality, discovery, signal-ledger, outcome, benchmark, telemetry, claim-boundary, advanced-feature, semantic-drift, release-readiness, readiness-audit, terminology, traceability, routing, and build-plan docs for segment/screener drift.
- Searched for stale requirement counts and outdated `FEEDBACK-001` through `FEEDBACK-002` coverage language.
- Confirmed historical documentation-change records retain older 118- and 119-requirement validation snapshots intentionally.
- Confirmed `node scripts/agent-context.mjs` now includes `docs/06-delivery/user-research-segment-and-screener-matrix.md` in `foundation-01` required reading.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was identified in the documentation reviewed for this pass. The explicit boundary remains:

```text
user-research segment and screener matrix is specification evidence
runtime UserResearchSegmentScreener storage is not implemented
runtime Product Truth and release evidence are not implemented
unscreened opinions remain anecdotes or planning signals
```

**Documents deliberately not changed**

- [`implementation-status.md`](implementation-status.md) was not promoted because no runtime Product Truth, user-research storage, recruiting workflow, telemetry, benchmark runner, release-evidence bundle, or customer-claim workflow exists.
- Existing historical documentation-change evidence records were not rewritten from 118 or 119 requirements because they record earlier validation snapshots.
- Open implementation decisions were not accepted or closed because this pass did not evaluate live providers, participant recruiting tools, survey vendors, analytics vendors, privacy processing, data residency, support workflows, or production topology.

**Validation commands**

```bash
node -e "JSON.parse(require('fs').readFileSync('docs/_meta/requirements.json','utf8')); JSON.parse(require('fs').readFileSync('docs/_meta/agent-routing.json','utf8')); JSON.parse(require('fs').readFileSync('docs/_meta/implementation-build-plan.json','utf8')); console.log('json ok')"
node scripts/agent-status.mjs
node scripts/agent-context.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- Metadata JSON parsed successfully for `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json`.
- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included `docs/06-delivery/user-research-segment-and-screener-matrix.md` in required reading.
- `pnpm docs:check` validated 17 entry files, 26 slices, 120 requirements, 19 tooling decisions, and local Markdown links across 167 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- Runtime `UserResearchSegmentScreener` records, recruiting workflows, participant management, customer consent storage, survey collection, Product Truth integration, release evidence, customer-claim enforcement, and telemetry-backed segment dashboards are still not implemented.
- Public opinions, vendor surveys, practitioner reports, dogfood, and synthetic-user outputs remain directional unless later supported by screened Research evidence, runtime data, benchmarks, customer evidence, and Product Truth decisions.
- The screener matrix blocks evidence overreach in documentation, but enforcement still depends on later runtime Product Truth, analytics, user-research, benchmark, release, and publication controls.

**Next revisit trigger**

Refresh this record when `foundation-01` creates runtime evidence storage, when Product Truth implements user-opinion signal records, when first user interviews or surveys are planned, when dogfood or beta cohorts are selected, when benchmark participant runs are introduced, when customer-facing claims reference user evidence, or before any performance, usability, user-experience, automation, trust, accessibility, enterprise, SDK/API/MCP, or advanced-feature claim depends on user opinion.

## DCE-2026-07-18-007 - Advanced differentiation benchmark matrix

**Status:** complete specification update, runtime not implemented
**Recorded:** 2026-07-18
**Evidence type:** documentation-governance, comparator benchmark, claim-control, and release-gate update

This pass added a comparative proof layer for advanced Research differentiators. The new matrix prevents OS, browser, workspace-agent, app-intent, automation, and agent-observability comparisons from becoming product claims unless current comparator sources, screened target users, same-task baselines, good-event definitions, anti-metrics, telemetry, benchmark runs, Product Truth decisions, and CustomerClaimEvidenceRecords agree for the exact scope.

**Requirement impact**

- Added `BENCH-003` to [`../_meta/requirements.json`](../_meta/requirements.json).
- Updated the canonical requirement count from 120 to 121 in [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md).
- Updated [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md) so `BENCH-001` through `BENCH-003` map to the advanced operating-layer, signal, benchmark, telemetry, claim, and Product Truth controls.

**Principal affected docs**

- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`../README.md`](../README.md)
- [`../START-HERE.md`](../START-HERE.md)
- [`../../README.md`](../../README.md)
- [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md)

**Source basis**

Advanced-differentiation comparator sources reviewed for this pass:

- [Microsoft Recall privacy and control](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience)
- [Microsoft Edge AI browsing updates](https://blogs.windows.com/msedgedev/2026/05/13/new-updates-to-edge-across-desktop-and-mobile/)
- [Microsoft PowerToys Workspaces](https://learn.microsoft.com/en-us/windows/powertoys/workspaces)
- [Apple App Intents and Apple Intelligence WWDC26 guidance](https://developer.apple.com/videos/play/wwdc2026/343/)
- [Apple Intelligence developer guidance](https://developer.apple.com/apple-intelligence/)
- [Future of Work with AI Agents](https://futureofwork.saltlab.stanford.edu/)
- [WORKBank](https://arxiv.org/abs/2506.06576)
- public Reddit and Hacker News discussions of agent observability and maintainable agent control flow

These sources define comparator baselines and failure modes only. They do not prove Research demand, runtime quality, usability, accessibility, automation value, trust, or launch readiness.

**Searches and checks run**

- Searched for stale `BENCH-001` through `BENCH-002` coverage language and stale requirement counts.
- Confirmed historical documentation-change records intentionally retain earlier 120-requirement validation snapshots.
- Confirmed `node scripts/agent-context.mjs` now includes `docs/06-delivery/advanced-differentiation-benchmark-matrix.md` in `foundation-01` required reading.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was identified in the documentation reviewed for this pass. The explicit boundary remains:

```text
advanced differentiation benchmark matrix is specification evidence
runtime AdvancedDifferentiationBenchmarkRecord storage is not implemented
runtime Product Truth and release evidence are not implemented
comparative and better-than claims remain blocked until release evidence exists
```

**Documents deliberately not changed**

- [`implementation-status.md`](implementation-status.md) was not promoted because no runtime comparator baseline runner, Product Truth storage, telemetry, benchmark execution, release-evidence bundle, or customer-claim workflow exists.
- Existing historical documentation-change evidence records were not rewritten from 118, 119, or 120 requirements because they record earlier validation snapshots.
- Open implementation decisions were not accepted or closed because this pass did not evaluate live providers, runtime comparator harnesses, analytics vendors, participant recruitment, privacy processing, production topology, or release approvals.

**Validation commands**

```bash
node -e "JSON.parse(require('fs').readFileSync('docs/_meta/requirements.json','utf8')); JSON.parse(require('fs').readFileSync('docs/_meta/agent-routing.json','utf8')); JSON.parse(require('fs').readFileSync('docs/_meta/implementation-build-plan.json','utf8')); console.log('json ok')"
node scripts/agent-status.mjs
node scripts/agent-context.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- Metadata JSON parsed successfully for `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json`.
- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included `docs/06-delivery/advanced-differentiation-benchmark-matrix.md` in required reading.
- `pnpm docs:check` validated 17 entry files, 26 slices, 121 requirements, 19 tooling decisions, and local Markdown links across 168 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- Runtime AdvancedDifferentiationBenchmarkRecords, comparator harnesses, telemetry dashboards, Product Truth records, release evidence, and customer-claim enforcement are still not implemented.
- Public opinions, practitioner discussions, official competitor docs, and research papers remain directional or comparator-basis evidence only until backed by Research runtime evidence, screened user evidence, benchmarks, telemetry, Product Truth decisions, and release bundles.
- The matrix blocks evidence overreach in documentation, but enforcement still depends on later runtime Product Truth, analytics, benchmark, release, and publication controls.

**Next revisit trigger**

Refresh this record when `foundation-01` creates runtime evidence storage, when Product Truth implements advanced-differentiation decision records, when comparator benchmark fixtures are introduced, when first same-task comparator runs are added, when customer-facing copy references advanced differentiation, or before any OS, browser, workspace-agent, app-intent, automation, or agent-observability comparison appears in release notes, demos, support docs, SDK/API/MCP docs, or public marketing.

## DCE-2026-07-18-008 - User-opinion coding and synthesis ledger

**Status:** complete specification update, runtime not implemented
**Recorded:** 2026-07-18
**Evidence type:** documentation-governance, user-opinion coding, synthesis, Product Truth, claim-control, benchmark, and release-gate update

This pass added [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) and the `FEEDBACK-004` requirement so Research can treat raw opinions, quotes, support notes, public signals, benchmark-participant notes, telemetry follow-up, and AI-assisted highlights as evidence candidates without letting them become Product Truth, launch evidence, benchmark scope, outcome claims, or customer-facing claims before reviewed coding and synthesis exist.

The pass makes codebooks, coding assignments, negative-evidence review, contradiction state, AI-assist disclosure, source-quality records, screener links, coverage records, blocked claims, owner, expiry, and SignalDecisionLedger links explicit. Public discussions, generated summaries, and synthetic-user outputs remain directional or derived signals unless later supported by screened Research evidence, runtime evidence, telemetry, benchmarks, Product Truth decisions, and release bundles.

**Requirement impact**

- Added `FEEDBACK-004` to [`../_meta/requirements.json`](../_meta/requirements.json).
- Updated the canonical requirement count from 121 to 122 in [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md).
- Updated [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md) so `FEEDBACK-001` through `FEEDBACK-004` map to feedback, Product Truth, telemetry, benchmark, performance, accessibility, and release-readiness controls.

**Principal affected docs**

- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md)
- [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md)
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`../README.md`](../README.md)
- [`../START-HERE.md`](../START-HERE.md)
- [`../../README.md`](../../README.md)
- [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md)

**Source basis**

User-opinion coding, synthesis, and AI-assisted analysis references reviewed for this pass:

- [Nielsen Norman Group thematic analysis](https://www.nngroup.com/articles/thematic-analysis/)
- [Dovetail qualitative coding guidance](https://dovetail.com/research/qualitative-research-coding/)
- [Dovetail Highlights](https://docs.dovetail.com/help/projects/highlights)
- [Dovetail Project Docs](https://docs.dovetail.com/help/projects/docs)
- [Pendo AI-assisted integrations](https://support.pendo.io/hc/en-us/articles/44030459419675-Use-AI-assisted-integrations-to-collect-product-feedback)
- [Pendo Listen Explore](https://support.pendo.io/hc/en-us/articles/37717114561819-Explore-feedback-with-AI-in-Listen)
- [Productboard AI auto-linking](https://support.productboard.com/hc/en-us/articles/26949590820627-Link-insights-automatically-with-Productboard-AI)
- [Productboard feedback-to-feature insights](https://support.productboard.com/hc/en-us/articles/360056354514-Link-user-feedback-to-related-feature-ideas-using-insights)
- public Reddit discussions of transcript analysis, SaaS versus AI analysis workflows, unsolicited feedback systems, and AI insight generation

These sources define coding and synthesis controls, review expectations, and AI-assist risks. They do not prove Research demand, runtime quality, usability, accessibility, automation value, trust, or launch readiness.

**Searches and checks run**

- Searched for stale `FEEDBACK-001` through `FEEDBACK-003` coverage language and stale 121-requirement counts.
- Searched governing user-research, source-quality, coverage, signal-ledger, Product Truth, telemetry, benchmark, outcome, advanced-feature, claim-boundary, readiness, launch, semantic-drift, terminology, reference, routing, and build-plan docs for missing synthesis controls.
- Confirmed historical documentation-change records intentionally retain earlier 120- and 121-requirement validation snapshots.
- Confirmed `node scripts/agent-context.mjs` now includes `docs/06-delivery/user-opinion-coding-and-synthesis-ledger.md` in `foundation-01` required reading.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was identified in the documentation reviewed for this pass. The explicit boundary remains:

```text
user-opinion coding and synthesis ledger is specification evidence
runtime UserOpinionEvidenceItem storage is not implemented
runtime UserOpinionCodebook storage is not implemented
runtime UserOpinionCodingAssignment storage is not implemented
runtime UserOpinionSynthesisRecord storage is not implemented
runtime Product Truth and release evidence are not implemented
opinion-backed Product Truth, launch, benchmark, outcome, and customer-facing claims remain blocked until runtime evidence exists
```

**Documents deliberately not changed**

- [`implementation-status.md`](implementation-status.md) was not promoted because no runtime user-opinion evidence store, codebook workflow, coding assignment workflow, synthesis workflow, Product Truth storage, telemetry integration, benchmark integration, release-evidence bundle, or customer-claim enforcement exists.
- Existing historical documentation-change evidence records were not rewritten from 118, 119, 120, or 121 requirements because they record earlier validation snapshots.
- Open implementation decisions were not accepted or closed because this pass did not evaluate live providers, runtime survey tools, research repository vendors, participant recruitment, telemetry pipelines, privacy processing, production topology, or release approvals.

**Validation commands**

```bash
node -e "const fs=require('fs'); for (const p of ['docs/_meta/requirements.json','docs/_meta/agent-routing.json','docs/_meta/implementation-build-plan.json']) JSON.parse(fs.readFileSync(p,'utf8')); console.log('json ok')"
node scripts/agent-status.mjs
node scripts/agent-context.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- Metadata JSON parsed successfully for `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json`.
- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included `docs/06-delivery/user-opinion-coding-and-synthesis-ledger.md` in required reading.
- `pnpm docs:check` validated 17 entry files, 26 slices, 122 requirements, 19 tooling decisions, and local Markdown links across 169 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- Runtime UserOpinionEvidenceItems, UserOpinionCodebooks, UserOpinionCodingAssignments, UserOpinionSynthesisRecords, AI-assisted analysis review, negative-evidence review, Product Truth integration, telemetry-backed follow-up, benchmark linkage, release evidence, and customer-claim enforcement are still not implemented.
- Public opinions, vendor feedback-tool docs, practitioner discussions, dogfood notes, benchmark-participant notes, generated summaries, and synthetic-user outputs remain directional or derived unless later backed by Research runtime evidence, screened user evidence, benchmarks, telemetry, Product Truth decisions, and release bundles.
- The ledger blocks evidence overreach in documentation, but enforcement still depends on later runtime Product Truth, analytics, user-research, benchmark, release, and publication controls.

**Next revisit trigger**

Refresh this record when `foundation-01` creates runtime evidence storage, when Product Truth implements user-opinion evidence and synthesis records, when first user interviews or surveys are coded, when AI-assisted feedback analysis is introduced, when dogfood or beta feedback is synthesized, when benchmark participant notes affect benchmark scope, when customer-facing claims reference user-opinion themes, or before any performance, usability, user-experience, automation, trust, accessibility, enterprise, SDK/API/MCP, or advanced-feature claim depends on user opinion.

## DCE-2026-07-18-009 - Automation failure recovery and learning loop

**Status:** complete specification update; runtime automation recovery is not implemented

**Recorded:** 2026-07-18

**Evidence type:** documentation-governance, automation failure recovery, recovery UX, telemetry, benchmark, launch-gate, customer-claim boundary

**Summary**

Added the `AUTO-006` automation failure recovery and learning-loop contract so failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain automation runs have an explicit recovery record, severity, safe next action, side-effect reconciliation rule, support-safe diagnostic boundary, outcome evidence, and learning artifact before automation can expand or support customer-facing claims.

**Requirement impact**

- Added `AUTO-006` to [`../_meta/requirements.json`](../_meta/requirements.json).
- Increased the canonical requirement count from 122 to 123.
- Updated routing, build-plan reading lists, traceability, indexes, terminology, official references, and public status surfaces to include the new contract.

**Principal documents changed**

- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`../01-product/automation-registry-and-run-debugger.md`](../01-product/automation-registry-and-run-debugger.md)
- [`../01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md)
- [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md)
- [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [`../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md)
- [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`test-strategy-and-quality-gates.md`](test-strategy-and-quality-gates.md)
- [`testing-and-validation-strategy.md`](testing-and-validation-strategy.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../README.md`](../README.md)
- [`../START-HERE.md`](../START-HERE.md)
- [`../../README.md`](../../README.md)
- [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md)

**Source basis**

Official and standards references reviewed for this pass:

- [Zapier workflow error troubleshooting](https://help.zapier.com/hc/en-us/articles/8496037690637-How-to-troubleshoot-errors-in-Zap-workflows)
- [n8n Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/)
- [n8n HTTP Request common issues](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/common-issues/)
- [Google SRE incident management](https://sre.google/resources/practices-and-processes/incident-management-guide/)
- [Temporal Retry Policies](https://docs.temporal.io/encyclopedia/retry-policies)
- [OpenTelemetry exception log semantic conventions](https://opentelemetry.io/docs/specs/semconv/exceptions/exceptions-logs/)
- [Nielsen Norman Group usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Nielsen Norman Group severity rating guidance](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/)

Public Reddit and Hacker News discussions of state-ledger observability, green-trace wrong outcomes, long-running agent debugging, n8n quiet wrong outcomes, checkpointing, and multi-agent debugging were treated as directional signals only. They do not prove demand, prevalence, launch readiness, or production quality.

**Searches and checks run**

- Searched automation registry, outcome scorecard, recipe, adaptive routing, telemetry, benchmark, launch, claim-boundary, user-research, user-opinion, test-strategy, terminology, traceability, routing, build-plan, and status docs for missing failure-recovery coverage.
- Searched for stale `AUTO-001` through `AUTO-005` coverage, stale 122-requirement counts, and non-canonical `RecoveryAction / ActionCard` wording outside historical evidence records.
- Confirmed `node scripts/agent-context.mjs` now includes `docs/06-delivery/automation-failure-recovery-and-learning-loop.md` in `foundation-01` required reading.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was identified in the documentation reviewed for this pass. The explicit boundary remains:

```text
AUTO-006 is a specification requirement
runtime AutomationFailureRecoveryRecord storage is not implemented
runtime AutomationFailureLearningRecord storage is not implemented
runtime automation retry, replay, reconciliation, compensation, withdrawal, or rollback orchestration is not implemented
runtime Product Truth and release evidence enforcement is not implemented
automation recoverability, safe scheduled work, adaptive automation value, and customer-facing automation claims remain blocked until runtime evidence exists
```

**Documents deliberately not changed**

- [`implementation-status.md`](implementation-status.md) was not promoted because no runtime automation recovery store, automation engine, recovery UX, telemetry pipeline, benchmark runner, launch-evidence bundle, or customer-claim enforcement exists.
- Historical DCE records were not rewritten because they preserve earlier validation snapshots and requirement counts.
- Open implementation decisions were not accepted or closed because this pass did not evaluate runtime workflow providers, queue behavior, storage schemas, support workflows, incident escalation, telemetry ingestion, customer evidence, or production topology.

**Validation commands**

```bash
node -e "const fs=require('fs'); for (const p of ['docs/_meta/requirements.json','docs/_meta/agent-routing.json','docs/_meta/implementation-build-plan.json']) JSON.parse(fs.readFileSync(p,'utf8')); console.log('json ok')"
node scripts/agent-status.mjs
node scripts/agent-context.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- Metadata JSON parsed successfully for `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json`.
- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included `docs/06-delivery/automation-failure-recovery-and-learning-loop.md` in required reading.
- `pnpm docs:check` validated 17 entry files, 26 slices, 123 requirements, 19 tooling decisions, and local Markdown links across 170 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- Runtime AutomationFailureRecoveryRecords, AutomationFailureLearningRecords, safe-next-action enforcement, side-effect reconciliation, support-safe recovery diagnostics, recovery telemetry, benchmark fixtures, launch evidence, and customer-claim enforcement are still not implemented.
- Public discussions, vendor troubleshooting docs, and incident-management references remain directional or design inputs unless later backed by Research runtime evidence, screened user evidence, benchmarks, telemetry, Product Truth decisions, and release bundles.
- The documentation blocks evidence overreach, but enforcement still depends on later runtime Product Truth, automation, analytics, user-research, benchmark, release, and publication controls.

**Next revisit trigger**

Refresh this record when `commercial-24` implements automation recipes or outcome scorecards, when automation failure events first enter telemetry, when a recovery record affects Product Truth, when support uses recovery diagnostics, when benchmark automation scenarios fail, when a quiet-wrong outcome is found, when customer-facing automation claims are drafted, or before any release candidate claims recoverable automation, safe scheduled work, automation time savings, or adaptive automation value.

## DCE-2026-07-18-010 - Frontier feature watch and novelty control

**Change date:** 2026-07-18
**Change status:** specification and documentation governance update, not runtime implementation
**Authoring mode:** agent-assisted documentation change with official-source review and documentation validation

**Reason for change**

Research was already tracking user opinions, external signal refreshes, advanced operating-layer differentiation, advanced feature opportunities, prototype incubation, and advanced benchmark controls. The remaining documentation gap was the intake step between "a fresh OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, or public-opinion signal exists" and "Research may update scope, accepted differentiators, prototypes, benchmark comparators, implementation plans, or customer-facing claims."

Without an explicit novelty-control record, a new platform feature, vendor announcement, public thread, or generated summary could bypass source-quality review, user-opinion synthesis, non-action alternatives, contradiction review, copy-risk checks, and launch-claim blockers.

**Governing requirement change**

- Added `BENCH-004`, "Frontier feature watch and novelty control", to [`../_meta/requirements.json`](../_meta/requirements.json) under `conformance-26`.
- Canonical requirement count increased from 123 to 124.
- Added [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md) to agent routing and build-plan required reading for `foundation-01`, `commercial-24`, and `conformance-26`.

**Official and product-source basis reviewed**

- [Microsoft Recall privacy and control](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience) and [Microsoft Click to Do](https://support.microsoft.com/en-us/windows/ai/ai-features/click-to-do-do-more-with-what-s-on-your-screen) for current OS-level memory, screen action, local processing, permission, filtering, and user-control patterns.
- [Apple advanced App Intents APIs](https://developer.apple.com/videos/play/wwdc2026/343/) and [Apple Intelligence developer guide](https://developer.apple.com/wwdc26/guides/apple-intelligence/) for semantic index, onscreen awareness, structured entities, natural-language actions, and system-path testing patterns.
- [ChatGPT Workspace Agents](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business), [Notion Custom Agents](https://www.notion.com/help/custom-agents), and [Notion Custom Agents security features](https://www.notion.com/help/custom-agents-security-features) for current workspace-agent, sharing, permissions, activity, and enterprise-control patterns.
- [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity) and [Zapier log streams](https://help.zapier.com/hc/en-us/articles/43732241361421-Set-up-log-streams-to-monitor-Zap-activity) for current agent-run review, monitoring, event, and failure-observability patterns.
- [Atlassian Rovo Agents](https://support.atlassian.com/rovo/docs/agents/), [Rovo Studio](https://support.atlassian.com/studio/docs/what-is-rovo-studio/), and [Rovo usage limits](https://support.atlassian.com/rovo/docs/rovo-usage-limits/) for agent creation, governance, and usage-limit boundaries.
- [Glean agent development lifecycle](https://docs.glean.com/agents/agent-development-lifecycle/adlc), [Glean enterprise agent evaluation](https://www.glean.com/blog/enterprise-agent-evaluation-guide), and [Gemini Connected Apps](https://support.google.com/gemini/answer/13695044?hl=en) for current enterprise agent lifecycle, evaluation, and connected-app boundaries.

Public Reddit, Hacker News, practitioner, and generated-summary signals about AI browsers, tab overload, Recall privacy, permission fatigue, agent reliability, automation debugging, and workspace-agent value were treated as directional inputs only. They do not prove prevalence, demand, launch readiness, customer outcomes, or production differentiation.

**Documents changed**

- Added [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md) with the `FrontierSignalReview` record shape, promotion ladder, novelty-control rules, current frontier posture, allowed decisions, launch gates, and documentation update rule.
- Updated [`../_meta/requirements.json`](../_meta/requirements.json), [`../_meta/agent-routing.json`](../_meta/agent-routing.json), and [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json).
- Updated [`../START-HERE.md`](../START-HERE.md), [`../README.md`](../README.md), top-level [`../../README.md`](../../README.md), and [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md) so entry points list the new requirement, document, and 124-requirement count.
- Updated [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md), [`../07-reference/terminology.md`](../07-reference/terminology.md), and [`../07-reference/official-references.md`](../07-reference/official-references.md).
- Updated advanced differentiation, opportunity, external watch, signal ledger, prototype incubation, benchmark, source-quality, user-research, user-opinion coverage, outcome, human-AI review, customer-claim, launch-readiness, and product-readiness gap docs so frontier signals require current FrontierSignalReviews or runtime Product Truth equivalents before scope, prototype, benchmark, implementation-plan, or claim changes.

**Contradictions found**

No unresolved `S0` or `S1` contradiction was identified in the documentation reviewed for this pass. The explicit boundary remains:

```text
BENCH-004 is a specification requirement
FrontierSignalReview storage is not implemented
runtime Product Truth equivalents are not implemented
runtime release evidence bundles are not implemented
fresh frontier signals cannot become customer-facing claims, launch evidence, or accepted differentiators without later runtime evidence
```

**Validation commands**

```bash
node -e "const fs=require('fs'); for (const p of ['docs/_meta/requirements.json','docs/_meta/agent-routing.json','docs/_meta/implementation-build-plan.json']) JSON.parse(fs.readFileSync(p,'utf8')); console.log('json ok')"
node scripts/agent-status.mjs
node scripts/agent-context.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- Metadata JSON parsed successfully for `requirements.json`, `agent-routing.json`, and `implementation-build-plan.json`.
- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included `docs/06-delivery/frontier-feature-watch-and-novelty-control.md` in required reading.
- `pnpm docs:check` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, and local Markdown links across 171 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- `BENCH-004` is a documentation and Product Truth contract only. There is no runtime `FrontierSignalReview` table, workflow, UI, API, Product Truth graph linkage, benchmark runner, release evidence bundle, or customer-claim enforcement yet.
- Official platform references can change. Each FrontierSignalReview must carry source review date, currentness, expiry, and revisit trigger before it supports a future scope or claim decision.
- Public opinions and generated summaries remain directional unless later supported by stronger source-quality evidence, screened user evidence, observed tasks, telemetry, benchmarks, Product Truth decisions, and release bundles.

**Next revisit trigger**

Refresh this record when a fresh OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, or public-opinion signal is proposed for accepted scope, advanced opportunity scoring, prototype incubation, benchmark comparator selection, implementation planning, public claims, or release evidence.

## DCE-2026-07-18-011 - Indexed-document and routing coverage validation

**Change date:** 2026-07-18
**Change status:** documentation validation hardening, not runtime implementation
**Authoring mode:** agent-assisted documentation-control change with local validation

**Reason for change**

Research's documentation governance already treated missing index coverage and missing routing coverage as drift. The validator verified that routed files existed, but it did not prove that every canonical Markdown document under `docs/` was discoverable from both human entry points and agent routing. That left a gap where a new production contract could pass link validation while being absent from `docs/README.md`, `docs/START-HERE.md`, or `docs/_meta/agent-routing.json`.

This change turns that policy into a repeatable gate. It improves documentation consistency directly: new canonical docs must be visible to humans and agents before `pnpm docs:check` can pass.

**Control change**

- Updated [`../../scripts/validate-agent-control.mjs`](../../scripts/validate-agent-control.mjs) to derive canonical Markdown docs from the filesystem, excluding only `docs/README.md` and `docs/START-HERE.md` as the two human entry documents.
- Added local Markdown-link parsing for `docs/README.md` and `docs/START-HERE.md`.
- Added validation that every canonical doc is linked from both human entry documents.
- Added validation that every canonical doc appears in agent routing metadata.
- Updated validation output to report indexed-doc coverage alongside required files, slices, requirements, and tooling decisions.

**Documents changed**

- Updated [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md) so drift definitions and baseline validation describe indexed-doc and routed-doc coverage.
- Updated [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md) so the review checklist and launch gates require indexed-doc and routed-doc coverage.
- Updated [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md) so release semantic checks include indexed-doc and routed-doc coverage.
- Updated [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md) so documentation governance production evidence includes automated indexed-doc and routed-doc coverage.
- Updated [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) so release documentation gates include indexed-doc and routed-doc agreement.
- Updated [`../README.md`](../README.md) so documentation rules point to `pnpm docs:check` as the combined index, routing, and link gate.

**Contradictions found**

No missing canonical-doc coverage was found. The current tree has 154 canonical Markdown docs under `docs/`, and all are indexed in `docs/README.md`, indexed in `docs/START-HERE.md`, and routed through `docs/_meta/agent-routing.json`.

The explicit boundary remains:

```text
indexed-doc validation is a documentation control
routed-doc validation is a documentation control
runtime Product Truth enforcement is not implemented
runtime release-evidence bundle enforcement is not implemented
```

**Validation commands**

```bash
node scripts/validate-agent-control.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/validate-agent-control.mjs` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, and 154 indexed docs.
- `pnpm docs:check` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 154 indexed docs, and local Markdown links across 171 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- The validator proves presence in indexes and routing, not semantic agreement. Manual semantic sweeps remain required for product behavior, evidence, launch claims, user-opinion signals, automation scope, and advanced-feature changes.
- The validator does not classify document quality, examples, diagrams, or stale content; those remain governed by the documentation-quality standard and semantic drift review.

**Next revisit trigger**

Refresh this record when documentation files move, entry-point policy changes, generated docs are introduced, document retirement rules change, or runtime Product Truth/release-evidence storage replaces specification-mode documentation-change evidence.

## DCE-2026-07-18-012 - Requirement traceability coverage validation

**Change date:** 2026-07-18
**Change status:** documentation validation hardening, not runtime implementation
**Authoring mode:** agent-assisted documentation-control change with local validation

**Reason for change**

Research's documentation governance already requires every canonical requirement in [`../_meta/requirements.json`](../_meta/requirements.json) to have a human-readable traceability path through [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md). The validator checked requirement ownership, prefixes, routing domains, and status counts, but it did not fail when a newly added requirement was missing from the traceability matrix.

That gap matters because `_meta` JSON is not the reader-facing contract. Product owners, implementation agents, reviewers, support, and release approvers need a human-readable path from each requirement ID to governing contracts and validation surfaces.

**Control change**

- Updated [`../../scripts/validate-agent-control.mjs`](../../scripts/validate-agent-control.mjs) to parse requirement IDs from [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md).
- Added support for readable grouped ranges such as `AUTO-001` through `AUTO-006`.
- Added validation that every requirement in [`../_meta/requirements.json`](../_meta/requirements.json) appears in the traceability matrix.
- Added validation that every requirement ID referenced by the traceability matrix exists in [`../_meta/requirements.json`](../_meta/requirements.json).
- Updated validation output to report traceability-ID coverage alongside required files, slices, requirements, tooling decisions, and indexed docs.

**Documents changed**

- Updated [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md) so baseline validation explicitly covers requirement traceability.
- Updated [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md) so review and launch gates require requirement-traceability coverage.
- Updated [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md) so release semantic checks include requirement-traceability coverage.
- Updated [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md) so documentation governance production evidence includes automated requirement-traceability coverage.
- Updated [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) so release documentation gates include traceability matrix agreement.
- Updated [`../README.md`](../README.md) so documentation rules state that every requirement must appear in the human-readable traceability matrix before `pnpm docs:check` passes.

**Contradictions found**

No missing or unknown requirement IDs were found. The current registry has 124 requirements, and the traceability matrix represents all 124 through exact IDs or readable ranges.

The explicit boundary remains:

```text
requirement-traceability validation is a documentation control
traceability coverage does not prove semantic correctness
runtime Product Truth enforcement is not implemented
runtime release-evidence bundle enforcement is not implemented
```

**Validation commands**

```bash
node scripts/validate-agent-control.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/validate-agent-control.mjs` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 154 indexed docs, and 124 traceability IDs.
- `pnpm docs:check` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 154 indexed docs, 124 traceability IDs, and local Markdown links across 171 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- This validator proves that requirement IDs are represented, not that each matrix row names the complete or best governing contract set. Manual semantic sweeps remain required for requirement ownership, validation surfaces, launch claims, user-opinion evidence, automation scope, advanced-feature scope, and implementation-status changes.
- Runtime Product Truth and release-evidence storage are still absent, so this remains a specification-mode documentation control.

**Next revisit trigger**

Refresh this record when requirement ID syntax changes, the traceability matrix format changes, requirement grouping rules change, generated traceability output is introduced, or runtime Product Truth/release-evidence storage replaces specification-mode traceability checks.

## DCE-2026-07-18-013 - START-HERE read-order validation

**Change date:** 2026-07-18
**Change status:** documentation navigation validation hardening, not runtime implementation
**Authoring mode:** agent-assisted documentation-control change with local validation

**Reason for change**

[`../START-HERE.md`](../START-HERE.md) is the canonical read-order map for humans and agents entering the repository. Prior validation proved that canonical documents were linked from `START-HERE`, but it did not prove that the ordered list itself stayed usable. A duplicate entry, skipped number, repeated target, or list item without a concrete local document link could still pass local link validation while making the onboarding path harder to follow.

This change turns the read-order quality bar into an automated check.

**Control change**

- Updated [`../../scripts/validate-agent-control.mjs`](../../scripts/validate-agent-control.mjs) to validate numbered read-order entries in [`../START-HERE.md`](../START-HERE.md).
- Added validation that numbered entries are contiguous from `1` without gaps or repeats.
- Added validation that each numbered read-order entry contains exactly one local Markdown link.
- Added validation that no numbered read-order entry duplicates another target.
- Updated validation output to report the number of read-order entries validated.

**Documents changed**

- Updated [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md) so baseline validation explicitly includes contiguous, duplicate-free `START-HERE` read-order entries.
- Updated [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md) so review and launch gates require `START-HERE` read-order validation.
- Updated [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md) so release semantic checks include read-order validation.
- Updated [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md) so documentation governance production evidence includes automated read-order coverage.
- Updated [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) so release documentation gates include `START-HERE` read-order validation.
- Updated [`../README.md`](../README.md) so documentation rules state that canonical docs must stay indexed in a contiguous duplicate-free `START-HERE` read order.

**Contradictions found**

No read-order defect was found. The current [`../START-HERE.md`](../START-HERE.md) file has 156 numbered read-order entries, all sequential, all with exactly one local document link, and no duplicate numbered targets.

The explicit boundary remains:

```text
START-HERE read-order validation is a documentation navigation control
read-order validation does not prove semantic correctness
runtime Product Truth enforcement is not implemented
runtime release-evidence bundle enforcement is not implemented
```

**Validation commands**

```bash
node scripts/validate-agent-control.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/validate-agent-control.mjs` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 154 indexed docs, 124 traceability IDs, and 156 read-order entries.
- `pnpm docs:check` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 154 indexed docs, 124 traceability IDs, 156 read-order entries, and local Markdown links across 171 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- This validator proves ordered navigation shape, not whether the chosen reading order is optimal for every implementation slice. Slice-specific required reading remains governed by [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json), [`../_meta/agent-routing.json`](../_meta/agent-routing.json), and manual semantic review.
- Runtime Product Truth and release-evidence storage are still absent, so this remains a specification-mode documentation control.

**Next revisit trigger**

Refresh this record when `START-HERE` stops using a single numbered read-order list, generated navigation is introduced, canonical entry-point policy changes, or runtime Product Truth/release-evidence storage replaces specification-mode documentation-change evidence.

## DCE-2026-07-18-014 - README directory-map validation

**Change date:** 2026-07-18
**Change status:** documentation navigation validation hardening, not runtime implementation
**Authoring mode:** agent-assisted documentation-control change with local validation

**Reason for change**

[`../README.md`](../README.md) is the human documentation hub. Prior validation proved that canonical documents were indexed, but it did not prove that first-level `docs/` directories stayed represented in the directory map. A new documentation directory could pass local link validation and even contain routed documents while remaining invisible in the human directory overview, or an obsolete directory-map row could point to a missing directory.

This change turns directory-map coverage into an automated check.

**Control change**

- Updated [`../../scripts/validate-agent-control.mjs`](../../scripts/validate-agent-control.mjs) to validate the [`../README.md`](../README.md) `## Directory map` table.
- Added validation that every directory-map row names one first-level `docs/` directory.
- Added validation that every first-level `docs/` directory has exactly one directory-map row.
- Added validation that no directory-map row points to a missing directory or duplicates another row.
- Added validation that each directory-map row has concrete non-placeholder purpose text.
- Updated validation output to report the number of directory-map entries validated.

**Documents changed**

- Updated [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md) so update protocol, drift definitions, baseline validation, and quality bars include README directory-map coverage.
- Updated [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md) so review and launch gates include README directory-map validation.
- Updated [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md) so release semantic checks include README directory-map validation.
- Updated [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md) so documentation governance production evidence includes automated README directory-map coverage.
- Updated [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) so release documentation gates include README directory-map validation.
- Updated [`../README.md`](../README.md) so documentation rules state that first-level docs directories must stay mapped with concrete purpose text.

**Contradictions found**

No directory-map defect was found. The current [`../README.md`](../README.md) directory map has 10 entries, and the current `docs/` tree has 10 first-level directories. Every mapped directory exists, every first-level docs directory is mapped, and each row carries purpose text.

The explicit boundary remains:

```text
README directory-map validation is a documentation navigation control
directory-map validation does not prove semantic correctness
runtime Product Truth enforcement is not implemented
runtime release-evidence bundle enforcement is not implemented
```

**Validation commands**

```bash
node scripts/validate-agent-control.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/validate-agent-control.mjs` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 154 indexed docs, 124 traceability IDs, and 156 read-order entries.
- `pnpm docs:check` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 154 indexed docs, 124 traceability IDs, 156 read-order entries, and local Markdown links across 171 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- This validator proves first-level directory-map shape, not whether the purpose text is the best possible information architecture for every reader. Manual documentation taxonomy and semantic drift reviews remain required.
- Runtime Product Truth and release-evidence storage are still absent, so this remains a specification-mode documentation control.

**Next revisit trigger**

Refresh this record when generated navigation replaces the hand-maintained README directory map, nested documentation directories become canonical navigation units, directory-purpose metadata moves into `_meta`, or runtime Product Truth/release-evidence storage replaces specification-mode documentation-change evidence.

## DCE-2026-07-18-015 - Implementation status-ledger validation

**Change date:** 2026-07-18
**Change status:** documentation status validation hardening, not runtime implementation
**Authoring mode:** agent-assisted documentation-control change with local validation

**Reason for change**

[`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md) and [`implementation-status.md`](implementation-status.md) are the human status ledgers that tell agents and owners whether Research is a specification, partial implementation, validated runtime, or production system. Prior validation checked requirement and slice counts in `PROJECT_STATUS.md`, but it did not prove that both ledgers matched the machine-readable build plan for maturity, runtime state, next slice ID, or next slice title.

This change turns status-ledger agreement into an automated check.

**Control change**

- Updated [`../../scripts/validate-agent-control.mjs`](../../scripts/validate-agent-control.mjs) to validate status-ledger alignment against [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json).
- Added validation that [`../../PROJECT_STATUS.md`](../../PROJECT_STATUS.md) and [`implementation-status.md`](implementation-status.md) match the build-plan repository state.
- Added validation that both status ledgers match the build-plan runtime state.
- Added validation that both status ledgers name the build-plan next slice ID and next slice title.
- Updated validation output to report the number of status ledgers validated.

**Documents changed**

- Updated [`implementation-status.md`](implementation-status.md) so the next-slice header includes both `foundation-01` and the slice title, `Monorepo and quality foundation`.
- Updated [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md) so drift definitions, baseline validation, and quality bars include status-ledger alignment.
- Updated [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md) so review and launch gates require status-ledger validation.
- Updated [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md) so release semantic checks include status-ledger validation.
- Updated [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md) so documentation governance production evidence includes automated status-ledger coverage.
- Updated [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) so release documentation gates include status-ledger validation.
- Updated [`../README.md`](../README.md) so documentation rules state that status ledgers must stay synchronized with the implementation build plan.

**Contradictions found**

No status-ledger defect was found. The current build plan reports `implementation-ready-specification`, `not-scaffolded`, and next slice `foundation-01`; the two human status ledgers now expose the matching human-readable maturity, runtime state, next slice ID, and next slice title.

The explicit boundary remains:

```text
status-ledger validation is a documentation status control
status-ledger validation does not prove runtime implementation
runtime Product Truth enforcement is not implemented
runtime release-evidence bundle enforcement is not implemented
```

**Validation commands**

```bash
node scripts/validate-agent-control.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/validate-agent-control.mjs` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 2 status ledgers, 154 indexed docs, 124 traceability IDs, and 156 read-order entries.
- `pnpm docs:check` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 2 status ledgers, 154 indexed docs, 124 traceability IDs, 156 read-order entries, and local Markdown links across 171 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- This validator proves exact status-ledger agreement for repository state, runtime state, next slice ID, and next slice title. It does not prove every prose sentence in README, roadmap, product contracts, or architecture contracts is semantically aligned with runtime maturity. Manual semantic drift review remains required for launch claims and broad status language.
- Runtime Product Truth and release-evidence storage are still absent, so this remains a specification-mode documentation control.

**Next revisit trigger**

Refresh this record when implementation status moves beyond specification mode, slice status values change, generated status ledgers replace hand-authored Markdown, or runtime Product Truth/release-evidence storage replaces specification-mode documentation-change evidence.

## DCE-2026-07-18-016 - Choice-respecting AI surface signal refresh

**Change date:** 2026-07-18
**Change status:** documentation signal refresh and launch-evidence hardening, not runtime implementation
**Authoring mode:** agent-assisted documentation-control change with current-source review and local validation

**Reason for change**

Current OS, browser, workspace-agent, and public-opinion signals show two simultaneous pressures: advanced AI surfaces are moving toward connected context, task continuity, scheduled or API-triggered work, and browser-level assistance, while users and researchers continue to raise concerns about accuracy, privacy, security, approval fatigue, forced defaults, migration resets, and loss of control.

Research already rejected ambient capture and broad autonomy. The documentation still needed one explicit cross-doc guardrail: advanced AI surfaces must preserve user choice instead of treating opt-in, disable, reset, export, and policy-managed controls as secondary settings polish.

**Source refresh**

- Reviewed OpenAI Workspace Agents launch and API-trigger guidance for connected context, reusable work setup, tool/app actions, approvals, schedules, and administrative control signals.
- Reviewed Microsoft Copilot Journeys and Edge AI browsing updates for task-resume and browser AI direction.
- Reviewed Mozilla Research Over the Edge 2.0 for browser-choice, migration reset, forced-action, preselection, nagging, and AI-interface routing risks.
- Reviewed Stack Overflow 2025 Developer Survey AI signals and Pew 2025-2026 AI attitude signals for adoption-versus-trust, accuracy, privacy, security, worry, overwhelm, and control concerns.
- Reviewed recent agent-permission and agent-human security research for runtime approval, cognitive burden, approval fatigue, scope creep, and structural enforcement concerns.
- Reviewed public practitioner discussions about local agents, system access, AI browsers, and tab-context value as directional signals only.

**Decision**

Accepted "choice-respecting AI surfaces" as a specification-mode advanced-product guardrail:

- AI surfaces must be opt-in where material, reversible, inspectable, exportable where policy allows, policy-explainable, and non-coercive.
- Disabled or narrowed AI-surface choices must survive onboarding, import, migration, browser extension install, native companion install, provider change, and Organization policy change unless an explicit user action or administrator policy changes them.
- Research must not force a browser, assistant, companion, provider, notification-summary, proactive-suggestion, automation-recommendation, or default-setting path through onboarding, settings, install, migration, or upgrade flows.
- Nag loops, trick wording, preselected reversals, silent re-enablement, and migration resets that undo disabled AI behavior are blocked.

**Requirements and slices affected**

- `PREF-001` and `PREF-002` for Preference Center, adaptation mode, reset, export, policy-managed mode, and preference invalidation.
- `NATIVE-001` and `NATIVE-002` for native companion and browser-extension activation, grants, revocation, and no forced browser or assistant path.
- `APPROVAL-001`, `APPROVAL-002`, and `READY-003` for approval burden, delegated trust, hard stops, runtime permission understanding, and human-AI interaction review.
- `BENCH-001` through `BENCH-004` and `READY-004` for benchmark, frontier-signal, advanced-differentiation, customer-claim, and launch-evidence boundaries.
- `ADMIN-001` and `ADMIN-002` for Project settings visibility, disabled reasons, migration/import preservation, audit, and policy-managed state.
- Owner slices remain `workspace-04`, `enterprise-25`, `conformance-26`, and affected later implementation slices. `foundation-01` remains the next eligible slice and is not widened by this documentation-only change.

**Documents changed**

- Updated [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md) with `SSD-2026-07-18-009` through `SSD-2026-07-18-011` for choice guardrails, trust evidence floors, and structural permission enforcement.
- Updated [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md), [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md), [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md), and [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md) so the signal is governed through watch, frontier, differentiation, and opportunity records.
- Updated [`../01-product/adaptive-personalization-and-preference-controls.md`](../01-product/adaptive-personalization-and-preference-controls.md), [`../02-architecture/adaptive-preference-learning-and-interface-policy.md`](../02-architecture/adaptive-preference-learning-and-interface-policy.md), and [`../01-product/project-settings-and-administration.md`](../01-product/project-settings-and-administration.md) so AI-surface choice is explicit in preference policy, settings controls, migration/import behavior, and launch criteria.
- Updated [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) with `UOC-013` for choice-comprehension, migration/import preservation, admin policy, accessibility, and no-nag evidence.
- Updated [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) with `CCL-016` so "users stay in control", "respects choice", "no lock-in", "non-coercive AI", and similar claims remain blocked until scoped evidence exists.
- Updated [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md), [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md), and [`../07-reference/official-references.md`](../07-reference/official-references.md) so readiness, release evidence, and reference routing include the new guardrail.

**Contradictions found**

No governing requirement conflict was found. Existing requirements already cover the guardrail through preference, native companion, delegated trust, admin, benchmark, human-AI review, and release-claim controls, so no new requirement ID or implementation slice was introduced.

The explicit boundary remains:

```text
choice-respecting AI surfaces are a specification and launch-evidence guardrail
runtime PreferencePolicy enforcement is not implemented
runtime Project settings are not implemented
runtime Product Truth enforcement is not implemented
runtime release-evidence bundle enforcement is not implemented
public and practitioner opinions are directional signals only
```

**Validation commands**

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
node scripts/validate-agent-control.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included required reading for the current documentation-control context.
- `node scripts/validate-agent-control.mjs` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 2 status ledgers, 154 indexed docs, 124 traceability IDs, and 156 read-order entries.
- `pnpm docs:check` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 2 status ledgers, 154 indexed docs, 124 traceability IDs, 156 read-order entries, and local Markdown links across 171 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- This change does not implement Project settings, PreferencePolicy enforcement, native companion controls, browser extension controls, Workspace Agent surfaces, runtime Product Truth, runtime release evidence, or CustomerClaimEvidenceRecords.
- Public and practitioner signals do not prove user preference, market prevalence, trust, or launch readiness. They only justify the specification guardrail and the required evidence floor.
- Future implementation slices must still create runtime tests, migration/import preservation checks, accessibility evidence, admin policy walkthroughs, HumanAIInteractionReviews, user studies, and release evidence before any stronger-than-specification claim is allowed.

**Next revisit trigger**

Refresh this record when browser or OS AI defaults change, Workspace Agent capabilities move from preview to broader availability, user-choice or browser-choice research changes, provider permission models change, customer evidence contradicts the guardrail, or runtime Product Truth and release-evidence storage replace specification-mode documentation-change evidence.

## DCE-2026-07-18-017 - Typed Project action surface signal refresh

**Change date:** 2026-07-18
**Change status:** documentation signal refresh and launch-evidence hardening, not runtime implementation
**Authoring mode:** agent-assisted documentation-control change with current-source review and local validation

**Reason for change**

Current OS, assistant, connected-app, and model-tool ecosystems are moving toward typed, machine-readable actions. Research already had command descriptors, safe mutations, API/SDK/MCP boundaries, and Automation Recipes, but the specification did not yet name one explicit cross-surface action catalog that keeps Command Center, API, SDK, CLI, MCP, native companion, browser extension, connected-app, and recipe projections aligned.

The gap mattered because prompt-only action names, connector-provided tool descriptions, source-defined actions, generated handler code, or overly large schemas could otherwise become a second action authority. The documentation now defines a Project Action Surface as a server-owned projection over canonical Project commands and domain services.

**Source refresh**

- Reviewed Apple App Intents and App Intents adoption guidance for app-owned discoverable actions and system-facing experiences.
- Reviewed Microsoft App Actions, action JSON definitions, and caller filtering guidance for strongly typed app actions, inputs, outputs, invocation metadata, and the need for runtime restrictions beyond discovery filtering.
- Reviewed OpenAI Apps SDK tool-planning, MCP server, and reference documentation for model-facing tool contracts, input and output schemas, structured content, tool metadata, read-only and destructive hints, and multi-client projections.
- Reviewed Gemini Connected Apps and Workspace app help for permissioned connected-app behavior, app selection, and source/accuracy limitations.
- Reviewed public practitioner and developer discussions about Power Automate Copilot flow-authoring context gaps, Apple Shortcuts authoring friction, App Intents opacity, MCP structured outputs, MCP schema context budgets, and MCP tool-description regression testing as directional signals only.

**Decision**

Accepted "Project Action Surface" as the canonical specification term for typed Project action descriptors and cross-surface projections:

- Action descriptors include target, effect, source scope, authorization, side-effect class, approval class, expected version, disabled reason, idempotency, Activity, Operation, ActionCard, audit, and recovery metadata before material execution.
- Compact action catalogs and lazy-loaded schemas are allowed only when they preserve policy, authorization, disabled reasons, side-effect class, approval class, expected-version, idempotency, and recovery behavior.
- Natural language may search, select, parameterize, and draft actions, but cannot create executable handler names or bypass descriptor validation.
- Tool descriptions, compact metadata, connector descriptions, and action JSON are treated as behavior-bearing contracts that require regression tests when changed.
- Source content, connector payloads, generated summaries, prompt-only handler names, OS assistants, connected apps, MCP clients, native companions, browser extensions, and Automation Recipes cannot define, override, hide, widen, or bypass Project actions.

Rejected treating action count, tool count, schema length, connector breadth, or app-action presence as value proof without same-task outcome, safety, latency, approval-burden, recovery, accessibility, and user-comprehension evidence.

**Requirements and slices affected**

- `UX-004` for typed command action safety, authorization-filtered catalogs, deterministic preflight, expected versions, idempotency, approval receipts, accessibility labels, ActivityEvents, and content-minimized telemetry.
- `AUTO-004` and `AUTO-005` for Automation Recipe descriptor binding, action-catalog composition, simulation, activation safety, expected versions, and hidden-side-effect prevention.
- `API-001` and `API-002` for asynchronous Operations, cancellation, stable errors, idempotency, and expected-base-version concurrency.
- `NATIVE-001` and `NATIVE-002` for optional native and browser companion projections that cannot bypass server-owned authorization.
- `FEEDBACK-004`, `BENCH-003`, `BENCH-004`, `READY-003`, and `READY-004` for public-signal handling, advanced differentiation benchmarking, frontier-signal watch, human-AI interaction review, and customer-claim boundaries.
- `TEL-010`, `ADB-008`, `UOC-014`, and `CCL-017` were added or updated as documentation-control records and matrix rows for action-surface telemetry, benchmark, user-opinion coverage, and blocked claim language.
- Owner slices remain `workspace-04`, `platform-22`, `commercial-24`, `enterprise-25`, and `conformance-26`. `foundation-01` remains the next eligible slice and is not widened by this documentation-only change.

**Documents changed**

- Updated [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md), [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md), [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md), and [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md) so typed action-surface signals are routed through foundation policy, opportunity scoring, and explicit non-actions.
- Updated [`../01-product/command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md) and [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md) so Project actions and recipe steps bind to the Project Action Surface.
- Updated [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md), [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md), and [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md) so descriptor projection, compact metadata, lazy-loaded schema behavior, recipe binding, and API/SDK/CLI/MCP/native/browser/connected-app parity are governed in architecture.
- Updated [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md), [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md), [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md), [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md), [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md), [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md), [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md), [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md), [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md), and [`test-strategy-and-quality-gates.md`](test-strategy-and-quality-gates.md) so launch gates, telemetry, benchmark, user-opinion, claim, readiness, and test evidence include the action-surface control.
- Updated [`../07-reference/terminology.md`](../07-reference/terminology.md) and [`../07-reference/official-references.md`](../07-reference/official-references.md) so the canonical term and reviewed references are discoverable.

**Contradictions found**

No governing requirement conflict was found. Existing requirements already cover typed command safety, API safety, recipe safety, native/browser projection safety, benchmark boundaries, frontier-signal control, human-AI review, and customer-claim evidence. No new requirement ID or implementation slice was introduced.

The explicit boundary remains:

```text
Project Action Surface is a specification and documentation-control term
runtime Project Action Surface descriptor registry is not implemented
runtime Command Center action routing is not implemented
runtime API/SDK/CLI/MCP/native/browser/connected-app projections are not implemented
runtime Automation Recipe action-catalog binding is not implemented
runtime projection parity, compact metadata, and lazy-loaded schema tests are not implemented
runtime Product Truth and release-evidence enforcement are not implemented
public and practitioner opinions are directional signals only
```

**Validation commands**

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
node scripts/validate-agent-control.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included required reading for the current documentation-control context.
- `node scripts/validate-agent-control.mjs` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 2 status ledgers, 154 indexed docs, 124 traceability IDs, and 156 read-order entries.
- `pnpm docs:check` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 2 status ledgers, 154 indexed docs, 124 traceability IDs, 156 read-order entries, and local Markdown links across 171 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- This change does not implement a descriptor registry, command router, API/SDK/CLI/MCP projection service, native companion, browser extension, connected-app adapter, Automation Recipe runtime, projection parity tests, compact-schema loader, or action-catalog user study.
- Official platform documentation informs the specification pattern but does not prove Research runtime capability, customer value, or launch readiness.
- Public practitioner signals do not prove market prevalence or statistically representative demand. They only justify the specification guardrail and evidence floor.
- Future implementation slices must still create runtime schema tests, prompt-injection fixtures, descriptor parity fixtures, stale-descriptor recovery tests, disabled-reason accessibility evidence, user-comprehension studies, security/privacy reviews, Product Truth decisions, and release evidence before any stronger-than-specification claim is allowed.

**Next revisit trigger**

Refresh this record when OS/app-action, connected-app, Apps SDK/MCP, or browser-extension permission models change; when provider documentation changes descriptor, metadata, schema, or caller-filtering behavior; when customer evidence contradicts the action-surface guardrail; or when runtime Project Action Surface, Command Center, API/SDK/MCP, native/browser, recipe, Product Truth, and release-evidence storage replace specification-mode documentation-change evidence.

## DCE-2026-07-18-018 - Project Health causal repair signal refresh

**Change date:** 2026-07-18
**Change status:** documentation signal refresh and launch-evidence hardening, not runtime implementation
**Authoring mode:** agent-assisted documentation-control change with current-source review and local validation

**Reason for change**

Current diagnostic, observability, RCA, activity-log, and AI-assisted repair tools show a strong market direction toward explaining failures and suggesting fixes. The existing Research docs already specified Project Health and safe repair, but they did not yet make causal lineage, false-cause controls, diagnostic-waste budgets, trace-to-finding proof, or root-cause claim boundaries explicit enough for production.

The gap mattered because raw traces, telemetry volume, green success states, and model-written explanations can make users think a system knows why something failed when it only knows what happened. Research should differentiate by turning authorized Project records into reviewable causal HealthFindings, not by becoming a raw trace wall or unsupported self-healing agent.

**Source refresh**

- Reviewed Microsoft PC insights and Copilot troubleshooters for consented diagnostics, user control, and non-autonomous repair boundaries.
- Reviewed LangSmith Observability and Evaluation for agent tracing, trajectory inspection, production behavior, and online or offline evaluation.
- Reviewed OpenTelemetry Signals and GenAI observability guidance for trace, metric, log, baggage, model, token, and tool telemetry boundaries, including prompt/tool content minimization.
- Reviewed Sentry Seer, GitHub security and quality AI features, and Microsoft Copilot Autofix for current RCA, remediation, PR/fix suggestion, and human-review boundaries.
- Reviewed Zapier agent activity and statuses for agent run inspection, activity detail, status visibility, and need-action/failure state.
- Reviewed Causely and Traccia research as current research signals for causal history, execution lineage, semantic guardrails, and trace governance.
- Reviewed public practitioner discussions of LangChain debugging gaps, production agent silent failures, trajectory evaluation, causal history, action ledgers, auditability, and observability noise or cost as directional signals only.

**Decision**

Accepted "Project Health and Causal Repair" as a specification-mode advanced differentiator:

- HealthFindings preserve observed signal, suspected cause, confidence, counterevidence, unknowns, false-cause risk, diagnostic-waste class, repair eligibility, approval class, and outcome observation.
- HealthLineageEdges connect authorized Project state, Activity, Operations, telemetry aggregates, run trajectories, Product Truth, release evidence, support diagnostics, and AutomationFailureRecoveryRecords without creating factual evidence for user documents.
- General Product Health analytics cannot store raw prompts, completions, tool payloads, source excerpts, document bodies, connector payloads, screenshots, clipboard content, browser history, operating-system state, raw OpenTelemetry span bodies, or raw GenAI trace content.
- Raw diagnostic content may enter only explicit, scoped, redacted, expiring, customer-visible diagnostic workflows where policy allows.
- Repeated false causes, unresolved unknowns, repair failures, and diagnostic waste must feed Product Truth, runbooks, fixtures, documentation defects, or implementation backlog instead of hidden retries.

Rejected raw trace walls as the Health product, telemetry volume as value proof, model-only root-cause explanations, autonomous background self-healing, support-only repair paths, generic OS troubleshooting, and customer-facing "AI root cause" or "self-healing Projects" wording before runtime evidence exists.

**Requirements and slices affected**

- `HEALTH-001` and `HEALTH-002` for Project Health Console, HealthSnapshots, HealthSignals, HealthLineageEdges, HealthFindings, RepairPlaybooks, RepairRuns, SupportDiagnosticBundles, support-safe diagnostics, and repair outcomes.
- `AUTO-002`, `AUTO-006`, `SUPPORT-001`, `SUPPORT-002`, `BENCH-003`, `BENCH-004`, `READY-003`, and `READY-004` for automation debugger, recovery, support diagnostics, advanced differentiation, frontier watch, human-AI review, and claim evidence.
- `TEL-007`, `ADB-009`, `UOC-007`, and `CCL-008` were added or updated as documentation-control records and matrix rows for telemetry, benchmark, user-opinion coverage, and claim boundaries.
- Owner slices remain `workspace-04`, `commercial-24`, `enterprise-25`, and `conformance-26`. `foundation-01` remains the next eligible slice and is not widened by this documentation-only change.

**Documents changed**

- Updated [`../01-product/project-health-and-repair.md`](../01-product/project-health-and-repair.md) and [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md) to make causal health, HealthLineageEdges, counterevidence, unknowns, false-cause risk, diagnostic-waste, trace-to-finding, content minimization, and repair outcome proof explicit.
- Updated [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md) and [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md) so Project Health and Causal Repair is an accepted advanced differentiator and opportunity with explicit non-actions.
- Updated [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md), [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md), and [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md) with `SSD-2026-07-18-013`, frontier posture, and `ADB-009`.
- Updated [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md), [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md), and [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md) so user research, claims, and telemetry block overclaims and prohibit raw diagnostic content by default.
- Updated [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md), [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md), and [`../07-reference/official-references.md`](../07-reference/official-references.md) so readiness, release evidence, and reference routing include causal health and repair proof.

**Contradictions found**

No governing requirement conflict was found. Existing requirements already cover Project Health, support diagnostics, automation recovery, telemetry, benchmark, human-AI interaction review, and customer-claim evidence. No new requirement ID or implementation slice was introduced.

The explicit boundary remains:

```text
Project Health and Causal Repair is a specification and documentation-control term
runtime Project Health is not implemented
runtime HealthLineageEdges are not implemented
runtime trace-to-finding benchmarks are not implemented
runtime RepairPlaybooks and RepairRuns are not implemented
runtime Product Truth and release-evidence enforcement are not implemented
public and practitioner opinions are directional signals only
```

**Validation commands**

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
node scripts/validate-agent-control.mjs
pnpm docs:check
git diff --check
```

**Validation results**

- `node scripts/agent-status.mjs` reported `implementation-ready-specification`, runtime `not-scaffolded`, `0/26` completed slices, and `foundation-01` ready.
- `node scripts/agent-context.mjs` reported `foundation-01` eligible and included required reading for the current documentation-control context.
- `node scripts/validate-agent-control.mjs` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 2 status ledgers, 154 indexed docs, 124 traceability IDs, and 156 read-order entries.
- `pnpm docs:check` validated 17 entry files, 26 slices, 124 requirements, 19 tooling decisions, 10 directory-map entries, 2 status ledgers, 154 indexed docs, 124 traceability IDs, 156 read-order entries, and local Markdown links across 171 files.
- `git diff --check` exited successfully with only LF-to-CRLF working-copy warnings.

**Remaining limitations**

- This change does not implement Project Health runtime, trace ingestion, HealthLineageEdges, repair playbooks, repair execution, SupportDiagnosticBundle storage, support access, Product Truth, release-evidence storage, telemetry collectors, benchmark runs, user studies, or CustomerClaimEvidenceRecords.
- Official diagnostic and observability sources inform the specification pattern but do not prove Research runtime capability, customer value, or launch readiness.
- Public practitioner signals do not prove market prevalence or statistically representative demand. They justify the specification guardrail and evidence floor only.

**Next revisit trigger**

Refresh this record when observability, agent activity, RCA, autofix, OpenTelemetry GenAI, support-diagnostic, or OS diagnostic references change; when customer evidence contradicts the causal-repair guardrail; or when runtime Project Health, Product Truth, telemetry, benchmark, support, and release-evidence storage replace specification-mode documentation-change evidence.

## Documentation update rule

Changes to this log format, evidence status, semantic drift packet storage, validation result policy, or retained documentation-change records must update:

- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md)
- [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md)
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- entry indexes and required-reading lists
