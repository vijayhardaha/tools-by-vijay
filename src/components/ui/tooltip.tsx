"use client";

import { useId, ReactNode } from "react";

import { Tooltip as ReactTooltip } from "react-tooltip";

import { cn } from "@/utils/classNameUtils";

// eslint-disable-next-line import/order
import "react-tooltip/dist/react-tooltip.css";

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
 */
function Tooltip({
  text,
  children,
  className,
  sideOffset = 4,
  delayDuration = 300,
  ...props
}: TooltipProps) {
  const tooltipId = useId();

  return (
    <>
      <span
        data-tooltip-id={tooltipId}
        data-tooltip-content={text}
        role="button"
        tabIndex={0}
        {...props}
      >
        {children}
      </span>

      <ReactTooltip
        id={tooltipId}
        delayShow={delayDuration}
        offset={sideOffset}
        style={{ zIndex: 9999 }}
        className={cn(
          "!text-primary-foreground !-mt-0.5 !max-w-60 !rounded-md !bg-black !px-3 !py-1.5 !text-xs !leading-4 !font-normal !shadow-sm",
          className
        )}
      />
    </>
  );
}

export { Tooltip };
