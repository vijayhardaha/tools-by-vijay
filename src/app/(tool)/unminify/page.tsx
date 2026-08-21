import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { Unminify } from '@/components/tools/unminify';

/**
 * SEO metadata for the Unminify tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('unminify');

/**
 * Unminify tool page component.
 *
 * @returns {JSX.Element} The rendered Unminify tool page.
 */
export default function UnminifyToolPage(): JSX.Element {
  return (
    <WithToolPage slug="unminify">
      <Unminify />
    </WithToolPage>
  );
}
