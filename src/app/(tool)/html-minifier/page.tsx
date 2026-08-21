import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { HtmlMinifier } from '@/components/tools/html-minifier';

/**
 * SEO metadata for the HtmlMinifier tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('html-minifier');

/**
 * HtmlMinifier tool page component.
 *
 * @returns {JSX.Element} The rendered HtmlMinifier tool page.
 */
export default function HtmlMinifierToolPage(): JSX.Element {
  return (
    <WithToolPage slug="html-minifier">
      <HtmlMinifier />
    </WithToolPage>
  );
}
