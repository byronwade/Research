# Semantic drift and contradiction review

**Review date:** 2026-07-18
**Status:** delivery and documentation-governance contract, not runtime behavior

Research must keep its documentation coherent as the product, architecture, user research, automation strategy, and implementation evidence evolve. Link checks prove that documents point somewhere; they do not prove that the destination agrees. This contract defines the manual and automated semantic sweeps required when a change could create drift across requirements, product contracts, architecture contracts, delivery gates, launch claims, Product Truth, and implementation status.

## Source basis

Official and practitioner references reviewed on 2026-07-18:

- [Google documentation best practices](https://google.github.io/styleguide/docguide/best_practices.html) for updating documentation alongside implementation changes.
- [Google developer documentation style guide](https://developers.google.com/style) for clear, consistent developer-facing writing.
- [Diataxis](https://diataxis.fr/) for separating documentation by reader task.
- [Capturing and Understanding the Drift Between Design, Implementation, and Documentation](https://dl.acm.org/doi/10.1145/3643916.3644399) for the engineering risk that design artifacts, implementation, and documentation drift apart over time.

Directional public user and practitioner signals reviewed on 2026-07-18:

- [Hacker News discussion of high-documentation, low-meeting work culture](https://news.ycombinator.com/item?id=33707022).
- [Hacker News discussion of wrong and outdated documentation](https://news.ycombinator.com/item?id=36287809).
- [Hacker News discussion of documentation becoming stale](https://news.ycombinator.com/item?id=45627925).
- [Reddit discussion of stale internal documentation](https://www.reddit.com/r/ExperiencedDevs/comments/pwgyek/what_to_do_about_fragmented_and_stale_internal/).
- [Reddit discussion of documentation being years out of date](https://www.reddit.com/r/ExperiencedDevs/comments/1qejexx/documentation_is_three_years_out_of_date_and/).
- [Reddit technical-writing discussion of docs-as-code drift controls](https://www.reddit.com/r/technicalwriting/comments/1pnovna/how_do_mature_security_orgs_structure_docsascode/).

Public discussion signals are directional only. They support the need for a stronger drift protocol, but they are not proof that a specific Research requirement is correct.

## Authority

This contract operationalizes:

- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md) for authority order, update protocol, and drift definitions;
- [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md) for authoring shape, reader tasks, examples, and launch gates;
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md) for source-quality classes, confidence labels, representativeness, bias, citation policy, and allowed decisions for public, customer, survey, research, official, runtime, and generated evidence;
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md) for `UserResearchSegmentScreener` records, target segments, excluded segments, sampling, representativeness, bias, supported claims, and blocked claims before user-opinion evidence affects scope;
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) for `UserOpinionCoverageRecord` records, required methods, observed-task protocols, synthetic-user limits, blocked claims, owner slices, and launch-evidence gaps before opinion evidence is treated as sufficient;
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) for `UserOpinionEvidenceItem`, `UserOpinionCodebook`, `UserOpinionCodingAssignment`, and `UserOpinionSynthesisRecord` records that preserve codebook versions, coding rationale, negative evidence, contradiction state, AI-assist disclosure, and blocked claims before user-opinion themes affect scope, launch evidence, benchmark scenarios, Product Truth, or public claims;
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) for CustomerClaimEvidenceRecords, allowed wording, blocked wording, availability boundaries, evidence floors, and testimonial limits;
- [`../02-architecture/canonical-content-and-no-drift.md`](../02-architecture/canonical-content-and-no-drift.md) for source, claim, document, memory, artifact, and publication propagation;
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md) and [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md) for Product Truth and contradiction records;
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) for release evidence and promotion gates.

This document does not create a second source of truth. It defines the sweep packet and evidence required to prove that the existing source of truth stayed coherent.

## When a sweep is required

A semantic drift sweep is required when a change touches any of these areas:

- product behavior, user journey, automation scope, native companion scope, privacy, support access, publication, deletion, billing, or security;
- requirement IDs, owner slices, implementation dependency order, required reading, routing metadata, or traceability;
- implementation status, maturity labels, runtime evidence, launch gates, release evidence, customer-facing claim boundaries, or Definition of Done;
- official references, competitor claims, public user-opinion signals, user-research findings, Product Truth decisions, or non-action decisions;
- public/private projection rules, source immutability, evidence support, retrieval authorization, model/provider policy, or agent authority;
- performance, usability, user experience, advanced operating-layer differentiation, automation outcome scoring, or delegated-trust behavior.

The sweep scope must match the change scope. A narrow link check cannot prove a broad product-direction change is consistent.

## Drift classes

Semantic drift is classified before resolution:

| Class | Meaning | Example |
|---|---|---|
| `authority-conflict` | A lower-authority document contradicts a higher-authority contract, or two canonical contracts disagree. | README says a capability is implemented while implementation status says runtime is not scaffolded. |
| `requirement-drift` | Requirement metadata, traceability, owner slice, or governing documents do not agree. | `_meta/requirements.json` owns a requirement in `commercial-24`, but the build plan omits the governing document. |
| `scope-drift` | Product scope widened or narrowed in one place without the affected contracts moving together. | An automation doc allows external writes while the approval policy still treats them as hard-stop actions. |
| `status-drift` | A document implies specified, implemented, validated, blocked, deferred, or production-ready state incorrectly. | A product doc describes a native companion guarantee without no-ambient-capture test evidence. |
| `evidence-drift` | A claim relies on stale, directional, missing, mismatched, unscreened, unclassified, or overpromoted evidence. | A public user-opinion post is treated as market proof instead of directional signal. |
| `launch-gate-drift` | Launch readiness, product readiness, test strategy, or Definition of Done omit a new obligation. | A new accessibility workflow ships in docs without launch evidence requiring assistive-technology validation. |
| `routing-drift` | New or changed docs are missing from navigation, routing, or required reading. | A delivery contract is linked from README but absent from `agent-routing.json`. |
| `terminology-drift` | Product terms diverge or duplicate authority through inconsistent names. | `Project memory`, `agent memory`, and `workspace memory` are used as if they are interchangeable authorities. |
| `reference-drift` | Time-sensitive provider, model, competitor, pricing, policy, or platform claims lack current source review. | A model capability is repeated from memory without a review date. |
| `research-drift` | User research findings, dogfood limits, public opinions, or experiments do not flow into Product Truth and affected docs. | A usability blocker changes UX policy but no SignalDecisionLedger or launch gate changes. |

## Sweep packet

Every material semantic review produces a `SemanticDriftReviewPacket` with:

- change summary and affected files;
- authority level of the change;
- affected requirement IDs and owner slices;
- affected product, architecture, AI, source, security, delivery, reference, and build docs;
- affected runtime state, launch gates, Product Truth signals, non-action decisions, and official references;
- searches or checks run;
- contradictions found, severity, owner, and resolution;
- documents deliberately not changed and why;
- validation commands and results;
- remaining ambiguity, accepted risk, or revisit trigger.

During specification work, this packet can be recorded in the PR, implementation evidence, release evidence, documentation-change summary, or [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md). Once Product Truth exists at runtime, the packet links to Contradiction and SignalDecisionLedger records.

## Required sweep dimensions

### Authority and status

Check that capability maturity is consistent across:

- `README.md`, `PRODUCT.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `PROJECT_STATUS.md`, and `AGENTS.md`;
- [`implementation-status.md`](implementation-status.md);
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md);
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md);
- relevant product and architecture contracts.

No document may imply runtime implementation, production readiness, customer availability, or verified launch evidence unless implementation evidence exists.

### Requirement and routing

Check:

- [`../_meta/requirements.json`](../_meta/requirements.json);
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json);
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json);
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md);
- [`../README.md`](../README.md) and [`../START-HERE.md`](../START-HERE.md).

Requirement statements, owner slices, governing docs, validation surfaces, and required reading must agree.

### Product and architecture behavior

For behavior changes, compare the product contract with:

- the architecture contract;
- API, event, database, and workflow references;
- security, privacy, abuse, support, and governance docs;
- delivery gates and validation strategy.

The product contract defines what users experience. The architecture contract defines how it is built. Neither may silently override the other.

### User research and public opinion

Check that user-research and public-signal changes preserve:

- source-quality class, source and review date;
- directional, repeated-signal, validated-theme, runtime-observed, official-current, stale, or contradicted label;
- `UserResearchSegmentScreener` links where user-opinion, survey, dogfood, beta, support, public-signal, or benchmark-participant evidence affects scope;
- `UserOpinionSynthesisRecord` links with codebook version, coding assignments, AI-assist disclosure, negative-evidence review, contradiction state, and blocked-claim scope when opinion themes affect requirements, Product Truth, launch evidence, benchmark scenarios, outcome claims, or customer-facing claims;
- representativeness, segment, denominator where applicable, and bias assessment;
- current watch item or explicit no-change refresh when the signal affects OS, workspace-agent, automation, model, browser, advanced operating-layer, or competitor claims;
- affected requirements and docs;
- Product Truth decision or non-action decision;
- launch evidence requirement where the signal affects production claims.

User opinion can justify investigation, usability tests, or strategic bets. It cannot become customer-facing proof without runtime and user evidence.

### Performance, usability, automation, and advanced operating-layer scope

Advanced features require extra review because they can create attractive but unsafe drift. Check:

- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md);
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md);
- [`../01-product/automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md);
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md);
- affected automation, native companion, Workset, Scenario Lab, Reversible Work, delegated-trust, and Product Truth docs.

The sweep must confirm that novelty does not override no-ambient-capture, source authorization, evidence requirements, approval hard stops, reversibility, debugging, or outcome-based automation metrics.

## Severity

Contradictions use this severity model:

- `S0 release blocker`: contradiction could cause unauthorized access, public/private leakage, data loss, false launch readiness, hidden capture, unsupported customer-facing claim, unsafe external write, or broken evidence authority.
- `S1 launch blocker for affected area`: contradiction could mislead implementation, support, user research, SDK/MCP behavior, automation scope, or release validation for a primary workflow.
- `S2 required before broad rollout`: contradiction is recoverable but creates duplicated authority, confusing terminology, stale examples, or incomplete launch gates.
- `S3 cleanup`: local wording, ordering, or redundant phrasing with no product, implementation, support, or release impact.

`S0` contradictions must be fixed before any promotion. `S1` contradictions must be fixed before the affected area enters launch scope. `S2` and `S3` contradictions require owner, risk, and revisit trigger.

## Sweep procedure

1. Identify the highest-authority document affected by the change.
2. List affected requirements, owner slices, and validation surfaces.
3. Search for old terminology, old scope, old status language, and adjacent synonyms.
4. Compare product docs, architecture docs, delivery gates, references, and metadata.
5. Check whether public user-opinion, official references, research findings, and runtime evidence are labeled with the correct confidence and screened-segment limitations where applicable.
6. Update the governing contract first, then dependent summaries, indexes, metadata, traceability, readiness, and launch evidence.
7. Record non-action decisions for tempting advanced features that are intentionally rejected or deferred.
8. Run `pnpm docs:check` and JSON validation for changed `_meta` files.
9. Run `git diff --check` and note CRLF-only warnings separately from real whitespace defects.
10. Record the sweep packet, unresolved severity, and remaining follow-up.

Useful search patterns include requirement IDs, object names, capability names, state labels, launch language, CustomerClaimEvidenceRecord, provider names, and old synonyms. Search both exact names and likely shorthand.

## Non-goals

- Do not use this review to force all documents to repeat the same prose.
- Do not make overview files the authority by updating them first.
- Do not resolve a contradiction by choosing the easiest implementation path.
- Do not treat `pnpm docs:check` as semantic proof.
- Do not hide uncertainty by deleting public-opinion labels, non-action decisions, or limitation statements.
- Do not convert directional external signals into customer-facing claims.

## Launch gates

Before production launch:

- every material documentation change has a semantic drift packet in the documentation-change evidence log, implementation evidence, PR record, or equivalent release-evidence entry;
- no unresolved `S0` contradiction exists;
- no unresolved `S1` contradiction affects a launch journey;
- `pnpm docs:check`, JSON validation, status-ledger validation, README directory-map validation, indexed-doc coverage, `START-HERE` read-order validation, routed-doc coverage, requirement-traceability coverage, stale-count sweeps, orphan-document sweeps, document-type review, and semantic contradiction review pass for the release candidate;
- official references, public user-opinion signals, surveys, customer feedback, runtime evidence, generated summaries, and competitor claims have review dates, source-quality classes, confidence labels, screened-segment limits where applicable, UserOpinionSynthesisRecord links where opinion-backed scope or claims are affected, and allowed-decision boundaries;
- customer-facing claims that are stronger than specification language have current CustomerClaimEvidenceRecords with exact wording, evidence floors, allowed scope, blocked language, expiry, and limitations;
- Product Truth records all accepted, rejected, deferred, research-more, accepted-risk, stale, contradicted, superseded, and non-action signals that affect scope;
- launch claims line up with implementation status and runtime evidence.

## Documentation update rule

Changes to this protocol must update:

- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md)
- [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md)
- [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- entry indexes and required-reading lists

If the sweep discovers a product or architecture contradiction, update the governing product or architecture contract before changing this protocol.
