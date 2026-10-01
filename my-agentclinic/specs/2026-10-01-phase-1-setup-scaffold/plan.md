# Phase 1 — Setup & Scaffold: Plan

## Task Group 1 — Initialize Next.js Project

1. Remove the existing bare TypeScript scaffold (`src/index.ts`, `tsconfig.json`, `package.json`)
2. Bootstrap a new Next.js project in the repo root with TypeScript and strict mode (`create-next-app` or manual setup)
3. Verify `tsconfig.json` has `"strict": true` under `compilerOptions`
4. Confirm the default page renders at `localhost:3000` with `next dev`

## Task Group 2 — Add Styling

5. Install Tailwind CSS and its PostCSS dependencies
6. Generate `tailwind.config.ts` and `postcss.config.js` with `content` paths covering `app/**` and `components/**`
7. Add Tailwind directives to the global CSS file
8. Initialize shadcn/ui (`npx shadcn-ui init`) — choose the default theme and confirm `components.json` is created
9. Verify a shadcn/ui component (e.g. `Button`) can be imported and renders without errors

## Task Group 3 — Configure Linting & Formatting

10. Install ESLint with `eslint-config-next` (likely already present from Next.js init — verify)
11. Install Prettier and `eslint-config-prettier`
12. Create `.prettierrc` with project formatting rules (2-space indent, single quotes, trailing commas)
13. Add `lint` and `format` scripts to `package.json`
14. Run `eslint .` and confirm exit 0

## Task Group 4 — Add Database Bootstrap

15. Install `better-sqlite3` and `@types/better-sqlite3`
16. Create `src/db/client.ts` — opens (or creates) `agentclinic.db` in the project root and exports the connection
17. Create `src/db/migrate.ts` — runs any pending DDL statements (empty for now, just establishes the pattern)
18. Wire `migrate.ts` to run once at server startup (Next.js instrumentation file or a startup check in the root layout)
19. Confirm the `.db` file is created when the dev server starts; add it to `.gitignore`

## Task Group 5 — Baseline Commit

20. Review all files for stray boilerplate (default Next.js sample code, placeholder text)
21. Run full validation checklist (see `validation.md`)
22. Commit with message: `feat: phase 1 — Next.js scaffold with Tailwind, shadcn/ui, ESLint, and SQLite`
