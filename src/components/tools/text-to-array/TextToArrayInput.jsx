"use client";

import PropTypes from "prop-types";
import { FiInfo } from "react-icons/fi";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip } from "@/components/ui/tooltip";

/**
 * Component for inputting multiline text and configuring conversion options.
 * Provides a form with controls for text input, output format, and array structure.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.textInput - Current text input
 * @param {Function} props.setTextInput - Function to update text input
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
 * @param {Function} props.onConvert - Function to convert text to array
 * @param {Function} props.onClear - Function to clear text input only
 * @param {Function} props.onReset - Function to reset all settings to defaults
 * @returns {JSX.Element} The rendered form with conversion options
 */
const TextToArrayInput = ({
  textInput,
  setTextInput,
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
  onConvert,
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
    onConvert();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Input</CardTitle>
        <CardDescription>
          Paste multiline text and convert to various array formats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="text-input" className="flex items-center">
              Multiline Text
              <Tooltip text="Enter or paste text with one item per line. Each line will become an element in the resulting array.">
                <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
              </Tooltip>
            </Label>
            <Textarea
              id="text-input"
              placeholder={`Item 1\nItem 2\nItem 3`}
              className="min-h-28 font-mono text-xs"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="output-format" className="flex items-center">
                Output Format
                <Tooltip text="Select the programming language and format for the output array or object">
                  <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
                </Tooltip>
              </Label>
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
              <Label htmlFor="array-type" className="flex items-center">
                Array Structure
                <Tooltip text="Simple: Just values. Numeric: Indexed entries with ID/position and values. Associative: Key-value pairs.">
                  <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
                </Tooltip>
              </Label>
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

          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="trim-lines"
                checked={trimLines}
                onCheckedChange={setTrimLines}
              />
              <Label
                htmlFor="trim-lines"
                className="cursor-pointer text-sm leading-none font-medium"
              >
                Trim whitespace from each line
              </Label>
              <Tooltip text="Remove leading and trailing whitespace from each line">
                <FiInfo className="text-muted-foreground h-4 w-4 cursor-help" />
              </Tooltip>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remove-empty-lines"
                checked={removeEmptyLines}
                onCheckedChange={setRemoveEmptyLines}
              />
              <Label
                htmlFor="remove-empty-lines"
                className="cursor-pointer text-sm leading-none font-medium"
              >
                Remove empty lines
              </Label>{" "}
              <Tooltip text="Skip blank lines in the input text">
                <FiInfo className="text-muted-foreground h-4 w-4 cursor-help" />
              </Tooltip>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="use-slug-keys"
                checked={useSlugKeys}
                onCheckedChange={setUseSlugKeys}
              />
              <Label
                htmlFor="use-slug-keys"
                className="cursor-pointer text-sm leading-none font-medium"
              >
                Use slugified keys
              </Label>
              <Tooltip text="Generate slugified keys from the text instead of using generic item_N keys">
                <FiInfo className="text-muted-foreground h-4 w-4 cursor-help" />
              </Tooltip>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!textInput}>
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
  textInput: PropTypes.string.isRequired,
  setTextInput: PropTypes.func.isRequired,
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
  onConvert: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextToArrayInput;
