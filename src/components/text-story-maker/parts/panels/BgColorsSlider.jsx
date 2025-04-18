import { useKeenSlider } from "keen-slider/react";
import PropTypes from "prop-types";

import { bgColors } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import { cn } from "@/utils/classNameUtils";

// eslint-disable-next-line importPlugin/order
import "keen-slider/keen-slider.min.css";

/**
 * BgColorsSlider component renders a slider for selecting background colors.
 *
 * @param {Object} props - Component props.
 * @param {string} props.tool - The active background tool type (e.g., "solid", "gradient", "mesh").
 * @param {Object} props.options - Options object containing the current background settings.
 * @param {string} props.options.bgType - The current background type.
 * @param {string} props.options.bgColor - The current background color key.
 * @param {Function} props.updateOption - Function to update the selected background option.
 * @returns {JSX.Element} The rendered BgColorsSlider component.
 */
const BgColorsSlider = ({ tool, options, updateOption }) => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    renderMode: "performance",
    initial: parseInt(options.bgColor, 10) || 0,
    slides: { perView: "auto", spacing: 0, origin: "center" },
    slideChanged: (slider) => {
      const currentIndex = slider.track.details.rel;
      updateOption("bgType", tool);
      updateOption("bgColor", currentIndex);
    },
  });

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="keen-slider"
        role="radiogroup"
        aria-label={`${tool} background color options`}
      >
        {bgColors[tool].map((bgColor, colorKey) => (
          <div key={colorKey} className="keen-slider__slide relative block h-full !w-fit shrink-0">
            <div className="flex items-center justify-center p-1">
              <button
                type="button"
                className={cn(
                  btnBaseStyles.join(" "),
                  "size-12 shadow",
                  "ring-1 ring-white",
                  bgColor,
                  {
                    "ring-4": options.bgColor === colorKey,
                  }
                )}
                onClick={() => {
                  updateOption("bgType", tool);
                  updateOption("bgColor", colorKey);
                }}
                role="radio"
                aria-checked={options.bgColor === colorKey}
                aria-label={`${tool} background color option ${colorKey + 1}`}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

BgColorsSlider.propTypes = {
  tool: PropTypes.string.isRequired,
  options: PropTypes.shape({
    bgType: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default BgColorsSlider;
