#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const ignoredDirectories = new Set(['.git', 'node_modules']);
const markdownFiles = [];
const failures = [];

const walk = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(absolute);
    if (entry.isFile() && entry.name.endsWith('.md')) markdownFiles.push(absolute);
  }
};

const isExternal = (href) =>
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

const inspectHref = (file, line, rawHref) => {
  const cleanHref = stripOptionalTitle(rawHref);
  if (!cleanHref || isExternal(cleanHref)) return;

  const withoutAnchor = cleanHref.split('#')[0];
  if (!withoutAnchor) return;

  const decoded = decodeURI(withoutAnchor);
  const target = path.resolve(path.dirname(file), decoded);
  if (!fs.existsSync(target)) {
    failures.push(`${path.relative(root, file)}:${line} -> ${rawHref}`);
  }
};

walk(root);

for (const file of markdownFiles) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);

  let inFence = false;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    for (const match of line.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
      inspectHref(file, index + 1, match[1]);
    }

    const referenceMatch = line.match(/^\s*\[[^\]]+\]:\s+(\S+)/);
    if (referenceMatch) inspectHref(file, index + 1, referenceMatch[1]);
  }
}

if (failures.length > 0) {
  console.error('Broken local Markdown links:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Validated local Markdown links across ${markdownFiles.length} files.`);
