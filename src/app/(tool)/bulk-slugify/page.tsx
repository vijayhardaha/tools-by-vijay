import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { BulkSlugify } from '@/components/tools/bulk-slugify';

/**
 * SEO metadata for the BulkSlugify tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('bulk-slugify');

/**
 * BulkSlugify tool page component.
 *
 * @returns {JSX.Element} The rendered BulkSlugify tool page.
 */
export default function BulkSlugifyToolPage(): JSX.Element {
  return (
    <WithToolPage slug="bulk-slugify">
      <BulkSlugify />
    </WithToolPage>
  );
}
