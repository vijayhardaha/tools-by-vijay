import React from "react";

import { cn } from "@/utils/classNameUtils";

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  values: number[];
  onChange: (values: number[]) => void;
  label?: string;
  valueLabel?: string;
}

/**
 * RangeSlider component using native input[type="range"] styled like the Slider component.
 */
export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step,
  values,
  onChange,
  label = "",
  valueLabel = "",
}: RangeSliderProps): React.JSX.Element => {
  const value = values[0];

  const formatValue = (val: number): string =>
    Number(val).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

  const labelID = `slider-label-${label.replace(/\s+/g, "-").toLowerCase()}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange([Number(e.target.value)]);
  };

  return (
    <div className="slider-container space-y-1.25">
      {label && (
        <label htmlFor={labelID} className="text-sm font-medium">
          {label} -{" "}
          <code className="rounded-xs bg-white px-0.5 text-xs font-medium text-pink-500">{`${formatValue(value)}${valueLabel ? ` ${valueLabel}` : ""}`}</code>
        </label>
      )}
      <div className={cn("relative flex w-full items-center py-3")}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          id={label ? labelID : undefined}
          onChange={handleChange}
          className={cn(
            "bg-input m-0 h-[1px] flex-1 appearance-none border-none outline-none",
            "focus:outline-none",
            "active:[&::-webkit-slider-thumb]:ring-input/35 active:[&::-webkit-slider-thumb]:h-6 active:[&::-webkit-slider-thumb]:w-6 active:[&::-webkit-slider-thumb]:ring-4",
            "active:[&::-moz-range-thumb]:ring-input/35 active:[&::-moz-range-thumb]:h-6 active:[&::-moz-range-thumb]:w-6 active:[&::-moz-range-thumb]:ring-4",
            "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-move [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:transition-[width,height] [&::-webkit-slider-thumb]:duration-100",
            "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-move [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:transition-[width,height] [&::-moz-range-thumb]:duration-100"
          )}
        />
      </div>
    </div>
  );
};
