#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8'));
const fail = (message) => {
  console.error(message);
  process.exitCode = 1;
};
const readText = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const normalizePath = (value) => value.replace(/\\/g, '/');
const ignoredDirectories = new Set(['.git', 'node_modules']);
const markdownFiles = [];

const walkMarkdown = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) walkMarkdown(absolute);
    if (entry.isFile() && entry.name.endsWith('.md')) markdownFiles.push(absolute);
  }
};

const requiredFiles = [
  'README.md',
  'AGENTS.md',
  'PRODUCT.md',
  'ARCHITECTURE.md',
  'ROADMAP.md',
  'SECURITY.md',
  'docs/START-HERE.md',
  'docs/README.md',
  'docs/06-delivery/documentation-governance-and-drift-control.md',
  'docs/_meta/agent-routing.json',
  'docs/_meta/implementation-build-plan.json',
  'docs/_meta/requirements.json',
  'docs/_meta/tooling-catalog.json',
  'scripts/agent-status.mjs',
  'scripts/agent-context.mjs',
  'scripts/validate-doc-links.mjs',
  'package.json',
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) fail(`Missing required file: ${file}`);
}

const plan = readJson('docs/_meta/implementation-build-plan.json');
const routing = readJson('docs/_meta/agent-routing.json');
const registry = readJson('docs/_meta/requirements.json');
const tooling = readJson('docs/_meta/tooling-catalog.json');
const slices = Array.isArray(plan.slices) ? plan.slices : [];
const requirements = Array.isArray(registry.requirements) ? registry.requirements : [];
const toolingDecisions = Array.isArray(tooling.decisions) ? tooling.decisions : [];
const sliceIds = new Set();
const requirementIds = new Set();
const toolingDecisionIds = new Set();
const sliceOrders = new Set();
const allowedToolingDecisions = new Set(['adopt', 'evaluate', 'isolate', 'reference', 'defer', 'reject']);

const isExternalLink = (href) =>
  /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//') || href.startsWith('#');

const stripOptionalTitle = (href) => {
  const trimmed = href.trim();
  if (trimmed.startsWith('<')) {
    const end = trimmed.indexOf('>');
    return end === -1 ? trimmed : trimmed.slice(1, end);
  }

  const titleIndex = trimmed.search(/\s+["'(]/);
  return titleIndex === -1 ? trimmed : trimmed.slice(0, titleIndex);
};

const collectLocalMarkdownLinks = (relative) => {
  const absolute = path.join(root, relative);
  const links = new Set();
  const lines = fs.readFileSync(absolute, 'utf8').split(/\r?\n/);
  let inFence = false;

  const addHref = (rawHref) => {
    const cleanHref = stripOptionalTitle(rawHref);
    if (!cleanHref || isExternalLink(cleanHref)) return;
    const withoutAnchor = cleanHref.split('#')[0];
    if (!withoutAnchor) return;
    const target = path.resolve(path.dirname(absolute), decodeURI(withoutAnchor));
    links.add(normalizePath(path.relative(root, target)));
  };

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    for (const match of line.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) addHref(match[1]);

    const referenceMatch = line.match(/^\s*\[[^\]]+\]:\s+(\S+)/);
    if (referenceMatch) addHref(referenceMatch[1]);
  }

  return links;
};

const collectRequirementReferences = (relative) => {
  const text = readText(relative);
  const ids = new Set();

  for (const match of text.matchAll(/`([A-Z0-9]+-\d{3})`/g)) ids.add(match[1]);

  for (const match of text.matchAll(/`([A-Z0-9]+)-(\d{3})`\s+through\s+`\1-(\d{3})`/g)) {
    const [, prefix, start, end] = match;
    const startNumber = Number(start);
    const endNumber = Number(end);

    if (endNumber < startNumber) {
      fail(`${relative} has descending requirement range ${prefix}-${start} through ${prefix}-${end}`);
      continue;
    }

    for (let number = startNumber; number <= endNumber; number += 1) {
      ids.add(`${prefix}-${String(number).padStart(3, '0')}`);
    }
  }

  return ids;
};

const collectLocalMarkdownLinkTargetsFromLine = (relative, line) => {
  const absolute = path.join(root, relative);
  const links = [];

  for (const match of line.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const cleanHref = stripOptionalTitle(match[1]);
    if (!cleanHref || isExternalLink(cleanHref)) continue;
    const withoutAnchor = cleanHref.split('#')[0];
    if (!withoutAnchor) continue;
    const target = path.resolve(path.dirname(absolute), decodeURI(withoutAnchor));
    links.push(normalizePath(path.relative(root, target)));
  }

  return links;
};

const validateStartHereReadOrder = () => {
  const relative = 'docs/START-HERE.md';
  const lines = readText(relative).split(/\r?\n/);
  const seenTargets = new Map();
  let expected = 1;

  for (const [index, line] of lines.entries()) {
    const match = line.match(/^(\d+)\.\s+/);
    if (!match) continue;

    const actual = Number(match[1]);
    if (actual !== expected) fail(`${relative}:${index + 1} expected read-order item ${expected} but found ${actual}`);
    expected += 1;

    const targets = collectLocalMarkdownLinkTargetsFromLine(relative, line);
    if (targets.length !== 1) {
      fail(`${relative}:${index + 1} read-order item must contain exactly one local link`);
      continue;
    }

    const [target] = targets;
    const firstLine = seenTargets.get(target);
    if (firstLine) fail(`${relative}:${index + 1} duplicates read-order target ${target} first listed on line ${firstLine}`);
    seenTargets.set(target, index + 1);
  }

  return expected - 1;
};

const validateDocsReadmeDirectoryMap = () => {
  const relative = 'docs/README.md';
  const lines = readText(relative).split(/\r?\n/);
  const sectionStart = lines.findIndex((line) => line.trim() === '## Directory map');
  if (sectionStart === -1) {
    fail(`${relative} is missing ## Directory map`);
    return 0;
  }

  const sectionEnd = lines.findIndex((line, index) => index > sectionStart && /^##\s+/.test(line));
  const sectionLines = lines.slice(sectionStart + 1, sectionEnd === -1 ? lines.length : sectionEnd);
  const directoryRows = new Map();

  for (const [offset, line] of sectionLines.entries()) {
    const lineNumber = sectionStart + offset + 2;
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^\|\s*-+/.test(trimmed)) continue;
    if (/^\|\s*Directory\s*\|/.test(trimmed)) continue;
    if (!trimmed.startsWith('|')) continue;

    const match = trimmed.match(/^\|\s*`([^`]+)`\s*\|\s*([^|]*?)\s*\|$/);
    if (!match) {
      fail(`${relative}:${lineNumber} directory map row must use | \`directory\` | purpose | format`);
      continue;
    }

    const [, directory, rawPurpose] = match;
    const purpose = rawPurpose.trim();
    if (!directory || directory.includes('/') || directory.includes('\\') || directory.includes('..')) {
      fail(`${relative}:${lineNumber} directory map entry must name one first-level docs directory`);
    }
    if (purpose.length < 12 || /^(tbd|todo|n\/a|none|placeholder)$/i.test(purpose)) {
      fail(`${relative}:${lineNumber} directory map entry ${directory} needs a concrete purpose`);
    }

    const firstLine = directoryRows.get(directory);
    if (firstLine) {
      fail(`${relative}:${lineNumber} duplicates directory map entry ${directory} first listed on line ${firstLine.line}`);
    } else {
      directoryRows.set(directory, { line: lineNumber, purpose });
    }
  }

  const actualDirectories = fs.readdirSync(path.join(root, 'docs'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const actualDirectorySet = new Set(actualDirectories);

  for (const [directory, { line }] of directoryRows) {
    if (!actualDirectorySet.has(directory)) fail(`${relative}:${line} maps missing docs directory ${directory}`);
  }

  for (const directory of actualDirectories) {
    if (!directoryRows.has(directory)) fail(`${relative} directory map omits docs directory ${directory}`);
  }

  return directoryRows.size;
};

const humanizePlanState = (value) => {
  if (value === 'implementation-ready-specification') return 'implementation-ready specification';
  return String(value ?? '').replace(/-/g, ' ');
};

const validateImplementationStatusLedgers = () => {
  const statusLedgers = [
    {
      file: 'PROJECT_STATUS.md',
      maturityLabel: '**Maturity:**',
      runtimeLabel: '**Runtime:**',
      nextSliceLabel: '**Next implementation slice:**',
    },
    {
      file: 'docs/06-delivery/implementation-status.md',
      maturityLabel: '**Maturity:**',
      runtimeLabel: '**Runtime:**',
      nextSliceLabel: '**Next slice:**',
    },
  ];
  const nextSlice = slices.find((slice) => slice.id === plan.nextSlice);
  if (!nextSlice) fail(`Build plan nextSlice references unknown slice ${plan.nextSlice}`);

  const repositoryState = humanizePlanState(plan.repositoryState);
  const runtimeState = humanizePlanState(plan.runtimeState);

  for (const ledger of statusLedgers) {
    const text = readText(ledger.file);
    if (!text.includes(`${ledger.maturityLabel} ${repositoryState}`)) {
      fail(`${ledger.file} maturity does not match build-plan repositoryState ${plan.repositoryState}`);
    }
    if (!text.includes(`${ledger.runtimeLabel} ${runtimeState}`)) {
      fail(`${ledger.file} runtime state does not match build-plan runtimeState ${plan.runtimeState}`);
    }
    if (!text.includes(`${ledger.nextSliceLabel} \`${plan.nextSlice}\``)) {
      fail(`${ledger.file} next slice does not match build-plan nextSlice ${plan.nextSlice}`);
    }
    if (nextSlice?.title && !text.includes(nextSlice.title)) {
      fail(`${ledger.file} does not include next slice title ${nextSlice.title}`);
    }
  }

  return statusLedgers.length;
};

for (const slice of slices) {
  if (!slice.id || sliceIds.has(slice.id)) fail(`Invalid or duplicate slice ID: ${slice.id}`);
  sliceIds.add(slice.id);
  if (!Number.isInteger(slice.order) || slice.order < 1 || sliceOrders.has(slice.order)) fail(`${slice.id} has invalid or duplicate order ${slice.order}`);
  sliceOrders.add(slice.order);
  if (!slice.title) fail(`${slice.id} is missing title`);
  if (!slice.status) fail(`${slice.id} is missing status`);
  if (!slice.deliverable) fail(`${slice.id} is missing deliverable`);
  for (const dependency of slice.dependencies ?? []) {
    if (!slices.some((candidate) => candidate.id === dependency)) fail(`${slice.id} has unknown dependency ${dependency}`);
  }
  for (const document of slice.documents ?? []) {
    if (!fs.existsSync(path.join(root, document))) fail(`${slice.id} routes missing document ${document}`);
  }
}
for (let order = 1; order <= slices.length; order += 1) {
  if (!sliceOrders.has(order)) fail(`Missing slice order ${order}`);
}

for (const requirement of requirements) {
  if (!requirement.id || !/^[A-Z0-9]+-\d{3}$/.test(requirement.id) || requirementIds.has(requirement.id)) {
    fail(`Invalid or duplicate requirement ID: ${requirement.id}`);
  }
  requirementIds.add(requirement.id);
  if (!requirement.title) fail(`${requirement.id} is missing title`);
  if (!requirement.statement) fail(`${requirement.id} is missing statement`);
  if (!sliceIds.has(requirement.ownerSlice)) fail(`${requirement.id} has unknown owner slice ${requirement.ownerSlice}`);
  const prefix = requirement.id.split('-')[0];
  const routedDomains = routing.requirementPrefixes?.[prefix];
  if (!Array.isArray(routedDomains) || routedDomains.length === 0) fail(`${requirement.id} has unrouted requirement prefix ${prefix}`);
  for (const domain of routedDomains ?? []) {
    if (!Array.isArray(routing.domains?.[domain])) fail(`${requirement.id} routes to unknown domain ${domain}`);
  }
}

for (const decision of toolingDecisions) {
  if (!decision.id || toolingDecisionIds.has(decision.id)) fail(`Invalid or duplicate tooling decision ID: ${decision.id}`);
  toolingDecisionIds.add(decision.id);
  if (!decision.category) fail(`${decision.id} is missing category`);
  if (!decision.tool) fail(`${decision.id} is missing tool`);
  if (!decision.decision) fail(`${decision.id} is missing decision`);
  if (!allowedToolingDecisions.has(decision.decision)) fail(`${decision.id} has unsupported decision ${decision.decision}`);
  if (!sliceIds.has(decision.ownerSlice)) fail(`${decision.id} has unknown owner slice ${decision.ownerSlice}`);
  if (!decision.rationale) fail(`${decision.id} is missing rationale`);
  if (!decision.boundary) fail(`${decision.id} is missing boundary`);
}

for (const file of [...(routing.entry ?? []), ...(routing.alwaysRead ?? [])]) {
  if (!fs.existsSync(path.join(root, file))) fail(`Agent routing references missing file ${file}`);
}
for (const documents of Object.values(routing.domains ?? {})) {
  for (const file of documents) {
    if (!fs.existsSync(path.join(root, file))) fail(`Agent routing references missing file ${file}`);
  }
}

// Cycle detection.
const visiting = new Set();
const visited = new Set();
const byId = new Map(slices.map((slice) => [slice.id, slice]));
const visit = (id) => {
  if (visiting.has(id)) return fail(`Dependency cycle includes ${id}`);
  if (visited.has(id)) return;
  visiting.add(id);
  for (const dependency of byId.get(id)?.dependencies ?? []) visit(dependency);
  visiting.delete(id);
  visited.add(id);
};
for (const id of sliceIds) visit(id);

walkMarkdown(root);
const canonicalDocs = markdownFiles
  .map((file) => normalizePath(path.relative(root, file)))
  .filter((file) => file.startsWith('docs/') && !['docs/README.md', 'docs/START-HERE.md'].includes(file));
const routedDocs = new Set(
  [
    ...(routing.entry ?? []),
    ...(routing.alwaysRead ?? []),
    ...Object.values(routing.domains ?? {}).flat(),
  ].map(normalizePath),
);
const docsReadmeLinks = collectLocalMarkdownLinks('docs/README.md');
const startHereLinks = collectLocalMarkdownLinks('docs/START-HERE.md');
const startHereReadOrderCount = validateStartHereReadOrder();
const docsReadmeDirectoryMapCount = validateDocsReadmeDirectoryMap();
const implementationStatusLedgerCount = validateImplementationStatusLedgers();

for (const document of canonicalDocs) {
  if (!docsReadmeLinks.has(document)) fail(`docs/README.md does not index canonical document ${document}`);
  if (!startHereLinks.has(document)) fail(`docs/START-HERE.md does not index canonical document ${document}`);
  if (!routedDocs.has(document)) fail(`Agent routing does not route canonical document ${document}`);
}

const traceabilityRequirementIds = collectRequirementReferences('docs/07-reference/requirements-traceability-matrix.md');
for (const requirement of requirements) {
  if (!traceabilityRequirementIds.has(requirement.id)) {
    fail(`Requirements traceability matrix does not cover ${requirement.id}`);
  }
}
for (const traceabilityId of traceabilityRequirementIds) {
  if (!requirementIds.has(traceabilityId)) {
    fail(`Requirements traceability matrix references unknown requirement ${traceabilityId}`);
  }
}

for (const file of markdownFiles) {
  const relative = path.relative(root, file);
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/`([a-z][a-z0-9-]*-\d{2})`/g)) {
    const sliceId = match[1];
    if (!sliceIds.has(sliceId)) fail(`${relative} references unknown implementation slice ${sliceId}`);
  }
}

const projectStatus = readText('PROJECT_STATUS.md');
const requirementCountMatch = projectStatus.match(/Canonical requirements \| (\d+) requirements/);
if (!requirementCountMatch) {
  fail('PROJECT_STATUS.md is missing canonical requirement count');
} else if (Number(requirementCountMatch[1]) !== requirements.length) {
  fail(`PROJECT_STATUS.md requirement count ${requirementCountMatch[1]} does not match registry count ${requirements.length}`);
}

const sliceCountMatch = projectStatus.match(/Implementation plan \| (\d+) dependency-controlled slices/);
if (!sliceCountMatch) {
  fail('PROJECT_STATUS.md is missing implementation slice count');
} else if (Number(sliceCountMatch[1]) !== slices.length) {
  fail(`PROJECT_STATUS.md slice count ${sliceCountMatch[1]} does not match build-plan count ${slices.length}`);
}

if (process.exitCode) process.exit(process.exitCode);
console.log(
  `Validated ${requiredFiles.length} entry files, ${slices.length} slices, ${requirements.length} requirements, ${toolingDecisions.length} tooling decisions, ${docsReadmeDirectoryMapCount} directory-map entries, ${implementationStatusLedgerCount} status ledgers, ${canonicalDocs.length} indexed docs, ${traceabilityRequirementIds.size} traceability IDs, and ${startHereReadOrderCount} read-order entries.`,
);
