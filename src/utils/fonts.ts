import { Cascadia_Mono, Funnel_Display } from 'next/font/google';

/**
 * Primary sans-serif font for body text.
 */
const sansFont = Funnel_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-app-sans',
  display: 'swap',
  preload: true,
});

/**
 * Mono font for code blocks and technical content.
 */
const monoFont = Cascadia_Mono({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-app-mono',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
});

/**
 * Concatenated class names string to apply all font variables to the <html> element.
 *
 * @type {string}
 */
export const fontClassNames: string = `${sansFont.variable} ${monoFont.variable}`;
