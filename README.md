# LAST & LAUREL

“Crafted for the lasting impression.” / “صُممت لانطباع يدوم.”

LAST & LAUREL is a portfolio-grade, fictional luxury footwear storefront for classical leather shoes and formal accessories. The visual system takes cues from a shoemaker’s atelier: parchment, espresso leather, restrained brass, welt stitching, and archival craft.

## Architecture

This npm-workspace monorepo contains:

- `apps/storefront` — React, TypeScript, and Vite client application.
- `apps/api` — Express and TypeScript API foundation.
- `packages/shared` — shared Zod schemas, types, and brand constants.

The intended data layer is PostgreSQL through `pg` with parameterized raw SQL only. ORMs are deliberately not used. Every database operation must pass values as query parameters (for example, `pool.query('SELECT * FROM products WHERE id = $1', [id])`); never interpolate user-controlled values into SQL strings.

## Installation and environment

Requires Node.js 22+ and npm 11+.

```bash
npm install
Copy-Item apps/api/.env.example apps/api/.env
Copy-Item apps/storefront/.env.example apps/storefront/.env
```

Adjust `CORS_ORIGINS` for the browser origin and `DATABASE_URL` when database work begins. `.env` files are ignored by Git; no secrets are included in this repository.

## Scripts

- `npm run dev` — run the storefront and API concurrently.
- `npm run build` — build every workspace.
- `npm run lint` — run ESLint with warnings treated as failures.
- `npm run typecheck` — run strict TypeScript project checks.
- `npm run test` — run Vitest.
- `npm run format` — format source files with Prettier.

## Current implementation status

Implemented: workspace tooling; strict TypeScript; ESLint/Prettier; validated API environment; Helmet, CORS allowlist, request IDs, normalized errors, JSON request limits, and graceful API shutdown; a responsive storefront frame; semantic light/dark tokens; theme persistence with initial-page anti-flash handling; English/Arabic message architecture with document `lang`/`dir` changes; accessibility foundations; and original inline SVG footwear icons.

The main content area is intentionally empty. There is no product catalogue, account system, checkout, database schema, or production deployment yet.

## Planned milestones

1. PostgreSQL migrations, connection pool, repositories, and product catalogue API.
2. Catalogue, product-detail, search, filtering, and localized content.
3. Bag, inventory-aware checkout integration, authentication, and order management.
4. Operational testing, observability, performance auditing, and deployment hardening.

## Security baseline

The API uses Helmet, an explicit validated CORS allowlist, a 100 KB JSON body limit, request IDs, and normalized error payloads. It does not expose server stack traces in production. Zod validates runtime configuration and shared API contracts. The codebase does not use `dangerouslySetInnerHTML`.
