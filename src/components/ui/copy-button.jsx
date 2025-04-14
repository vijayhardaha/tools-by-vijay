"use client";

import PropTypes from "prop-types";
import { LuCopy as CopyIcon, LuCheck as CheckIcon } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classNameUtils";

/**
 * Reusable copy button component with copied state feedback
 *
 * @component
 * @param {Object} props - The component props
 * @param {boolean} props.copied - Whether content has been copied
 * @param {boolean} props.disabled - Whether the button should be disabled
 * @param {Function} props.onClick - Function to call when button is clicked
 * @param {string} props.copyText - Text to show when not copied
 * @param {string} props.copiedText - Text to show when copied
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} The CopyButton component
 */
const CopyButton = ({
  copied,
  disabled,
  onClick,
  copyText = "Copy",
  copiedText = "Copied!",
  className,
}) => {
  return (
    <Button
      variant={copied ? "success" : "secondary"}
      disabled={disabled}
      onClick={onClick}
      className={cn("min-w-30", className)}
    >
      {copied ? (
        <CheckIcon className="h-4 w-4" />
      ) : (
        <CopyIcon className="h-4 w-4" />
      )}
      {copied ? copiedText : copyText}
    </Button>
  );
};

CopyButton.propTypes = {
  copied: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  copyText: PropTypes.string,
  copiedText: PropTypes.string,
  className: PropTypes.string,
};

export default CopyButton;
