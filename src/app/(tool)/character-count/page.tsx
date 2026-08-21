import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { CharacterCount } from '@/components/tools/character-count';

/**
 * SEO metadata for the CharacterCount tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('character-count');

/**
 * CharacterCount tool page component.
 *
 * @returns {JSX.Element} The rendered CharacterCount tool page.
 */
export default function CharacterCountToolPage(): JSX.Element {
  return (
    <WithToolPage slug="character-count">
      <CharacterCount />
    </WithToolPage>
  );
}
