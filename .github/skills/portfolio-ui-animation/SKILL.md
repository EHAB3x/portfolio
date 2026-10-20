---
name: portfolio-ui-animation
description: 'Use when adding or reviewing animations, transitions, motion accessibility, responsive visual states, or polished Angular portfolio UI.'
argument-hint: 'Describe the section or interaction to animate'
---

# Portfolio UI Animation

## Procedure

1. Inspect the target component template and its adjacent SCSS before editing.
2. Prefer CSS keyframes and transitions that reuse existing design tokens.
3. Add motion progressively: section entrance, repeated-item stagger, then interaction feedback.
4. Preserve layout stability and keyboard/focus behavior.
5. Add `prefers-reduced-motion` fallbacks for every new non-essential animation.
6. Run the smallest relevant Angular build or test command after the change.

## Constraints

- Do not add an animation dependency for CSS-only motion.
- Do not animate layout-critical properties when `transform` or `opacity` is sufficient.
- Keep animation names local and descriptive.
