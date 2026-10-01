# Tech Stack

## Language

**TypeScript** — used throughout, server and client.

## Recommended Framework: Next.js

We use **Next.js** as the full-stack framework for AgentClinic.

**Why Next.js:**
- Most widely adopted TypeScript web framework — large ecosystem, strong community, easy hiring
- Server-side rendering (SSR) and API routes in one project — no separate backend needed
- React on the client for the dashboard UI (satisfies Mary's reliable, popular stack requirement)
- File-based routing keeps the project structure intuitive
- Excellent performance and SEO out of the box (satisfies Steve's modern browser requirement)

## UI & Styling

- **Tailwind CSS** — utility-first styling for a clean, attractive UI
- **shadcn/ui** — accessible, composable component library built on Radix UI; powers the staff and agent dashboard

## Data

- **SQLite** — embedded relational database; zero infrastructure overhead for early phases
- **better-sqlite3** — lightweight, synchronous SQLite driver; SQL queries written directly, no ORM needed at this scale

## Tooling

- **ESLint + Prettier** — code quality and formatting
- **TypeScript strict mode** — enabled from day one
