import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { HtmlCleaner } from '@/components/tools/html-cleaner';

/**
 * SEO metadata for the HtmlCleaner tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('html-cleaner');

/**
 * HtmlCleaner tool page component.
 *
 * @returns {JSX.Element} The rendered HtmlCleaner tool page.
 */
export default function HtmlCleanerToolPage(): JSX.Element {
  return (
    <WithToolPage slug="html-cleaner">
      <HtmlCleaner />
    </WithToolPage>
  );
}
