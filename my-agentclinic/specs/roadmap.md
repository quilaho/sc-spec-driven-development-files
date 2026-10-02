# Roadmap

High-level implementation order in small, shippable phases.

---

## Phase 1 — Setup & Scaffold ✓ COMPLETE

- Initialize Next.js project with TypeScript and strict mode
- Add Tailwind CSS and shadcn/ui
- Add ESLint and Prettier
- Set up SQLite database with better-sqlite3
- Commit baseline project structure

## Phase 2 — Data Models

- Define Prisma schema: `Agent`, `Ailment`, `Therapy`, `Appointment`, `Staff`
- Run initial migration
- Seed database with sample agents and ailments

## Phase 3 — Agent & Ailment CRUD

- API routes: list, create, view, and update agents
- API routes: list and view ailments
- Simple pages to verify data flows end-to-end

## Phase 4 — Therapies & Booking

- API routes: list and view therapies
- API route: create and cancel appointments
- Link agents to ailments; link ailments to therapies
- Appointment booking flow (agent selects ailment → system suggests therapy → agent books slot)

## Phase 5 — Dashboard UI

- Staff dashboard: view all agents, appointments, and therapy schedules
- Agent dashboard: view own ailments, appointments, and treatment history
- Shared navigation and layout shell using shadcn/ui components

## Phase 6 — Polish & Launch

- Responsive design pass (Steve's modern browser requirement)
- Loading states, error boundaries, and empty states
- Basic authentication for staff vs. agent roles
- Final review against mission and stakeholder requirements
