"use client";

import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

/**
 * Checkbox component for selecting options.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.checked] - Whether the checkbox is checked
 * @param {Function} [props.onCheckedChange] - Callback when checkbox state changes
 * @param {React.ReactNode} [props.children] - Optional child elements
 * @returns {React.ReactElement} Checkbox component
 */
function Checkbox({ className, children, ...props }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
      {children}
    </CheckboxPrimitive.Root>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.node,
};

export { Checkbox };
