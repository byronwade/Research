# Open-source research platform catalog

This catalog tracks projects that may inform Research's research, retrieval, agent, document, and evaluation systems. It is not an adoption list. Each project still needs license, security, maintenance, and fit review before implementation.

## Evaluation fields

Each candidate should be reviewed for:

- purpose;
- license;
- maintenance activity;
- language and runtime fit;
- security posture;
- data retention behavior;
- citation behavior;
- customization surface;
- observability;
- cost profile;
- isolation requirements;
- product fit.

## Research engines

Candidate classes:

- deep-research orchestration systems;
- report-generation systems;
- paper question-answering systems;
- search and browsing agents;
- multi-agent research frameworks;
- scholarly retrieval tools.

Decision bias: use these behind adapters or as references unless they meet Research's evidence, audit, and policy contracts.

## Retrieval and indexing

Candidate classes:

- vector search libraries;
- hybrid retrieval examples;
- rerankers;
- entity extraction;
- code search and symbol extraction;
- scholarly metadata tools.

Decision bias: keep Postgres, full-text search, `pg_trgm`, and pgvector as the first-release retrieval authority unless scale evidence requires extraction.

## Parsing and source processing

Candidate classes:

- PDF and office parsers;
- OCR engines;
- media transcribers;
- HTML readability extractors;
- table extractors;
- repository analyzers.

Decision bias: isolate untrusted parsing and normalize output into Research-owned schemas.

## Document and export tooling

Candidate classes:

- Markdown processors;
- rich-text editors;
- citation formatters;
- code highlighters;
- math renderers;
- diagram renderers;
- document converters;
- PDF and slide generators.

Decision bias: the durable authority remains canonical Markdown plus stable block identity.

## Agent frameworks

Candidate classes:

- workflow agents;
- tool routers;
- planner/executor frameworks;
- multi-agent task systems;
- evaluation harnesses.

Decision bias: Research owns task packets, tool policy, budgets, approvals, and audit. Frameworks are optional execution helpers.

## Review workflow

1. Add the candidate to the machine-readable catalog if it becomes implementation-relevant.
2. Record decision state.
3. Link owner slice.
4. Review license and security.
5. Build a narrow proof if needed.
6. Document isolation boundary.
7. Promote only after tests and operational evidence.
