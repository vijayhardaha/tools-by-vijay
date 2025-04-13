import PropTypes from "prop-types";
import { Direction } from "react-range";
import { Range } from "react-range";

import { cn } from "@/lib/utils";

/**
 * RangeSlider component for rendering a horizontal range slider.
 *
 * @param {Object} props - Component props.
 * @param {number} props.min - Minimum value for the slider.
 * @param {number} props.max - Maximum value for the slider.
 * @param {number} props.step - Step value for the slider.
 * @param {number[]} props.values - Current value of the slider.
 * @param {Function} props.onChange - Callback when the slider value changes.
 * @returns {JSX.Element} The rendered RangeSlider component.
 */
export const RangeSlider = ({ min, max, step, values, onChange }) => {
  /**
   * Formats a numeric value to a string with up to three decimal places, avoiding unnecessary trailing zeros.
   *
   * @param {number} value - The numeric value to format.
   * @returns {string} The formatted value as a string.
   */
  const formatValue = (value) => {
    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  return (
    <Range
      step={step}
      min={min}
      max={max}
      values={values}
      onChange={onChange}
      direction={Direction.Right}
      renderTrack={({ props: trackProps, children }) => (
        <div className="relative flex h-1 w-full items-center justify-center">
          <div
            {...trackProps}
            ref={trackProps.ref}
            className="relative z-10 h-0.5 w-full rounded-full bg-white"
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
              "flex size-3 transform items-center justify-center rounded-full bg-white outline-hidden",
              isDragged ? "size-6 ring-4 ring-white/30" : ""
            )}
          >
            {/* Tooltip */}
            <div
              className={`absolute -top-9 flex items-center justify-center rounded-md bg-white px-3 py-1 text-xs text-neutral-900 outline-hidden ${!isDragged ? "hidden" : ""}`}
              role="tooltip"
              aria-live="polite"
            >
              {formatValue(values[0])}
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-8 border-r-8 border-l-8 border-t-white border-r-transparent border-l-transparent"></div>
            </div>
          </div>
        );
      }}
    />
  );
};

RangeSlider.propTypes = {
  /**
   * Minimum value for the slider.
   */
  min: PropTypes.number.isRequired,
  /**
   * Maximum value for the slider.
   */
  max: PropTypes.number.isRequired,
  /**
   * Step value for the slider.
   */
  step: PropTypes.number.isRequired,
  /**
   * Current value(s) of the slider.
   */
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * Callback function triggered when the slider value changes.
   */
  onChange: PropTypes.func.isRequired,
};
