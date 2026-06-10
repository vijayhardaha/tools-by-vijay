'use client';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Props for the Progress component.
 *
 * @type {ProgressProps}
 * @property {number} [value] - The current progress value (0-100)
 * @property {string} [className] - Additional CSS classes for the container
 * @property {string} [indicatorClassName] - Additional CSS classes for the indicator bar
 */
interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  className?: string;
  indicatorClassName?: string;
}

/**
 * Progress component that displays a horizontal progress bar.
 *
 * @param {ProgressProps} props - The component props
 *
 * @returns {JSX.Element} The rendered progress bar
 */
const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className = '', value = 0, indicatorClassName, ...props }, ref) => (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className={cn('bg-secondary relative h-4 w-full overflow-hidden rounded-full', className)}
      {...props}
    >
      <div
        className={cn('bg-primary h-full w-full flex-1 transition-all', indicatorClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
);

Progress.displayName = 'Progress';

export { Progress };
