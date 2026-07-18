# User opinion coding and synthesis ledger

**Review date:** 2026-07-18
**Status:** specification governance for user-opinion coding, not runtime behavior

Research must be able to hear users across interviews, surveys, support, public discussions, dogfood, beta cohorts, telemetry follow-up, automation failures, API friction, SDK friction, MCP usage, accessibility sessions, and benchmark-participant runs without converting raw opinions into unmanaged roadmap demands.

This ledger defines how a raw opinion becomes coded evidence, how coded evidence becomes a theme, how themes become Product Truth signals, and when a synthesis is blocked from requirements, launch evidence, or customer-facing claims.

It fills the gap between:

- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md), which owns intake, feedback policy, decision workflow, experiments, and closed-loop follow-up;
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md), which owns participant, segment, method, denominator, bias, consent, and blocked-claim records;
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md), which owns surface-level coverage and blocked claims;
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md), which owns evidence quality, confidence, representativeness, bias, excerpts, and allowed decisions;
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md), which owns specification-mode accepted, rejected, research-more, non-action, stale, and contradicted decisions until runtime Product Truth exists.

## Source basis

Methodology, product-tooling, and public practitioner references reviewed on 2026-07-18:

- [Nielsen Norman Group thematic analysis](https://www.nngroup.com/articles/thematic-analysis/) for coding observations and quotations, deriving themes across participants or data sources, and reviewing themes against contradictory evidence.
- [Dovetail qualitative research coding guide](https://dovetail.com/research/qualitative-research-coding/) for codebooks, inductive and deductive coding, code grouping, multiple passes, positive and negative evidence, and coding large qualitative datasets.
- [Dovetail Highlights documentation](https://docs.dovetail.com/help/projects/highlights) and [Project Docs documentation](https://docs.dovetail.com/help/projects/docs) for evidence-linked highlights, tags, AI-suggested highlights requiring approve/reject decisions, raw-data references, point-in-time doc references, and research summaries tied back to source material.
- [Pendo AI-assisted feedback integrations](https://support.pendo.io/hc/en-us/articles/44030459419675-Use-AI-assisted-integrations-to-collect-product-feedback) and [Pendo Listen Explore](https://support.pendo.io/hc/en-us/articles/37717114561819-Explore-feedback-with-AI-in-Listen) for AI-assisted feedback import, product-feedback highlight categories, source filters, status, labels, product areas, and AI-generated topics.
- [Productboard AI insight auto-linking](https://support.productboard.com/hc/en-us/articles/26949590820627-Link-insights-automatically-with-Productboard-AI) and [Productboard feedback-to-feature insights](https://support.productboard.com/hc/en-us/articles/360056354514-Link-user-feedback-to-related-feature-ideas-using-insights) for auto-link review states, manual verification, importance scoring, processed feedback state, and feature-idea linkage.

Public practitioner and user-opinion signals reviewed on 2026-07-18:

- [UX Research transcript-analysis discussion](https://www.reddit.com/r/UXResearch/comments/1nhpcjh/whats_your_process_and_toolset_for_analysing/) for practitioner concerns that generic AI tools miss meticulous quote pulling, that AI highlights can be useful only as a reviewed starting point, and that coding remains a core time-consuming analysis step.
- [UX Research SaaS versus AI analysis discussion](https://www.reddit.com/r/UXResearch/comments/1nwbq7p/qualitative_interviews_calls_saas_tools_vs_ai/) for concerns about hallucinated analysis, data invention, model/context limits, and the need to link AI-surfaced outputs back to raw transcripts and quotes.
- [Product Management unsolicited feedback discussion](https://www.reddit.com/r/ProductManagement/comments/1aggcrg/what_do_you_use_to_capture_and_organize/) for the recurring risk that feedback systems become black holes, disconnected manual-tagging work, or unreviewed backlog piles unless review rhythm, categorization, and closure are explicit.
- [UX Research AI insights discussion](https://www.reddit.com/r/UXResearch/comments/1evnnla/ai_tools_for_generating_insights/) for mixed signals: practitioners report speedups from AI-assisted task analysis and quote tagging, while others report hallucinations, straight fabrication, privacy concerns, and overconfidence in generated synthesis.

These sources justify a reviewable coding and synthesis control. They do not prove Research demand, user value, usability, accessibility, automation value, launch readiness, or customer-facing claims.

## Authority and relationship

This ledger operationalizes `FEEDBACK-004`.

It does not create a second research repository, product roadmap, Product Truth authority, analytics authority, feedback database, codebook source of truth, or claim-evidence store. Runtime implementation must store these records as Product Truth, discovery, source-quality, user-research, telemetry, and release-evidence records under the existing Project authority.

If this ledger conflicts with product, architecture, AI, security, source, delivery, reference, or `_meta` contracts, update the governing contract before accepting coded evidence.

## Required records

### UserOpinionEvidenceItem

Every codable user-opinion unit creates or references a `UserOpinionEvidenceItem`:

```text
id
project_id
source_family:
  interview | usability-session | survey-free-text | support-case | sales-call | customer-success-note |
  beta-note | dogfood-note | public-discussion | app-review | community-post | product-feedback-form |
  benchmark-participant-note | telemetry-follow-up | accessibility-session | API-support-case |
  SDK-support-case | MCP-support-case | automation-run-feedback | synthetic-planning-artifact
source_quality_record_ref
user_research_segment_screener_ref
user_opinion_coverage_record_refs
feedback_item_ref
truth_signal_ref
raw_source_locator
allowed_excerpt
excerpt_policy
consent_and_retention_policy
viewer_policy
method_context
participant_or_account_class
segment
job_to_be_done
surface
task_context
channel
locale
device_context
accessibility_context
privacy_sensitivity
security_sensitivity
automation_maturity
agency_preference
AI_trust_posture
created_at
freshness_expires_at
```

The item stores locators and allowed excerpts, not private raw content in general analytics. Public sources preserve URL, capture date, thread or comment locator, source-quality class, and directional-only status.

### UserOpinionCodebook

Every coded synthesis references a versioned `UserOpinionCodebook`:

```text
id
version
status: draft | active | deprecated | superseded
research_questions
included_surfaces
excluded_surfaces
deductive_codes
inductive_code_creation_policy
positive_negative_neutral_policy
severity_scale
frequency_scale
confidence_scale
contradiction_policy
AI_assist_policy
reviewer_policy
merge_split_policy
retirement_policy
owner
review_date
revisit_trigger
```

Codebooks must include both descriptive and interpretive codes. A code has a name, definition, inclusion examples, exclusion examples, allowed source families, related surfaces, blocked claims, and merge/split history.

### UserOpinionCodingAssignment

Each evidence item can receive one or more `UserOpinionCodingAssignment` records:

```text
id
evidence_item_ref
codebook_ref
code_ref
polarity: positive | negative | mixed | neutral
severity: S0 | S1 | S2 | S3 | S4
frequency_basis: single | repeated | denominator-backed | benchmark-backed | telemetry-backed
confidence: anecdote | repeated-signal | validated-theme | contradicted | stale | invalid
coder_type: researcher | product-owner | support-owner | AI-suggested | AI-assisted-reviewed
coder_ref
AI_model_ref
raw_locator_refs
allowed_quote_refs
rationale
uncertainty
contradicting_evidence_refs
review_state: unreviewed | reviewed | disputed | merged | split | retired
created_at
reviewed_at
```

AI-suggested codes are not accepted evidence until a qualified reviewer accepts, edits, or rejects them. `AI-assisted-reviewed` means AI helped organize work, not that AI independently validated the finding.

### UserOpinionSynthesisRecord

Themes, opportunities, Product Truth signals, and non-action decisions are created from `UserOpinionSynthesisRecord` records:

```text
id
title
status: draft | reviewed | accepted | rejected | research-more | non-action | contradicted | stale | superseded
codebook_ref
source_quality_record_refs
coding_assignment_refs
user_research_segment_screener_refs
user_opinion_coverage_record_refs
affected_surfaces
affected_requirements
affected_docs
affected_benchmark_scenarios
affected_outcome_metrics
affected_customer_claim_records
theme_statement
evidence_summary
negative_evidence_summary
contradiction_summary
sample_and_denominator
representativeness_limit
bias_limit
method_limit
privacy_limit
accessibility_limit
locale_device_limit
allowed_claims
blocked_claims
Product Truth links
SignalDecisionLedger link
release_evidence_link
owner
reviewers
review_date
expiry
revisit_trigger
```

The synthesis record is the minimum unit that can change Product Truth, requirements, documentation, experiments, prototype scope, launch evidence, support guidance, or customer-facing claims.

## Coding taxonomy

Every codebook must cover these dimensions unless a scoped study explicitly excludes them:

| Dimension | Required coding detail |
|---|---|
| Surface | Project creation, Sources, Chat, Documents, Worksets, Focus, Native Companion, Project Operating Layer, Project Health, Scenario Lab, Reversible Work, delegated trust, automation recipes, Product Truth, benchmarks, support, administration, API, SDK, MCP, accessibility, internationalization, mobile, offline, or synthetic-user workflow. |
| Task state | Setup, first use, normal work, long-running work, failure, recovery, handoff, review, publication, export, support, administration, integration, or deprovisioning. |
| Opinion target | Performance, usability, comprehension, trust, privacy, security, accessibility, control, automation value, review burden, recovery, maintainability, commercial value, or advanced differentiation. |
| Evidence direction | Positive, negative, mixed, neutral, workaround, contradiction, edge case, non-action support, or stale-source signal. |
| Strength | Anecdote, repeated signal, screened segment evidence, observed-task evidence, survey evidence, benchmark-backed evidence, telemetry-backed evidence, or release-evidence-backed result. |
| User agency | Wants automation, wants augmentation, wants manual control, wants approval gates, wants delegation, rejects automation, or unknown. |
| AI posture | Trusts AI output, distrusts AI output, wants citations, wants exact quotes, wants raw-source review, worries about hallucination, worries about privacy, or unknown. |
| Automation maturity | No automation, simple personal automation, team workflow automation, production operations, agentic workflow owner, developer automation, or support automation. |
| Severity | `S0` safety/legal/security blocker, `S1` launch blocker, `S2` major adoption risk, `S3` usability or support friction, or `S4` low-risk preference. |
| Claim boundary | May support internal discovery, may support Product Truth, may support benchmark design, may support launch evidence, customer-facing claim blocked, or customer-facing claim candidate. |

Codebooks must preserve dissent. A negative or minority high-severity signal cannot be dropped because the dominant theme is positive.

## Synthesis workflow

1. Register every source family with source-quality, consent, retention, viewer, excerpt, and allowed-decision policy.
2. Link every codable item to a current `UserResearchSegmentScreener` before treating it as stronger than anecdote.
3. Attach one or more `UserOpinionCoverageRecord` rows so the affected surface coverage state is visible.
4. Apply the active codebook and preserve raw locators, allowed excerpts, severity, polarity, uncertainty, and contradicting evidence.
5. Review AI-suggested codes before accepting them.
6. Merge, split, or retire codes only through codebook version history.
7. Promote repeated or high-severity patterns into a `UserOpinionSynthesisRecord`.
8. Record negative evidence, absence of evidence, denominator limits, excluded segments, bias, accessibility limits, privacy limits, locale/device limits, and claim blockers.
9. Route accepted, rejected, research-more, non-action, stale, superseded, or contradicted outcomes into the SignalDecisionLedger or specification ledger.
10. Update requirements, docs, benchmarks, telemetry, outcome metrics, launch evidence, or CustomerClaimEvidenceRecords only after the synthesis record has a reviewer, owner, and revisit trigger.

## AI-assisted analysis policy

AI may help with:

- transcription cleanup when the original transcript or recording locator remains available;
- candidate highlight detection;
- candidate tag suggestions;
- deduplication suggestions;
- clustering suggestions;
- quote retrieval from allowed source locators;
- first-pass summary drafts;
- contradiction search prompts;
- report formatting.

AI must not:

- invent quotes, users, frequency, denominator, or segments;
- rewrite raw participant meaning without preserving the original locator;
- turn a generated summary into corroborating evidence;
- accept its own codes or themes without human review;
- override screeners, source-quality class, consent, retention, or viewer policy;
- remove dissent or low-frequency high-severity evidence;
- create Product Truth decisions, requirements, launch evidence, or customer-facing claims without reviewer approval.

Every AI-assisted synthesis must disclose model or tool role, input scope, sampling limits, prompt or workflow reference where policy allows, reviewer, verification method, rejected suggestions, and unresolved uncertainty.

## Promotion thresholds

| Promotion target | Minimum evidence |
|---|---|
| Discovery backlog item | One source-quality-classified item with surface, segment, allowed excerpt, and blocked-claim state. |
| Repeated signal | Multiple independent items or a denominator-backed source using the same codebook version and compatible segment context. |
| Product Truth theme | A `UserOpinionSynthesisRecord` with reviewed codes, source-quality records, screener links, negative evidence review, and owner. |
| Requirement change | Product Truth theme or accepted strategic bet with affected docs, validation expectation, blocked claims, and SignalDecisionLedger entry. |
| Prototype or experiment | Requirement or accepted strategic bet plus hypothesis, target segment, risk class, metrics, guardrails, and rollback or kill criteria. |
| Launch evidence | Observed users, benchmark runs, telemetry where applicable, unresolved severity disposition, accessibility coverage, Product Truth decision, release bundle, and CustomerClaimEvidenceRecord alignment. |
| Customer-facing claim | Launch evidence plus exact allowed language, blocked language, limitation, owner approval, expiry, and release scope. |

Public discussions, synthetic users, AI summaries, competitor claims, and single-account anecdotes can seed investigation, benchmark scenarios, or non-action decisions. They cannot independently satisfy Product Truth validation, launch evidence, or customer-facing claims.

## Contradiction handling

A contradiction is created when:

- coded evidence conflicts with a current requirement, product doc, architecture contract, launch gate, customer-facing claim, Product Truth decision, or implementation-status statement;
- one segment reports value while an excluded or underrepresented segment reports high-severity harm;
- public opinion, customer feedback, survey data, benchmark evidence, or telemetry points in materially different directions;
- AI synthesis contradicts raw source locators or omits known dissent;
- a previously accepted theme becomes stale, superseded, or unsupported by current product behavior.

Contradictions route to [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md), [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md), and runtime Product Truth when available. `S0` and launch-impacting `S1` contradictions block affected launch evidence and customer-facing claims until resolved, accepted as bounded risk, explicitly deferred, or excluded from scope.

## Launch gates

Before production launch, Research must prove:

- codebooks are versioned and active for every user-opinion synthesis used in launch evidence;
- every synthesis used for launch has source-quality records, screener links, coverage records, coding assignments, negative-evidence review, reviewer, owner, expiry, and revisit trigger;
- AI-suggested codes, highlights, clusters, summaries, or quote retrievals are reviewed before acceptance;
- public discussions, synthetic users, and generated summaries are labeled as directional or derived material and cannot satisfy launch gates by themselves;
- high-severity minority signals and contradictions are visible in Product Truth and launch evidence;
- raw private content, support transcripts, prompts, full citations, private URLs, credentials, and customer source content are not copied into general analytics or public docs;
- CustomerClaimEvidenceRecords name the exact synthesis records, excluded segments, blocked claims, limitations, and allowed language for any opinion-backed claim;
- feedback loop closure is recorded for accepted, rejected, non-action, research-more, contradicted, stale, and superseded synthesis records;
- requirement and documentation changes triggered by synthesis pass `pnpm docs:check`.

## Documentation update rule

Changes to coding schema, codebook policy, synthesis thresholds, AI-assisted analysis policy, promotion thresholds, contradiction handling, launch gates, or feedback-to-Product-Truth flow must update:

- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- entry indexes and required-reading lists

If a coding or synthesis update changes product direction, update the governing contract before implementation work proceeds.
