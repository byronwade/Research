# Public signal source quality and citation policy

**Review date:** 2026-07-18
**Status:** delivery evidence-quality contract, not runtime behavior

Research uses official references, public user opinions, practitioner discussions, customer feedback, support signals, user research, experiments, runtime telemetry, implementation evidence, and documentation sweeps to keep product direction current. Those sources do not have equal authority. This contract defines how external and public signals are classified, cited, refreshed, mapped to screened segments, and allowed to affect Product Truth, requirements, documentation, launch gates, and customer-facing claims.

This document governs `DOCS-004` and supports `TRUTH-003`, `FEEDBACK-002` through `FEEDBACK-004`, `BENCH-001` through `BENCH-004`, and `READY-002`. It prevents anecdote laundering: a public post, vote count, generated summary, or competitor claim cannot become product truth unless its source quality, confidence, bias, recency, segment/screener limits, coding and synthesis status, allowed decision, and Product Truth disposition are explicit.

## Source basis

Method and documentation references reviewed on 2026-07-18:

- [Nielsen Norman Group: Quantitative vs. Qualitative Usability Testing](https://www.nngroup.com/articles/quant-vs-qual/) and [Why 5 Participants Are Okay in a Qualitative Study, but Not in a Quantitative One](https://www.nngroup.com/articles/5-test-users-qual-quant/) for the difference between qualitative issue discovery and quantitative population or benchmark claims.
- [Pew Research Center: How do Americans take our surveys?](https://www.pewresearch.org/short-reads/2024/06/26/how-do-people-in-the-us-take-pew-research-center-surveys-anyway/) for representative sampling, random invitation, panel recruitment, and why volunteers do not represent the broader population.
- [AAPOR Disclosure Standards](https://aapor.org/standards-and-ethics/disclosure-standards/) and [AAPOR Best Practices for Survey Research](https://aapor.org/standards-and-ethics/best-practices/) for methodology disclosure, question wording, sample construction, weighting, margin of error, and transparency expectations.
- [Google developer documentation style guide](https://developers.google.com/style) for project-specific style, clear consistent documentation, and keeping local documentation guidance authoritative for the project.

These references inform Research's evidence-handling floor. They do not override Research's authority order, source immutability, Product Truth records, user-research protocol, launch evidence, or no-drift rules.

## Purpose

The policy exists so a reviewer can answer these questions before a signal changes the product:

- What exact source was reviewed, when, and by whom?
- Is the source official, representative, self-selected, customer-specific, runtime-observed, generated, stale, or contradicted?
- What claim does the source actually support?
- What bias, segment, denominator, sampling window, collection method, or `UserResearchSegmentScreener` limits the signal?
- What UserOpinionEvidenceItem, codebook version, coding assignment, synthesis record, negative-evidence review, or contradiction limits the signal?
- What decision is allowed from this source quality: discovery, Product Truth review, prototype, benchmark scenario, requirement change, launch evidence, or public claim?
- Does the signal require a `FrontierSignalReview` before it can affect accepted scope, advanced opportunities, prototypes, benchmark comparators, implementation plans, or customer-facing claims?
- Which requirements, docs, implementation slices, launch gates, Product Truth records, and non-action decisions must move together?

This policy is mandatory for public user-opinion and competitor evidence. It is also the default record shape for customer feedback, survey results, research literature, experiments, implementation evidence, runtime evidence, and official-reference refreshes when they affect product direction.

## Authority

This policy sits below the non-negotiable invariants and accepted architecture decisions, and above local audit prose. It operationalizes:

- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md) for documentation update discipline;
- [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md) for production authoring and evidence floors;
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md) for evidence-drift and research-drift sweeps;
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md) for feedback-to-decision flow;
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md) for recurring watch items;
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md) for FrontierSignalReview records, novelty-control promotion gates, copy-risk checks, non-action alternatives, and claim blockers before fresh frontier signals can change scope;
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md) for observed-task and experience evidence;
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md) for `UserResearchSegmentScreener` records, target segments, excluded segments, job-to-be-done, agency preference, AI trust posture, automation maturity, sampling, denominator, representativeness, bias, consent, retention, supported claims, and blocked claims;
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) for surface-level user-opinion coverage, blocked claims, synthetic-user boundaries, and target segments;
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) for UserOpinionEvidenceItems, codebooks, coding assignments, AI-assisted analysis review, negative-evidence review, UserOpinionSynthesisRecords, promotion thresholds, contradiction handling, and blocked claims;
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md) for runtime telemetry source boundaries, ProductTelemetryEventSpecs, prohibited telemetry, event-quality checks, and telemetry-backed claim limits;
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) for exact public wording, allowed language, blocked language, evidence floors, availability boundaries, testimonial limits, and CustomerClaimEvidenceRecords;
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md) for repeatable scenario evidence;
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md) for comparator-source freshness, source-quality records, and blocked comparative claims;
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md) for novel-feature movement;
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md) for current specification-mode decisions while runtime Product Truth records do not yet exist;
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md) and [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md) for TruthSignal, SignalDecisionLedger, contradiction, and non-action records.

If this policy conflicts with a higher-authority product, architecture, security, source, or AI contract, correct the governing contract first.

## Source quality classes

Every material source signal is assigned one primary class:

| Class | Meaning | Typical allowed use |
|---|---|---|
| `official-primary` | Current documentation, release notes, policy, API reference, support doc, pricing page, or technical standard from the source owner. | Capability claims, source refresh, Product Truth review, launch evidence when current and scoped. |
| `runtime-observed` | Measured behavior from Research code, tests, telemetry, release evidence, or operational logs. | Implementation status, release evidence, contradiction resolution, customer-facing product claims when policy allows. |
| `customer-feedback` | Direct feedback from a customer, prospect, buyer, admin, operator, or end user with consent and retention policy. | Product Truth review, discovery themes, support follow-up, experiments, requirements when segment and policy are explicit. |
| `support-case` | Support-safe diagnostic, incident follow-up, escalation, or customer-operation record. | Bug triage, support runbooks, Product Truth signals, release blockers when minimized and authorized. |
| `user-research` | Observed-task study, interview, usability session, accessibility session, dogfood finding, or validated experience evidence package. | UX decisions, benchmark scenarios, launch gates, Product Truth decisions, requirements when method and segment are explicit. |
| `survey-or-poll` | Structured public-opinion or customer survey with disclosed methodology. | Quantitative claims only when population, sample, method, denominator, weighting, error, and bias limits are disclosed. |
| `research-literature` | Peer-reviewed paper, reputable HCI/security/AI study, standards document, or method paper. | Method guidance, risk model, hypothesis, benchmark design, Product Truth context. |
| `public-user-opinion` | Reddit, Hacker News, community forum, social post, public review, feedback board comment, or issue thread from self-selected participants. | Directional discovery, watch item, hypothesis, usability-test prompt, benchmark scenario seed, non-action decision. |
| `practitioner-discussion` | Public expert or builder discussion, blog, conference talk, postmortem, or operational write-up that is not the primary source of a product capability. | Directional operational lessons, risks, checklist prompts, prototype guardrails. |
| `news-analysis` | Press article, analyst note, market commentary, or third-party comparison. | Context and watch triggers only unless it links to primary evidence. |
| `generated-summary` | AI summary, cluster, transcript digest, synthetic user output, or derived analysis. | Navigation aid only. It cannot independently support a claim. |
| `documentation-sweep` | Link check, semantic drift packet, stale-source sweep, orphan-doc sweep, or authoring-quality audit. | Documentation correction, Product Truth contradiction, readiness evidence. |

When a source spans multiple classes, use the most restrictive class for any claim that depends on the weaker evidence.

## Source quality record

Material signals use this `SourceQualityRecord` shape before they affect requirements, launch evidence, customer-facing claims, or advanced-feature scope:

```text
id:
source_url_or_ref:
source_title:
source_class:
captured_at:
reviewed_at:
reviewer:
source_owner_or_platform:
source_owner_type: official-owner | customer | public-platform | research-publisher | internal-runtime | internal-documentation
claim_supported:
claim_scope:
allowed_excerpt_policy:
content_minimization:
representativeness: official | runtime | named-customer | validated-segment | probability-sample | opt-in-sample | self-selected | unknown | not-applicable
sample_or_denominator:
collection_method:
methodology_disclosed: yes | partial | no | not-applicable
user_research_segment_screener_refs:
user_opinion_evidence_item_refs:
user_opinion_synthesis_record_refs:
freshness_state: current | stale | volatile | contradicted | unknown
confidence: official-current | runtime-observed | customer-validated | validated-theme | repeated-signal | directional | anecdote | generated-only | stale | contradicted
bias_risks:
affected_requirements:
affected_docs:
affected_slices:
affected_launch_gates:
product_truth_record:
decision_allowed:
decision_taken:
validation_needed:
owner:
revisit_trigger:
```

During specification work, this record can be expressed in the governing document, implementation evidence, semantic drift packet, Product Truth decision note, or release evidence entry. Once Product Truth exists at runtime, the record is stored as part of the TruthSignal and EvidenceReference graph.

## Confidence states

Confidence states describe what the signal can safely support:

| State | Meaning | Not allowed |
|---|---|---|
| `official-current` | A current primary official source supports the scoped capability or policy claim. | Inferring unstated behavior, launch status, pricing, retention, or security guarantees beyond the source. |
| `runtime-observed` | Research code, tests, telemetry, or operations directly observed the behavior. | Generalizing outside the tested release, tenant, environment, or population. |
| `customer-validated` | Named customer or target-segment evidence supports a problem or need with consent and policy. | Treating one customer as market proof. |
| `validated-theme` | Multiple methods support the same theme for a named segment. | Customer-facing claims without launch evidence and current source review. |
| `repeated-signal` | Independent reports repeat a pattern but method, denominator, or segment remains limited. | Quantitative prevalence claims. |
| `directional` | The signal is useful for investigation or prioritization only. | Requirements, launch claims, public market claims, or production-readiness proof by itself. |
| `anecdote` | One or a small number of reports may reveal a real issue. | Trend claims, vote-ranked roadmap priority, or statistical proof. |
| `generated-only` | A model summary exists without independently reviewed upstream evidence. | Any factual claim. |
| `stale` | The source is too old or has likely changed. | Current claims until refreshed. |
| `contradicted` | Another source challenges or disproves the signal. | Implementation guidance until Product Truth resolves the contradiction. |

Confidence can increase only through stronger evidence. Rewriting a public post as polished prose does not increase confidence.

## Representativeness and bias rules

Public user-opinion sources are usually `self-selected` or `unknown`. They may reveal real pain, language, objections, missing states, or trust concerns, but they do not prove prevalence, market size, willingness to pay, accessibility coverage, enterprise readiness, or launch readiness.

Survey or poll claims require:

- population under study;
- sample frame or recruitment method;
- sample size and denominator for each reported metric;
- exact question or task wording when the wording affects interpretation;
- collection mode and field dates;
- weighting or adjustment method when used;
- margin of sampling error, credible interval, confidence interval, or explicit nonprobability limitation when a number is generalized;
- sponsor, conductor, and funding source when available;
- known bias risks and exclusions.

Qualitative user research can identify problems and generate product insight with small samples when the study is designed for issue discovery. It cannot produce population metrics, prevalence, or success-rate claims unless the quantitative method, sample size, and analysis support those claims.

## Decision allowance matrix

| Source quality | Discovery or watch item | Product Truth review | Prototype or benchmark scenario | Requirement change | Launch evidence | Customer-facing claim |
|---|---:|---:|---:|---:|---:|---:|
| Current official primary source | Yes | Yes | Yes | Yes, if scoped | Yes, for source claim | Yes, if claim matches source and review date |
| Research runtime evidence | Yes | Yes | Yes | Yes | Yes | Yes, if release scope matches evidence |
| Customer feedback or support case | Yes | Yes | Yes | Yes, with segment and policy | Limited, with minimized evidence | Only with approved customer/reference policy |
| User-research evidence | Yes | Yes | Yes | Yes, with method and segment | Yes, for UX gates | Limited; no market proof |
| Survey or poll with disclosed method | Yes | Yes | Yes | Yes, with limitations | Limited | Yes, only within disclosed population and confidence limits |
| Research literature | Yes | Yes | Yes | Maybe, as method or risk basis | Limited | Rarely, only as cited method context |
| Repeated public signal | Yes | Yes | Yes | No, without stronger evidence or strategic-bet decision | No | No |
| Single anecdote or public post | Yes | Yes | Maybe | No | No | No |
| News or analysis | Yes | Maybe | Maybe | No, unless primary evidence confirms | No | No |
| Generated summary only | No | No | No | No | No | No |

Strategic bets are allowed only when Product Truth records the evidence gap, objective dimension, owner, validation plan, non-action alternative, customer risk, and revisit trigger. A strategic bet is not a proof state.

## Citation and excerpt policy

Material source records must preserve:

- exact URL, captured source reference, or internal evidence reference;
- review date and freshness rule;
- claim supported and claim scope;
- short allowed excerpt or paraphrase policy;
- whether raw content, private content, personal data, support transcript, prompt, source text, or customer identifier is prohibited from general analytics or documentation;
- public/private visibility and retention state.

Do not quote public posts, customer feedback, or support material as product evidence when paraphrase plus link is sufficient. Do not use raw private content in general documentation. Generated summaries can help reviewers navigate upstream evidence, but the upstream source is the citation target.

## Public discussion policy

Public discussion sources can:

- reveal vocabulary, trust objections, failure modes, missing states, and competitor perception;
- seed Product Truth signals, non-action decisions, user-research tasks, benchmark scenarios, prototype hypotheses, and watch items;
- justify searching for stronger evidence.

Public discussion sources cannot:

- prove market demand, product-market fit, willingness to pay, accessibility quality, enterprise readiness, security safety, or production readiness;
- rank a roadmap by votes, upvotes, comment volume, or sentiment count without disclosed collection and denominator;
- support customer-facing claims;
- override official references, runtime evidence, user-research evidence, launch gates, or security invariants;
- become independent evidence when summarized by AI.

If a public signal is repeated across independent communities, label it `repeated-signal`, record the known bias, and require Product Truth review before changing requirements.

## Official and competitor claims

Competitor, OS, model, platform, pricing, beta/GA, security, privacy, policy, and API claims require current official primary sources. A third-party article can trigger a watch item, but it cannot be the only basis for a current capability claim when the source owner publishes primary documentation.

Official sources still have limits:

- they support only what they explicitly say;
- they can become stale after product releases, policy changes, pricing updates, or deprecations;
- they do not prove that Research should copy the behavior;
- they do not override Research's no-ambient-capture, authorization, evidence, publication, recovery, audit, and launch-evidence invariants.

## Product Truth conversion

A source signal becomes product direction only after Product Truth records:

- the `SourceQualityRecord` or equivalent evidence reference;
- confidence, representativeness, freshness, and bias labels;
- affected requirement IDs, docs, slices, launch gates, and public claims;
- accepted, rejected, deferred, research-more, accepted-risk, stale, contradicted, superseded, or non-action decision;
- rationale, objective dimension, owner, validation expectation, and revisit trigger.

If a public signal reveals an attractive advanced feature or a fresh OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, or generated-summary pattern, the default decision is `research-more` or `non-action` until source quality, FrontierSignalReview status, dependencies, risk envelope, benchmark scenario, user-research plan, and kill criteria are explicit.

## Launch gates

Before production launch:

- no customer-facing claim is supported only by `directional`, `anecdote`, `repeated-signal`, `news-analysis`, `generated-only`, `stale`, or `contradicted` evidence;
- every stronger-than-specification customer-facing claim has a CustomerClaimEvidenceRecord or runtime Product Truth equivalent whose allowed language matches the public wording and whose evidence scope excludes unsupported cases;
- all official-reference and competitor claims have current source review dates;
- all public user-opinion and practitioner signals that affected scope have SourceQualityRecords or Product Truth evidence references;
- all frontier signals that affect scope, accepted differentiators, prototypes, benchmarks, implementation plans, or customer-facing claims have current FrontierSignalReviews or runtime Product Truth equivalents;
- all public user-opinion, survey, customer-feedback, support-feedback, dogfood, beta, and benchmark-participant signals that affect scope link to current `UserResearchSegmentScreener` records before they support stronger-than-anecdote claims;
- all coded user-opinion syntheses that affect scope link to current UserOpinionEvidenceItems, codebooks, UserOpinionCodingAssignments, UserOpinionSynthesisRecords, negative-evidence review, contradiction state, AI-assist disclosure where applicable, and blocked claims;
- all survey or poll claims include method, denominator, population, and limitations;
- all user-research claims declare method, participant segment, task context, denominator when quantified, and unresolved severity;
- all generated summaries used in docs link back to reviewed upstream evidence;
- release evidence includes public-signal source-quality, confidence, freshness, bias, Product Truth disposition, stale-source, and unresolved-contradiction snapshots;
- semantic drift review confirms source-quality labels agree across Product Truth, requirements, docs, launch gates, official references, and implementation status.

## Validation checks

Documentation or runtime changes that rely on this policy should run:

```bash
pnpm docs:check
```

Material source-quality changes also require:

- JSON validation for changed `_meta` files;
- a search for public-signal, confidence, source-quality, and launch-claim language in affected docs;
- a semantic drift packet when evidence changes product behavior, launch gates, public claims, implementation order, or advanced-feature scope;
- Product Truth or equivalent specification-era evidence for accepted, rejected, deferred, research-more, accepted-risk, stale, contradicted, superseded, and non-action decisions.

## Documentation update rule

Changes to source-quality classes, confidence states, decision allowances, citation policy, public-discussion policy, or launch gates must update:

- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md)
- [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md)
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- entry indexes and required-reading lists

If a weaker source currently supports a stronger claim, downgrade the claim, mark it stale or contradicted, or record the Product Truth decision that keeps the risk bounded.
