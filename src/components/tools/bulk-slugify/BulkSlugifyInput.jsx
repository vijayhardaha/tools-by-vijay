"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils/classNameUtils";

/**
 * Component for user input and configuration options for the Bulk Slugify tool
 *
 * This component provides a form for users to input text strings to be slugified,
 * along with configuration options for the slugification process such as separator
 * type, case conversion, number removal, and character normalization.
 *
 * @param {Object} props - Component props
 * @param {string} props.input - The current input text
 * @param {boolean} props.useUnderscore - Whether to use underscore as separator instead of dash
 * @param {Function} props.setInput - Function to update the input text
 * @param {boolean} props.removeNumbers - Whether to remove numbers from the slugs
 * @param {boolean} props.useLowercase - Whether to convert slugs to lowercase
 * @param {boolean} props.useLitinize - Whether to normalize special characters using latinize
 * @param {Function} props.setUseUnderscore - Function to toggle underscore usage
 * @param {Function} props.setRemoveNumbers - Function to toggle number removal
 * @param {Function} props.setUseLowercase - Function to toggle lowercase conversion
 * @param {Function} props.setUseLitinize - Function to toggle latinize usage
 * @param {Function} props.onGenerate - Function to handle slug generation
 * @param {Function} props.onClear - Function to clear the input
 * @param {Function} props.onReset - Function to reset all options to defaults
 * @returns {JSX.Element} Input form with configuration options
 */
const BulkSlugifyInput = ({
  input = "",
  useUnderscore = false,
  setInput,
  removeNumbers = false,
  useLowercase = true,
  useLitinize = true,
  setUseUnderscore,
  setRemoveNumbers,
  setUseLowercase,
  setUseLitinize,
  onGenerate,
  onClear,
  onReset,
}) => {
  /**
   * Handles changes to the input textarea
   *
   * @param {Object} e - Event object
   */
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  /**
   * Handles form submission to generate slugs
   *
   * @param {Object} e - Event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Strings</CardTitle>
        <CardDescription>(Article titles, tutorial titles or any web page titles)</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            placeholder="Enter multiple lines of text to slugify"
            value={input}
            rows={5}
            onChange={handleInputChange}
            className="font-mono text-sm"
          />

          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-sm">
              Currently separating with:{" "}
              <span className="font-bold">{useUnderscore ? "Underscore (_)" : "Dash (-)"}</span>
            </p>
            <div className="mb-2 flex gap-2">
              <Button
                size="sm"
                variant={!useUnderscore ? "default" : "outline"}
                onClick={() => setUseUnderscore(false)}
                disabled={!useUnderscore}
                className={cn("!opacity-100")}
              >
                <span className="text-xs">With dash (-)</span>
              </Button>
              <Button
                size="sm"
                variant={useUnderscore ? "default" : "outline"}
                onClick={() => setUseUnderscore(true)}
                disabled={useUnderscore}
                className={cn("!opacity-100")}
              >
                <span className="text-xs">With underscore (_)</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 gap-x-6">
            <div className="flex items-center space-x-1">
              <Checkbox
                id="useLowercase"
                checked={useLowercase}
                onCheckedChange={setUseLowercase}
              />
              <Label htmlFor="useLowercase">Convert to lowercase</Label>
            </div>

            <div className="flex items-center space-x-1">
              <Checkbox
                id="remove-numbers"
                checked={removeNumbers}
                onCheckedChange={setRemoveNumbers}
              />
              <Label htmlFor="remove-numbers">Remove numbers</Label>
            </div>

            <div className="flex items-center space-x-1">
              <Checkbox id="use-latinize" checked={useLitinize} onCheckedChange={setUseLitinize} />
              <Label htmlFor="use-latinize">Use latinize</Label>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Generate
            </Button>
            <Button type="button" variant="outline" onClick={onClear}>
              Clear
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

BulkSlugifyInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  useUnderscore: PropTypes.bool.isRequired,
  setUseUnderscore: PropTypes.func.isRequired,
  removeNumbers: PropTypes.bool.isRequired,
  setRemoveNumbers: PropTypes.func.isRequired,
  useLowercase: PropTypes.bool.isRequired,
  setUseLowercase: PropTypes.func.isRequired,
  useLitinize: PropTypes.bool.isRequired,
  setUseLitinize: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default BulkSlugifyInput;
