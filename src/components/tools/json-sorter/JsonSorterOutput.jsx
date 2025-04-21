"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Displays the sorted JSON output with copy functionality.
 * Shows the sorted JSON in a readonly textarea and allows the user to copy it
 * to the clipboard with visual feedback when copied.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.output - The sorted JSON output to display
 * @returns {JSX.Element} The rendered card with output display and copy functionality
 */
const JsonSorterOutput = ({ output }) => {
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

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>The alphabetically sorted JSON output</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton copied={copied} onClick={copyToClipboard} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} rows={8} readOnly data-output />
      </CardContent>
    </Card>
  );
};

JsonSorterOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default JsonSorterOutput;
