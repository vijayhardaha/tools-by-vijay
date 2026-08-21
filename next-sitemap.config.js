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

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createSitemapConfig } from '@vijayhardaha/dev-config/next-sitemap';

const siteDomain = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolsbyvijay.vercel.app';

// next-sitemap loads this config with plain require (no TS transpilation),
// so the shared categories constant cannot be imported directly. Read the
// source instead and extract the slug literals — single source of truth,
// no manual list to keep in sync.
const categoriesPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'src/constants/categories.ts');
const categoriesSource = fs.readFileSync(categoriesPath, 'utf8');
const CATEGORY_SLUGS = [...categoriesSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);

if (CATEGORY_SLUGS.length === 0) {
  throw new Error(`No category slugs found in ${categoriesPath} — check the slug literal format.`);
}

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

export default config;
