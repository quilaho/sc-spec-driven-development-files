# Phase 1 — Setup & Scaffold: Validation

The branch is ready to merge when all three checks pass.

---

## 1. `next dev` runs clean

```
npm run dev
```

- Dev server starts without errors or warnings
- Opening `http://localhost:3000` in a browser renders a page (Next.js default or a blank shell — no 500 or compilation error)
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

---

## Out-of-scope checks (not required for merge)

- No end-to-end or unit tests are expected at this phase
- No database content is required — the `.db` file being created is a bonus sanity check, not a gate
- Visual polish is out of scope; the default Next.js appearance is acceptable
