import { FiInfo } from "react-icons/fi";

import { Tooltip } from "@/components/ui/tooltip";

// Define TypeScript types for the component props
interface IHelpTipProps {
  text: string;
}

/**
 * HelpTip component displays an informational icon with a tooltip.
 *
 * @param {IHelpTipProps} props - Component props.
 * @returns {React.JSX.Element} The rendered HelpTip component.
 */
export const HelpTip = ({ text }: IHelpTipProps): React.JSX.Element => (
  <Tooltip text={text} className="!max-w-80">
    <FiInfo className="text-muted-foreground h-4 w-4 cursor-help" />
  </Tooltip>
);
