import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { CountryNameGenerator } from '@/components/tools/country-name-generator';

/**
 * SEO metadata for the CountryNameGenerator tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('country-name-generator');

/**
 * CountryNameGenerator tool page component.
 *
 * @returns {JSX.Element} The rendered CountryNameGenerator tool page.
 */
export default function CountryNameGeneratorToolPage(): JSX.Element {
  return (
    <WithToolPage slug="country-name-generator">
      <CountryNameGenerator />
    </WithToolPage>
  );
}
