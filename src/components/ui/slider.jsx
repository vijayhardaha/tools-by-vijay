"use client";

import { Range } from "react-range";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

/**
 * A simplified slider component that allows users to select a value by moving a handle along a track.
 *
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the component
 * @param {number} [props.min=0] - Minimum value of the slider
 * @param {number} [props.max=100] - Maximum value of the slider
 * @param {number} [props.step=1] - Step increment between values
 * @param {number} [props.value=0] - Current value for the slider
 * @param {Function} [props.onValueChange] - Callback function when value changes
 * @param {boolean} [props.disabled=false] - Whether the slider is disabled
 * @returns {JSX.Element} The Slider component
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
}) {
  const [values, setValues] = useState([value]);

  // Update internal values when controlled value changes
  useEffect(() => {
    setValues([value]);
  }, [value]);

  // Handle value changes
  const handleChange = (newValues) => {
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
          // Extract key from thumbProps to avoid React warnings
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
              {/* Tooltip */}
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

Slider.propTypes = {
  /** Additional CSS classes to apply to the component */
  className: PropTypes.string,
  /** Minimum value of the slider */
  min: PropTypes.number,
  /** Maximum value of the slider */
  max: PropTypes.number,
  /** Step increment between values */
  step: PropTypes.number,
  /** Current value for the slider */
  value: PropTypes.number,
  /** Callback function when value changes */
  onValueChange: PropTypes.func,
  /** Whether the slider is disabled */
  disabled: PropTypes.bool,
};

export { Slider };
