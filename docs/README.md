# Research documentation

Research documentation is organized by authority and implementation purpose.

## Directory map

| Directory | Purpose |
|---|---|
| `00-foundation` | Product thesis, principles, terminology, scope, and competitive benchmarks |
| `01-product` | User-facing behavior and Project surfaces |
| `02-architecture` | System boundaries, domain model, persistence, APIs, and no-drift architecture |
| `03-ai` | Model routing, research orchestration, claims, agents, memory, and evaluation |
| `04-sources` | Ingestion, parsing, indexing, retrieval, connectors, web, scholarly, and GitHub sources |
| `05-security` | Threat model, authorization, privacy, governance, prompt injection, and recovery |
| `06-delivery` | Implementation sequence, status, launch gates, operations, and conformance |
| `07-reference` | Terminology, official references, schemas, events, environments, and route catalogs |
| `08-build` | Concrete stack choices, open-source tooling, automation flows, and implementation blueprints |
| `_meta` | Machine-readable requirements, routing, implementation status, and documentation controls |

## Canonical entry points

- [`START-HERE.md`](START-HERE.md)
- [`../AGENTS.md`](../AGENTS.md)
- [`../PRODUCT.md`](../PRODUCT.md)
- [`../ARCHITECTURE.md`](../ARCHITECTURE.md)
- [`../ROADMAP.md`](../ROADMAP.md)
- [`06-delivery/implementation-status.md`](06-delivery/implementation-status.md)
- [`08-build/README.md`](08-build/README.md)

## Documentation rules

1. Each accepted contract has a single, stable purpose.
2. Requirements use durable identifiers and one primary implementation owner.
3. Architecture changes require an ADR or an explicit update to the governing contract.
4. Overview files navigate; they do not override canonical contracts.
5. Documentation must distinguish specification, partial implementation, and verified runtime behavior.
6. Every implementation slice identifies required reading, dependencies, deliverables, and completion evidence.
7. Machine-readable `_meta` files are validated in CI and must remain synchronized with prose contracts.
8. Time-sensitive provider and tooling claims include a review date and official reference.

## Current maturity

Research is an implementation-ready specification. Runtime implementation begins with `foundation-01` and proceeds through dependency-controlled slices. No document may imply that a specified capability is already working unless the implementation ledger contains evidence.
