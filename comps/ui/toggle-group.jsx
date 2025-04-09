"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { toggleVariants } from "./toggle";

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
  type: "single",
  value: null,
  onValueChange: () => {},
});

function ToggleGroup({
  className,
  variant,
  size,
  type = "single",
  value,
  defaultValue,
  onValueChange,
  children,
  ...props
}) {
  const [selectedValue, setSelectedValue] = React.useState(
    value || defaultValue || (type === "single" ? null : [])
  );

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleValueChange = React.useCallback(
    (itemValue) => {
      if (type === "single") {
        const newValue = selectedValue === itemValue ? null : itemValue;
        if (value === undefined) {
          setSelectedValue(newValue);
        }
        onValueChange?.(newValue);
      } else {
        const newValue = selectedValue.includes(itemValue)
          ? selectedValue.filter((v) => v !== itemValue)
          : [...selectedValue, itemValue];
        if (value === undefined) {
          setSelectedValue(newValue);
        }
        onValueChange?.(newValue);
      }
    },
    [type, selectedValue, value, onValueChange]
  );

  return (
    <div
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )}
      role={type === "single" ? "radiogroup" : "group"}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{
          variant,
          size,
          type,
          value: selectedValue,
          onValueChange: handleValueChange,
        }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </div>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  value,
  disabled,
  ...props
}) {
  const context = React.useContext(ToggleGroupContext);
  const isSelected =
    context.type === "single"
      ? context.value === value
      : context.value?.includes(value);

  return (
    <button
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-state={isSelected ? "on" : "off"}
      disabled={disabled}
      type="button"
      role={context.type === "single" ? "radio" : "checkbox"}
      aria-checked={isSelected}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )}
      onClick={() => context.onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export { ToggleGroup, ToggleGroupItem };
