# Data governance

## Data classification

Organizations and Projects classify source material, generated content, credentials, telemetry, and exports. Classification determines permitted providers, regions, connectors, retention, publication, support access, and model use.

## Provider governance

Every model, search service, parser, research engine, connector intermediary, and execution service has a versioned provider profile containing retention, training use, supported data classes, regions, subprocessors, security posture, contractual status, and permitted Project classifications.

A provider is selected only when both capability policy and data-governance policy allow it.

## Content rights

Accessibility on the web does not automatically grant permission to ingest, quote, redistribute, or publish. A SourceVersion records acquisition basis, rights status, license or terms, attribution requirements, quotation limits, redistribution rules, review date, and takedown path.

## Retention and deletion

Retention is configured by data class and Project policy. Deletion workflows traverse originals, derivatives, chunks, embeddings, caches, claims, context packs, exports, publications, and connector state while preserving legally required audit evidence.

## Residency

The system records the storage and processing region for raw sources, derived text, embeddings, model context, workflow state, backups, and exports. Cross-region processing requires explicit policy authorization.

## Support access

Support is metadata-first. Any content access is least-privilege, time-limited, case-bound, approved where required, customer-visible, and audited. Support tools do not grant ambient tenant access.

## Analytics and feedback

Product analytics uses an allowlisted event schema. Raw prompts, source bodies, document bodies, citations, credentials, and private tool output are prohibited unless a separately governed diagnostic workflow obtains explicit authorization.
