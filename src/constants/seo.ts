import { CREATOR, type CreatorConfig } from '@vijayhardaha/schema-builder';
import type { Metadata } from 'next';

import { siteUrl } from '@/utils/seo';

/**
 * Site-wide configuration values for SEO and metadata.
 */
export const SITE_CONFIG = {
  name: 'Tools by Vijay Hardaha',
  title: 'Developer Tools to Boost Productivity by Vijay Hardaha',
  description:
    'Online tools to help developers and workers work faster and smarter. Boost your productivity with free, browser-based utilities.',
  titlePostfix: 'Tools by Vijay Hardaha',
  separator: '-',
  url: 'https://toolsbyvijay.vercel.app',
  twitterHandle: '@vijayhardaha',
  category: 'Developer Tools',
  classification: 'Online Developer Tools, Web Utilities, Developer Productivity, Code Formatters',
  creator: CREATOR as CreatorConfig,
  organization: {
    name: 'Tools by Vijay Hardaha',
    description:
      'Tools by Vijay Hardaha is a collection of free online developer tools and utilities designed to simplify everyday tasks for developers, content creators, and tech enthusiasts.',
  },
} as const;

/**
 * SEO keywords for search engine optimization.
 */
const SEO_KEYWORDS = ['tools', 'utilities', 'web tools', 'online tools', 'developer tools'];

/**
 * Google Search Console verification code for the site.
 */
const GOOGLE_SITE_VERIFICATION = '4CyrCxZi9TWgvS-GzB1QUhgEl0bKoIzT36368e_vlx0';

/**
 * Google Analytics measurement ID for the site.
 */
export const GOOGLE_ANALYTICS_ID = 'G-FM8D1WPKM7';

/**
 * Title and description used for SEO, Open Graph, and Twitter cards.
 */
const titleAndDescription = { title: SITE_CONFIG.title, description: SITE_CONFIG.description };

/**
 * Default image metadata used for Open Graph and Twitter cards.
 */
const seoImage = {
  url: '/images/thumbnail.png',
  secureUrl: '/images/thumbnail.png',
  alt: 'Tools by Vijay Hardaha Thumbnail',
  width: 512,
  height: 512,
  type: 'image/png',
};

/**
 * The main metadata object containing all SEO-related information for the website.
 */
export const SITE_METADATA: Metadata = {
  ...titleAndDescription,
  metadataBase: new URL(siteUrl()),
  alternates: { canonical: siteUrl() },
  keywords: SEO_KEYWORDS,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.creator.name, url: SITE_CONFIG.creator.urls.gravatar }],
  creator: SITE_CONFIG.creator.name,
  publisher: SITE_CONFIG.name,
  robots: { index: true, follow: true },
  category: SITE_CONFIG.category,
  classification: SITE_CONFIG.classification,
  verification: { google: GOOGLE_SITE_VERIFICATION },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  openGraph: {
    ...titleAndDescription,
    images: seoImage,
    type: 'website',
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    url: SITE_CONFIG.url,
  },
  twitter: {
    ...titleAndDescription,
    card: 'summary_large_image',
    images: seoImage,
    creator: SITE_CONFIG.creator.handles[0],
  },
  other: { lang: 'en' },
};
