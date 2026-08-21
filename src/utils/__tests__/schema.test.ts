import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { SITE_CONFIG } from '@/constants/seo';
import { aboutPageSchema, contactPageSchema, globalSchema, webPageSchema } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';

describe('globalSchema()', () => {
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

  it('returns the three global entities: Person, Organization, WebSite', () => {
    const schema = globalSchema();
    expect(schema).toHaveLength(3);
    expect(schema.map((entity) => entity['@type'])).toEqual(['Person', 'Organization', 'WebSite']);
  });

  it('populates the Organization with the configured name and description', () => {
    const [person, organization] = globalSchema();
    expect(person['@type']).toBe('Person');
    expect(organization).toMatchObject({
      '@type': 'Organization',
      name: SITE_CONFIG.organization.name,
      description: SITE_CONFIG.organization.description,
      foundingDate: '2025',
    });
  });

  it('populates the WebSite entity with the site name', () => {
    const [, , website] = globalSchema();
    expect(website['@type']).toBe('WebSite');
    expect(website).toMatchObject({
      name: SITE_CONFIG.name,
      alternateName: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
    });
  });
});

describe('page schema wrappers (webPageSchema/aboutPageSchema/contactPageSchema)', () => {
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

  it('uses the page OG image URL instead of the non-existent preview.png', () => {
    const schema = webPageSchema({ rootUrl: siteUrl(), path: 'about', breadcrumb: true }, { name: 'About' });

    expect(schema['image']).toEqual({
      '@type': 'ImageObject',
      url: `${siteUrl()}/api/og/about.png`,
      width: '1200',
      height: '630',
    });
    expect(JSON.stringify(schema)).not.toContain('preview.png');
  });

  it('maps the home page path to the index OG image', () => {
    const schema = webPageSchema({ rootUrl: siteUrl(), path: '' }, {});

    expect((schema['image'] as { url: string }).url).toBe(`${siteUrl()}/api/og/index.png`);
  });

  it('keeps caller overrides merged alongside the image override', () => {
    const schema = webPageSchema({ rootUrl: siteUrl(), path: 'slugify' }, { name: 'Slugify Tool' });

    expect(schema['name']).toBe('Slugify Tool');
  });

  it('applies the OG image override to about and contact schemas', () => {
    const about = aboutPageSchema({ rootUrl: siteUrl(), path: 'about', breadcrumb: true }, { name: 'About' });
    const contact = contactPageSchema({ rootUrl: siteUrl(), path: 'contact', breadcrumb: true }, { name: 'Contact' });

    expect(about['@type']).toBe('AboutPage');
    expect((about['image'] as { url: string }).url).toBe(`${siteUrl()}/api/og/about.png`);
    expect(contact['@type']).toBe('ContactPage');
    expect((contact['image'] as { url: string }).url).toBe(`${siteUrl()}/api/og/contact.png`);
    expect(JSON.stringify([about, contact])).not.toContain('preview.png');
  });
});
