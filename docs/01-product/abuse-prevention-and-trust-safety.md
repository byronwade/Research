---
id: product-abuse-prevention-and-trust-safety
title: Abuse prevention and trust safety
status: accepted
owner: product
last_reviewed: 2026-07-18
---

# Abuse prevention and trust safety

## Purpose

Research gives users durable research, public publishing, connector actions, repository proposals, scheduled automation, and developer APIs. Those capabilities create abuse risk even when each individual action appears valid. Abuse prevention is therefore a product surface, not only an invisible security filter.

This document defines user-facing behavior for acceptable-use enforcement, automated-abuse resistance, content-safety review, provider-policy compliance, publication protection, API and connector abuse controls, review queues, appeals, and false-positive handling.

## Evidence basis

This contract is informed by official guidance and public practitioner signals reviewed on 2026-07-18:

- [OpenAI Usage Policies](https://openai.com/policies/usage-policies/) emphasize shared responsibility, enforcement, privacy safeguards, developer moderation tooling, misuse reporting, and appeal paths.
- [OWASP Automated Threats to Web Applications](https://owasp.org/www-project-automated-threats-to-web-applications/) frames abuse as misuse of valid application functionality, not only classic implementation bugs.
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) and the Generative AI Profile encourage lifecycle risk identification, trustworthiness considerations, measurement, and governance.
- [Microsoft content filtering documentation](https://learn.microsoft.com/en-us/azure/foundry-classic/foundry-models/concepts/content-filter) documents prompt and completion filtering, configurable severity behavior, abuse monitoring, jailbreak detection, and privacy considerations.
- [GitHub REST API rate-limit documentation](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) treats rate limits as abuse and availability controls.
- Public Hacker News and Reddit discussions reviewed on 2026-07-18 highlight AI-generated pull-request spam, false-positive blockwalls, rate-limit frustration, agent approval fatigue, and privacy concerns around public notebook or source sharing. These are directional product signals only, not statistical proof.

## Requirements

- `ABUSE-001`: Projects expose abuse-aware automation, publication, API, connector, repository, notification, and export controls with user-visible limits, risk explanations, review queues, escalation, and appeal paths before launch.
- `ABUSE-002`: Abuse enforcement is content-minimized, policy-versioned, auditable, and measurable, with deterministic preflight at mutation boundaries, provider-policy checks, tenant-scoped quotas, false-positive review, and no shadow moderation store of private Project content.

## Product principles

- **Useful work should not feel randomly blocked.** Users see what class of limit or policy stopped work, what can be changed safely, and whether retry, scope narrowing, review, or appeal is available.
- **Automation earns scale.** Scheduled research, recipes, API clients, public publishing, GitHub proposals, notifications, and connector writes start with conservative limits and expand only with accepted outcome evidence, low abuse signals, and owner approval.
- **High-risk effects pause before mutation.** Publication, external writes, repository proposals, connector widening, bulk notifications, exports, deletion, billing-affecting work, and public source acquisition run abuse preflight before side effects.
- **Abuse controls preserve privacy.** Enforcement uses classified metadata, hashes, counters, policy snapshots, safe labels, and redacted summaries by default. Private source bodies, prompts, document bodies, hidden reasoning, credentials, connector payloads, screenshots, and private URLs do not become a separate trust-safety corpus.
- **Appeals and false positives are first-class.** The product records blocked work, user-visible reasons, support-safe context, reviewer decisions, policy versions, and correction outcomes so enforcement can improve without hiding mistakes.
- **Provider policy is not delegated to providers alone.** Research preflights source rights, Project policy, provider eligibility, model route policy, content-safety classification, and output destination before calling external services.

## Abuse surfaces

| Surface | Abuse risk | Required product behavior |
|---|---|---|
| Source acquisition | prohibited crawling, scraping, unauthorized redistribution, source stuffing, malicious uploads | rights review, robots/site policy where applicable, acquisition budget, malware and archive controls, source-quality signals, public-web scope review, and blocked-source explanations |
| Deep research and agents | denial of wallet, spammy long runs, hidden external actions, unsafe autonomy | explicit budget, source scope, stop conditions, cost estimate, approval class, bounded workers, and outcome scorecards |
| Automation Recipes | runaway triggers, duplicate work, external-write loops, quiet policy drift | trigger dedupe, cooldowns, canary limits, review gates, safety blockers, Activation ActionCards, and automatic pause on abuse signals |
| Public publishing | mass misinformation, fabricated citations, privacy leakage, rights violations, harmful outputs | publication preflight, evidence coverage, rights and policy blockers, content-safety review, immutable snapshot, takedown and withdrawal path |
| GitHub proposals | AI pull-request spam, low-quality issue noise, unwanted repository automation | repository-owner approval, sandboxed diffs, quality gates, rate budgets, one-proposal-at-a-time policy where needed, and draft PR defaults |
| Connector writes | bulk email, notification spam, unauthorized data movement, rate-limit violations | least-privilege scopes, destination allowlists, provider limits, quiet hours, external-write approval, and side-effect reconciliation |
| Developer API and MCP | high-volume scraping, token sharing, unbounded exports, rate-limit evasion | service-account scopes, per-tenant and per-route quotas, cursor limits, stable 429 errors, webhook verification, and abuse review |
| Support and administration | abusive support access, policy overrides, hidden unblock decisions | customer-visible diagnostics, SupportAccessRequests, SupportAccessSessions, audit, dual control where required, and break-glass review |

## User-visible states

Abuse controls expose stable states so users and support can reason about blocked work:

| State | Meaning | User action |
|---|---|---|
| `allowed` | Work passed current policy and quota checks. | Continue. |
| `limited` | Work can proceed at a lower rate, smaller batch, narrower source scope, or lower budget. | Narrow, schedule, or request limit review. |
| `challenge_required` | Work needs additional confirmation, ownership proof, or high-risk review before proceeding. | Complete the ActionCard. |
| `review_required` | Automated checks cannot safely decide. | Submit for human or owner review. |
| `blocked` | Current policy forbids the action. | Inspect reason, choose a safe alternative, or appeal if policy allows. |
| `suspended` | A client, recipe, source family, Project, or capability is temporarily disabled pending review. | Open support or administrator review. |
| `appeal_open` | The user or owner disputes the decision. | Provide requested context; no duplicate appeal spam. |
| `resolved` | A decision was confirmed, narrowed, reversed, or converted into a policy update. | Continue within the recorded outcome. |

## Product surfaces

### Project settings

Project administrators can inspect effective abuse and acceptable-use policy:

- API, recipe, source acquisition, publication, GitHub, export, notification, and connector quotas.
- Blocked action classes and high-risk ActionCard requirements.
- Provider-policy eligibility by source classification and destination.
- Review queues, appeal state, and suspension state.
- Abuse health indicators that expose categories and remediation without leaking private content.

Organization policy can make limits stricter than Project policy. Project owners cannot silently bypass Organization, provider, residency, rights, billing, or trust-safety restrictions.

### Review queue

Abuse decisions that require user or owner action appear as ActionCards with:

- target resource and expected version;
- action class, destination, source scope, budget, and provider route;
- policy version and safe reason category;
- allowed resolution actions;
- false-positive or appeal path where policy permits;
- retry window, cooldown, or expiry;
- support-safe diagnostic link when review needs support.

### Trust dashboard

The Trust Dashboard includes abuse and publication blockers only as projections over canonical policy decisions. It does not become a moderation authority. It can summarize:

- unsupported or fabricated-citation risk;
- source-rights blockers;
- policy-denied provider routes;
- suspicious automation or publication patterns;
- abuse-related review queues;
- appeal and takedown status.

### Developer experience

API and SDK clients receive stable error codes for abuse, quota, budget, and policy decisions. Responses include safe retry guidance, `retry_after` where useful, current limit category where authorized, and an Operation or ActionCard link when review is possible.

Clients cannot use cursor pagination, webhook replay, public export, MCP tools, or service-account fanout to bypass abuse policy.

## Appeal and false-positive handling

Appeals are allowed only for policy classes that can be reviewed without increasing harm. Appeal records include:

- decision id, policy version, target resource refs, actor, Organization, Project, and client refs;
- safe reason categories and redacted summary;
- requested remedy and user-supplied context;
- reviewer decision, narrowed scope, escalation, or confirmation;
- false-positive classification and product-quality linkage;
- expiry, retention, and support case links.

False positives are measured by reversal rate, reviewer override rate, customer impact, abandoned work, support volume, and repeated blocks on legitimate workflows. A high false-positive rate is a product defect and blocks launch for affected high-value workflows.

## Abuse health signals

Research tracks content-minimized signals such as:

- bursty source acquisition, publication, export, or notification attempts;
- repeated policy-denied provider routes;
- high duplicate research runs, duplicate GitHub proposals, or repeated rejected automations;
- rejected publication snapshots, fabricated-citation blockers, or unsupported-claim density;
- API clients approaching quota, concurrency, or budget limits;
- repeated ActionCard expiry, appeal churn, and stale approval reuse;
- cost spikes, provider failures, and denial-of-wallet patterns.

Signals become TruthSignals or release evidence only after reviewed classification. They cannot independently prove factual user-document claims.

## Non-goals

- Research does not promise perfect harmful-content classification.
- Research does not store customer content in a shadow trust-safety dataset by default.
- Research does not allow users to buy their way around rights, provider-policy, public-safety, or tenant-isolation limits.
- Research does not treat provider-side refusal or filtering as sufficient application enforcement.
- Research does not publicly claim a safety category is fully mitigated until release evidence proves the specific workflow.

## Acceptance criteria

Before general availability:

1. `ABUSE-001` and `ABUSE-002` have owner slices, schemas, API contracts, events, test fixtures, and release gates.
2. Source acquisition, deep research, public publishing, GitHub proposal, connector write, API export, notification, and automation-recipe flows run deterministic abuse preflight before side effects.
3. Abuse decisions create content-minimized ActivityEvents, audit events where required, ActionCards where review is possible, and stable API errors where blocked.
4. Tenant-scoped rate, quota, concurrency, and budget controls are tested under normal, burst, bot-shaped, and provider-failure loads.
5. Appeal and false-positive workflows are tested with customer-visible status, support-safe diagnostics, reviewer decisions, and policy-version evidence.
6. Release evidence includes abuse scenario fixtures, false-positive thresholds, block-rate dashboards, support runbooks, emergency kill switches, and current official-reference review dates.
