# Validation Record

## Source-level validation performed

- Modified TS/TSX parser validation: **PASS**
  - `app/page.tsx`
  - `components/ExperienceShowcase.tsx`
  - `components/ProjectTile.tsx`
  - `components/ProjectRail.tsx`
  - `data/projects.ts`
  - `app/projects/[slug]/page.tsx`
- Project ordering check: **PASS** — radio project is #2.
- Card/hero image identity check: **PASS** — same first image is used in both locations.
- Three requested proof-image references: **PASS**.
- Engineering-report reference: **PASS**.
- Experience modal integration: **PASS**.
- Escape/backdrop close behavior present: **PASS**.
- Body-scroll lock present: **PASS**.
- All four new optimized WebP assets exist and are non-empty: **PASS**.
- Project report PDF exists and is non-empty: **PASS**.

## Image review

The supplied hero photo was adapted to a 16:10 web canvas without cropping the labelled SEL-751, master radio, slave radio, or 24 VDC callouts. The proof images were converted to WebP while preserving the supplied content and order.

## Build note

A full `npm ci` / Next.js production build could not be completed inside the isolated execution environment because package installation did not have reliable external npm network access. The modified source files were therefore validated with the TypeScript parser plus targeted structural/integration checks. Run `npm run lint` and `npm run build` in the real portfolio repository before deployment, as listed in `INSTALL_RADIO_EXPERIENCE_UPDATE.md`.
