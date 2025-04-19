"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Output component for the Alphabetical Line Sorter tool.
 * Displays the sorted text in a readonly textarea with a copy button.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.output - The sorted text to display
 * @returns {JSX.Element} The rendered output display
 */
const AlphabeticalLineSorterOutput = ({ output }) => {
  const [copied, setCopied] = useState(false);

  /**
   * Handles the copy to clipboard action.
   * Copies the sorted text to the clipboard and sets a temporary copied state.
   * Resets the copied state after 1 second.
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
            <CardDescription>The text after sorting lines alphabetically.</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton copied={copied} onClick={copyToClipboard} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} className="min-h-52" readOnly data-output />
      </CardContent>
    </Card>
  );
};

AlphabeticalLineSorterOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default AlphabeticalLineSorterOutput;
