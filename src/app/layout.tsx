import type { JSX, ReactNode } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font/dist/types';
import { Work_Sans, Geist_Mono } from 'next/font/google';

/**
 * Configuration for the League Spartan font.
 */
const sansFont: NextFontWithVariable = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-app-sans',
});

/**
 * Configuration for the Geist Mono font.
 */
const monoFont: NextFontWithVariable = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-app-mono',
});

import { baseMetadata } from '@/constants/seo';
import type { BaseMetadata } from '@/constants/seo';

import '../styles/globals.css';

/**
 * Metadata for the application.
 */
export const metadata: BaseMetadata = baseMetadata;

/**
 * Root layout component for the application.
 *
 * @param {{ children: ReactNode }} props - The props for the RootLayout component.
 *
 * @returns {JSX.Element} The root layout structure.
 */
const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <head>
        <GoogleAnalytics gaId="G-FM8D1WPKM7" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
