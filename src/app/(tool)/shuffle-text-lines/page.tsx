import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { ShuffleTextLines } from '@/components/tools/shuffle-text-lines';

/**
 * SEO metadata for the ShuffleTextLines tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('shuffle-text-lines');

/**
 * ShuffleTextLines tool page component.
 *
 * @returns {JSX.Element} The rendered ShuffleTextLines tool page.
 */
export default function ShuffleTextLinesToolPage(): JSX.Element {
  return (
    <WithToolPage slug="shuffle-text-lines">
      <ShuffleTextLines />
    </WithToolPage>
  );
}
