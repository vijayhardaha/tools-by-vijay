"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Output component for the Replace Quotes tool.
 * Displays the processed text after replacing quotes with copy functionality.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.output - The processed text to display
 * @returns {JSX.Element} The rendered card with output display and copy functionality
 */
const ReplaceQuotesOutput = ({ output }) => {
  /**
   * State to track whether the output has been copied to clipboard
   * @type {[boolean, function]} - State and setter for copied status
   */
  const [copied, setCopied] = useState(false);

  /**
   * Copies the current output to the clipboard and provides visual feedback
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  if (!output) return null;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>The text after replacing quotes</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton copied={copied} disabled={!output} onClick={copyToClipboard} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea
          value={output}
          readOnly
          data-output
          className="min-h-52"
          placeholder="Processed text will appear here..."
        />
      </CardContent>
    </Card>
  );
};

ReplaceQuotesOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default ReplaceQuotesOutput;
