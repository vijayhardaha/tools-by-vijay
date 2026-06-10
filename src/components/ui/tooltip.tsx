import type { JSX, ReactNode } from 'react';
('use client');

import { useId } from 'react';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { cn } from '@/utils/classNameUtils';

/**
 * Props for the Tooltip component
 */
interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  children: ReactNode;
  className?: string;
  sideOffset?: number;
  delayDuration?: number;
}

/**
 * Tooltip component to display a tooltip with customizable content and styles.
 *
 * @param {TooltipProps} props - The component props
 *
 * @returns {JSX.Element} The rendered tooltip component
 */
function Tooltip({
  text,
  children,
  className,
  sideOffset = 4,
  delayDuration = 300,
  ...props
}: TooltipProps): JSX.Element {
  const tooltipId = useId();

  return (
    <>
      <span data-tooltip-id={tooltipId} data-tooltip-content={text} role="button" tabIndex={0} {...props}>
        {children}
      </span>

      <ReactTooltip
        id={tooltipId}
        delayShow={delayDuration}
        offset={sideOffset}
        style={{ zIndex: 9999 }}
        className={cn(
          '!text-primary-foreground !-mt-0.5 !max-w-60 !rounded-md !bg-black !px-3 !py-1.5 !text-xs !leading-4 !font-normal !shadow-sm',
          className
        )}
      />
    </>
  );
}

export { Tooltip };
