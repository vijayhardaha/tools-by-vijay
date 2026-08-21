import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { JsonSorter } from '@/components/tools/json-sorter';

/**
 * SEO metadata for the JsonSorter tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('json-sorter');

/**
 * JsonSorter tool page component.
 *
 * @returns {JSX.Element} The rendered JsonSorter tool page.
 */
export default function JsonSorterToolPage(): JSX.Element {
  return (
    <WithToolPage slug="json-sorter">
      <JsonSorter />
    </WithToolPage>
  );
}
