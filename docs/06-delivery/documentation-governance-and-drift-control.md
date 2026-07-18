# Documentation governance and drift control

Research treats documentation as a production control surface. Product claims, architecture decisions, requirement ownership, implementation status, tooling choices, and launch readiness must stay synchronized before runtime work can be trusted.

This document governs `DOCS-001` and `DOCS-002`. [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md) governs `DOCS-003`, and [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md) governs `DOCS-004`.
The semantic sweep procedure for proving that related documents still agree is governed by [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md).

## Authority model

Documentation authority follows the repository order:

1. security restrictions and non-negotiable invariants;
2. accepted architecture decision records;
3. canonical requirements and terminology;
4. product, architecture, AI, source, API, and delivery contracts;
5. implementation blueprints and tooling evaluations;
6. overview and navigation documents.

When documents conflict, correct the governing contract first. Do not patch an overview, README, route map, or implementation note to hide a contradiction in a canonical contract.

## Canonical control files

The durable documentation control plane is:

- `docs/_meta/requirements.json` for requirement identity, statement, and primary owner slice;
- `docs/_meta/implementation-build-plan.json` for dependency order, required reading, deliverables, and slice eligibility;
- `docs/_meta/agent-routing.json` for entry documents, always-read documents, domain routing, and requirement-prefix routing;
- `docs/_meta/tooling-catalog.json` for tool decisions, boundaries, and owner slices;
- `docs/06-delivery/implementation-decision-records-and-open-decisions.md` for provider, environment, public-output, and operational choices that must not be implied by prose;
- `docs/06-delivery/semantic-drift-and-contradiction-review.md` for semantic sweep packets, contradiction severity, and same-change consistency evidence;
- `docs/06-delivery/documentation-change-evidence-log.md` for specification-mode documentation-change evidence, semantic drift packet summaries, validation commands, unresolved severity, and deliberate non-changes before runtime Product Truth and release-evidence storage exist;
- `docs/07-reference/requirements-traceability-matrix.md` for human-readable requirement-to-contract, owner-slice, and validation-surface navigation;
- `PROJECT_STATUS.md` and `docs/06-delivery/implementation-status.md` for current runtime truth;
- `docs/README.md` and `docs/START-HERE.md` for human and agent navigation;
- `docs/06-delivery/documentation-quality-and-authoring-standard.md` and `docs/07-reference/terminology.md` for authoring shape, naming, examples, diagrams, and production documentation quality;
- `docs/06-delivery/public-signal-source-quality-and-citation-policy.md` for source-quality classes, confidence labels, representativeness, bias, citation policy, and allowed decisions for public, customer, survey, research, official, runtime, and generated evidence;
- `docs/06-delivery/user-research-segment-and-screener-matrix.md` for screened segment records, excluded segments, sampling, representativeness, bias, supported claims, and blocked claims before user-opinion evidence changes scope;
- `docs/06-delivery/user-opinion-research-coverage-matrix.md` for surface-level coverage records, required methods, synthetic-user limits, observed-task protocols, blocked claims, owner slices, and launch-evidence gaps before opinion evidence is treated as complete;
- `docs/06-delivery/user-opinion-coding-and-synthesis-ledger.md` for UserOpinionEvidenceItems, codebooks, coding assignments, synthesis records, negative-evidence review, AI-assist disclosure, contradiction state, and promotion thresholds before opinions affect Product Truth, launch evidence, benchmark scope, outcome claims, or customer-facing claims;
- `docs/06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md` for CustomerClaimEvidenceRecords, allowed wording, blocked wording, availability boundaries, evidence floors, and testimonial limits before stronger-than-specification customer-facing claims are released.

These files do not replace the product and architecture contracts. They make the contracts machine-checkable.

The Product Truth Board, SignalDecisionLedger, and Contradiction Radar operationalize these controls when feedback, public user-opinion signals, official references, runtime evidence, implementation status, release evidence, or documentation sweeps disagree. They are governed by [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md) and [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md).

## Update protocol

Any documentation change that alters product behavior, architecture, implementation order, security posture, model/provider policy, public claim, customer-facing claim boundary, source policy, tooling choice, or launch evidence must update the complete dependency chain:

1. identify the governing contract and authority level;
2. update the canonical product, architecture, AI, source, security, delivery, or reference document;
3. update requirements when the behavior adds, removes, splits, merges, or changes a durable obligation;
4. update implementation slices, required reading, and requirement-prefix routing when ownership or dependencies change;
5. update status and readiness ledgers when maturity, runtime evidence, or launch blockers change;
6. update indexes, directory maps, and entry points when adding, moving, renaming, or deleting documents or documentation directories;
7. update tooling decisions when a tool, framework, adapter, or validation boundary changes;
8. classify the document type and primary reader task when adding or materially reshaping a canonical document;
9. update implementation decision records when the change makes or depends on provider, environment, deployment, public-output, security, commercial, or operational choices;
10. update source-quality records, `UserResearchSegmentScreener` links, UserOpinionCodebooks, UserOpinionCodingAssignments, UserOpinionSynthesisRecords, truth-board links, CustomerClaimEvidenceRecords, SignalDecisionLedger entries, contradiction records, non-action decisions, and official-reference review dates when the change is evidence-driven, customer-facing, opinion-backed, participant-backed, or time-sensitive;
11. scan for stale counts, obsolete names, duplicate authority, dead documents, missing index coverage, missing routing coverage, and contradictory language;
12. run `pnpm docs:check`;
13. record validation evidence with the implementation or documentation change.

Skipping a dependent document is a defect, even if links still resolve.

## Drift detection

Documentation drift includes:

- a requirement whose owner slice, routing prefix, or governing document is missing;
- a requirement that has a statement in `_meta` but no human-readable traceability path to governing contracts;
- a first-level docs directory missing from the `docs/README.md` directory map, a directory-map row that points to a missing directory, a canonical document not linked from both `docs/README.md` and `docs/START-HERE.md`, or a canonical document absent from the routing map;
- an implementation-status claim that implies runtime behavior without code and evidence;
- a status ledger whose maturity, runtime state, next slice ID, or next slice title disagrees with `docs/_meta/implementation-build-plan.json`;
- a stale requirement count, slice count, tooling count, product name, provider model name, or benchmark claim;
- duplicated authority for Projects, Documents, Sources, Memory, Workflows, Claims, Evidence, Publications, or Entitlements;
- a document whose primary reader task is unclear or whose examples are too abstract to reject an incorrect implementation;
- an obsolete document that remains linked after a canonical replacement exists;
- a time-sensitive competitor, provider, model, pricing, legal, or policy claim without a review date, source-quality class, and source;
- an implementation slice, runbook, environment, launch gate, or public-output commitment that relies on an open decision with no ID, owner, accepted evidence, or review trigger;
- a user-opinion, survey, public-discussion, generated-summary, or market signal that changes requirements without source-quality classification, current screened-segment limits where applicable, coded synthesis where opinion themes affect scope, confidence, bias, the requirement link, SignalDecisionLedger entry, or an explicit non-action decision.
- a truth-board signal, contradiction, decision, or documentation patch proposal that is stale, unlinked, or inconsistent with the canonical requirements and implementation plan.

`pnpm docs:check` is the required baseline. It validates required control files, requirement ownership, slice dependencies, routing targets, status-ledger alignment with `docs/_meta/implementation-build-plan.json`, first-level docs directory coverage and purpose text in the `docs/README.md` directory map, canonical document coverage in `docs/README.md`, canonical document coverage in `docs/START-HERE.md`, contiguous and duplicate-free `docs/START-HERE.md` read-order entries, canonical document coverage in agent routing, complete requirement coverage in [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md), and local Markdown links. Additional manual sweeps are required for semantic drift because status-ledger, directory-map, index, traceability, read-order, and link validation cannot prove that two documents agree. Material changes follow the sweep packet, severity model, and evidence expectations in [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md).

## Quality bar

Production-grade documentation is:

- specific enough that an implementation agent can build and test the behavior without guessing;
- honest about specified, partial, implemented, validated, and blocked states;
- explicit about scope, non-goals, owner slice, dependencies, and completion evidence;
- clear about the reader task it serves: product decision, implementation, operation, security review, API/SDK/MCP integration, support, or release governance;
- grounded in immutable sources for factual product output, source-quality records for public and external signals, and current official references for time-sensitive technology claims;
- readable by humans without requiring them to inspect JSON, while still synchronized with JSON controls;
- structured so public/private projections, exports, SDK users, MCP clients, and future agents do not receive divergent instructions.
- pruned aggressively enough that stale, duplicate, and superseded documents cannot compete with canonical guidance.
- enforced by automated status-ledger, directory-map, index, read-order, routing, requirement, traceability, and link checks before manual semantic review signs off.

## Contradiction handling

When two documents disagree:

1. stop treating either statement as safe implementation guidance;
2. identify the highest-authority source;
3. update the lower-authority document or correct the higher-authority contract if it is wrong;
4. update related requirements, routing, build-plan documents, and readiness ledgers;
5. record or update the contradiction in the Product Truth Board unless it is a purely local typo with no product or implementation impact;
6. produce a semantic drift review packet when the contradiction affects product behavior, implementation status, launch evidence, user research, public claims, or advanced operating-layer scope;
7. run validation and record the commands.

Never resolve a contradiction by choosing the easier implementation path.

## Evidence expectations

Every documentation governance change records:

- files changed;
- requirements added, removed, or reassigned;
- implementation slices affected;
- validation commands and results;
- documentation-change evidence log or release-evidence entry when the change is material;
- document types added, changed, split, retired, or promoted to canonical authority;
- external sources reviewed when time-sensitive claims changed;
- remaining ambiguity or owner decisions.

Release candidates must include documentation validation in their evidence bundle. A product cannot be production-ready while its canonical docs, requirements, routing, readiness ledgers, or implementation status disagree.
