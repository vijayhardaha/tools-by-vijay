"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  const ariaProps = decorative
    ? { "aria-hidden": true }
    : { role: "separator", "aria-orientation": orientation };

  return (
    <div
      data-slot="separator-root"
      data-orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...ariaProps}
      {...props}
    />
  );
}

export { Separator };
