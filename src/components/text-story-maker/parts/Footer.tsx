import PropTypes from "prop-types";

import BgOptionsPanel from "@/components/text-story-maker/parts/panels/BgOptionsPanel"; // Panel for background options
import TextOptionsPanel from "@/components/text-story-maker/parts/panels/TextOptionsPanel"; // Panel for text options

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

Footer.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  activeTool: PropTypes.string.isRequired,
};

export default Footer;
