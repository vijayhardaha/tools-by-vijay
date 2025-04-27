"use client";

import PropTypes from "prop-types";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpTip } from "@/components/ui/helptip";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component for inputting multiline text and configuring conversion options.
 * Provides a form with controls for text input, output format, and array structure.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.input - Current text input
 * @param {Function} props.setInput - Function to update text input
 * @param {string} props.outputFormat - Selected output format
 * @param {Function} props.setOutputFormat - Function to update output format
 * @param {string} props.arrayType - Selected array structure type
 * @param {Function} props.setArrayType - Function to update array structure type
 * @param {boolean} props.trimLines - Whether to trim whitespace from lines
 * @param {Function} props.setTrimLines - Function to update trim lines setting
 * @param {boolean} props.removeEmptyLines - Whether to remove empty lines
 * @param {Function} props.setRemoveEmptyLines - Function to update remove empty lines setting
 * @param {boolean} props.useSlugKeys - Whether to use slugified keys
 * @param {Function} props.setUseSlugKeys - Function to update slug keys setting
 * @param {Function} props.onSubmit - Function to convert text to array
 * @param {Function} props.onClear - Function to clear text input only
 * @param {Function} props.onReset - Function to reset all settings to defaults
 * @returns {JSX.Element} The rendered form with conversion options
 */
const TextToArrayInput = ({
  input,
  setInput,
  outputFormat,
  setOutputFormat,
  arrayType,
  setArrayType,
  trimLines,
  setTrimLines,
  removeEmptyLines,
  setRemoveEmptyLines,
  useSlugKeys,
  setUseSlugKeys,
  onSubmit,
  onClear,
  onReset,
  error,
}) => {
  /**
   * Handles form submission by preventing default behavior and triggering conversion
   * @param {FormEvent} e - Form event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Input</CardTitle>
        <CardDescription>Paste multiline text and convert to various array formats</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="text-input">Multiline Text</Label>
              <HelpTip text="Enter or paste text with one item per line. Each line will become an element in the resulting array." />
            </div>
            <Textarea
              id="text-input"
              placeholder={`Item 1\nItem 2\nItem 3`}
              rows={5}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="output-format">Output Format</Label>
                <HelpTip text="Select the programming language and format for the output array or object" />
              </div>

              <Select
                id="output-format"
                value={outputFormat}
                onValueChange={setOutputFormat}
                options={[
                  { value: "json", label: "JSON" },
                  { value: "jsArray", label: "JavaScript Array" },
                  { value: "jsObject", label: "JavaScript Object" },
                  { value: "php", label: "PHP Array" },
                  { value: "wordpress", label: "WordPress Array" },
                ]}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="array-type">Array Structure</Label>
                <HelpTip text="Simple: Just values. Numeric: Indexed entries with ID/position and values. Associative: Key-value pairs." />
              </div>
              <Select
                id="array-type"
                value={arrayType}
                onValueChange={setArrayType}
                options={[
                  { value: "simple", label: "Simple (Values Only)" },
                  { value: "numeric", label: "Numeric (ID & Value)" },
                  { value: "associative", label: "Associative (Key-Value)" },
                ]}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Checkbox id="trim-lines" checked={trimLines} onCheckedChange={setTrimLines}>
              Trim whitespace from each line
            </Checkbox>

            <Checkbox
              id="remove-empty-lines"
              checked={removeEmptyLines}
              onCheckedChange={setRemoveEmptyLines}
            >
              Remove empty lines
            </Checkbox>

            <Checkbox id="use-slug-keys" checked={useSlugKeys} onCheckedChange={setUseSlugKeys}>
              Use slugified keys
            </Checkbox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Convert
            </Button>

            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>

            <Button type="button" variant="destructive" onClick={onReset}>
              Reset
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
};

TextToArrayInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  outputFormat: PropTypes.string.isRequired,
  setOutputFormat: PropTypes.func.isRequired,
  arrayType: PropTypes.string.isRequired,
  setArrayType: PropTypes.func.isRequired,
  trimLines: PropTypes.bool.isRequired,
  setTrimLines: PropTypes.func.isRequired,
  removeEmptyLines: PropTypes.bool.isRequired,
  setRemoveEmptyLines: PropTypes.func.isRequired,
  useSlugKeys: PropTypes.bool.isRequired,
  setUseSlugKeys: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextToArrayInput;
