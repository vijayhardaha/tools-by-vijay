import { useState, useRef } from "react";

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
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { TiThLargeOutline as TextSettingsIcon } from "react-icons/ti";

import { fonts, textColors } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import { getFontClass } from "@/components/text-story-maker/lib/utils";
import {
  PanelContainer,
  BoxContainer,
  BoxButton,
} from "@/components/text-story-maker/parts/tool-panels/OptionsPanelHelper";
import { RangeSlider } from "@/components/text-story-maker/ui";
import { cn } from "@/lib/utils";

import "swiper/css";

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
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState("text");

  const fontSliderRef = useRef(null);
  const colorSliderRef = useRef(null);

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

  const tabs = [
    { key: "text", label: "Text" },
    { key: "box", label: "Box" },
    { key: "effects", label: "Effects" },
  ];

  const getSliderParams = (items, initialKey, updateKey) => {
    const initialSlideIndex = Object.keys(items).indexOf(initialKey);

    return {
      centeredSlides: true,
      slidesPerView: "auto",
      freeMode: true,
      loop: false,
      initialSlide: initialSlideIndex >= 0 ? initialSlideIndex : 0,
      modules: [FreeMode],
      onSwiper: (swiper) => {
        if (updateKey === "textFont") fontSliderRef.current = swiper;
        if (updateKey === "textColor") colorSliderRef.current = swiper;
      },
      onSlideChange: (swiper) => {
        const key = Object.keys(items)[swiper.activeIndex];
        updateOption(updateKey, key);
      },
    };
  };

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
            <Swiper {...getSliderParams(fonts, options.textFont, "textFont")}>
              {Object.keys(fonts).map((font) => (
                <SwiperSlide key={font} className="!w-fit">
                  <div className="flex items-center justify-center p-1">
                    <button
                      type="button"
                      className={cn(
                        btnBaseStyles.join(" "),
                        "p-6 py-4 leading-none font-medium",
                        "bg-neutral-700 text-neutral-100",
                        {
                          "bg-white text-neutral-900":
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {activeTool === "text-color" && (
          <div className="relative w-full overflow-hidden">
            <Swiper
              {...getSliderParams(textColors, options.textColor, "textColor")}
            >
              {Object.keys(textColors).map((colorKey) => (
                <SwiperSlide key={colorKey} className="!w-fit">
                  <div className="flex items-center justify-center p-2">
                    <button
                      type="button"
                      className={cn(
                        btnBaseStyles.join(" "),
                        "size-16 shadow",
                        "ring-1 ring-white",
                        textColors[colorKey].bg,
                        {
                          "ring-4": options.textColor === colorKey,
                        }
                      )}
                      onClick={() => {
                        updateOption("textColor", colorKey);
                      }}
                    ></button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {activeTool === "text-settings" && showSettingsDropdown && (
          <BoxContainer
            className="flex w-full flex-col rounded-2xl p-2"
            aria-label="Text Settings"
          >
            <div className="mb-4 flex w-full items-center justify-evenly gap-2 rounded-xl bg-neutral-700 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={cn(
                    btnBaseStyles.join(" "),
                    "flex-1 rounded-xl px-4 py-2 shadow-none",
                    "text-sm font-medium",
                    {
                      "bg-neutral-800 text-white":
                        activeSettingsTab === tab.key,
                    }
                  )}
                  onClick={() => setActiveSettingsTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeSettingsTab === "text" && (
              <div className="flex flex-wrap gap-2">
                <BoxButton
                  icon={TextBoldIcon}
                  onClick={handleBoldToggle}
                  className={cn({
                    "bg-white text-black": options.textBold,
                  })}
                  screenReaderText="Bold Text Tool"
                />
                <BoxButton
                  icon={TextItalicIcon}
                  onClick={handleItalicToggle}
                  className={cn({
                    "bg-white text-black": options.textItalic,
                  })}
                  screenReaderText="Italic Text Tool"
                />
                <BoxButton
                  icon={TextUppercaseIcon}
                  onClick={handleUppercaseToggle}
                  className={cn({
                    "bg-white text-black": options.textUppercase,
                  })}
                  screenReaderText="Uppercase Text Tool"
                />
                <BoxButton
                  icon={TextEffectIcon}
                  onClick={handleTextEffectToggle}
                  className={cn({
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
                  className={cn({
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
                  className={cn({
                    "bg-white text-black": showLineHeightSlider,
                  })}
                  screenReaderText="Line Height Tool"
                />
              </div>
            )}

            {activeSettingsTab === "box" && (
              <div className="text-neutral-500">Box tools will go here.</div>
            )}

            {activeSettingsTab === "effects" && (
              <div className="text-neutral-500">
                Effects tools will go here.
              </div>
            )}
          </BoxContainer>
        )}

        <BoxContainer>
          <BoxButton
            icon={AaIcon}
            active={activeTool === "font-family"}
            onClick={() => setActiveTool("font-family")}
            screenReaderText="Font Family Tool"
          />
          <BoxButton
            type="text"
            active={activeTool === "text-color"}
            onClick={() => setActiveTool("text-color")}
            screenReaderText="Text Color Tool"
            className="p-0"
          >
            <div className="size-10 rounded-full bg-[conic-gradient(from_0deg,_red,_yellow,_lime,_cyan,_blue,_magenta,_red)] shadow-lg"></div>
          </BoxButton>
          <BoxButton
            icon={getAlignmentIcon()}
            iconClassName="size-12"
            className="p-0"
            onClick={() => {
              handleAlignmentChange();
            }}
            screenReaderText="Text Alignment Tool"
          />
          <BoxButton
            icon={TextSettingsIcon}
            active={activeTool === "text-settings"}
            onClick={() => {
              setActiveTool("text-settings");
              setShowSettingsDropdown((prev) => !prev);
            }}
            screenReaderText="Text Settings Tool"
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
