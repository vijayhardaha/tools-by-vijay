"use client";

import PropTypes from "prop-types";
import { FiInfo } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
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
 * @param {string} props.htmlInput - Current HTML input
 * @param {Function} props.setHtmlInput - Function to update HTML input
 * @param {string} props.outputFormat - Selected output format
 * @param {Function} props.setOutputFormat - Function to update output format
 * @param {string} props.arrayType - Selected array structure type
 * @param {Function} props.setArrayType - Function to update array structure type
 * @param {Function} props.onConvert - Function to convert HTML to array
 * @param {Function} props.onReset - Function to reset all settings to defaults
 * @returns {JSX.Element} The rendered form with conversion options
 */
const DropdownToArrayInput = ({
  htmlInput,
  setHtmlInput,
  outputFormat,
  setOutputFormat,
  arrayType,
  setArrayType,
  onConvert,
  onReset,
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
        <CardTitle>Dropdown to Array Converter</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Paste HTML select/dropdown content and convert to various array
          formats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <Label htmlFor="html-input" className="flex items-center">
              HTML Select/Dropdown Code
              <Tooltip
                text="Paste your HTML <select> element with <option> tags. You can also paste just the <option> tags."
                delayDuration={300}
              >
                <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
              </Tooltip>
            </Label>
            <Textarea
              id="html-input"
              placeholder="<select>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
</select>"
              className="h-40 font-mono"
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="output-format" className="flex items-center">
                Output Format
                <Tooltip
                  text="Select the programming language and format for the output"
                  delayDuration={300}
                >
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
                  { value: "wordpress", label: "WordPress Select Options" },
                ]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="array-type" className="flex items-center">
                Array Structure
                <Tooltip
                  text="Simple: Just the text values. Numeric: Arrays with [value, text]. Associative: Object with value as key and text as value."
                  delayDuration={300}
                  className="!w-72"
                >
                  <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
                </Tooltip>
              </Label>
              <Select
                id="array-type"
                value={arrayType}
                onValueChange={setArrayType}
                options={[
                  { value: "simple", label: "Simple Array (Text Only)" },
                  { value: "numeric", label: "Numeric Array (Value & Text)" },
                  { value: "associative", label: "Associative Array/Object" },
                ]}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" size="lg">
              Convert to Array
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="lg"
              onClick={onReset}
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

DropdownToArrayInput.propTypes = {
  htmlInput: PropTypes.string.isRequired,
  setHtmlInput: PropTypes.func.isRequired,
  outputFormat: PropTypes.string.isRequired,
  setOutputFormat: PropTypes.func.isRequired,
  arrayType: PropTypes.string.isRequired,
  setArrayType: PropTypes.func.isRequired,
  onConvert: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default DropdownToArrayInput;
