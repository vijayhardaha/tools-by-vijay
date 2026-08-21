import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { PasswordGenerator } from '@/components/tools/password-generator';

/**
 * SEO metadata for the PasswordGenerator tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('password-generator');

/**
 * PasswordGenerator tool page component.
 *
 * @returns {JSX.Element} The rendered PasswordGenerator tool page.
 */
export default function PasswordGeneratorToolPage(): JSX.Element {
  return (
    <WithToolPage slug="password-generator">
      <PasswordGenerator />
    </WithToolPage>
  );
}
