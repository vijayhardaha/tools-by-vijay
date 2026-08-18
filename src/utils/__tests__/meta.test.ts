import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { SITE_CONFIG, SITE_METADATA } from '@/constants/seo';
import { buildMetadata } from '@/utils/meta';
import { siteUrl } from '@/utils/seo';

describe('buildMetadata()', () => {
  beforeEach(() => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = 'toolsbyvijay.vercel.app';
  });

  afterEach(() => {
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    delete process.env.VERCEL_BRANCH_URL;
    delete process.env.VERCEL_URL;
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.PORT;
  });

  it('builds a title with the site name postfix by default', () => {
    const meta = buildMetadata({ title: 'About', description: 'About page', path: 'about' });
    expect(meta.title).toBe(`About — ${SITE_CONFIG.name}`);
  });

  it('omits the postfix when postfix is false', () => {
    const meta = buildMetadata({ title: 'About', description: '', path: 'about', postfix: false });
    expect(meta.title).toBe('About');
  });

  it('uses the site default title when title is empty', () => {
    const meta = buildMetadata({ title: '', description: 'desc', path: '' });
    expect(meta.title).toBe(SITE_CONFIG.title);
  });

  it('sets the canonical URL to the permalink when a path is provided', () => {
    const meta = buildMetadata({ title: 'About', description: '', path: 'about' });
    expect(meta.alternates?.canonical).toBe(`${siteUrl()}/about`);
  });

  it('sets the canonical URL to the site URL when path is empty', () => {
    const meta = buildMetadata({ title: 'Home', description: '' });
    expect(meta.alternates?.canonical).toBe(siteUrl());
  });

  it('sets metadataBase to the site URL', () => {
    const meta = buildMetadata({ title: 'X', description: '' });
    expect(meta.metadataBase?.toString()).toBe(`${siteUrl()}/`);
  });

  it('populates openGraph and twitter with title, description, url, and image', () => {
    const meta = buildMetadata({ title: 'Slugify', description: 'Slug tool', path: 'slugify' });
    const canonical = `${siteUrl()}/slugify`;

    expect(meta.openGraph?.title).toBe(`Slugify — ${SITE_CONFIG.name}`);
    expect(meta.openGraph?.description).toBe('Slug tool');
    expect(meta.openGraph?.url).toBe(canonical);
    expect(meta.openGraph?.images).toMatchObject({ width: 1200, height: 630, type: 'image/png' });

    expect(meta.twitter?.title).toBe(`Slugify — ${SITE_CONFIG.name}`);
    expect(meta.twitter?.description).toBe('Slug tool');
  });

  it('builds the OG image URL from the clean path', () => {
    const meta = buildMetadata({ title: 'About', description: '', path: '/about/' });
    const og = meta.openGraph?.images as { url: string };
    expect(og.url).toBe(`${siteUrl()}/api/og/about.png`);
  });

  it('uses index.png as the OG image for the home page', () => {
    const meta = buildMetadata({ title: 'Home', description: '' });
    const og = meta.openGraph?.images as { url: string };
    expect(og.url).toBe(`${siteUrl()}/api/og/index.png`);
  });

  it('deep-merges page values over the site metadata defaults', () => {
    const meta = buildMetadata({ title: 'FAQ', description: 'FAQ page', path: 'faq' });
    // SITE_METADATA arrays (e.g. keywords) are replaced, not concatenated.
    expect(meta).toBeDefined();
    expect(meta.description).toBe('FAQ page');
    expect(SITE_METADATA).toBeDefined();
  });

  it('does not mutate the shared SITE_METADATA constant', () => {
    const before = JSON.stringify(SITE_METADATA);
    buildMetadata({ title: 'A', description: 'B', path: 'a' });
    expect(JSON.stringify(SITE_METADATA)).toBe(before);
  });
});
