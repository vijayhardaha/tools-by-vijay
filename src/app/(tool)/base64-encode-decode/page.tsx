import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { Base64EncodeDecode } from '@/components/tools/base64-encode-decode';

/**
 * SEO metadata for the Base64EncodeDecode tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('base64-encode-decode');

/**
 * Base64EncodeDecode tool page component.
 *
 * @returns {JSX.Element} The rendered Base64EncodeDecode tool page.
 */
export default function Base64EncodeDecodeToolPage(): JSX.Element {
  return (
    <WithToolPage slug="base64-encode-decode">
      <Base64EncodeDecode />
    </WithToolPage>
  );
}
