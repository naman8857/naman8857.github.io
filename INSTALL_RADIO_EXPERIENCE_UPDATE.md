# Naman Portfolio — Radio Project + Compact Experience Update

This update is designed to be copied over the current `naman8857.github.io` source tree.

## What changes

1. Adds **Wireless Protection Relay Integration** as project #2, immediately after the SIMOCODE gateway project.
2. Uses the supplied first radio photo as both the project-card image and the project-page hero image.
3. Uses the supplied second, third, and fourth images as the three proof/evidence images in the requested order.
4. Adds the supplied 15-page SEL-751 / RTAC / RAD-900 engineering report as a public project document.
5. Makes project repository links optional, so the radio project can show a **Report** action instead of inventing a GitHub link.
6. Adds a compact validation-status boundary on the radio project page so the portfolio does not overclaim final SEL-client acceptance.
7. Makes proof images clickable so communication screenshots can be inspected full-size.
8. Replaces the long experience timeline with four compact position cards. Each card shows company, role, location, period, main focus, and a **View experience** button.
9. `View experience` opens an accessible modal with concise work details and tools. It closes using the X button, the Escape key, or the backdrop.

## Files to copy into the existing project

- `app/page.tsx`
- `app/projects/[slug]/page.tsx`
- `components/ExperienceShowcase.tsx` **(new)**
- `components/ProjectTile.tsx`
- `data/projects.ts`
- `public/images/portfolio/radio-wireless-hero.webp` **(new)**
- `public/images/portfolio/radio-wireless-bench.webp` **(new)**
- `public/images/portfolio/radio-rtac-comm-monitor.webp` **(new)**
- `public/images/portfolio/radio-phoenix-diagnostics.webp` **(new)**
- `public/documents/SEL_751_RTAC_RAD900_Project_Report.pdf` **(new)**

Do not overwrite unrelated folders such as `.next`, `node_modules`, or `out`.

## Local test

From the portfolio root:

```powershell
npm install
npm run lint
npm run build
npm run dev
```

Open:

```text
http://localhost:3000
```

## Manual acceptance checks

### Projects
- SIMOCODE remains first.
- Wireless Protection Relay Integration is second.
- The first supplied photo is the card image.
- Clicking the radio project shows the same first photo in the top-right hero.
- The three lower proof images appear in the exact supplied order: bench setup, RTAC Comm Monitor, Phoenix diagnostics.
- Each proof image can be opened full-size.
- The engineering report opens from the project card and project page.
- The radio project does not show a fake GitHub button.
- The validation note states that radio transport is proven while final SEL-client session acceptance remains open.

### Experience
- The homepage no longer renders four long timeline entries.
- Four compact role cards are visible instead.
- Every card shows company, role, location, period, and main focus.
- `View experience` opens only the selected role.
- The modal closes with X, Escape, and backdrop click.
- Body scrolling is locked while the modal is open.
- Focus returns to the role button after closing with the X/backdrop button.

### Responsive
Check at approximately:
- 390 px mobile width
- 768 px tablet width
- 1280–1440 px laptop/desktop width
- 1920 px large monitor width

The radio hero image should remain fully readable without clipping the labels.
