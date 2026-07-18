# Onboarding, activation, and imports

Onboarding must help a new user reach a grounded, cited document quickly without hiding the source, privacy, or cost decisions that matter in production.

## First-run objective

The first successful session should reach:

```text
Create Project
-> add one source
-> ask a grounded question
-> inspect a citation
-> save an editable document
```

The user should understand what was stored, what was indexed, what can be cited, and what remains unsupported.

## Account and workspace setup

The onboarding flow collects only what is required:

- identity and organization;
- Project name and purpose;
- data sensitivity or policy tier;
- default source and publication policy;
- optional template;
- optional import path;
- notification preference;
- model/provider policy where available.

No flow may request broad connector scope before the user chooses a source-backed job that requires it.

## Project templates

Templates are starting contracts, not hidden automations. Each template declares:

- document outline;
- recommended source types;
- citation expectations;
- artifact types;
- refresh cadence;
- publication policy;
- evaluation checklist.

Examples:

- product research dossier;
- technical architecture brief;
- policy and compliance binder;
- literature review;
- repository documentation map;
- competitive intelligence workspace.

## Imports

Supported import paths should be implemented in this order:

1. Markdown or folder of Markdown files.
2. PDF and office documents.
3. GitHub repository documentation.
4. Website capture.
5. Connected workspace folder.
6. Project export from another Research workspace.

Imports produce source records, immutable source versions, parsed elements, and document candidates. They do not silently overwrite canonical documents.

## Activation metrics

Activation is measured by meaningful product progress:

- Project created;
- source added and parsed;
- first exact citation inspected;
- first document saved;
- first document reopened after refresh;
- unsupported claim resolved or removed;
- first export or publication preview.

Raw chat count, upload count, or model token usage is not enough to prove activation.

## Empty states

Empty states should offer concrete next actions:

- add a PDF;
- paste a URL;
- connect a repository;
- import Markdown;
- start from a template;
- ask a question about selected sources.

They must not imply that Research can answer from private sources that have not been added or authorized.

## Portability

Users must be able to export:

- canonical Markdown;
- source inventory and metadata;
- citations and claim status;
- document revisions where policy allows;
- public publication snapshots;
- audit and run summaries;
- machine-readable Project manifest.

Private provider traces, secrets, internal risk scores, and unrelated tenant metadata are excluded.

## Launch gates

Onboarding is production-ready only when:

- a clean user can complete the first-run objective without operator help;
- source capability disclosures are visible;
- import failures are recoverable;
- deletion and export paths are tested;
- analytics events are minimized;
- accessibility checks pass;
- support can diagnose setup problems without private content access.
