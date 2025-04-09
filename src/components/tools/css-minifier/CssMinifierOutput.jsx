"use client";

import { useState } from "react";

import PropTypes from "prop-types";
import { LuCopy as CopyIcon, LuCheck as CheckIcon } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

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
        <CardTitle>MINIFIED OUTPUT</CardTitle>
        <p className="text-muted-foreground text-sm">
          {output ? `Size: ${getSizeInfo()}` : "Minified CSS will appear here"}
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Textarea
            value={output}
            readOnly
            disabled={!output}
            className="min-h-[200px] font-mono text-sm outline-none focus-visible:ring-0 focus-visible:outline-none"
          />
          <div className="flex justify-end">
            <Button
              variant="primary"
              disabled={!output}
              onClick={copyToClipboard}
              className={cn("min-w-30", {
                "bg-green-600 text-white hover:bg-green-600 hover:text-white":
                  copied,
              })}
            >
              {copied ? (
                <CheckIcon className="mr-1 h-4 w-4" />
              ) : (
                <CopyIcon className="mr-1 h-4 w-4" />
              )}
              {copied ? "Copied!" : "Copy to Clipboard"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

CssMinifierOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default CssMinifierOutput;
