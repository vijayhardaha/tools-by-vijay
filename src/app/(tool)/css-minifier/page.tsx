import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { CssMinifier } from '@/components/tools/css-minifier';

/**
 * SEO metadata for the CssMinifier tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('css-minifier');

/**
 * CssMinifier tool page component.
 *
 * @returns {JSX.Element} The rendered CssMinifier tool page.
 */
export default function CssMinifierToolPage(): JSX.Element {
  return (
    <WithToolPage slug="css-minifier">
      <CssMinifier />
    </WithToolPage>
  );
}
