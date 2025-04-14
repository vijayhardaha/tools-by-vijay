import { useState } from "react";

import PropTypes from "prop-types";
import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiTextAlignCenter as AlignCenterIcon } from "react-icons/pi";
import { PiTextAlignLeft as AlignLeftIcon } from "react-icons/pi";
import { PiTextAlignRight as AlignRightIcon } from "react-icons/pi";
import { TiThLargeOutline as TextSettingsIcon } from "react-icons/ti";

import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import {
  ControlPanel,
  ControlBox,
  ControlBtn,
  ControlSlider,
  ToggleOptions,
  ToggleColors,
} from "@/components/text-story-maker/parts/panels/OptionsPanelHelper";
import TextColorsPanel from "@/components/text-story-maker/parts/panels/TextColorsPanel";
import FontSlider from "@/components/text-story-maker/ui/FontSlider";
import { cn } from "@/lib/utils";

/**
 * TextOptionsPanel component for managing text-related options.
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

  // Define the class names for the tab buttons
  const tabButtonClass = "bg-neutral-800 text-sm shadow-none font-normal py-2";

  return (
    <ControlPanel>
      {activeTool === "font-family" && (
        <FontSlider options={options} updateOption={updateOption} />
      )}

      {activeTool === "text-color" && (
        <TextColorsPanel options={options} updateOption={updateOption} />
      )}

      {activeTool === "text-settings" && showSettingsDropdown && (
        <ControlBox
          className="flex min-h-48 w-full flex-col items-start gap-4 rounded-xl bg-neutral-800/85 p-4 text-left"
          aria-label="Text Settings"
        >
          {/* Tabs */}
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

          {/* Text Settings Tab Content */}
          {activeSettingsTab === "text" && (
            <div className="w-full space-y-4">
              <div className="flex flex-wrap gap-2">
                <ControlBtn
                  type="text"
                  active={options.textBold}
                  onClick={handleBoldToggle}
                  className={cn(tabButtonClass, "font-extrabold")}
                >
                  Bold
                </ControlBtn>
                <ControlBtn
                  type="text"
                  active={options.textItalic}
                  onClick={handleItalicToggle}
                  className={cn(tabButtonClass, "italic")}
                >
                  Italic
                </ControlBtn>
                <ControlBtn
                  type="text"
                  active={options.textUppercase}
                  onClick={handleUppercaseToggle}
                  className={cn(tabButtonClass, "uppercase")}
                >
                  Uppercase
                </ControlBtn>
              </div>

              <div className="mb-2 grid grid-cols-1 gap-4">
                <ControlSlider
                  label="Text Size"
                  min={0.5}
                  max={3}
                  step={0.05}
                  value={options.textSize}
                  onChangeKey="textSize"
                  onChangeHandler={handleSliderChange}
                />
                <ControlSlider
                  label="Line Height"
                  min={1}
                  max={2}
                  step={0.05}
                  value={options.textLineHeight}
                  onChangeKey="textLineHeight"
                  onChangeHandler={handleSliderChange}
                />
                <ControlSlider
                  label="Letter Spacing"
                  min={-3}
                  max={4}
                  step={0.5}
                  value={options.textLetterSpacing}
                  onChangeKey="textLetterSpacing"
                  onChangeHandler={handleSliderChange}
                />
              </div>
            </div>
          )}

          {/* Box Settings Tab Content */}
          {activeSettingsTab === "box" && (
            <div className="w-full space-y-4">
              <ToggleColors
                label="Background"
                selected={options.boxBackground}
                onChangeKey="boxBackground"
                onChangeHandler={updateOption}
              />

              <div className="mb-4 grid grid-cols-2 gap-4">
                <ControlSlider
                  label="Outer Gap"
                  min={0}
                  max={20}
                  step={0.5}
                  value={options.boxOuterPadding}
                  onChangeKey="boxOuterPadding"
                  onChangeHandler={handleSliderChange}
                />

                {options.boxBackground && (
                  <>
                    <ControlSlider
                      label="Inner Gap"
                      min={0}
                      max={20}
                      step={0.5}
                      value={options.boxInnerPadding}
                      onChangeKey="boxInnerPadding"
                      onChangeHandler={handleSliderChange}
                    />
                    <ControlSlider
                      label="Box Corner"
                      min={0}
                      max={20}
                      step={0.25}
                      value={options.boxBorderRadius}
                      onChangeKey="boxBorderRadius"
                      onChangeHandler={handleSliderChange}
                    />
                    <ControlSlider
                      label="Background Visibility"
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
                  <ToggleOptions
                    label="Glossy Background"
                    options={{ Disabled: "", Enabled: "enabled" }}
                    className="mb-2"
                    selected={options.boxGlossy}
                    onChangeKey="boxGlossy"
                    onChangeHandler={updateOption}
                  />

                  {options.boxGlossy && (
                    <div className="mb-2 grid grid-cols-2 gap-4">
                      <ControlSlider
                        label="Glossy Blur"
                        min={1}
                        max={100}
                        step={1}
                        value={options.boxGlossyBlur}
                        onChangeKey="boxGlossyBlur"
                        onChangeHandler={handleSliderChange}
                      />
                      <ControlSlider
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

          {/* Effects Settings Tab Content */}
          {activeSettingsTab === "effects" && (
            <div className="w-full space-y-4">
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <ToggleColors
                    label="Text Stroke"
                    selected={options.textStroke}
                    onChangeKey="textStroke"
                    onChangeHandler={updateOption}
                  />
                  {options.textStroke && (
                    <ControlSlider
                      min={0}
                      max={10}
                      step={0.25}
                      value={options.textStrokeSize}
                      onChangeKey="textStrokeSize"
                      onChangeHandler={handleSliderChange}
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <ToggleColors
                    label="Text Shadow"
                    selected={options.textShadow}
                    onChangeKey="textShadow"
                    onChangeHandler={updateOption}
                  />

                  {options.textShadow && (
                    <ControlSlider
                      min={0}
                      max={2}
                      step={0.05}
                      value={options.textShadowSize}
                      onChangeKey="textShadowSize"
                      onChangeHandler={handleSliderChange}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </ControlBox>
      )}

      <ControlBox>
        <ControlBtn
          icon={AaIcon}
          active={activeTool === "font-family"}
          onClick={() => handleActiveToolChange("font-family")}
          screenReaderText="Change Font Family"
        />
        <ControlBtn
          active={activeTool === "text-color"}
          onClick={() => handleActiveToolChange("text-color")}
          screenReaderText="Change Text Color"
          className="p-0"
        >
          <div
            className="size-10 rounded-full bg-[conic-gradient(from_0deg,_red,_yellow,_lime,_cyan,_blue,_magenta,_red)] shadow-lg"
            aria-hidden="true"
          ></div>
        </ControlBtn>
        <ControlBtn
          icon={getAlignmentIcon()}
          iconClassName="size-12"
          className="p-0"
          onClick={() => {
            handleAlignmentChange();
          }}
          screenReaderText={`Change Text Alignment (Current: ${options.textAlign})`}
          aria-label={`Change Text Alignment (Current: ${options.textAlign})`}
        />
        <ControlBtn
          icon={TextSettingsIcon}
          active={activeTool === "text-settings"}
          onClick={() => {
            setActiveTool("text-settings");
            setShowSettingsDropdown((prev) => !prev);
          }}
          screenReaderText="Text and Style Settings"
          aria-expanded={showSettingsDropdown}
          aria-haspopup="dialog"
        />
      </ControlBox>
    </ControlPanel>
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
    textShadow: PropTypes.oneOf(["", "white", "black"]),
    textShadowSize: PropTypes.number,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default TextOptionsPanel;
