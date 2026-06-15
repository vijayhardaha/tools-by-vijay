import type { JSX } from 'react';

import { FiInfo } from 'react-icons/fi';

import { Tooltip } from '@/components/ui/tooltip';

/**
 * Props for the HelpTip component.
 *
 * @type {HelpTipProps}
 * @property {string} text - The tooltip text to display
 */
interface HelpTipProps {
  text: string;
}

/**
 * HelpTip component displays an informational icon with a tooltip.
 *
 *  @param {HelpTipProps} props - Component props.
 *
 * @returns {JSX.Element} The rendered HelpTip component.
 */
export default function HelpTip({ text }: HelpTipProps): JSX.Element {
  return (
    <Tooltip text={text} className="max-w-80!">
      <FiInfo className="text-muted-foreground h-4 w-4 cursor-help" />
    </Tooltip>
  );
}

export { HelpTip };
