# AGENTS.md — Tools by Vijay Hardaha

## Stack

- **Framework**: Next.js 16 (App Router; Turbopack for dev, webpack for build)
- **Language**: TypeScript 6
- **Styling**: Tailwind CSS v4 (`tailwindcss` + `@tailwindcss/postcss` + `tw-animate-css`)
- **Package manager**: Bun (v1+)
- **Node**: v24 (`.nvmrc`)
- **Testing**: Vitest 4 (`vitest.config.ts`, jsdom + @testing-library/react)
- **Deployment**: Vercel (`output: 'standalone'`)
- **Datastore / rate limiting**: Vercel KV (Upstash Redis) via `@upstash/redis` — see Environment Variables

## Essential Commands

| Command                | What it does                           |
| ---------------------- | -------------------------------------- |
| `bun run dev`          | Start dev server with Turbopack        |
| `bun run build`        | `next build --webpack && next-sitemap` |
| `bun run test`         | `vitest run` (one-shot test suite)     |
| `bun run test:watch`   | Vitest watch mode                      |
| `bun run lint`         | ESLint                                 |
| `bun run lint:fix`     | ESLint with auto-fix                   |
| `bun run format`       | Prettier write                         |
| `bun run format:check` | Prettier check                         |
| `bun run tsc`          | `tsc --noEmit`                         |
| `bun run prepare`      | Husky install                          |

All config is extended from `@vijayhardaha/dev-config` (ESLint, Prettier, Commitlint, tsconfig base).

## Code Organization

```
src/
  app/                      # Next.js App Router pages & API routes
    (tool)/<slug>/page.tsx  # Tool pages (static SSR, in route group)
    tools/page.tsx          # All tools listing, grouped by category
    tools/[slug]/page.tsx   # Dynamic category page
    tools/_components/      # Private components (category-about.tsx)
    api/<name>/route.ts     # API route handlers
    layout.tsx              # Root layout (fonts, GA, Vercel Analytics)
    page.tsx                # Home page (categorized tool cards, SEO content)
    about/                  # About page
    contact/                # Contact page
    faq/                    # FAQ page
    terms-conditions/       # Terms & Conditions page
    privacy-policy/         # Privacy Policy page
  components/
    tools/<tool-name>/      # Each tool: index.tsx, input-block.tsx, output-block.tsx, info-block.tsx
    ui/                     # Reusable primitives (card, button, input, textarea, select, checkbox, etc.)
    page/                   # Layout helpers (PageLayout, PageHeader, PageContent, PageBreadcrumb, EntryContent, WithInfoPage, WithToolPage)
    header/                 # Header + desktop nav + sidebar drawer with accordion
    footer/                 # Footer
    home/                   # ToolCard (home page grid)
    shared/                 # VercelAnalytics
  constants/
    tools.ts                # Tool[] data (slug, title, description, seoTitle, seoDescription, category)
    categories.ts           # Category[] data (label, slug, description, seoTitle, seoDescription)
    icons.tsx               # slug → React icon mapping for both tools and categories
    pages.ts                # PageEntry[] data (slug, title, description, seoTitle, seoDescription)
    links.tsx               # Footer link groups + SocialMediaLink[] (icon as ReactNode)
    seo.ts                  # SITE_CONFIG, SITE_METADATA, GOOGLE_ANALYTICS_ID
  utils/
    tools.ts                # Tool helpers: getAllTools, findToolBySlug, getToolsByCategory, getToolIcon, getToolsByCategories, etc.
    categories.ts           # Category helpers: getAllCategories, getCategoryBySlug, etc.
    meta.ts                 # buildMetadata() — generates Next.js Metadata with OG/Twitter card merging
    seo.ts                  # siteUrl(), getPermaLink(), getSeoByPath(), allSeoData, cleanPath — unified SEO lookup
    breadcrumb.ts           # BreadcrumbItem type + buildBreadcrumbs() with parent support
    schema.ts               # Schema.org JSON-LD: globalSchema() + webPageSchema/aboutPageSchema/contactPageSchema wrappers (override OG image)
    api.ts                  # API helpers: withApiGuard(), rateLimit(), parseJsonBody(), safeApiErrorMessage(), withTimeout(), TimeoutError
    canvas.ts               # downloadCanvasPng() shared by QR/barcode generators
    fonts.ts                # Work Sans + Geist Mono font config
    classnames.ts           # cn() utility (clsx + twMerge)
  types/index.ts            # Tool, Category, SocialMediaLink interfaces
  styles/globals.css        # Tailwind v4 CSS with custom theme
  proxy.ts                  # Next.js 16 Proxy for API origin validation + body size limits
```

## Architecture & Control Flow

### Tool Page Pattern (every tool follows this exactly)

```
src/app/(tool)/<slug>/page.tsx    # ~20-line thin shell
├── import { ToolComponent } from '@/components/tools/<slug>'
├── export const metadata = getToolPageMetadata('<slug>')   # from WithToolPage
└── default component:
    └── <WithToolPage slug="<slug>">     # from components/page/WithToolPage
        └── <ToolComponent />            # the interactive tool
```

`WithToolPage` resolves the tool (404 on unknown slug) and renders the shared
layout: JSON-LD (globalSchema + webPageSchema + breadcrumbSchema, OG-image
overridden), `PageLayout` → `PageHeader` (icon + Home/Category/Tool breadcrumb)
→ `PageContent` → `EntryContent` (article + Related Tools grid + a randomized
"Other Tools" grid picked once via a `useRef` guard).

**Key rule**: Tool pages are **static SSR** (no `'use client'`). Only the tool component itself and its sub-components are `'use client'`.

### Tool Component Pattern (client-side)

```
src/components/tools/<tool-name>/
  index.tsx          # 'use client' — useState for input/output/options, handles submit/clear/reset
  input-block.tsx    # 'use client' — Form with Input/Textarea, checkboxes/selects, action buttons
  output-block.tsx   # 'use client' or static — Displays result with CopyButton
  info-block.tsx     # Static — SEO-rich prose explaining the tool
  examples.ts        # Example[] presets loaded via ToolExampleBlock
```

Example loading uses the shared `createExampleHandler()` from
`components/tool/createExampleHandler.ts`: map field names to setters
(`createExampleHandler({ input: setInput, size: setSize })`) — never hand-write
`if ('x' in values)` guards or use `any`.

### Info Page Pattern (About, Contact, FAQ, Terms, Privacy)

```
src/app/<page>/page.tsx
├── export const metadata = getInfoPageMetadata('<slug>')  # from WithInfoPage
└── default component:
    └── <WithInfoPage slug="<slug>" [schemaType="about|contact|faq"] [faqItems={...}]>
        ...page-specific content...
```

`WithInfoPage` (components/page/WithInfoPage.tsx) renders the shared layout:
JSON-LD (globalSchema + page-type schema + breadcrumbSchema), `PageLayout` →
`PageHeader` → `PageContent`. `schemaType` selects the schema.org type
(`about`/`contact` replace WebPage; `faq` supplements it with FAQPage).

### Category / Tools Listing Pages

```
src/app/tools/page.tsx          # All tools grouped by category, 2-col card grid
  ├── Module-level schema for /tools listing
  ├── export metadata
  ├── Renders: category icon + heading/tool count + 2-col ToolCard grid per category

src/app/tools/[slug]/page.tsx   # Single category page (async, depends on params)
  ├── generateMetadata async
  ├── Schema computed inside component (depends on category from params)
  ├── Shows: ToolCard grid, About section (CategoryAbout), Popular Tools list
```

### Data Flow

1. Tools are **declared statically** in `src/constants/tools.ts` as `Tool[]`
2. Categories in `src/constants/categories.ts` as `Category[]`
3. All icons in `src/constants/icons.tsx` as `slug → ReactElement` maps (`toolIcons`, `categoryIcons`)
4. Page SEO in `src/constants/pages.ts` as `PageEntry[]`
5. The home page (`page.tsx`) groups tools by category using `getToolsByCategories()`
6. Each tool page resolves its tool via `findToolBySlug()` inside `WithToolPage` (metadata via `getToolPageMetadata()`)
7. Tool components operate purely client-side with `useState` — no data fetching for tools themselves
8. Heavy processing (minification) goes through `src/app/api/` POST routes
9. Unified SEO lookup (`getSeoByPath`) combines pages, tools, and categories from `allSeoData` in `utils/seo.ts`

## API Routes

| Route                     | Library                | Purpose                                                |
| ------------------------- | ---------------------- | ------------------------------------------------------ |
| `POST /api/minify-js`     | `@putout/minify`       | Minify JS with mangle/console/debugger/comment toggles |
| `POST /api/minify-css`    | `clean-css`            | Minify CSS with stats                                  |
| `POST /api/minify-html`   | `html-minifier-terser` | Minify HTML                                            |
| `POST /api/inline-css`    | `juice` + `prettier`   | Inline CSS into HTML, format result                    |
| `POST /api/unminify-code` | `prettier/standalone`  | Beautify HTML/CSS/JS/JSON (Edge Runtime)               |

All accept JSON body, return JSON. Error format: `{ error: string }` with appropriate HTTP status.

**Security**: `src/proxy.ts` (`config.matcher: '/api/:path*'`) guards all API routes — validates origin/referer against the production URL (and localhost:3000 in dev only) and enforces a 2MB body limit. Requests without a valid origin get 403, oversized bodies get 413. The `unminify-code` route additionally runs on Edge Runtime (`export const runtime = 'edge'`).

**Rate limiting & guard**: Every API route is wrapped in `withApiGuard()` from `src/utils/api.ts` — per-endpoint `rateLimit()` (default 30 req / 60s per IP, first `x-forwarded-for` entry → 429 + `Retry-After`), `TimeoutError` → 422, and safe 500s via `safeApiErrorMessage()`. Counters live in **Vercel KV (Upstash Redis)** via `@upstash/redis` using one pipelined request (`INCR` + `EXPIRE NX`), so limits are shared across all serverless/edge instances — not held in memory. The limiter **fails open** (allows requests) when Redis is not configured, so local dev and builds never break.

## Adding a New Tool

Required files to create/modify:

1. **`src/constants/tools.ts`** — Add `Tool` object to array
2. **`src/constants/icons.tsx`** — Map slug → icon element in `toolIcons`
3. **`src/components/tools/<slug>/`** — Create index.tsx, input-block.tsx, output-block.tsx, info-block.tsx
4. **`src/app/(tool)/<slug>/page.tsx`** — Create the thin shell: `export const metadata = getToolPageMetadata('<slug>')` and `<WithToolPage slug="<slug>"><ToolComponent /></WithToolPage>` (both from `@/components/page/WithToolPage`)
5. **`src/constants/links.tsx`** — Add to appropriate footer section

**Gotcha**: The tool slug must be identical across all locations. The directory name, `tools.ts` slug, `icons.tsx` key, page path, and any footer links must all match exactly.

## Conventions

- **Naming**: PascalCase for components, camelCase for variables/functions, kebab-case for directories/slugs
- **Imports**: `@/` alias for `./src/`. Always use `import type` for type-only imports
- **TypeScript**: Strict mode, `verbatimModuleSyntax`. JSDoc on all exported types/functions
- **JSX return type**: `JSX.Element` from React (import type)
- **React**: `<form onSubmit>` uses `SubmitEvent` type (from React), not `FormEvent`
- **CSS**: Tailwind v4 with `@theme` directive (no `tailwind.config.js`). Custom theme in `globals.css`
- **Formatting**: 2-space indent, single quotes, trailing commas, no semicolons (set by shared config)
- **Commit**: Conventional commits enforced by commitlint (`@commitlint/config-conventional`)
- **Git hooks**: Pre-push runs `format:check → tsc → lint → build` sequentially via Husky

## SEO & Metadata

- Every page exports `metadata: Metadata` using `buildMetadata()` from `utils/meta.ts`
- `buildMetadata()` deep-merges page-specific values with `SITE_METADATA` (which includes OG/Twitter/image defaults). For info pages, metadata strings are deduplicated via module-level variables shared with schema data.
- Schema.org JSON-LD is injected via `<JsonLd>` component at the page level using `globalSchema()` + `webPageSchema()` (or `aboutPageSchema`/`contactPageSchema`) + `breadcrumbSchema()` from `@vijayhardaha/schema-builder`
- `buildBreadcrumbs()` from `utils/breadcrumb.ts` supports optional `parents` array for multi-level breadcrumbs (e.g. Home > Category > Tool)
- Unified SEO data (`allSeoData`) in `utils/seo.ts` combines pages, tools, and categories for lookup via `getSeoByPath()`
- Sitemap auto-generated on build by `next-sitemap` (configured in `next-sitemap.config.js`)
- Google Analytics via `@next/third-parties/google`
- Vercel Analytics via `@vercel/analytics`

## Navigation & Menus

### Desktop Nav (`src/components/header/DesktopNav.tsx`)

- Category parent items are `<Link>` components pointing to `/tools/{category.slug}`
- Dropdown opens on hover via `onMouseEnter`/`onMouseLeave`

### Sidebar (mobile) (`src/components/header/sidebar/SidebarBody.tsx`)

- Accordion expand/collapse: category name is a `<Link>` to `/tools/{slug}`
- `PiCaretDownBold` caret button on the right toggles submenu, rotates 180° when expanded
- Uses CSS grid animation (`grid-rows-[0fr]` → `[1fr]`) for smooth expand/collapse

### Breadcrumb Patterns

- **Tool pages**: Home / {Category Name} / {Tool Name}
- **Category pages**: Home / Tools / {Category Name}
- **Common pages** (About, Contact, FAQ, Privacy, Terms, Tools listing): Home / {Page Name}
- **Home page**: No breadcrumb in schema

## Gotchas & Non-Obvious Facts

- **`src/proxy.ts`** is a Next.js 16 Proxy file convention. It runs before every `/api/*` request and handles origin validation + body size limits centrally. Don't duplicate that logic in individual route handlers.
- **Rate limiting** uses Vercel KV (Upstash Redis) via `@upstash/redis`, never in-memory. `rateLimit()` is async and **fails open** when Redis is unconfigured, so don't rely on it until you've linked Vercel KV / set the env vars. Credentials are read lazily from `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN` or `KV_REST_API_URL`/`KV_REST_API_TOKEN`.
- **Tests** use Vitest (`bun run test`). Colocated `__tests__/` directories sit next to the code they cover; route tests use `// @vitest-environment node`, component tests use jsdom + @testing-library/react.
- **`@vijayhardaha/dev-config`** is a shared private package that owns ESLint, Prettier, Commitlint, and tsconfig base configs. Don't modify their behavior at the project level unless you need project-specific overrides.
- **Tailwind v4** uses the new CSS-based config (`@theme` in `globals.css`), not the old `tailwind.config.js` JS approach.
- **`buildMetadata()`** uses a `mergeDeep()` function that overwrites arrays from source (not concat). This means if you pass `keywords` in page metadata, it replaces all global keywords.
- **Tool icons** are mapped in `icons.tsx` (`toolIcons`) and can easily get out of sync when adding tools. Always check `icons.tsx` after adding a tool.
- **Category icons** are also in `icons.tsx` (`categoryIcons`) — must be kept in sync with `categories.ts` slugs.
- **`SubmitEvent`** type is imported from React (`import type { SubmitEvent } from 'react'`), not the DOM global.
- **The build command** runs both `next build` AND `next-sitemap` — sitemap generation will fail if the build didn't complete successfully.
- **Schema.org data** uses `@vijayhardaha/schema-builder` package, which provides `personSchema`, `organizationSchema`, `webSiteSchema`, `webPageSchema`, `aboutPageSchema`, `contactPageSchema`, `breadcrumbSchema`, `softwareAppSchema`, and `JsonLd` React component.
- **`output: 'standalone'`** in next.config.ts means the build output includes a minimal `node_modules` for self-contained deployment.
- **`EntryContent`** (tool pages) picks the randomized "Other Tools" grid once on initial render via a `useRef` guard.
- **Schema constants** are defined at module level for static pages (tools, about, contact, faq, terms, privacy, tools listing) and inside the component for the dynamic category page (`/tools/[slug]`) which depends on `params`.
- **Unified SEO lookup** (`allSeoData` in `utils/seo.ts`) merges pages, tools, and categories into a single array — paths stored with leading slash. Use `getSeoByPath()` for lookups.
- **`Tool.title`** is the display name (was `Tool.name`), keep this in mind when referencing tool fields.

## Environment Variables

| Variable                   | Required | Description                             |
| -------------------------- | -------- | --------------------------------------- |
| `UPSTASH_REDIS_REST_URL`   | No\*     | Upstash Redis REST endpoint (preferred) |
| `UPSTASH_REDIS_REST_TOKEN` | No\*     | Upstash Redis REST token (preferred)    |
| `KV_REST_API_URL`          | No\*     | Vercel KV REST endpoint (fallback)      |
| `KV_REST_API_TOKEN`        | No\*     | Vercel KV REST token (fallback)         |

\* Only used for API rate limiting (`src/utils/api.ts`). Link **Storage → KV (Upstash Redis)** in the Vercel dashboard and the vars are injected automatically. The code prefers `UPSTASH_REDIS_REST_*` and falls back to `KV_REST_API_*`; both are read lazily. Rate limiting is inert (fails open) when neither pair is present — see `.env.example`.

## Deployment

- Live at **toolsbyvijay.vercel.app**
- Deploys to Vercel automatically (assumed from Vercel config + `@vercel/analytics`)
- Sitemap output: in production goes to `/vercel/output/static`, locally to `/public`
