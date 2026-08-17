'use client';

import type { JSX, HTMLAttributes, ReactNode } from 'react';

import { ToolInfoSectionHeading } from '@/components/tool/ToolInfoSection';
import { cn } from '@/utils/classnames';

/**
 * Props for the ToolFAQSection wrapper component.
 *
 * @type {ToolFAQSectionProps}
 */
interface ToolFAQSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Props for the ToolFAQItem component.
 *
 * @type {ToolFAQItemProps}
 * @property {string} heading - The FAQ question text
 * @property {string} [headingClassName] - Additional CSS classes for the heading
 * @property {string} [headingId] - Hardcoded slugified ID for the heading
 */
interface ToolFAQItemProps extends HTMLAttributes<HTMLDivElement> {
  heading: string;
  headingClassName?: string;
  headingId?: string;
  children: ReactNode;
}

/**
 * FAQ section wrapper component that renders a FAQ section with an h2 heading
 * and a list of FAQ items.
 *
 * @param {ToolFAQSectionProps} props - Component props
 *
 * @returns {JSX.Element} The rendered FAQ section
 */
export function ToolFAQSection({ className, children, ...props }: ToolFAQSectionProps): JSX.Element {
  return (
    <section className={cn('space-y-4 md:space-y-6', className)} {...props}>
      <hr className="border-secondary mb-8 border-t border-dashed md:mb-12" />
      <ToolInfoSectionHeading id="frequently-asked-questions">Frequently Asked Questions</ToolInfoSectionHeading>
      <div className="flex flex-col gap-4 md:gap-6">{children}</div>
    </section>
  );
}

/**
 * ToolFAQItem component that renders a single FAQ item with a heading and content.
 *
 * @param {ToolFAQItemProps} props - Component props
 *
 * @returns {JSX.Element} The rendered FAQ item
 */
export function ToolFAQItem({
  heading,
  headingClassName,
  headingId,
  className,
  children,
  ...props
}: ToolFAQItemProps): JSX.Element {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <h3 id={headingId} className={cn('text-primary text-lg font-bold', headingClassName)}>
        {heading}
      </h3>
      {children}
    </div>
  );
}

/**
 * Legacy aliases kept for tools that have not been migrated yet.
 *
 * @deprecated Use {@link ToolFAQSection} and {@link ToolFAQItem} instead.
 */
export { ToolFAQSection as FAQ, ToolFAQItem as FAQItem };
