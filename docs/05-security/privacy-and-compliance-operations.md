# Privacy and compliance operations

Research handles user-authored documents, connected workspace data, repositories, communications, media, and generated analysis. Privacy controls must therefore be part of product architecture and daily operations rather than a policy added after launch.

This contract defines engineering and operational requirements. It does not substitute for jurisdiction-specific legal advice.

## Data inventory

Every stored or transmitted data class has an owner and record containing:

- purpose and product capability;
- source and collection method;
- tenant and subject relationships;
- classification and sensitivity;
- canonical or derived status;
- storage systems and regions;
- processors and subprocessors;
- encryption and key ownership;
- retention and deletion rules;
- export and subject-request behavior;
- analytics, support, evaluation, and model-use restrictions.

Unknown data flows are launch blockers. System diagrams and the processing inventory are updated together with implementation changes.

## Purpose limitation and minimization

The application collects and exposes only the data required for the enabled capability. Connector scopes, source selection, model context, support diagnostics, analytics, and exports are minimized independently.

Access to one connected system does not authorize broad indexing, publication, training, analytics, or unrelated tool actions. New secondary uses require an explicit product, policy, and customer-communication review.

## Customer controls

Authorized customers can:

- inspect connected accounts and granted scopes;
- see source status, versions, derived artifacts, and sharing state;
- exclude, archive, revoke, export, and delete supported data;
- configure retention and publication policy where entitled;
- review Project members, service accounts, and public links;
- understand which AI and processing providers may receive data;
- request a portable Project export;
- receive confirmation and status for deletion or privacy requests.

Controls use plain language and disclose meaningful consequences. Dark patterns and ambiguous consent are prohibited.

## Data-subject and customer requests

The operating process supports access, export, correction, deletion, restriction, and objection requests as applicable. Each request is authenticated, scoped, tracked, and completed within the governing deadline.

The system maps a request through identities, organizations, Projects, sources, source versions, documents, publications, memory, messages, model metadata, exports, support records, billing records, backups, and derived indexes. Legal holds and required financial or security records are separated from general product content and access-restricted.

A deletion request is not complete when a primary row is removed. It must propagate to objects, chunks, embeddings, indexes, caches, derived files, generated exports, connector tokens, and pending workflows. Backups follow documented expiry and restoration-suppression procedures.

## Retention

Retention is defined by data class, product state, customer policy, contract, and legal obligation. Defaults favor minimization. Expired data is deleted through observable, retryable workflows with completion evidence.

Temporary uploads, parser workspaces, provider files, sandbox disks, stream buffers, support bundles, and debug artifacts have short explicit lifetimes. They do not inherit indefinite Project retention accidentally.

## AI provider handling

Every model, search, transcription, OCR, parsing, evaluation, and research provider has a profile covering:

- data categories allowed;
- retention and deletion behavior;
- training and human-review policy;
- processing and storage regions;
- subprocessors;
- encryption and access controls;
- contractual and enterprise settings;
- incident notification;
- prohibited Project classifications.

Provider routing filters by Project policy and data classification before considering quality, latency, or price. A provider-policy change can disable or migrate a route without silently weakening customer commitments.

## Public and shared output

Public publication and external sharing perform separate checks for authorization, confidential material, personal data, source rights, unsupported claims, redaction, attribution, robots or indexing policy, link lifetime, and takedown.

Removing a public link withdraws delivery and search exposure under product control, while preserving an access-restricted audit record. Historical private revisions do not become public merely because a later revision is published.

## Analytics and evaluation

General analytics receive allowlisted event names and classified metadata only. Raw source text, prompts, generated documents, citations, credentials, connector payloads, and private URLs are excluded.

Session replay is disabled or fully masked on sensitive surfaces. Evaluation data derived from customer activity requires an approved purpose, minimization, access control, retention period, and deletion path. Feedback does not automatically authorize model training.

## Support access

Support begins with tenant-safe metadata, health indicators, identifiers, and sanitized diagnostics. Content access requires a case, customer or policy authorization, stated purpose, narrow scope, time limit, and immutable audit record.

Break-glass access is separately approved, monitored, and reviewed. Support tooling cannot impersonate a user silently, export arbitrary content, or bypass tenant policy without leaving evidence.

## Security and breach response

Privacy incidents include unauthorized access, cross-tenant exposure, excessive connector scope, unintended public publication, provider-policy violation, missing deletion, analytics leakage, and restoration of data that should remain deleted.

Incident response preserves evidence, stops processing, determines affected data and subjects, applies contractual and legal notification rules, and tracks remediation. Customer communication distinguishes confirmed facts, ongoing investigation, and protective actions.

## International processing

Data-residency and transfer requirements are policy inputs to storage, provider routing, logs, backups, support, and disaster recovery. Region selection in the user interface is not sufficient if subprocessors, observability, or support copy data elsewhere.

Localization does not change privacy meaning. Consent, retention, export, deletion, and public-sharing controls remain understandable and functional across supported languages and right-to-left layouts.

## Assessments and evidence

High-risk changes receive a documented privacy assessment covering purpose, necessity, data flow, subjects, risks, mitigations, residual risk, providers, retention, security, and user controls.

Release evidence includes the current inventory, processor review, data-flow changes, retention tests, request-flow tests, deletion propagation, public-sharing tests, analytics inspection, support-access audit, and outstanding accepted risks.
