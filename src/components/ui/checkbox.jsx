"use client";

import { useState } from "react";

import PropTypes from "prop-types";
import { LuCheck as CheckIcon } from "react-icons/lu";

import { cn } from "@/utils/classNameUtils";

/**
 * Checkbox component for selecting options.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.checked] - Whether the checkbox is checked
 * @param {Function} [props.onCheckedChange] - Callback when checkbox state changes
 * @param {boolean} [props.disabled] - Whether the checkbox is disabled
 * @param {boolean} [props.required] - Whether the checkbox is required
 * @param {string} [props.id] - ID for the checkbox input element
 * @param {any} [props.children] - Optional child elements
 * @returns {JSX.Element} Checkbox component
 */
function Checkbox({
  className,
  children,
  checked: controlledChecked,
  onCheckedChange,
  disabled,
  required,
  id,
  ...props
}) {
  const [internalChecked, setInternalChecked] = useState(controlledChecked || false);

  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  /**
   * Handles the checkbox state change event
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The change event
   */
  const handleChange = (event) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    if (onCheckedChange) {
      onCheckedChange(event.target.checked);
    }
  };

  return (
    <div
      data-slot="checkbox"
      className={cn(
        // Layout & base appearance
        "relative size-4 shrink-0 rounded-[4px] border",

        // Colors & background
        "border-input",
        "data-[checked=true]:bg-primary data-[checked=true]:text-primary-foreground",
        "data-[checked=true]:border-primary",

        // Accessibility & validation
        "aria-invalid:border-destructive",
        "aria-invalid:ring-destructive/20",

        // Focus styles
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Transition & outline
        "transition-shadow outline-none",

        // Peer-related styling
        "peer",
        className
      )}
      data-checked={isChecked}
      {...props}
    >
      <input
        type="checkbox"
        id={id}
        className="absolute size-4 cursor-pointer opacity-0"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      />
      {isChecked && (
        <div
          data-slot="checkbox-indicator"
          className="flex size-4 items-center justify-center text-current transition-none"
        >
          <CheckIcon className="size-3" />
        </div>
      )}
      {children}
    </div>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.node,
};

export { Checkbox };
