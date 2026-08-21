import type { JSX } from 'react';

import type { Metadata } from 'next';

import { WithToolPage, getToolPageMetadata } from '@/components/page/WithToolPage';
import { PasswordStrengthChecker } from '@/components/tools/password-strength-checker';

/**
 * SEO metadata for the PasswordStrengthChecker tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = getToolPageMetadata('password-strength-checker');

/**
 * PasswordStrengthChecker tool page component.
 *
 * @returns {JSX.Element} The rendered PasswordStrengthChecker tool page.
 */
export default function PasswordStrengthCheckerToolPage(): JSX.Element {
  return (
    <WithToolPage slug="password-strength-checker">
      <PasswordStrengthChecker />
    </WithToolPage>
  );
}
