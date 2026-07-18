# Security policy

Research is currently an implementation-ready specification. Runtime security claims are not accepted until the relevant implementation slice records code, tests, and release evidence.

## Supported state

| Area | Current state |
|---|---|
| Runtime application | Not scaffolded |
| Security model | Specified |
| Threat model | [`docs/05-security/threat-model.md`](docs/05-security/threat-model.md) |
| Privacy operations | [`docs/05-security/privacy-and-compliance-operations.md`](docs/05-security/privacy-and-compliance-operations.md) |
| Security verification | [`docs/05-security/security-verification-matrix.md`](docs/05-security/security-verification-matrix.md) |
| Launch gates | [`docs/06-delivery/launch-readiness-and-release-evidence.md`](docs/06-delivery/launch-readiness-and-release-evidence.md) |

## Reporting vulnerabilities

Until the runtime is scaffolded, report security concerns as GitHub issues or private repository communications to the repository owner. Do not include live secrets, customer content, private source files, or exploitable payloads in public issues.

A useful report includes:

- affected document, requirement, route, workflow, or planned component;
- expected security invariant;
- observed gap or exploit path;
- affected tenants, data classes, providers, or external systems;
- reproduction steps using synthetic data;
- suggested severity and launch impact.

## Non-waivable launch blockers

The following block production release until fixed and retested:

- cross-tenant exposure;
- unauthorized source, document, publication, or connector access;
- credential leakage;
- prompt-injection path that changes policy, tools, identity, permissions, or publication;
- source deletion or publication withdrawal that cannot be reconciled;
- public/private projection leakage or drift;
- restore process that can resurrect deleted or withdrawn content;
- provider route that violates customer policy, data residency, retention, or training restrictions;
- billing, entitlement, or quota bypass that creates customer harm;
- privileged support access without scope, expiry, audit, and approval.

## Security design principles

1. Authorization is enforced before retrieval, reranking, model context assembly, export, publication, and connector action.
2. Source content is untrusted data and cannot redefine instructions, permissions, tool policy, or approval requirements.
3. Every privileged operation is attributable, auditable, idempotent where applicable, and recoverable.
4. Providers are adapters, not authorities. Provider-specific behavior cannot weaken product policy.
5. Analytics, support, traces, and evaluation datasets must not become shadow stores of private Project content.
6. Agents propose typed patches and operations. They do not silently mutate canonical documents, memory, publications, repositories, or connected systems.

## Required evidence before production

Security approval requires:

- threat-model updates for changed surfaces;
- automated authorization and tenant-isolation tests;
- prompt-injection and excessive-agent-authority tests;
- upload, parser, SSRF, webhook, cache, and public-link tests;
- dependency, secret, license, SBOM, and provenance scans;
- privacy, deletion, provider-policy, data-residency, support-access, and restore evidence;
- incident runbooks with owners and exercised drills.

## Scope notes

This policy governs the Research product and repository. It does not replace legal review, customer contracts, provider agreements, or jurisdiction-specific compliance obligations.
