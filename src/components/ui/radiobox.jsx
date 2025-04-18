"use client";

import { useState } from "react";

import PropTypes from "prop-types";
import { LuCheck as CheckIcon } from "react-icons/lu";

import { cn } from "@/utils/classNameUtils";

/**
 * RadioBox component for selecting a single option from a group.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.checked] - Whether the radio box is selected
 * @param {Function} [props.onCheckedChange] - Callback when radio box state changes
 * @param {boolean} [props.disabled] - Whether the radio box is disabled
 * @param {boolean} [props.required] - Whether the radio box is required
 * @param {string} [props.id] - ID for the radio input element
 * @param {string} [props.name] - Name for the radio group
 * @param {any} [props.children] - Optional child elements
 * @returns {JSX.Element} RadioBox component
 */
function RadioBox({
  className,
  children,
  checked: controlledChecked,
  onCheckedChange,
  disabled,
  required,
  id,
  name,
  ...props
}) {
  const [internalChecked, setInternalChecked] = useState(
    controlledChecked || false
  );

  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  /**
   * Handles the radio box state change event
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
      data-slot="radiobox"
      className={cn(
        // Layout & base appearance
        "inline-flex cursor-pointer items-center",

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
        type="radio"
        id={id}
        name={name}
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      />
      <div
        data-slot="radiobox-indicator"
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-full border",
          isChecked
            ? "bg-primary border-primary text-primary-foreground"
            : "border-input"
        )}
      >
        {isChecked && <CheckIcon className="h-3 w-3" />}
      </div>
      {children && <span className="ml-2">{children}</span>}
    </label>
  );
}

RadioBox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

export { RadioBox };
