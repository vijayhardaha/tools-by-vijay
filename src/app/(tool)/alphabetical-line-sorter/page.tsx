import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { AlphabeticalLineSorter } from '@/components/tools/alphabetical-line-sorter';

/**
 * SEO metadata for the AlphabeticalLineSorter tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('alphabetical-line-sorter');

/**
 * AlphabeticalLineSorter tool page component.
 *
 * @returns {JSX.Element} The rendered AlphabeticalLineSorter tool page.
 */
export default function AlphabeticalLineSorterToolPage(): JSX.Element {
  return (
    <WithToolPage slug="alphabetical-line-sorter">
      <AlphabeticalLineSorter />
    </WithToolPage>
  );
}
