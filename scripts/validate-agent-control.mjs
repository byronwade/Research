#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8'));
const fail = (message) => {
  console.error(message);
  process.exitCode = 1;
};

const requiredFiles = [
  'README.md',
  'AGENTS.md',
  'PRODUCT.md',
  'ARCHITECTURE.md',
  'ROADMAP.md',
  'docs/START-HERE.md',
  'docs/README.md',
  'docs/_meta/agent-routing.json',
  'docs/_meta/implementation-build-plan.json',
  'docs/_meta/requirements.json',
  'scripts/agent-status.mjs',
  'scripts/agent-context.mjs',
  'package.json',
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) fail(`Missing required file: ${file}`);
}

const plan = readJson('docs/_meta/implementation-build-plan.json');
const routing = readJson('docs/_meta/agent-routing.json');
const registry = readJson('docs/_meta/requirements.json');
const slices = Array.isArray(plan.slices) ? plan.slices : [];
const requirements = Array.isArray(registry.requirements) ? registry.requirements : [];
const sliceIds = new Set();
const requirementIds = new Set();

for (const slice of slices) {
  if (!slice.id || sliceIds.has(slice.id)) fail(`Invalid or duplicate slice ID: ${slice.id}`);
  sliceIds.add(slice.id);
  for (const dependency of slice.dependencies ?? []) {
    if (!slices.some((candidate) => candidate.id === dependency)) fail(`${slice.id} has unknown dependency ${dependency}`);
  }
  for (const document of slice.documents ?? []) {
    if (!fs.existsSync(path.join(root, document))) fail(`${slice.id} routes missing document ${document}`);
  }
}

for (const requirement of requirements) {
  if (!requirement.id || requirementIds.has(requirement.id)) fail(`Invalid or duplicate requirement ID: ${requirement.id}`);
  requirementIds.add(requirement.id);
  if (!sliceIds.has(requirement.ownerSlice)) fail(`${requirement.id} has unknown owner slice ${requirement.ownerSlice}`);
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

if (process.exitCode) process.exit(process.exitCode);
console.log(`Validated ${requiredFiles.length} entry files, ${slices.length} slices, and ${requirements.length} requirements.`);
