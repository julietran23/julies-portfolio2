# Development progress

## Current phase

Phase 2 completed on November 27, 2026. The animated landing is ready for Julie’s local visual review. Phase 3 awaits approval.

## Completed phases

| Phase | Result |
| --- | --- |
| 0 · Environment and GitHub verification | Confirmed the remote `julietran23/julies-portfolio2`, fetched and checked out the clean `origin/feature/foundation` base at `09db37d94c82fbea090c5b740e9f8041f7fafed0`. Verified GitHub write access by creating, reading, and deleting the authorized `test/codex-connection` branch. Confirmed access to the PDF and five asset archives. |
| 1 · Foundation | Inspected all 21 rendered Canva pages and five ZIP archives. Added React, TypeScript, Vite, routing, a shared layout, continuous homepage sections, a static project index, a reusable case study placeholder, and a custom missing-page view. Added CSS design tokens and local fonts, a Motion reduced-motion provider and brief project entrance, Git ignore rules, and repository documentation. |
| 2 · Landing, navigation, and backdrop | Continued from Phase 1 commit `393c0e75756b6cda726fc6fa6eae43f04056f265`. Recreated the two Canva landing states with live type, shared motion, and the original isolated character vector. Added explicit Home replay, skip and reduced-motion behavior, fixed navigation and project disclosures, and a shared scroll-responsive backdrop. |

## Implementation decisions

- Stable homepage anchors are `#home`, `#selected-work`, `#about-me`, and `#skills`. Project slugs and route titles come from the shared project model. React Router manages browser history and scroll restoration. A production host will need an HTML fallback for application routes.
- The landing uses one sequence for the one-second blackout fade, five-second hold, and 1.2-second rearrangement. Two persistent text elements and two persistent gradient shapes move between the measured Canva positions. The wide final view preserves the reference crop, and narrow views keep the full greeting in frame. The original character is isolated as a vector from slide 2.
- Selected Work uses five direct project links plus a decorative arc. About Me reserves a portrait frame, and Skills uses a simple badge shape.
- A shared fixed backdrop uses the reference glow colors and an advancing shade. The matte gray is darker than the reference sample for light text contrast. The tinted navigation surface stays to the right and leaves the left-hand greeting unobscured.
- Glacial Indifference ships as original local OTF files with the SIL Open Font License. Temporary Gaegu Bold ships as Latin WOFF2 with its license. The Phase 2 upload is the Office Bold cut, with publisher permission for web use and Git distribution still unverified.
- Original design and image materials stay in private working storage. The public asset set uses the isolated character, the existing favicon, and licensed fonts.

## Phase 1 verification

- `npm ci` installed the locked dependency set in a clean directory with Node.js 24.22.3. `npm ls --depth=0` confirmed the project’s installed dependencies.
- `npm run build` passed strict TypeScript checking and generated a production build. Vite development and local production preview returned HTTP 200 for representative URLs.
- Chromium checks passed on the final development server and local production preview. Tested all five direct project URLs, page titles and headings, hard reloads, Back and Forward behavior, return to Selected Work, desktop section links, the mobile menu, keyboard skip/focus, missing-page recovery, local font loading, and reduced motion. All six pages passed horizontal overflow checks at 390, 768, and 1440 CSS pixels. The homepage greeting was also checked at 320 pixels. No final browser console, runtime, or resource errors were observed.
- Confirmed the required documentation files and Git exclusions for originals, dependencies, environment files, and build output.

## Phase 2 verification

- `npm ci` and `npm run build` passed. The production build includes strict TypeScript checking. Vite’s development server and production preview served the updated application.
- Chromium verified both states at 1920×1080, 1440×810, 1024×720, 768×1024, and 390×844. Both states maintained the intended framing without horizontal overflow. All five project deep links and refreshes, heading and routing behavior, and missing-page recovery passed.
- The first observed frame was black. Chromium measured approximately one second to reveal the first scene, a five-second hold, and a roughly 1.2-second rearrangement. Both greeting and backdrop elements kept their identity while moving and scaling.
- All 13 final Chromium check groups passed with zero console, runtime, or resource errors. They covered repeated Home replay and cancellation, cross-route Home, direct anchors, history and project returns, keyboard skip, scrolling during the intro, navigation visibility, disclosure dismissal and focus, touch, and reduced motion. A 17-point pixel check confirmed a gradual background transition and continued color changes in lower sections.
- Captured the initial and final landing compositions, open navigation, transition into Selected Work, and mobile landing. At 1440×810, measured placement edges were within 0.3% of the reference frame except for the lower edge of the Gaegu “Hello...” lettering in the final state, which was 0.9% higher. Sampled pink, lime, and white colors were within two levels per RGB channel. Visible work-heading rows maintained at least 5.49:1 sampled white-text contrast across the five sizes.
- The main visual differences are Gaegu’s glyph shapes, the required top-right navigation and short-lived skip control, the complete greeting on narrow displays, and the darker reading area behind the work placeholders.

## Open items

- Matching Providence Sans Pro webfonts, website embedding rights, and repository redistribution rights remain pending. Gaegu is temporary.
- Approved Skills badge artwork and final skills copy are pending. The landing uses the recovered original vector.
- The supplied original photos need publication review and web-ready exports. DAM screenshots are missing and its limitations copy is incomplete. Some Capstone and SimVentions reference images need separate cleared sources. See [the asset inventory](asset-inventory.md).
- HackVA 2027 has a coming-soon page pending real project content.

## Pending phases

| Phase | Work |
| --- | --- |
| 3 | Selected Work wheel and shared-element project transitions |
| 4 | About Me 3D photo carousel |
| 5 | Reusable editorial case study architecture |
| 6A | Senior Capstone case study |
| 6B | Digital Asset Management case study |
| 6C | Taxonomy & IT Solutions case study |
| 6D | SimVentions Mission Support case study |
| 7 | Skills section after final design and copy are provided |
| 8 | Final responsive, accessibility, performance, and cross-device testing |

After visual review and Phase 3 approval, use slides 3–7 and the Selected Work and shared transition sections of [the design specification](design-spec.md).
