---
id: architecture-abuse-prevention-policy-and-enforcement
title: Abuse prevention policy and enforcement
status: accepted
owner: architecture
last_reviewed: 2026-07-18
---

# Abuse prevention policy and enforcement

## Purpose

This architecture contract defines how Research enforces acceptable-use, abuse-prevention, provider-policy, rate, quota, content-safety, publication, and automation-risk decisions without creating a second content authority or hidden moderation store.

The product behavior is governed by [`../01-product/abuse-prevention-and-trust-safety.md`](../01-product/abuse-prevention-and-trust-safety.md). This document owns typed records, enforcement boundaries, lifecycle, minimization, events, API behavior, testing, and release evidence.

## Requirements

- `ABUSE-001`: abuse-aware automation, publication, API, connector, repository, notification, and export controls.
- `ABUSE-002`: content-minimized, policy-versioned, auditable abuse enforcement with deterministic preflight, provider-policy checks, tenant-scoped quotas, false-positive review, and no shadow moderation store.

## Domain package

Add an `abuse-prevention` domain package with typed ports and adapters. It depends on Project policy, activity, operations, approval policy, entitlements, source rights, provider governance, and security audit ports. Other packages call it at explicit decision points; it does not reach into their private persistence directly.

Provider-specific content-safety classifiers, abuse-monitoring services, bot-detection providers, CAPTCHA providers, and model-provider moderation APIs remain adapters behind internal ports. The domain stores provider decisions as policy evidence, not as provider-owned truth.

## Core objects

| Object | Purpose |
|---|---|
| `AbusePolicy` | Versioned Organization or Project policy for acceptable use, quotas, review thresholds, provider eligibility, enforcement actions, appeal classes, and emergency controls. |
| `AbusePolicySnapshot` | Immutable policy version attached to an intent, Operation, ActionCard, decision, API response, audit event, or release-evidence item. |
| `AbuseSignal` | Content-minimized signal from activity, API usage, source acquisition, publication, automation, GitHub proposals, connector writes, provider responses, support, or security fixtures. |
| `AbuseCase` | Review container for related signals, affected resources, actors, client refs, policy version, risk category, review state, and resolution. |
| `AbuseDecision` | Deterministic or reviewed allow, limit, challenge, review, block, suspend, appeal, or resolve decision for one target and expected version. |
| `AbuseThrottle` | Tenant, Project, user, service-account, route, recipe, connector, source-family, destination, or publication limit with window, budget, cooldown, and retry guidance. |
| `AbuseReview` | Human or owner review record for uncertain or high-impact decisions, linked to ActionCards and support-safe diagnostics. |
| `AbuseAppeal` | User, owner, or support dispute of a decision, with safe context, reviewer outcome, false-positive classification, and expiry. |
| `AbuseEnforcementAction` | Executed control such as reduced rate, challenge, review hold, route denial, publication block, API suspension, recipe pause, connector write stop, or emergency kill switch. |
| `AbuseOutcomeObservation` | Measurement of whether a decision prevented harm, caused a false positive, created support load, reduced cost abuse, or should update policy. |

## Enforcement points

Abuse preflight runs before:

- source acquisition, web capture, upload activation, parser execution, and public-web crawl expansion;
- deep research and agent task creation;
- model route selection where provider policy or content-safety classification affects eligibility;
- publication, export, public-link creation, and takedown-sensitive workflows;
- Automation Recipe validation, canary activation, trigger execution, and high-volume scheduled work;
- GitHub issue, branch, commit, pull-request, check, or comment proposals;
- connector writes, notification sends, email sends, webhook deliveries, and external API calls;
- support access, support diagnostic export, and administrative policy overrides;
- developer API mutation, MCP tool execution, high-volume search, context-pack creation, and bulk export;
- retry, replay, restore, compensation, or webhook replay when the effect could repeat an abusive action.

Preflight is deterministic-first. Model or provider classifiers can add evidence, but they do not replace local authorization, rights, budget, rate, provider-policy, and expected-version checks.

## Decision lifecycle

```text
IntentRecord / Command / API request / Recipe trigger
-> authorization, rights, provider, budget, quota, and expected-version checks
-> AbuseSignal assembly from content-minimized inputs
-> AbusePolicySnapshot selection
-> AbuseDecision
   -> allow
   -> limit / cooldown / schedule
   -> challenge or review ActionCard
   -> block with stable reason
   -> suspend scoped capability
-> ActivityEvent and audit where required
-> AbuseOutcomeObservation and policy feedback
```

Each decision binds actor, Organization, Project, client, target resource, expected version, source scope, destination, action class, side-effect class, budget class, policy snapshot, and idempotency identity.

Stale, replayed, widened, or scope-mismatched decisions fail closed at the mutation boundary.

## Data minimization

Abuse records may store:

- identifiers, versions, hashes, policy refs, route names, action classes, side-effect classes, quota classes, safe labels, and redacted reason categories;
- classified counters, rates, windowed aggregates, provider decision categories, severity levels, and appeal outcomes;
- support-safe excerpts only when the governing content store already allows them and retention is explicit.

Abuse records must not store raw source text, raw prompts, private document bodies, private comments, full citations, hidden reasoning, credentials, connector payloads, private URLs, screenshots, clipboard contents, browser history, operating-system state, unredacted support notes, or raw provider trace payloads unless a stricter approved case workflow owns that data class.

Abuse telemetry does not become independent evidence for Claims, Product Truth, or public marketing claims.

## Policy composition

Effective policy is resolved in this order:

1. legal, provider, and platform safety restrictions;
2. Organization policy;
3. Project policy;
4. source rights and residency policy;
5. entitlement, plan, usage, and budget policy;
6. automation, approval, and delegated-trust policy;
7. route, destination, and client-specific limits.

Stricter policy wins unless an explicit reviewed exception is permitted. Exceptions require owner, scope, expiry, compensating controls, audit, and release-evidence visibility.

## Rate, quota, and budget controls

AbuseThrottle records support:

- fixed windows, sliding windows, token buckets, concurrency caps, queue admission, and cost reservations;
- separate limits for interactive, background, API, MCP, source acquisition, publication, export, connector, webhook, recipe, and GitHub work;
- per-Organization, per-Project, per-user, per-service-account, per-client, per-route, per-source-family, per-destination, and per-recipe dimensions;
- cooldown, retry-after, schedule-later, narrow-scope, request-review, and hard-denial outcomes;
- false-positive and customer-impact tracking.

Limits must not reveal another tenant's usage. Public API metadata exposes only the caller's authorized limit category and retry guidance.

## Provider policy and content safety

Provider-specific policy decisions are normalized into Research objects:

- provider profile and policy version;
- allowed data classes, regions, retention, training-use status, and subprocessors;
- content-safety category and severity where available;
- jailbreak, protected-material, malware, or policy-abuse category where available;
- allowed, filtered, refused, blocked, appealed, or unknown state;
- remediation or fallback route where policy permits.

Provider refusal does not automatically create a Research block for all providers. Research must decide whether fallback is allowed by source rights, Project policy, provider policy, content-safety classification, residency, and release evidence.

## Reviews and appeals

`AbuseReview` and `AbuseAppeal` records are separate from support access. Reviewers see only the minimum context needed for the decision. Private content access requires a SupportAccessRequest and SupportAccessSession.

Appeal decisions can:

- confirm the original block;
- narrow the allowed scope;
- convert a hard block to a cooldown or review requirement;
- mark a false positive;
- update policy through a reviewed change;
- escalate to security, legal, or provider-support channels.

Appeal reversal does not erase the original decision, audit, or ActivityEvent. It creates a new outcome record and links to the corrected policy or decision.

## Events

Abuse event families include:

- `abuse.signal_recorded`
- `abuse.decision_recorded`
- `abuse.limit_applied`
- `abuse.challenge_required`
- `abuse.review_requested`
- `abuse.review_resolved`
- `abuse.appeal_opened`
- `abuse.appeal_resolved`
- `abuse.enforcement_applied`
- `abuse.enforcement_released`
- `abuse.policy_updated`
- `abuse.outcome_observed`

External webhook projections expose only authorized metadata, target refs where allowed, decision state, reason category, retry class, appeal state, and redacted summaries. They cannot expose private source text, prompts, document bodies, credentials, connector payloads, hidden reasoning, private URLs, screenshots, or raw provider traces.

## API behavior

The API exposes abuse and trust-safety resources through Project and Organization policy endpoints:

- policy and effective limit reads;
- AbuseCase, AbuseDecision, AbuseReview, AbuseAppeal, and AbuseOutcomeObservation reads where authorized;
- review and appeal mutations;
- safe retry, scope-narrowing, and schedule-later actions;
- administrative policy updates where authorized;
- content-minimized webhook events.

Stable error codes include:

- `abuse_policy_denied`
- `abuse_review_required`
- `abuse_challenge_required`
- `abuse_capability_suspended`
- `abuse_limit_exceeded`
- `abuse_retry_later`
- `provider_policy_denied`
- `content_safety_blocked`
- `appeal_not_available`

Errors include safe reason category, request id, retry guidance where applicable, appeal availability, ActionCard or Operation link where authorized, and no private content.

## Observability

Dashboards track:

- allow, limit, review, block, suspend, and appeal rates by safe category;
- per-surface quota and concurrency pressure;
- false-positive rate, appeal reversal rate, reviewer backlog, and support volume;
- provider-policy denied routes and fallback outcomes;
- automation pause, recipe trigger abuse, API client suspension, and public publication blockers;
- cost-abuse prevention, denial-of-wallet attempts, and provider-failure correlation.

Metrics and traces use content-minimized dimensions only.

## Release gates

Before production:

1. Source acquisition, deep research, publication, export, GitHub proposal, connector write, notification, API, MCP, support access, and recipe execution paths call abuse preflight before side effects.
2. AbusePolicy, AbuseSignal, AbuseDecision, AbuseThrottle, AbuseReview, AbuseAppeal, AbuseEnforcementAction, and AbuseOutcomeObservation schemas exist with migrations, retention, deletion, and audit behavior.
3. Positive and negative fixtures cover allowed work, false positives, ambiguous reviews, provider-policy denial, content-safety block, rate bursts, quota exhaustion, concurrency pressure, bot-shaped API traffic, publication spam, GitHub PR spam, notification spam, and recipe runaway loops.
4. Stable API errors, ActionCards, ActivityEvents, audit events, webhook projections, and support-safe diagnostics are validated.
5. Emergency kill switches exist for source acquisition, public publishing, provider routes, API clients, connector writes, notifications, GitHub proposals, and recipe triggers.
6. Appeals and review queues have owner, SLO, escalation, false-positive measurement, and runbook evidence.
