"use client";

import { useState } from "react";

import { LuCopy as CopyIcon, LuCheck as CheckIcon } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classNameUtils";

// Define TypeScript types for the component props
interface CopyButtonProps {
  text: string;
  copyText?: string;
  copiedText?: string;
  className?: string;
}

/**
 * Reusable copy button component with copied state feedback
 *
 * @component
 * @param {CopyButtonProps} props - The component props
 * @returns {JSX.Element} The CopyButton component
 */
export const CopyButton = ({
  text,
  copyText = "Copy",
  copiedText = "Copied!",
  className = "",
}: CopyButtonProps): React.JSX.Element => {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the text to the clipboard and updates the copied state.
   *
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const handleCopy = async (): Promise<void> => {
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
