import type { JSX } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/classnames';

/**
 * Props for the Logo component.
 *
 * @type {LogoProps}
 * @property {string} [className] - Additional CSS classes for the logo image
 */
type LogoProps = { className?: string };

/**
 * Logo component that displays the site logo with next/image.
 *
 * @param {LogoProps} props - Component props.
 *
 * @returns {JSX.Element} A link to the homepage containing the site logo.
 */
export default function Logo({ className }: LogoProps): JSX.Element {
  return (
    <Link href="/">
      <Image
        src="/images/site-logo.svg"
        alt="Site logo for Tools by Vijay Hardaha"
        aria-label="Site logo for Tools by Vijay Hardaha"
        width={791}
        height={160}
        className={cn('h-10 w-auto', className)}
        priority
      />
      <span className="sr-only">Tools by Vijay Hardaha</span>
    </Link>
  );
}
