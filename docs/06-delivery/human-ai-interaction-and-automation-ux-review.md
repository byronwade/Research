# Human-AI interaction and automation UX review

**Review date:** 2026-07-18
**Status:** delivery review and launch-evidence contract, not runtime behavior

Research's advanced surfaces depend on AI behavior, automation, permissions, progress state, and recovery paths that users must understand before they trust them. This contract defines the review gate that catches human-AI interaction and automation UX failures before prototype, dogfood, beta, benchmark, or release evidence can claim that a surface is usable.

This review is required because heuristic language scattered across product docs is not enough. Each AI or automation surface needs a concrete review record with findings, owners, affected requirements, affected documents, Product Truth links, and validation follow-up. The review complements real user research; it never replaces observed-task validation, benchmark runs, runtime evidence, accessibility evidence, security evidence, or release evidence.

## Source basis

Official and methodology references reviewed on 2026-07-18:

- [Microsoft Research Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/) and the [Microsoft HAX Toolkit guidelines](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/) for evidence-based AI UX behavior during initial interaction, regular interaction, failure, and change over time.
- [Microsoft HAX Workbook](https://www.microsoft.com/en-us/haxtoolkit/workbook/) for cross-functional planning of UX, AI, data, engineering, and product requirements before implementation hardens.
- [Google People + AI Guidebook](https://pair.withgoogle.com/guidebook/) and [Explainability + Trust](https://pair.withgoogle.com/chapter/explainability-trust/) for trust calibration, explanations, confidence communication, and user understanding of AI capabilities and limits.
- [Nielsen Norman Group 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) and [How to Conduct a Heuristic Evaluation](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/) for systematic expert review, independent evaluator practice, and the limit that heuristic evaluation complements but does not replace user research.
- [Nielsen Norman Group on AI hallucinations](https://www.nngroup.com/articles/ai-hallucinations/), [Magic-8-Ball thinking](https://www.nngroup.com/articles/ai-magic-8-ball/), and [smarts over sentience](https://www.nngroup.com/articles/smarts-emotion-trust-ai/) for uncertainty communication, verification support, over-trust risk, and avoiding personality cues that reduce reliability for factual work.
- [Apple Human Interface Guidelines: Generative AI](https://developer.apple.com/design/human-interface-guidelines/generative-ai) and [Machine learning](https://developer.apple.com/design/human-interface-guidelines/machine-learning) for platform UX expectations around AI-powered and ML-powered features.
- [How Agents Ask for Permission: User Permissions for AI Agents, from Interfaces to Enforcement](https://arxiv.org/html/2607.13718v1) and [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/html/2605.24309v1) for current agent permission, approval, scope, cognitive-load, and enforcement research.

Public user-opinion and practitioner signals about waiting fatigue, approval fatigue, brittle agents, privacy concerns, source trust, and automation debugging are governed by [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md), [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md), [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md), and the foundation audits. They are directional discovery evidence only.

## Authority and relationship

This contract governs `READY-003`. It feeds:

- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md) for observed-task studies, participant coverage, dogfood limits, perceived-usability measures, severity, and evidence packages;
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) for surface-by-surface coverage status, blocked claims, target segments, and synthetic-user boundaries before reviewed AI and automation surfaces can rely on user evidence;
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md) for repeatable scenario benchmarks and good-event definitions;
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md) for same-task comparator baselines and anti-metrics when reviewed surfaces support advanced or better-than claims;
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md) for FrontierSignalReview records when a fresh OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, or user-opinion signal affects the reviewed surface;
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md) for OutcomeMetricDefinitions, StrategicBetScorecards, baselines, anti-metrics, and OutcomeReviews that prove reviewed AI and automation surfaces improve measurable outcomes;
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md) for ProductTelemetryEventSpecs, prohibited telemetry, event-quality checks, and telemetry-backed claim limits for reviewed AI and automation surfaces;
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md) for AutomationFailureRecoveryRecords, recovery severity, safe next actions, disabled-action reasons, side-effect reconciliation, quiet-wrong outcome handling, and recovery learning artifacts;
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) for CustomerClaimEvidenceRecords, allowed language, blocked language, and release evidence floors for AI, agentic, automation, permission, progress, trust, and outcome claims;
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md) for prototype, dogfood, beta, adoption, deferral, kill, and non-action controls;
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) for production promotion;
- [`../01-product/automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md), [`../01-product/delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md), and [`../01-product/latency-aware-progressive-workflows.md`](../01-product/latency-aware-progressive-workflows.md) for user-facing automation, approvals, and progress behavior;
- [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md), [`../02-architecture/progressive-delivery-and-fast-path-cache-policy.md`](../02-architecture/progressive-delivery-and-fast-path-cache-policy.md), and [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md) for structural enforcement.

If this review finds a contradiction between product intent, architecture enforcement, user research, benchmark evidence, implementation status, or launch claims, Product Truth records the contradiction before the affected surface can pass.

## Review scope

A `HumanAIInteractionReview` is required for any user-facing surface that includes one or more of:

- generated answers, generated documents, generated artifacts, or generated summaries;
- source selection, citation support, confidence, uncertainty, stale labels, contradiction labels, or publication blockers;
- plan generation, research orchestration, model council, agent handoff, or multi-step tool use;
- Command Center actions, Work Packets, next actions, Project Health repairs, Scenario Lab simulations, Reversible Work recovery, or Product Atlas suggestions;
- automation registry, recipes, dry-runs, run debugging, outcome scorecards, adaptive routing, scheduled work, or repeated-work capture;
- delegated trust, approvals, approval batches, permissions, native companion grants, connector scopes, support access, external writes, billing effects, publication, deletion, or administration;
- progressive delivery, Fast Paths, SpeculativePreparation, resumable streams, background work, cancellation, or stale and partial results.

Simple static copy changes do not need a new review unless they alter user expectations about AI ability, source coverage, confidence, permissions, recovery, automation autonomy, cost, latency, or launch evidence.

## Review record

Every material review creates or updates a `HumanAIInteractionReview`:

```text
id
status: draft | ready | pass | fail | blocked | waived | retired
surface
review_type: heuristic | hax-workshop | trust-calibration | automation-permission | failure-recovery | benchmark-preflight | release-audit
reviewed_at
reviewers
target_segments
source_quality_records
linked_requirements
linked_docs
linked_slices
user_goal
ai_or_automation_role
autonomy_class
model_tool_capability_statement
source_data_boundary
progress_and_performance_states
confidence_uncertainty_behavior
permission_approval_behavior
user_control_recovery_behavior
feedback_and_correction_behavior
accessibility_internationalization_behavior
findings
required_follow_up
Product Truth links
benchmark_links
frontier_signal_review_refs
user_research_links
release_evidence_links
owner
revisit_trigger
```

Reviews may live in Product Truth once runtime exists. During specification work, the canonical expression is this document, affected delivery docs, affected product or architecture contracts, and the traceability metadata.

## Finding record

Every review finding is recorded as a `HumanAIInteractionFinding`:

```text
finding_id
review_id
severity: S0 | S1 | S2 | S3
dimension
guideline_or_heuristic
evidence
affected_requirement
affected_doc
affected_surface
user_impact
recommended_action
non_action_alternative
owner
status: open | fixed | accepted-risk | non-action | superseded
validation_needed
revisit_trigger
```

Findings with `S0` or `S1` severity block affected prototype expansion, beta expansion, release promotion, and customer-facing claims until resolved or explicitly removed from scope. Waivers cannot convert a failed user-control, permission, evidence, or false-completion finding into a pass.

## Review dimensions

### System status and progress

Users must know what the system is doing, what is queued, what is partial, what is stale, what is final, what is blocked, what can be cancelled, and what state is safe to rely on.

Failures include spinner-only long waits, hidden background work, false completion, unlabeled partial results, unclear cache or Fast Path state, and progress that cannot be resumed or inspected.

### Capability boundaries and mental model

Users must understand the AI or automation role, its source scope, its tool scope, its model capability limits, its uncertainty, and where human judgment remains required.

Failures include implying that the system read every source when it only retrieved a subset, presenting generated summaries as corroboration, hiding unsupported claims, or using human-like personality cues to substitute for competence.

### Evidence, confidence, and verification

Factual output must make source support, citation state, confidence, uncertainty, contradiction, and stale evidence inspectable. Source links alone are not enough because they can create a false sense of truth.

Failures include citations that do not support the claim, confidence labels without evidence, warnings so broad users ignore them, and decisions that overpromote directional public opinion.

### User control, reversibility, and recovery

Users must be able to correct, dismiss, narrow, retry, cancel, undo, restore, replay, withdraw, compensate, or escalate according to the action class and current state.

Failures include hidden final writes, unrecoverable drafts, stale recovery candidates, unclear irreversible labels, or recovery paths that bypass owning service preflight.

### Permission, approval, and delegated trust

Permissions, approvals, grants, scopes, destinations, cost, side effects, expected versions, and revocation must be visible before material work proceeds and enforced at the mutation boundary.

Failures include approval prompts that train habituation, broad "always allow" language, stale receipts, hidden connector widening, new destinations buried in batches, or model-determined approval class.

### Automation quality and outcome value

Automation must show whether it produced accepted value, rejected work, edited work, stale-claim resolution, cost, latency, approval burden, safety blockers, failures, and user corrections.

Failures include counting run volume, token volume, generated text, notification volume, or completed status as success without accepted outcome evidence.

### Failure, debugging, and support-safe diagnosis

Failures must produce understandable, repairable states with safe traces, failure taxonomy, AutomationFailureRecoveryRecords, severity, safe next actions, disabled-action reasons, replay eligibility, reconciliation-first handling where side effects are uncertain, fixture creation where appropriate, and support-safe diagnostics.

Failures include opaque agent apologies, raw private trace dumps, missing idempotency, unrepeatable failures, and debugger views that create a new telemetry authority.

### Accessibility, internationalization, and device context

AI and automation surfaces must preserve keyboard, screen-reader, reduced-motion, touch, narrow-screen, locale, language, direction, and accessible-export behavior.

Failures include drag-only automation editing, unlabeled AI state changes, inaccessible progress announcements, direction metadata loss, and mobile or offline behavior that silently changes canonical truth.

## Decision policy

A review can pass only when:

- each affected surface has a current review record;
- capability, source, uncertainty, progress, cost, permission, and recovery behavior are explicit;
- every `S0` and `S1` finding is resolved, scoped out, or converted into a Product Truth contradiction that blocks the affected claim;
- `S2` and `S3` findings have owner, due milestone, revisit trigger, and validation method;
- affected requirements, product docs, architecture docs, delivery docs, metadata, benchmarks, user-research plans, and release evidence agree;
- the review names the stronger evidence still needed before launch.

A review must fail or block when the surface:

- presents unsupported AI output as verified fact;
- makes source coverage, confidence, permission, approval, cost, latency, or side effects unclear;
- allows external writes, publication, deletion, billing, administration, connector widening, or support access without deterministic policy and current approval;
- hides user corrections, rejected outputs, failed automation steps, stale dependencies, or failed recovery;
- worsens approval fatigue without reducing structural risk;
- creates a second source, document, evidence, memory, workflow, publication, Product Truth, automation, or telemetry authority;
- cannot be tested with target users, benchmark scenarios, accessibility coverage, or runtime evidence.

## Stage gates

### Before prototype

The review must identify the target user goal, AI role, source and permission boundaries, failure modes, recovery paths, privacy constraints, accessibility assumptions, affected docs, and current FrontierSignalReview when the prototype was triggered by a fresh frontier signal.

### Before dogfood

The review must include a walkthrough of real Research work, expected failures, recovery records, safe next actions, run/debug traces where automation is involved, and Product Truth or non-action links for any scope decision.

### Before beta

The review must link to benchmark scenarios, user-research plans, feature flags, guardrails, support paths, and unresolved finding disposition.

### Before release

The review must pass for every changed AI or automation launch surface. It must be included in the release evidence bundle and tied to user-research packages, benchmark runs, Product Truth decisions, accessibility evidence, security evidence, and runtime evidence.

### After launch

Post-launch review compares actual user corrections, over-trust signals, approval-load signals, automation outcome scorecards, failure debugging, support cases, and benchmark regressions against the review assumptions. Contradictions reenter Product Truth.

## Non-goals

- Do not treat a heuristic review as user research.
- Do not use an AI model as the only reviewer of AI UX.
- Do not use generic AI ethics language as a substitute for concrete interaction findings.
- Do not rely on source links, confidence badges, or disclaimers as the whole trust design.
- Do not accept novelty, anthropomorphic personality, or demo smoothness as evidence of usability.
- Do not let review language weaken deterministic authorization, approval, source, citation, recovery, or release gates.

## Documentation update rule

When a `HumanAIInteractionReview` changes product direction, update affected contracts in the same change:

- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../01-product/automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md)
- [`../01-product/delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md)
- [`../01-product/latency-aware-progressive-workflows.md`](../01-product/latency-aware-progressive-workflows.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`test-strategy-and-quality-gates.md`](test-strategy-and-quality-gates.md)
- [`testing-and-validation-strategy.md`](testing-and-validation-strategy.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- relevant product, architecture, AI, source, security, delivery, and build contracts

If the review exposes a contradiction, Product Truth records it and semantic drift review resolves or defers it before the affected work can be treated as ready.
