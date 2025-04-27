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
    <label
      data-slot="checkbox"
      className={cn(
        // Layout & base appearance
        "inline-flex items-center",

        // Colors & background
        "text-foreground",

        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Transition & outline
        "transition-shadow outline-none",

        className
      )}
      data-checked={isChecked}
      {...props}
    >
      <input
        type="checkbox"
        id={id}
        className="hidden cursor-pointer"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      />
      <div
        data-slot="checkbox-indicator"
        className={cn(
          "flex h-4 w-4 cursor-pointer items-center justify-center rounded border",
          isChecked ? "bg-primary border-primary text-primary-foreground" : "border-input"
        )}
      >
        {isChecked && <CheckIcon className="h-3 w-3" />}
      </div>
      {children && (
        <span className="ml-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {children}
        </span>
      )}
    </label>
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
