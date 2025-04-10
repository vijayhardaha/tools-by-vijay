"use client";

import { useState } from "react";

import PropTypes from "prop-types";
import { LuCopy as CopyIcon, LuCheck as CheckIcon } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component that displays the generated slugs and provides copy functionality
 *
 * This component renders the output of the slugify process, allowing users to
 * copy individual slugs or all slugs at once. It shows visual feedback when
 * content is copied to the clipboard.
 *
 * @param {Object} props - Component props
 * @param {string} props.output - The generated slug output as a newline-separated string
 * @returns {JSX.Element} Output display with copy functionality
 */
const BulkSlugifyOutput = ({ output }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  /**
   * Copies the provided text to clipboard and manages the copy state indicators
   *
   * @param {string} text - The text to copy to clipboard
   * @param {number|null} index - Index of the copied line (null for copy all)
   * @returns {Promise<void>}
   */
  const copyToClipboard = async (text, index = null) => {
    await navigator.clipboard.writeText(text);
    if (index === null) {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 1000);
    } else {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1000);
    }
  };

  // Split the output into individual lines and filter out empty lines
  const lines = output.split("\n").filter((line) => line.trim() !== "");
  // Get the total number of lines including empty ones for textarea rows
  const unfilteredLinesLength = output.split("\n").length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Output</CardTitle>
        <CardDescription>Cleaned and formatted slugs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Textarea
            value={output}
            readOnly
            data-output
            disabled={!output}
            rows={unfilteredLinesLength || 1}
          />
          <Button
            variant={copiedAll ? "success" : "secondary"}
            disabled={!output}
            onClick={() => copyToClipboard(output)}
          >
            {copiedAll ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
            {copiedAll ? "Copied All!" : "Copy All"}
          </Button>
          <div className="flex flex-col gap-2">
            {lines.map((line, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={line}
                  readOnly
                  data-output
                  disabled={!line}
                  className="flex-1"
                />
                <Button
                  variant={copiedIndex === index ? "success" : "secondary"}
                  disabled={!line}
                  onClick={() => copyToClipboard(line, index)}
                  className="min-w-30"
                >
                  {copiedIndex === index ? (
                    <CheckIcon className="h-4 w-4" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

BulkSlugifyOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default BulkSlugifyOutput;
