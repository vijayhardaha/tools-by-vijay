"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import {
  LuCheck as CheckIcon,
  LuChevronDown as ChevronDownIcon,
} from "react-icons/lu";

import { cn } from "@/lib/utils";

/**
 * Simplified Select component that handles all dropdown functionality internally
 *
 * @param {Object} props - Component props
 * @param {string} [props.value] - Controlled value for the select
 * @param {string} [props.defaultValue] - Default value for uncontrolled mode
 * @param {Function} [props.onValueChange] - Callback when value changes
 * @param {boolean} [props.disabled=false] - Whether the select is disabled
 * @param {Array} props.options - Array of options objects with value and label properties
 * @param {string} [props.placeholder='Select an option'] - Placeholder text when no value is selected
 * @param {string} [props.className] - Additional CSS classes for the select trigger
 * @param {string} [props.size='default'] - Size of the trigger button ('default' or 'sm')
 * @returns {JSX.Element} Select component
 */
function Select({
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  options = [],
  placeholder = "Select an option",
  className,
  size = "default",
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || value || ""
  );
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  // Get the label of the selected option
  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label || "";

  useEffect(() => {
    if (value !== undefined && value !== selectedValue) {
      setSelectedValue(value);
    }
  }, [value, selectedValue]);

  const handleValueChange = useCallback(
    (newValue) => {
      // Always update internal state regardless of controlled/uncontrolled mode
      setSelectedValue(newValue);

      // Call the callback if provided
      onValueChange?.(newValue);
      setOpen(false);
    },
    [onValueChange]
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  return (
    <div className="relative" data-slot="select" ref={selectRef} {...props}>
      {/* Select Trigger */}
      <button
        type="button"
        onClick={() => !disabled && setOpen(!open)}
        data-slot="select-trigger"
        data-size={size}
        disabled={disabled}
        aria-expanded={open}
        className={cn(
          // Layout & Flex
          "flex w-fit items-center justify-between gap-2",
          "rounded-lg border bg-transparent px-3 py-2 text-sm whitespace-nowrap",

          // Borders & Shadows
          "border-input shadow-xs",

          // State Styles
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20",

          // Transitions & Effects
          "transition-[color,box-shadow] outline-none",

          // Disabled state
          "disabled:cursor-not-allowed disabled:opacity-50",

          // Data attributes
          "data-[placeholder]:text-muted-foreground",
          "data-[size=default]:h-9 data-[size=sm]:h-8",

          // Slot-based styles
          "*:data-[slot=select-value]:line-clamp-1",
          "*:data-[slot=select-value]:flex",
          "*:data-[slot=select-value]:items-center",
          "*:data-[slot=select-value]:gap-2",

          // SVG-specific
          "[&_svg]:pointer-events-none",
          "[&_svg]:shrink-0",
          "[&_svg:not([class*='size-'])]:size-4",
          "[&_svg:not([class*='text-'])]:text-muted-foreground",
          className
        )}
      >
        <span data-slot="select-value">
          {selectedValue ? selectedLabel : placeholder}
        </span>
        <span className="pointer-events-none">
          <ChevronDownIcon className="size-4 opacity-50" />
        </span>
      </button>

      {/* Dropdown Content */}
      {open && (
        <div
          data-slot="select-content"
          className="bg-popover text-popover-foreground border-input absolute left-0 z-50 mt-1 max-h-60 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-lg border shadow-md"
        >
          <div className="flex flex-col gap-0.5 p-1">
            {options.map((option) => {
              const isSelected = selectedValue === option.value;
              const isDisabled = option.disabled || false;

              return (
                <div
                  key={option.value}
                  role="option"
                  tabIndex={isDisabled ? -1 : 0}
                  aria-selected={isSelected}
                  aria-disabled={isDisabled}
                  data-slot="select-item"
                  data-selected={isSelected}
                  className={cn(
                    "relative flex w-full items-center gap-2",
                    "py-1.5 pr-8 pl-2",
                    "rounded-lg text-sm outline-hidden select-none",
                    "hover:bg-muted focus:bg-muted aria-disabled:opacity-50",
                    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    "[&_svg:not([class*='text-'])]:text-muted-foreground",
                    isSelected && "bg-muted",
                    isDisabled
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!isDisabled) {
                      handleValueChange(option.value);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (!isDisabled && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      handleValueChange(option.value);
                    }
                  }}
                >
                  <span className="absolute right-2 flex size-3.5 items-center justify-center">
                    {isSelected && <CheckIcon className="size-4" />}
                  </span>
                  <span className="whitespace-nowrap">{option.label}</span>
                </div>
              );
            })}

            {options.length === 0 && (
              <div className="text-muted-foreground px-2 py-1.5 text-xs">
                No options available
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

Select.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onValueChange: PropTypes.func,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["default", "sm"]),
};

export { Select };
