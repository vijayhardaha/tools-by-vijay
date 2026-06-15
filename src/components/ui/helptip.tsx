'use client';

import type { JSX } from 'react';

import { PiInfoFill } from 'react-icons/pi';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/utils/classnames';

/**
 * Props for the HelpTip component.
 *
 * @type {HelpTipProps}
 * @property {string} text - The tooltip text to display
 */
interface HelpTipProps {
  text: string;
}

/**
 * HelpTip component displays an informational icon with a tooltip.
 *
 * Implements shadcn-like tooltip behavior with proper accessibility and styling.
 * Uses semantic HTML attributes and matches shadcn's design patterns.
 *
 *  @param {HelpTipProps} props - Component props.
 *
 * @returns {JSX.Element} The rendered HelpTip component.
 */
export default function HelpTip({ text }: HelpTipProps): JSX.Element {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="group relative inline-flex items-center justify-center">
          <PiInfoFill
            className={cn('text-foreground group-hover:text-foreground h-5 w-5 cursor-help transition-colors')}
            aria-label={text}
            data-testid="helptip-icon"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export { HelpTip };
