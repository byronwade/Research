# Documentation quality and authoring standard

**Review date:** 2026-07-17
**Status:** production documentation contract, not runtime evidence

Research documentation must be good enough for a new implementation agent, product owner, security reviewer, or production operator to make correct decisions without private context. Governance keeps documents synchronized; this standard defines the writing, structure, examples, and evidence quality expected inside each document.

This document governs `DOCS-003`.
Semantic drift sweeps, contradiction severity, and same-change consistency evidence are governed by [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md).
Source-quality classes, confidence labels, representativeness, citation policy, and allowed decisions for public, customer, survey, research, official, runtime, and generated evidence are governed by [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md).
User-opinion codebooks, coding assignments, synthesis records, negative-evidence review, AI-assist disclosure, contradiction state, and promotion thresholds are governed by [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md).
Exact customer-facing claim wording, allowed pre-runtime language, blocked public language, availability boundaries, testimonial limits, and release evidence floors are governed by [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md).

## Reference baseline

Research's local standard is authoritative for this repository. It is informed by current documentation practices reviewed on 2026-07-18:

- Diataxis separates documentation by reader need: tutorial, how-to guide, reference, and explanation.
- Google developer documentation guidance prioritizes project-specific style first, then clear and consistent technical writing for the target audience.
- Microsoft Writing Style Guide guidance emphasizes clear, direct, globally usable technical communication.
- Google documentation best practices emphasize keeping docs fresh with code and removing stale or redundant material.
- Nielsen Norman Group, Pew Research Center, and AAPOR methods guidance reinforce that qualitative insight, representative survey claims, and self-selected public discussion have different evidence strength and disclosure requirements.

These references do not create external authority over Research terms, requirements, or launch gates. They provide a quality check when local guidance is silent.

## Purpose

Production documentation must:

- make the current truth easy to find;
- state what is specified, implemented, validated, blocked, or intentionally deferred;
- preserve one authority for each product behavior and architecture decision;
- show enough examples, state transitions, schemas, and launch gates to build and test the feature;
- keep user-facing, API-facing, SDK-facing, operator-facing, and agent-facing language consistent;
- explain non-goals and unsafe shortcuts so production work does not accidentally widen scope;
- record validation commands and source review dates when claims are time-sensitive.

## Documentation taxonomy

Every canonical document declares or clearly implies one primary reader task:

| Type | Reader job | Required content |
|---|---|---|
| Product contract | Decide what the product must do | scope, personas or workflow, objects, states, permissions, acceptance criteria, non-goals, update rule |
| Architecture contract | Build the behavior without guessing | ownership boundaries, data flow, ports/adapters, persistence, events, APIs, failure modes, tests, launch gates |
| AI/source contract | Preserve evidence quality and model safety | evidence rules, retrieval policy, model/tool boundaries, evaluation, audit, abstention or dispute behavior |
| Security/governance contract | Prevent unsafe implementation | invariants, controls, threat scenarios, enforcement points, tests, waiver rules |
| Delivery/runbook contract | Operate and release the system | entry/exit gates, metrics, alerts, rollback, owner roles, evidence bundle, incident paths |
| Reference | Resolve exact names or schemas | terminology, IDs, schemas, events, errors, examples, compatibility notes |
| Build evaluation | Choose tools or patterns | reviewed sources, decision criteria, accepted boundary, rejected alternatives, recheck date |

If a document tries to serve multiple reader tasks, split it or make one task canonical and link to dependent documents for the rest. Overview documents can summarize, but they cannot become hidden authorities.

## Required document shape

Canonical product, architecture, AI, source, security, delivery, reference, and build documents use this shape unless the document has a stronger local template:

1. title and review status;
2. purpose and scope;
3. authority or requirement ownership;
4. domain objects, flows, states, or contracts;
5. invariants and non-goals;
6. permissions, privacy, security, and audit expectations when applicable;
7. launch gates or acceptance criteria;
8. documentation update rule;
9. links to governing or dependent documents.

Short overview files can use a lighter shape, but they must not introduce new product behavior that is absent from canonical contracts.

## Minimum evidence floor

An implementation-critical document is incomplete unless it includes enough concrete material for a reviewer to reject an incorrect implementation:

- at least one state, command, API, event, schema, permission, or recovery example when the behavior crosses a service boundary;
- explicit unsupported, redacted, blocked, stale, disputed, or degraded states when private content, source evidence, automation, publication, billing, deletion, or support access is involved;
- acceptance criteria that name validation evidence, not only expected UI behavior;
- a freshness rule and source-quality label for official references, public benchmark claims, provider behavior, package versions, model roles, pricing, legal policy, security controls, public user-opinion signals, surveys, and competitor claims;
- non-goals that prevent scope expansion during implementation.

Examples may be pseudocode or structured text during specification work. Once runtime code exists, examples that represent executable contracts must stay compatible with tests, OpenAPI schemas, events, fixtures, migrations, or runbooks.

## Writing rules

- Use product terms exactly as defined in [`../07-reference/terminology.md`](../07-reference/terminology.md) when a term exists.
- Prefer concrete nouns over vague labels such as data, stuff, item, flow, or process when the domain object is known.
- Use `specified`, `implemented`, `validated`, `blocked`, `deferred`, and `not implemented` consistently.
- State the owner slice for durable obligations through [`../_meta/requirements.json`](../_meta/requirements.json), not only prose.
- Keep human-readable requirement navigation synchronized through [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md).
- Write in present tense for product contracts and future/conditional tense only for unaccepted options.
- Mark public user-opinion, practitioner discussion, survey, news-analysis, generated-summary, customer, runtime, and official-reference signals with the source-quality and confidence labels required by [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md); do not convert anecdotes, votes, public comments, or generated summaries into market proof.
- When opinion themes affect Product Truth, requirements, launch evidence, benchmark scope, outcome claims, advanced-feature decisions, or customer-facing claims, link the reviewed UserOpinionSynthesisRecord required by [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md), including codebook version, coding assignments, negative evidence, contradiction state, AI-assist disclosure, and blocked-claim scope.
- For public, support, SDK, API, MCP, release-note, demo, testimonial, security, privacy, or in-product claim language, use the allowed wording and evidence floors in [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md); stronger-than-specification language requires a CustomerClaimEvidenceRecord or runtime Product Truth equivalent.
- Include official-source review dates for provider, competitor, pricing, policy, legal, package, model, and platform claims.
- Avoid duplicate authority. If a section restates another document, link to it and summarize the implication.
- Use descriptive link text that names the destination or decision. Avoid "here", "this page", and bare URLs in canonical prose.
- Put conditions before instructions in procedural text so operators and agents know when a step applies.
- Use stable absolute product terms rather than local shorthand when the text may be consumed by SDK, MCP, support, or agent workflows.

## Examples and diagrams

Each implementation-critical contract should include examples where ambiguity would otherwise cause drift:

- state machines for long-running work, approvals, reviews, publications, automations, contradictions, deletion, and recovery;
- request and response examples for API, webhook, SDK, CLI, and MCP behavior;
- event examples for activity, audit, outbox, webhook, usage, release evidence, and progress streams;
- user journey examples for first-run activation, import, grounded chat, document production, collaboration, publishing, support, and recovery;
- schema sketches for domain records that cross package or service boundaries.

Diagrams must clarify ownership, data flow, or state transitions. Decorative diagrams are not production evidence.

## Stale and duplicate documentation

Stale documentation is a production defect when it can mislead an implementation agent, operator, support user, SDK consumer, customer-facing publisher, or security reviewer.

When a document becomes wrong, redundant, superseded, or too shallow to be useful:

1. update the canonical replacement first;
2. redirect dependent indexes, routing metadata, and required-reading lists;
3. delete or archive the dead content when no contract, evidence, or history requires it to remain;
4. preserve stable block identifiers only when the canonical document still owns the behavior;
5. run link validation and semantic drift review.

Do not keep duplicate documents as "maybe useful" references. If a retired document records an important decision, move that decision into an ADR, release-evidence record, or explicit non-action decision.

## Consistency controls

When editing documentation, check for:

- stale requirement counts, slice counts, document counts, route names, model names, package names, provider names, and benchmark claims;
- inconsistent capitalization of Project, SourceVersion, EvidenceSpan, Claim, Document, PublicationSnapshot, Research Run, ActivityEvent, ContextPack, and Product Truth Board;
- conflicting statements about implementation status, source immutability, public/private projections, retrieval authorization, provider policy, publication safety, or agent authority;
- links that point to overview files when the canonical contract is more precise;
- requirements that lack owner slices or owner slices that do not read the governing document;
- launch gates that omit validation commands, audit evidence, rollback, or operator ownership.

The baseline automated check is `pnpm docs:check`. Manual semantic review remains required for contradictions the link checker cannot detect.

## Documentation examples for production

Production-ready docs should contain enough concrete examples to unblock implementation without inventing behavior:

```text
User action
-> domain command
-> authorization check
-> state transition
-> emitted event
-> visible UI or API result
-> audit and release evidence
```

If a flow touches private content, sources, model calls, external tools, billing, public output, deletion, or support access, the example must name the policy guard that prevents overexposure.

## Review checklist

Before a documentation change is accepted:

- the governing contract is updated before dependent summaries;
- requirement IDs and owner slices are synchronized;
- requirement traceability points to the governing contracts and validation surfaces, with `pnpm docs:check` enforcing that every requirement in `_meta` appears in the human-readable traceability matrix;
- `PROJECT_STATUS.md` and `docs/06-delivery/implementation-status.md` match `docs/_meta/implementation-build-plan.json` for maturity, runtime state, next slice ID, and next slice title;
- `docs/README.md`, `docs/START-HERE.md`, and routing metadata include new canonical documents and first-level docs directories, with `pnpm docs:check` enforcing README directory-map coverage, full indexed-doc coverage, and contiguous duplicate-free `START-HERE` read order;
- affected implementation slices include required reading;
- product-readiness and launch gates mention new production obligations;
- official references are current when the change depends on unstable external behavior;
- public user-opinion, survey, competitor, customer, runtime, and generated-summary evidence uses the correct source-quality class, confidence state, bias label, and allowed-decision boundary;
- opinion-backed scope, benchmark, outcome, advanced-feature, Product Truth, launch, or claim changes link to reviewed user-opinion synthesis records instead of raw quotes, public threads, AI highlights, or generated summaries;
- stronger-than-specification customer-facing claim language is either backed by a CustomerClaimEvidenceRecord or downgraded to specification, preview, beta, or limitation-aware wording;
- a semantic drift review packet exists in the documentation-change evidence log, release evidence, implementation evidence, or PR record for material behavior, status, requirement, user-research, automation, advanced-feature, or launch-claim changes;
- validation commands are run and recorded.

## Launch gates

Research documentation is production-ready only when:

- every canonical document has a clear purpose, authority level, and update rule;
- every durable obligation maps to a requirement and owner slice;
- implementation slices can be built from their required reading without hidden context;
- release evidence includes documentation validation, source-quality snapshots, source review dates, and unresolved contradiction status;
- public, SDK, MCP, support, operator, and implementation docs cannot diverge from canonical contracts;
- `pnpm docs:check`, status-ledger validation, README directory-map validation, indexed-doc coverage, `START-HERE` read-order validation, routed-doc coverage, requirement-traceability coverage, stale-count sweeps, orphan-document sweeps, document-type audits, dead-document reviews, and semantic contradiction reviews pass for the release candidate with evidence shaped by [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md).

## Documentation update rule

Changes to documentation structure, authoring standards, examples, quality gates, or validation expectations must update:

- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md)
- [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- entry indexes and required-reading lists

If a documentation improvement changes product behavior, update the governing product or architecture contract before changing this standard.
