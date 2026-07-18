# Product truth board and contradiction radar

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research must be able to improve from user opinion, competitive movement, runtime evidence, support signals, and implementation work without letting those inputs fracture the documentation or roadmap. The Product Truth Board is the Project-native product-control surface for this discipline.

It connects feedback, public user-opinion signals, official competitor references, source-quality records, UserOpinionSynthesisRecords, automation outcome scorecards, product requirements, documentation patches, implementation slices, experiments, release evidence, CustomerClaimEvidenceRecords, and explicit non-action decisions. Advanced operating-layer differentiation decisions are governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md) and resolved through this Product Truth surface. Source-quality classes, confidence labels, representativeness, bias, citation policy, and allowed decisions for public, customer, survey, research, official, runtime, and generated evidence are governed by [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md). Codebook versioning, coding assignments, AI-assisted analysis review, negative-evidence review, contradiction handling, and promotion thresholds for raw opinions are governed by [`../06-delivery/user-opinion-coding-and-synthesis-ledger.md`](../06-delivery/user-opinion-coding-and-synthesis-ledger.md). Exact customer-facing wording, allowed language, blocked language, and release evidence floors are governed by [`../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md`](../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md). Until Product Truth is implemented, current signal-backed scope decisions are preserved in [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md). The Contradiction Radar is the companion surface that shows where these records disagree before users, agents, SDK clients, or public documentation inherit stale guidance.

## Sources reviewed

Official capability references:

- [Productboard AI](https://support.productboard.com/hc/en-us/articles/15113485128467-Productboard-AI)
- [Productboard customer insights](https://www.productboard.com/use-cases/customer-insights/)
- [Canny feature request management](https://canny.io/use-cases/feature-request-management)
- [Linear customer requests](https://linear.app/docs/customer-requests)
- [Dovetail AI overview](https://docs.dovetail.com/help/dovetail-ai/overview)
- [Dovetail AI dashboards](https://dovetail.com/product/ai-dashboards/)

Public user-opinion and practitioner signals:

- [Product-management discussion on public roadmap bias and feedback-tool operations](https://www.reddit.com/r/ProductManagement/comments/1hdwl2h/why_some_teams_never_use_feedback_tools_like/)
- [Product-management discussion on moving from upvotes to build decisions](https://www.reddit.com/r/ProductManagement/comments/1rg551y/pms_who_use_feedback_boards_canny_productboard/)
- [Product-management discussion on scaling qualitative feedback](https://www.reddit.com/r/ProductManagement/comments/1l7n9lr/how_do_you_deal_with_qualitative_feedback_as_you/)
- [Productboard alternatives and insight-gathering discussion](https://www.reddit.com/r/ProductManagement/comments/1i8ee7b/any_recommendations_on_productboard_alternatives/)
- [Hacker News discussion on product roadmaps and feedback tools](https://news.ycombinator.com/item?id=22827275)

The product lesson is clear: teams need centralized feedback, customer context, AI clustering, and roadmap linkage, but votes and raw feature requests are weak product authority. Research should go further by making contradictions, documentation drift, runtime evidence, and non-action decisions visible in the same system.

## Product purpose

The Product Truth Board answers:

- What user problem, feedback theme, official reference, or runtime signal changed?
- Which requirement, document, slice, API, test, launch gate, or public claim is affected?
- Is the evidence official, customer-provided, public opinion, runtime telemetry, support diagnostic, experiment result, or internal decision?
- Did automation produce accepted value, rejected work, cost regression, approval burden, safety risk, or stale-claim improvement?
- Is the signal current, stale, contradicted, directional, validated, or blocked by missing evidence?
- Which documents must change together to avoid drift?
- Which implementation slice owns the next action?
- Which decision explicitly says not to act?
- Which release or runtime evidence proves the product claim?

This is not a generic roadmap, vote board, or feature-request portal. It is the internal truth-maintenance surface for Research's own product and for customer Projects that need governed research operations.

## Core objects

| Object | Purpose |
|---|---|
| `TruthSignal` | A normalized input from feedback, support, product analytics, user correction, official reference, public user-opinion source, automation outcome, runtime metric, incident, or implementation evidence. |
| `EvidenceReference` | Pointer to an official URL, public discussion, source version, support case, telemetry aggregate, experiment, test result, release record, or document block. |
| `SourceQualityRecord` | Classification for source class, confidence, representativeness, method, denominator, freshness, bias, allowed excerpt, allowed decision, affected records, and revisit trigger. |
| `UserOpinionSynthesisRecord` | Reviewed synthesis of coded user-opinion evidence with codebook version, coding assignments, source-quality records, screener links, coverage links, negative evidence, contradictions, blocked claims, owner, expiry, and SignalDecisionLedger relationship. |
| `Theme` | Cluster of related signals with segment, confidence, recency, contradiction, and owner metadata. |
| `Opportunity` | A user problem or product improvement candidate derived from one or more themes. |
| `TruthLink` | Typed relationship from a signal, theme, or opportunity to requirements, docs, slices, experiments, decisions, release evidence, and public claims. |
| `Contradiction` | A detected or user-reported conflict between sources, docs, requirements, implementation status, runtime evidence, or launch claims. |
| `TruthDecision` | Reviewed decision to act, defer, research more, supersede, or accept bounded risk from linked evidence. |
| `NonActionDecision` | Explicit decision not to act, with rationale, evidence, revisit trigger, and affected records. |
| `SignalDecisionLedger` | Board view over signals, themes, opportunities, decisions, and non-action records that shows exactly why user opinion, official references, runtime evidence, or strategic bets did or did not change requirements, docs, slices, experiments, launch gates, or public claims. |
| `TruthBoardView` | Filtered product-control view by product area, requirement, slice, customer segment, confidence, freshness, contradiction, or launch risk. |

All objects belong to one Project unless promoted to an Organization-wide product-control library.

## Signal confidence

Signals use explicit confidence and actionability states:

```text
raw
-> normalized
-> clustered
-> reviewed
-> linked
-> accepted | rejected | deferred | contradicted | stale | superseded
```

Evidence strength is separate from urgency:

- `anecdote`: useful direction, not proof;
- `repeated-signal`: repeated independent inputs;
- `official-current`: current primary-source product or platform documentation;
- `runtime-observed`: measured behavior in Research;
- `validated-theme`: qualitative and quantitative evidence support the theme for a named segment;
- `strategic-bet`: leadership accepts a direction despite incomplete validation;
- `contradicted`: another source or runtime result challenges the claim;
- `stale`: recency or source state is no longer adequate.

Public posts and feedback boards are never treated as statistical proof. Vote count is a signal, not a roadmap mandate.

## Signal-to-requirement decision ledger

Every signal that changes, rejects, defers, or materially challenges product direction appears in the SignalDecisionLedger. The ledger is not a second roadmap and not a popularity ranking. It is a traceability surface that lets implementation agents and product reviewers answer: what evidence moved, what changed, what deliberately did not change, and which documents must move together.

Each ledger row records:

- source evidence references, allowed excerpt policy, review date, and freshness state;
- signal type: official reference, public user opinion, customer feedback, support case, runtime evidence, experiment, automation outcome, documentation sweep, implementation evidence, incident, or strategic decision;
- confidence, segment, recency, and bias labels;
- affected product surface, requirement IDs, owner slices, canonical documents, launch gates, and public claims;
- objective dimension: performance, usability, user experience, automation leverage, trust, reviewability, recoverability, maintainability, commercial viability, or security;
- proposed action: create requirement, update requirement, update documentation, create experiment, create implementation issue, add test or gate, accept risk, defer, research more, or do not act;
- accepted decision, rationale, owner, validation command or evidence expectation, and revisit trigger.

Advanced features require an objective dimension and a negative-space decision. If a feature is novel but does not measurably improve speed, usability, trust, automation quality, reviewability, recoverability, or evidence maintenance, the ledger records a non-action or research-more decision instead of letting novelty become scope. If a signal is public opinion only, the ledger can justify planning, tests, or discovery work, but it cannot justify customer-facing market claims without stronger evidence.

## Contradiction radar

The radar detects and displays conflicts such as:

- a requirement exists without a governing product or architecture contract;
- a document describes a capability as implemented without runtime evidence;
- a benchmark claim lacks a review date or current official source;
- a user-opinion theme changes product direction without a requirement, documentation patch, or non-action decision;
- implementation status conflicts with launch-readiness language;
- public/private projection rules disagree across product, architecture, security, and delivery docs;
- a dependency or provider claim is stale relative to the tooling catalog;
- a source, claim, citation, memory item, or decision became stale after source changes;
- a release note, SDK doc, API schema, or MCP resource implies a capability that is not in the implementation ledger.

Every contradiction has severity, affected records, source evidence, owner, due date, and safe next action. High-severity contradictions create review-queue action cards.

## User experience

The board has four primary lanes:

1. **Signals:** incoming feedback, user corrections, public user-opinion snippets, official reference changes, analytics aggregates, incidents, and support-safe diagnostics.
2. **Themes:** clustered problems and opportunities with segment, confidence, recency, evidence, and trend direction.
3. **Truth links:** affected requirements, documents, slices, experiments, decisions, launch gates, and release evidence.
4. **Contradictions:** conflicts, stale claims, missing owners, unresolved decisions, and blocked public claims.

Users can open any card and see:

- original source and allowed excerpt;
- classification and minimization policy;
- confidence state and why;
- affected product surfaces;
- linked requirements and owner slices;
- proposed documentation patch or implementation action;
- accepted, rejected, deferred, or non-action decision;
- validation evidence when resolved.

AI can summarize, cluster, propose links, detect stale references, and draft patches, but human or configured policy review is required before changing canonical requirements, implementation status, launch evidence, or public claims.

## Differentiation

Productboard, Canny, Linear, and Dovetail converge on feedback centralization, AI summaries, trends, customer attributes, and roadmap linkage. Research should exceed that baseline by also tracking:

- contradictions between product intent, documentation, requirements, implementation status, and release evidence;
- official-source freshness for competitor and provider claims;
- runtime proof before product truth changes;
- explicit non-action decisions so ignored feedback remains explainable;
- documentation patches as first-class outcomes;
- user-opinion bias and confidence labels;
- links from product signals to exact tests, migrations, runbooks, and release gates.

## Non-goals

- Do not become a public voting board as the primary roadmap authority.
- Do not rank work by votes alone.
- Do not copy private support transcripts or customer source text into general analytics.
- Do not let AI-generated themes change requirements without review.
- Do not let product truth become a second implementation-status ledger.
- Do not publish benchmark or competitor claims from stale remembered information.

## Acceptance criteria

The Product Truth Board is production-ready only when:

- `TRUTH-001` through `TRUTH-003` are implemented and tested;
- every truth signal has source, confidence, retention, and viewer policy;
- themes link to requirements, documents, implementation slices, experiments, release evidence, or non-action decisions;
- contradiction detection covers docs, requirements, routing, implementation status, release evidence, official references, and runtime evidence;
- high-risk contradictions create review-queue action cards;
- AI clustering and summaries preserve provenance and do not become independent evidence;
- public user-opinion signals are labeled directional and cannot prove customer-facing claims;
- user-opinion themes that affect scope link to reviewed UserOpinionSynthesisRecords with codebook version, coding assignments, AI-assist disclosure, negative-evidence review, contradiction state, and blocked claims;
- public, customer, survey, research, official, runtime, and generated evidence uses source-quality records before it changes requirements, launch gates, or public claims;
- stronger-than-specification public, SDK, API, MCP, support, security, privacy, demo, release-note, testimonial, marketplace, or in-product claim language has a CustomerClaimEvidenceRecord with allowed language, blocked language, release scope, limitations, approval, and revisit trigger;
- every accepted, rejected, deferred, research-more, accepted-risk, or non-action signal that affects scope has a SignalDecisionLedger row linked to affected requirements, documents, slices, validation evidence, and revisit trigger;
- specification-era signal decisions migrate cleanly into runtime Product Truth records without losing non-actions, source-quality labels, owners, validation needs, or revisit triggers;
- advanced feature decisions state which objective dimension they improve and which non-goals or unsafe shortcuts they preserve;
- analytics and support records remain minimized and authorized;
- `pnpm docs:check` and semantic drift sweeps are part of the resolution workflow.

## Documentation update rule

Changes to product-truth, contradiction, feedback-signal, benchmark, or non-action behavior must update:

- [`../06-delivery/continuous-discovery-and-user-feedback-operations.md`](../06-delivery/continuous-discovery-and-user-feedback-operations.md)
- [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md)
- [`../06-delivery/user-opinion-coding-and-synthesis-ledger.md`](../06-delivery/user-opinion-coding-and-synthesis-ledger.md)
- [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`../06-delivery/documentation-governance-and-drift-control.md`](../06-delivery/documentation-governance-and-drift-control.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md)
- [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
