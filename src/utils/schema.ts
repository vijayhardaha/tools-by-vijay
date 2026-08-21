import type { WebPageOptions } from '@vijayhardaha/schema-builder';
import {
  aboutPageSchema as buildAboutPageSchema,
  contactPageSchema as buildContactPageSchema,
  organizationSchema,
  personSchema,
  webPageSchema as buildWebPageSchema,
  webSiteSchema,
} from '@vijayhardaha/schema-builder';

import { SITE_CONFIG } from '@/constants/seo';
import { buildOgImageUrl } from '@/utils/meta';
import { siteUrl } from '@/utils/seo';

/**
 * Build a list of global Schema.org entities that appear on every page.
 *
 * Includes Person, Organization, and WebSite schema.
 *
 * @returns {Record<string, unknown>[]} An array of schema objects for global use.
 */
export function globalSchema(): Record<string, unknown>[] {
  const rootUrl = siteUrl();
  return [
    personSchema({ rootUrl }),
    organizationSchema(
      { rootUrl },
      { name: SITE_CONFIG.organization.name, description: SITE_CONFIG.organization.description, foundingDate: '2025' }
    ),
    webSiteSchema(
      { rootUrl },
      { name: SITE_CONFIG.name, alternateName: SITE_CONFIG.name, description: SITE_CONFIG.description }
    ),
  ];
}

/**
 * Overrides accepted by the schema-builder WebPage function.
 */
type WebPageOverrides = NonNullable<Parameters<typeof buildWebPageSchema>[1]>;

/**
 * Overrides accepted by the schema-builder AboutPage function.
 */
type AboutPageOverrides = NonNullable<Parameters<typeof buildAboutPageSchema>[1]>;

/**
 * Overrides accepted by the schema-builder ContactPage function.
 */
type ContactPageOverrides = NonNullable<Parameters<typeof buildContactPageSchema>[1]>;

/**
 * Build the `image` override pointing a page schema at the page's real OG image.
 *
 * `@vijayhardaha/schema-builder` defaults the WebPage/AboutPage/ContactPage
 * image to `{path}/preview.png`, which does not exist on this site. The
 * dynamic OG route serves a matching 1200×630 PNG for every page, so all
 * page schemas reuse that URL instead.
 *
 * @param {string} path - The page path (e.g. 'about', '' for home).
 *
 * @returns {Record<string, unknown>} The `image` property override.
 */
function ogImageOverride(path: string): Record<string, unknown> {
  return { image: { '@type': 'ImageObject', url: buildOgImageUrl(path), width: '1200', height: '630' } };
}

/**
 * Build a WebPage schema entity whose image is the page's OG image.
 *
 * Wraps the schema-builder `webPageSchema`, replacing its non-existent
 * `/preview.png` image with the page's dynamic OG image URL.
 *
 * @param {WebPageOptions} options - Page metadata including URL and path.
 * @param {Record<string, unknown>} [overrides] - Optional property overrides merged into the schema.
 *
 * @returns {Record<string, unknown>} A WebPage schema entity.
 */
export function webPageSchema(
  options: WebPageOptions,
  overrides: Record<string, unknown> = {}
): Record<string, unknown> {
  return buildWebPageSchema(options, { ...ogImageOverride(options.path), ...overrides } as WebPageOverrides);
}

/**
 * Build an AboutPage schema entity whose image is the page's OG image.
 *
 * Wraps the schema-builder `aboutPageSchema`, replacing its non-existent
 * `/preview.png` image with the page's dynamic OG image URL.
 *
 * @param {WebPageOptions} options - Page metadata including URL and path.
 * @param {Record<string, unknown>} [overrides] - Optional property overrides merged into the schema.
 *
 * @returns {Record<string, unknown>} An AboutPage schema entity.
 */
export function aboutPageSchema(
  options: WebPageOptions,
  overrides: Record<string, unknown> = {}
): Record<string, unknown> {
  return buildAboutPageSchema(options, { ...ogImageOverride(options.path), ...overrides } as AboutPageOverrides);
}

/**
 * Build a ContactPage schema entity whose image is the page's OG image.
 *
 * Wraps the schema-builder `contactPageSchema`, replacing its non-existent
 * `/preview.png` image with the page's dynamic OG image URL.
 *
 * @param {WebPageOptions} options - Page metadata including URL and path.
 * @param {Record<string, unknown>} [overrides] - Optional property overrides merged into the schema.
 *
 * @returns {Record<string, unknown>} A ContactPage schema entity.
 */
export function contactPageSchema(
  options: WebPageOptions,
  overrides: Record<string, unknown> = {}
): Record<string, unknown> {
  return buildContactPageSchema(options, { ...ogImageOverride(options.path), ...overrides } as ContactPageOverrides);
}
