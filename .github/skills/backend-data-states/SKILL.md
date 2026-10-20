---
name: backend-data-states
description: 'Use when wiring Angular API data, loading states, empty states, retry behavior, error feedback, or async form submission.'
argument-hint: 'Name the API-backed section or interaction'
---

# Backend Data States

## Procedure

1. Locate the API service, response interface, consuming component, and template.
2. Model loading, success, empty, and error states explicitly.
3. Keep the existing data contract and expose actionable, accessible feedback.
4. Reuse the shared loader instead of duplicating spinners.
5. Ensure subscriptions handle errors and do not leave stale loading flags.
6. Validate with focused unit tests or an Angular build.

## Constraints

- Never hide API failures behind an empty success state.
- Never use an unbounded retry loop.
- Keep loading indicators announced with `aria-live` or an equivalent accessible label.
