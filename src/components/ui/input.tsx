import type { JSX, InputHTMLAttributes } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Props for the Input component.
 *
 * @type {InputProps}
 * @property {string} [className] - Additional CSS classes
 * @property {string} [type] - The input type, defaults to "text"
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
}

/**
 * Input component for text entry, file uploads, and other input types.
 *
 * @param {InputProps} props - Component props
 *
 * @returns {JSX.Element} Input component
 */
export default function Input({ className, type = 'text', ...props }: InputProps): JSX.Element {
  return (
    <input
      type={type}
      autoComplete="off"
      spellCheck="false"
      data-slot="input"
      className={cn(
        // Layout & sizing
        'flex h-10 w-full min-w-0 items-center',

        // Spacing
        'rounded-xs px-3 py-1',

        // Typography
        'font-mono text-sm',

        // Border
        'border',

        // Colors & borders
        'border-input text-foreground bg-transparent',

        // Placeholder
        'placeholder:text-muted-foreground/50',

        // File styling
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:px-3 file:py-1.5 file:font-medium',

        // Focus & validation
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',

        // States
        'disabled:cursor-not-allowed disabled:opacity-50',

        // Transitions
        'transition-[color,box-shadow] outline-none',

        // Data attributes
        'data-slot=input',

        // Selection
        'selection:bg-primary selection:text-primary-foreground',

        className
      )}
      {...props}
    />
  );
}

export { Input };
