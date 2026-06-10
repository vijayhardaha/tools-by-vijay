import type { Metadata } from 'next';

import { SITE_CONFIG, SITE_METADATA } from '@/constants/seo';
import { getPermaLink } from '@/utils/seo';

/**
 * Interface for metadata generation parameters.
 *
 * @type {MetaParams}
 * @property {string} [title] - Optional page title
 * @property {string} [description] - Optional page description
 * @property {string} [slug] - Optional page slug for canonical URL
 */
export interface MetaParams {
  title?: string;
  description?: string;
  slug?: string;
}

/**
 * Generates an SEO-friendly title by appending a fixed suffix to the given title.
 *
 * @param {string} title - The main title to be included in the SEO title.
 *
 * @returns {string} The SEO-friendly title in the format: "{title} - Tools by Vijay".
 */
export const generateSeoTitle = (title: string = ''): string => {
  if (!title) {
    return SITE_CONFIG.title;
  }

  return [title, SITE_CONFIG.separator, SITE_CONFIG.titlePostfix].join(' ');
};

/**
 * Generates a complete metadata object for SEO, Open Graph, and Twitter cards.
 *
 * @param {MetaParams} params - The parameters object
 *
 * @returns {Metadata} A metadata object with title, description, canonical URL, and social media metadata.
 */
export const generateMeta = ({ title = '', description = '', slug = '' }: MetaParams): Metadata => {
  return {
    ...SITE_METADATA,
    title: generateSeoTitle(title),
    description: description,
    alternates: { canonical: getPermaLink(slug) },
    openGraph: {
      ...SITE_METADATA.openGraph,
      title: generateSeoTitle(title),
      description: description,
      url: getPermaLink(slug),
    },
    twitter: { ...SITE_METADATA.twitter, title: generateSeoTitle(title), description: description },
  };
};
