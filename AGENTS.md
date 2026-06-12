# AGENTS.md — Tools by Vijay Hardaha

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack for dev)
- **Language**: TypeScript 6
- **Styling**: Tailwind CSS v4 (`tailwindcss` + `@tailwindcss/postcss` + `tw-animate-css`)
- **Package manager**: Bun (v1+)
- **Node**: v24 (`.nvmrc`)
- **Deployment**: Vercel (`output: 'standalone'`)

## Essential Commands

| Command                | What it does                    |
| ---------------------- | ------------------------------- |
| `bun run dev`          | Start dev server with Turbopack |
| `bun run build`        | `next build && next-sitemap`    |
| `bun run lint`         | ESLint                          |
| `bun run lint:fix`     | ESLint with auto-fix            |
| `bun run format`       | Prettier write                  |
| `bun run format:check` | Prettier check                  |
| `bun run tsc`          | `tsc --noEmit`                  |
| `bun run prepare`      | Husky install                   |

All config is extended from `@vijayhardaha/dev-config` (ESLint, Prettier, Commitlint, tsconfig base).

## Code Organization

```
src/
  app/                    # Next.js App Router pages & API routes
    tools/<slug>/page.tsx # Tool page (static SSR, not 'use client')
    api/<name>/route.ts   # API route handlers
    layout.tsx            # Root layout (fonts, GA, Vercel Analytics)
    page.tsx              # Home page (categorized tool cards)
    about/ & contact/     # Static info pages
  components/
    tools/<tool-name>/    # Each tool: index.tsx, input-block.tsx, output-block.tsx, info-block.tsx
    ui/                   # Reusable primitives (card, button, input, textarea, select, checkbox, etc.)
    page/                 # Layout helpers (PageLayout, PageHeader, PageContent, EntryWithSidebar, ToolsListWidget)
    header/               # Header + sidebar drawer
    footer/               # Footer
    home/                 # ToolCard (home page grid)
    shared/               # VercelAnalytics
  constants/
    tools.ts              # Tool[] data (name, slug, description, seoTitle, seoDescription, category)
    toolsCategories.ts    # Category[] data
    toolIcons.tsx         # slug → React icon mapping (must be manually kept in sync)
    seo.ts                # SITE_CONFIG, SITE_METADATA, GOOGLE_ANALYTICS_ID
    footerLinks.ts        # Footer nav link groups
    socialLinks.ts        # SocialMediaLink[]
  utils/
    tools.ts              # Tool helpers: getAllTools, findToolBySlug, getToolsByCategory, getIconForTool, etc.
    categories.ts         # Category helpers: getAllCategories, getCategoryBySlug, etc.
    meta.ts               # buildMetadata() — generates Next.js Metadata with OG/Twitter card merging
    seo.ts                # siteUrl(), getPermaLink()
    schema.ts             # Schema.org JSON-LD (breadcrumbs, person, org, website schemas)
    fonts.ts              # Work Sans + Geist Mono font config
    classnames.ts         # cn() utility (clsx + twMerge)
  types/index.ts          # Tool, Category, SocialMediaLink interfaces
  styles/globals.css      # Tailwind v4 CSS with custom theme
```

## Architecture & Control Flow

### Tool Page Pattern (every tool follows this exactly)

```
src/app/tools/<slug>/page.tsx
├── findToolBySlug('<slug>')       # Get Tool from constants
├── buildMetadata({...})            # Generate metadata (seo title/desc, path, canonical, OG)
├── export metadata                 # Next.js metadata export
├── schemaData (JsonLd)             # globalSchema + webPageSchema + breadcrumbSchema
├── PageLayout                      # Header + main wrapper + Footer
│   ├── PageHeader                  # Colored gradient header with icon, title, description
│   ├── PageContent
│   │   └── EntryWithSidebar        # 4-col article + 2-col sidebar (randomized category widgets)
│   │       └── ToolComponent        # The actual interactive tool
```

**Key rule**: Tool pages are **static SSR** (no `'use client'`). Only the tool component itself and its sub-components are `'use client'`.

### Tool Component Pattern (client-side)

```
src/components/tools/<tool-name>/
  index.tsx          # 'use client' — useState for input/output/options, handles submit/clear/reset
  input-block.tsx    # 'use client' — Form with Input/Textarea, checkboxes/selects, action buttons
  output-block.tsx   # 'use client' or static — Displays result with CopyButton
  info-block.tsx     # Static — SEO-rich prose explaining the tool
```

### Data Flow

1. Tools are **declared statically** in `src/constants/tools.ts` as `Tool[]`
2. Categories in `src/constants/toolsCategories.ts` as `Category[]`
3. Icons in `src/constants/toolIcons.tsx` as `slug → ReactElement` map
4. The home page (`page.tsx`) groups tools by category using `getToolsByCategories()`
5. Each tool page reads its data via `findToolBySlug()` at module scope
6. Tool components operate purely client-side with `useState` — no data fetching for tools themselves
7. Heavy processing (minification) goes through `src/app/api/` POST routes

## API Routes

| Route                     | Library                | Purpose                                                |
| ------------------------- | ---------------------- | ------------------------------------------------------ |
| `POST /api/minify-js`     | `@putout/minify`       | Minify JS with mangle/console/debugger/comment toggles |
| `POST /api/minify-css`    | `clean-css`            | Minify CSS with stats                                  |
| `POST /api/minify-html`   | `html-minifier-terser` | Minify HTML                                            |
| `POST /api/inline-css`    | `juice` + `prettier`   | Inline CSS into HTML, format result                    |
| `POST /api/unminify-code` | `prettier/standalone`  | Beautify HTML/CSS/JS/JSON                              |

All accept JSON body, return JSON. Error format: `{ error: string }` with appropriate HTTP status.

**Security**: `src/proxy.ts` (`config.matcher: '/api/:path*'`) guards all API routes — validates origin/referer against the production URL (and localhost:3000 in dev only) and enforces a 2MB body limit. Requests without a valid origin get 403, oversized bodies get 413. The `unminify-code` route additionally runs on Edge Runtime (`export const runtime = 'edge'`).

## Adding a New Tool

Required files to create/modify:

1. **`src/constants/tools.ts`** — Add `Tool` object to array
2. **`src/constants/toolIcons.tsx`** — Map slug → icon element
3. **`src/components/tools/<slug>/`** — Create index.tsx, input-block.tsx, output-block.tsx, info-block.tsx
4. **`src/app/tools/<slug>/page.tsx`** — Create page with standard boilerplate
5. **`src/constants/footerLinks.ts`** — Add to appropriate footer section

**Gotcha**: The tool slug must be identical across all 5 locations. The directory name, `tools.ts` slug, `toolIcons.tsx` key, page path, and any footer links must all match exactly.

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
- `buildMetadata()` deep-merges page-specific values with `SITE_METADATA` (which includes OG/Twitter/image defaults)
- Schema.org JSON-LD is injected via `<JsonLd>` component at the page level using `globalSchema()`, `webPageSchema()`, and `breadcrumbSchema()` from `@vijayhardaha/schema-builder`
- Sitemap auto-generated on build by `next-sitemap` (configured in `next-sitemap.config.js`)
- Google Analytics via `@next/third-parties/google`
- Vercel Analytics via `@vercel/analytics`

## Gotchas & Non-Obvious Facts

- **`src/proxy.ts`** is a Next.js 16 Proxy file convention. It runs before every `/api/*` request and handles origin validation + body size limits centrally. Don't duplicate that logic in individual route handlers.
- **No test framework** exists in this project. Don't look for `jest`, `vitest`, or `playwright` config.
- **`@vijayhardaha/dev-config`** is a shared private package that owns ESLint, Prettier, Commitlint, and tsconfig base configs. Don't modify their behavior at the project level unless you need project-specific overrides.
- **Tailwind v4** uses the new CSS-based config (`@theme` in `globals.css`), not the old `tailwind.config.js` JS approach.
- **`buildMetadata()`** uses a `mergeDeep()` function that overwrites arrays from source (not concat). This means if you pass `keywords` in page metadata, it replaces all global keywords.
- **Tool icons** are manually mapped and can easily get out of sync when adding tools. Always check `toolIcons.tsx` after adding a tool.
- **`SubmitEvent`** type is imported from React (`import type { SubmitEvent } from 'react'`), not the DOM global.
- **The build command** runs both `next build` AND `next-sitemap` — sitemap generation will fail if the build didn't complete successfully.
- **Schema.org data** uses `@vijayhardaha/schema-builder` package, which provides `personSchema`, `organizationSchema`, `webSiteSchema`, etc.
- **`output: 'standalone'`** in next.config.ts means the build output includes a minimal `node_modules` for self-contained deployment.
- **Sidebar widgets** `(EntryWithSidebar)` randomly picks two different categories to display — this happens only on initial render via a `useRef` guard.

## Deployment

- Live at **toolsbyvijay.vercel.app**
- Deploys to Vercel automatically (assumed from Vercel config + `@vercel/analytics`)
- Sitemap output: in production goes to `/vercel/output/static`, locally to `/public`
