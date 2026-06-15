'use client';

import type { LabelHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

/**
 * Props for the Label component.
 *
 * @type {LabelProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Label content
 * @property {string} htmlFor - The ID of the associated input element
 */
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: ReactNode;
  htmlFor: string;
}

/**
 * Styling variants for the Label component
 */
const labelVariants = cva([
  // Typography
  'text-sm font-medium leading-none',

  // Disabled state
  'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
]);

/**
 * Label component for form elements with accessibility features
 *
 * @param {LabelProps} props - Component props
 *
 * @returns {JSX.Element} The Label component
 */
const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className = '', children, htmlFor, ...props }, ref) => (
  <label ref={ref} className={cn(labelVariants(), className)} htmlFor={htmlFor} {...props}>
    {children}
  </label>
));

Label.displayName = 'Label';

export { Label };
