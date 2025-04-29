"use client";

import { useState, ChangeEvent, ReactNode } from "react";

import { LuCheck as CheckIcon } from "react-icons/lu";

import { cn } from "@/utils/classNameUtils";

/**
 * Props for the RadioBox component
 */
interface RadioBoxProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
  children?: ReactNode;
}

/**
 * RadioBox component for selecting a single option from a group.
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
}: RadioBoxProps) {
  const [internalChecked, setInternalChecked] = useState(controlledChecked || false);

  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  /**
   * Handles the radio box state change event
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
      data-slot="radiobox"
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
        type="radio"
        id={id}
        name={name}
        className="hidden cursor-pointer"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      />
      <div
        data-slot="radiobox-indicator"
        className={cn(
          "flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border",
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

export { RadioBox };
