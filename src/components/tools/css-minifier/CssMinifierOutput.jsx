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
 * Component that displays the minified CSS output and provides copy functionality
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.output - The minified CSS to display
 * @returns {JSX.Element} The CssMinifierOutput component
 */
const CssMinifierOutput = ({ output }) => {
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
   * Calculates the size information if there is output
   *
   * @function
   * @returns {string|null} The size information or null if no output
   */
  const getSizeInfo = () => {
    if (!output) return null;

    // Get the byte lengths
    const outputSize = new Blob([output]).size;

    if (outputSize === 0) return "0 bytes";

    // Format the sizes for display
    return `${outputSize} bytes`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle>Minified Output</CardTitle>
            <CardDescription>
              {output
                ? `Size: ${getSizeInfo()}`
                : "Minified CSS will appear here"}
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
          disabled={!output}
          className="min-h-[200px] font-mono text-sm outline-none focus-visible:ring-0 focus-visible:outline-none"
        />
      </CardContent>
    </Card>
  );
};

CssMinifierOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default CssMinifierOutput;
