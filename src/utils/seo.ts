import categories from '@/constants/categories';
import { pages } from '@/constants/pages';
import tools from '@/constants/tools';

/**
 * Return a normalized base URL for the running application.
 *
 * Preference order:
 * 1. `process.env.VERCEL_PROJECT_PRODUCTION_URL`
 * 2. `process.env.VERCEL_BRANCH_URL`
 * 3. `process.env.VERCEL_URL`
 * 4. Fallback to `http://localhost:{PORT}` where PORT defaults to 3000
 *
 * Normalization ensures a scheme is present and removes a trailing slash.
 *
 * @returns {string} The normalized base URL.
 *
 * @example
 * // When no Vercel env vars are set and PORT is 3000
 * siteUrl() // -> 'http://localhost:3000'
 */
export const siteUrl = (): string => {
  const candidates = [
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_BRANCH_URL,
    process.env.VERCEL_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
  ];

  const url = candidates.find(Boolean) ?? `http://localhost:${process.env.PORT || 3000}`;
  const cleaned = url.trim().replace(/\/+$/, '');

  return /^https?:\/\//i.test(cleaned) ? cleaned : `https://${cleaned}`;
};

/**
 * Normalizes a path for canonical usage.
 *
 * - Removes leading and trailing slashes only (preserves slashes in middle)
 * - Returns empty string for root
 *
 * @param {string} [path] - The input path or slug.
 *
 * @returns {string} A clean relative path without leading/trailing slash.
 *
 * @example
 * cleanPath("about")                    // "about"
 * cleanPath("/about")                   // "about"
 * cleanPath("/about/")                  // "about"
 * cleanPath("/tools/category-name/")    // "tools/category-name"
 * cleanPath("")                          // ""
 * cleanPath("/")                         // ""
 */
export const cleanPath = (path: string = ''): string => {
  return path.trim().replace(/^\/+/, '').replace(/\/+$/, '');
};

/**
 * Generates a fully qualified permalink.
 *
 * Combines the application's base URL with a normalized path.
 * Leading and trailing slashes in the path are handled safely.
 * If no path is provided, the base URL is returned.
 *
 * @param {string} [path] - Optional path segment to append to the base URL.
 *
 * @returns {string} The permalink absolute URL.
 *
 * @example
 * // Assuming siteUrl() returns "https://example.com"
 * getPermaLink("about") // -> "https://example.com/about"
 * getPermaLink("/about") // -> "https://example.com/about"
 * getPermaLink("") // -> "https://example.com"
 */
export const getPermaLink = (path: string = ''): string => {
  return [siteUrl(), cleanPath(path)].filter(Boolean).join('/');
};

// ==============================================================================
// Unified SEO Data Lookup — combines info pages, tools, and categories
// ==============================================================================

/**
 * Convert a slug into a clean path (no leading/trailing slashes).
 *
 * Uses cleanPath to strip any accidental leading/trailing slashes,
 * preventing issues like `//` when slugs already contain slashes.
 *
 * @param {string} slug - The URL slug (empty for home).
 *
 * @returns {string} The clean path.
 *
 * @example
 * slugToPath('')              // ''
 * slugToPath('about')         // 'about'
 * slugToPath('/about')        // 'about'
 * slugToPath('/about/')       // 'about'
 * slugToPath('/tools/category-name/') // 'tools/category-name'
 */
const slugToPath = (slug: string): string => {
  return cleanPath(slug);
};

/**
 * Interface representing combined SEO data for any page.
 *
 * Provides both display-oriented fields (title, description) and
 * SEO-oriented fields (seoTitle, seoDescription, path) plus the
 * raw slug for programmatic use.
 *
 * @type {SeoData}
 * @property {string} slug - Clean URL slug (e.g. 'about', 'tools', '' for home)
 * @property {string} path - Clean path without leading slash (e.g. 'about', 'tools', '' for home)
 * @property {string} title - Display title (tool title / category title / page name)
 * @property {string} description - Display description
 * @property {string} seoTitle - SEO-optimized title for metadata
 * @property {string} seoDescription - SEO-optimized description for metadata
 */
export interface SeoData {
  slug: string;
  path: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

/**
 * Merged constant of SEO data for all pages across the site, combining:
 *
 * - Info pages (about, contact, faq, privacy, terms, tools listing)
 * - Individual tool pages (/{slug})
 * - Category pages (/tools/{slug})
 * - Home page (/)
 *
 * Paths are stored WITHOUT leading slash (e.g. 'about', 'tools/writing-editing').
 * The getSeoByPath() function handles normalization for both with and without slash.
 *
 * Built once at module load time for efficient lookups.
 */
const allSeoData: SeoData[] = [
  ...pages.map((page) => ({
    slug: page.slug,
    path: slugToPath(page.slug),
    title: page.title,
    description: page.description,
    seoTitle: page.seoTitle,
    seoDescription: page.seoDescription,
  })),
  ...tools.map((tool) => ({
    slug: tool.slug,
    path: slugToPath(tool.slug),
    title: tool.title,
    description: tool.description,
    seoTitle: tool.seoTitle,
    seoDescription: tool.seoDescription,
  })),
  ...categories.map((category) => ({
    slug: category.slug,
    path: slugToPath(`tools/${category.slug}`),
    title: category.title,
    description: category.description,
    seoTitle: category.seoTitle,
    seoDescription: category.seoDescription,
  })),
];

/**
 * Look up SEO data for a page by its URL path.
 *
 * Accepts paths with or without a leading slash — normalizes automatically.
 * All seo paths are stored WITHOUT leading slash (via slugToPath), so
 * normalization strips any slashes before comparison.
 *
 * @param {string} path - The URL path to look up (e.g. '/about', 'about', '/slugify').
 *
 * @returns {SeoData | null} The matching SEO data, or null if not found.
 *
 * @example
 * getSeoByPath('/about')  // works
 * getSeoByPath('about')   // also works
 * getSeoByPath('/slugify')
 * // => { slug: 'slugify', path: 'slugify', title: 'Slugify', seoTitle: 'Slugify Tool...', ... }
 */
export const getSeoByPath = (path: string): SeoData | null => {
  const normalized = cleanPath(path);
  return allSeoData.find((page) => page.path === normalized) || null;
};
