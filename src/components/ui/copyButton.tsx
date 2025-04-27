"use client";

import { useState } from "react";

import PropTypes from "prop-types";
import { LuCopy as CopyIcon, LuCheck as CheckIcon } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classNameUtils";

/**
 * Reusable copy button component with copied state feedback
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.text - The text to copy to the clipboard
 * @param {string} props.copyText - Text to show when not copied
 * @param {string} props.copiedText - Text to show when copied
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} The CopyButton component
 */
export const CopyButton = ({ text, copyText = "Copy", copiedText = "Copied!", className }) => {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the text to the clipboard and updates the copied state.
   *
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const handleCopy = async () => {
    if (text) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  };

  return (
    <Button
      variant={copied ? "success" : "secondary"}
      onClick={handleCopy}
      className={cn("min-w-30", className)}
    >
      {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
      {copied ? copiedText : copyText}
    </Button>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  copyText: PropTypes.string,
  copiedText: PropTypes.string,
  className: PropTypes.string,
};
