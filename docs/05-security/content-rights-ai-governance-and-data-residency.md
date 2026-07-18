# Content rights, AI governance, and data residency

Research processes source material that may be private, licensed, regulated, copyrighted, or region-restricted. Rights, provider policy, and residency are therefore product controls, not optional legal annotations.

## Rights decisions

Every source and publication path records a rights decision:

- who authorized the source;
- allowed purpose;
- storage permission;
- indexing permission;
- citation permission;
- model-processing permission;
- public-sharing permission;
- export permission;
- takedown or revocation path;
- review date or expiry where applicable.

Unknown rights block publication and may block ingestion depending on Project policy.

## Source acquisition policy

The system distinguishes:

- user uploads;
- user-provided URLs;
- public web capture;
- connected workspace records;
- repository content;
- licensed databases;
- generated or derived material.

Acquisition records must show how the source was obtained, which terms or policy applied, and whether the source can be stored, searched, cited, summarized, exported, or published.

## AI provider governance

Each provider route has a policy profile:

- allowed data classifications;
- retention and deletion behavior;
- training use;
- human review;
- regions;
- subprocessors;
- encryption;
- incident notifications;
- contractual settings;
- model capabilities and limitations;
- acceptable-use, content-safety, abuse-monitoring, and appeal behavior where available;
- prohibited Project types.

Provider selection filters by policy before quality, speed, or price. A fallback provider cannot receive data that the primary provider was allowed to process unless it also satisfies the same Project policy.

## Data residency

Residency applies to:

- database rows;
- Blob objects;
- search indexes and embeddings;
- workflow state;
- queue payloads;
- logs and traces;
- SupportDiagnosticBundles, support diagnostics, SupportAccessRequests, SupportAccessSessions, and support audit exports;
- model-provider processing;
- translation, OCR, transcription, language detection, and locale rendering services;
- backups;
- exports;
- incident evidence.

The user interface must not claim residency based only on primary storage region if processors, observability, support, or backups move data elsewhere.

## Derived material

Generated summaries, translations, localized summaries, embeddings, notes, artifacts, accessible-output manifests, and documents remain subject to upstream source restrictions. Derived content cannot be used to bypass:

- source revocation;
- deletion requests;
- licensing limits;
- publication restrictions;
- provider-policy restrictions;
- customer export controls.

## Publication checks

Before public publication:

- source rights allow public use;
- AbusePolicy, provider-policy, content-safety, publication-spam, and false-citation checks pass;
- confidential and personal data checks pass;
- unsupported, stale, disputed, and removed claims are handled;
- citations are inspectable or intentionally redacted;
- translated excerpts, localized summaries, alt text, captions, chart alternatives, and accessible-output manifests are labeled as derived material unless an authoritative source supports them;
- language and direction metadata, reading order, table headers, and chart alternatives are preserved where the publication claim requires them;
- attribution requirements are met;
- robots, indexing, and takedown policy are configured;
- publication snapshot records the policy decisions.

## Audit and evidence

Governance evidence includes:

- source rights ledger;
- provider policy snapshot;
- AbusePolicy snapshot, AbuseDecision, review, appeal, false-positive, and enforcement evidence where applicable;
- residency map;
- publication approval;
- takedown records;
- deletion propagation;
- SupportDiagnosticBundle minimization evidence;
- SupportAccessRequest, SupportAccessSession, break-glass review, and support access audit;
- LanguageDirectionMetadata, TranslationArtifact lineage, AccessibleOutputManifest, and locale validation evidence;
- incident and breach response records;
- customer-facing commitments.

## Launch blockers

Production launch is blocked by:

- unclassified source rights;
- provider route without retention or training policy;
- residency claim without end-to-end data-flow proof;
- translation, OCR, transcription, or language-detection route without provider policy approval;
- source acquisition, publication, export, connector write, GitHub proposal, notification, API, MCP, or recipe route without abuse preflight where abuse policy requires it;
- unsupported public publication path;
- deletion that does not suppress derived content;
- translated or localized material treated as independent source evidence;
- inaccessible or direction-breaking public projection when accessible or RTL support is claimed;
- support workflow that can access private content without scoped approval, expiry, revocation, immutable audit, and break-glass review where required.
- abuse workflow that stores raw private Project content as trust-safety telemetry or lacks review, appeal, false-positive, and emergency-control evidence for high-impact blocks.
