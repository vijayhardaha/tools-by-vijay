"use client";

import { useState } from "react";

import PropTypes from "prop-types";
import { LuCopy as CopyIcon, LuCheck as CheckIcon } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>OUTPUT</CardTitle>
        <p className="text-muted-foreground text-sm">
          Cleaned and formatted slug
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input value={output} readOnly data-output />
          <Button
            variant={copied ? "success" : "primary"}
            disabled={!output}
            onClick={copyToClipboard}
            className="min-w-30"
          >
            {copied ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

SlugifyOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default SlugifyOutput;
