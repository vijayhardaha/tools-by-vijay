import PropTypes from "prop-types";

import BgOptionsPanel from "@/components/text-story-maker/parts/tool-panels/BgOptionsPanel";
import TextOptionsPanel from "@/components/text-story-maker/parts/tool-panels/TextOptionsPanel";

/**
 * Footer component for the text story maker.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Configuration options for the footer.
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
  activeTool: PropTypes.string.isRequired,
};

export default Footer;
