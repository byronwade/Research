# Product truth graph and contradiction detection

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The Product Truth Graph models how Research turns signals into governed product decisions without documentation drift. It connects feedback, official references, public user-opinion signals, SourceQualityRecords, UserOpinionEvidenceItems, UserOpinionCodingAssignments, UserOpinionSynthesisRecords, automation outcomes, product documents, requirements, implementation slices, runtime evidence, release evidence, CustomerClaimEvidenceRecords, and explicit non-action decisions.

This architecture supports the product contract in [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md).
Source-quality classes, confidence labels, representativeness, bias, citation policy, and allowed decisions are governed by [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md).
User-opinion codebooks, coding assignments, AI-assisted analysis review, negative-evidence review, synthesis promotion, and blocked claims are governed by [`../06-delivery/user-opinion-coding-and-synthesis-ledger.md`](../06-delivery/user-opinion-coding-and-synthesis-ledger.md).
Customer-facing claim wording, allowed language, blocked language, release scope, and evidence floors are governed by [`../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md`](../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md).
The SignalDecisionLedger is a read model over the graph that records how signal-backed ideas become requirements, documentation patches, experiments, implementation work, accepted risk, deferrals, research-more tasks, or explicit non-action decisions.
Before the runtime graph exists, [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md) is the specification-mode projection that preserves the same decision intent for current public, official, research, user-opinion, and competitive signals.

## Record families

| Family | Records |
|---|---|
| Intake | `TruthSignal`, `EvidenceReference`, `SourceQualityRecord`, `SourceExcerptPolicy`, `SignalIngestionRun` |
| Analysis | `UserOpinionEvidenceItem`, `UserOpinionCodebook`, `UserOpinionCodingAssignment`, `UserOpinionSynthesisRecord`, `Theme`, `Opportunity`, `Contradiction`, `ConfidenceAssessment`, `BiasAssessment` |
| Control | `TruthLink`, `RequirementImpact`, `DocumentationImpact`, `SliceImpact`, `LaunchImpact`, `CustomerClaimEvidenceRecord` |
| Decision | `TruthDecision`, `NonActionDecision`, `ExperimentDecision`, `SignalDecisionLedgerEntry`, `RevisitTrigger` |
| Resolution | `TruthActionCard`, `DocumentationPatchProposal`, `ImplementationIssue`, `ReleaseEvidenceLink` |

The graph is a product-control projection over canonical authorities. It references documents, requirements, release records, source versions, feedback records, and runtime evidence, but it does not replace those authorities.

## Truth signal schema

Each `TruthSignal` stores:

```text
truth_signal_id
organization_id
project_id
source_type
source_ref
source_quality_record_id
user_opinion_evidence_item_ids
user_opinion_synthesis_record_ids
allowed_excerpt_ref
received_at
observed_at
reviewed_at?
product_area
segment
confidence_state
recency_state
bias_notes
classification
retention_class
viewer_policy
normalization_hash
linked_theme_ids
created_by
```

`source_type` values include `official-reference`, `public-user-opinion`, `customer-feedback`, `support-case`, `product-analytics`, `automation-outcome`, `experiment-result`, `runtime-evidence`, `incident`, `implementation-evidence`, `documentation-sweep`, and `manual-decision`.

Raw private content is not copied into general truth records. The signal stores an allowed excerpt reference and policy metadata.

## Evidence references

An `EvidenceReference` points to one of:

- official URL and review date;
- public discussion URL and capture metadata;
- internal feedback item;
- support-safe diagnostic record;
- telemetry aggregate;
- automation outcome scorecard or adaptive-routing recommendation;
- experiment result;
- release evidence bundle;
- test or evaluation result;
- document path and block;
- requirement ID;
- implementation slice and completion record;
- source version, claim, evidence span, or decision record.

References carry freshness, access policy, source-quality class, representativeness, bias, and confidence. Official references can support capability statements only when review date and source URL are present. Public discussion references are always directional unless validated by additional evidence.

## Graph relationships

`TruthLink` records typed relationships:

```text
supports
contradicts
updates
supersedes
duplicates
depends_on
blocks
implements
documents
tests
waives
non_action
needs_review
```

Links always identify both endpoints, link type, actor, reason, confidence, created time, and expected versions where the endpoint is mutable.

## Contradiction detection

Detection runs are deterministic before model-assisted analysis:

1. Load the current documentation index, requirement registry, routing map, build plan, implementation status, tooling catalog, release evidence ledger, and official-reference registry.
2. Validate required links, counts, owner slices, prefix routing, and document presence.
3. Search for stale maturity language, missing review dates, duplicate authority, broken requirement ownership, and implementation claims without evidence.
4. Compare changed requirements against product, architecture, security, AI, source, delivery, and reference contracts.
5. Compare user-opinion, survey, public-discussion, generated-summary, customer, runtime, or official-reference changes against source-quality records, codebook versions, coding assignments, synthesis records, requirements, launch gates, and non-action decisions.
6. Emit candidate contradictions with affected records and severity.
7. Use AI only to cluster, summarize, and propose patches over candidate evidence.
8. Create review-queue action cards for high-risk or ambiguous contradictions.

The detector cannot silently edit canonical documents. It proposes typed documentation patches and requirement changes.

## Contradiction states

```text
candidate
-> confirmed
-> action_proposed
-> resolved | accepted_risk | non_action | superseded | false_positive | stale
```

Severity values:

- `blocker`: launch, security, privacy, public claim, or implementation status risk;
- `high`: requirement, architecture, routing, or owner-slice conflict;
- `medium`: stale benchmark, incomplete linkage, or unowned decision;
- `low`: wording, navigation, or cleanup issue.

Blocker and high contradictions appear in Activity and the review queue.

## Decision handling

Truth decisions are explicit:

- `act`: create requirement, documentation patch, implementation issue, experiment, or release gate;
- `do_not_act`: record non-action rationale and revisit trigger;
- `defer`: set owner, expiry, and evidence needed;
- `research_more`: create bounded research task with source scope and completion criteria;
- `supersede`: link to newer requirement, source, or decision.

Non-action is first-class. A repeated user request can be rejected or deferred only when the decision records rationale, affected segments, evidence considered, and revisit trigger.

## Signal decision ledger projection

`SignalDecisionLedgerEntry` is an append-only decision projection over `TruthSignal`, `Theme`, `Opportunity`, `TruthLink`, `TruthDecision`, `NonActionDecision`, `ExperimentDecision`, and `RevisitTrigger`. It exists so broad research and user-opinion sweeps cannot silently change scope or leave stale product ideas floating outside requirements.

Each entry stores:

```text
signal_decision_id
project_id
source_signal_ids
theme_ids
opportunity_id?
decision_kind
objective_dimensions
affected_requirement_ids
affected_document_refs
affected_slice_ids
affected_launch_gate_refs
affected_public_claim_refs
customer_claim_evidence_record_refs
confidence_state
recency_state
bias_assessment_ref
evidence_reference_ids
proposed_patch_refs
validation_evidence_refs
owner
revisit_trigger_id?
decided_at
superseded_by?
```

`decision_kind` values are `act`, `defer`, `research_more`, `do_not_act`, `accept_risk`, `supersede`, `contradicted`, and `stale`.

The projection is created only from reviewed graph records. It cannot mutate requirements, canonical documents, implementation status, or release evidence by itself. When a decision requires a change, the graph creates a typed patch proposal, implementation issue, experiment record, or ActionCard against the owning authority.

Advanced-feature entries must name at least one objective dimension: performance, usability, user experience, automation leverage, trust, reviewability, recoverability, maintainability, commercial viability, or security. A novelty-only entry is invalid and must be converted to `research_more` or `do_not_act`.

## Authorization and minimization

Truth graph records can include sensitive product, customer, support, telemetry, and competitive information. Authorization is enforced at:

- signal capture;
- excerpt creation;
- theme and opportunity reads;
- AI analysis context assembly;
- action-card creation;
- documentation patch generation;
- API, SDK, MCP, webhook, export, and support views.

General analytics may receive aggregate counts and safe labels only. Raw support transcripts, private source text, customer secrets, prompts, document bodies, full citations, and private URLs are excluded unless a governed diagnostic workflow explicitly permits access.

## Activity and workflow integration

Truth graph actions produce Activity events for:

- signal captured, normalized, clustered, linked, rejected, or expired;
- theme created, merged, split, validated, contradicted, or stale;
- contradiction candidate found, confirmed, resolved, accepted, or false-positive;
- documentation patch proposed, accepted, rejected, or superseded;
- requirement impact proposed, accepted, rejected, or deferred;
- non-action decision accepted or revisited;
- official reference refreshed or expired.

Long-running analysis uses durable workflows with idempotency keys and expected versions. Scheduled truth sweeps are governed by automation policy.

## API and MCP surface

The platform exposes read-first resources for:

- truth signals;
- themes;
- opportunities;
- contradictions;
- truth links;
- non-action decisions;
- documentation patch proposals;
- freshness and drift summaries.

Mutation tools follow the same authorization, idempotency, expected-version, preflight, and approval semantics as ordinary API operations. MCP clients can inspect truth-state summaries but cannot apply documentation or requirement changes without a reviewed patch path.

## Validation

Tests cover:

- signal classification, minimization, retention, and viewer policy;
- official-reference review-date requirements;
- public user-opinion, survey, customer, runtime, generated-summary, and official-reference source-quality classification;
- user-opinion codebook versioning, coding-assignment review, AI-assist disclosure, negative-evidence review, synthesis promotion, and blocked-claim linkage;
- requirement-to-document and requirement-to-slice linkage;
- duplicate authority and stale implementation-status detection;
- contradiction state transitions and false-positive handling;
- AI clustering provenance and patch proposal boundaries;
- non-action decisions and revisit triggers;
- signal decision ledger projection, objective-dimension classification, and invalid novelty-only decisions;
- migration from SpecificationSignalDecisionRecords into runtime Product Truth decisions without dropping non-actions or validation needs;
- review-queue action-card creation;
- cross-tenant isolation and support-safe diagnostics;
- export, API, SDK, and MCP redaction;
- scheduled sweep idempotency and stale-source expiry.

## Documentation update rule

Changes to truth-graph architecture must update:

- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`product-analytics-feedback-and-experimentation.md`](product-analytics-feedback-and-experimentation.md)
- [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md)
- [`../06-delivery/continuous-discovery-and-user-feedback-operations.md`](../06-delivery/continuous-discovery-and-user-feedback-operations.md)
- [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md)
- [`../06-delivery/user-opinion-coding-and-synthesis-ledger.md`](../06-delivery/user-opinion-coding-and-synthesis-ledger.md)
- [`../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md`](../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md)
- [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md)
- [`../06-delivery/documentation-governance-and-drift-control.md`](../06-delivery/documentation-governance-and-drift-control.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
