"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Displays the converted array output with copy functionality.
 * Shows the converted array in a readonly textarea and allows the user to copy it
 * to the clipboard with visual feedback when copied.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.output - The converted array output to display
 * @param {string} props.error - Error message to display, if any
 * @returns {JSX.Element} The rendered card with output display and copy functionality
 */
const DropdownToArrayOutput = ({ output }) => {
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

  if (!output) return;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Converted Output</CardTitle>
            <CardDescription>Copy the generated array for use in your code</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton copied={copied} disabled={!output} onClick={copyToClipboard} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} readOnly data-output className="min-h-28" />
      </CardContent>
    </Card>
  );
};

DropdownToArrayOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default DropdownToArrayOutput;
