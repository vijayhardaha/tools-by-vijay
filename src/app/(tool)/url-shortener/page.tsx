import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { UrlShortener } from '@/components/tools/url-shortener';

/**
 * SEO metadata for the UrlShortener tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('url-shortener');

/**
 * UrlShortener tool page component.
 *
 * @returns {JSX.Element} The rendered UrlShortener tool page.
 */
export default function UrlShortenerToolPage(): JSX.Element {
  return (
    <WithToolPage slug="url-shortener">
      <UrlShortener />
    </WithToolPage>
  );
}
