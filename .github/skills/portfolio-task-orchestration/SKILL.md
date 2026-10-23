---
name: portfolio-task-orchestration
description: 'Use when planning or coordinating multi-step portfolio work across Angular components, services, styles, tests, and documentation.'
argument-hint: 'Describe the portfolio change to coordinate'
---

# Portfolio Task Orchestration

## Procedure

1. Map the affected route, component tree, services, interfaces, styles, and tests.
2. Split work by independent deliverables: data contract, component behavior, presentation, and validation.
3. Keep each delegated task narrowly scoped with a concrete output and stop condition.
4. Integrate changes in dependency order and preserve unrelated worktree changes.
5. Verify behavior with targeted tests, then run a production build for cross-file changes.
6. Report changed files, validation, and any backend assumptions.

## Constraints

- Do not create duplicate helpers when an existing shared component or service is suitable.
- Do not change API contracts without checking every consumer.
- Do not mark a task complete without a persistent validation result.
