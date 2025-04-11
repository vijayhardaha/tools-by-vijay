import PropTypes from "prop-types";

import TextToolBar from "@/components/text-story-maker/toolbars/TextToolBar";

import BackgroundToolBar from "./toolbars/BackgroundToolBar";

/**
 * Footer component for the text story maker.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Configuration options for the footer.
 * @param {Function} props.updateOption - Callback function to update options.
 * @param {string} props.toolbarVisible - Determines which toolbar to display.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = ({ options, updateOption, toolbarVisible }) => (
  <>
    {toolbarVisible === "text" && (
      <TextToolBar options={options} updateOption={updateOption} />
    )}
    {toolbarVisible === "background" && (
      <BackgroundToolBar options={options} updateOption={updateOption} />
    )}
  </>
);

Footer.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  toolbarVisible: PropTypes.string.isRequired,
};

export default Footer;
