"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
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

  if (!password) return;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Password</CardTitle>
        <CardDescription>Your secure password</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            type="text"
            value={password}
            readOnly
            data-output
            className="font-mono text-xs"
          />
          <CopyButton
            copied={copied}
            disabled={!password}
            onClick={copyToClipboard}
          />
        </div>
      </CardContent>
    </Card>
  );
};

PasswordGeneratorOutput.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordGeneratorOutput;
