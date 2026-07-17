# Security verification matrix

This matrix turns the threat model into owned implementation and release evidence. Controls are defense in depth; one passing layer does not cancel a failure in another.

| Threat or failure | Preventive controls | Required verification | Primary slice |
|---|---|---|---|
| Cross-tenant data access | Server-side Project authorization, tenant-scoped queries, cache partitioning, least-privilege service roles | Negative API, retrieval, export, publication, workflow, and support tests | `identity-03`, `security-hardening-29` |
| Broken object authorization | Resource policy checks on every read and mutation; opaque identifiers are not treated as authorization | ID substitution and role downgrade suites | `identity-03` |
| Indirect prompt injection | Untrusted-source boundary, instruction/data separation, tool allowlists, read-only defaults, taint and provenance | Malicious PDF, webpage, issue, email, and repository fixtures | `agents-14`, `security-hardening-29` |
| Excessive agent authority | Short-lived scoped capabilities, approval gates, no self-approval, bounded budgets | Attempts to publish, write repositories, send data, change billing, or expand scopes | `agents-14`, `github-write-17` |
| SSRF and unsafe acquisition | URL parsing, DNS/IP policy, redirect revalidation, egress controls, content limits | Private-network, metadata-service, redirect, DNS rebinding, and oversized-response tests | `source-storage-05`, `security-hardening-29` |
| Malicious uploads and parsers | Byte-signature inspection, archive limits, malware checks, isolated parsers, resource quotas | Polyglot, decompression bomb, malformed media, macro, and parser escape fixtures | `parsing-06` |
| Web session attacks | Secure cookies, CSRF protection, origin checks, CSP, controlled CORS, output encoding | ASVS-oriented browser and API security suite | `shell-02`, `security-hardening-29` |
| Webhook forgery or replay | Signature verification over raw bytes, timestamp window, replay store, idempotency | Invalid signature, old timestamp, duplicate, reordered, and body-mutation tests | `connectors-21`, `platform-api-22` |
| Credential leakage | Secret manager, encrypted credential records, redaction, scoped tokens, short lifetimes | Repository, build, log, telemetry, support-export, prompt, and client-bundle scans | `security-hardening-29` |
| Supply-chain compromise | Full-SHA action pins, lockfiles, review policy, SBOM, provenance, vulnerability and license gates | Tampered dependency, unpinned action, vulnerable transitive package, and provenance checks | `security-hardening-29` |
| Cache or search leakage | Authorization before retrieval, tenant/model/index cache keys, no shared private embeddings | Cross-tenant cache, reranker, vector, and stale-permission tests | `retrieval-08`, `security-hardening-29` |
| Public/private projection leakage | One canonical revision, explicit projection policy, privacy and rights checks | Hidden-block, private-source, revoked-source, and publication snapshot fixtures | `publishing-18`, `security-hardening-29` |
| Deletion resurrection | Tombstones, derivative traversal, restore reapplication, cache/index invalidation | Delete, restore, reconnect, and backup-expiry exercises | `maintenance-20`, `governance-25`, `release-30` |
| Billing or quota abuse | Reservations, immutable usage ledger, signed provider reconciliation, rate and concurrency limits | Duplicate, delayed, corrected, adversarial, and denial-of-wallet scenarios | `commercial-23`, `security-hardening-29` |
| Administrative misuse | Separate support plane, step-up, time-bounded grants, dual control, immutable audit | Break-glass, expired grant, unauthorized repair, and evidence-access tests | `operations-24`, `security-hardening-29` |
| Migration or rollback corruption | Expand/backfill/switch/contract, compatibility windows, backups, reconciliation | Mixed-version, interrupted backfill, rollback, restore, and in-flight workflow tests | `evolution-27`, `release-30` |

## Evidence format

Each verification record includes control version, test or exercise ID, environment, source commit, artifact digest, configuration version, data fixture, actor, result, affected tenants where applicable, logs or traces, remediation owner, and expiry or next exercise date.

## Release rule

A failed tenant-isolation, credential, destructive-action, publication-privacy, deletion, or restore control blocks general availability. Risk acceptance requires an authorized owner, bounded scope, compensating control, expiry, and tracked remediation; some invariants are non-waivable.
