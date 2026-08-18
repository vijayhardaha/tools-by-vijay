import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { cleanPath, getPermaLink, getSeoByPath, siteUrl } from '@/utils/seo';

describe('siteUrl()', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it('falls back to localhost with default port when no env vars are set', async () => {
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    delete process.env.VERCEL_BRANCH_URL;
    delete process.env.VERCEL_URL;
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.PORT;
    const { siteUrl: url } = await import('@/utils/seo');
    expect(url()).toBe('http://localhost:3000');
  });

  it('uses PORT env var in the localhost fallback', async () => {
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    delete process.env.VERCEL_BRANCH_URL;
    delete process.env.VERCEL_URL;
    delete process.env.NEXT_PUBLIC_SITE_URL;
    process.env.PORT = '4242';
    const { siteUrl: url } = await import('@/utils/seo');
    expect(url()).toBe('http://localhost:4242');
  });

  it('prefers VERCEL_PROJECT_PRODUCTION_URL over other candidates', async () => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = 'toolsbyvijay.vercel.app';
    process.env.VERCEL_BRANCH_URL = 'branch.vercel.app';
    const { siteUrl: url } = await import('@/utils/seo');
    expect(url()).toBe('https://toolsbyvijay.vercel.app');
  });

  it('normalizes a value without a scheme by prepending https://', async () => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = 'example.com/';
    const { siteUrl: url } = await import('@/utils/seo');
    expect(url()).toBe('https://example.com');
  });

  it('keeps an existing http:// scheme and strips a trailing slash', async () => {
    process.env.VERCEL_BRANCH_URL = 'http://localhost:3000/';
    const { siteUrl: url } = await import('@/utils/seo');
    expect(url()).toBe('http://localhost:3000');
  });
});

describe('cleanPath()', () => {
  it('trims leading and trailing slashes', () => {
    expect(cleanPath('/about/')).toBe('about');
    expect(cleanPath('///tools/writing-editing///')).toBe('tools/writing-editing');
  });

  it('preserves inner slashes for nested paths', () => {
    expect(cleanPath('/tools/category-name/')).toBe('tools/category-name');
  });

  it('returns an empty string for root-like input', () => {
    expect(cleanPath('')).toBe('');
    expect(cleanPath('/')).toBe('');
  });

  it('defaults to an empty string when called with no argument', () => {
    expect(cleanPath()).toBe('');
  });

  it('trims surrounding whitespace', () => {
    expect(cleanPath('  about  ')).toBe('about');
  });
});

describe('getPermaLink()', () => {
  it('joins the site URL with a clean path', () => {
    expect(getPermaLink('about')).toBe(`${siteUrl()}/about`);
  });

  it('handles a path with leading/trailing slashes', () => {
    expect(getPermaLink('/tools/web-url/')).toBe(`${siteUrl()}/tools/web-url`);
  });

  it('returns just the site URL for an empty path', () => {
    expect(getPermaLink('')).toBe(siteUrl());
    expect(getPermaLink('/')).toBe(siteUrl());
  });

  it('defaults to the site URL when no path is passed', () => {
    expect(getPermaLink()).toBe(siteUrl());
  });
});

describe('getSeoByPath()', () => {
  it('finds a tool page by path with a leading slash', () => {
    const seo = getSeoByPath('/slugify');
    expect(seo?.slug).toBe('slugify');
    expect(seo?.path).toBe('slugify');
  });

  it('finds a tool page by path without a leading slash', () => {
    const seo = getSeoByPath('slugify');
    expect(seo?.slug).toBe('slugify');
  });

  it('finds an info page', () => {
    expect(getSeoByPath('/about')?.title).toBeDefined();
  });

  it('finds a category page under the tools prefix', () => {
    const seo = getSeoByPath('/tools/web-url');
    expect(seo?.slug).toBe('web-url');
    expect(seo?.path).toBe('tools/web-url');
  });

  it('returns null for an unknown path', () => {
    expect(getSeoByPath('/does-not-exist')).toBeNull();
  });

  it('normalizes slashes before lookup', () => {
    expect(getSeoByPath('//slugify//')).not.toBeNull();
  });
});
