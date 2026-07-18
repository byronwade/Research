# GitHub integration

GitHub is both a source system and a governed contribution system.

## Connection model

Use a GitHub App with selected-repository installation, installation-scoped tokens, granular permissions, and webhooks. Reading and contributing are separate capabilities.

## Source synchronization

A repository source version is pinned to a commit SHA. Synchronization records repository metadata, branches, tags, commits, trees, files, pull requests, issues, releases, discussions, permissions, and webhook cursor state.

## Code intelligence

Use Git, Tree-sitter, ripgrep, and ast-grep to build:

- repository tree indexes;
- symbols and definitions;
- references and imports;
- dependency relationships;
- documentation relationships;
- test and configuration maps;
- and commit-pinned line locators.

## Repository editing

```text
User request
→ Repository Edit Contract
→ freeze repository and base commit
→ retrieve relevant code and documentation
→ produce structured patch
→ apply in isolated Sandbox
→ run format, type, test, build, and security checks
→ show file and line diff
→ obtain approval
→ create branch and commit
→ open draft pull request
```

The agent cannot directly write to the default branch, merge a pull request, change repository permissions, bypass required checks, or silently rebase conflicting upstream changes.

GitHub contribution proposals also pass AbusePolicy and repository-owner policy before branch creation, issue/comment creation, or draft pull-request creation. Research must prevent AI pull-request spam, duplicated proposals, low-signal issue noise, and rate-limit evasion through repository-scoped budgets, proposal cooldowns, validation gates, review ActionCards, and draft PR defaults.

## Edit contract

The contract contains objective, repository, base commit, allowed paths, prohibited paths, expected behavior, required checks, dependency policy, AbuseDecision, documentation requirements, branch strategy, approval rules, and completion criteria.

## Citation behavior

Repository claims cite repository, commit SHA, path, and line range. Mutable default-branch links are navigation conveniences, not evidence authority.
