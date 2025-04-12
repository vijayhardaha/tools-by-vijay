import PropTypes from "prop-types";

import BackgroundToolBar from "@/components/text-story-maker/toolbars/BackgroundToolBar";
import TextToolBar from "@/components/text-story-maker/toolbars/TextToolBar";

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
      <TextToolBar options={options} updateOption={updateOption} />
    )}
    {activeTool === "background" && (
      <BackgroundToolBar options={options} updateOption={updateOption} />
    )}
  </>
);

Footer.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  activeTool: PropTypes.string.isRequired,
};

export default Footer;
