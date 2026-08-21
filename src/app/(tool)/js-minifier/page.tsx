import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { JsMinifier } from '@/components/tools/js-minifier';

/**
 * SEO metadata for the JsMinifier tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('js-minifier');

/**
 * JsMinifier tool page component.
 *
 * @returns {JSX.Element} The rendered JsMinifier tool page.
 */
export default function JsMinifierToolPage(): JSX.Element {
  return (
    <WithToolPage slug="js-minifier">
      <JsMinifier />
    </WithToolPage>
  );
}
