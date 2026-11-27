# Julie Tran portfolio instructions

## Purpose and references

Build a creative, accessible personal portfolio for Julie Tran’s work across technology, software, IT solutions, design, and multimedia. The 21-slide Canva deck is the visual and editorial reference when available. Consult [the design specification](docs/design-spec.md), [portfolio copy](docs/project-content.md), [the asset inventory](docs/asset-inventory.md), and [development progress](docs/development-progress.md) before working on a phase.

The homepage is one document with Home, Selected Work, About Me, and Skills in that order. Each project has one continuous page at its own URL. Keep the editorial type, handwriting, asymmetric composition, and pink, yellow-green, and charcoal palette. Reconstruct layouts using HTML, CSS, SVG, local fonts, and cleared assets. Keep full-slide images as private reference material. Use placeholders for missing content or media and record each gap.

## Technology and organization

- Use React, TypeScript, Vite, React Router, Motion, plain CSS, and Lucide React when appropriate. Use CSS perspective for the planned 3D carousel. Keep the site frontend-only.
- Put reusable layout and interaction components in `src/components/`, route views in `src/pages/`, content and stable paths in `src/data/`, and shared design tokens and styles in `src/styles/`. Place reusable hooks in `src/hooks/` as they are needed.
- Keep TypeScript strict. Use function components, descriptive names, straightforward state, and small modules arranged around their role. Share established route and motion utilities. Keep CSS responsive and use tokens for repeated color, typography, spacing, and timing values.
- Keep the browser URL and history as sources of navigation state. Use semantic links, controls, focus states, and section anchors. Coordinate motion with reduced-motion settings and keep scrolling available.

## Branches and phases

- `main` is production-ready and `develop` is the development integration branch. `feature/foundation` is the Phase 1 delivery target. Use the owner-approved feature branch for each subsequent phase.
- Before modifying code, verify the checkout and remote, inspect the clean working tree, fetch the intended branch, and resolve its base commit. Verify delivery access when needed. Use fast-forward pushes or an authorized pull request. Keep changes off `main` and `develop`, and leave deployment and merges to the owner’s explicit direction.
- Follow the sequence in [development progress](docs/development-progress.md). Work only on the authorized phase. Preserve previously approved behavior and visuals, and obtain approval before changing an approved design outside the current request. Record phase decisions, missing inputs, and concrete verification results at the end of each phase.
- Before staging, review the complete change and confirm that each staged asset is intended for redistribution. Verify the remote commit or pull request after delivery.

## Assets, privacy, and licensing

- Keep the Canva deck, ZIP archives, raw images, and unapproved assets outside tracked paths. Use ignored `references/` and `source-assets/` when retaining originals locally. Keep work files and build output out of Git.
- Put approved font files and their notices in `public/fonts/`. Confirm family, weights, web-use rights, and redistribution terms. Preserve a required copyright notice or reserved font name. Document temporary substitutions.
- Put cleared, web-optimized images in `public/images/` when needed. Strip location and device metadata, preserve proportions, reserve layout dimensions, supply meaningful alt text, and lazy-load appropriate below-the-fold photos.
- Keep proprietary and confidential company material, personal data, private image metadata, and unapproved photographs or logos in private sources. Use public-safe reference copy, retain proposal and in-progress status, and route uncertain details or attribution to owner review. Leave the supplied internship video on LinkedIn.

## Verification

Run `npm ci` and `npm run build` before delivery. Verify Vite dev startup, the homepage, all project deep links and reloads, Back and Forward navigation, section links from project pages, mobile and keyboard navigation, text and focus visibility, and reduced motion. Check narrow, tablet, and desktop layouts for overflow. Check the console and network for relevant errors. In interaction phases, verify the changed controls and scenarios in [the design specification](docs/design-spec.md). Report the checks actually performed and any that remain pending.
