import { useState, useRef } from "react"; // Import useRef

import PropTypes from "prop-types";
import { FreeMode } from "swiper/modules"; // Import freeMode plugin
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css";

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
  const swiperRef = useRef(null);

  const getSliderParams = (tool) => {
    const initialSlideIndex = Object.keys(bgColors[tool]).indexOf(
      options.bgColor
    );

    return {
      centeredSlides: true,
      slidesPerView: "auto",
      freeMode: true,
      loop: false,
      initialSlide: initialSlideIndex >= 0 ? initialSlideIndex : 0, // Set initial slide
      modules: [FreeMode],
      onSwiper: (swiper) => {
        swiperRef.current = swiper; // Store the Swiper instance
      },
      onSlideChange: (swiper) => {
        console.log(swiper.activeIndex);
        const colorKey = Object.keys(bgColors[tool])[swiper.activeIndex];
        updateOption("bgType", tool);
        updateOption("bgColor", colorKey);
      },
    };
  };

  const handleToolChange = (tool) => {
    if (activeTool === tool) return;
    console.log(tool);
    setActiveTool(tool);
    updateOption("bgType", tool);
    if (options.bgType !== tool) {
      updateOption("bgColor", "color1");
      if (swiperRef.current) {
        setTimeout(() => {
          swiperRef.current.slideTo(0);
        }, 100);
      }
    }
  };

  return (
    <PanelContainer>
      {activeTool && (
        <div className="relative w-full overflow-hidden">
          <Swiper {...getSliderParams(activeTool)}>
            {Object.keys(bgColors[activeTool]).map((colorKey) => (
              <SwiperSlide key={colorKey} className="!w-fit">
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
              </SwiperSlide>
            ))}
          </Swiper>
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
