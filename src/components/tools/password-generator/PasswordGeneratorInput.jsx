"use client";

import PropTypes from "prop-types";
import { FiInfo } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tooltip } from "@/components/ui/tooltip";

/**
 * Component for configuring password generation options.
 * Provides a form with controls for password length, character types, and other settings.
 *
 * @component
 * @param {Object} props - Component props
 * @param {number} props.length - Current password length setting
 * @param {Function} props.setLength - Function to update password length
 * @param {boolean} props.useUppercase - Whether to include uppercase letters
 * @param {Function} props.setUseUppercase - Function to toggle uppercase letters
 * @param {boolean} props.useLowercase - Whether to include lowercase letters
 * @param {Function} props.setUseLowercase - Function to toggle lowercase letters
 * @param {boolean} props.useNumbers - Whether to include numbers
 * @param {Function} props.setUseNumbers - Function to toggle numbers
 * @param {boolean} props.useSymbols - Whether to include symbols
 * @param {Function} props.setUseSymbols - Function to toggle symbols
 * @param {boolean} props.excludeSimilar - Whether to exclude similar characters
 * @param {Function} props.setExcludeSimilar - Function to toggle exclusion of similar characters
 * @param {Function} props.onSubmit - Function to generate a password with current settings
 * @param {Function} props.onReset - Function to reset all settings to defaults
 * @returns {JSX.Element} The rendered form with password generation options
 */
const PasswordGeneratorInput = ({
  length,
  setLength,
  useUppercase,
  setUseUppercase,
  useLowercase,
  setUseLowercase,
  useNumbers,
  setUseNumbers,
  useSymbols,
  setUseSymbols,
  excludeSimilar,
  setExcludeSimilar,
  onSubmit,
  onReset,
}) => {
  /**
   * Handles form submission by preventing default behavior and triggering password generation
   * @param {FormEvent} e - Form event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Password Options</CardTitle>
        <CardDescription>Customize your password settings</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password-length">
                Password Length:{" "}
                <span className="text-muted-foreground text-sm">{length} characters</span>
              </Label>
            </div>

            <Slider
              id="password-length"
              min={8}
              max={64}
              step={1}
              value={length}
              onValueChange={(value) => setLength(value)}
            />
          </div>

          <div className="space-y-4">
            <p className="font-medium">Character Types</p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Checkbox id="useUppercase" checked={useUppercase} onCheckedChange={setUseUppercase}>
                Include Uppercase (A-Z)
              </Checkbox>

              <Checkbox id="useLowercase" checked={useLowercase} onCheckedChange={setUseLowercase}>
                Include Lowercase (a-z)
              </Checkbox>

              <Checkbox id="useNumbers" checked={useNumbers} onCheckedChange={setUseNumbers}>
                Include Numbers (0-9)
              </Checkbox>

              <Checkbox id="useSymbols" checked={useSymbols} onCheckedChange={setUseSymbols}>
                Include Symbols (!@#$...)
              </Checkbox>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="excludeSimilar"
              checked={excludeSimilar}
              onCheckedChange={setExcludeSimilar}
            >
              Exclude similar characters (i, l, 1, L, o, 0, O)
            </Checkbox>

            <Tooltip
              className="!w-80"
              text="This option removes characters that look alike (such as the letter 'O' and number '0'). Use this to create passwords that are less confusing to read and type, especially when sharing passwords verbally or in print."
            >
              <FiInfo className="text-muted-foreground h-4 w-4 cursor-help" />
            </Tooltip>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default">
              Generate Password
            </Button>

            <Button type="button" variant="destructive" onClick={onReset}>
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

PasswordGeneratorInput.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
  useUppercase: PropTypes.bool.isRequired,
  setUseUppercase: PropTypes.func.isRequired,
  useLowercase: PropTypes.bool.isRequired,
  setUseLowercase: PropTypes.func.isRequired,
  useNumbers: PropTypes.bool.isRequired,
  setUseNumbers: PropTypes.func.isRequired,
  useSymbols: PropTypes.bool.isRequired,
  setUseSymbols: PropTypes.func.isRequired,
  excludeSimilar: PropTypes.bool.isRequired,
  setExcludeSimilar: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PasswordGeneratorInput;
