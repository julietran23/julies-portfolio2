# Julie Tran portfolio

An interactive personal portfolio for Julie Tran’s selected technology, software, IT, design, and multimedia work. The Phase 1 foundation includes a continuous homepage, five linked project placeholders, a shared visual system, and persistent design and content documentation.

## Stack and setup

React, TypeScript, Vite, React Router, Motion, Lucide React, and CSS. Use Node.js 22.22.0 or newer with npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

```sh
npm run typecheck
npm run build
npm run preview
```

The production build writes to `dist/`. `npm run preview` serves the built version for local checks. When hosting is approved, configure the chosen host to serve `index.html` for application routes such as `/projects/senior-capstone`, while serving static assets normally. React Router handles the route after the HTML loads.

## Project structure

| Location | Purpose |
| --- | --- |
| `src/components/` | Shared navigation, page layout, and motion primitives |
| `src/data/` | Project labels, stable route slugs, and section links |
| `src/pages/` | Homepage, case study template, and missing-page view |
| `src/styles/` | Font declarations, design tokens, global layout, and page styles |
| `public/fonts/` | Local typefaces and redistribution notices |
| `docs/` | Design specification, asset inventory, source copy, and delivery progress |

Project order, labels, and slugs come from `src/data/projects.ts`. Preserve live slugs unless a route migration is planned. The Phase 1 homepage markup lives in `src/pages/HomePage.tsx`. Record approved copy changes in [project-content.md](docs/project-content.md) and add future case study content to the shared project model as part of its implementation phase. Review the [asset inventory](docs/asset-inventory.md) before introducing media or fonts.

## Development workflow

Use the branch authorized for the current phase. Follow [AGENTS.md](AGENTS.md) for repository conventions. Use the [design specification](docs/design-spec.md) to review visual and interaction behavior, and update [development progress](docs/development-progress.md) after each phase. Run the type and production checks and confirm representative navigation with the browser before delivering a change.
