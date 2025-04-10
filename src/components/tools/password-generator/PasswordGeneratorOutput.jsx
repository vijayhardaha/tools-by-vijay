"use client";

import { useState } from "react";

import PropTypes from "prop-types";
import { LuCopy as CopyIcon, LuCheck as CheckIcon } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/**
 * Displays the generated password with a copy functionality.
 * Shows the generated password in a readonly input field and allows the user to copy it
 * to the clipboard with visual feedback when copied.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.password - The generated password to display
 * @returns {JSX.Element} The rendered card with password display and copy functionality
 */
const PasswordGeneratorOutput = ({ password }) => {
  /**
   * State to track whether the password has been copied to clipboard
   * @type {[boolean, function]} - State and setter for copied status
   */
  const [copied, setCopied] = useState(false);

  /**
   * Copies the current password to the clipboard and provides visual feedback
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>GENERATED PASSWORD</CardTitle>
        <p className="text-muted-foreground text-sm">Your secure password</p>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            type="text"
            value={password}
            readOnly
            data-output
            className="font-mono"
          />
          <Button
            variant={copied ? "success" : "secondary"}
            disabled={!password}
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

PasswordGeneratorOutput.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordGeneratorOutput;
