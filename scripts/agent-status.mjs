#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const planPath = path.join(root, 'docs/_meta/implementation-build-plan.json');

if (!fs.existsSync(planPath)) {
  console.error('Missing docs/_meta/implementation-build-plan.json');
  process.exit(1);
}

const plan = JSON.parse(fs.readFileSync(planPath, 'utf8'));
const slices = Array.isArray(plan.slices) ? plan.slices : [];
const complete = new Set(slices.filter((slice) => slice.status === 'complete').map((slice) => slice.id));
const eligible = slices
  .filter((slice) => slice.status !== 'complete')
  .filter((slice) => (slice.dependencies ?? []).every((dependency) => complete.has(dependency)))
  .sort((a, b) => a.order - b.order);
const next = eligible[0];

console.log('Research implementation status');
console.log('------------------------------');
console.log(`Repository state: ${plan.repositoryState}`);
console.log(`Runtime state: ${plan.runtimeState}`);
console.log(`Completed slices: ${complete.size}/${slices.length}`);

if (!next) {
  console.log('Next slice: none');
  console.log('All slices are complete or the dependency graph is blocked.');
  process.exit(0);
}

console.log(`Next slice: ${next.id} — ${next.title}`);
console.log(`Status: ${next.status}`);
console.log(`Dependencies: ${(next.dependencies ?? []).join(', ') || 'none'}`);
console.log(`Deliverable: ${next.deliverable}`);
