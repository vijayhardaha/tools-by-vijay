import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { Slugify } from '@/components/tools/slugify';

/**
 * SEO metadata for the Slugify tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('slugify');

/**
 * Slugify tool page component.
 *
 * @returns {JSX.Element} The rendered Slugify tool page.
 */
export default function SlugifyToolPage(): JSX.Element {
  return (
    <WithToolPage slug="slugify">
      <Slugify />
    </WithToolPage>
  );
}
