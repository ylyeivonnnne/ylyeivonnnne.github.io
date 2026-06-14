# AGENTS.md

This repository is a personal website.

## Goal

Prioritize clarity, accessibility, performance, maintainability, and clean design.
Prefer simple solutions over clever ones.

## Default expectations

- Mobile-first responsive layout
- Semantic HTML and accessible interactions
- Good typography and clear information hierarchy
- Minimal dependencies
- Strong basic SEO metadata
- Easy future content updates

## Content rules

- Do not invent personal facts, achievements, metrics, or contact details.
- If content is missing, use explicit placeholders such as `YOUR_NAME` and `your.email@example.com`.

## Working rules

- Follow the existing stack and conventions in the repo.
- Make the smallest correct change.
- Do not introduce large libraries unless clearly justified.
- Keep components reusable and files easy to understand.

## Planning rule

For any multi-step, architectural, or ambiguous task, first create or update a plan that follows `.agent/PLANS.md` before making major changes.

Examples:
- choosing or changing the framework
- redesigning navigation or homepage structure
- adding blog/CMS/MDX
- adding analytics, forms, or deployment changes
- large refactors

## Validation

Before finishing, run the relevant project checks if available:

- build
- lint
- typecheck
- tests

If a check cannot be run, state why clearly.

## Done means

- the requested change works
- touched files follow repo conventions
- no obvious mobile/accessibility regressions
- placeholders are clearly marked
- verification was run or the limitation was explained

## ExecPlans

When writing complex features or significant refactors, use an ExecPlan (as described in .agent/PLANS.md) from design to implementation.
