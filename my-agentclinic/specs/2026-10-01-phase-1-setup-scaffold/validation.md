# Phase 1 — Setup & Scaffold: Validation

The branch is ready to merge when all four checks pass.

---

## 1. `next dev` runs clean

```
npm run dev
```

- Dev server starts without errors or warnings
- Opening `http://localhost:3000` renders the AgentClinic home page — clinic name heading, tagline, and CTA button visible
- The browser console has no uncaught errors

## 2. TypeScript compiles

```
npx tsc --noEmit
```

- Exits with code 0
- Zero type errors
- `strict: true` must remain set in `tsconfig.json` — do not weaken it to make this pass

## 3. ESLint passes

```
npm run lint
```

- Exits with code 0
- Zero errors and zero warnings
- The `eslint-config-prettier` integration must be active so Prettier and ESLint rules do not conflict

## 4. Home page is AgentClinic-branded

Manual check at `http://localhost:3000`:

- Clinic name ("AgentClinic") appears as the main heading
- Mission tagline is present ("A sanctuary where AI agents find relief" or close equivalent)
- A CTA button renders using the shadcn/ui `Button` component (confirms the component library is wired up end-to-end)
- No default Next.js boilerplate content remains (no "Get started by editing…" copy, no Vercel logo)

---

## Out-of-scope checks (not required for merge)

- No end-to-end or unit tests are expected at this phase
- No database content is required — the `.db` file being created is a bonus sanity check, not a gate
- Visual polish is not required; the home page needs to be coherent but not finished
