import PropTypes from "prop-types";
import { FiInfo } from "react-icons/fi";

import { Tooltip } from "@/components/ui/Tooltip";

/**
 * HelpTip component displays an informational icon with a tooltip.
 *
 * @param {Object} props - Component props.
 * @param {string} props.text - The text to display inside the tooltip.
 * @returns {JSX.Element} The rendered HelpTip component.
 */
export const HelpTip = ({ text }) => (
  <Tooltip text={text} className="!max-w-80">
    <FiInfo className="text-muted-foreground h-4 w-4 cursor-help" />
  </Tooltip>
);

HelpTip.propTypes = {
  text: PropTypes.string.isRequired,
};
