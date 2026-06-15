import { Cascadia_Mono, Sora } from 'next/font/google';

/**
 * Primary sans-serif font for body text.
 */
const sansFont = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
});

/**
 * Concatenated class names string to apply all font variables to the <html> element.
 *
 * @type {string}
 */
export const fontClassNames: string = `${sansFont.variable} ${monoFont.variable}`;
