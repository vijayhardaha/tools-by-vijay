"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the slugified output and provides copy functionality.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.output - The slugified text to display
 * @returns {JSX.Element} The SlugifyOutput component
 */
const SlugifyOutput = ({ output }) => {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the output text to the clipboard and shows a temporary confirmation.
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

  if (!output) return;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Output</CardTitle>
        <CardDescription>Cleaned and formatted slug</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input type="text" value={output} readOnly data-output />
          <CopyButton copied={copied} disabled={!output} onClick={copyToClipboard} />
        </div>
      </CardContent>
    </Card>
  );
};

SlugifyOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default SlugifyOutput;
