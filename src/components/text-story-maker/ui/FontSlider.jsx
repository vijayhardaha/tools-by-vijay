import { useKeenSlider } from "keen-slider/react";
import PropTypes from "prop-types";

import { fonts } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import { cn } from "@/lib/utils";

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
    <div className="relative w-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {fonts.map(({ label }, font) => (
          <div
            key={font}
            className="keen-slider__slide relative block h-full !w-fit shrink-0"
          >
            <div className="flex items-center justify-center p-1">
              <button
                type="button"
                className={cn(
                  btnBaseStyles.join(" "),
                  "p-6 py-3 leading-relaxed font-medium",
                  "bg-neutral-800 text-white",
                  {
                    "bg-white text-neutral-900": options.textFont === font,
                  },
                  getFontClass(font)
                )}
                onClick={() => {
                  updateOption("textFont", font);
                }}
              >
                <span className="truncate overflow-hidden whitespace-nowrap">
                  {label}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
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
