'use client';

import type { ComponentPropsWithoutRef, JSX } from 'react';

import { MdCleaningServices } from 'react-icons/md';
import { RiResetLeftFill } from 'react-icons/ri';

import { Button } from '@/components/ui/button';
import { CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/utils/classnames';

/**
 * Props for the ToolInputHeader component.
 *
 * @type {ToolInputHeaderProps}
 * @property {string} [title] - The title text to display
 * @property {string} [desc] - The description text to display
 * @property {() => void} [onClear] - Callback for the clear action button
 * @property {() => void} [onReset] - Callback for the reset action button
 */
interface ToolInputHeaderProps {
  title?: string;
  desc?: string;
  onClear?: () => void;
  onReset?: () => void;
  className?: string;
}

/**
 * Reusable header component for tool input blocks.
 *
 * Renders a title, optional description, and optional action buttons (clear/reset).
 * Each prop is individually validated — undefined props are skipped.
 * Accepts additional HTML div props via rest spread.
 *
 * @param {ToolInputHeaderProps} props - The component props.
 *
 * @returns {JSX.Element | null} The rendered header or null if nothing to render.
 */
export function ToolInputHeader({
  title,
  desc,
  onClear,
  onReset,
  className,
  ...rest
}: ToolInputHeaderProps & Omit<ComponentPropsWithoutRef<'div'>, 'title'>): JSX.Element | null {
  const hasText = title !== undefined || desc !== undefined;
  const hasActions = onClear !== undefined || onReset !== undefined;

  if (!hasText && !hasActions) return null;

  return (
    <div className={cn('flex w-full flex-nowrap items-start justify-between gap-4 md:gap-6', className)} {...rest}>
      {hasText && (
        <div className="flex flex-col gap-2">
          {title !== undefined && <CardTitle>{title}</CardTitle>}
          {desc !== undefined && <CardDescription>{desc}</CardDescription>}
        </div>
      )}

      {hasActions && (
        <TooltipProvider delayDuration={0}>
          <div className="flex shrink-0 flex-nowrap gap-2">
            {onClear !== undefined && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" variant="secondary" size="icon" onClick={onClear}>
                    <MdCleaningServices />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Clear</TooltipContent>
              </Tooltip>
            )}

            {onReset !== undefined && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="reset" variant="destructive" size="icon" onClick={onReset}>
                    <RiResetLeftFill />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reset</TooltipContent>
              </Tooltip>
            )}
          </div>
        </TooltipProvider>
      )}
    </div>
  );
}
