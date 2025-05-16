import { useState } from "react";

import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiTextAlignCenter as AlignCenterIcon } from "react-icons/pi";
import { PiTextAlignLeft as AlignLeftIcon } from "react-icons/pi";
import { PiTextAlignRight as AlignRightIcon } from "react-icons/pi";
import { TiThLargeOutline as TextSettingsIcon } from "react-icons/ti";

import { OptionsType } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import {
  ControlPanel,
  ControlBox,
  ControlBtn,
  ControlSlider,
  ToggleOptions,
  ToggleColors,
} from "@/components/text-story-maker/parts/panels/PanelHelper";
import TextColorsPanel from "@/components/text-story-maker/parts/panels/TextColorsPanel";
import { UpdateOptionsSetsType } from "@/components/text-story-maker/TextStoryMakerTool";
import FontSlider from "@/components/text-story-maker/ui/FontSlider";
import { cn } from "@/utils/classNameUtils";

/**
 * Props for the TextOptionsPanel component.
 */
interface TextOptionsPanelProps extends UpdateOptionsSetsType {}

/**
 * TextOptionsPanel component for managing text-related options.
 */
const TextOptionsPanel = ({ options, updateOption }: TextOptionsPanelProps) => {
  const [activeTool, setActiveTool] = useState<string>("font-family");
  const [showSettingsDropdown, setShowSettingsDropdown] = useState<boolean>(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState<string>("text");

  const textAlignments: Array<"center" | "left" | "right"> = ["center", "left", "right"];

  /**
   * Handles changes to the active tool.
   *
   * @param {string} tool - The tool to activate.
   */
  const handleActiveToolChange = (tool: string): void => {
    setActiveTool(tool);
    setShowSettingsDropdown(false);
  };

  /**
   * Handles changes to the slider.
   *
   * @param {string} key - The option key to update.
   * @param {Array<number>} values - Array containing the value.
   */
  const handleSliderChange = (key: string, values: Array<number>): void =>
    updateOption(key as keyof OptionsType, parseFloat(values[0].toString()));

  /**
   * Toggles the text alignment option in sequence.
   */
  const handleAlignmentChange = (): void => {
    const currentAlignment = options.textAlign || "left";
    const currentIndex = textAlignments.indexOf(currentAlignment as "center" | "left" | "right");
    const nextIndex = (currentIndex + 1) % textAlignments.length;
    handleActiveToolChange("");
    setShowSettingsDropdown(false);
    updateOption("textAlign", textAlignments[nextIndex]);
  };

  /**
   * Toggles the bold text option.
   */
  const handleBoldToggle = (): void => {
    const newBoldStatus = !options.textBold;
    updateOption("textBold", newBoldStatus);
  };

  /**
   * Toggles the italic text option.
   */
  const handleItalicToggle = (): void => {
    const newItalicStatus = !options.textItalic;
    updateOption("textItalic", newItalicStatus);
  };

  /**
   * Toggles the uppercase text option.
   */
  const handleUppercaseToggle = (): void => {
    const newUppercaseStatus = !options.textUppercase;
    updateOption("textUppercase", newUppercaseStatus);
  };

  /**
   * Gets the appropriate icon for the current text alignment.
   *
   * @returns {React.Component} The icon component for the current alignment.
   */
  const getAlignmentIcon = (): React.ElementType => {
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
  const tabButtonClass = "bg-neutral-900 text-sm shadow-none font-normal py-2";

  return (
    <ControlPanel>
      {activeTool === "font-family" && <FontSlider options={options} updateOption={updateOption} />}

      {activeTool === "text-color" && (
        <TextColorsPanel options={options} updateOption={updateOption} />
      )}

      {activeTool === "text-settings" && showSettingsDropdown && (
        <ControlBox
          className="flex w-full flex-col items-start gap-4 rounded-xl bg-neutral-900/85 p-4 text-left"
          aria-label="Text Settings"
        >
          {/* Tabs */}
          <div className="flex w-full items-center justify-evenly rounded-xl bg-neutral-900 p-1">
            {Object.entries({
              "Text Controls": "text",
              "Box Controls": "box",
              "Effects Controls": "effects",
            }).map(([label, tab]) => (
              <button
                key={tab}
                type="button"
                className={cn(
                  btnBaseStyles.join(" "),
                  "flex-1 rounded-xl px-4 py-2 shadow-none",
                  "text-sm font-medium",
                  {
                    "bg-white text-neutral-900": activeSettingsTab === tab,
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <ToggleColors
                    label="Text Stroke"
                    selected={options.textStroke}
                    onChangeKey="textStroke"
                    onChangeHandler={updateOption}
                  />
                  {options.textStroke && (
                    <div className="mb-2">
                      <ControlSlider
                        min={0}
                        max={10}
                        step={0.25}
                        value={options.textStrokeSize}
                        onChangeKey="textStrokeSize"
                        onChangeHandler={handleSliderChange}
                      />
                    </div>
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
                    <div className="mb-2">
                      <ControlSlider
                        min={0}
                        max={2}
                        step={0.05}
                        value={options.textShadowSize}
                        onChangeKey="textShadowSize"
                        onChangeHandler={handleSliderChange}
                      />
                    </div>
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

export default TextOptionsPanel;
