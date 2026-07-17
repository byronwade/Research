#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const plan = JSON.parse(fs.readFileSync(path.join(root, 'docs/_meta/implementation-build-plan.json'), 'utf8'));
const routing = JSON.parse(fs.readFileSync(path.join(root, 'docs/_meta/agent-routing.json'), 'utf8'));
const requirementsDoc = JSON.parse(fs.readFileSync(path.join(root, 'docs/_meta/requirements.json'), 'utf8'));
const requested = process.argv.includes('--slice') ? process.argv[process.argv.indexOf('--slice') + 1] : null;
const slices = Array.isArray(plan.slices) ? plan.slices : [];
const complete = new Set(slices.filter((slice) => slice.status === 'complete').map((slice) => slice.id));
const eligible = slices
  .filter((slice) => slice.status !== 'complete')
  .filter((slice) => (slice.dependencies ?? []).every((dependency) => complete.has(dependency)))
  .sort((a, b) => a.order - b.order);
const slice = requested ? slices.find((item) => item.id === requested) : eligible[0];

if (!slice) {
  console.error(requested ? `Unknown slice: ${requested}` : 'No eligible slice found.');
  process.exit(1);
}

const requirementList = Array.isArray(requirementsDoc.requirements) ? requirementsDoc.requirements : [];
const requirements = requirementList.filter((requirement) => requirement.ownerSlice === slice.id);
const domains = new Set();
for (const requirement of requirements) {
  const prefix = requirement.id.split('-')[0];
  for (const domain of routing.requirementPrefixes?.[prefix] ?? []) domains.add(domain);
}

const documents = new Set([
  ...(routing.entry ?? []),
  ...(routing.alwaysRead ?? []),
  ...(slice.documents ?? []),
]);
for (const domain of domains) {
  for (const document of routing.domains?.[domain] ?? []) documents.add(document);
}

const missing = [...documents].filter((document) => !fs.existsSync(path.join(root, document)));
if (missing.length) {
  console.error('Missing routed documents:');
  for (const document of missing) console.error(`- ${document}`);
  process.exit(1);
}

console.log(`# ${slice.id} — ${slice.title}`);
console.log('');
console.log(`Status: ${slice.status}`);
console.log(`Dependencies: ${(slice.dependencies ?? []).join(', ') || 'none'}`);
console.log(`Execution eligibility: ${(slice.dependencies ?? []).every((dependency) => complete.has(dependency)) ? 'eligible' : 'context-only; dependencies incomplete'}`);
console.log('');
console.log('## Deliverable');
console.log(slice.deliverable);
console.log('');
console.log('## Primary requirements');
if (!requirements.length) console.log('- No requirement registry entries currently assigned.');
for (const requirement of requirements) console.log(`- ${requirement.id}: ${requirement.statement}`);
console.log('');
console.log('## Required reading');
for (const document of documents) console.log(`- ${document}`);
