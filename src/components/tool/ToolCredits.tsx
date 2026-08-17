'use client';

import type { JSX, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Props for the ToolCreditsSection component.
 *
 * @type {ToolCreditsSectionProps}
 * @property {string} [heading] - The heading text (defaults to "Credits & Source")
 * @property {string} [headingId] - Hardcoded slugified ID for the heading (defaults to "credits-source")
 * @property {ReactNode} [children] - Custom credits content (defaults to the standard attribution paragraph)
 */
interface ToolCreditsSectionProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
  headingId?: string;
  children?: ReactNode;
}

/**
 * Default attribution paragraph used when no custom content is provided.
 *
 * @returns {JSX.Element} The rendered default credits paragraph
 */
function DefaultCreditsContent(): JSX.Element {
  return (
    <p>
      Maintained by{' '}
      <a
        href="https://x.com/vijayhardaha"
        className="font-medium text-pink-500 underline hover:no-underline"
        rel="noopener noreferrer"
        target="_blank"
      >
        Vijay Hardaha
      </a>
      . This tool is built with modern web technologies and industry-standard open-source libraries to deliver reliable,
      high-quality results.
    </p>
  );
}

/**
 * ToolCreditsSection component that renders a credits/source attribution section
 * with an hr separator and an h2 heading.
 *
 * Renders the standard attribution paragraph by default; pass custom children to override it.
 *
 * @param {ToolCreditsSectionProps} props - Component props
 *
 * @returns {JSX.Element} The rendered credits section
 */
export function ToolCreditsSection({
  heading = 'Credits & Source',
  headingId = 'credits-source',
  className,
  children,
  ...props
}: ToolCreditsSectionProps): JSX.Element {
  return (
    <section className={cn('space-y-4', className)} {...props}>
      <hr className="border-secondary mb-8 border-t border-dashed md:mb-12" />
      <h2 className="text-primary mb-4 text-2xl font-bold" id={headingId}>
        {heading}
      </h2>
      {children ?? <DefaultCreditsContent />}
    </section>
  );
}
