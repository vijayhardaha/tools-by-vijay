import { useKeenSlider } from "keen-slider/react";
import PropTypes from "prop-types";

import { fonts } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import { cn } from "@/utils/classNameUtils";

import { getFontClass } from "../lib/utils";

import "keen-slider/keen-slider.min.css";

/**
 * FontSlider component for selecting font family.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Current text options.
 * @param {Function} props.updateOption - Function to update the font option.
 * @returns {JSX.Element} The rendered FontSlider component.
 */
const FontSlider = ({ options, updateOption }) => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    renderMode: "performance",
    initial: parseInt(options.textFont, 10) || 0,
    slides: { perView: "auto", spacing: 0, origin: "center" },
    slideChanged: (slider) => {
      const currentIndex = slider.track.details.rel;
      updateOption("textFont", currentIndex);
    },
  });

  return (
    <div
      className="relative w-full overflow-hidden"
      role="region"
      aria-label="Font selection slider"
    >
      <div
        ref={sliderRef}
        className="keen-slider"
        aria-roledescription="carousel"
      >
        {fonts.map(({ label }, font) => (
          <div
            key={font}
            className="keen-slider__slide relative block h-full !w-fit shrink-0"
            role="group"
            aria-roledescription="slide"
          >
            <div className="flex items-center justify-center p-1">
              <button
                type="button"
                className={cn(
                  btnBaseStyles.join(" "),
                  "rounded-md p-1.5 px-3",
                  "text-sm leading-relaxed font-medium",
                  "bg-neutral-800 text-white",
                  {
                    "bg-white text-neutral-900": options.textFont === font,
                  },
                  getFontClass(font)
                )}
                onClick={() => {
                  updateOption("textFont", font);
                }}
                aria-label={`Select ${label} font`}
                aria-pressed={options.textFont === font}
              >
                <span className="truncate overflow-hidden whitespace-nowrap">
                  {label}
                </span>
                {options.textFont === font && (
                  <span className="sr-only">(currently selected)</span>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only">
        Use left and right arrow keys to navigate between font options
      </span>
    </div>
  );
};

FontSlider.propTypes = {
  options: PropTypes.shape({
    textFont: PropTypes.number.isRequired,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default FontSlider;
