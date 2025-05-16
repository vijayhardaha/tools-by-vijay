import React from "react";

import { useKeenSlider } from "keen-slider/react";

import { bgColors } from "@/components/text-story-maker/constants";
import { BgColors } from "@/components/text-story-maker/constants/bgColors";
import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import { UpdateOptionsSetsType } from "@/components/text-story-maker/TextStoryMakerTool";
import { cn } from "@/utils/classNameUtils";

// eslint-disable-next-line import/order
import "keen-slider/keen-slider.min.css";

interface BgColorsSliderProps extends UpdateOptionsSetsType {
  tool: string;
}

/**
 * BgColorsSlider component renders a slider for selecting background colors.
 *
 * @param {BgColorsSliderProps} props - Component props.
 * @returns {React.JSX.Element} The rendered BgColorsSlider component.
 */
const BgColorsSlider: React.FC<BgColorsSliderProps> = ({
  tool,
  options,
  updateOption,
}: BgColorsSliderProps): React.JSX.Element => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    renderMode: "performance",
    initial: parseInt(options.bgColor.toString(), 10) || 0,
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
        {bgColors[tool as keyof BgColors].map((bgColor, colorKey) => (
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
                    "ring-4": options.bgColor.toString() === colorKey.toString(),
                  }
                )}
                onClick={() => {
                  updateOption("bgType", tool);
                  updateOption("bgColor", colorKey);
                }}
                role="radio"
                aria-checked={options.bgColor.toString() === colorKey.toString()}
                aria-label={`${tool} background color option ${colorKey + 1}`}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BgColorsSlider;
