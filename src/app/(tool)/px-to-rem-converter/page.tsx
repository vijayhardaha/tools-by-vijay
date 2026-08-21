import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { PxToRemConverter } from '@/components/tools/px-to-rem-converter';

/**
 * SEO metadata for the PxToRemConverter tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('px-to-rem-converter');

/**
 * PxToRemConverter tool page component.
 *
 * @returns {JSX.Element} The rendered PxToRemConverter tool page.
 */
export default function PxToRemConverterToolPage(): JSX.Element {
  return (
    <WithToolPage slug="px-to-rem-converter">
      <PxToRemConverter />
    </WithToolPage>
  );
}
