import { useState } from "react";

import PropTypes from "prop-types";

import {
  ToolBarWrapper,
  ToolBarButton,
} from "@/components/text-story-maker/toolbars/ToolBarBase";

/**
 * BackgroundToolBar component provides a toolbar for selecting background types.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Options object containing the current background settings.
 * @param {string} props.options.bgType - The current background type (e.g., "solid", "gradient", "mesh").
 * @param {Function} props.updateOption - Function to update the selected background option.
 * @returns {JSX.Element} The rendered BackgroundToolBar component.
 */
const BackgroundToolBar = ({ options, updateOption }) => {
  const [activeTool, setActiveTool] = useState(options.bgType);

  return (
    <>
      <div className="absolute bottom-0 left-0 z-20 flex h-auto w-full items-center justify-center p-4 py-6">
        <ToolBarWrapper>
          <ToolBarButton
            type="text"
            active={activeTool === "solid"}
            onClick={() => {
              setActiveTool("solid");
              updateOption("bgType", "solid");
            }}
          >
            Solid Colors
          </ToolBarButton>
          <ToolBarButton
            type="text"
            active={activeTool === "gradient"}
            onClick={() => {
              setActiveTool("gradient");
              updateOption("bgType", "gradient");
            }}
          >
            Gradient Colors
          </ToolBarButton>
          <ToolBarButton
            type="text"
            active={activeTool === "mesh"}
            onClick={() => {
              setActiveTool("mesh");
              updateOption("bgType", "mesh");
            }}
          >
            Mesh Colors
          </ToolBarButton>
        </ToolBarWrapper>
      </div>
    </>
  );
};

BackgroundToolBar.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default BackgroundToolBar;
