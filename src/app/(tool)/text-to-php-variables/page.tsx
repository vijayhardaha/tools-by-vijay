import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { TextToPhpVariables } from '@/components/tools/text-to-php-variables';

/**
 * SEO metadata for the TextToPhpVariables tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('text-to-php-variables');

/**
 * TextToPhpVariables tool page component.
 *
 * @returns {JSX.Element} The rendered TextToPhpVariables tool page.
 */
export default function TextToPhpVariablesToolPage(): JSX.Element {
  return (
    <WithToolPage slug="text-to-php-variables">
      <TextToPhpVariables />
    </WithToolPage>
  );
}
