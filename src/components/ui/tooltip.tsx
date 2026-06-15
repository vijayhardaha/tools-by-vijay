'use client';

import type { ComponentProps, JSX } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/utils/classnames';

/**
 * Radix UI tooltip provider with configurable open delay.
 *
 * @param {ComponentProps<typeof TooltipPrimitive.Provider>} props - Provider props including optional delay duration.
 *
 * @returns {JSX.Element} The rendered provider element.
 */
function TooltipProvider({
  delayDuration = 0,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Provider>): JSX.Element {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />;
}

/**
 * Radix UI tooltip root container component.
 *
 * @param {ComponentProps<typeof TooltipPrimitive.Root>} props - Root tooltip props.
 *
 * @returns {JSX.Element} The rendered tooltip root element.
 */
function Tooltip({ ...props }: ComponentProps<typeof TooltipPrimitive.Root>): JSX.Element {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

/**
 * Radix UI tooltip trigger for hover and focus activation.
 *
 * @param {ComponentProps<typeof TooltipPrimitive.Trigger>} props - Trigger props.
 *
 * @returns {JSX.Element} The rendered trigger element.
 */
function TooltipTrigger({ ...props }: ComponentProps<typeof TooltipPrimitive.Trigger>): JSX.Element {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

/**
 * Tooltip overlay with text content, styling, and arrow indicator.
 *
 * @param {ComponentProps<typeof TooltipPrimitive.Content>} props - Content props including side offset, class name, and children.
 *
 * @returns {JSX.Element} The rendered tooltip content element.
 */
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Content>): JSX.Element {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          // Positioning
          'z-50 origin-(--radix-tooltip-content-transform-origin)',
          // Layout
          'inline-flex w-fit max-w-xs items-center',
          // Spacing
          'gap-1.5 rounded-lg px-3 py-1.5 text-xs',
          // Colors
          'bg-foreground text-background',
          // Appearance
          'has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm',
          // Side entrance
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          // Delayed open
          'data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95',
          // Open
          'data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95',
          // Closed
          'data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-lg" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
