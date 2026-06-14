# Build A Single-Page Academic Homepage

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This document follows `.agent/PLANS.md` from the repository root.

## Purpose / Big Picture

This repository should become a polished, GitHub Pages-ready academic homepage for YE Yilin. After this change, a visitor can land on one page, understand the researcher profile quickly, review recent highlights and experience, and reach contact links or the CV without navigating a multi-page template site.

## Progress

- [x] (2026-04-17 13:18Z) Confirmed the repository is effectively empty and suitable for a static site rebuild.
- [x] (2026-04-17 13:28Z) Verified `ylyeivonnnne/personal-site-archive` as the primary fact source and extracted the archived homepage content plus `assets/files/resume.pdf`.
- [x] (2026-04-17 13:36Z) Confirmed the archived avatar asset at `assets/img/avatar.jpeg` and the archived favicon files are available for migration.
- [x] (2026-04-17 13:57Z) Added the single-page static site structure, GitHub Pages workflow, validation script, and local assets.
- [x] (2026-04-17 14:08Z) Ran `node scripts/validate-site.mjs` and JavaScript syntax checks for the site data and runtime script.
- [x] (2026-04-17 14:18Z) Verified the rendered desktop and mobile layouts with Playwright screenshots against the local `python3 -m http.server 4173` preview.
- [x] (2026-04-17 14:20Z) Verified mobile menu expansion and anchor navigation to `#experience` with Playwright against the running local preview.

## Surprises & Discoveries

- Observation: the sibling local repository `../personalwebsite.github.io` contains another person's site content and must not be used as a factual source.
  Evidence: names, affiliations, and links in that repository refer to Yuxiang (Kevin) Zheng rather than YE Yilin.
- Observation: the archived Hugo site contains sparse structured content, but the archived `resume.pdf` provides the concrete project and award details needed for a fuller one-page academic homepage.
  Evidence: `content/page/*` in `personal-site-archive` covers about, education, news, awards, and links, while the resume includes four project entries and specific honors.
- Observation: no verified publications list was found in the archived source.
  Evidence: the archive tree contains no publications content beyond generic template posts, so the one-page site omits a publications section.
- Observation: Playwright browser automation was available through the bundled runtime, but the browser binary had to be installed separately and the screenshot run needed to execute outside the sandbox.
  Evidence: local launch initially failed until Chromium was installed and the screenshot command was rerun with elevated permissions.

## Decision Log

- Decision: build the new site as plain static files instead of reintroducing Hugo or a JavaScript framework.
  Rationale: the target repository is empty, the desired output is a single page, and GitHub Pages works cleanly with root-level static assets.
  Date/Author: 2026-04-17 / Codex
- Decision: use `personal-site-archive` and its `resume.pdf` as the only factual content sources.
  Rationale: the user explicitly asked for that priority, and the local sibling site was verified to belong to someone else.
  Date/Author: 2026-04-17 / Codex
- Decision: omit a publications section.
  Rationale: no verified publication list was found in the archive, and adding one would require fabrication or an unverified source.
  Date/Author: 2026-04-17 / Codex
- Decision: show email, GitHub, LinkedIn, and CV publicly, but not phone numbers.
  Rationale: the plan requested a conservative public contact surface, while phone numbers only appear in the resume and are not necessary for the homepage CTA.
  Date/Author: 2026-04-17 / Codex

## Outcomes & Retrospective

Completed outcome: the repository now serves a root-level one-page academic homepage with semantic sections, structured content in `assets/site-data.js`, local archived assets, a GitHub Pages deployment workflow, and a validator script.

Validation outcome:

- `node scripts/validate-site.mjs` passed.
- `node --check assets/main.js` passed.
- `node --check assets/site-data.js` passed.
- A local preview via `python3 -m http.server 4173` was exercised.
- Desktop and mobile screenshots confirmed the hero, highlights, and responsive navigation render correctly.
- Mobile menu expansion and anchor navigation to `#experience` were verified in Playwright.

## Context and Orientation

The starting repository contains only `README.md`, `AGENTS.md`, and `.agent/PLANS.md`. The new site is built directly from root-level static files:

- `index.html` is the only page entry point.
- `assets/site-data.js` stores all editable structured content.
- `assets/main.js` renders repeated content blocks and binds navigation behavior.
- `assets/styles.css` holds the full visual system and responsive layout.
- `scripts/validate-site.mjs` verifies required structure and assets.

External factual inputs come from the archived repository:

- `https://github.com/ylyeivonnnne/personal-site-archive`
- Archived avatar: `assets/img/avatar.jpeg`
- Archived CV: `assets/files/resume.pdf`
- Archived about/news/education/awards/links pages under `content/page/*`

## Plan of Work

Create a minimal static site shell in `index.html` with anchor-based sections for about, highlights, experience, education, awards, and contact. Store all personal facts in `assets/site-data.js`, including the hero identity, research focus tags, highlight timeline, project experience, education, awards, and contact links.

Implement the visual system in `assets/styles.css` with a restrained editorial look: serif display headings, sans-serif body copy, a neutral background, and one muted blue accent derived from the avatar palette. The hero should use a poster-like two-column composition on desktop and collapse vertically on mobile.

Use `assets/main.js` to populate repeated lists, manage the mobile menu, set active navigation states on scroll, and apply reveal transitions that gracefully disable for reduced-motion users.

Copy the archived avatar, CV, and favicon into this repository so the homepage does not depend on remote assets. Add `robots.txt`, `sitemap.xml`, `404.html`, `.nojekyll`, and `.github/workflows/deploy.yml` so the repository is GitHub Pages-ready.

## Concrete Steps

Work from `/Users/ivonneye/Documents/30_Admin/YEYILIN/ylyeivonnnne.github.io`.

Preview locally:

    python3 -m http.server 4173

Validate the site:

    node scripts/validate-site.mjs

Expected validation transcript:

    Validation passed for static site structure.

## Validation and Acceptance

Acceptance means:

- opening `http://127.0.0.1:4173` shows a complete single-page academic homepage
- the header anchors scroll to the correct sections
- the hero shows the archived portrait and four working CTA links
- the highlights, experience, education, awards, and contact sections all render real archived content
- `node scripts/validate-site.mjs` passes
- the GitHub Actions workflow clearly stages the root static files for Pages deployment

## Idempotence and Recovery

All site files are additive and can be overwritten safely by rerunning the same patch or asset download commands. If an asset download fails, rerun the single `curl -fL ... -o ...` command for that asset. No destructive migration is involved.

## Artifacts and Notes

Key factual content used in the rebuild:

    About: MPhil in Computer Science and Engineering at HKUST, supervised by Prof. Huamin Qu.
    Research interests: data visualization, HCI, and AI.
    Education: HKUST BSc in Data Science and Technology, minor in Business, First Class Honors.
    Experience: VR collaboration, medical vision-language FYP, knowledge discovery over database, trustworthy ML UROP.

## Interfaces and Dependencies

The site exposes one public HTML page and one structured content module:

    export const siteData = {
      profile: { ... },
      heroLinks: [ ... ],
      researchFocus: [ ... ],
      highlights: [ ... ],
      experienceItems: [ ... ],
      educationItems: [ ... ],
      awardItems: [ ... ],
      contactLinks: [ ... ]
    };

`assets/main.js` must import `siteData` and render these blocks into the static section containers in `index.html`.

Revision note (2026-04-17): updated the plan after implementation to record completed validation steps, Playwright verification details, and the final shipped outcome.
