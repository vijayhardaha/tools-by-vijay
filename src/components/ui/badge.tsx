import type { JSX, HTMLAttributes, ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

const badgeVariants = cva('inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset', {
  variants: {
    variant: {
      default: 'bg-gray-50 text-gray-600 ring-gray-500/10',
      secondary: 'bg-blue-50 text-blue-700 ring-blue-700/10',
      success: 'bg-green-50 text-green-700 ring-green-600/20',
      warning: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
      danger: 'bg-red-50 text-red-700 ring-red-600/10',
      info: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    },
  },
  defaultVariants: { variant: 'default' },
});

/**
 * Props for the Badge component.
 *
 * @type {BadgeProps}
 * @property {string} [className] - Additional CSS classes
 * @property {'default' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'} [variant] - The badge variant for styling
 * @property {ReactNode} children - Badge content
 */
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  children: ReactNode;
}

/**
 * Badge component for displaying status, categories, or other small metadata
 *
 * @param {BadgeProps} props - Component props
 *
 * @returns {JSX.Element} The rendered Badge component
 */
export default function Badge({ className, variant = 'default', children, ...props }: BadgeProps): JSX.Element {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}

export { Badge };
