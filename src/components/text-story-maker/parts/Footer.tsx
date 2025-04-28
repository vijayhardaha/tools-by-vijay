import React from "react";

import { OptionsType } from "@/components/text-story-maker/constants";
import BgOptionsPanel from "@/components/text-story-maker/parts/panels/BgOptionsPanel";
import TextOptionsPanel from "@/components/text-story-maker/parts/panels/TextOptionsPanel";
import { UpdateOptionsSetsType } from "@/components/text-story-maker/TextStoryMakerTool";

// Define TypeScript types
interface FooterProps extends UpdateOptionsSetsType {
  activeTool: string;
}

/**
 * Footer component for the text story maker.
 */
const Footer: React.FC<FooterProps> = ({ options, updateOption, activeTool }) => (
  <footer aria-label="Story formatting options" role="region">
    {activeTool === "text" && (
      <TextOptionsPanel
        options={options}
        updateOption={updateOption}
        aria-label="Text formatting options panel"
      />
    )}
    {activeTool === "background" && (
      <BgOptionsPanel
        options={options}
        updateOption={updateOption}
        aria-label="Background formatting options panel"
      />
    )}
  </footer>
);

export default Footer;
