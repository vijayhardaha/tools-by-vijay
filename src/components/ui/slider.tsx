"use client";

import { useEffect, useState } from "react";

import { cn } from "@/utils/classNameUtils";

/**
 * Props for the Slider component
 */
interface ISliderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  disabled?: boolean;
}

/**
 * A simplified slider component that allows users to select a value by moving a handle along a track.
 */
function Slider({
  className,
  min = 0,
  max = 100,
  step = 1,
  value = min,
  onValueChange,
  disabled = false,
  ...props
}: ISliderProps) {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setCurrentValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div
      className={cn("relative flex w-full items-center py-3 data-[disabled]:opacity-50", className)}
    >
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          "bg-input m-0 h-[1px] flex-1 appearance-none border-none outline-none",
          "focus:outline-none",
          "active:[&::-webkit-slider-thumb]:ring-primary/15 active:[&::-webkit-slider-thumb]:h-6 active:[&::-webkit-slider-thumb]:w-6 active:[&::-webkit-slider-thumb]:ring-4",
          "active:[&::-moz-range-thumb]:ring-primary/15 active:[&::-moz-range-thumb]:h-6 active:[&::-moz-range-thumb]:w-6 active:[&::-moz-range-thumb]:ring-4",
          "[&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-move [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-[width,height] [&::-webkit-slider-thumb]:duration-100",
          "[&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:cursor-move [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:transition-[width,height] [&::-moz-range-thumb]:duration-100"
        )}
        {...props}
      />
    </div>
  );
}

export { Slider };
