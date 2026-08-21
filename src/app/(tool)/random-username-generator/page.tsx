import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { RandomUsernameGenerator } from '@/components/tools/random-username-generator';

/**
 * SEO metadata for the RandomUsernameGenerator tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('random-username-generator');

/**
 * RandomUsernameGenerator tool page component.
 *
 * @returns {JSX.Element} The rendered RandomUsernameGenerator tool page.
 */
export default function RandomUsernameGeneratorToolPage(): JSX.Element {
  return (
    <WithToolPage slug="random-username-generator">
      <RandomUsernameGenerator />
    </WithToolPage>
  );
}
