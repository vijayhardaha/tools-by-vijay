import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import PropTypes from "prop-types";
import { BiFontSize as FontSizeIcon } from "react-icons/bi";
import { CgFormatUppercase as TextUppercaseIcon } from "react-icons/cg";
import { MdFormatBold as TextBoldIcon } from "react-icons/md";
import { MdFormatItalic as TextItalicIcon } from "react-icons/md";
import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiTextAlignCenter as AlignCenterIcon } from "react-icons/pi";
import { PiTextAlignLeft as AlignLeftIcon } from "react-icons/pi";
import { PiTextAlignRight as AlignRightIcon } from "react-icons/pi";
import { RiFontSizeAi as TextEffectIcon } from "react-icons/ri";
import { RiLineHeight as LineHeightIcon } from "react-icons/ri";
import "keen-slider/keen-slider.min.css";

import { fonts, textColors } from "@/components/text-story-maker/constants";
import { getFontClass } from "@/components/text-story-maker/lib/utils";
import {
  PanelContainer,
  BoxContainer,
  BoxButton,
} from "@/components/text-story-maker/parts/tool-panels/OptionsPanelHelper";
import { RangeSlider } from "@/components/text-story-maker/ui";
import { cn } from "@/lib/utils";

/**
 * TextOptionsPanel component provides a toolbar for text customization, including font size, line height, text alignment, and other text-related options.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Current text options.
 * @param {number} props.options.textSize - Current text size.
 * @param {number} props.options.textLineHeight - Current line height.
 * @param {string} props.options.textAlign - Current text alignment ("left", "center", or "right").
 * @param {Function} props.updateOption - Function to update a specific text option.
 * @returns {JSX.Element} The rendered TextOptionsPanel component.
 */
const TextOptionsPanel = ({ options, updateOption }) => {
  const [activeTool, setActiveTool] = useState("font-family");
  const [textSize, setTextSize] = useState(options.textSize);
  const [lineHeight, setLineHeight] = useState(options.textLineHeight);
  const [showLineHeightSlider, setShowLineHeightSlider] = useState(false);
  const [showFontSizeSlider, setShowFontSizeSlider] = useState(false);

  const textEffects = [
    "",
    "white-stroke",
    "black-stroke",
    "white-glow",
    "black-glow",
    "white-outline",
    "black-outline",
    "light-bg",
    "dark-bg",
    "light-bg-rounded",
    "dark-bg-rounded",
    "light-bg-rounded-lg",
    "dark-bg-rounded-lg",
  ];

  const textAlignments = ["center", "left", "right"];

  const [fontSliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    renderMode: "performance",
    initial: Object.keys(fonts).indexOf(options.textFont) + 1,
    slides: {
      origin: "center",
      perView: 4,
      spacing: 0,
    },
    slideChanged(s) {
      const font = Object.keys(fonts)[s.track.details.abs];
      updateOption("textFont", font);
    },
  });

  const [colorSliderRef] = useKeenSlider({
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
   * Toggles the text alignment option in sequence.
   */
  const handleAlignmentChange = () => {
    const currentAlignment = options.textAlign || "left";
    const currentIndex = textAlignments.indexOf(currentAlignment);
    const nextIndex = (currentIndex + 1) % textAlignments.length;
    updateOption("textAlign", textAlignments[nextIndex]);
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
   * Toggles the uppercase text option.
   */
  const handleUppercaseToggle = () => {
    const newUppercaseStatus = !options.textUppercase;
    updateOption("textUppercase", newUppercaseStatus);
  };

  /**
   * Toggles the text effect option in sequence.
   */
  const handleTextEffectToggle = () => {
    const currentEffect = options.textEffect || "";
    const currentIndex = textEffects.indexOf(currentEffect);
    const nextIndex = (currentIndex + 1) % textEffects.length;
    updateOption("textEffect", textEffects[nextIndex]);
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
      <div
        className={cn(
          "absolute top-1/2 left-4 z-20 h-1/3 -translate-y-1/2 transform",
          { hidden: !showFontSizeSlider }
        )}
      >
        <RangeSlider
          step={0.0625}
          min={0.5}
          max={4}
          values={[textSize]}
          onChange={handleTextSizeChange}
        />
      </div>

      <div
        className={cn(
          "absolute top-1/2 right-4 z-20 h-1/3 -translate-y-1/2 transform",
          { hidden: !showLineHeightSlider }
        )}
      >
        <RangeSlider
          step={0.0625}
          min={1}
          max={2}
          values={[lineHeight]}
          onChange={handleLineHeightChange}
        />
      </div>

      <PanelContainer>
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
                        "flex w-full items-center justify-center rounded-lg shadow-xs",
                        "cursor-pointer outline-none focus-visible:outline-none",
                        "transition-colors duration-300 ease-in-out active:scale-97",
                        "p-4 py-3 text-xs font-semibold",
                        "bg-neutral-900 text-neutral-100",
                        {
                          "bg-accent-foreground text-neutral-900":
                            options.textFont === font,
                        },
                        getFontClass(font)
                      )}
                      onClick={() => {
                        updateOption("textFont", font);
                      }}
                    >
                      <span className="truncate overflow-hidden whitespace-nowrap">
                        {fonts[font].label}
                      </span>
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
                        "shadow-sm ring-1 shadow-black/30 ring-white/85",
                        "cursor-pointer outline-none focus-visible:outline-none",
                        "transition-transform duration-300 ease-in-out active:scale-97",
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

        <BoxContainer>
          <BoxButton
            icon={AaIcon}
            active={activeTool === "font-family"}
            onClick={() => setActiveTool("font-family")}
            screenReaderText="Font Family Tool"
            className="size-8"
          />
          <BoxButton
            type="text"
            active={activeTool === "text-color"}
            onClick={() => setActiveTool("text-color")}
            screenReaderText="Text Color Tool"
            className="size-8 p-0"
          >
            <div className="size-5 rounded-full bg-[conic-gradient(from_0deg,_red,_yellow,_lime,_cyan,_blue,_magenta,_red)] shadow-lg"></div>
          </BoxButton>
          <BoxButton
            icon={getAlignmentIcon()}
            iconClassName="size-8"
            className="size-8 p-0"
            onClick={() => {
              handleAlignmentChange();
            }}
            screenReaderText="Text Alignment Tool"
          />
          <BoxButton
            icon={TextBoldIcon}
            onClick={handleBoldToggle}
            className={cn("size-8", {
              "bg-white text-black": options.textBold,
            })}
            screenReaderText="Bold Text Tool"
          />
          <BoxButton
            icon={TextItalicIcon}
            onClick={handleItalicToggle}
            className={cn("size-8", {
              "bg-white text-black": options.textItalic,
            })}
            screenReaderText="Italic Text Tool"
          />
          <BoxButton
            icon={TextUppercaseIcon}
            onClick={handleUppercaseToggle}
            className={cn("size-8", {
              "bg-white text-black": options.textUppercase,
            })}
            screenReaderText="Uppercase Text Tool"
          />
          <BoxButton
            icon={TextEffectIcon}
            onClick={handleTextEffectToggle}
            className={cn("size-8", {
              "bg-white text-black": options.textEffect,
            })}
            screenReaderText="Text Effect Tool"
          />
          <BoxButton
            icon={FontSizeIcon}
            onClick={() => {
              setShowFontSizeSlider((prev) => !prev);
              setShowLineHeightSlider(false);
            }}
            className={cn("size-8", {
              "bg-white text-black": showFontSizeSlider,
            })}
            screenReaderText="Font Size Tool"
          />
          <BoxButton
            icon={LineHeightIcon}
            onClick={() => {
              setShowLineHeightSlider((prev) => !prev);
              setShowFontSizeSlider(false);
            }}
            className={cn("size-8", {
              "bg-white text-black": showLineHeightSlider,
            })}
            screenReaderText="Line Height Tool"
          />
        </BoxContainer>
      </PanelContainer>
    </>
  );
};

TextOptionsPanel.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default TextOptionsPanel;
