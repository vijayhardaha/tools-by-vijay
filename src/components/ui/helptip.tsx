import { JSX } from "react";

import { FiInfo } from "react-icons/fi";

import { Tooltip } from "@/components/ui/Tooltip";

// Define TypeScript types for the component props
interface HelpTipProps {
  text: string;
}

/**
 * HelpTip component displays an informational icon with a tooltip.
 *
 * @param {HelpTipProps} props - Component props.
 * @returns {JSX.Element} The rendered HelpTip component.
 */
export const HelpTip = ({ text }: HelpTipProps): JSX.Element => (
  <Tooltip text={text} className="!max-w-80">
    <FiInfo className="text-muted-foreground h-4 w-4 cursor-help" />
  </Tooltip>
);
