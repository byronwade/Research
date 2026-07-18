---
id: delivery-release-engineering-change-control
title: Release engineering and change control
status: accepted
owner: release
last_reviewed: 2026-07-17
---

# Release engineering and change control

## Purpose

This contract defines how Research moves one reviewed source revision into preview, staging, and production without rebuilding different artifacts, hiding migration risk, or losing the ability to stop and reverse a release. It applies to the web application, optional native companion and browser extension artifacts, Hono API, durable workflows, workers, generated SDKs, database migrations, search/index schemas, prompts, evaluation sets, policy bundles, and customer-facing documentation.

A successful deployment is not automatically a safe release. A release is the coordinated promotion of an immutable application artifact plus a declared set of compatible contracts, data changes, configuration, and operational evidence.

## Release unit

Every release candidate receives a stable `ReleaseCandidateId` and records:

- source commit and clean-tree status;
- dependency lockfile and build-tool versions;
- application, worker, workflow, prompt, policy, schema, SDK, browser extension, and desktop companion versions where applicable;
- produced artifact digests and software bill of materials;
- provenance or attestation references;
- database and projection migration plans;
- feature-flag and configuration snapshots;
- implementation decision register snapshot, including accepted decisions, open decisions, waivers, expiry dates, and review triggers;
- evaluation, unit, integration, browser, security, accessibility, load, and recovery evidence;
- CustomerClaimEvidenceRecords for customer-facing release notes, support guidance, availability statements, SDK or API documentation, testimonials, benchmark wording, and launch communications that make stronger-than-specification claims;
- reviewer, approval, promotion, rollback, and incident records.

The same immutable artifacts are promoted between environments. Production may not rebuild from source after staging acceptance because a rebuild creates a different release candidate.

## Environment progression

```text
Pull request
  → deterministic validation
  → preview deployment
  → integration environment
  → staging release candidate
  → production canary or limited cohort
  → progressive production promotion
  → post-release verification
```

Preview environments verify ordinary code paths and design behavior. Integration environments exercise real dependency adapters with non-production data. Staging must use production-equivalent topology, policy defaults, migration order, and observability. Production promotion is blocked when staging uses a materially different artifact, schema, queue, region, identity, or provider configuration, or when the difference is not backed by an accepted implementation decision record.

## Required gates

A release candidate cannot be promoted unless the applicable gates are green and linked to the candidate:

1. Repository and dependency integrity, including lockfile, license, secret, malware, and vulnerability checks.
2. Compile, type, lint, package-boundary, dead-code, unit, integration, contract, and browser tests.
3. Database migration rehearsal against a representative restored dataset.
4. API, event, workflow, document, artifact, index, and SDK compatibility checks.
5. Cross-tenant, public/private, prompt-injection, authorization, and destructive-action tests.
6. Accessibility and supported-locale checks for changed user surfaces.
7. AI evaluation deltas for changed models, prompts, tools, retrieval, parsing, or orchestration.
8. Performance budgets and load checks for changed critical paths.
9. Backup, rollback, restore, or forward-fix evidence appropriate to the change risk.
10. Deployment Checks and smoke tests against the actual candidate URL.

A waiver must identify the failed gate, owner, scope, expiration, customer impact, compensating control, and rollback trigger. A waiver cannot disable tenant isolation, authorization, source privacy, publication leakage, or data-integrity gates.

## Change classes

| Class | Examples | Minimum control |
|---|---|---|
| Standard | copy, low-risk UI, isolated optional adapter | normal review and automated gates |
| Elevated | model route, parser, retrieval ranking, flag default, workflow retry behavior, companion extension or desktop adapter capability | domain owner plus targeted evaluations and canary |
| High risk | authorization, billing, deletion, publication, migration, key policy, source rights | two-person approval, rehearsal, explicit rollback/forward-fix plan |
| Emergency | active security, integrity, or availability incident | incident commander authorization, bounded change, immediate retrospective |

Change class is computed from affected capabilities and may be raised manually. It cannot be lowered solely to bypass a gate.

## Progressive delivery

Feature availability, traffic percentage, region, tenant cohort, and model/provider routing are independent controls. Canary promotion must include:

- a named cohort and duration;
- baseline and candidate service-level indicators;
- error, latency, cost, quality, safety, and data-integrity thresholds;
- automatic stop conditions;
- a human owner with authority to abort;
- comparison against an unaffected control where practical.

A kill switch is not authorization. It can disable a feature or provider path, but it cannot grant access, bypass policy, broaden source scope, or silently change retention or residency.

## Rollback and forward recovery

Application artifacts and routing aliases should be reversible quickly. Data migrations, event emissions, external writes, and irreversible public disclosures may require forward recovery instead of binary rollback.

Every elevated or high-risk change must declare one of:

- **instant artifact rollback** — previous compatible artifact can be restored without data action;
- **expand/contract rollback window** — old and new code remain compatible during migration;
- **compensating forward migration** — reverting would corrupt or discard accepted data;
- **containment only** — stop writes, disable capability, preserve evidence, and repair under incident control.

Rollback success includes post-rollback smoke, integrity, queue/workflow, publication, and usage-reconciliation checks. A platform-level “rollback completed” status is insufficient by itself.

## Database and contract sequencing

Production changes use compatible sequencing:

```text
expand schema/contracts
→ deploy dual-compatible readers and writers
→ backfill with checkpoints
→ verify completeness and drift
→ switch reads/writes behind a controlled flag
→ observe
→ remove old path in a later release
→ contract schema
```

Destructive database changes, event-field removal, API behavior removal, workflow step removal, citation-locator changes, and document-schema contraction require an explicit deprecation window or a coordinated migration with no unsupported clients or in-flight runs.

## Release evidence and audit

The release record is append-only. It stores the candidate, approvals, gate results, exceptions, promotion times, cohort changes, rollback or forward-fix actions, CustomerClaimEvidenceRecords, and final disposition. Customer-impacting changes must link release notes and support guidance to actual runtime capability rather than planned documentation. Stronger-than-specification wording follows [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md).

## Branch and repository policy

- `main` is always releasable and protected after bootstrap.
- Implementation work uses dependency-scoped branches and pull requests.
- Required checks, signed or attributable commits, review rules, and environment approvals are configured in GitHub.
- Workflow actions and reusable workflow references are pinned to immutable revisions and updated through reviewed automation.
- Release tags are immutable; a correction creates a new tag and release record.
- Generated OpenAPI, SDK, database, event, and policy artifacts must be reproducible or committed according to their governing contract.

## Emergency changes

Emergency changes must be narrow, attributable, and followed by normal validation as soon as the immediate risk is controlled. The emergency path cannot become an alternate routine deployment path. It requires:

- incident identifier and commander;
- exact scope and expected impact;
- pre-change snapshot or recovery point;
- bounded approval;
- post-change validation;
- retrospective and permanent fix ownership.

## Definition of done

Release engineering is production-ready when a candidate can be built once, attested, promoted through representative environments, canaried, observed, stopped, rolled back or forward-recovered, and audited without direct database edits, hidden rebuilds, or undocumented operator knowledge.
