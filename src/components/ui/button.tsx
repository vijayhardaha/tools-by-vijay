'use client';

import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

/**
 * Variant and size styles for the Button component.
 */
const buttonVariants = cva(
  [
    // Layout
    'inline-flex items-center justify-center gap-2',
    'whitespace-nowrap shrink-0',
    // Typography
    'text-sm font-semibold',
    // Appearance
    'rounded-md outline-none border',
    // SVG children
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    // States
    'cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
    // Transitions
    'transition-all active:scale-[0.98]',
  ],
  {
    variants: {
      variant: {
        default: [
          // Colors
          'bg-accent-foreground border-accent-foreground text-foreground',
          // Hover
          'hover:bg-primary hover:border-primary hover:text-primary-foreground',
          // Focus
          'focus-visible:ring-accent-foreground/20',
        ].join(' '),
        primary: [
          // Colors
          'bg-primary border-primary text-primary-foreground',
          // Hover
          'hover:bg-accent-foreground hover:border-accent-foreground hover:text-primary',
          // Focus
          'focus-visible:ring-foreground/20',
        ].join(' '),
        secondary: [
          // Colors
          'bg-secondary border-secondary text-secondary-foreground',
          // Hover
          'hover:bg-secondary-foreground hover:border-secondary-foreground hover:text-background',
          // Focus
          'focus-visible:ring-secondary-foreground/10',
        ].join(' '),
        destructive: [
          // Colors
          'bg-destructive border-destructive text-white',
          // Hover
          'hover:bg-destructive/70 hover:border-destructive/70 text-white',
          // Focus
          'focus-visible:ring-destructive/20',
        ].join(' '),
        success: [
          // Colors
          'bg-green-500 border-green-500 text-white',
          // Hover
          'hover:bg-green-600 hover:border-green-600 hover:text-white',
          // Focus
          'focus-visible:ring-primary-200',
        ].join(' '),
        outline: [
          // Colors
          'bg-background border-primary text-primary',
          // Hover
          'hover:bg-primary hover:border-primary hover:text-primary-foreground',
        ].join(' '),
        ghost: [
          // Colors & Hover
          'border-transparent hover:bg-accent hover:border-transparent hover:text-accent-foreground',
        ].join(' '),
        link: [
          // Colors
          'border-transparent text-primary underline-offset-4',
          // Hover
          'hover:underline',
        ].join(' '),
      },
      size: {
        default: 'h-10 px-8 rounded-xl py-3 text-sm has-[>svg]:px-4',
        sm: 'h-8 rounded-md gap-1.5 px-4 text-xs has-[>svg]:px-3.5',
        lg: 'h-12 rounded-xl px-10 py-3 text-base has-[>svg]:px-5',
        icon: 'size-10',
        'icon-sm': 'size-8',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

/**
 * Props for the Button component.
 *
 * @type {ButtonProps}
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'default' | 'primary' | 'destructive' | 'success' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
  asChild?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    // Ensure props is an object before spreading
    const validProps = props && typeof props === 'object' ? props : {};

    return (
      <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...validProps} ref={ref}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button'; // Set the display name for the Button component

export { Button };
