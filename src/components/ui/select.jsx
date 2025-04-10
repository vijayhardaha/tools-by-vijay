"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import PropTypes from "prop-types";
import {
  LuCheck as CheckIcon,
  LuChevronDown as ChevronDownIcon,
  LuChevronUp as ChevronUpIcon,
} from "react-icons/lu";

import { cn } from "@/lib/utils";

const SelectContext = createContext({
  selectedValue: "",
  handleValueChange: () => {},
  open: false,
  setOpen: () => {},
  disabled: false,
});

/**
 * Select component for dropdown selection functionality
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} [props.value] - Controlled value for the select
 * @param {string} [props.defaultValue] - Default value for uncontrolled mode
 * @param {Function} [props.onValueChange] - Callback when value changes
 * @param {boolean} [props.disabled=false] - Whether the select is disabled
 * @returns {JSX.Element} Select component
 */
function Select({
  children,
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || value || ""
  );
  const [open, setOpen] = useState(false);

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
  const selectRef = useRef(null);

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
    <SelectContext.Provider
      value={{
        selectedValue,
        handleValueChange,
        open,
        setOpen,
        disabled,
      }}
    >
      <div className="relative" data-slot="select" ref={selectRef} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onValueChange: PropTypes.func,
  disabled: PropTypes.bool,
};

/**
 * SelectValue component to display the currently selected value
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to display when a value is selected
 * @param {string} [props.placeholder] - Text to display when no value is selected
 * @returns {JSX.Element} SelectValue component
 */
function SelectValue({ children, placeholder, ...props }) {
  const { selectedValue } = useContext(SelectContext);

  // If there's a selected value, show it, otherwise show the placeholder
  return (
    <span data-slot="select-value" {...props}>
      {selectedValue ? children : placeholder}
    </span>
  );
}

SelectValue.propTypes = {
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
};

/**
 * SelectTrigger component for the button that opens the dropdown
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.size='default'] - Size of the trigger button
 * @param {React.ReactNode} props.children - Content of the trigger button
 * @returns {JSX.Element} SelectTrigger component
 */
function SelectTrigger({ className, size = "default", children, ...props }) {
  const { open, setOpen, disabled } = useContext(SelectContext);

  return (
    <button
      type="button"
      onClick={() => !disabled && setOpen(!open)}
      data-slot="select-trigger"
      data-size={size}
      disabled={disabled}
      aria-expanded={open}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <span className="pointer-events-none">
        <ChevronDownIcon className="size-4 opacity-50" />
      </span>
    </button>
  );
}

SelectTrigger.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["default", "sm"]),
  children: PropTypes.node.isRequired,
};

/**
 * SelectContent component that contains the dropdown options
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Content of the dropdown
 * @param {string} [props.position='popper'] - Position strategy for the dropdown
 * @returns {JSX.Element|null} SelectContent component or null if closed
 */
function SelectContent({ className, children, position = "popper", ...props }) {
  const { open } = useContext(SelectContext);

  if (!open) return null;

  return (
    <div
      data-slot="select-content"
      className={cn(
        "bg-popover text-popover-foreground absolute z-50 max-h-60 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "left-0 mt-1",
        className
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
}

SelectContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
};

/**
 * SelectLabel component for group labels within the dropdown
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Content of the label
 * @returns {JSX.Element} SelectLabel component
 */
function SelectLabel({ className, children, ...props }) {
  return (
    <div
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    >
      {children}
    </div>
  );
}

SelectLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * SelectItem component represents a selectable option in the dropdown
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Content of the select item
 * @param {string} props.value - Value associated with this item
 * @param {boolean} [props.disabled=false] - Whether this item is disabled
 * @returns {JSX.Element} SelectItem component
 */
function SelectItem({
  className,
  children,
  value,
  disabled = false,
  ...props
}) {
  const { selectedValue, handleValueChange } = useContext(SelectContext);
  const isSelected = selectedValue === value;

  // Fix the handleClick function by using event parameter
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Stop event from bubbling

    if (!disabled) {
      handleValueChange(value);
    }
  };

  const handleKeyDown = (e) => {
    if (!disabled && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      handleValueChange(value);
    }
  };

  return (
    <div
      data-slot="select-item"
      data-selected={isSelected}
      aria-disabled={disabled}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground hover:bg-accent/50 relative flex w-full items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        isSelected && "bg-accent/50",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="option"
      aria-selected={isSelected}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        {isSelected && <CheckIcon className="size-4" />}
      </span>
      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
}

SelectItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

/**
 * SelectSeparator creates a horizontal divider between select options
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes for styling the separator
 * @returns {JSX.Element} SelectSeparator component
 */
function SelectSeparator({ className, ...props }) {
  return (
    <div
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

SelectSeparator.propTypes = {
  className: PropTypes.string,
};

/**
 * SelectScrollUpButton provides a button to scroll up in the dropdown
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} SelectScrollUpButton component
 */
function SelectScrollUpButton({ className, ...props }) {
  return (
    <div
      data-slot="select-scroll-up-button"
      role="button"
      tabIndex={0}
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      onClick={() => {
        const content = document.querySelector('[data-slot="select-content"]');
        if (content) content.scrollTop -= 40;
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const content = document.querySelector(
            '[data-slot="select-content"]'
          );
          if (content) content.scrollTop -= 40;
        }
      }}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </div>
  );
}

SelectScrollUpButton.propTypes = {
  className: PropTypes.string,
};

/**
 * SelectScrollDownButton provides a button to scroll down in the dropdown
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} SelectScrollDownButton component
 */
function SelectScrollDownButton({ className, ...props }) {
  return (
    <div
      data-slot="select-scroll-down-button"
      role="button"
      tabIndex={0}
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      onClick={() => {
        const content = document.querySelector('[data-slot="select-content"]');
        if (content) content.scrollTop += 40;
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const content = document.querySelector(
            '[data-slot="select-content"]'
          );
          if (content) content.scrollTop += 40;
        }
      }}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </div>
  );
}

SelectScrollDownButton.propTypes = {
  className: PropTypes.string,
};

export {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
