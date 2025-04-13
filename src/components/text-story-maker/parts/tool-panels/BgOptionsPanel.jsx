import { useState } from "react"; // Removed useRef

import { useKeenSlider } from "keen-slider/react"; // Import keen-slider
import PropTypes from "prop-types";
import "keen-slider/keen-slider.min.css"; // Import keen-slider styles

import { bgColors } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import {
  PanelContainer,
  BoxContainer,
  BoxButton,
} from "@/components/text-story-maker/parts/tool-panels/OptionsPanelHelper";
import { cn } from "@/lib/utils";

/**
 * BgOptionsPanel component provides a toolbar for selecting background types.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Options object containing the current background settings.
 * @param {string} props.options.bgType - The current background type (e.g., "solid", "gradient", "mesh").
 * @param {string} props.options.bgColor - The current background color key.
 * @param {Function} props.updateOption - Function to update the selected background option.
 * @returns {JSX.Element} The rendered BgOptionsPanel component.
 */
const BgOptionsPanel = ({ options, updateOption }) => {
  const [activeTool, setActiveTool] = useState(options.bgType);

  const getSliderParams = (tool) => {
    const initialSlideIndex = Object.keys(bgColors[tool]).indexOf(
      options.bgColor
    );

    return {
      mode: "free-snap",
      renderMode: "performance",
      initial: initialSlideIndex > 0 ? initialSlideIndex : 1,
      slides: { perView: "auto", spacing: 0, origin: "center" },
      loop: false,
      slideChanged: (slider) => {
        const colorKey = Object.keys(bgColors[tool])[slider.track.details.rel];
        updateOption("bgType", tool);
        updateOption("bgColor", colorKey);
      },
    };
  };

  const [sliderRef] = useKeenSlider(
    activeTool ? getSliderParams(activeTool) : null
  );

  const handleToolChange = (tool) => {
    if (activeTool === tool) return;
    setActiveTool(tool);
    updateOption("bgType", tool);
    if (options.bgType !== tool) {
      updateOption("bgColor", "color1");
    }
  };

  return (
    <PanelContainer>
      {activeTool && (
        <div className="relative w-full overflow-hidden">
          <div ref={sliderRef} className="keen-slider">
            {Object.keys(bgColors[activeTool]).map((colorKey) => (
              <div
                key={colorKey}
                className="keen-slider__slide relative block h-full !w-fit shrink-0"
              >
                <div className="flex items-center justify-center p-2">
                  <button
                    type="button"
                    className={cn(
                      btnBaseStyles.join(" "),
                      "size-16 shadow",
                      "ring-1 ring-white",
                      bgColors[activeTool][colorKey],
                      {
                        "ring-4": options.bgColor === colorKey,
                      }
                    )}
                    onClick={() => {
                      updateOption("bgType", activeTool);
                      updateOption("bgColor", colorKey);
                    }}
                  ></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <BoxContainer>
        <BoxButton
          onClick={(e) => {
            e.preventDefault();
          }}
          screenReaderText="Text Color Tool"
          className="pointer-events-none p-0"
        >
          <div className="size-10 rounded-full bg-[conic-gradient(from_0deg,_red,_yellow,_lime,_cyan,_blue,_magenta,_red)] shadow-lg"></div>
        </BoxButton>
        <BoxButton
          type="text"
          active={activeTool === "solid"}
          onClick={() => handleToolChange("solid")}
        >
          Solid
        </BoxButton>
        <BoxButton
          type="text"
          active={activeTool === "gradient"}
          onClick={() => handleToolChange("gradient")}
        >
          Gradient
        </BoxButton>
        <BoxButton
          type="text"
          active={activeTool === "mesh"}
          onClick={() => handleToolChange("mesh")}
        >
          Mesh
        </BoxButton>
      </BoxContainer>
    </PanelContainer>
  );
};

BgOptionsPanel.propTypes = {
  options: PropTypes.shape({
    bgType: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default BgOptionsPanel;
