import PropTypes from "prop-types";

import TextToolBars from "@/components/text-story-maker/toolbars/textToolBars";

/**
 * Footer component for the text story maker.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Configuration options for the footer.
 * @param {Function} props.updateOption - Callback function to update options.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = ({ options, updateOption }) => (
  <footer className="absolute bottom-0 left-0 z-20 flex h-auto w-full items-center justify-center p-4 py-6">
    <TextToolBars options={options} updateOption={updateOption} />
  </footer>
);

Footer.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default Footer;
