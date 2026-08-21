import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { BarcodeGenerator } from '@/components/tools/barcode-generator';

/**
 * SEO metadata for the BarcodeGenerator tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('barcode-generator');

/**
 * BarcodeGenerator tool page component.
 *
 * @returns {JSX.Element} The rendered BarcodeGenerator tool page.
 */
export default function BarcodeGeneratorToolPage(): JSX.Element {
  return (
    <WithToolPage slug="barcode-generator">
      <BarcodeGenerator />
    </WithToolPage>
  );
}
