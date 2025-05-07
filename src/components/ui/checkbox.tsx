"use client";

import { useState, ChangeEvent, ReactNode } from "react";

import { LuCheck as CheckIcon } from "react-icons/lu";

import { cn } from "@/utils/classNameUtils";

/**
 * Props for the Checkbox component.
 */
interface CheckboxProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Additional CSS classes. */
  className?: string;
  /** Whether the checkbox is checked. */
  checked?: boolean;
  /** Callback when checkbox state changes. */
  onCheckedChange?: (checked: boolean) => void;
  /** Whether the checkbox is disabled. */
  disabled?: boolean;
  /** Whether the checkbox is required. */
  required?: boolean;
  /** ID for the checkbox input element. */
  id?: string;
  /** Optional child elements. */
  children?: ReactNode;
}

/**
 * Checkbox component for selecting options.
 */
function Checkbox({
  className = "",
  children,
  checked: controlledChecked,
  onCheckedChange,
  disabled,
  required,
  id,
  ...props
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(controlledChecked || false);

  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  /**
   * Handles the checkbox state change event.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      <span
        data-slot="checkbox-indicator"
        className={cn(
          "flex h-4 w-4 cursor-pointer items-center justify-center rounded border",
          isChecked ? "bg-primary border-primary text-primary-foreground" : "border-input"
        )}
      >
        {isChecked && <CheckIcon className="h-3 w-3" />}
      </span>
      {children && (
        <span className="ml-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {children}
        </span>
      )}
    </label>
  );
}

export { Checkbox };
