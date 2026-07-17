import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(process.argv[2] ?? process.cwd());
const at = (...parts) => path.join(root, ...parts);
const write = (file, content) => {
  const target = at(file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content.trimEnd() + '\n');
};
const writeJson = (file, value) => write(file, JSON.stringify(value, null, 2));
const remove = (file) => fs.rmSync(at(file), { recursive: true, force: true });

for (const item of [
  '.bootstrap',
  '.canonical-import-v6',
  '.canonical-v6-final',
  '.canonical-v6-payload',
  '.canonical-v7',
  '.publish-v7-full',
  '.publication',
  '.research-import',
  '.v7-delta',
  '.v7-patch',
  'research-import',
  'DIRECT_PUBLICATION_STATUS.md',
  'MATERIALIZATION_DIAGNOSTIC.md',
  'PROJECT_STATUS.md',
  'REPOSITORY_GUIDE.md',
  'TREE_API_TEST.txt',
  'TREE_TEST_2.md',
]) remove(item);
remove('.github/workflows');

const slices = [
  ['foundation-01', 'Monorepo and quality foundation', [], 'foundation', ['CORE-001', 'CORE-002'], ['ARCHITECTURE.md', 'docs/06-delivery/implementation-plan.md'], 'Create the pnpm and Turborepo workspace, strict TypeScript defaults, test foundations, package boundaries, and deterministic CI.'],
  ['web-shell-02', 'TanStack Start application shell', ['foundation-01'], 'web', ['UX-001', 'UX-002'], ['docs/01-product/project-workspace.md', 'docs/08-build/README.md'], 'Create the accessible Project shell with Chat, Documents, and Sources as primary surfaces.'],
  ['api-foundation-03', 'Hono API foundation', ['foundation-01'], 'api', ['API-001', 'API-002'], ['docs/02-architecture/developer-platform-api.md', 'docs/07-reference/configuration-contract.md'], 'Create the typed Hono boundary, error model, request identity, idempotency, and OpenAPI generation.'],
  ['auth-projects-04', 'Identity, organizations, and Project authorization', ['api-foundation-03'], 'identity', ['AUTH-001', 'AUTH-002'], ['docs/02-architecture/data-ownership-and-boundaries.md', 'docs/05-security/web-application-security-baseline.md'], 'Implement sessions, organization membership, Project roles, service accounts, and deny-by-default authorization.'],
  ['source-storage-05', 'Immutable source storage', ['auth-projects-04'], 'sources', ['SRC-001', 'SRC-002'], ['docs/01-product/sources.md', 'docs/04-sources/ingestion-pipeline.md'], 'Store originals and immutable source versions with checksums, rights state, permissions, and lifecycle metadata.'],
  ['ingestion-06', 'Upload and connector ingestion', ['source-storage-05'], 'sources', ['ING-001', 'ING-002'], ['docs/04-sources/ingestion-pipeline.md', 'docs/05-security/threat-model.md'], 'Implement resumable uploads, connector events, quarantine, deduplication, and durable ingestion state.'],
  ['parsing-07', 'Isolated parsing and media derivatives', ['ingestion-06'], 'sources', ['PARSE-001', 'PARSE-002'], ['docs/04-sources/ingestion-pipeline.md', 'docs/05-security/secure-software-supply-chain.md'], 'Create isolated parser adapters, normalized elements, exact locators, OCR and media derivatives, and parser provenance.'],
  ['indexing-08', 'Hybrid source indexing', ['parsing-07'], 'retrieval', ['IDX-001', 'IDX-002'], ['docs/04-sources/indexing-and-retrieval.md', 'docs/02-architecture/schema-contract-and-data-evolution.md'], 'Build metadata, lexical, vector, entity, citation, and repository indexes with rebuildable derived state.'],
  ['retrieval-09', 'Permission-first retrieval', ['indexing-08'], 'retrieval', ['RET-001', 'RET-002'], ['docs/04-sources/indexing-and-retrieval.md', 'docs/05-security/data-governance.md'], 'Implement authorization before retrieval, hybrid candidate generation, reranking, context assembly, and retrieval evaluation.'],
  ['grounded-chat-10', 'Persistent grounded Chat', ['web-shell-02', 'api-foundation-03', 'retrieval-09'], 'chat', ['CHAT-001', 'CHAT-002'], ['docs/01-product/chat.md', 'docs/03-ai/research-orchestrator.md'], 'Stream persistent project-aware conversations that expose source scope, tool progress, usage, and recoverable failures.'],
  ['citations-11', 'Claims, evidence, and exact citations', ['grounded-chat-10'], 'evidence', ['CITE-001', 'CITE-002'], ['docs/03-ai/claims-evidence-citations.md', 'docs/04-sources/indexing-and-retrieval.md'], 'Create atomic claims, evidence relationships, exact locators, contradiction states, and citation audits.'],
  ['documents-12', 'Canonical Markdown documents', ['web-shell-02', 'auth-projects-04'], 'documents', ['DOC-001', 'DOC-002'], ['docs/01-product/documents-and-canvas.md', 'docs/02-architecture/canonical-content-and-no-drift.md'], 'Implement canonical Markdown files, stable block identity, revision history, typed patches, locking, and deterministic serialization.'],
  ['canvas-13', 'Editable document canvas', ['documents-12'], 'documents', ['CANVAS-001', 'CANVAS-002'], ['docs/01-product/documents-and-canvas.md', 'docs/08-build/README.md'], 'Deliver rich editing and raw Markdown modes with accessible keyboard behavior, patch review, and no loss of canonical content.'],
  ['research-runs-14', 'Durable Research Runs', ['grounded-chat-10', 'citations-11'], 'research', ['RES-001', 'RES-002'], ['docs/03-ai/research-orchestrator.md', 'docs/06-delivery/release-engineering-and-change-control.md'], 'Implement addressable research runs, plans, budgets, durable steps, pause and resume, cancellation, and audit history.'],
  ['web-research-15', 'Web and scholarly discovery', ['research-runs-14'], 'research', ['WEB-001', 'WEB-002'], ['docs/03-ai/research-orchestrator.md', 'docs/05-security/threat-model.md'], 'Add replaceable web and scholarly discovery tools, immutable captures, rights decisions, freshness, and hostile-content isolation.'],
  ['agent-orchestration-16', 'Bounded multi-agent orchestration', ['research-runs-14', 'web-research-15'], 'research', ['AGENT-001', 'AGENT-002'], ['docs/03-ai/multi-agent-orchestration.md', 'docs/05-security/web-application-security-baseline.md'], 'Dispatch typed, budgeted specialist workers inside deterministic workflows without allowing autonomous publication or privilege escalation.'],
  ['long-form-17', 'Long-form research generation', ['agent-orchestration-16', 'documents-12'], 'research', ['LONG-001', 'LONG-002'], ['docs/03-ai/research-orchestrator.md', 'docs/03-ai/claims-evidence-citations.md'], 'Produce section-contracted, evidence-first, globally consistent long-form documents with resumable drafting and editorial audits.'],
  ['memory-18', 'Inspectable Project memory', ['grounded-chat-10', 'documents-12'], 'memory', ['MEM-001', 'MEM-002'], ['docs/03-ai/project-memory.md', 'docs/05-security/data-governance.md'], 'Create versioned, attributable Project memory with authority, sensitivity, conflict, staleness, edit, and forget controls.'],
  ['publication-19', 'Public and private publication', ['documents-12', 'citations-11', 'auth-projects-04'], 'publication', ['PUB-001', 'PUB-002'], ['docs/01-product/public-private-publishing.md', 'docs/02-architecture/canonical-content-and-no-drift.md'], 'Generate public and private projections from one canonical revision with rights checks, redaction, immutable snapshots, and withdrawal.'],
  ['github-read-20', 'GitHub synchronization and code intelligence', ['source-storage-05', 'indexing-08'], 'github', ['GH-001', 'GH-002'], ['docs/04-sources/github-integration.md', 'docs/05-security/secrets-encryption-and-configuration.md'], 'Implement a least-privilege GitHub App, webhook synchronization, commit-pinned source versions, repository indexes, and permission revocation.'],
  ['github-write-21', 'Guarded repository editing', ['github-read-20', 'auth-projects-04'], 'github', ['GH-003', 'GH-004'], ['docs/04-sources/github-integration.md', 'docs/05-security/secure-software-supply-chain.md'], 'Apply typed patches in isolation, run repository checks, present diffs, require approval, and open draft pull requests without direct default-branch writes.'],
  ['studio-22', 'Typed Studio artifacts', ['canvas-13', 'long-form-17'], 'studio', ['STUDIO-001', 'STUDIO-002'], ['docs/01-product/research-studio.md', 'docs/03-ai/claims-evidence-citations.md'], 'Create evidence-backed tables, charts, maps, slides, study assets, media overviews, and exportable artifact versions.'],
  ['developer-api-23', 'Public developer platform', ['api-foundation-03', 'citations-11', 'research-runs-14'], 'platform', ['DEVAPI-001', 'DEVAPI-002'], ['docs/02-architecture/developer-platform-api.md', 'docs/02-architecture/schema-contract-and-data-evolution.md'], 'Expose stable asynchronous APIs, SSE, webhooks, idempotency, capability discovery, SDK generation, and MCP resources.'],
  ['billing-24', 'Entitlements, metering, and budgets', ['api-foundation-03', 'auth-projects-04'], 'commercial', ['BILL-001', 'BILL-002'], ['docs/06-delivery/performance-capacity-and-load-engineering.md', 'docs/07-reference/configuration-contract.md'], 'Implement application-owned entitlements, usage reservations, immutable usage events, quotas, budgets, reconciliation, and customer-visible usage.'],
  ['enterprise-25', 'Enterprise controls and customer operations', ['auth-projects-04', 'developer-api-23'], 'enterprise', ['ENT-001', 'ENT-002'], ['docs/05-security/data-governance.md', 'docs/06-delivery/observability-and-incident-response.md'], 'Add SSO, SCIM, domain policy, retention, residency, support access, audit exports, and administrative controls.'],
  ['conformance-26', 'End-to-end product conformance', ['publication-19', 'github-write-21', 'studio-22', 'developer-api-23', 'billing-24', 'enterprise-25', 'memory-18', 'long-form-17'], 'quality', ['CONF-001', 'CONF-002'], ['docs/06-delivery/production-readiness-checklist.md', 'docs/06-delivery/implementation-status.md'], 'Prove complete user journeys, 60-page-class research, source permission revocation, no-drift maintenance, portability, accessibility, and cost reporting.'],
  ['evolution-27', 'Schema and contract evolution', ['conformance-26'], 'operations', ['EVO-001', 'EVO-002'], ['docs/02-architecture/schema-contract-and-data-evolution.md', 'docs/06-delivery/release-engineering-and-change-control.md'], 'Prove expand-backfill-switch-contract migrations, workflow version compatibility, API and event evolution, rollback, and restoration.'],
  ['performance-28', 'Performance and capacity qualification', ['conformance-26'], 'operations', ['PERF-001', 'PERF-002'], ['docs/06-delivery/performance-capacity-and-load-engineering.md', 'docs/06-delivery/observability-and-incident-response.md'], 'Establish SLOs, representative load tests, capacity envelopes, backpressure, fairness, degradation, and cost-per-accepted-output limits.'],
  ['security-hardening-29', 'Security and supply-chain qualification', ['conformance-26', 'evolution-27', 'performance-28'], 'security', ['SSC-001', 'SSC-002', 'KEY-001', 'KEY-002', 'APPSEC-001', 'APPSEC-002'], ['docs/05-security/secure-software-supply-chain.md', 'docs/05-security/secrets-encryption-and-configuration.md', 'docs/05-security/web-application-security-baseline.md', 'docs/05-security/threat-model.md'], 'Complete threat-model review, tenant-isolation tests, secret and key exercises, dependency provenance, abuse tests, and independent security assessment.'],
  ['release-30', 'Production release and stability gate', ['evolution-27', 'performance-28', 'security-hardening-29'], 'operations', ['REL-001', 'REL-002'], ['docs/06-delivery/release-engineering-and-change-control.md', 'docs/06-delivery/backup-restore-and-disaster-recovery.md', 'docs/06-delivery/production-readiness-checklist.md'], 'Promote one immutable artifact only after every launch gate, rollback rehearsal, restore exercise, operational handoff, and customer-facing truth check passes.'],
].map(([id, title, dependencies, domain, requirementIds, documents, deliverable], index) => ({
  id,
  order: index + 1,
  title,
  dependencies,
  domain,
  requirementIds,
  documents,
  deliverable,
  status: 'planned',
}));

const descriptions = {
  CORE: ['The repository shall use one deterministic workspace and quality baseline.', 'Every implementation claim shall be backed by executable evidence.'],
  UX: ['The Project workspace shall keep Chat, Documents, and Sources primary.', 'The interface shall meet keyboard, responsive, and accessibility requirements.'],
  API: ['The API shall use stable typed contracts and Problem Details errors.', 'Mutating operations shall support authorization, idempotency, and concurrency control.'],
  AUTH: ['Every tenant object shall be authorized through Project-scoped policy.', 'Identity lifecycle and deprovisioning shall revoke effective access promptly.'],
  SRC: ['Source originals and versions shall be immutable and attributable.', 'Source lifecycle, permission, rights, and deletion state shall be explicit.'],
  ING: ['Ingestion shall be durable, resumable, deduplicated, and observable.', 'Untrusted inputs shall be quarantined and inspected before processing.'],
  PARSE: ['Parsers shall run behind replaceable isolated adapters.', 'Every parsed element shall retain parser provenance and exact source locators.'],
  IDX: ['All indexes shall be derived, versioned, rebuildable, and permission-aware.', 'Index migrations shall preserve retrieval and citation compatibility.'],
  RET: ['Authorization shall be enforced before candidate text reaches models or rerankers.', 'Retrieval quality shall be measured with representative fixtures and failure analysis.'],
  CHAT: ['Chat shall persist messages, tool events, usage, and recoverable stream state.', 'Chat shall make source scope and research mode explicit and reversible.'],
  CITE: ['Every factual output shall be supported, inferred, disputed, or blocked.', 'Citations shall resolve to immutable source versions and exact evidence locators.'],
  DOC: ['Canonical Markdown and stable block identity shall remain the content authority.', 'Model changes shall be typed, reviewable, versioned patches rather than silent rewrites.'],
  CANVAS: ['Rich and raw editing modes shall round-trip without semantic loss.', 'Canvas interactions shall preserve accessibility, revisions, locks, and provenance.'],
  RES: ['Research Runs shall be durable, addressable, budgeted, interruptible, and auditable.', 'Research execution shall survive disconnects, retries, deploys, and operator recovery.'],
  WEB: ['External discovery shall preserve capture time, rights state, and source snapshots.', 'Web and scholarly content shall remain untrusted data and never redefine agent authority.'],
  AGENT: ['Specialist workers shall receive typed scopes, budgets, tools, and completion criteria.', 'Agents shall not self-authorize publication, destructive actions, or privilege changes.'],
  LONG: ['Long-form work shall use outlines, section contracts, evidence packets, and global ledgers.', 'Assembly shall audit citations, contradictions, duplication, terminology, and numeric consistency.'],
  MEM: ['Project memory shall be inspectable, versioned, attributable, and forgettable.', 'Memory shall guide work but shall not replace current evidence for factual claims.'],
  PUB: ['Public and private outputs shall derive from one canonical revision and claim graph.', 'Publication shall enforce rights, redaction, attribution, snapshot, and withdrawal controls.'],
  GH: ['GitHub read access shall use installation-scoped least-privilege authorization.', 'Repository indexing shall bind evidence to repository, commit, path, and line range.', 'Repository changes shall execute in isolation and produce reviewable validated diffs.', 'The system shall never merge or write the default branch without explicit policy and approval.'],
  STUDIO: ['Artifacts shall use typed, editable, versioned specifications.', 'Factual artifact components shall resolve to claims and source evidence.'],
  DEVAPI: ['The public platform shall expose asynchronous addressable operations and replayable events.', 'SDK, webhook, MCP, and API contracts shall share one versioned domain model.'],
  BILL: ['Entitlements, budgets, reservations, usage, and corrections shall be application-owned.', 'Customers shall be able to inspect usage, quota, cost, and billing reconciliation.'],
  ENT: ['Enterprise identity, retention, residency, and audit controls shall be policy-driven.', 'Support access shall be time-bound, metadata-first, least-privilege, and customer-auditable.'],
  CONF: ['Release candidates shall pass complete representative user journeys.', 'The product shall distinguish specified, implemented, degraded, and verified capabilities.'],
  EVO: ['Database, API, event, workflow, document, and SDK contracts shall evolve compatibly.', 'Every irreversible migration shall have rehearsal, observability, rollback, and restoration evidence.'],
  PERF: ['Every service class shall have measured SLOs, capacity envelopes, and budgets.', 'Overload shall trigger bounded queues, admission control, fairness, and explicit degradation.'],
  SSC: ['Dependencies, actions, containers, and build tools shall be pinned and provenance-checked.', 'Releases shall produce auditable dependency, vulnerability, license, SBOM, and attestation evidence.'],
  KEY: ['Secrets shall live outside source and logs with environment-scoped least privilege.', 'Encryption keys shall support inventory, rotation, revocation, recovery, and tenant-safe deletion.'],
  APPSEC: ['Web, API, upload, webhook, cache, and administrative surfaces shall meet the security baseline.', 'Tenant-isolation, prompt-injection, SSRF, IDOR, CSRF, and denial-of-wallet tests shall block release.'],
  REL: ['Production shall receive the same immutable artifact that passed staging and canary checks.', 'Launch shall require rollback, restore, incident, support, monitoring, and customer-truth readiness.'],
};

const requirements = [];
for (const slice of slices) {
  for (const id of slice.requirementIds) {
    const prefix = id.split('-')[0];
    const ordinal = Number(id.split('-')[1]) - 1;
    const list = descriptions[prefix] ?? [];
    requirements.push({
      id,
      group: prefix,
      statement: list[ordinal] ?? `${slice.title} shall satisfy its accepted product and architecture contracts.`,
      ownerSlice: slice.id,
      status: 'accepted',
    });
  }
}

const groupDocs = {
  CORE: ['ARCHITECTURE.md', 'docs/06-delivery/implementation-plan.md'],
  UX: ['docs/01-product/project-workspace.md', 'docs/01-product/chat.md', 'docs/01-product/documents-and-canvas.md'],
  API: ['docs/02-architecture/developer-platform-api.md', 'docs/07-reference/configuration-contract.md'],
  AUTH: ['docs/02-architecture/data-ownership-and-boundaries.md', 'docs/05-security/web-application-security-baseline.md'],
  SRC: ['docs/01-product/sources.md', 'docs/04-sources/ingestion-pipeline.md'],
  ING: ['docs/04-sources/ingestion-pipeline.md', 'docs/05-security/threat-model.md'],
  PARSE: ['docs/04-sources/ingestion-pipeline.md', 'docs/05-security/secure-software-supply-chain.md'],
  IDX: ['docs/04-sources/indexing-and-retrieval.md', 'docs/02-architecture/schema-contract-and-data-evolution.md'],
  RET: ['docs/04-sources/indexing-and-retrieval.md', 'docs/05-security/data-governance.md'],
  CHAT: ['docs/01-product/chat.md', 'docs/03-ai/research-orchestrator.md'],
  CITE: ['docs/03-ai/claims-evidence-citations.md'],
  DOC: ['docs/01-product/documents-and-canvas.md', 'docs/02-architecture/canonical-content-and-no-drift.md'],
  CANVAS: ['docs/01-product/documents-and-canvas.md', 'docs/01-product/research-studio.md'],
  RES: ['docs/03-ai/research-orchestrator.md', 'docs/06-delivery/release-engineering-and-change-control.md'],
  WEB: ['docs/03-ai/research-orchestrator.md', 'docs/05-security/threat-model.md'],
  AGENT: ['docs/03-ai/multi-agent-orchestration.md', 'docs/05-security/web-application-security-baseline.md'],
  LONG: ['docs/03-ai/research-orchestrator.md', 'docs/03-ai/claims-evidence-citations.md'],
  MEM: ['docs/03-ai/project-memory.md', 'docs/05-security/data-governance.md'],
  PUB: ['docs/01-product/public-private-publishing.md', 'docs/02-architecture/canonical-content-and-no-drift.md'],
  GH: ['docs/04-sources/github-integration.md', 'docs/05-security/secure-software-supply-chain.md'],
  STUDIO: ['docs/01-product/research-studio.md'],
  DEVAPI: ['docs/02-architecture/developer-platform-api.md', 'docs/02-architecture/schema-contract-and-data-evolution.md'],
  BILL: ['docs/06-delivery/performance-capacity-and-load-engineering.md', 'docs/07-reference/configuration-contract.md'],
  ENT: ['docs/05-security/data-governance.md', 'docs/06-delivery/observability-and-incident-response.md'],
  CONF: ['docs/06-delivery/production-readiness-checklist.md', 'docs/06-delivery/implementation-status.md'],
  EVO: ['docs/02-architecture/schema-contract-and-data-evolution.md', 'docs/06-delivery/release-engineering-and-change-control.md'],
  PERF: ['docs/06-delivery/performance-capacity-and-load-engineering.md', 'docs/06-delivery/observability-and-incident-response.md'],
  SSC: ['docs/05-security/secure-software-supply-chain.md'],
  KEY: ['docs/05-security/secrets-encryption-and-configuration.md'],
  APPSEC: ['docs/05-security/web-application-security-baseline.md', 'docs/05-security/threat-model.md'],
  REL: ['docs/06-delivery/release-engineering-and-change-control.md', 'docs/06-delivery/backup-restore-and-disaster-recovery.md', 'docs/06-delivery/production-readiness-checklist.md'],
};

const gaps = [
  ['activation', 'Onboarding, templates, imports, and time to first supported answer', 'conformance-26', ['CONF-001'], true],
  ['rights', 'Source acquisition, quotation, attribution, publication rights, and takedown', 'publication-19', ['PUB-002'], true],
  ['provider-governance', 'AI provider retention, training, region, and data-classification policy', 'security-hardening-29', ['APPSEC-001'], true],
  ['cost-control', 'Budgets, reservations, quotas, denial-of-wallet protection, and reconciliation', 'billing-24', ['BILL-001', 'BILL-002'], true],
  ['accessibility', 'WCAG-aligned application, artifact, and export accessibility', 'conformance-26', ['CONF-001'], true],
  ['internationalization', 'Unicode-safe, locale-neutral, multilingual, and RTL-capable behavior', 'conformance-26', ['CONF-001'], false],
  ['abuse-safety', 'Prompt injection, malicious source, tool abuse, and excessive-agency controls', 'security-hardening-29', ['APPSEC-002'], true],
  ['observability', 'Service health, research-run traces, customer-visible status, and cost telemetry', 'performance-28', ['PERF-001'], true],
  ['disaster-recovery', 'Backups, restoration, regional degradation, RPO, RTO, and game days', 'release-30', ['REL-002'], true],
  ['support-operations', 'Metadata-first support, break-glass controls, repair commands, and audit', 'enterprise-25', ['ENT-002'], true],
  ['schema-evolution', 'Compatible migrations for data, events, workflows, APIs, and SDKs', 'evolution-27', ['EVO-001', 'EVO-002'], true],
  ['capacity', 'Representative load, fairness, backpressure, and capacity qualification', 'performance-28', ['PERF-001', 'PERF-002'], true],
  ['supply-chain', 'Pinned dependencies, SBOM, provenance, vulnerability, and license gates', 'security-hardening-29', ['SSC-001', 'SSC-002'], true],
  ['secrets-keys', 'Secret isolation, encryption inventory, key rotation, and revocation', 'security-hardening-29', ['KEY-001', 'KEY-002'], true],
  ['application-security', 'Web, API, tenant-isolation, upload, webhook, SSRF, and IDOR controls', 'security-hardening-29', ['APPSEC-001', 'APPSEC-002'], true],
  ['release-control', 'Immutable promotion, canary, rollback, change approval, and customer truth', 'release-30', ['REL-001', 'REL-002'], true],
].map(([id, title, ownerSlice, requirementIds, launchBlocking]) => ({ id, title, ownerSlice, requirementIds, launchBlocking, status: 'specified-not-implemented' }));

writeJson('docs/_meta/build-plan.json', { schemaVersion: 2, generatedAt: '2026-07-17', slices });
writeJson('docs/_meta/implementation-build-plan.json', { schemaVersion: 2, generatedAt: '2026-07-17', slices });
writeJson('docs/_meta/requirements.json', { schemaVersion: 2, generatedAt: '2026-07-17', requirements });
writeJson('docs/_meta/implementation-status.json', {
  schemaVersion: 2,
  repositoryState: 'implementation-ready-specification',
  runtimeState: 'not-scaffolded',
  completedSlices: [],
  inProgressSlices: [],
  nextSlice: 'foundation-01',
  activeAssignments: [],
  completionRecords: [],
  updatedAt: '2026-07-17',
});
writeJson('docs/_meta/agent-routing.json', {
  schemaVersion: 2,
  entry: ['AGENTS.md', 'docs/START-HERE.md'],
  commands: ['node scripts/agent-status.mjs', 'node scripts/agent-context.mjs'],
  alwaysRead: ['AGENTS.md', 'docs/START-HERE.md', 'docs/00-foundation/requirements.md', 'docs/06-delivery/implementation-status.md'],
  authority: ['SECURITY.md', 'docs/05-security/threat-model.md', 'docs/05-security/web-application-security-baseline.md', 'docs/_meta/requirements.json', 'docs/_meta/build-plan.json'],
  requirementGroups: Object.fromEntries(Object.entries(groupDocs).map(([group, documents]) => [group, { documents }])),
});
writeJson('docs/_meta/product-readiness-gaps.json', { schemaVersion: 2, generatedAt: '2026-07-17', gaps });

write('package.json', JSON.stringify({
  name: 'research',
  private: true,
  version: '0.0.0',
  type: 'module',
  packageManager: 'pnpm@10.12.1',
  scripts: {
    'agent:status': 'node scripts/agent-status.mjs',
    'agent:context': 'node scripts/agent-context.mjs',
    'agent:check': 'node scripts/validate-agent-control.mjs && node scripts/validate-production-readiness.mjs && node scripts/validate-workflow-security.mjs',
    'docs:check': 'pnpm agent:check',
  },
}, null, 2));

write('scripts/agent-status.mjs', `import fs from 'node:fs';
const read = p => JSON.parse(fs.readFileSync(new URL('../' + p, import.meta.url), 'utf8'));
const plan = read('docs/_meta/build-plan.json');
const status = read('docs/_meta/implementation-status.json');
const requirements = read('docs/_meta/requirements.json');
const completed = new Set(status.completedSlices);
const eligible = plan.slices.filter(s => s.status !== 'complete' && s.dependencies.every(d => completed.has(d))).sort((a,b) => a.order-b.order);
const next = eligible[0];
console.log('Research implementation status');
console.log('Repository state:', status.repositoryState);
console.log('Runtime state:', status.runtimeState);
console.log('Completed slices:', completed.size + ' / ' + plan.slices.length);
console.log('Canonical requirements:', requirements.requirements.length);
console.log('Next eligible slice:', next ? next.id + ' — ' + next.title : 'none');
if (next) console.log('Dependencies:', next.dependencies.length ? next.dependencies.join(', ') : 'none');
`);

write('scripts/agent-context.mjs', `import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const read = p => JSON.parse(fs.readFileSync(new URL(p, root), 'utf8'));
const plan = read('docs/_meta/build-plan.json');
const status = read('docs/_meta/implementation-status.json');
const routing = read('docs/_meta/agent-routing.json');
const requirements = read('docs/_meta/requirements.json').requirements;
const requested = process.argv.includes('--slice') ? process.argv[process.argv.indexOf('--slice') + 1] : null;
const completed = new Set(status.completedSlices);
const eligible = plan.slices.filter(s => s.status !== 'complete' && s.dependencies.every(d => completed.has(d))).sort((a,b) => a.order-b.order);
const slice = requested ? plan.slices.find(s => s.id === requested) : eligible[0];
if (!slice) throw new Error('No matching implementation slice.');
const docs = new Set(routing.alwaysRead);
for (const id of slice.requirementIds) {
  const group = id.split('-')[0];
  for (const doc of routing.requirementGroups[group]?.documents ?? []) docs.add(doc);
}
for (const doc of slice.documents ?? []) docs.add(doc);
const missing = [...docs].filter(p => !fs.existsSync(new URL(p, root)));
if (missing.length) throw new Error('Missing routed documents: ' + missing.join(', '));
console.log('# Implementation context');
console.log('Slice:', slice.id, '—', slice.title);
console.log('Eligibility:', slice.dependencies.every(d => completed.has(d)) ? 'ready' : 'context-only');
console.log('Dependencies:', slice.dependencies.length ? slice.dependencies.join(', ') : 'none');
console.log('Deliverable:', slice.deliverable);
console.log('Requirements:');
for (const id of slice.requirementIds) {
  const requirement = requirements.find(r => r.id === id);
  console.log('-', id + ':', requirement?.statement ?? 'missing');
}
console.log('Read in order:');
for (const doc of docs) console.log('-', doc);
`);

write('scripts/validate-agent-control.mjs', `import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const read = p => JSON.parse(fs.readFileSync(new URL(p, root), 'utf8'));
const plan = read('docs/_meta/build-plan.json');
const requirements = read('docs/_meta/requirements.json').requirements;
const status = read('docs/_meta/implementation-status.json');
const routing = read('docs/_meta/agent-routing.json');
const fail = message => { throw new Error(message); };
const ids = new Set();
const orders = new Set();
for (const slice of plan.slices) {
  if (ids.has(slice.id)) fail('Duplicate slice: ' + slice.id);
  if (orders.has(slice.order)) fail('Duplicate order: ' + slice.order);
  ids.add(slice.id); orders.add(slice.order);
}
for (const slice of plan.slices) for (const dep of slice.dependencies) if (!ids.has(dep)) fail('Unknown dependency ' + dep + ' for ' + slice.id);
const visiting = new Set(), visited = new Set();
const byId = new Map(plan.slices.map(s => [s.id, s]));
const visit = id => { if (visiting.has(id)) fail('Dependency cycle at ' + id); if (visited.has(id)) return; visiting.add(id); for (const dep of byId.get(id).dependencies) visit(dep); visiting.delete(id); visited.add(id); };
for (const id of ids) visit(id);
const requirementIds = new Set();
const owned = new Map();
for (const requirement of requirements) {
  if (requirementIds.has(requirement.id)) fail('Duplicate requirement: ' + requirement.id);
  requirementIds.add(requirement.id);
  if (!ids.has(requirement.ownerSlice)) fail('Unknown requirement owner: ' + requirement.id);
  owned.set(requirement.id, requirement.ownerSlice);
  const group = requirement.id.split('-')[0];
  if (!routing.requirementGroups[group]) fail('Missing route for requirement group ' + group);
}
for (const slice of plan.slices) for (const id of slice.requirementIds) {
  if (!requirementIds.has(id)) fail('Slice references unknown requirement: ' + id);
  if (owned.get(id) !== slice.id) fail('Requirement ownership mismatch: ' + id);
}
for (const requirement of requirements) {
  const appearances = plan.slices.filter(s => s.requirementIds.includes(requirement.id));
  if (appearances.length !== 1) fail('Requirement must appear in exactly one slice: ' + requirement.id);
}
for (const file of [...routing.alwaysRead, ...Object.values(routing.requirementGroups).flatMap(v => v.documents)]) if (!fs.existsSync(new URL(file, root))) fail('Routed document is missing: ' + file);
const completed = new Set(status.completedSlices);
const eligible = plan.slices.filter(s => s.status !== 'complete' && s.dependencies.every(d => completed.has(d))).sort((a,b) => a.order-b.order);
if ((eligible[0]?.id ?? null) !== status.nextSlice) fail('nextSlice does not match the dependency graph.');
if (status.runtimeState !== 'not-scaffolded' && completed.size === 0) fail('Runtime state overstates implementation.');
console.log('Agent control validation passed:', plan.slices.length, 'slices,', requirements.length, 'requirements.');
`);

write('scripts/validate-production-readiness.mjs', `import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const read = p => JSON.parse(fs.readFileSync(new URL(p, root), 'utf8'));
const plan = read('docs/_meta/build-plan.json');
const requirements = new Map(read('docs/_meta/requirements.json').requirements.map(r => [r.id, r]));
const gaps = read('docs/_meta/product-readiness-gaps.json').gaps;
const status = read('docs/_meta/implementation-status.json');
const byId = new Map(plan.slices.map(s => [s.id, s]));
const ancestors = (id, result = new Set()) => { for (const dep of byId.get(id)?.dependencies ?? []) { if (!result.has(dep)) { result.add(dep); ancestors(dep, result); } } return result; };
const releaseAncestors = ancestors('release-30');
for (const gap of gaps) {
  if (!byId.has(gap.ownerSlice)) throw new Error('Gap has unknown owner: ' + gap.id);
  for (const id of gap.requirementIds) if (!requirements.has(id)) throw new Error('Gap has unknown requirement: ' + gap.id + ' -> ' + id);
  if (gap.launchBlocking && gap.ownerSlice !== 'release-30' && !releaseAncestors.has(gap.ownerSlice)) throw new Error('Launch-blocking gap is not a release dependency: ' + gap.id);
}
if (status.repositoryState !== 'implementation-ready-specification') throw new Error('Repository state must remain an implementation-ready specification.');
if (status.runtimeState !== 'not-scaffolded') throw new Error('Runtime state must not imply an implementation exists.');
console.log('Production readiness validation passed:', gaps.length, 'gaps,', gaps.filter(g => g.launchBlocking).length, 'launch blocking.');
`);

write('scripts/validate-workflow-security.mjs', `import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(new URL('..', import.meta.url).pathname);
const dir = path.join(root, '.github/workflows');
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => /\\.ya?ml$/.test(f)) : [];
if (files.length !== 1 || files[0] !== 'docs.yml') throw new Error('Exactly one canonical workflow, docs.yml, is permitted.');
for (const file of files) {
  const text = fs.readFileSync(path.join(dir, file), 'utf8');
  if (!/^permissions:/m.test(text)) throw new Error(file + ' lacks explicit permissions.');
  if (/pull_request_target\s*:/m.test(text)) throw new Error(file + ' uses pull_request_target.');
  if (/persist-credentials:\s*true/i.test(text)) throw new Error(file + ' persists checkout credentials.');
  if (/curl[^\\n]*\\|\\s*(bash|sh)/i.test(text)) throw new Error(file + ' pipes remote content to a shell.');
  for (const match of text.matchAll(/uses:\s*([^\\s#]+)/g)) {
    const ref = match[1].split('@')[1] ?? '';
    if (!/^[a-f0-9]{40}$/.test(ref)) throw new Error(file + ' contains an unpinned action: ' + match[1]);
  }
}
console.log('Workflow security validation passed:', files.join(', '));
`);

write('.github/workflows/docs.yml', `name: Documentation contracts

on:
  push:
    branches: [main]
  pull_request:

permissions:
  contents: read

concurrency:
  group: documentation-contracts-\${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    runs-on: ubuntu-24.04
    timeout-minutes: 10
    steps:
      - name: Check out repository
        uses: actions/checkout@9c091bb21b7c1c1d1991bb908d89e4e9dddfe3e0 # v7.0.0
        with:
          persist-credentials: false
      - name: Show implementation status
        run: node scripts/agent-status.mjs
      - name: Generate next-slice context
        run: node scripts/agent-context.mjs
      - name: Validate agent control plane
        run: node scripts/validate-agent-control.mjs
      - name: Validate production readiness
        run: node scripts/validate-production-readiness.mjs
      - name: Validate workflow security
        run: node scripts/validate-workflow-security.mjs
`);

write('README.md', `# Research

Research is a source-native workspace that turns Project conversations and authorized evidence into durable, continuously maintained Markdown documentation.

The product has three primary surfaces:

1. Chat orchestrates questions, research plans, tools, and proposed changes.
2. Documents are the durable, human-editable product.
3. Sources preserve immutable originals, versions, permissions, rights, evidence spans, and citations.

Public and private documentation are projections from the same canonical revision and claim graph. They are not independently maintained copies.

## Current truth

This repository is an implementation-ready specification. The runtime application has not been scaffolded. No document may represent a capability as implemented unless the implementation ledger contains executable evidence.

The next eligible implementation slice is foundation-01.

## Start here

Humans and coding agents use the same entry sequence:

1. Read AGENTS.md.
2. Read docs/START-HERE.md.
3. Run node scripts/agent-status.mjs.
4. Run node scripts/agent-context.mjs.
5. Implement only the selected dependency-eligible slice.
6. Record tests, migrations, operational evidence, and completion state before advancing.

## Architecture direction

The target is a modular TypeScript application using TanStack Start, Hono, Tailwind CSS, source-owned shadcn/ui components, Vercel AI SDK, AI Gateway, durable workflows, Postgres, object storage, hybrid retrieval, isolated parsing, and replaceable provider adapters.

The first production proof is intentionally narrow: create a Project, upload one PDF, parse and index it, ask a question, return exact evidence and citations, create an editable Markdown document, and reopen the result after refresh.

## Documentation map

- PRODUCT.md defines product behavior and boundaries.
- ARCHITECTURE.md defines the target system and deployment model.
- ROADMAP.md defines dependency-controlled delivery.
- SECURITY.md defines security reporting and non-negotiable controls.
- docs/README.md indexes the accepted documentation.
- docs/00-foundation/requirements.md lists canonical requirement groups.
- docs/06-delivery/production-readiness-checklist.md defines the release evidence package.
- docs/_meta contains the machine-readable requirements, build plan, routing, implementation status, and readiness gaps.

## Non-negotiable invariants

- Every tenant object is authorized through a Project boundary.
- Source versions are immutable.
- Retrieval authorization occurs before model or reranker exposure.
- Source content is untrusted data and cannot redefine instructions or tool authority.
- Factual output is supported, explicitly inferred, disputed, or blocked.
- Agents propose typed changes and cannot self-authorize publication or destructive actions.
- Public and private output derive from one canonical content model.
- Every model call, tool action, source decision, document revision, and publication is attributable.
- Production receives the same immutable artifact that passed staging and canary validation.
`);

write('AGENTS.md', `# Repository instructions for coding agents

Research is controlled by accepted documentation and a dependency-ordered implementation ledger. Chat history is not an implementation authority.

## Required entry sequence

1. Read docs/START-HERE.md.
2. Run node scripts/agent-status.mjs.
3. Run node scripts/agent-context.mjs.
4. Read every routed document in the emitted order.
5. Work on one eligible slice only.
6. Run node scripts/validate-agent-control.mjs, node scripts/validate-production-readiness.mjs, and node scripts/validate-workflow-security.mjs before publishing changes.

## Authority order

1. Security restrictions and non-negotiable invariants.
2. Accepted architecture decisions.
3. Canonical requirements and terminology.
4. Product, architecture, AI, source, security, and delivery contracts.
5. Implementation blueprints and tooling research.
6. Summaries and competitive analysis.

Resolve contradictions in the governing document before implementing. Do not choose the easier interpretation silently.

## Implementation rules

- Never claim specified behavior is implemented without executable evidence.
- Do not skip build-plan dependencies.
- Keep TanStack Start and Hono boundaries explicit.
- Keep provider-specific behavior behind adapters.
- Treat uploads, websites, repositories, messages, and model output as untrusted input.
- Enforce authorization before retrieval.
- Preserve immutable source versions and exact evidence locators.
- Use typed document patches; do not silently rewrite canonical or published content.
- Do not write directly to a connected repository default branch.
- Do not commit secrets, credentials, raw customer content, or production data.
- Every schema, API, event, workflow, index, and SDK change requires compatibility and migration evidence.
- Every performance-sensitive feature requires budgets, metrics, load evidence, and degradation behavior.
- Every release requires rollback, restoration, incident, support, and customer-truth evidence.

## Completion evidence

A slice is complete only when its implementation, tests, migrations, security controls, observability, documentation, and validation summary are committed together. A placeholder package, mock screen, passing type check, or generated document alone is not completion evidence.
`);

write('docs/START-HERE.md', `# Start here

Research turns Project conversations and authorized sources into durable, continuously maintained Markdown documentation backed by exact evidence.

## Product model

Project contains Chat, Documents, and Sources. Studio, Evidence, Memory, Research Runs, GitHub, Activity, Publish, and Settings are contextual systems around those three surfaces.

## Build entry

Run node scripts/agent-status.mjs, then node scripts/agent-context.mjs. The context command selects the lowest-order eligible slice and emits its exact requirements and reading list.

The repository is presently an implementation-ready specification. Runtime state is not-scaffolded. The first slice is foundation-01.

## Read before implementation

- PRODUCT.md
- ARCHITECTURE.md
- SECURITY.md
- docs/00-foundation/requirements.md
- docs/06-delivery/implementation-status.md
- The documents emitted by agent-context

## Production definition

Production-ready means more than feature-complete. It requires compatible migrations, permission and tenant-isolation tests, representative load, bounded queues, cost controls, immutable artifact promotion, rollback, restoration, incident response, support readiness, accessible user journeys, accurate customer documentation, and a verified release evidence package.

## Prohibited shortcuts

Do not infer implementation from documentation volume. Do not bypass dependency order. Do not use memory as evidence. Do not allow source instructions to become system instructions. Do not publish unsupported claims. Do not mutate immutable source versions. Do not create independent public and private documents. Do not let agents approve their own high-impact actions.
`);

write('docs/README.md', `# Research documentation

## Directory map

- 00-foundation: thesis, principles, requirements, terminology, and benchmarks.
- 01-product: user-visible Project, Chat, Documents, Sources, Studio, and publishing behavior.
- 02-architecture: domain boundaries, persistence, APIs, environments, contract evolution, and no-drift design.
- 03-ai: model routing, research orchestration, evidence, agents, memory, and evaluation.
- 04-sources: ingestion, parsing, indexing, retrieval, connectors, web, scholarly, and GitHub material.
- 05-security: threat model, authorization, privacy, application security, supply chain, secrets, and governance.
- 06-delivery: implementation order, release controls, performance, observability, recovery, status, and launch evidence.
- 07-reference: official references, configuration, schemas, events, routes, and terminology.
- 08-build: concrete stack choices, tooling, automation flows, and implementation blueprints.
- _meta: machine-readable requirements, routing, build plan, status, and readiness gaps.

## Canonical production contracts

- docs/02-architecture/schema-contract-and-data-evolution.md
- docs/02-architecture/environment-topology.md
- docs/02-architecture/data-ownership-and-boundaries.md
- docs/05-security/secure-software-supply-chain.md
- docs/05-security/secrets-encryption-and-configuration.md
- docs/05-security/web-application-security-baseline.md
- docs/05-security/threat-model.md
- docs/06-delivery/release-engineering-and-change-control.md
- docs/06-delivery/performance-capacity-and-load-engineering.md
- docs/06-delivery/observability-and-incident-response.md
- docs/06-delivery/backup-restore-and-disaster-recovery.md
- docs/06-delivery/production-readiness-checklist.md

Overview documents navigate. They do not override accepted requirements, security contracts, or architecture decisions.
`);

write('SECURITY.md', `# Security policy

## Reporting

Do not open a public issue for a suspected vulnerability. Send a private report to the repository owner with the affected surface, reproduction steps, impact, and any relevant logs or proof of concept. Do not include real customer data or credentials.

## Current support state

Research is currently an implementation-ready specification and has no supported production runtime. Security controls in this repository are release requirements, not claims that a deployed service exists.

## Security boundaries

- Project authorization is the primary tenant boundary.
- Retrieval authorization is enforced before model exposure.
- Source content, model output, connector data, archives, media, and repository contents are untrusted.
- Agents receive explicit, short-lived capabilities and cannot self-authorize high-impact actions.
- Source versions, evidence, document revisions, audit records, and publication snapshots are immutable by version.
- Secrets and key material remain outside source, logs, analytics, prompts, and generated artifacts.
- Public output requires rights, privacy, attribution, unsupported-claim, and redaction checks.

## Release security evidence

A release requires threat-model review, tenant-isolation and authorization tests, dependency and action pinning, SBOM and provenance evidence, vulnerability and license review, secret and key-rotation exercises, prompt-injection and excessive-agency tests, application-security verification, rollback, and restoration results.
`);

write('ARCHITECTURE.md', `# Architecture

Research begins as a modular TypeScript monolith deployed through one application and one API surface. Domain boundaries are explicit so workloads can be extracted later without changing product semantics.

## Primary runtime

- TanStack Start provides the React application, routes, SSR, streaming, and server entry points.
- Hono provides the typed domain API under the same deployment boundary.
- Vercel AI SDK provides model streaming, structured output, tools, and bounded agents.
- AI Gateway provides replaceable model routing, fallbacks, usage attribution, and policy controls.
- Durable workflows own long-running research, ingestion, approvals, synchronization, maintenance, and publication.
- Postgres owns transactional state, authorization metadata, canonical documents, claims, evidence, usage, and workflow references.
- Object storage owns immutable originals, snapshots, derivatives, and exports.
- Full-text, trigram, vector, metadata, entity, and repository indexes are derived and rebuildable.
- Isolated workers handle hostile parsing, media processing, code execution, and repository validation.

## Data authority

The critical trace is Document block to Claim to Evidence span to immutable Source version. Chat and generated artifacts are projections over that graph, not independent authorities.

## Environment topology

Local, preview, integration, staging, canary, and production are separate trust and data boundaries. Production promotion uses one immutable artifact. Data, credentials, connector installations, encryption keys, webhooks, queues, and observability destinations are never shared implicitly across environments.

## Reliability model

Commands create durable domain records and transactional outbox events. Workflows use idempotent steps, bounded retries, replayable progress, cancellation, and human approvals. Queues enforce per-tenant fairness, admission control, and backpressure. Every service class has SLOs and a measured capacity envelope.

## Evolution model

Database, API, event, workflow, document, citation-locator, index, export, and SDK contracts evolve through explicit compatibility windows. Data changes use expand, backfill, switch, and contract. In-flight workflows remain executable across deployments or are migrated deliberately.
`);

write('ROADMAP.md', `# Roadmap

The machine-readable build plan is docs/_meta/build-plan.json. It is authoritative for dependency order.

## Product proof

The earliest useful vertical slice is: create a Project, upload one PDF, create an immutable source version, parse and index it, ask a question, retrieve exact evidence, stream a cited answer, create an editable Markdown document, persist it, and reopen it after refresh.

## Delivery sequence

1. Foundation, application shell, API, identity, and Project authorization.
2. Immutable sources, ingestion, parsing, indexing, and permission-first retrieval.
3. Grounded Chat, claims, evidence, citations, canonical documents, and canvas editing.
4. Durable research, web discovery, bounded agents, long-form generation, and Project memory.
5. Publishing, GitHub integration, Studio artifacts, developer platform, billing, and enterprise controls.
6. End-to-end conformance, schema evolution, performance qualification, security hardening, and production release.

## Release gate

release-30 is not eligible until evolution-27, performance-28, and security-hardening-29 are complete. Launch evidence must include migrations, compatibility, capacity, cost, security, rollback, restoration, monitoring, incident response, support operations, accessibility, rights, and customer-facing truth.
`);

write('docs/00-foundation/requirements.md', `# Canonical requirements

The machine authority is docs/_meta/requirements.json. Each requirement has one primary implementation-slice owner and one routing group.

Requirement groups cover foundation, user experience, API, authorization, sources, ingestion, parsing, indexing, retrieval, Chat, citations, documents, canvas, Research Runs, web discovery, agents, long-form generation, memory, publication, GitHub, Studio, developer APIs, commercial controls, enterprise operations, conformance, evolution, performance, supply chain, keys, application security, and release.

No slice is complete until all owned requirements have executable evidence. Requirements can be changed only with a corresponding product or architecture update and an explicit review of dependent slices.
`);

write('docs/02-architecture/environment-topology.md', `# Environment topology

## Environments

Local is disposable and uses synthetic data. Preview is per-change and cannot access production data or credentials. Integration exercises shared contracts and migrations. Staging mirrors production topology and policy with non-production data. Canary receives the production artifact for bounded traffic. Production serves customers.

## Isolation

Each environment has separate databases, object storage, connector installations, webhook secrets, encryption keys, queues, caches, feature-flag context, AI budgets, audit destinations, and public domains. Cross-environment copying requires an explicit sanitized export and an audit record.

## Promotion

Build once, attest once, and promote the same immutable artifact. Configuration is validated separately for every environment. Deployment success does not imply release success; health, migration, smoke, security, cost, and business checks must pass.

## Failure handling

A failed preview blocks review. A failed staging qualification blocks promotion. A canary breach automatically stops expansion and invokes rollback or forward recovery. Production changes retain the previous compatible artifact and schema path until the observation window closes.
`);

write('docs/02-architecture/data-ownership-and-boundaries.md', `# Data ownership and boundaries

## Canonical owners

Project and membership policy own tenant authorization. Source owns originals and immutable versions. Evidence owns exact locators. Claims own factual status. Documents own canonical Markdown and revisions. Research Runs own plans, steps, budgets, and outputs. Publication owns immutable public and private snapshots. Usage owns reservations, events, corrections, and reconciliation.

## Derived systems

Search indexes, embeddings, summaries, caches, previews, thumbnails, transcripts, and analytics are derived. They can be rebuilt or deleted without changing canonical truth. Derived stores never grant access that the canonical permission model denies.

## Transaction boundaries

User commands validate identity, authorization, expected versions, entitlements, and budgets before committing domain state. A transactional outbox publishes durable follow-up work. Consumers are idempotent and record causation, correlation, tenant, actor, and schema version.

## Deletion and revocation

Revocation takes effect at retrieval and tool execution, not only in the interface. Deletion propagates through derivatives, indexes, caches, exports, and model-access paths while preserving only legally required, access-restricted audit evidence.
`);

write('docs/06-delivery/observability-and-incident-response.md', `# Observability and incident response

## Signals

Every request, command, workflow, queue item, model call, connector operation, parser run, retrieval query, document patch, publication, and billing event carries tenant-safe correlation identifiers. Metrics cover availability, latency, errors, saturation, queue age, retries, model usage, citation quality, unsupported claims, cost, and customer-visible degradation.

Logs exclude secrets, source bodies, prompts, document content, credentials, and raw connector payloads. Traces may contain identifiers and classified metadata only. Customer content requires a separate, time-bound, audited diagnostic grant.

## Alerting

Alerts are tied to SLO burn, security invariants, data loss risk, authorization failures, stuck workflows, queue age, cost anomalies, publication errors, webhook failure, and restore health. Every page links to an owner, dashboard, runbook, and rollback or mitigation action.

## Incident lifecycle

Declare severity, establish command, stop harm, preserve evidence, communicate status, mitigate, recover, verify, and conduct a blameless review. Customer communication states impact, affected capabilities, data considerations, workarounds, and restoration status without unsupported speculation.

## Learning

Incident actions become tracked work with owners and due dates. Regressions become automated tests, monitors, policy checks, or game-day scenarios. The same failure class must not depend on institutional memory to prevent recurrence.
`);

write('docs/06-delivery/backup-restore-and-disaster-recovery.md', `# Backup, restore, and disaster recovery

## Recovery classes

Canonical transactional data, immutable source objects, encryption metadata, audit evidence, workflow state, and publication snapshots receive explicit recovery point and recovery time objectives. Derived indexes and caches are rebuilt from canonical sources and have separate objectives.

## Backups

Backups are encrypted, access-controlled, regionally appropriate, retention-governed, and continuously monitored. A backup is not considered valid until restoration proves application-readable data, referential integrity, tenant isolation, key access, and source-to-evidence-to-document traceability.

## Restoration

Restoration uses documented ordering for identity, authorization, canonical data, objects, workflows, indexes, caches, webhooks, and public aliases. Replayed events are idempotent. Billing, usage, connector, and publication state are reconciled before normal operations resume.

## Exercises

Quarterly restore exercises and annual cross-functional disaster scenarios measure actual RPO and RTO. Scenarios include database loss, object corruption, regional outage, key unavailability, queue loss, provider outage, accidental publication, and compromised connector credentials.

## Degraded operation

The product can disable research engines, writes, publication, connectors, or expensive tools independently. Degradation is explicit in the UI and API. Read-only access is permitted only when authorization and data integrity remain trustworthy.
`);

write('docs/06-delivery/production-readiness-checklist.md', `# Production readiness checklist

A release is blocked until evidence exists for every applicable item.

## Product and correctness

- Complete representative journeys pass from onboarding through export and deletion.
- Source permissions, revocation, citation resolution, document patches, public and private projections, and no-drift maintenance are verified.
- Long-form research passes coverage, contradiction, duplication, numeric, terminology, and citation audits.
- Customer-visible behavior, pricing, limits, and documentation match the runtime.

## Data and compatibility

- Database migrations use expand, backfill, switch, and contract with rollback evidence.
- APIs, events, workflows, documents, locators, indexes, exports, and SDKs meet compatibility windows.
- Backup restoration and disaster scenarios meet measured RPO and RTO.

## Security and governance

- Threat model, tenant isolation, authorization, prompt injection, SSRF, IDOR, CSRF, webhook, upload, and excessive-agency tests pass.
- Dependencies and actions are pinned; SBOM, provenance, vulnerability, and license evidence are attached.
- Secrets and keys have owners, environments, rotation, revocation, recovery, and audit evidence.
- Rights, privacy, retention, residency, redaction, and takedown controls pass.

## Reliability and operations

- SLOs, dashboards, alerts, runbooks, capacity envelopes, load tests, backpressure, fairness, and degradation modes are verified.
- Rollback and forward recovery are rehearsed with the exact release artifact.
- Incident command, customer communication, support access, status reporting, and on-call ownership are ready.

## Release record

The release record links artifact digest, source commit, dependency lock, attestations, migrations, test results, security evidence, load results, canary observations, approvals, rollback target, and post-release observation window.
`);

write('docs/07-reference/configuration-contract.md', `# Configuration contract

Configuration is typed, documented, validated at startup, and classified as public, internal, secret, or key material.

Every variable records owner, purpose, type, allowed environments, default policy, rotation behavior, failure mode, and whether it may reach browser code, logs, traces, analytics, model prompts, or generated output.

Production starts fail-closed when required configuration is missing, malformed, stale, or points at the wrong environment. Secret values never have repository defaults. Public client configuration is explicitly allowlisted rather than inferred from naming alone.

Feature flags are not permanent configuration. Every flag has an owner, intended lifetime, rollout plan, kill behavior, telemetry, and removal date. Authorization and billing correctness never depend solely on a client-side flag.
`);

write('docs/02-architecture/decisions/ADR-0028-release-artifacts-and-contract-evolution.md', `# ADR-0028: Release artifacts and contract evolution

Status: Accepted

Research builds one immutable artifact and promotes that artifact through staging, canary, and production. Database, API, event, workflow, document, locator, index, export, and SDK changes use explicit compatibility windows. Database changes follow expand, backfill, switch, and contract. In-flight workflows remain executable across deployments. A release cannot depend on rebuilding between environments.
`);
write('docs/02-architecture/decisions/ADR-0029-secure-supply-chain-and-web-baseline.md', `# ADR-0029: Secure supply chain and web baseline

Status: Accepted

All dependencies, GitHub Actions, containers, and build tools are pinned and reviewed. Releases retain lockfiles, SBOM, provenance, vulnerability, and license evidence. The web and API surface follows deny-by-default authorization, safe session and CSRF behavior, strict CORS and CSP, isolated uploads and parsing, SSRF controls, signed webhooks, tenant-safe caching, and abuse-aware rate limits.
`);
write('docs/02-architecture/decisions/ADR-0030-capacity-keys-and-configuration-integrity.md', `# ADR-0030: Capacity, keys, and configuration integrity

Status: Accepted

Every service class has SLOs, budgets, capacity envelopes, bounded queues, fairness, admission control, and degradation behavior. Secrets and encryption keys are environment-scoped, inventoried, rotated, revocable, and recoverable. Configuration is typed and fail-closed. Production release requires measured load, cost, key, configuration, rollback, and restoration evidence.
`);

write('docs/06-delivery/implementation-status.md', `# Implementation status

Repository state: implementation-ready-specification

Runtime state: not-scaffolded

Completed slices: 0 of 30

Next eligible slice: foundation-01 — Monorepo and quality foundation

The repository contains accepted product, architecture, research, source, security, delivery, and production-readiness contracts. It does not contain a working TanStack Start application, Hono API, database, authentication system, ingestion pipeline, retrieval engine, chat runtime, document editor, research workflow, GitHub App, billing system, or production deployment.

Status changes require executable evidence and a corresponding update to docs/_meta/implementation-status.json. Documentation volume, generated placeholders, mocks, or passing static checks do not establish implementation.
`);

write('docs/06-delivery/implementation-plan.md', `# Implementation plan

The authoritative dependency graph is docs/_meta/build-plan.json. Work proceeds one eligible slice at a time.

The first release proof spans foundation through documents and citations, but each slice remains independently reviewable. Connector breadth, multi-agent complexity, Studio artifact breadth, enterprise controls, and commercial systems follow only after the grounded PDF-to-cited-document path is reliable.

The final sequence is conformance-26, evolution-27, performance-28, security-hardening-29, and release-30. Production is blocked until compatible migration, representative load, security, rollback, restore, incident, support, and customer-truth evidence all pass.
`);

const markdownFiles = [];
const walk = dir => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(absolute);
    else if (entry.name.endsWith('.md')) markdownFiles.push(path.relative(root, absolute).replaceAll(path.sep, '/'));
  }
};
walk(root);
markdownFiles.sort();
writeJson('docs/_meta/manifest.json', {
  schemaVersion: 2,
  generatedAt: '2026-07-17',
  files: markdownFiles.map(file => {
    const content = fs.readFileSync(at(file));
    return { path: file, bytes: content.length, sha256: crypto.createHash('sha256').update(content).digest('hex') };
  }),
});

console.log(`Applied production controls to ${root}: ${slices.length} slices, ${requirements.length} requirements, ${gaps.length} readiness gaps.`);
