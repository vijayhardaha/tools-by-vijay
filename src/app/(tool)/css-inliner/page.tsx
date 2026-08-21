import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { CssInliner } from '@/components/tools/css-inliner';

/**
 * SEO metadata for the CssInliner tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('css-inliner');

/**
 * CssInliner tool page component.
 *
 * @returns {JSX.Element} The rendered CssInliner tool page.
 */
export default function CssInlinerToolPage(): JSX.Element {
  return (
    <WithToolPage slug="css-inliner">
      <CssInliner />
    </WithToolPage>
  );
}
