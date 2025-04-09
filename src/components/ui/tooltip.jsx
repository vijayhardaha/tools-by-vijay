"use client";

import * as React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { cn } from "@/lib/utils";
import "react-tooltip/dist/react-tooltip.css";

function Tooltip({
  text,
  children,
  className,
  sideOffset = 4,
  delayDuration = 0,
  ...props
}) {
  const tooltipId = React.useId();

  return (
    <>
      <span
        data-tooltip-id={tooltipId}
        data-tooltip-content={text}
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
          "!text-primary-foreground !rounded-none !bg-black !px-3 !py-1.5 !text-xs",
          className
        )}
      />
    </>
  );
}

export { Tooltip };
