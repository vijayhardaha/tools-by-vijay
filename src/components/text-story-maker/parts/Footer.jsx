import PropTypes from "prop-types";

import BgOptionsPanel from "@/components/text-story-maker/parts/tool-panels/BgOptionsPanel"; // Panel for background options
import TextOptionsPanel from "@/components/text-story-maker/parts/tool-panels/TextOptionsPanel"; // Panel for text options

/**
 * Footer component for the text story maker.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Configuration options for the footer.
 * @param {Object} props.options.text - Text-related options.
 * @param {Object} props.options.background - Background-related options.
 * @param {Function} props.updateOption - Callback function to update options.
 * @param {string} props.activeTool - Determines which toolbar to display.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = ({ options, updateOption, activeTool }) => (
  <>
    {activeTool === "text" && (
      <TextOptionsPanel options={options} updateOption={updateOption} />
    )}
    {activeTool === "background" && (
      <BgOptionsPanel options={options} updateOption={updateOption} />
    )}
  </>
);

Footer.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  updateOption: PropTypes.func.isRequired,
  activeTool: PropTypes.string.isRequired,
};

export default Footer;
