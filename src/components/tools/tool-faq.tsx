'use client';

import type { JSX, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Props for the FAQ wrapper component.
 *
 * @type {FAQProps}
 */
interface FAQProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Props for the FAQItem component.
 *
 * @type {FAQItemProps}
 * @property {string} heading - The FAQ question text
 * @property {string} [headingClassName] - Additional CSS classes for the heading
 * @property {string} [headingId] - Hardcoded slugified ID for the heading
 */
interface FAQItemProps extends HTMLAttributes<HTMLDivElement> {
  heading: string;
  headingClassName?: string;
  headingId?: string;
  children: ReactNode;
}

/**
 * FAQ wrapper component that renders a FAQ section with an h2 heading and a list of FAQ items.
 *
 * @param {FAQProps} props - Component props
 *
 * @returns {JSX.Element} The rendered FAQ section
 */
export function FAQ({ className, children, ...props }: FAQProps): JSX.Element {
  return (
    <section className={cn('space-y-4 md:space-y-6', className)} {...props}>
      <hr className="border-secondary mb-8 border-t border-dashed md:mb-12" />
      <h2 id="frequently-asked-questions" className="text-primary mb-4 text-2xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4 md:gap-6">{children}</div>
    </section>
  );
}

/**
 * FAQItem component that renders a single FAQ item with a heading and content.
 *
 * @param {FAQItemProps} props - Component props
 *
 * @returns {JSX.Element} The rendered FAQ item
 */
export function FAQItem({
  heading,
  headingClassName,
  headingId,
  className,
  children,
  ...props
}: FAQItemProps): JSX.Element {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <h3 id={headingId} className={cn('text-primary text-lg font-bold', headingClassName)}>
        {heading}
      </h3>
      {children}
    </div>
  );
}
