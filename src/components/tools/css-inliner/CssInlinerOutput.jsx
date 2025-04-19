"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component that displays the inlined HTML output.
 *
 * @param {Object} props - Component props
 * @param {string} props.output - The inlined HTML output
 * @returns {JSX.Element} The CssInlinerOutput component
 */
const CssInlinerOutput = ({ output }) => {
  const [copied, setCopied] = useState(false);

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
            <CardDescription>
              The resulting HTML with inlined CSS will appear below.
            </CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton copied={copied} disabled={!output} onClick={copyToClipboard} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} readOnly className="min-h-52" />
      </CardContent>
    </Card>
  );
};

CssInlinerOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default CssInlinerOutput;
