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
import { Textarea } from "@/components/ui/textarea";
import { Tooltip } from "@/components/ui/tooltip";

/**
 * Component for inputting JSON and configuring sorting options.
 * Provides a form with controls for JSON input and sorting preferences.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.jsonInput - Current JSON input
 * @param {Function} props.setJsonInput - Function to update JSON input
 * @param {boolean} props.spareArrays - Whether to preserve arrays without sorting
 * @param {Function} props.setSpareArrays - Function to update spare arrays setting
 * @param {Function} props.onSort - Function to sort the JSON
 * @param {Function} props.onClear - Function to clear JSON input only
 * @param {Function} props.onReset - Function to reset all settings to defaults
 * @param {string} props.error - Error message to display, if any
 * @returns {JSX.Element} The rendered form with sorting options
 */
const JsonSorterInput = ({
  jsonInput,
  setJsonInput,
  spareArrays,
  setSpareArrays,
  onSort,
  onClear,
  onReset,
  error,
}) => {
  /**
   * Handles form submission by preventing default behavior and triggering sorting
   * @param {FormEvent} e - Form event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSort();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>JSON Input</CardTitle>
        <CardDescription>
          Paste your JSON and sort keys alphabetically
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="json-input" className="flex items-center">
              JSON Content
              <Tooltip text="Enter or paste valid JSON that you want to sort alphabetically by keys.">
                <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
              </Tooltip>
            </Label>
            <Textarea
              id="json-input"
              placeholder={`{\n  "zebra": 1,\n  "apple": 2,\n  "banana": 3\n}`}
              className="min-h-100 font-mono text-xs"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="spare-arrays"
                checked={spareArrays}
                onCheckedChange={setSpareArrays}
              />
              <Label
                htmlFor="spare-arrays"
                className="cursor-pointer text-sm leading-none font-medium"
              >
                Spare plain arrays
              </Label>
              <Tooltip text="Preserve the original order of simple arrays (don't sort array elements)">
                <FiInfo className="text-muted-foreground h-4 w-4 cursor-help" />
              </Tooltip>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!jsonInput}>
              Sort JSON
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

JsonSorterInput.propTypes = {
  jsonInput: PropTypes.string.isRequired,
  setJsonInput: PropTypes.func.isRequired,
  spareArrays: PropTypes.bool.isRequired,
  setSpareArrays: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default JsonSorterInput;
