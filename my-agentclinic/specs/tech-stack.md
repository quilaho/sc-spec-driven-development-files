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

### Responsive Design

The web UI is responsive across all supported screen sizes. Every UI feature must meet these standards:

- **Mobile-first** — write base styles for the smallest screen, then layer on larger layouts with Tailwind's default breakpoints (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px)
- **Supported widths** — 320px phones through 1440px+ desktops, in portrait and landscape
- **No horizontal page scroll** — content reflows to fit the viewport; wide content such as data tables scrolls inside its own container or collapses into a stacked layout
- **Readable type** — headings scale with the viewport; body text stays at 16px or larger on mobile
- **Touch-friendly** — primary interactive targets are at least 44×44px on touch screens
- **Adaptive navigation** — navigation collapses into a menu on small screens
- **Viewport** — pages render with `width=device-width, initial-scale=1`

## Data

- **SQLite** — embedded relational database; zero infrastructure overhead for early phases
- **better-sqlite3** — lightweight, synchronous SQLite driver; SQL queries written directly, no ORM needed at this scale

## Testing

- **Vitest** — unit and integration test runner; fast, native TypeScript support, compatible with the Next.js toolchain

## Tooling

- **ESLint + Prettier** — code quality and formatting
- **TypeScript strict mode** — enabled from day one
