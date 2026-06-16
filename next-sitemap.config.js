/**
 * ======================================================================
 * Next Sitemap Configuration
 * ======================================================================
 * Purpose: Generate sitemaps and robots.txt to help search engines
 *          discover and index site content.
 *          Use `npx next-sitemap` for local testing.
 * Docs:    https://github.com/iamvishnusankar/next-sitemap
 * ======================================================================
 */

const { createSitemapConfig } = require('@vijayhardaha/dev-config/next-sitemap');

const siteDomain = 'https://toolsbyvijay.vercel.app';

/**
 * All category slugs for dynamic category pages at /tools/:slug.
 * Keep in sync with src/constants/categories.ts.
 */
const CATEGORY_SLUGS = ['writing-editing', 'developer-suite', 'web-url', 'security-privacy', 'creative-generators'];

/** @type {import('next-sitemap').IConfig} */
const baseConfig = createSitemapConfig({
  siteUrl: siteDomain,
  outDir: process.env.NODE_ENV === 'production' ? '/vercel/output/static' : './public',
});

/**
 * Generate a sitemap entry with default changefreq, priority, and lastmod.
 *
 * @param {string} loc - The URL path.
 *
 * @returns {import('next-sitemap').ISitemapField} A sitemap entry object.
 */
function sitemapEntry(loc) {
  const lastmod = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
  return { loc, changefreq: 'weekly', priority: 0.7, lastmod };
}

/**
 * Additional paths to include in the sitemap that the crawler may not
 * discover automatically (e.g., dynamic category pages, tools listing).
 */
const additionalPaths = [...CATEGORY_SLUGS.map((slug) => sitemapEntry(`/tools/${slug}`))];

/** @type {import('next-sitemap').IConfig} */
const config = { ...baseConfig, ...{ additionalPaths: async () => additionalPaths } };

module.exports = config;
