import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { UrlDecoderEncoder } from '@/components/tools/url-decoder-encoder';

/**
 * SEO metadata for the UrlDecoderEncoder tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('url-decoder-encoder');

/**
 * UrlDecoderEncoder tool page component.
 *
 * @returns {JSX.Element} The rendered UrlDecoderEncoder tool page.
 */
export default function UrlDecoderEncoderToolPage(): JSX.Element {
  return (
    <WithToolPage slug="url-decoder-encoder">
      <UrlDecoderEncoder />
    </WithToolPage>
  );
}
