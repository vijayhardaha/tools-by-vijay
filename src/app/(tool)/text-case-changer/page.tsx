import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { TextCaseChanger } from '@/components/tools/text-case-changer';

/**
 * SEO metadata for the TextCaseChanger tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('text-case-changer');

/**
 * TextCaseChanger tool page component.
 *
 * @returns {JSX.Element} The rendered TextCaseChanger tool page.
 */
export default function TextCaseChangerToolPage(): JSX.Element {
  return (
    <WithToolPage slug="text-case-changer">
      <TextCaseChanger />
    </WithToolPage>
  );
}
