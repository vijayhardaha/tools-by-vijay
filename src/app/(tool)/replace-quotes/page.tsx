import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { ReplaceQuotes } from '@/components/tools/replace-quotes';

/**
 * SEO metadata for the ReplaceQuotes tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('replace-quotes');

/**
 * ReplaceQuotes tool page component.
 *
 * @returns {JSX.Element} The rendered ReplaceQuotes tool page.
 */
export default function ReplaceQuotesToolPage(): JSX.Element {
  return (
    <WithToolPage slug="replace-quotes">
      <ReplaceQuotes />
    </WithToolPage>
  );
}
