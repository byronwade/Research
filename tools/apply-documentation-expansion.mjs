import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(process.argv[2] ?? process.cwd());
const at = (...parts) => path.join(root, ...parts);
const readJson = file => JSON.parse(fs.readFileSync(at(file), 'utf8'));
const write = (file, content) => {
  const target = at(file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content.trimEnd() + '\n');
};
const writeJson = (file, value) => write(file, JSON.stringify(value, null, 2));
const appendUnique = (array, values) => {
  for (const value of values) if (!array.includes(value)) array.push(value);
};
const appendSection = (file, marker, section) => {
  const target = at(file);
  const current = fs.readFileSync(target, 'utf8');
  if (!current.includes(marker)) fs.writeFileSync(target, current.trimEnd() + '\n\n' + section.trim() + '\n');
};

const workflowDir = at('.github', 'workflows');
for (const entry of fs.readdirSync(workflowDir)) {
  if (entry !== 'docs.yml') fs.rmSync(path.join(workflowDir, entry), { force: true, recursive: true });
}

const plan = readJson('docs/_meta/build-plan.json');
const implementationPlanPath = fs.existsSync(at('docs/_meta/implementation-build-plan.json'))
  ? 'docs/_meta/implementation-build-plan.json'
  : null;
const requirementRegistry = readJson('docs/_meta/requirements.json');
const routing = readJson('docs/_meta/agent-routing.json');
const readiness = readJson('docs/_meta/product-readiness-gaps.json');

const newRequirements = [
  {
    id: 'CORE-003',
    group: 'CORE',
    statement: 'Local development shall be reproducible, isolated, synthetic-data-first, and unable to reach production by default.',
    ownerSlice: 'foundation-01',
    status: 'accepted',
  },
  {
    id: 'CORE-004',
    group: 'CORE',
    statement: 'Every implementation slice shall define layered test evidence and shall not rely on untracked flaky release gates.',
    ownerSlice: 'foundation-01',
    status: 'accepted',
  },
  {
    id: 'EVAL-001',
    group: 'EVAL',
    statement: 'AI and retrieval changes shall pass versioned offline, adversarial, safety, cost, latency, and variance evaluations.',
    ownerSlice: 'conformance-26',
    status: 'accepted',
  },
  {
    id: 'EVAL-002',
    group: 'EVAL',
    statement: 'Model, prompt, tool, route, and provider changes shall use pinned configuration, staged rollout, kill criteria, and rollback.',
    ownerSlice: 'conformance-26',
    status: 'accepted',
  },
  {
    id: 'PRIV-001',
    group: 'PRIV',
    statement: 'The platform shall maintain an attributable data inventory covering purpose, classification, processors, regions, retention, and deletion.',
    ownerSlice: 'enterprise-25',
    status: 'accepted',
  },
  {
    id: 'PRIV-002',
    group: 'PRIV',
    statement: 'Access, export, correction, deletion, restriction, public sharing, analytics, support, and provider handling shall have testable privacy operations.',
    ownerSlice: 'enterprise-25',
    status: 'accepted',
  },
  {
    id: 'EVO-003',
    group: 'EVO',
    statement: 'Every production backfill shall be resumable, idempotent, rate-limited, observable, verified, and governed by abort thresholds.',
    ownerSlice: 'evolution-27',
    status: 'accepted',
  },
  {
    id: 'OPS-001',
    group: 'OPS',
    statement: 'Every service and customer capability shall have named ownership, SLOs, dependencies, dashboards, alerts, and exercised runbooks.',
    ownerSlice: 'release-30',
    status: 'accepted',
  },
  {
    id: 'OPS-002',
    group: 'OPS',
    statement: 'Production operations shall use typed, least-privilege, auditable commands and tested escalation paths.',
    ownerSlice: 'release-30',
    status: 'accepted',
  },
];

const existingRequirementIds = new Set(requirementRegistry.requirements.map(item => item.id));
for (const requirement of newRequirements) {
  if (!existingRequirementIds.has(requirement.id)) requirementRegistry.requirements.push(requirement);
}
requirementRegistry.requirements.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
requirementRegistry.generatedAt = '2026-07-17';

const requirementAssignments = {
  'foundation-01': ['CORE-003', 'CORE-004'],
  'conformance-26': ['EVAL-001', 'EVAL-002'],
  'enterprise-25': ['PRIV-001', 'PRIV-002'],
  'evolution-27': ['EVO-003'],
  'release-30': ['OPS-001', 'OPS-002'],
};
for (const slice of plan.slices) {
  appendUnique(slice.requirementIds, requirementAssignments[slice.id] ?? []);
}
plan.generatedAt = '2026-07-17';

const routes = {
  CORE: [
    'ARCHITECTURE.md',
    'docs/06-delivery/implementation-plan.md',
    'docs/06-delivery/developer-environment-and-bootstrap.md',
    'docs/06-delivery/testing-and-validation-strategy.md',
  ],
  EVAL: [
    'docs/03-ai/model-evaluation-and-change-management.md',
    'docs/06-delivery/testing-and-validation-strategy.md',
    'docs/03-ai/research-orchestrator.md',
  ],
  PRIV: [
    'docs/05-security/privacy-and-compliance-operations.md',
    'docs/05-security/data-governance.md',
    'docs/05-security/secrets-encryption-and-configuration.md',
  ],
  EVO: [
    'docs/02-architecture/schema-contract-and-data-evolution.md',
    'docs/06-delivery/data-migration-and-backfill-runbook.md',
    'docs/06-delivery/release-engineering-and-change-control.md',
  ],
  OPS: [
    'docs/06-delivery/service-ownership-and-runbooks.md',
    'docs/06-delivery/observability-and-incident-response.md',
    'docs/06-delivery/release-engineering-and-change-control.md',
  ],
};
for (const [group, documents] of Object.entries(routes)) {
  routing.requirementGroups[group] ??= { documents: [] };
  appendUnique(routing.requirementGroups[group].documents, documents);
}
for (const [group, documents] of Object.entries({
  CONF: ['docs/06-delivery/testing-and-validation-strategy.md', 'docs/03-ai/model-evaluation-and-change-management.md'],
  ENT: ['docs/05-security/privacy-and-compliance-operations.md'],
  REL: ['docs/06-delivery/service-ownership-and-runbooks.md'],
  APPSEC: ['docs/05-security/privacy-and-compliance-operations.md'],
})) {
  routing.requirementGroups[group] ??= { documents: [] };
  appendUnique(routing.requirementGroups[group].documents, documents);
}

const newGaps = [
  ['developer-bootstrap', 'Reproducible, isolated, synthetic-data-first developer bootstrap', 'foundation-01', ['CORE-003'], true],
  ['test-strategy', 'Layered deterministic, integration, browser, AI, security, load, and recovery validation', 'foundation-01', ['CORE-004'], true],
  ['model-change-management', 'Versioned AI evaluation, staged rollout, provider governance, and rollback', 'conformance-26', ['EVAL-001', 'EVAL-002'], true],
  ['privacy-operations', 'Operational data inventory, retention, deletion, sharing, analytics, support, and provider controls', 'enterprise-25', ['PRIV-001', 'PRIV-002'], true],
  ['migration-execution', 'Resumable backfill, verification, abort, compatibility, and cleanup procedures', 'evolution-27', ['EVO-003'], true],
  ['service-ownership', 'Named owners, SLOs, runbooks, escalation, typed repair commands, and game days', 'release-30', ['OPS-001', 'OPS-002'], true],
].map(([id, title, ownerSlice, requirementIds, launchBlocking]) => ({
  id,
  title,
  ownerSlice,
  requirementIds,
  launchBlocking,
  status: 'specified-not-implemented',
}));
const existingGapIds = new Set(readiness.gaps.map(item => item.id));
for (const gap of newGaps) if (!existingGapIds.has(gap.id)) readiness.gaps.push(gap);
readiness.generatedAt = '2026-07-17';

writeJson('docs/_meta/build-plan.json', plan);
if (implementationPlanPath) writeJson(implementationPlanPath, plan);
writeJson('docs/_meta/requirements.json', requirementRegistry);
writeJson('docs/_meta/agent-routing.json', routing);
writeJson('docs/_meta/product-readiness-gaps.json', readiness);

appendSection(
  'docs/README.md',
  '## Implementation assurance contracts',
  `## Implementation assurance contracts

- [Testing and validation strategy](06-delivery/testing-and-validation-strategy.md)
- [Developer environment and bootstrap](06-delivery/developer-environment-and-bootstrap.md)
- [Model evaluation and change management](03-ai/model-evaluation-and-change-management.md)
- [Privacy and compliance operations](05-security/privacy-and-compliance-operations.md)
- [Data migration and backfill runbook](06-delivery/data-migration-and-backfill-runbook.md)
- [Service ownership and runbooks](06-delivery/service-ownership-and-runbooks.md)`,
);
appendSection(
  'docs/START-HERE.md',
  '## Implementation assurance',
  `## Implementation assurance

Before a slice can complete, its implementation must include the applicable test layers, reproducible local setup, model and retrieval evaluations, migration evidence, privacy operations, service ownership, observability, rollback, and runbooks. These are routed requirements, not optional launch follow-ups.`,
);
appendSection(
  'docs/00-foundation/requirements.md',
  '## Assurance requirement groups',
  `## Assurance requirement groups

CORE includes reproducible development and layered testing. EVAL governs model and retrieval changes. PRIV governs privacy operations. EVO governs compatible migrations and backfills. OPS governs service ownership and runbooks. These groups are routed through the same machine requirement registry and build-plan ownership rules as product features.`,
);
appendSection(
  'ROADMAP.md',
  '## Implementation assurance sequence',
  `## Implementation assurance sequence

Testing and reproducible bootstrap begin in foundation-01. Model evaluation and privacy operations mature through conformance-26 and enterprise-25. Migration execution is proven in evolution-27. Service ownership, runbooks, escalation, and operational commands are release-30 requirements. They are not deferred until after launch.`,
);

const markdownFiles = [];
const walk = directory => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const absolute = path.join(directory, entry.name);
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
    return {
      path: file,
      bytes: content.length,
      sha256: crypto.createHash('sha256').update(content).digest('hex'),
    };
  }),
});

console.log(`Bound ${newRequirements.length} new requirements and ${newGaps.length} new readiness gaps into the documentation control plane.`);
