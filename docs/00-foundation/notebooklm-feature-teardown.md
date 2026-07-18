# Notebook-style feature teardown

This teardown translates notebook-style research features into Research-owned product contracts. It intentionally avoids treating any competitor feature as the design authority.

## Source model

Notebook-style tools usually center the experience on a source collection. Research keeps that simplicity, but makes source capability explicit:

- stored: original or snapshot retained;
- inspectable: user can view or preview it;
- searchable: retrieval can use it;
- citable: answers can resolve exact locators;
- richly understood: parsers extract structure, entities, tables, media, or code symbols.

Implementation owner: `uploads-05`, `parsing-06`, and `indexing-07`.

## Chat model

The familiar chat loop remains the primary control surface. Research adds production controls:

- active source scope is visible;
- unsupported claims are marked rather than smoothed over;
- citations point to immutable source versions;
- tool calls and model events are attributable;
- valuable answers can become document patches.

Implementation owner: `chat-08` and `grounding-09`.

## Notes and documents

Generated notes are not enough for production use. Research treats durable output as canonical Markdown:

- stable blocks;
- deterministic serialization;
- raw Markdown and canvas editing;
- typed AI patches;
- comments and locks;
- document revisions;
- public/private projections from one revision.

Implementation owner: `documents-10` and `publishing-18`.

## Generated artifacts

Artifacts such as timelines, tables, diagrams, maps, briefs, slide outlines, and study aids are useful only when they remain connected to evidence. Research artifacts therefore include:

- artifact type and schema;
- source and claim dependencies;
- version history;
- export adapters;
- regeneration controls;
- stale-state detection.

Implementation owner: `studio-19`.

## Deep research

Deep research must be more than a long model call. Research requires:

- an explicit research contract;
- a durable run record;
- source acquisition and rights decisions;
- progress, pause, retry, and cancellation;
- claim extraction and contradiction checks;
- section-level generation;
- editorial and citation audits;
- cost and budget controls.

Implementation owner: `research-13`, `engines-14`, `agents-15`, and `longform-16`.

## Sharing and publication

Research treats sharing as a controlled publication workflow:

- privacy and rights review;
- unsupported-claim blocking;
- immutable publication snapshots;
- withdrawal and takedown;
- audit history;
- public/private no-drift guarantees.

Implementation owner: `publishing-18`.

## Product implication

The first release should prove fewer features with stronger evidence. A grounded PDF-to-document path with exact citations, deterministic Markdown, and restore evidence is more valuable than a broad artifact gallery that cannot be audited.
