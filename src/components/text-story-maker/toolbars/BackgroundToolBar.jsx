import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import PropTypes from "prop-types";
import "keen-slider/keen-slider.min.css";

import { bgColors } from "@/components/text-story-maker/constants";
import {
  ToolBarWrapper,
  ToolBarButton,
  ToolsBox,
} from "@/components/text-story-maker/toolbars/ToolBarBase";
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
      perView: 9,
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
 * BackgroundToolBar component provides a toolbar for selecting background types.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Options object containing the current background settings.
 * @param {string} props.options.bgType - The current background type (e.g., "solid", "gradient", "mesh").
 * @param {string} props.options.bgColor - The current background color key.
 * @param {Function} props.updateOption - Function to update the selected background option.
 * @returns {JSX.Element} The rendered BackgroundToolBar component.
 */
const BackgroundToolBar = ({ options, updateOption }) => {
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
    <ToolsBox>
      {activeTool && (
        <div className="relative w-full overflow-hidden">
          <div className="keen-slider" ref={sliders[activeTool].sliderRef}>
            {Object.keys(bgColors[activeTool]).map((colorKey) => (
              <div key={colorKey} className="keen-slider__slide">
                <div className="flex items-center justify-center p-1">
                  <button
                    type="button"
                    className={cn(
                      "flex items-center justify-center",
                      "relative h-10 w-10 rounded-lg",
                      "shadow-sm ring-1 shadow-black/30 ring-white/85",
                      "cursor-pointer outline-none focus-visible:outline-none",
                      "transition-transform duration-300 ease-in-out active:scale-97",
                      bgColors[activeTool][colorKey],
                      {
                        "ring-white ring-offset-2":
                          options.bgColor === colorKey,
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
      <ToolBarWrapper>
        <ToolBarButton
          type="text"
          active={activeTool === "solid"}
          onClick={() => handleToolChange("solid")}
        >
          Solid
        </ToolBarButton>
        <ToolBarButton
          type="text"
          active={activeTool === "gradient"}
          onClick={() => handleToolChange("gradient")}
        >
          Gradient
        </ToolBarButton>
        <ToolBarButton
          type="text"
          active={activeTool === "mesh"}
          onClick={() => handleToolChange("mesh")}
        >
          Mesh
        </ToolBarButton>
      </ToolBarWrapper>
    </ToolsBox>
  );
};

BackgroundToolBar.propTypes = {
  options: PropTypes.shape({
    bgType: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default BackgroundToolBar;
