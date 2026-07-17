---
id: security-threat-model
title: Threat model
status: accepted
owner: security
last_reviewed: 2026-07-16
---

# Threat model

## Scope

This threat model covers the browser application, TanStack Start server runtime, Hono API, Postgres, Blob, search indexes, Workflows, Queues, Sandbox, AI Gateway/providers, web fetchers, source parsers, connectors, MCP servers, and public documentation delivery.

The system holds private research corpora and may expose selected public projections. Confidentiality and provenance failures are therefore as serious as conventional account compromise.

## Assets

- user identities, sessions, memberships, and organization policy;
- connector grants and refresh credentials;
- uploaded and connected source originals;
- immutable SourceVersions and locators;
- private documents, chats, claims, and evidence;
- public disclosure and publication policy;
- model inputs, outputs, tool calls, and usage;
- audit records and deletion evidence;
- billing and budget state;
- application signing and webhook secrets.

## Trust boundaries

```text
untrusted browser
  │ authenticated request
  ▼
application edge / Hono policy boundary
  │ authorized identifiers only
  ├── database and private Blob
  ├── workflow/queue control plane
  ├── AI provider boundary
  ├── connector/provider boundary
  ├── public internet fetch boundary
  └── isolated Sandbox boundary

public publication delivery is a separate read path over approved snapshots
```

Source content remains untrusted after authentication. A private PDF can be malicious even when uploaded by a legitimate user.

## Principal threats and controls

| Threat | Example | Primary controls |
|---|---|---|
| broken object authorization | changing `projectId` exposes another Project | Project-scoped query APIs, centralized policy, negative tests |
| cross-tenant search leakage | vector search returns another tenant's chunk | authorization filter before retrieval, Project-partitioned indexes, no shared final caches |
| public/private disclosure failure | private citation appears on public page | immutable public snapshot pipeline, disclosure manifest, release-blocking leak tests |
| prompt injection | repository file tells model to upload secrets | source/data separation, tool allowlists, code authorization, verifier |
| credential theft | model output or log captures OAuth token | token broker, opaque connection IDs, redaction, no secrets in context |
| SSRF | imported URL targets cloud metadata or internal service | URL normalization, DNS/IP revalidation, private-range block, redirect limits |
| parser compromise | crafted document exploits converter | Sandbox isolation, patched images, resource/network limits |
| archive bomb | nested compressed upload exhausts resources | preflight limits, bounded expansion, quotas |
| malicious external tool | MCP server returns hostile instructions or exfiltrates input | allowlist, narrow schemas/scopes, output limits, no broad context |
| unauthorized external write | model opens PR or sends email | separate write grant, exact approval binding, audit |
| source tampering | mutable URL changes after citation | immutable snapshots and hashes |
| replay/duplicate mutation | webhook or client retry creates duplicate source/run | signatures, timestamps, idempotency keys, receipts |
| model/provider data-policy violation | restricted source sent to unapproved route | policy-aware routing before request construction |
| stored XSS | generated Markdown contains scripts | sanitization, CSP, safe renderer, no arbitrary HTML |
| supply-chain compromise | parser or package update exfiltrates data | lockfiles, provenance, dependency scanning, least-privilege runtime |
| billing abuse | automated deep research exhausts budget | rate limits, budgets, quotas, anomaly detection |
| denial of service | huge uploads or repeated workflows | staged quotas, signed uploads, concurrency and queue limits |
| insider misuse | administrator browses private data without need | scoped roles, support access workflow, audit, break-glass review |

## Public/private attack paths

Public rendering is high risk because filtering private content after generation is insufficient. The safe path begins with canonical blocks eligible for public disclosure, maps citations through an approved public representation, scans the resulting snapshot, and publishes immutable bytes.

Public endpoints cannot call general Project search, private document loaders, connector APIs, or model tools.

## AI-specific attack paths

### Instruction confusion

A model interprets source text as policy. Mitigations: labeled source envelopes, stage prompts, schema-bound tools, code-level permissions, output review.

### Indirect exfiltration

A malicious source asks the model to include another source in a public answer or tool call. Mitigations: Project and disclosure context at executor, public snapshot pipeline, secret scanning, exact action approval.

### Citation laundering

A generated summary cites itself or several derivatives as independent support. Mitigations: upstream provenance and independence groups.

### Tool argument smuggling

Model places a URL, command, SQL fragment, or file path in an allowed tool. Mitigations: semantic validation, allowlists, safe resolvers, Sandbox, parameterized queries.

### Context poisoning

Repeated low-quality sources dominate retrieval. Mitigations: source-quality signals, independence grouping, source caps, contradiction search, user pin/exclude controls.

## Abuse cases

- using the service to crawl prohibited or unauthorized material;
- uploading illegal or harmful content;
- attempting to identify private source existence through timing or errors;
- mass-generating public misinformation with fabricated citations;
- using connected systems beyond the user's authorization;
- using Sandbox for cryptomining, network abuse, or persistence;
- creating excessive model spend through scripted requests.

Acceptable-use enforcement, rate limiting, content handling procedures, and incident response must exist before public launch.

## Security verification

Release gates include:

- SAST, dependency, secret, and infrastructure checks;
- API authorization matrix tests;
- cross-Project and cross-organization search tests;
- public/private publication fixtures;
- webhook replay and signature tests;
- SSRF and URL parser tests;
- malicious document/archive corpus;
- prompt-injection and tool-policy evaluations;
- deletion and revocation exercises;
- third-party penetration testing before enterprise release.

## Residual risk

Models can still misinterpret evidence, external providers can fail, and novel parser/model attacks can bypass classifiers. The architecture therefore limits blast radius, preserves auditability, requires review for material publication and external writes, and supports subsystem kill switches.
