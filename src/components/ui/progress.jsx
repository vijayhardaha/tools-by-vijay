"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Progress component that shows a progress bar
 *
 * @component
 * @param {Object} props - Component props
 * @param {number} props.value - Current progress value (0-100)
 * @param {string} props.className - Additional classes for the outer container
 * @param {string} props.indicatorClassName - Additional classes for the progress indicator
 * @returns {JSX.Element} The rendered progress bar
 */
const Progress = React.forwardRef(
  ({ className, value = 0, indicatorClassName, ...props }, ref) => (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className={cn(
        "bg-secondary relative h-4 w-full overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-primary h-full w-full flex-1 transition-all",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
);

Progress.displayName = "Progress";

export { Progress };
