"use client";

import * as React from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const SelectContext = React.createContext({
  selectedValue: "",
  handleValueChange: () => {},
  open: false,
  setOpen: () => {},
  disabled: false,
});

function Select({
  children,
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  ...props
}) {
  const [selectedValue, setSelectedValue] = React.useState(
    defaultValue || value || ""
  );
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (value !== undefined && value !== selectedValue) {
      setSelectedValue(value);
    }
  }, [value, selectedValue]);

  const handleValueChange = React.useCallback(
    (newValue) => {
      if (value === undefined) {
        setSelectedValue(newValue);
      }
      onValueChange?.(newValue);
      setOpen(false);
    },
    [onValueChange, value]
  );

  // Close dropdown when clicking outside
  const selectRef = React.useRef(null);

  React.useEffect(() => {
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
      <div data-slot="select" ref={selectRef} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

function SelectGroup({ children, ...props }) {
  return (
    <div data-slot="select-group" {...props}>
      {children}
    </div>
  );
}

function SelectValue({ children, placeholder, ...props }) {
  const { selectedValue } = React.useContext(SelectContext);
  return (
    <span data-slot="select-value" {...props}>
      {selectedValue ? children : placeholder}
    </span>
  );
}

function SelectTrigger({ className, size = "default", children, ...props }) {
  const { open, setOpen, disabled } = React.useContext(SelectContext);

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

function SelectContent({ className, children, position = "popper", ...props }) {
  const { open } = React.useContext(SelectContext);

  if (!open) return null;

  return (
    <div
      data-slot="select-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 absolute z-50 max-h-60 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "left-0 mt-1",
        className
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
}

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

function SelectItem({
  className,
  children,
  value,
  disabled = false,
  ...props
}) {
  const { selectedValue, handleValueChange } = React.useContext(SelectContext);
  const isSelected = selectedValue === value;

  return (
    <div
      data-slot="select-item"
      data-selected={isSelected}
      data-disabled={disabled}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        isSelected && "bg-accent/50",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
      onClick={() => !disabled && handleValueChange(value)}
      role="option"
      aria-selected={isSelected}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        {isSelected && <CheckIcon className="size-4" />}
      </span>
      <span>{children}</span>
    </div>
  );
}

function SelectSeparator({ className, ...props }) {
  return (
    <div
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({ className, ...props }) {
  return (
    <div
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      onClick={() => {
        const content = document.querySelector('[data-slot="select-content"]');
        if (content) content.scrollTop -= 40;
      }}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </div>
  );
}

function SelectScrollDownButton({ className, ...props }) {
  return (
    <div
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      onClick={() => {
        const content = document.querySelector('[data-slot="select-content"]');
        if (content) content.scrollTop += 40;
      }}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </div>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
