import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { DuplicateLineRemoval } from '@/components/tools/duplicate-line-removal';

/**
 * SEO metadata for the DuplicateLineRemoval tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('duplicate-line-removal');

/**
 * DuplicateLineRemoval tool page component.
 *
 * @returns {JSX.Element} The rendered DuplicateLineRemoval tool page.
 */
export default function DuplicateLineRemovalToolPage(): JSX.Element {
  return (
    <WithToolPage slug="duplicate-line-removal">
      <DuplicateLineRemoval />
    </WithToolPage>
  );
}
