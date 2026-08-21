'use client';

import type { JSX } from 'react';

import { PiInfoFill } from 'react-icons/pi';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

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
 * The trigger is a real button (focusable, keyboard-operable) whose
 * accessible name is the help text, so keyboard and screen reader users
 * can reach the tooltip content.
 *
 *  @param {HelpTipProps} props - Component props.
 *
 * @returns {JSX.Element} The rendered HelpTip component.
 */
export function HelpTip({ text }: HelpTipProps): JSX.Element {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={text}
          className="group focus-visible:ring-ring/50 relative inline-flex cursor-help items-center justify-center rounded-xs outline-none focus-visible:ring-[3px]"
        >
          <PiInfoFill
            className="text-foreground group-hover:text-foreground h-5 w-5 transition-colors"
            aria-hidden="true"
            data-testid="helptip-icon"
          />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}
