import { useState, useRef } from "react";

import PropTypes from "prop-types";
import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiTextAlignCenter as AlignCenterIcon } from "react-icons/pi";
import { PiTextAlignLeft as AlignLeftIcon } from "react-icons/pi";
import { PiTextAlignRight as AlignRightIcon } from "react-icons/pi";
import { PiMagicWand as TextBgIcon } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  ToolBarWrapper,
  ToolBarButton,
} from "@/components/text-story-maker/toolbars/ToolBarBase";
import { cn } from "@/lib/utils";

import { fonts, getFontClass } from "../lib/fonts";
import VerticalRangeSlider from "../ui/VerticalRangeSlider";

/**
 * TextToolBar component provides a toolbar for text customization, including font size, line height, text alignment, and other text-related options.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Current text options.
 * @param {number} props.options.textSize - Current text size.
 * @param {number} props.options.textLineHeight - Current line height.
 * @param {string} props.options.textAlign - Current text alignment ("left", "center", or "right").
 * @param {Function} props.updateOption - Function to update a specific text option.
 * @returns {JSX.Element} The rendered TextToolBar component.
 */
const TextToolBar = ({ options, updateOption }) => {
  const sliderRef = useRef(null); // Create a ref for the slider
  const [activeTool, setActiveTool] = useState("font-family");
  const [textSize, setTextSize] = useState(options.textSize);
  const [lineHeight, setLineHeight] = useState(options.textLineHeight);

  /**
   * Handles changes to the right slider (line height).
   *
   * @param {Array<number>} values - Array containing the new line height value.
   */
  const handleLineHeightChange = (values) => {
    const value = parseFloat(values[0]);
    setLineHeight(value);
    updateOption("textLineHeight", value);
  };

  /**
   * Handles changes to the left slider (text size).
   *
   * @param {Array<number>} values - Array containing the new text size value.
   */
  const handleTextSizeChange = (values) => {
    const value = parseFloat(values[0]);
    setTextSize(value);
    updateOption("textSize", value);
  };

  /**
   * Toggles the text alignment between "left", "center", and "right".
   */
  const handleAlignmentChange = () => {
    const newAlignment =
      options.textAlign === "center"
        ? "left"
        : options.textAlign === "left"
          ? "right"
          : "center";

    updateOption("textAlign", newAlignment);
  };

  /**
   * Gets the appropriate icon for the current text alignment.
   *
   * @returns {React.Component} The icon component for the current alignment.
   */
  const getAlignmentIcon = () => {
    switch (options.textAlign) {
      case "left":
        return AlignLeftIcon;
      case "right":
        return AlignRightIcon;
      default:
        return AlignCenterIcon;
    }
  };

  return (
    <>
      <div className="absolute top-1/2 left-4 z-20 h-1/3 -translate-y-1/2 transform">
        <VerticalRangeSlider
          step={0.0625}
          min={0.5}
          max={4}
          values={[textSize]}
          onChange={handleTextSizeChange}
        />
      </div>

      <div className="absolute top-1/2 right-4 z-20 h-1/3 -translate-y-1/2 transform">
        <VerticalRangeSlider
          step={0.125}
          min={1}
          max={2}
          values={[lineHeight]}
          onChange={handleLineHeightChange}
        />
      </div>

      <div className="absolute bottom-0 left-0 z-20 flex h-auto w-full flex-col items-center justify-center gap-4 p-4 py-6">
        {activeTool === "font-family" && (
          <div className="slider-container w-full">
            <Slider
              ref={sliderRef} // Attach the ref to the slider
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
              initialSlide={Object.keys(fonts).indexOf(options.textFont)}
              afterChange={(current) => {
                const font = Object.keys(fonts)[current];
                updateOption("textFont", font);
              }}
            >
              {Object.keys(fonts).map((font) => (
                <div key={font} className="px-1">
                  <button
                    type="button"
                    className={cn(
                      "relative whitespace-nowrap",
                      "inline-flex items-center justify-center",
                      "rounded-md shadow-sm",
                      "cursor-pointer outline-none focus-visible:outline-none",
                      "transition-colors duration-300 ease-in-out",
                      "active:scale-95",
                      "p-1.5 px-4",
                      "border border-white/50 bg-transparent text-white",
                      "w-auto text-sm",
                      "backdrop-blur-xs backdrop-opacity-75",
                      "bg-white/20",
                      { "bg-white text-black": options.textFont === font },
                      getFontClass(font)
                    )}
                    onClick={() => {
                      updateOption("textFont", font);
                    }}
                  >
                    {fonts[font].label}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        )}
        <ToolBarWrapper>
          <ToolBarButton
            icon={AaIcon}
            active={activeTool === "font-family"}
            onClick={() => setActiveTool("font-family")}
            srText="Font Family Tool"
          />
          <ToolBarButton
            type="text"
            active={activeTool === "text-color"}
            onClick={() => setActiveTool("text-color")}
            srText="Text Color Tool"
            className="h-10 min-w-10 p-0.5"
          >
            <div className="h-5 w-5 rounded-full bg-[conic-gradient(from_0deg,_red,_yellow,_lime,_cyan,_blue,_magenta,_red)] shadow-lg"></div>
          </ToolBarButton>
          <ToolBarButton
            icon={getAlignmentIcon()}
            iconClassName="h-8 w-8"
            onClick={() => {
              handleAlignmentChange();
            }}
            srText="Text Alignment Tool"
          />
          <ToolBarButton
            icon={TextBgIcon}
            className="h-8 w-8 bg-white text-black"
            srText="Text Background Tool"
          />
        </ToolBarWrapper>
      </div>
    </>
  );
};

TextToolBar.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default TextToolBar;
