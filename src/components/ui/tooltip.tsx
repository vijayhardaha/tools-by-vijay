"use client";

import { useId } from "react";

import PropTypes from "prop-types";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { cn } from "@/utils/classNameUtils";

// eslint-disable-next-line import/order
import "react-tooltip/dist/react-tooltip.css";

/**
 * Tooltip component to display a tooltip with customizable content and styles.
 *
 * @param {Object} props - The props for the Tooltip component.
 * @param {string} props.text - The text to display inside the tooltip.
 * @param {any} props.children - The child element that triggers the tooltip.
 * @param {string} [props.className] - Additional CSS classes for the tooltip.
 * @param {number} [props.sideOffset=4] - The offset of the tooltip from the trigger element.
 * @param {number} [props.delayDuration=300] - The delay in milliseconds before showing the tooltip.
 * @returns {JSX.Element} The rendered Tooltip component.
 */
function Tooltip({ text, children, className, sideOffset = 4, delayDuration = 300, ...props }) {
  const tooltipId = useId();

  return (
    <>
      <span
        data-tooltip-id={tooltipId}
        data-tooltip-content={text}
        role="button"
        tabIndex={0}
        {...props}
      >
        {children}
      </span>

      <ReactTooltip
        id={tooltipId}
        delayShow={delayDuration}
        offset={sideOffset}
        style={{ zIndex: 9999 }}
        className={cn(
          "!text-primary-foreground !-mt-0.5 !max-w-60 !rounded-md !bg-black !px-3 !py-1.5 !text-xs !leading-4 !font-normal !shadow-sm",
          className
        )}
      />
    </>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  sideOffset: PropTypes.number,
  delayDuration: PropTypes.number,
};

export { Tooltip };
