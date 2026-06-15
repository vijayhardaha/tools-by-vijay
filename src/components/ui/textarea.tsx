import type { JSX, TextareaHTMLAttributes } from 'react';

import { cn } from '@/utils/classnames';

export { Textarea };

/**
 * Props for the Textarea component.
 *
 * @type {TextareaProps}
 * @property {string} [className] - Additional CSS classes
 */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

/**
 * Textarea component for multi-line text input.
 *
 * @param {TextareaProps} props - The component props
 *
 * @returns {JSX.Element} The rendered textarea component
 */
export default function Textarea({ className, ...props }: TextareaProps): JSX.Element {
  return (
    <textarea
      data-slot="textarea"
      autoComplete="off"
      spellCheck="false"
      className={cn(
        // Layout & spacing
        'flex h-auto min-h-16 w-full items-center',

        // Spacing
        'rounded-md px-3 py-2',

        // Typography
        'font-mono text-sm',

        // Placeholder
        'placeholder:text-muted-foreground/50',

        // Colors & borders
        'border-input text-foreground bg-transparent',

        // Focus & validation
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',

        // States
        'disabled:cursor-not-allowed disabled:opacity-50',

        // Transitions
        'transition-[color,box-shadow] outline-none',

        // Data attributes
        'data-slot=textarea',

        className
      )}
      {...props}
    />
  );
}
