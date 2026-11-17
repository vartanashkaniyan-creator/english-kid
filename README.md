# English Kids

English Kids — a Persian-guided English learning platform for children and teenagers aged 6–17, targeting the Iranian market.

This repository currently contains **Phase 1 — project foundation only**. Authentication, database, payments, subscriptions, external APIs, and the four user panels are intentionally **not** implemented yet.

## Tech Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** (mobile-first, responsive)
- Persian language (`fa-IR`) and **RTL** layout
- No external dependencies beyond the core stack above

## Project Structure

```
.
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout (RTL, lang=fa, header/footer)
│   │   └── page.tsx          # Temporary home page (status confirmation)
│   ├── components/
│   │   ├── layout/           # Reusable layout pieces (Header, Footer, Container)
│   │   └── ui/               # Generic UI primitives (StatusCard, etc.)
│   ├── lib/
│   │   └── i18n.ts           # Centralized Persian UI strings
│   └── styles/
│       ├── globals.css       # Tailwind layers + RTL/global base styles
│       └── tokens.ts         # Centralized design tokens (colors, fonts, spacing)
├── tailwind.config.ts        # Tailwind config, extends theme from tokens.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json             # Path alias: @/* -> src/*
└── package.json
```

### Design tokens

All colors, fonts, spacing, radii, and shadows live in `src/styles/tokens.ts` and are wired into Tailwind via `tailwind.config.ts`. The current palette is **provisional and neutral** — the final brand identity will be supplied later and should update only `tokens.ts`.

### Persian / RTL

- `<html lang="fa" dir="rtl">` is set in the root layout.
- Global styles apply a Persian-friendly font stack (`Vazirmatn` fallback to system-ui).
- All user-facing strings are centralized in `src/lib/i18n.ts`.

## Getting Started

Install dependencies (already installed in this environment):

```bash
npm install
```

Run the development server (it starts automatically in the Bolt preview):

```bash
npm run dev
```

Other scripts:

```bash
npm run build       # production build
npm run start       # start the production server
npm run type-check  # TypeScript type checking (no emit)
```

## Status

- ✅ Foundation scaffolding complete
- ✅ Type-check and production build pass
- ⏳ Brand identity, panels, auth, database, and payments — upcoming phases

## Notes

- The repository is intended to remain **private**.
- No secrets or API keys are present in the codebase.
- No deployment or publishing has been performed.
