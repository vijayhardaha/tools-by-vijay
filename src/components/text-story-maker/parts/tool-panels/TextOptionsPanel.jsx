import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import PropTypes from "prop-types";
import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiTextAlignCenter as AlignCenterIcon } from "react-icons/pi";
import { PiTextAlignLeft as AlignLeftIcon } from "react-icons/pi";
import { PiTextAlignRight as AlignRightIcon } from "react-icons/pi";
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

import "keen-slider/keen-slider.min.css";

const OptionSlider = ({
  label,
  min = 0,
  max = 20,
  step = 0.125,
  value,
  onChangeKey,
  onChangeHandler,
}) => {
  const handleChange = (values) => {
    onChangeHandler(onChangeKey, values);
  };

  return (
    <div className="space-y-1.5">
      <p className="text-sm font-medium">{label}</p>
      <div className="px-2">
        <RangeSlider
          step={step}
          min={min}
          max={max}
          values={[value]}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

OptionSlider.PropTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChangeKey: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

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
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState("text");

  const textAlignments = ["center", "left", "right"];

  const tabs = [
    { key: "text", label: "Text Settings" },
    { key: "box", label: "Box Settings" },
    { key: "effects", label: "Effects Settings" },
  ];

  const getSliderParams = (items, initialKey, updateKey) => {
    const initialSlideIndex = Object.keys(items).indexOf(initialKey);

    return {
      mode: "free-snap",
      renderMode: "performance",
      initial: initialSlideIndex >= 0 ? initialSlideIndex : 0,
      slides: { perView: "auto", spacing: 0, origin: "center" },
      loop: false,
      slideChanged: (slider) => {
        const key = Object.keys(items)[slider.track.details.rel];
        updateOption(updateKey, key);
      },
    };
  };

  const [fontSliderRef] = useKeenSlider(
    getSliderParams(fonts, options.textFont, "textFont")
  );

  const [colorSliderRef] = useKeenSlider(
    getSliderParams(textColors, options.textColor, "textColor")
  );

  const handleActiveToolChange = (tool) => {
    setActiveTool(tool);
    setShowSettingsDropdown(false);
  };

  /**
   * Handles changes to the slider.
   *
   * @param {string} key - The option key to update.
   * @param {Array<number>} values - Array containing the value.
   */
  const handleSliderChange = (key, values) =>
    updateOption(key, parseFloat(values[0]));

  /**
   * Toggles the text alignment option in sequence.
   */
  const handleAlignmentChange = () => {
    const currentAlignment = options.textAlign || "left";
    const currentIndex = textAlignments.indexOf(currentAlignment);
    const nextIndex = (currentIndex + 1) % textAlignments.length;
    handleActiveToolChange("");
    setShowSettingsDropdown(false);
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

  // Define the class names for the tab buttons
  const tabButtonClass = "bg-neutral-800 text-sm shadow-none font-normal py-2";

  return (
    <PanelContainer>
      {activeTool === "font-family" && (
        <div className="relative w-full overflow-hidden">
          <div ref={fontSliderRef} className="keen-slider">
            {Object.keys(fonts).map((font) => (
              <div
                key={font}
                className="keen-slider__slide relative block h-full !w-fit shrink-0"
              >
                <div className="flex items-center justify-center p-1">
                  <button
                    type="button"
                    className={cn(
                      btnBaseStyles.join(" "),
                      "p-6 py-4 leading-none font-medium",
                      "bg-neutral-800 text-white",
                      {
                        "bg-white text-neutral-900": options.textFont === font,
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
        <div className="relative w-full overflow-hidden">
          <div ref={colorSliderRef} className="keen-slider">
            {Object.keys(textColors).map((colorKey) => (
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
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTool === "text-settings" && showSettingsDropdown && (
        <BoxContainer
          className="flex min-h-48 w-full flex-col items-start gap-4 rounded-xl bg-neutral-800/85 p-4 text-left"
          aria-label="Text Settings"
        >
          <div className="flex w-full items-center justify-evenly rounded-xl bg-neutral-700 p-1">
            {Object.entries({
              "Text Settings": "text",
              "Box Settings": "box",
              "Effects Settings": "effects",
            }).map(([label, tab]) => (
              <button
                key={tab}
                type="button"
                className={cn(
                  btnBaseStyles.join(" "),
                  "flex-1 rounded-xl px-4 py-2 shadow-none",
                  "text-sm font-medium",
                  {
                    "bg-neutral-800 text-white": activeSettingsTab === tab,
                  }
                )}
                onClick={() => setActiveSettingsTab(tab)}
              >
                {label}
              </button>
            ))}
          </div>

          {activeSettingsTab === "text" && (
            <div className="w-full space-y-4">
              <div className="flex flex-wrap gap-2">
                <BoxButton
                  type="text"
                  active={options.textBold}
                  onClick={handleBoldToggle}
                  className={cn(tabButtonClass, "font-extrabold")}
                >
                  Bold
                </BoxButton>
                <BoxButton
                  type="text"
                  active={options.textItalic}
                  onClick={handleItalicToggle}
                  className={cn(tabButtonClass, "italic")}
                >
                  Italic
                </BoxButton>
                <BoxButton
                  type="text"
                  active={options.textUppercase}
                  onClick={handleUppercaseToggle}
                  className={cn(tabButtonClass, "uppercase")}
                >
                  Uppercase
                </BoxButton>
              </div>

              <div className="mb-2 grid grid-cols-1 gap-4">
                <OptionSlider
                  label="Text Size"
                  min={0.5}
                  max={4}
                  step={0.0625}
                  value={options.textSize}
                  onChangeKey="textSize"
                  onChangeHandler={handleSliderChange}
                />
                <OptionSlider
                  label="Line Height"
                  min={1}
                  max={2}
                  step={0.0625}
                  value={options.textLineHeight}
                  onChangeKey="textLineHeight"
                  onChangeHandler={handleSliderChange}
                />
                <OptionSlider
                  label="Letter Spacing"
                  min={-3}
                  max={4}
                  step={0.25}
                  value={options.textLetterSpacing}
                  onChangeKey="textLetterSpacing"
                  onChangeHandler={handleSliderChange}
                />
              </div>
            </div>
          )}

          {activeSettingsTab === "box" && (
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold">Box Background:</p>
                <div className="flex gap-2">
                  {Object.entries({
                    None: "",
                    White: "white",
                    Black: "black",
                  }).map(([label, value]) => (
                    <BoxButton
                      type="text"
                      key={value}
                      active={options.boxBackground === value}
                      onClick={() => updateOption("boxBackground", value)}
                      className={cn(tabButtonClass)}
                    >
                      {label}
                    </BoxButton>
                  ))}
                </div>
              </div>

              <div className="mb-2 grid grid-cols-1 gap-4">
                <OptionSlider
                  label="Outer Spacing"
                  min={0}
                  max={20}
                  step={0.125}
                  value={options.boxOuterPadding}
                  onChangeKey="boxOuterPadding"
                  onChangeHandler={handleSliderChange}
                />

                {options.boxBackground && (
                  <>
                    <OptionSlider
                      label="Border Radius"
                      min={0}
                      max={20}
                      step={0.125}
                      value={options.boxBorderRadius}
                      onChangeKey="boxBorderRadius"
                      onChangeHandler={handleSliderChange}
                    />
                    <OptionSlider
                      label="Inner Spacing"
                      min={0}
                      max={20}
                      step={0.125}
                      value={options.boxInnerPadding}
                      onChangeKey="boxInnerPadding"
                      onChangeHandler={handleSliderChange}
                    />
                    <OptionSlider
                      label="Background Opacity"
                      min={0}
                      max={1}
                      step={0.01}
                      value={options.boxBackgroundOpacity}
                      onChangeKey="boxBackgroundOpacity"
                      onChangeHandler={handleSliderChange}
                    />
                  </>
                )}
              </div>
            </div>
          )}

          {activeSettingsTab === "effects" && (
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold">Text Stroke:</p>
                <div className="flex gap-2">
                  {Object.entries({
                    None: "",
                    White: "white",
                    Black: "black",
                  }).map(([label, value]) => (
                    <BoxButton
                      type="text"
                      key={value}
                      active={options.textStroke === value}
                      onClick={() => updateOption("textStroke", value)}
                      className={cn(tabButtonClass)}
                    >
                      {label}
                    </BoxButton>
                  ))}
                </div>
              </div>

              {options.textStroke && (
                <OptionSlider
                  label="Text Stroke Size"
                  min={0}
                  max={10}
                  step={0.25}
                  value={options.textStrokeSize}
                  onChangeKey="textStrokeSize"
                  onChangeHandler={handleSliderChange}
                />
              )}

              <div className="space-y-2">
                <p className="text-sm font-semibold">Text Glow:</p>
                <div className="flex gap-2">
                  {Object.entries({
                    None: "",
                    White: "white",
                    Black: "black",
                  }).map(([label, value]) => (
                    <BoxButton
                      type="text"
                      key={value}
                      active={options.textGlow === value}
                      onClick={() => updateOption("textGlow", value)}
                      className={cn(tabButtonClass)}
                    >
                      {label}
                    </BoxButton>
                  ))}
                </div>
              </div>

              {options.textGlow && (
                <OptionSlider
                  label="Text Glow Size"
                  min={0}
                  max={2}
                  step={0.05}
                  value={options.textGlowSize}
                  onChangeKey="textGlowSize"
                  onChangeHandler={handleSliderChange}
                />
              )}
            </div>
          )}
        </BoxContainer>
      )}

      <BoxContainer>
        <BoxButton
          icon={AaIcon}
          active={activeTool === "font-family"}
          onClick={() => handleActiveToolChange("font-family")}
          screenReaderText="Font Family Tool"
        />
        <BoxButton
          active={activeTool === "text-color"}
          onClick={() => handleActiveToolChange("text-color")}
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
  );
};

TextOptionsPanel.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default TextOptionsPanel;
