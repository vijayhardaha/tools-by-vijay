"use client";

import { forwardRef } from "react";

import PropTypes from "prop-types";

import { cn } from "@/utils/classNameUtils";

/**
 * Progress component that shows a horizontal progress bar
 *
 * @component
 * @param {Object} props - Component props
 * @param {number} [props.value=0] - Current progress value (0-100)
 * @param {string} [props.className] - Additional CSS classes for the outer container
 * @param {string} [props.indicatorClassName] - Additional CSS classes for the progress indicator bar
 * @param {React.Ref} ref - Forwarded ref to access the DOM node
 *
 * @example
 * // Basic usage
 * <Progress value={50} />
 *
 * // With custom styling
 * <Progress
 *   value={75}
 *   className="h-6 w-full bg-gray-200"
 *   indicatorClassName="bg-blue-500"
 * />
 *
 * @returns {JSX.Element} The rendered progress bar component
 */
const Progress = forwardRef(({ className, value = 0, indicatorClassName, ...props }, ref) => (
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
));

Progress.displayName = "Progress";

Progress.propTypes = {
  /**
   * Current progress value (between 0 and 100)
   */
  value: PropTypes.number,

  /**
   * Additional CSS classes for the outer container
   */
  className: PropTypes.string,

  /**
   * Additional CSS classes for the progress indicator bar
   */
  indicatorClassName: PropTypes.string,
};

export { Progress };
