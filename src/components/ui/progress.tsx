"use client";

import { forwardRef } from "react";

import { cn } from "@/utils/classNameUtils";

/**
 * Props for the Progress component
 */
interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  className?: string;
  indicatorClassName?: string;
}

/**
 * Progress component that shows a horizontal progress bar
 */
const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className = "", value = 0, indicatorClassName, ...props }, ref) => (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className={cn("bg-secondary relative h-4 w-full overflow-hidden rounded-full", className)}
      {...props}
    >
      <div
        className={cn("bg-primary h-full w-full flex-1 transition-all", indicatorClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
);

Progress.displayName = "Progress";

export { Progress };
