import { useState } from "react";

import PropTypes from "prop-types";

import BgColorsSlider from "@/components/text-story-maker/parts/panels/BgColorsSlider";
import {
  ControlPanel,
  ControlBox,
  ControlBtn,
} from "@/components/text-story-maker/parts/panels/OptionsPanelHelper";

/**
 * BgOptionsPanel component provides a toolbar for selecting background types.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Options object containing the current background settings.
 * @param {string} props.options.bgType - The current background type (e.g., "solid", "gradient", "mesh").
 * @param {string} props.options.bgColor - The current background color key.
 * @param {Function} props.updateOption - Function to update the selected background option.
 * @returns {JSX.Element} The rendered BgOptionsPanel component.
 */
const BgOptionsPanel = ({ options, updateOption }) => {
  const [activeTool, setActiveTool] = useState(options.bgType);

  const tools = [
    { name: "solid", label: "Solid" },
    { name: "gradient", label: "Gradient" },
    { name: "mesh", label: "Mesh" },
  ];

  /**
   * Handles the change of the active background tool.
   *
   * @param {string} tool - The selected background tool type.
   */
  const handleToolChange = (tool) => {
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
            <BgColorsSlider
              key={name}
              tool={name}
              options={options}
              updateOption={updateOption}
            />
          )
      )}

      <ControlBox>
        <ControlBtn
          onClick={(e) => {
            e.preventDefault();
          }}
          screenReaderText="Text Color Tool"
          className="pointer-events-none p-0"
        >
          <div className="size-13 rounded-xl bg-[conic-gradient(from_0deg,_red,_yellow,_lime,_cyan,_blue,_magenta,_red)] shadow-lg"></div>
        </ControlBtn>
        {tools.map(({ name, label }) => (
          <ControlBtn
            key={name}
            type="text"
            active={activeTool === name}
            onClick={() => handleToolChange(name)}
          >
            {label}
          </ControlBtn>
        ))}
      </ControlBox>
    </ControlPanel>
  );
};

BgOptionsPanel.propTypes = {
  options: PropTypes.shape({
    bgType: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default BgOptionsPanel;
