# Build and refine an updated one-page LaTeX CV

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan follows `.agent/PLANS.md` and remains local and uncommitted because the user explicitly requested that the CV not be uploaded to GitHub.

## Purpose / Big Picture

The user will receive an editable one-page LaTeX CV derived from the current PDF and refreshed with newer academic information from the personal website. The one-page layout prioritizes academic relevance, clear hierarchy, and readable type rather than shrinking the earlier two-page layout indiscriminately. No CV source or generated PDF will be committed or pushed.

## Progress

- [x] (2026-09-12) Completed requested CV revisions including Tableau; verified one-page PDF text, render, and warning-free compilation. Website top links checked at desktop and 390px mobile width; mobile menu expands correctly; static validation passed.

- [x] (2026-09-06) Applied all user corrections, synchronized website awards and availability, passed static-site validation, compiled one PDF page without warnings, and verified rendered layout and extracted text.

- [x] (2026-09-06) Re-read the current source and inspected the existing rendered page before the typography revision.
- [x] (2026-09-06) Refined typography and header; made September 2027 PhD availability prominent.
- [x] (2026-09-06) Compiled without layout/font warnings, inspected the single A4 page, and verified required text and preservation of all six link destinations.

- [x] (2026-09-01 00:00 HKT) Located and extracted the current one-page CV at `assets/files/resume.pdf`.
- [x] (2026-09-01 00:00 HKT) Located the newer website data at `assets/site-data.js` and identified publications, projects, education, awards, and profile details added after the old CV.
- [x] (2026-09-01 13:57 HKT) Verified both publication records against the arXiv and IEEE primary pages, including author spelling, venue, year, pages, and stable identifiers.
- [x] (2026-09-01 14:08 HKT) Created `local-cv/yilin_ye_cv.tex` as an editable, dependency-light two-page academic CV.
- [x] (2026-09-01 14:16 HKT) Compiled `local-cv/yilin_ye_cv.pdf`, rendered both pages, and visually confirmed clear typography, balanced pagination, and no clipping or overlap.
- [x] (2026-09-01 14:17 HKT) Confirmed searchable text, nine link annotations, correct PDF metadata, A4 page size, and an uncommitted repository state.
- [x] (2026-09-05) Reopened the completed source and plan after the user requested a one-page revision.
- [x] (2026-09-05) Redesigned the source as a concise one-page academic CV while preserving all education, both publications, five research projects, selected service, awards, and skills.
- [x] (2026-09-05) Compiled and rendered the revised PDF; verified one A4 page, nine link annotations, searchable key content, correct metadata, and no layout warnings.
- [x] (2026-09-05) Responded to alignment and inconsistent-size feedback by rebuilding all dated sections on one shared grid and normalizing body typography.
- [x] (2026-09-05) Recompiled and visually inspected the corrected page; all dates now share one right edge and remain on one line, while body text, institutions, dates, and descriptions use one 9pt size.
- [x] (2026-09-05) Reviewed the original `assets/files/resume.pdf` visually and extracted its content to identify its actual design language.
- [x] (2026-09-05) Rebuilt the one-page CV in the original style: black-and-white Times-like serif typography, centered header, uppercase ruled sections, bold titles and locations, italic roles, right-aligned dates, and square bullets.
- [x] (2026-09-05) Rendered the original-style revision and confirmed that the updated publications and projects integrate cleanly without changing the one-page A4 format.
- [x] (2026-09-06) Incorporated user corrections: separated publication titles, authors, and venues; marked RegulAR as to appear at UIST 2026; moved ETH Zurich to the second education position; and replaced work experience with the two verified teaching-assistant roles from `assets/site-data.js`.
- [x] (2026-09-06) Recompiled and visually verified the corrected publication and teaching layouts on one A4 page, with no clipping or overlap.

## Surprises & Discoveries

- Observation: The existing PDF was created in August 2025 and predates both listed 2026 publications and several newer lab projects.
  Evidence: `pdfinfo assets/files/resume.pdf` reports a 2025-08-26 creation date, while `assets/site-data.js` includes UIST 2026 and PacificVis 2026 entries.
- Observation: The system has a complete local TeX toolchain and bundled Poppler renderer.
  Evidence: `latexmk`, `xelatex`, and the bundled `pdftoppm` are available.
- Observation: Loading the OpenType font by file name produced a visually correct PDF without a reliable Unicode text map; switching to standard Type 1 TeX Gyre Heros under pdfLaTeX restored dependable text extraction.
  Evidence: the first extraction returned no recognized required phrases, while `pypdf` extraction from the final pdfLaTeX output preserved the MPhil, award, project, and publication text with normal word boundaries.
- Observation: The standard `article` class ignores a 9pt document option and silently uses 10pt, which initially kept the compact revision at two pages.
  Evidence: the first compact-build log reported `Unused global option(s): [9pt]` and produced two pages; changing to `extarticle` loaded `size9.clo` and produced one page without overfull boxes.

## Decision Log

- Decision: Retain the one-page serif design with 9.5pt body text and put September 2027 availability below the name.
  Rationale: Improve readability and make the application timeline immediately visible while preserving existing content and layout preferences.
  Date/Author: 2026-09-06 / Codex

- Decision: Treat `assets/site-data.js` as the primary source for current academic content and use the old PDF only for compatible historical details such as skills and prior roles.
  Rationale: The website data is newer and explicitly maintained for the user's current academic profile, while the old PDF predates the 2026 updates.
  Date/Author: 2026-09-01 / Codex
- Decision: Put all deliverables in `local-cv/` and leave them untracked.
  Rationale: This keeps the result easy to find and edit while honoring the instruction not to upload it to GitHub.
  Date/Author: 2026-09-01 / Codex
- Decision: Use a two-page academic-CV structure instead of compressing all refreshed content into the old one-page layout.
  Rationale: Two verified publications and multiple current research projects need readable descriptions; the two-page layout preserves legibility without dropping supported content.
  Date/Author: 2026-09-01 / Codex
- Decision: Compile with pdfLaTeX and TeX Gyre Heros rather than the initially tested XeLaTeX font setup.
  Rationale: The final combination retains the intended clean sans-serif appearance and produces more reliable searchable text for applicant tracking systems.
  Date/Author: 2026-09-01 / Codex
- Decision: For the one-page revision, keep all education and publications, retain five research projects with one outcome-focused line each, and compress non-academic experience, service, awards, and skills.
  Rationale: Publications, education, and research experience are the strongest evidence for PhD applications. Compacting the supporting sections preserves breadth without forcing an unreadably small font.
  Date/Author: 2026-09-05 / Codex
- Decision: Replace the mixed entry macros and footnote-sized metadata with one shared 4.15 cm right-aligned date column and one 9pt body size across every section.
  Rationale: The user's feedback correctly identified uneven baselines and optical size changes. A single grid and type size provide a consistent reading rhythm while color and weight, rather than size, distinguish supporting information.
  Date/Author: 2026-09-05 / Codex
- Decision: Supersede the blue sans-serif redesign with a close recreation of the original CV's visual system.
  Rationale: The user explicitly preferred the prior CV format. The original uses a conservative academic-resume language that suits the content: Times-style serif type, black rules, uppercase headings, bold location pairing, italic secondary lines, and square list markers.
  Date/Author: 2026-09-05 / Codex
- Decision: Format each publication as three separate semantic rows: bold title, author list, and italic venue/status.
  Rationale: The earlier inline citation made the title and authors visually blend together. The separated structure makes authorship and publication status immediately scannable while preserving the original CV's typography.
  Date/Author: 2026-09-06 / Codex
- Decision: Use the exact teaching records already present in `assets/site-data.js` and remove the work-experience section.
  Rationale: The user requested teaching experience instead of work experience, and the current website data provides course codes, titles, role, institution, and dates without requiring invented details.
  Date/Author: 2026-09-06 / Codex

## Outcomes & Retrospective

September 12 revision: the one-page CV includes five papers with three clearly under review, inline undergraduate honors, verified CGAs, trailing publication links, three expanded projects, course lecturer links, four years of Dean's List, and updated tools/XR skills. Hidden entries remain commented in LaTeX. The website profile links now appear in the top navigation with responsive mobile placement. No publication or git push was performed.

Latest correction supersedes the header placement: September 2027 now appears only in Profile. LandSAR page numbers and the education supervisor line are removed, both activities end May 2025, and First Class Honors appears in CV and website awards. Website source also has the corrected September 2027 availability. Local validation passed; no deployment was performed.

The September 2027 revision is complete: a clearer header, 9.5pt body text, consistent spacing, and clean award wrapping fit on one A4 page. Compilation reports no font or box warnings; visual review shows no clipping or overlap; searchable text and all six original link destinations are preserved.

The refreshed CV remains a single A4 page in the same visual language as the user's original CV. The final revision separates publication titles, authors, and venue/status; labels RegulAR as to appear at UIST 2026; orders education as MPhil, ETH Zurich, then BSc; removes work experience; and adds the two verified HKUST Data Visualization teaching-assistant roles. The rendered page has no clipping or overlap, and the publication hierarchy and teaching entries are visually distinct. The website files with pre-existing local changes were not edited, and no commit or push was performed.

## Context and Orientation

The current CV is the one-page PDF `assets/files/resume.pdf`. It contains profile, education, projects, work experience, activities, awards, and skills as of August 2025. The file `assets/site-data.js` drives the current personal website and contains newer information through August 2026, including two conference publications, an MPhil program, updated project dates, and current academic links. The new source and generated PDF will live in `local-cv/`, which is intentionally not part of the published site.

## Plan of Work

First, verify the title, author list, venue, year, and stable link for each publication using the DOI or arXiv primary record referenced in the website data. Then write a self-contained pdfLaTeX document with clearly separated sections for education, publications, research and project experience, selected earlier experience, awards, and technical skills. Preserve only personal facts supported by the current PDF or website data. Compile with `latexmk -pdf`, render each PDF page to PNG with Poppler, inspect the images, and adjust spacing or page breaks until there are no visible layout defects.

## Concrete Steps

Work from `/Users/ivonneye/Documents/30_Admin/YEYILIN/ylyeivonnnne.github.io`.

Create and compile the source with:

    latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=local-cv local-cv/yilin_ye_cv.tex

Render the result with:

    pdftoppm -png -r 150 local-cv/yilin_ye_cv.pdf local-cv/preview/yilin_ye_cv

Inspect all rendered pages and run a text extraction check using the bundled Python environment and `pdfplumber`.

## Validation and Acceptance

Acceptance requires a successful pdfLaTeX compilation with no fatal errors, a PDF whose extracted text includes both 2026 publications and the current MPhil details, and visual inspection of every rendered page showing no clipping, overlap, broken glyphs, or awkward orphaned headings. `git status --short` must show pre-existing website changes untouched and the new `local-cv/` directory as untracked; no commit or push is performed.

## Idempotence and Recovery

Re-running `latexmk` and the render command is safe. Generated auxiliary TeX files may be deleted with `latexmk -C -outdir=local-cv local-cv/yilin_ye_cv.tex` if a clean rebuild is needed, but the `.tex` source must be preserved. The existing PDF and website files are read-only sources for this task and will not be overwritten.

## Artifacts and Notes

The final source will be `local-cv/yilin_ye_cv.tex` and the final preview PDF will be `local-cv/yilin_ye_cv.pdf`. Rendered PNG files are QA intermediates and are not final deliverables.

## Interfaces and Dependencies

The source targets pdfLaTeX and uses standard TeX Live packages already present on the machine. Hyperlinks are handled by `hyperref`; typography and layout use standard font, geometry, list, tabular, and section-formatting packages. The final PDF is generated locally with `latexmk` and visually verified with Poppler.

Plan revision note (2026-09-06): Completed and visually verified the corrected publication hierarchy and status, education order, work-experience removal, and source-backed teaching section.

Plan revision note (2026-09-06): Refine the existing one-page serif layout, split contact details into readable lines, slightly enlarge body text, and put the user-confirmed September 2027 PhD start date directly below the name. Preserve all existing academic content. Recompile into /tmp/cv-build, copy the verified PDF to local-cv/yilin_ye_cv.pdf, and inspect a Poppler PNG before delivery.

Plan revision note (2026-09-06): Apply user corrections: keep September 2027 availability in Profile only; remove LandSAR pages and the Education supervisor line; end both activities in May 2025; add First Class Honors (2025) to CV and website awards. Also synchronize the website availability notice to September 2027. Verify LaTeX compilation, rendered PDF, extracted text, and npm run validate.

Plan revision (2026-09-12): Add user-provided under-review manuscripts with author positions, transcript-backed CGA (BSc 3.804, MPhil 4.200), inline honors, trailing title links, expanded existing projects, hidden older projects/award, instructor attribution, and XR skills. Move website profile links to the top navigation bar, preserving accessible labels and mobile wrapping. Compile and inspect PDF; run site validation and browser checks.

Correction (2026-09-12): User clarified that profile links belong at the top of the CV, not the website navigation. Reverted only the mistaken index.html relocation and appended CSS. Added GitHub, LinkedIn, Google Scholar, and public ORCID links to the CV header. Verified one-page rendering and PDF link annotations; website validation passed. This supersedes the website navigation decision above.

Correction (2026-09-12): Both CHI submissions now explicitly say CHI 2027; ARR says August 2026. CGA is inline with each degree and includes the 4.3 scale (MPhil 4.2/4.3; BSc 3.804/4.3). Single-page compilation, visual inspection, and extracted-text checks passed.

Correction (2026-09-12): Combined the undergraduate degree, Business minor, First Class Honors, and CGA on one line; moved undergraduate dates to the institution row. Compiled one page without warnings and visually verified the result.

Revision (2026-09-12): Added Hall Tutor (08/2025--present) and unified award/project bullet glyphs as text bullets. Compiled and visually verified the one-page CV without layout warnings.
