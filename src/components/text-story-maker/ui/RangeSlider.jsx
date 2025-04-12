import PropTypes from "prop-types";
import { Direction } from "react-range";
import { Range } from "react-range";

import { cn } from "@/lib/utils";

/**
 * RangeSlider component for rendering a vertical range slider.
 *
 * @param {Object} props - Component props.
 * @param {number} props.min - Minimum value for the slider.
 * @param {number} props.max - Maximum value for the slider.
 * @param {number} props.step - Step value for the slider.
 * @param {number[]} props.values - Current value of the slider.
 * @param {Function} props.onChange - Callback when the slider value changes.
 * @returns {JSX.Element} The rendered RangeSlider component.
 */
const RangeSlider = ({ min, max, step, values, onChange }) => {
  return (
    <div className="h-full rounded-md bg-neutral-800 p-5 px-3 shadow-sm shadow-neutral-300">
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={onChange}
        direction={Direction.Up}
        renderTrack={({ props: trackProps, children }) => (
          <div className="relative flex h-full w-2 items-center justify-center">
            <div
              {...trackProps}
              ref={trackProps.ref}
              className="relative z-10 h-full w-1"
            >
              {children}
            </div>
            <div className="pointer-events-none absolute top-0 h-full w-full rounded-xs bg-neutral-100 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)]" />
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
                "bg-accent-foreground flex size-4.5 transform items-center justify-center rounded-full outline-hidden",
                isDragged ? "ring-accent-foreground/60 ring-4" : ""
              )}
            ></div>
          );
        }}
      />
    </div>
  );
};

RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,

  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RangeSlider;
