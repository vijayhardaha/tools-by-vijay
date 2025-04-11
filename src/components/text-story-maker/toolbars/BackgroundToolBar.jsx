import { useState, useRef } from "react";

import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { bgColors } from "@/components/text-story-maker/constants/bgColors";
import {
  ToolBarWrapper,
  ToolBarButton,
} from "@/components/text-story-maker/toolbars/ToolBarBase";
import { cn } from "@/lib/utils";

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
  const sliderRef = useRef(null);

  const handleToolChange = (tool) => {
    if (activeTool === tool) return;
    setActiveTool(tool);
    updateOption("bgType", tool);
    if (options.bgType !== tool) {
      updateOption("bgColor", "color1");
      sliderRef.current.slickGoTo(
        Object.keys(bgColors[tool]).indexOf("color1")
      );
    }
  };

  return (
    <>
      <div className="absolute bottom-0 left-0 z-20 flex h-auto w-full flex-col items-center justify-center gap-4 p-4 py-6">
        {activeTool && (
          <div className="slider-container w-full">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={false}
              arrows={false}
              speed={100}
              slidesToShow={1}
              slidesToScroll={1}
              variableWidth={true}
              centerMode={true}
              swipeToSlide={true}
              focusOnSelect={true}
              initialSlide={Object.keys(bgColors[activeTool]).indexOf(
                options.bgColor
              )}
            >
              {Object.keys(bgColors[activeTool]).map((colorKey) => (
                <div key={colorKey} className="!inline-flex p-1">
                  <button
                    type="button"
                    className={cn(
                      "relative h-10 w-10 rounded-lg shadow-sm",
                      "cursor-pointer outline-none focus-visible:outline-none",
                      "transition-transform duration-300 ease-in-out",
                      "active:scale-95",
                      "ring-1 ring-white/85",
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
              ))}
            </Slider>
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
      </div>
    </>
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
