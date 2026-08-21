import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { DropdownToArray } from '@/components/tools/dropdown-to-array';

/**
 * SEO metadata for the DropdownToArray tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('dropdown-to-array');

/**
 * DropdownToArray tool page component.
 *
 * @returns {JSX.Element} The rendered DropdownToArray tool page.
 */
export default function DropdownToArrayToolPage(): JSX.Element {
  return (
    <WithToolPage slug="dropdown-to-array">
      <DropdownToArray />
    </WithToolPage>
  );
}
