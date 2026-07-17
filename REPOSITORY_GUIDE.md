# Repository guide

## Human entry

1. Read `README.md`.
2. Read `PRODUCT.md` and `ARCHITECTURE.md`.
3. Open `docs/START-HERE.md` for the ordered documentation map.
4. Check `docs/06-delivery/implementation-status.md` before assuming a feature exists.

## Coding-agent entry

1. Read `AGENTS.md`.
2. Run `node scripts/agent-status.mjs`.
3. Run `node scripts/agent-context.mjs`.
4. Implement only the returned dependency-eligible slice.
5. Run `node scripts/validate-agent-control.mjs` before committing.

## Documentation structure

- `docs/00-foundation`: thesis and principles.
- `docs/01-product`: Chat, Documents, Sources, Studio, and publishing.
- `docs/02-architecture`: runtime, domain model, no-drift, and API.
- `docs/03-ai`: research orchestration, claims, agents, and memory.
- `docs/04-sources`: ingestion, retrieval, and GitHub.
- `docs/05-security`: threat model and governance.
- `docs/06-delivery`: implementation sequence and status.
- `docs/07-reference`: official-reference policy.
- `docs/08-build`: engineering blueprint.
- `docs/_meta`: requirements, build plan, and agent routing.

## Current state

Research is an implementation-ready specification. The runtime is not yet scaffolded. The next slice is `foundation-01`.
