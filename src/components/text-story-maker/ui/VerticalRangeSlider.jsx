import PropTypes from "prop-types";
import { Direction } from "react-range";
import { Range } from "react-range";

import { cn } from "@/lib/utils";

/**
 * VerticalRangeSlider component for rendering a vertical range slider.
 *
 * @param {Object} props - Component props.
 * @param {number} props.min - Minimum value for the slider.
 * @param {number} props.max - Maximum value for the slider.
 * @param {number} props.step - Step value for the slider.
 * @param {number[]} props.values - Current value of the slider.
 * @param {Function} props.onChange - Callback when the slider value changes.
 * @returns {JSX.Element} The rendered VerticalRangeSlider component.
 */
const VerticalRangeSlider = ({ min, max, step, values, onChange }) => {
  return (
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
          <div className="pointer-events-none absolute top-0 h-full w-full bg-white/50 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)]" />
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
              "flex h-4 w-4 transform items-center justify-center rounded-full bg-white outline-hidden",
              isDragged ? "ring-4 ring-white/30" : ""
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
  );
};

VerticalRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,

  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default VerticalRangeSlider;
