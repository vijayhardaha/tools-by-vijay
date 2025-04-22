"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Input component for the Shuffle Text Lines tool.
 * Provides a form for text input and options to shuffle lines randomly.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.input - The input text to shuffle.
 * @param {Function} props.setInput - Function to update the input text state.
 * @param {boolean} props.removeDuplicates - Whether to remove duplicate lines.
 * @param {Function} props.setRemoveDuplicates - Function to toggle duplicate removal.
 * @param {boolean} props.removeEmptyLines - Whether to remove empty lines.
 * @param {Function} props.setRemoveEmptyLines - Function to toggle empty line removal.
 * @param {boolean} props.trimLines - Whether to trim lines.
 * @param {Function} props.setTrimLines - Function to toggle line trimming.
 * @param {Function} props.onSubmit - Function to handle form submission.
 * @param {Function} props.onReset - Function to reset the form.
 * @param {Function} props.onClear - Function to clear the input and output.
 * @returns {JSX.Element} The rendered input form.
 */
const ShuffleTextLinesInput = ({
  input,
  setInput,
  removeDuplicates,
  setRemoveDuplicates,
  removeEmptyLines,
  setRemoveEmptyLines,
  trimLines,
  setTrimLines,
  onSubmit,
  onReset,
  onClear,
}) => {
  /**
   * Handles form submission to shuffle lines.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shuffle Text Lines Input</CardTitle>
        <CardDescription>
          Enter your text and configure options to shuffle lines randomly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="text-input"
            placeholder="Enter text to shuffle..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <Checkbox
              id="remove-duplicates"
              checked={removeDuplicates}
              onCheckedChange={setRemoveDuplicates}
            >
              Remove Duplicate Lines
            </Checkbox>

            <Checkbox
              id="remove-empty-lines"
              checked={removeEmptyLines}
              onCheckedChange={setRemoveEmptyLines}
            >
              Remove Empty Lines
            </Checkbox>

            <Checkbox id="trim-lines" checked={trimLines} onCheckedChange={setTrimLines}>
              Trim Lines
            </Checkbox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default">
              Process
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

ShuffleTextLinesInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  removeDuplicates: PropTypes.bool.isRequired,
  setRemoveDuplicates: PropTypes.func.isRequired,
  removeEmptyLines: PropTypes.bool.isRequired,
  setRemoveEmptyLines: PropTypes.func.isRequired,
  trimLines: PropTypes.bool.isRequired,
  setTrimLines: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default ShuffleTextLinesInput;
