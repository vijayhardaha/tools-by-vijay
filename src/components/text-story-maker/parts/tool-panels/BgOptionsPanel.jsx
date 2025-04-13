import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import PropTypes from "prop-types";
import "keen-slider/keen-slider.min.css";

import { bgColors } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import {
  PanelContainer,
  BoxContainer,
  BoxButton,
} from "@/components/text-story-maker/parts/tool-panels/OptionsPanelHelper";
import { cn } from "@/lib/utils";

// Custom hook to create a slider
const useSlider = (tool, options, updateOption) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    renderMode: "performance",
    initial: Object.keys(bgColors[tool]).indexOf(options.bgColor) + 1,
    slides: {
      origin: "center",
      perView: 7,
      spacing: 0,
    },
    slideChanged(s) {
      const colorKey = Object.keys(bgColors[tool])[s.track.details.abs];
      updateOption("bgColor", colorKey);
      updateOption("bgType", tool);
    },
  });
  return { sliderRef, slider };
};

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

  const sliders = {
    solid: useSlider("solid", options, updateOption),
    gradient: useSlider("gradient", options, updateOption),
    mesh: useSlider("mesh", options, updateOption),
  };

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
          <div className="keen-slider" ref={sliders[activeTool].sliderRef}>
            {Object.keys(bgColors[activeTool]).map((colorKey) => (
              <div key={colorKey} className="keen-slider__slide">
                <div className="flex items-center justify-center p-2">
                  <button
                    type="button"
                    className={cn(
                      btnBaseStyles.join(" "),
                      "size-14 shadow",
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
