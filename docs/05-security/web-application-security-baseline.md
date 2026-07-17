---
id: security-web-application-baseline
title: Web application and API security baseline
status: accepted
owner: security
last_reviewed: 2026-07-17
---

# Web application and API security baseline

## Purpose

This contract translates the threat model into mandatory controls for the TanStack Start application, Hono API, public publications, uploads, streaming endpoints, webhooks, SDKs, and administrative surfaces. It complements AI/agent safety; it does not assume model guardrails protect ordinary web boundaries.

OWASP ASVS is the verification baseline, with stricter product-specific controls for multi-tenant research content, asynchronous operations, connector credentials, citations, and public/private projections.

## Authentication and sessions

- Authentication uses approved providers and phishing-resistant MFA for privileged roles where supported.
- Session IDs are high entropy, rotated after authentication and privilege change, and invalidated on logout, deprovisioning, compromise, or policy change.
- Browser sessions use `Secure`, `HttpOnly`, appropriate `SameSite`, narrow domain/path, and bounded lifetime.
- Sensitive reauthentication is required for credential, organization, billing, publication, deletion, export, and privileged support actions according to risk.
- OAuth/OIDC state, nonce, PKCE, redirect URI, issuer, audience, and token-signature checks are mandatory.
- Account discovery, reset, and invite flows avoid leaking membership or tenant information.

## Authorization

Authorization is server-side, deny-by-default, and evaluated for every object and operation. The API does not trust route IDs, hidden controls, client claims, model output, or connector responses as authorization.

Queries apply tenant/Project/source/publication predicates before returning candidate rows. Batch, search, export, websocket/stream, webhook, and background-worker paths receive the same enforcement as ordinary REST calls. Object IDs are unguessable defense in depth, not access control.

High-impact commands bind actor, tenant, Project, resource version, policy, approval, and idempotency key. A permission change invalidates relevant sessions, caches, capabilities, and queued work.

## Request integrity

- Mutating browser requests use CSRF defenses appropriate to cookie-authenticated flows.
- CORS is explicit per environment and never reflects arbitrary origins with credentials.
- Host, forwarded headers, origin, redirect, and absolute-URL generation trust only configured proxies and domains.
- Request bodies, headers, query parameters, multipart fields, and file metadata have size, count, depth, encoding, and schema limits.
- Duplicate or ambiguous parameters, invalid Unicode, and conflicting content types fail predictably.
- Idempotency keys are scoped to actor, tenant, operation, and request hash.

## Output and browser security

All untrusted text is contextually encoded. Markdown, HTML, SVG, Mermaid, KaTeX, code previews, citations, and imported rich content pass explicit sanitization and renderer policies. User content cannot inject scripts, event handlers, dangerous URLs, iframe privileges, or CSS that escapes its surface.

The application defines a restrictive Content Security Policy, Trusted Types where compatible, frame-ancestor policy, referrer policy, MIME sniffing protection, permissions policy, and HSTS. Nonces/hashes are generated per response where needed. Public content is isolated from authenticated application origin or receives equivalent containment.

External links use safe schemes and explicit target behavior. Redirect destinations use allowlists or signed internal state.

## Uploads and downloads

Upload authorization precedes object creation. Server-observed type, signature, size, checksum, filename normalization, archive limits, and malware/quarantine status control processing. Originals are not served inline from an application-trusted origin when active content could execute.

Downloads set safe content type and disposition, use short-lived authorized URLs, and prevent path traversal or header injection. Export packages contain manifests and omit inaccessible sources by policy.

## APIs and asynchronous operations

API responses use consistent Problem Details without stack traces, secrets, SQL, filesystem paths, provider credentials, or cross-tenant identifiers. Pagination and filters are bounded. Rate limits supplement—not replace—authorization and commercial limits.

Operation, SSE, webhook, and polling endpoints verify ownership on every reconnect/read. Event sequence and replay windows prevent substitution or cross-run reads. Cancellation cannot be used to cancel another tenant’s work.

Webhooks verify signatures over raw bytes, timestamp, delivery/replay state, issuer, and expected event type. Outbound webhooks use signed envelopes, destination verification, retry bounds, and SSRF-safe delivery infrastructure.

## SSRF and outbound network policy

User-supplied URLs are normalized and resolved through an outbound fetch service that blocks loopback, link-local, private, metadata, unsupported schemes, DNS rebinding, redirect escape, and restricted ports. Browser and crawler workers use allow/deny policy, budget, egress logging, and no ambient internal credentials.

MCP servers, connectors, Git repositories, model tools, and generated code do not receive arbitrary network access by default.

## Injection and interpreters

SQL, shell, template, path, expression, regular-expression, and command inputs use typed APIs and parameterization. User input is never concatenated into shell commands, SQL, Git revisions, file paths, or code execution without strict parsing and allowlisting.

Generated code executes only in isolated Sandboxes with bounded CPU, memory, disk, process count, time, and network. Output is treated as untrusted.

## Cache and data leakage

Authenticated/private responses use explicit cache policy and vary on the correct identity/policy dimensions or bypass shared caches. Public and private projections use distinct keys and storage paths. Error pages, previews, Open Graph images, search indexes, analytics, and observability do not reveal private titles or snippets.

Sensitive response compression is reviewed for cross-origin secrets. Browser storage excludes credentials and private source bodies except explicitly protected offline features.

## Administrative surfaces

Administrative endpoints are separate, least-privilege, strongly authenticated, not discoverable solely through UI hiding, and protected by network or identity controls as appropriate. Support access remains case-bound, time-limited, metadata-first, approved, and audited.

## Security testing

Release gates include:

- ASVS-mapped unit, integration, browser, and API tests;
- cross-tenant and role matrix tests;
- CSRF, CORS, CSP, clickjacking, open redirect, cache-leak, and session tests;
- upload polyglot, archive bomb, active-content, and malicious filename fixtures;
- SSRF, DNS rebinding, webhook replay, and outbound redirect tests;
- injection, path, Git revision, and command fixtures;
- automated DAST against preview/staging plus targeted manual review;
- dependency, secret, workflow, container, and IaC scans.

Findings have owner, severity, exploitability, tenant/data impact, remediation SLA, release disposition, and regression test.

## Definition of done

The web and API baseline is production-ready when every externally reachable surface has explicit authentication, authorization, input, output, browser, network, cache, upload, session, and error behavior; representative ASVS controls are automated; and a test tenant cannot read, influence, or infer another tenant through synchronous, asynchronous, public, or administrative paths.
