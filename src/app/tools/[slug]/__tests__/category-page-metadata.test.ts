// @vitest-environment jsdom
/**
 * ========================================================================
 * Tests: generateMetadata for the /tools/[slug] category page
 * ========================================================================
 * Purpose: Regression tests proving unknown category slugs are marked
 *          noindex instead of inheriting the home page title and canonical
 *          (soft-404 risk), while known slugs keep full metadata.
 * ========================================================================
 */

import { describe, expect, it } from 'vitest';

import { getAllCategories } from '@/utils/categories';
import { siteUrl } from '@/utils/seo';

import { generateMetadata } from '../page';

describe('generateMetadata (category page)', () => {
  it('marks unknown category slugs as noindex instead of inheriting home identity', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'not-a-real-category' }) });

    expect(metadata.robots).toEqual({ index: false });
    expect(metadata.alternates).toBeUndefined();
  });

  it('builds full metadata with a canonical URL for known category slugs', async () => {
    const slug = getAllCategories()[0].slug;
    const metadata = await generateMetadata({ params: Promise.resolve({ slug }) });

    expect(metadata.alternates?.canonical).toBe(`${siteUrl()}/tools/${slug}`);
    expect(metadata.robots).toEqual({ index: true, follow: true });
  });
});
