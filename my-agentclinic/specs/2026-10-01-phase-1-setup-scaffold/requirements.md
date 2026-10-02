# Phase 1 — Setup & Scaffold: Requirements

## Scope

Bootstrap the AgentClinic project as a working Next.js application with all foundational tooling in place. By the end of this phase the repo compiles, lints, and serves a minimal AgentClinic-branded home page.

## What is in scope

- Initialize Next.js with TypeScript and strict mode enabled
- Add Tailwind CSS (utility-first styling)
- Add shadcn/ui (component library built on Radix UI)
- Configure ESLint and Prettier
- Add `better-sqlite3` and create an initial SQLite database file with an empty schema bootstrap
- Build a minimal AgentClinic home page: clinic name, mission tagline, non-functional CTA button using shadcn/ui
- Make the home page responsive, mobile-first, from 320px phones to desktop (see [tech-stack.md](../tech-stack.md#responsive-design))
- Commit a clean baseline that all future phases build on

## What is out of scope

- No Prisma or any ORM — SQL will be written directly against `better-sqlite3`
- No data models yet (Phase 2)
- No API routes or navigation beyond the single home page
- No authentication, seeding, or business logic
- No visual polish — the home page just needs to be coherent, not finished (it must still be responsive)

## Key Decisions

| Decision | Choice | Reason |
|---|---|---|
| ORM | None — `better-sqlite3` with raw SQL | tech-stack.md is the source of truth; Prisma was listed in the roadmap but contradicts the stated stack |
| Database | SQLite via `better-sqlite3` | Zero infrastructure, synchronous driver, sufficient for early phases |
| Framework | Next.js App Router, TypeScript strict | Full-stack in one project; widely adopted; aligns with Mary and Steve's requirements |
| Styling | Tailwind CSS + shadcn/ui | Utility-first + accessible composable components for the dashboard |
| Responsive design | Mobile-first Tailwind breakpoints from the first page | Responsive design is a product principle (mission.md); retrofitting it later costs more than building it in |

## Context

AgentClinic is a teaching project for a spec-driven development course and conference demo. The primary audiences are course students and developers giving AI coding demos. The stack must be approachable and visually engaging while staying coherent across phases.

See [mission.md](../mission.md) and [tech-stack.md](../tech-stack.md) for full context.
