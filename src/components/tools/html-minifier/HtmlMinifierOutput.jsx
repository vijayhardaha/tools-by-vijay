"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component that displays the minified HTML output and provides copy functionality
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.output - The minified HTML to display
 * @returns {JSX.Element} The HtmlMinifierOutput component
 */
const HtmlMinifierOutput = ({ output }) => {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the output text to the clipboard and shows a temporary confirmation
   *
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  /**
   * Calculates the size reduction percentage if there is output
   *
   * @function
   * @returns {string|null} The percentage of size reduction or null if no output
   */
  const getSizeReduction = () => {
    if (!output) return null;

    // Get the byte lengths
    const originalSize = new Blob([output]).size;

    if (originalSize === 0) return "0%";

    // Format the sizes for display
    return `${originalSize} bytes`;
  };

  if (!output) return;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>Minified Output</CardTitle>
            <CardDescription>
              {output
                ? `Size: ${getSizeReduction()}`
                : "Minified HTML will appear here"}
            </CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton
              copied={copied}
              disabled={!output}
              onClick={copyToClipboard}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea
          value={output}
          readOnly
          data-output
          className="min-h-[200px] font-mono text-sm"
        />
      </CardContent>
    </Card>
  );
};

HtmlMinifierOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default HtmlMinifierOutput;
