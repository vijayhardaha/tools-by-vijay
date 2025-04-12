import { useState } from "react";
import PropTypes from "prop-types";
import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiTextAlignCenter as AlignCenterIcon } from "react-icons/pi";
import { PiTextAlignLeft as AlignLeftIcon } from "react-icons/pi";
import { PiTextAlignRight as AlignRightIcon } from "react-icons/pi";
import { PiMagicWand as TextBgIcon } from "react-icons/pi";
import { PiTextBBold as TextBoldIcon } from "react-icons/pi";
import { PiTextItalic as TextItalicIcon } from "react-icons/pi";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { fonts } from "@/components/text-story-maker/constants/fonts";
import { textColors } from "@/components/text-story-maker/constants/textColors";
import {
  ToolBarWrapper,
  ToolBarButton,
} from "@/components/text-story-maker/toolbars/ToolBarBase";
import VerticalRangeSlider from "@/components/text-story-maker/ui/VerticalRangeSlider";
import { cn } from "@/lib/utils";

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

  const [fontSliderRef, fontSlider] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    renderMode: "performance",
    initial: Object.keys(fonts).indexOf(options.textFont) + 1,
    slides: {
      origin: "center",
      perView: 3,
      spacing: 0,
    },
    slideChanged(s) {
      const font = Object.keys(fonts)[s.track.details.abs];
      updateOption("textFont", font);
    },
  });

  const [colorSliderRef, colorSlider] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    renderMode: "performance",
    initial: Object.keys(textColors).indexOf(options.textColor) + 1,
    slides: {
      origin: "center",
      perView: 9,
      spacing: 0,
    },
    slideChanged(s) {
      const idx = s.track.details.abs;
      const colorKey = Object.keys(textColors)[idx];
      updateOption("textColor", colorKey);
    },
  });

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
   * Toggles the bold text option.
   */
  const handleBoldToggle = () => {
    const newBoldStatus = !options.textBold;
    updateOption("textBold", newBoldStatus);
  };

  /**
   * Toggles the italic text option.
   */
  const handleItalicToggle = () => {
    const newItalicStatus = !options.textItalic;
    updateOption("textItalic", newItalicStatus);
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
          <div className="relative w-full overflow-hidden">
            <div className="keen-slider" ref={fontSliderRef}>
              {Object.keys(fonts).map((font) => (
                <div key={font} className="keen-slider__slide">
                  <div className="p-1">
                    <button
                      type="button"
                      className={cn(
                        "relative whitespace-nowrap",
                        "flex items-center justify-center",
                        "w-full rounded-md shadow-sm",
                        "cursor-pointer outline-none focus-visible:outline-none",
                        "transition-colors duration-300 ease-in-out",
                        "active:scale-94",
                        "p-1.5 px-3",
                        "border border-white/50 bg-transparent text-white",
                        "text-xs",
                        "backdrop-blur-xs backdrop-opacity-75",
                        "bg-white/20",
                        { "bg-white text-black": options.textFont === font }
                      )}
                      onClick={() => {
                        updateOption("textFont", font);
                      }}
                    >
                      {fonts[font].label}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTool === "text-color" && (
          <div className="relative w-full">
            <div className="keen-slider" ref={colorSliderRef}>
              {Object.keys(textColors).map((colorKey) => (
                <div key={colorKey} className="keen-slider__slide">
                  <div className="flex items-center justify-center p-1">
                    <button
                      type="button"
                      className={cn(
                        "flex items-center justify-center",
                        "relative h-10 w-10 rounded-lg",
                        "shadow-sm shadow-black/30",
                        "cursor-pointer outline-none focus-visible:outline-none",
                        "transition-transform duration-300 ease-in-out",
                        "active:scale-94",
                        "ring-1 ring-white/85",
                        textColors[colorKey].bg,
                        {
                          "ring-white ring-offset-2":
                            options.textColor === colorKey,
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
            className="p-0.5"
          >
            <div className="h-6 w-6 rounded-full bg-[conic-gradient(from_0deg,_red,_yellow,_lime,_cyan,_blue,_magenta,_red)] shadow-lg"></div>
          </ToolBarButton>
          <ToolBarButton
            icon={getAlignmentIcon()}
            iconClassName="h-9 w-9"
            onClick={() => {
              handleAlignmentChange();
            }}
            srText="Text Alignment Tool"
          />
          <ToolBarButton
            icon={TextBoldIcon}
            onClick={handleBoldToggle}
            className={cn("h-9 w-9", {
              "bg-white text-black": options.textBold,
            })}
            srText="Bold Text Tool"
          />
          <ToolBarButton
            icon={TextItalicIcon}
            onClick={handleItalicToggle}
            className={cn("h-9 w-9", {
              "bg-white text-black": options.textItalic,
            })}
            srText="Italic Text Tool"
          />
          <ToolBarButton
            icon={TextBgIcon}
            className="h-9 w-9 bg-white text-black"
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
