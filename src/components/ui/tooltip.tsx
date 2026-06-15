'use client';

import * as React from 'react';
import { forwardRef } from 'react';
import type { ComponentRef, ForwardedRef, JSX, ReactNode } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/utils/classnames';

/**
 * Props for the TooltipContent component.
 *
 * @type {TooltipContentProps}
 * @property {string} [className] - Additional CSS classes to apply to the tooltip
 * @property {number} [sideOffset] - Distance in pixels from the trigger element
 * @property {ReactNode} children - The content to display inside the tooltip
 */
interface TooltipContentProps {
  className?: string;
  sideOffset?: number;
  children: ReactNode;
}

/**
 * TooltipContent component that displays the tooltip content.
 *
 * This component contains the actual content that appears when the tooltip is open.
 * It automatically positions itself relative to the trigger and includes proper
 * accessibility features.
 *
 * @param {object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {number} [props.sideOffset] - Distance in pixels from the trigger element
 * @param {ReactNode} props.children - The content to display in the tooltip
 * @param {ForwardedRef<ComponentRef<typeof TooltipPrimitive.Content>>} ref - Ref forwarded to the content element
 *
 * @returns {JSX.Element} The rendered TooltipContent component
 */
function TooltipContent(
  props: TooltipContentProps,
  ref: ForwardedRef<ComponentRef<typeof TooltipPrimitive.Content>>
): JSX.Element {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        className={cn(
          'bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-80 overflow-hidden rounded-md px-3 py-1.5 text-xs',
          props.className
        )}
        {...(props.sideOffset ? { sideOffset: props.sideOffset } : {})}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}

const TooltipContentWithRef = forwardRef(TooltipContent);
TooltipContentWithRef.displayName = TooltipPrimitive.Content.displayName;

// Tooltip primitive components
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

// TooltipProvider for tooltip context setup
const TooltipProvider = TooltipPrimitive.Provider;

export type { TooltipContentProps };
export { Tooltip, TooltipTrigger, TooltipContentWithRef as TooltipContent, TooltipProvider };
