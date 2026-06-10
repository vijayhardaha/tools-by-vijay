import type { JSX, ReactNode } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

import { GOOGLE_ANALYTICS_ID, SITE_METADATA } from '@/constants/seo';
import { fontClassNames } from '@/lib/utils/fonts';

import '../styles/globals.css';

/**
 * Global metadata for the application.
 */
export const metadata: Metadata = SITE_METADATA;

/**
 * Root layout component that wraps the application.
 *
 * @param {{ children: ReactNode }} props - The props for the RootLayout component.
 *
 * @returns {JSX.Element} The root layout structure.
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en" className={fontClassNames}>
      <body>
        <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
