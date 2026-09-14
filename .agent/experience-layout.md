# Stack Education and Teaching beside Awards

This plan follows `.agent/PLANS.md` and is maintained as implementation proceeds.

## Purpose and Context

The personal website uses `index.html` sections and `assets/styles.css`. Replace the three desktop columns with Education above Teaching on the left and Awards spanning both rows on the right. Education must remain content-sized. Small screens retain a single column.

## Progress

- [x] Inspected the existing grid and list stretching rules.
- [x] Update CSS placement and remove Education list stretching.
- [x] Verify desktop alignment, mobile flow, and static validation.

## Plan of Work

Use two equal CSS grid columns and named areas, with an automatic first row and flexible second row. Remove `flex: 1` from `.education-list`. At the existing 980px breakpoint use Education, Teaching, Awards as consecutive areas. Update the stylesheet cache version in `index.html`.

## Validation and Acceptance

Run `npm run validate` and `git diff --check` from the repository root. Inspect the local preview at port 4174: Education sits directly above Teaching, Awards spans their combined height, and Education entries have natural spacing. At mobile width all panels fit without horizontal overflow.

## Decisions and Discoveries

The Education list currently uses `flex: 1`, which distributes spare card height through its grid rows. Remove that stretching rather than assigning fixed item heights. CSS grid areas preserve existing section IDs and navigation.

## Recovery and Dependencies

No dependencies or data changes are needed. Revert only this layout change if desired; preserve earlier uncommitted content and preview fixes. Do not push without a new request.

## Outcomes and Retrospective

Desktop verification at 1011×1324 confirmed Education at 346px natural height and a shared Teaching/Awards bottom edge. Mobile verification at 390×844 confirmed Education, Teaching, Awards in one column with no horizontal overflow. Static validation and whitespace checks passed. No commit or push was performed.
