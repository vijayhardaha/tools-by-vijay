import * as React from "react";

import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
  {
    variants: {
      variant: {
        default: "bg-gray-50 text-gray-600 ring-gray-500/10",
        secondary: "bg-blue-50 text-blue-700 ring-blue-700/10",
        success: "bg-green-50 text-green-700 ring-green-600/20",
        warning: "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
        danger: "bg-red-50 text-red-700 ring-red-600/10",
        info: "bg-blue-50 text-blue-700 ring-blue-700/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Badge component for displaying status, categories, or other small metadata
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant] - Badge visual style
 * @param {React.ReactNode} props.children - Badge content
 * @returns {JSX.Element} The rendered Badge component
 */
function Badge({ className, variant, children, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}

Badge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
  ]),
  children: PropTypes.node.isRequired,
};

export { Badge, badgeVariants };
