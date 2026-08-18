#!/usr/bin/env bun
/**
 * Build llms.txt from the static site constants.
 * Output: public/llms.txt
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import categories from '../src/constants/categories';
import tools from '../src/constants/tools';

// ── Config ─────────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = path.resolve(__dirname, '..', 'public', 'llms.txt');
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolsbyvijay.vercel.app';

/**
 * Assemble the llms.txt markdown content from the site constants.
 *
 * @returns {string} The complete llms.txt markdown document.
 */
function buildLlmstxt(): string {
  const lines: string[] = [];

  lines.push('# Tools by Vijay');
  lines.push('');
  lines.push(
    '> Online tools to help developers and workers work faster and smarter. '
      + 'Boost your productivity with free, browser-based utilities.'
  );
  lines.push('');
  lines.push(
    'This site hosts '
      + tools.length
      + ' tools organised into '
      + categories.length
      + ' categories. Every tool runs entirely in the browser, so your '
      + 'input never leaves your device and results are instant.'
  );
  lines.push('');

  lines.push('## Sitemaps');
  lines.push('');
  lines.push('[XML Sitemap](' + SITE_URL + '/sitemap.xml): Includes all crawlable and indexable pages.');
  lines.push('');

  lines.push('## Pages');
  lines.push('');
  lines.push('- ' + SITE_URL + '/ (Home)');
  lines.push('- ' + SITE_URL + '/tools -- All free online tools (' + tools.length + ')');
  lines.push('- ' + SITE_URL + '/about -- About Vijay Hardaha');
  lines.push('- ' + SITE_URL + '/contact -- Contact');
  lines.push('- ' + SITE_URL + '/faq -- Frequently asked questions (FAQPage schema)');
  lines.push('- ' + SITE_URL + '/privacy-policy -- Privacy policy');
  lines.push('- ' + SITE_URL + '/terms-conditions -- Terms and conditions');
  lines.push('');

  lines.push('## Categories (' + categories.length + ')');
  for (const category of categories) {
    const count = tools.filter((tool) => tool.category === category.slug).length;
    lines.push(
      '- '
        + SITE_URL
        + '/tools/'
        + category.slug
        + ' -- '
        + category.title
        + ' ('
        + count
        + (count > 1 ? ' tools)' : ' tool)')
    );
  }
  lines.push('');

  lines.push('## Tools (' + tools.length + ' tools)');
  lines.push('');
  for (const tool of tools) {
    const category = categories.find((item) => item.slug === tool.category);
    lines.push('- **' + tool.title + '**');
    lines.push('  - Description: ' + tool.description);
    lines.push('  - Category: ' + (category?.title ?? tool.category));
    lines.push('  - URL: ' + SITE_URL + '/' + tool.slug);
    lines.push('');
  }

  lines.push('## Navigation');
  lines.push('- **All Tools** -- /tools');
  lines.push('- **Categories** -- /tools (dropdown with all links)');
  lines.push('- **About** -- /about');
  lines.push('- **Contact** -- /contact');
  lines.push('- **FAQ** -- /faq');
  lines.push('');

  lines.push('## URL Patterns');
  lines.push('- ' + SITE_URL + '/{tool-slug}');
  lines.push('- ' + SITE_URL + '/tools/{category-slug}');
  lines.push('- ' + SITE_URL + '/tools');
  lines.push('- ' + SITE_URL + '/about');
  lines.push('- ' + SITE_URL + '/contact');
  lines.push('- ' + SITE_URL + '/faq');
  lines.push('- ' + SITE_URL + '/privacy-policy');
  lines.push('- ' + SITE_URL + '/terms-conditions');
  lines.push('');

  lines.push('---');
  lines.push('');
  lines.push('Generated at: ' + new Date().toISOString());
  lines.push('Total tools: ' + tools.length);

  return lines.join('\n');
}

/**
 * Entry point: read the constants, generate llms.txt, and write it to public/.
 *
 * @returns {void} Writes public/llms.txt to disk.
 */
function main(): void {
  console.log('Building llms.txt from ' + tools.length + ' tools, ' + categories.length + ' categories...');

  const content = buildLlmstxt();
  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');

  console.log('llms.txt written to ' + OUTPUT_FILE + ' (' + content.length + ' bytes)');
}

main();
