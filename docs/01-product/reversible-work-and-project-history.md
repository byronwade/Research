# Reversible Work and Project history

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should let users recover from mistakes, interrupted work, stale automation, bad patches, unsafe publication, connector drift, and failed repository changes without pretending every side effect can be undone. Reversible Work is the Project-level product surface for inspecting history and choosing the right recovery action: undo, restore, replay, retry, withdraw, compensate, reconcile, duplicate as draft, or mark as irreversible.

This document governs `REV-001` and informs `REV-002`. Advanced operating-layer recovery differentiation is governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md). The reversal ledger and compensation architecture is governed by [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md).

## Sources reviewed

Official capability references:

- [Google Docs Editors Help: find what's changed in a file](https://support.google.com/docs/answer/190843?co=GENIE.Platform%3DDesktop&hl=en)
- [Notion Help: delete and restore content](https://www.notion.com/help/duplicate-delete-and-restore-content)
- [Figma Learn: view a file's version history](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history)
- [GitHub Docs: reverting a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request)
- [Microsoft Learn: drafts and versioning for solution-aware cloud flows](https://learn.microsoft.com/en-us/power-automate/drafts-versioning)
- [Make Help Center: restore and recover scenario](https://help.make.com/restore-and-recover-scenario)
- [Zapier Help: restore your Zap to a prior version](https://help.zapier.com/hc/en-us/articles/14094586364941-Restore-your-Zap-to-a-prior-version-with-version-rollback)
- [Microsoft Support: backup and restore with File History](https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-and-restore-with-file-history)

Directional public user-opinion and practitioner signals:

- [Reddit Notion discussion about broken undo and page history](https://www.reddit.com/r/Notion/comments/1nv9yts/help_notion_deleted_my_work_and_version_history/)
- [Zapier Community: older request to restore a previous Zap version](https://community.zapier.com/how-do-i-3/how-to-restore-a-previous-zap-version-8639)
- [Zapier Community: older request for undo and test-run task history](https://community.zapier.com/how-do-i-3/how-do-i-undo-changes-view-task-history-on-test-runs-3041)

These public-discussion sources are directional signals only. They are not statistical proof and must not become customer-facing claims.

## Product lesson

Users already expect version history in documents, design files, file systems, repositories, and automation builders. Official products make it normal to view who changed what, restore a prior revision, copy from history, recover deleted content, restore a workflow draft, or revert a merged pull request. The friction appears when history is incomplete, undo is session-local, workflow rollback is hidden, external side effects cannot be cleanly reversed, or users must ask support to interpret logs.

Research has a stronger requirement because Project work spans sources, evidence, claims, documents, publications, automations, GitHub proposals, connector writes, exports, support diagnostics, and release evidence. Reversible Work must be visible before a risky action runs, preserved after it runs, and honest when the only safe path is compensation or manual reconciliation.

## Product purpose

Reversible Work answers:

- What changed, who or what changed it, and under which intent, policy, source scope, expected version, and approval?
- Can this change be undone directly, restored to a prior revision, replayed, retried, withdrawn, compensated, or only reconciled?
- Which resources, claims, documents, publications, exports, Worksets, recipes, approvals, external systems, and users will be affected by recovery?
- What current state has drifted since the original action?
- What evidence proves the proposed recovery is safe?
- Which effects are irreversible and why?
- What is the smallest safe recovery action now?

The user-facing surface is a contextual Project History and Reversible Work panel, not a global operating-system time machine. It is a projection over canonical Project records, ActivityEvents, Operations, audit events, side-effect ledgers, document revisions, source versions, publications, recipe versions, Scenario Lab records, Worksets, and backup evidence.

## Recovery vocabulary

Research uses precise user-facing terms:

| Term | Meaning |
|---|---|
| Undo | Reverse an uncommitted or narrowly scoped edit while the authoritative base version is still current. |
| Restore | Create a new canonical revision or state transition from a prior authorized version. |
| Replay | Run an eligible Operation or automation again from declared inputs under current policy. |
| Retry | Continue or repeat a failed step with idempotency and side-effect checks. |
| Withdraw | Stop serving a publication, export, notification, or external projection while preserving audit evidence. |
| Compensate | Create a new action that offsets an external side effect, such as a correction, follow-up notification, replacement pull request, or billing adjustment. |
| Reconcile | Compare Research state with an external system after uncertainty, then propose a safe next action. |
| Duplicate as draft | Copy historical content or workflow state into a new editable draft without replacing current state. |
| Irreversible | Label a side effect that cannot be undone by Research, such as a third-party recipient reading a sent notification. |

Copy must not use "undo" for compensation, withdrawal, disaster restore, or manual support remediation.

## Reversible Work experience

Reversible Work appears from:

- Activity timeline event cards and review queue items;
- ActionCards, approval requests, and failed Operations;
- Command Center actions such as show history, undo, restore, replay, withdraw, compensate, and reconcile;
- Documents, document blocks, source cards, claims, evidence spans, publications, exports, recipes, Worksets, Scenario Lab cards, Project Atlas Impact Reports, Project Health findings, settings changes, GitHub proposals, and connector records;
- API, SDK, CLI, MCP, webhooks, support-safe diagnostics, and release evidence where policy allows.

The default view is a focused recovery card. It shows:

- original action, actor, intent version, Operation, ActivityEvent, and approval receipt;
- target resource and original expected version;
- current target version and drift summary;
- before and after references where policy allows;
- affected downstream resources;
- side-effect class and external destinations;
- eligible recovery actions with disabled reasons;
- approval class, cost class, latency class, and support involvement;
- required Scenario Lab preview for high-risk recovery;
- required Project Atlas Impact Report when hidden dependencies may exist;
- irreversible effects and compensation options;
- expected outcome and validation evidence.

## Recovery ladder

Research presents recovery in the narrowest safe order:

1. **Immediate undo:** local editor or command undo while no authoritative mutation or external side effect has occurred.
2. **Canonical restore:** create a new DocumentRevision, WorksetSnapshot restore, recipe draft restore, settings change record, or Project-owned state transition from a prior authorized version.
3. **Operation retry or replay:** rerun eligible Operations, research runs, parser jobs, recipe runs, exports, GitHub validation, or webhook deliveries with idempotency and side-effect ledger checks.
4. **Withdrawal or replacement:** withdraw a publication, supersede an export, replace a public snapshot, close or revert a GitHub proposal, or disable a recipe.
5. **Compensation:** send a correction, create a replacement external draft, issue a billing adjustment, open a follow-up pull request, or route manual remediation through an ActionCard.
6. **Disaster restore:** use backup and restore procedures for service loss or corruption, then reapply tombstones, policies, and audit evidence before reopening traffic.

The UI should not bury a narrow undo under a broad restore flow, and it should not offer a local undo when a compensation plan is required.

## Relationship to existing Project systems

- Documents own canonical revisions and typed patches; Reversible Work can restore or duplicate versions but cannot create a second document authority.
- Sources own immutable SourceVersions; Reversible Work can restore source visibility, retry parsing, replace indexes, or reconcile connector state, but cannot mutate a SourceVersion.
- Activity owns user-visible history; Reversible Work links to Activity but stores recovery-specific eligibility and outcomes in the reversal ledger.
- Scenario Lab previews high-risk recovery options before mutation.
- Project Atlas explains downstream dependencies and hidden or redacted affected resources.
- Project Health can route findings to recovery actions and observe repair outcomes.
- Automation Recipes expose recipe version restore, run retry, canary rollback, pause, retirement, and compensation paths.
- Approval policy determines whether recovery can run immediately, needs delegated trust, needs an ActionCard, or fails closed.
- Backup and disaster recovery remain operational controls, not everyday product undo.

## Advanced capabilities

Research should support recovery capabilities generic operating systems and automation products usually do not combine:

- Project-wide history across sources, evidence, claims, documents, publications, recipes, GitHub, connectors, Activity, and approvals;
- recovery cards that show original intent, expected versions, current drift, hidden dependency state, and irreversible side effects;
- distinction between restore, replay, withdrawal, compensation, reconciliation, and disaster recovery;
- Scenario Lab previews before high-risk recovery applies;
- Project Atlas impact views before recovery mutates dependent records;
- activity-linked recovery outcome observations that measure whether undo, restore, replay, or compensation actually helped;
- support-safe recovery diagnostics that expose metadata and reason codes without private source content.

## Privacy and control

Reversible Work must not:

- capture operating-system windows, screenshots, clipboard, browser history, local files outside explicit Project sources, or ambient device state;
- store raw source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, private URLs, or support notes in recovery cards;
- reveal hidden resources through counts, names, side effects, or disabled-action reasons;
- bypass approval, delegated-trust, rights, residency, retention, billing, GitHub, publication, support, or release gates;
- erase audit history when a user restores or compensates a change;
- imply external recipients, third-party systems, or public viewers forgot an effect that already happened.

Recovery records store identifiers, versions, hashes, safe labels, policy snapshots, side-effect classifications, redaction summaries, and outcome state.

## Non-goals

- Do not create a global screen recorder, filesystem backup product, or operating-system rollback layer.
- Do not make Activity, backups, or telemetry the authority for current domain state.
- Do not silently rewrite published history.
- Do not use compensation language to hide irreversible side effects.
- Do not give support staff a private recovery surface that the authorized Project owner cannot audit.
- Do not offer stale recovery plans after policy, permissions, source versions, document revisions, recipe versions, or external state drift.

## Acceptance criteria

Reversible Work is production-ready only when:

- `REV-001` and `REV-002` are implemented and tested;
- every recovery card is authorization-filtered, content-minimized, and linked to canonical Project records;
- eligible actions are labeled as undo, restore, replay, retry, withdraw, compensate, reconcile, duplicate as draft, or irreversible;
- external side effects use side-effect ledgers and reconciliation before retry, replay, withdrawal, or compensation;
- stale recovery actions revalidate expected versions, policy, permissions, rights, residency, budget, connector scope, approval receipts, and external state before mutation;
- high-risk recovery routes through Scenario Lab, Project Atlas, ActionCards, approvals, idempotency, Activity, audit, and owning services;
- irreversible effects are visible before execution and remain visible after execution;
- API, SDK, CLI, MCP, webhook, support, and UI surfaces use the same recovery vocabulary and eligibility rules;
- tests cover document restore, Workset restore, recipe restore, source retry, publication withdrawal, GitHub revert proposal, connector uncertain outcome, webhook replay, billing compensation, stale recovery rejection, hidden-resource redaction, and disaster-restore handoff;
- release evidence includes recovery success, stale rejection, compensation accuracy, support usefulness, user correction, approval burden, latency, accessibility, privacy, authorization, and audit validation.

## Documentation update rule

Changes to Reversible Work, Project History, recovery vocabulary, recovery cards, undo, restore, replay, withdrawal, compensation, reconciliation, irreversible labeling, or recovery outcome observation must update:

- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md)
- [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md)
- [`project-health-and-repair.md`](project-health-and-repair.md)
- [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md)
- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md)
- [`../02-architecture/durable-workflows-idempotency-and-outbox.md`](../02-architecture/durable-workflows-idempotency-and-outbox.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../02-architecture/scenario-simulation-engine.md`](../02-architecture/scenario-simulation-engine.md)
- [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
