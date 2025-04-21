"use client";

import PropTypes from "prop-types";
import { FiInfo } from "react-icons/fi";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip } from "@/components/ui/tooltip";

/**
 * Component for inputting HTML dropdown and configuring conversion options.
 * Provides a form with controls for HTML input, output format, and array structure.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.input - Current HTML input
 * @param {Function} props.setInput - Function to update HTML input
 * @param {string} props.outputFormat - Selected output format
 * @param {Function} props.setOutputFormat - Function to update output format
 * @param {string} props.arrayType - Selected array structure type
 * @param {Function} props.setArrayType - Function to update array structure type
 * @param {boolean} props.useSlugKeys - Whether to use slugified keys
 * @param {Function} props.setUseSlugKeys - Function to update slug keys setting
 * @param {Function} props.onSubmit - Function to convert HTML to array
 * @param {Function} props.onClear - Function to clear only the input field
 * @param {Function} props.onReset - Function to reset all settings to defaults
 * @returns {JSX.Element} The rendered form with conversion options
 */
const DropdownToArrayInput = ({
  input,
  setInput,
  outputFormat,
  setOutputFormat,
  arrayType,
  setArrayType,
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
        <CardTitle>Dropdown HTML</CardTitle>
        <CardDescription>
          Paste HTML select/dropdown content and convert to various array formats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="html-input">HTML Select/Dropdown Code</Label>
              <Tooltip text="Paste your HTML <select> element with <option> tags. You can also paste just the <option> tags.">
                <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
              </Tooltip>
            </div>
            <Textarea
              id="html-input"
              placeholder={`<select>\n<option value='option1'>Option 1</option>\n<option value='option2'>Option 2</option>\n</select>`}
              className="min-h-28"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Label htmlFor="output-format">Output Format</Label>
                <Tooltip text="Select the programming language and format for the output array or object">
                  <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
                </Tooltip>
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
                  { value: "wordpress", label: "WordPress Select Options" },
                ]}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Label htmlFor="array-type">Array Structure</Label>
                <Tooltip text="Simple: Just values. Numeric: Indexed entries with ID/position and values. Associative: Key-value pairs using option values as keys.">
                  <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
                </Tooltip>
              </div>
              <Select
                id="array-type"
                value={arrayType}
                onValueChange={setArrayType}
                options={[
                  { value: "associative", label: "Associative (Key-Value)" },
                  { value: "numeric", label: "Numeric (ID & Value)" },
                  { value: "simple", label: "Simple (Values Only)" },
                ]}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center">
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

DropdownToArrayInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  outputFormat: PropTypes.string.isRequired,
  setOutputFormat: PropTypes.func.isRequired,
  arrayType: PropTypes.string.isRequired,
  setArrayType: PropTypes.func.isRequired,
  useSlugKeys: PropTypes.bool.isRequired,
  setUseSlugKeys: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default DropdownToArrayInput;
