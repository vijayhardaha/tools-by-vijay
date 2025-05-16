import React, { useState } from "react";

import BgColorsSlider from "@/components/text-story-maker/parts/panels/BgColorsSlider";
import {
  ControlPanel,
  ControlBox,
  ControlBtn,
} from "@/components/text-story-maker/parts/panels/PanelHelper";
import { UpdateOptionsSetsType } from "@/components/text-story-maker/TextStoryMakerTool";

interface BgOptionsPanelProps extends UpdateOptionsSetsType {}

/**
 * BgOptionsPanel component provides a toolbar for selecting background types.
 *
 * @param {BgOptionsPanelProps} props - Component props.
 * @returns {JSX.Element} The rendered BgOptionsPanel component.
 */
const BgOptionsPanel: React.FC<BgOptionsPanelProps> = ({
  options,
  updateOption,
}: BgOptionsPanelProps): React.JSX.Element => {
  const [activeTool, setActiveTool] = useState(options.bgType);

  const tools = [
    { name: "solid", label: "Solid" },
    { name: "gradient", label: "Gradient" },
  ];

  /**
   * Handles the change of the active background tool.
   *
   * @param {string} tool - The selected background tool type.
   */
  const handleToolChange = (tool: string) => {
    if (activeTool === tool) return;
    setActiveTool(tool);
    updateOption("bgType", tool);
    if (options.bgType !== tool) {
      updateOption("bgColor", 0);
    }
  };

  return (
    <ControlPanel>
      {tools.map(
        ({ name }) =>
          activeTool === name && (
            <BgColorsSlider key={name} tool={name} options={options} updateOption={updateOption} />
          )
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
