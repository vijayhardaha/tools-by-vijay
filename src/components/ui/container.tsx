import type { JSX, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Props for the Container component.
 *
 * @type {ContainerProps}
 * @property {string} [className] - Additional CSS classes to merge
 * @property {ReactNode} children - Content to display inside the container
 */
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

/**
 * Container component — a reusable centered layout wrapper.
 * Provides consistent horizontal padding and max-width.
 * Accepts all HTML div props with optional className merging via cn().
 *
 * @param {ContainerProps} props - Component props
 *
 * @returns {JSX.Element} The rendered container
 */
export default function Container({ className, children, ...props }: ContainerProps): JSX.Element {
  return (
    <div className={cn('mx-auto max-w-7xl px-6 lg:px-4', className)} {...props}>
      {children}
    </div>
  );
}
