---
id: security-secure-software-supply-chain
title: Secure software supply chain
status: accepted
owner: security
last_reviewed: 2026-07-17
---

# Secure software supply chain

## Purpose

Research will execute third-party JavaScript, parsers, OCR/media tools, browser engines, database extensions, GitHub Actions, model/provider SDKs, generated SDKs, containers, and isolated worker images. The software supply chain is therefore part of the product trust boundary.

## Dependency policy

Every dependency has an owner, purpose, license assessment, runtime boundary, version source, update strategy, and replacement path. The machine-readable tooling catalog expresses product intent; lockfiles and image digests express the actual build.

Dependencies are added only when they reduce more risk or implementation cost than they introduce. Overlapping frameworks, agent authorities, editor authorities, parsers, and workflow engines require an explicit architectural reason.

Production dependencies and build tools are pinned through lockfiles or immutable image/action digests. Floating tags such as `latest`, broad unbounded ranges, and mutable GitHub Action tags are not allowed in release inputs.

## Provenance and reproducibility

Release artifacts are built in controlled CI from an attributable commit and clean source tree. The build captures:

- repository and commit identity;
- workflow and runner identity;
- lockfile and toolchain checksums;
- environment and build arguments excluding secrets;
- produced artifact digests;
- software bill of materials;
- vulnerability and license scan results;
- provenance or artifact attestation.

Deployment verifies the artifact digest and provenance against the expected repository and workflow. Artifacts are promoted, not rebuilt, between staging and production.

## CI and GitHub Actions

- Workflow permissions default to read-only and are elevated per job.
- Third-party actions and reusable workflows are pinned to full immutable commit SHAs.
- Pull requests from untrusted forks cannot receive privileged secrets or write tokens.
- `pull_request_target` is prohibited for executing untrusted checked-out code.
- Build output from untrusted jobs is not consumed by privileged jobs without an integrity boundary and explicit validation.
- Environment approvals protect production credentials and promotion.
- Workflow files receive code-owner review and static analysis.
- Cache keys include trust boundary and lockfile/toolchain identity; untrusted caches cannot poison release builds.

## SBOM and vulnerability management

Each release has an SBOM covering application packages, worker/container packages, native binaries, and material build dependencies. Vulnerability scanning runs on pull requests, scheduled refresh, and release candidates.

Findings are normalized with component, version, exploitability, reachability, runtime exposure, tenant/data impact, fix availability, owner, SLA, and disposition. Severity alone does not define priority, but critical exploitable issues cannot be accepted silently.

A vulnerability exception includes rationale, compensating controls, scope, expiration, approver, and evidence. Expired exceptions fail the release gate.

## Update automation

Dependency update automation opens bounded, reviewable changes grouped by ecosystem and risk. It must run the same tests and evaluations as human changes. Security updates may use an expedited path, but still require provenance, compatibility checks, and rollback/forward-fix planning.

Major framework, database, AI SDK, model/provider, parser, and workflow upgrades require a migration note and targeted conformance tests. Automated merging is limited to explicitly approved low-risk classes.

## Licenses and redistribution

License metadata is recorded for source, binary, model, dataset, font, icon, media codec, and generated-output dependencies. The product distinguishes development-only use, server-side use, distribution in SDKs/desktop bundles, and customer-export embedding. Copyleft, source-available, model, and dataset terms receive legal review before adoption.

Attribution and notice files are generated from the actual release graph and reviewed for completeness.

## Native binaries and worker images

Parser, OCR, browser, media, office, and code-execution workers use minimal, versioned images pinned by digest. Images:

- run as non-root where practical;
- contain no ambient customer or deployment credentials;
- use read-only filesystems and bounded temporary storage where practical;
- declare network policy;
- are scanned before release and continuously thereafter;
- record OS packages, language packages, and native library versions;
- support rapid disablement and replacement.

Downloaded models, language packs, browser binaries, and parser data files are checksum-verified and stored in controlled registries.

## Secrets in the build system

Build secrets are injected only into jobs that require them, never embedded in artifacts, logs, caches, provenance, or SBOMs. CI output is scanned for credentials. A secret exposed to an untrusted job or artifact is treated as compromised and rotated.

## Package publication

Generated TypeScript and Python SDKs use protected publishing identities, provenance, version immutability, signed/attested release records where supported, and two-person approval for first publication or ownership changes. Package names are reserved early to reduce dependency-confusion risk.

Internal packages use scoped registries and explicit registry configuration. Install scripts are prohibited by default or reviewed for the exact package that requires them.

## Incident response

Supply-chain incidents support immediate:

- artifact and package withdrawal;
- deployment rollback or containment;
- dependency or action disablement;
- credential rotation;
- customer/tenant impact determination;
- SBOM-based affected-version lookup;
- rebuild from a known-good source and toolchain;
- publication of corrective releases and notices.

The incident record preserves evidence and maps affected release digests to deployments and customer-visible capability.

## Definition of done

Supply-chain readiness means the team can identify every material component in a deployed release, prove where the artifact came from, prevent mutable workflow/dependency inputs, detect vulnerable or disallowed components, rotate compromised build identities, and reproduce or replace the release without hidden developer-machine state.
