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
  BoxSlider,
  BoxToggleGroup,
} from "@/components/text-story-maker/parts/panels/OptionsPanelHelper";
import { cn } from "@/lib/utils";

import "keen-slider/keen-slider.min.css";

/**
 * TextOptionsPanel component provides a toolbar for text customization, including font size, line height, text alignment, and other text-related options.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Current text options.
 * @param {Function} props.updateOption - Function to update a specific text option.
 * @returns {JSX.Element} The rendered TextOptionsPanel component.
 */
const TextOptionsPanel = ({ options, updateOption }) => {
  const [activeTool, setActiveTool] = useState("font-family");
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState("text");

  const textAlignments = ["center", "left", "right"];

  /**
   * Generates slider parameters for the Keen Slider.
   *
   * @param {string} initialKey - The initial key to set as active.
   * @param {string} updateKey - The key to update when the slider changes.
   * @returns {Object} The slider parameters.
   */
  const getSliderParams = (initialKey, updateKey) => {
    return {
      mode: "free-snap",
      renderMode: "performance",
      initial: parseInt(initialKey, 10) || 0,
      slides: { perView: "auto", spacing: 0, origin: "center" },
      loop: false,
      slideChanged: (slider) => {
        const currentIndex = slider.track.details.rel;
        updateOption(updateKey, currentIndex);
      },
    };
  };

  const [fontSliderRef] = useKeenSlider(
    getSliderParams(options.textFont, "textFont")
  );

  const [colorSliderRef] = useKeenSlider(
    getSliderParams(options.textColor, "textColor")
  );

  /**
   * Handles changes to the active tool.
   *
   * @param {string} tool - The tool to activate.
   */
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

  const toggleColors = {
    Disabled: "",
    White: "white",
    Black: "black",
  };

  // Define the class names for the tab buttons
  const tabButtonClass = "bg-neutral-800 text-sm shadow-none font-normal py-2";

  return (
    <PanelContainer>
      {activeTool === "font-family" && (
        <div className="relative w-full overflow-hidden">
          <div ref={fontSliderRef} className="keen-slider">
            {fonts.map(({ label }, font) => (
              <div
                key={font}
                className="keen-slider__slide relative block h-full !w-fit shrink-0"
              >
                <div className="flex items-center justify-center p-1">
                  <button
                    type="button"
                    className={cn(
                      btnBaseStyles.join(" "),
                      "p-6 py-3 leading-relaxed font-medium",
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
                      {label}
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
            {textColors.map(({ bg }, colorKey) => (
              <div
                key={colorKey}
                className="keen-slider__slide relative block h-full !w-fit shrink-0"
              >
                <div className="flex items-center justify-center p-2">
                  <button
                    type="button"
                    className={cn(
                      btnBaseStyles.join(" "),
                      "size-16 shadow ring-1 ring-white",
                      bg,
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

              <div className="mb-4 grid grid-cols-1 gap-4">
                <BoxSlider
                  label="Text Size"
                  min={0.5}
                  max={4}
                  step={0.0625}
                  value={options.textSize}
                  onChangeKey="textSize"
                  onChangeHandler={handleSliderChange}
                />
                <BoxSlider
                  label="Line Height"
                  min={1}
                  max={2}
                  step={0.0625}
                  value={options.textLineHeight}
                  onChangeKey="textLineHeight"
                  onChangeHandler={handleSliderChange}
                />
                <BoxSlider
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
              <BoxToggleGroup
                label="Background"
                options={toggleColors}
                selected={options.boxBackground}
                onChangeKey="boxBackground"
                onChangeHandler={updateOption}
              />

              <div className="mb-4 grid grid-cols-2 gap-4">
                <BoxSlider
                  label="Outer Spacing"
                  min={2}
                  max={20}
                  step={0.125}
                  value={options.boxOuterPadding}
                  onChangeKey="boxOuterPadding"
                  onChangeHandler={handleSliderChange}
                />

                {options.boxBackground && (
                  <>
                    <BoxSlider
                      label="Border Radius"
                      min={0}
                      max={20}
                      step={0.125}
                      value={options.boxBorderRadius}
                      onChangeKey="boxBorderRadius"
                      onChangeHandler={handleSliderChange}
                    />
                    <BoxSlider
                      label="Inner Spacing"
                      min={0}
                      max={20}
                      step={0.125}
                      value={options.boxInnerPadding}
                      onChangeKey="boxInnerPadding"
                      onChangeHandler={handleSliderChange}
                    />
                    <BoxSlider
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

              {options.boxBackground && (
                <>
                  <BoxToggleGroup
                    label="Glossy Background"
                    options={{ Disabled: "", Enabled: "enabled" }}
                    className="mb-2"
                    selected={options.boxGlossy}
                    onChangeKey="boxGlossy"
                    onChangeHandler={updateOption}
                  />

                  {options.boxGlossy && (
                    <div className="mb-4 grid grid-cols-2 gap-4">
                      <BoxSlider
                        label="Glossy Blur"
                        min={1}
                        max={100}
                        step={1}
                        value={options.boxGlossyBlur}
                        onChangeKey="boxGlossyBlur"
                        onChangeHandler={handleSliderChange}
                      />
                      <BoxSlider
                        label="Glossy Shadow"
                        min={0}
                        max={6}
                        step={1}
                        value={options.boxGlossyShadow}
                        onChangeKey="boxGlossyShadow"
                        onChangeHandler={handleSliderChange}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {activeSettingsTab === "effects" && (
            <div className="w-full space-y-4">
              <BoxToggleGroup
                label="Text Stroke"
                options={toggleColors}
                selected={options.textStroke}
                onChangeKey="textStroke"
                onChangeHandler={updateOption}
              />

              {options.textStroke && (
                <div className="mb-4 grid grid-cols-1 gap-4">
                  <BoxSlider
                    label="Text Stroke Size"
                    min={0}
                    max={10}
                    step={0.25}
                    value={options.textStrokeSize}
                    onChangeKey="textStrokeSize"
                    onChangeHandler={handleSliderChange}
                  />
                </div>
              )}

              <BoxToggleGroup
                label="Text Glow"
                options={toggleColors}
                selected={options.textGlow}
                onChangeKey="textGlow"
                onChangeHandler={updateOption}
              />

              {options.textGlow && (
                <div className="mb-4 grid grid-cols-1 gap-4">
                  <BoxSlider
                    label="Text Glow Size"
                    min={0}
                    max={2}
                    step={0.05}
                    value={options.textGlowSize}
                    onChangeKey="textGlowSize"
                    onChangeHandler={handleSliderChange}
                  />
                </div>
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
  options: PropTypes.shape({
    textSize: PropTypes.number.isRequired,
    textLineHeight: PropTypes.number.isRequired,
    textAlign: PropTypes.oneOf(["left", "center", "right"]).isRequired,
    textFont: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    textBold: PropTypes.bool,
    textItalic: PropTypes.bool,
    textUppercase: PropTypes.bool,
    textLetterSpacing: PropTypes.number,
    boxBackground: PropTypes.oneOf(["", "white", "black"]),
    boxOuterPadding: PropTypes.number,
    boxBorderRadius: PropTypes.number,
    boxInnerPadding: PropTypes.number,
    boxBackgroundOpacity: PropTypes.number,
    boxGlossy: PropTypes.oneOf(["", "enabled"]),
    boxGlossyBlur: PropTypes.number,
    boxGlossyShadow: PropTypes.number,
    textStroke: PropTypes.oneOf(["", "white", "black"]),
    textStrokeSize: PropTypes.number,
    textGlow: PropTypes.oneOf(["", "white", "black"]),
    textGlowSize: PropTypes.number,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default TextOptionsPanel;
