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
            className="relative z-10 h-0.5 w-full bg-white"
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
              "bg-accent-foreground flex size-4 transform items-center justify-center rounded-full outline-hidden",
              isDragged ? "ring-accent-foreground/30 ring-4" : ""
            )}
          ></div>
        );
      }}
    />
  );
};

RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,

  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};
