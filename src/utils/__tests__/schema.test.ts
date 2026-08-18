import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { SITE_CONFIG } from '@/constants/seo';
import { globalSchema } from '@/utils/schema';

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
