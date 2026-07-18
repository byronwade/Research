# Configuration and feature flags

Configuration is a typed, versioned input to a release. Feature flags control exposure; they do not replace authorization, migrations, compatibility, or durable domain state.

## Configuration classes

- **Build configuration:** dependency versions, compilation targets, package boundaries, and immutable artifact metadata.
- **Environment configuration:** service endpoints, region, storage namespaces, queue names, public URLs, and provider policy.
- **Secrets:** credentials and cryptographic material resolved from an approved secret manager.
- **Tenant policy:** residency, retention, provider eligibility, connector rules, quotas, and publication restrictions.
- **Companion policy:** desktop shell, browser extension, manifest permission, extension ID, native app ID, update channel, global shortcut, file-watch, notification, and emergency-revocation controls.
- **Runtime tuning:** timeouts, concurrency, batch size, cache policy, and model-role routing within validated bounds.
- **Feature flags:** reversible exposure decisions with owner and expiry.

## Typed validation

Every process validates configuration before accepting traffic or work. Unknown, missing, malformed, contradictory, or unsafe values fail closed. Configuration schemas have versions and safe defaults only for non-sensitive behavior.

Configuration is not read opportunistically throughout domain code. A startup layer resolves and validates it into typed application settings. Domain packages receive only the settings they require.

## Secret boundary

Secret values never appear in configuration snapshots, client bundles, logs, exceptions, analytics, model prompts, workflow input, support bundles, or database rows unless the row is an explicitly encrypted credential record. Presence and version may be reported; plaintext may not.

## Feature flag contract

A flag records:

```text
key
owner
purpose
created_at
expiry_or_review_date
default
allowed_environments
targeting dimensions
metrics and guardrails
kill-switch behavior
dependencies
removal issue
```

Use a vendor-neutral application port, such as OpenFeature semantics, so product logic does not depend on one flag provider.

## Safety rules

- Authorization checks cannot be disabled by a flag.
- A flag cannot make an incompatible schema or event change safe.
- Durable workflows snapshot required flag decisions or explicitly re-evaluate at safe boundaries.
- Model experiments cannot cross provider, residency, budget, or data-use policy.
- Native companion and browser extension flags cannot disable companion authorization, grant prompts, no-ambient-capture restrictions, signed update checks, active-tab gesture requirements, file-watch path bounds, revocation, or support-safe redaction.
- Public/private projection, deletion, retention, billing, and audit invariants remain enforced when a feature is disabled.
- Kill switches default to the safest usable state and are tested before launch.

## Rollout

```text
off
→ internal
→ test tenant
→ percentage or cohort canary
→ monitored expansion
→ general availability
→ flag removal
```

Each stage has success metrics, stop conditions, and rollback behavior. Exposure assignments are stable enough to interpret experiments and incidents.

## Lifecycle

Long-lived flags create hidden product variants and are treated as debt. After a decision, remove dead branches, obsolete configuration, migrations, tests, dashboards, and documentation. The readiness gate reports stale flags and blocks release when a safety-critical flag lacks an owner or tested kill path.
