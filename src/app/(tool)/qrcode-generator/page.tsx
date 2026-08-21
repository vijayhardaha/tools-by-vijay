import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { QRCodeGenerator } from '@/components/tools/qrcode-generator';

/**
 * SEO metadata for the QRCodeGenerator tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('qrcode-generator');

/**
 * QRCodeGenerator tool page component.
 *
 * @returns {JSX.Element} The rendered QRCodeGenerator tool page.
 */
export default function QRCodeGeneratorToolPage(): JSX.Element {
  return (
    <WithToolPage slug="qrcode-generator">
      <QRCodeGenerator />
    </WithToolPage>
  );
}
