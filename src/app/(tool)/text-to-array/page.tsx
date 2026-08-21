import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { TextToArray } from '@/components/tools/text-to-array';

/**
 * SEO metadata for the TextToArray tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('text-to-array');

/**
 * TextToArray tool page component.
 *
 * @returns {JSX.Element} The rendered TextToArray tool page.
 */
export default function TextToArrayToolPage(): JSX.Element {
  return (
    <WithToolPage slug="text-to-array">
      <TextToArray />
    </WithToolPage>
  );
}
