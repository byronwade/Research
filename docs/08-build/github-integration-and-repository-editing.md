# GitHub integration and repository editing

GitHub integration lets Research treat repositories as source material and propose contribution-ready changes. Repository write paths must remain reviewable, tested, and draft-PR based.

See also [`../04-sources/github-integration.md`](../04-sources/github-integration.md).

## Capabilities

The GitHub path supports:

- GitHub App installation;
- repository selection;
- branch and commit capture;
- immutable repository source versions;
- tree, file, symbol, import, and dependency indexes;
- documentation mapping;
- issue and pull-request context where authorized;
- sandboxed edits;
- validation commands;
- draft pull requests.

## Source evidence

Repository citations include:

```text
owner
repository
commit SHA
path
line range
symbol or selector where available
```

Generated summaries of code are derived material and cannot independently corroborate claims about the repository.

## Indexing sequence

1. Capture repository metadata and selected ref.
2. Store commit-pinned source version.
3. Build file and language inventory.
4. Extract symbols with Tree-sitter where supported.
5. Extract imports and dependency graph.
6. Index README, docs, config, tests, and source files.
7. Build retrieval fixtures for known questions.

## Editing sequence

```text
task contract
-> sandbox checkout
-> plan
-> patch
-> validation
-> diff summary
-> user approval
-> branch commit
-> draft pull request
```

The agent does not push to protected branches, merge pull requests, or bypass required checks.

## Validation

Each repository edit records:

- commands run;
- exit codes;
- test output summary;
- files changed;
- generated files;
- risk notes;
- rollback guidance;
- unresolved questions.

If validation cannot run, the draft pull request must say so clearly.

## Security controls

- Repository content is untrusted.
- Hooks and install scripts are disabled unless explicitly allowed in an isolated environment.
- Secrets are never copied into model context.
- Network access is restricted by task.
- Generated patches cannot change GitHub App permissions.
- External writes require explicit approval and idempotency.

## Production gates

GitHub is production-ready only when:

- authorization and installation scope tests pass;
- commit-pinned citations work;
- sandbox isolation is verified;
- validation evidence is captured;
- draft pull requests are created safely;
- webhook replay is idempotent;
- support can diagnose failures without repository secret exposure.
