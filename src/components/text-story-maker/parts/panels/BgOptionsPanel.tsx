import React, { useState } from "react";

import { bgColors } from "@/components/text-story-maker/constants";
import ColorSelectPanel from "@/components/text-story-maker/parts/panels/ColorSelectPanel";
import {
  ControlPanel,
  ControlBox,
  ControlBtn,
} from "@/components/text-story-maker/parts/panels/PanelHelper";
import { IUpdateOptionProps } from "@/components/text-story-maker/TextStoryMakerTool";

/**
 * Interface for the BgOptionsPanel component props.
 */
interface IBgOptionsPanelProps extends IUpdateOptionProps {}

/**
 * BgOptionsPanel component provides a toolbar for selecting background types.
 *
 * @param {IBgOptionsPanelProps} props - Component props.
 * @returns {React.JSX.Element} The rendered BgOptionsPanel component.
 */
const BgOptionsPanel: React.FC<IBgOptionsPanelProps> = ({
  options,
  updateOption,
}: IBgOptionsPanelProps): React.JSX.Element => {
  const [activeTool, setActiveTool] = useState<string>(options.bgType);

  const tools: { name: string; label: string }[] = [
    { name: "solid", label: "Solid" },
    { name: "gradient", label: "Gradient" },
  ];

  /**
   * Handles the change of the active background tool.
   *
   * @param {string} tool - The selected background tool type.
   * @returns {void}
   */
  const handleToolChange = (tool: string): void => {
    if (activeTool === tool) {
      setActiveTool("");
    } else {
      setActiveTool(tool);
    }
  };

  return (
    <ControlPanel>
      {activeTool === "gradient" && (
        <ColorSelectPanel
          optionKey="bgColor"
          options={options}
          updateOption={updateOption}
          colors={bgColors.gradient}
          onSelect={() => updateOption("bgType", "gradient")}
        />
      )}

      {activeTool === "solid" && (
        <ColorSelectPanel
          optionKey="bgColor"
          options={options}
          updateOption={updateOption}
          colors={bgColors.solid}
          onSelect={() => updateOption("bgType", "solid")}
        />
      )}

      <ControlBox>
        <ControlBtn
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
          }}
          screenReaderText="Background Color Palette"
          className="pointer-events-none p-0"
          aria-hidden="true"
        >
          <div className="size-13 rounded-xl bg-[conic-gradient(from_0deg,_red,_yellow,_lime,_cyan,_blue,_magenta,_red)] shadow-lg"></div>
        </ControlBtn>
        <div role="radiogroup" aria-label="Background style options">
          {tools.map(({ name, label }) => (
            <ControlBtn
              key={name}
              type="text"
              active={activeTool === name}
              onClick={() => handleToolChange(name)}
              role="radio"
              aria-checked={activeTool === name}
              aria-label={`${label} background style`}
              screenReaderText={`${label} background style`}
            >
              {label}
            </ControlBtn>
          ))}
        </div>
      </ControlBox>
    </ControlPanel>
  );
};

export default BgOptionsPanel;
