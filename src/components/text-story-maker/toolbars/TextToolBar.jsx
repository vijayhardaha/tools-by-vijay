import { useState } from "react";

import PropTypes from "prop-types";
import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiTextAlignCenter as AlignCenterIcon } from "react-icons/pi";
import { PiTextAlignLeft as AlignLeftIcon } from "react-icons/pi";
import { PiTextAlignRight as AlignRightIcon } from "react-icons/pi";
import { PiMagicWand as TextBgIcon } from "react-icons/pi";

import {
  ToolBarWrapper,
  ToolBarButton,
} from "@/components/text-story-maker/toolbars/ToolBarBase";

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
  const [activeTool, setActiveTool] = useState("font-family");
  const [textSize, setTextSize] = useState(options.textSize);
  const [lineHeight, setLineHeight] = useState(options.textLineHeight);

  /**
   * Handles changes to the right slider (line height).
   *
   * @param {Array<number>} values - Array containing the new line height value.
   */
  const handleRightSliderChange = (values) => {
    const value = parseFloat(values[0]);
    setLineHeight(value);
    updateOption("textLineHeight", value);
    console.log("Line Height Value:", value);
  };

  /**
   * Handles changes to the left slider (text size).
   *
   * @param {Array<number>} values - Array containing the new text size value.
   */
  const handleLeftSliderChange = (values) => {
    const value = parseFloat(values[0]);
    setTextSize(value);
    updateOption("textSize", value);
    console.log("Text Size Value:", value);
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
          max={3}
          values={[textSize]}
          onChange={handleLeftSliderChange}
        />
      </div>

      <div className="absolute top-1/2 right-4 z-20 h-1/3 -translate-y-1/2 transform">
        <VerticalRangeSlider
          step={0.125}
          min={1}
          max={2}
          values={[lineHeight]}
          onChange={handleRightSliderChange}
        />
      </div>

      <div className="absolute bottom-0 left-0 z-20 flex h-auto w-full items-center justify-center p-4 py-6">
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
