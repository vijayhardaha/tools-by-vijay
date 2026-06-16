'use client';

import type { JSX, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Props for the Credits component.
 *
 * @type {CreditsProps}
 * @property {string} [heading] - The heading text (defaults to "Credits & Source")
 * @property {string} [headingId] - Hardcoded slugified ID for the heading (defaults to "credits-source")
 */
interface CreditsProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
  headingId?: string;
  children: ReactNode;
}

/**
 * Credits component that renders a credits/source attribution section
 * with an hr separator and an h2 heading.
 *
 * @param {CreditsProps} props - Component props
 *
 * @returns {JSX.Element} The rendered credits section
 */
export function Credits({
  heading = 'Credits & Source',
  headingId = 'credits-source',
  className,
  children,
  ...props
}: CreditsProps): JSX.Element {
  return (
    <section className={cn('space-y-4', className)} {...props}>
      <hr className="border-secondary mb-8 border-t border-dashed md:mb-12" />
      <h2 className="text-primary mb-4 text-2xl font-bold" id={headingId}>
        {heading}
      </h2>
      {children}
    </section>
  );
}
