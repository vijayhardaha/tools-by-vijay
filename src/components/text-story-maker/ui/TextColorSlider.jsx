import { useKeenSlider } from "keen-slider/react";
import PropTypes from "prop-types";

import { textColors } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import { cn } from "@/lib/utils";

import "keen-slider/keen-slider.min.css";

/**
 * TextColorSlider component for selecting text color.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Current text options.
 * @param {Function} props.updateOption - Function to update the text color option.
 * @returns {JSX.Element} The rendered TextColorSlider component.
 */
const TextColorSlider = ({ options, updateOption }) => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    renderMode: "performance",
    initial: parseInt(options.textColor, 10) || 0,
    slides: { perView: "auto", spacing: 0, origin: "center" },
    slideChanged: (slider) => {
      const currentIndex = slider.track.details.rel;
      updateOption("textColor", currentIndex);
    },
  });

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {textColors.map(({ bg }, colorKey) => (
          <div
            key={colorKey}
            className="keen-slider__slide relative block h-full !w-fit shrink-0"
          >
            <div className="flex items-center justify-center p-2">
              <button
                type="button"
                className={cn(
                  btnBaseStyles.join(" "),
                  "size-16 shadow ring-1 ring-white",
                  bg,
                  {
                    "ring-4": options.textColor === colorKey,
                  }
                )}
                onClick={() => {
                  updateOption("textColor", colorKey);
                }}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TextColorSlider.propTypes = {
  options: PropTypes.shape({
    textColor: PropTypes.number.isRequired,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default TextColorSlider;
