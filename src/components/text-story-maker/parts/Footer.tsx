import React from 'react';

import BgOptionsPanel from '@/components/text-story-maker/parts/panels/BgOptionsPanel';
import TextOptionsPanel from '@/components/text-story-maker/parts/panels/TextOptionsPanel';
import type { UpdateOptionProps } from '@/components/text-story-maker/TextStoryMakerTool';

/**
 * Interface for the Footer component props.
 */
interface FooterProps extends UpdateOptionProps {
  activeTool: string;
}

/**
 * Footer component for the text story maker.
 *
 * @param {FooterProps} props - Component props.
 *
 * @returns {React.JSX.Element} The rendered Footer component.
 */
const Footer: React.FC<FooterProps> = ({ options, updateOption, activeTool }: FooterProps): React.JSX.Element => (
  <footer aria-label="Story formatting options" role="region">
    {activeTool === 'text' && (
      <TextOptionsPanel options={options} updateOption={updateOption} aria-label="Text formatting options panel" />
    )}
    {activeTool === 'background' && (
      <BgOptionsPanel options={options} updateOption={updateOption} aria-label="Background formatting options panel" />
    )}
  </footer>
);

export default Footer;
