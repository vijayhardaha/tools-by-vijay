"use client";

import { useEffect, useState } from "react";

import { Range } from "react-range";

import { cn } from "@/utils/classNameUtils";

/**
 * Props for the Slider component
 */
interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
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
}: SliderProps) {
  const [values, setValues] = useState([value]);

  useEffect(() => {
    setValues([value]);
  }, [value]);

  const handleChange = (newValues: number[]) => {
    setValues(newValues);
    onValueChange?.(newValues[0]);
  };

  return (
    <div
      data-slot="slider"
      data-disabled={disabled || undefined}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={handleChange}
        disabled={disabled}
        renderTrack={({ props: trackProps, children }) => (
          <div className="flex h-6 w-full">
            <div
              {...trackProps}
              ref={trackProps.ref}
              className="h-1 w-full self-center rounded-full bg-stone-200"
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props: thumbProps, isDragged }) => {
          const { key, ...thumbPropsWithoutKey } = thumbProps;

          return (
            <div
              {...thumbPropsWithoutKey}
              key={key}
              role="slider"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={values[0]}
              className={cn(
                "bg-primary flex h-4 w-4 transform items-center justify-center rounded-full outline-hidden",
                isDragged ? "ring-primary/20 ring-4" : ""
              )}
            >
              <div
                className={cn(
                  "absolute -top-9 flex items-center justify-center rounded-md bg-slate-900 px-3 py-1 text-xs text-white outline-hidden",
                  !isDragged ? "hidden" : ""
                )}
                role="tooltip"
                aria-live="polite"
              >
                {values[0]}
                <div className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-8 border-r-8 border-l-8 border-t-slate-900 border-r-transparent border-l-transparent"></div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export { Slider };
