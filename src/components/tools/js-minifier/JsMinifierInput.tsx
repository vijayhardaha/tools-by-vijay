"use client";

import PropTypes from "prop-types";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component for JavaScript minifier input and options
 *
 * @param {Object} props - Component props
 * @param {string} props.input - The JavaScript input to be minified
 * @param {Function} props.setInput - Function to update input state
 * @param {Object} props.options - Minification options
 * @param {Function} props.updateOption - Function to update an option
 * @param {Function} props.onSubmit - Function called when minify button is clicked
 * @param {Function} props.onClear - Function to clear the input
 * @param {Function} props.onReset - Function to reset all options to defaults
 * @param {boolean} props.isLoading - Whether minification is in progress
 * @param {string} props.error - Error message to display
 * @returns {JSX.Element} The JsMinifierInput component
 */
const JsMinifierInput = ({
  input = "",
  setInput,
  options,
  updateOption,
  onSubmit,
  onClear,
  onReset,
  isLoading,
  error,
}) => {
  /**
   * Handles form submission and triggers JavaScript minification
   *
   * @param {FormEvent} e - The form event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>JavaScript Input</CardTitle>
        <CardDescription>
          Paste your JavaScript code and customize minification options
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="js-input"
            placeholder="Paste JavaScript code here..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Minification Options</h3>

            <div className="flex flex-wrap gap-4">
              <Checkbox
                id="mangle"
                checked={options.mangle}
                onCheckedChange={(checked) => updateOption("mangle", checked)}
              >
                Mangle variable names
              </Checkbox>

              <Checkbox
                id="removeComments"
                checked={options.removeComments}
                onCheckedChange={(checked) => updateOption("removeComments", checked)}
              >
                Remove comments
              </Checkbox>

              <Checkbox
                id="removeConsole"
                checked={options.removeConsole}
                onCheckedChange={(checked) => updateOption("removeConsole", checked)}
              >
                Remove console statements
              </Checkbox>

              <Checkbox
                id="removeDebugger"
                checked={options.removeDebugger}
                onCheckedChange={(checked) => updateOption("removeDebugger", checked)}
              >
                Remove debugger statements
              </Checkbox>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input || isLoading}>
              {isLoading ? "Minifying..." : "Minify"}
            </Button>

            <Button type="button" variant="outline" onClick={onClear} disabled={isLoading}>
              Clear
            </Button>

            <Button type="reset" variant="destructive" onClick={onReset} disabled={isLoading}>
              Reset
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
};

JsMinifierInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default JsMinifierInput;
