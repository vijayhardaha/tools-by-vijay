"use client";

import PropTypes from "prop-types";

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

/**
 * Component for JavaScript minifier input and options
 *
 * @param {Object} props - Component props
 * @param {string} props.input - The JavaScript input to be minified
 * @param {Function} props.setInput - Function to update input state
 * @param {Object} props.options - Minification options
 * @param {Function} props.updateOption - Function to update an option
 * @param {Function} props.onMinify - Function called when minify button is clicked
 * @param {Function} props.onClear - Function to clear the input
 * @param {Function} props.onReset - Function to reset all options to defaults
 * @param {boolean} props.isLoading - Whether minification is in progress
 * @returns {JSX.Element} The JsMinifierInput component
 */
const JsMinifierInput = ({
  input = "",
  setInput,
  options,
  updateOption,
  onMinify,
  onClear,
  onReset,
  isLoading,
}) => {
  /**
   * Handles form submission and triggers JavaScript minification
   *
   * @param {FormEvent} e - The form event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onMinify();
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
            placeholder="Paste JavaScript code here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-28 font-mono text-sm"
          />

          <div className="space-y-4">
            <h3 className="text-base font-semibold">Minification Options</h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="mangle"
                  checked={options.mangle}
                  onCheckedChange={(checked) => updateOption("mangle", checked)}
                />
                <Label htmlFor="mangle">Mangle variable names</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeComments"
                  checked={options.removeComments}
                  onCheckedChange={(checked) =>
                    updateOption("removeComments", checked)
                  }
                />
                <Label htmlFor="removeComments">Remove comments</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeConsole"
                  checked={options.removeConsole}
                  onCheckedChange={(checked) =>
                    updateOption("removeConsole", checked)
                  }
                />
                <Label htmlFor="removeConsole">Remove console statements</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeDebugger"
                  checked={options.removeDebugger}
                  onCheckedChange={(checked) =>
                    updateOption("removeDebugger", checked)
                  }
                />
                <Label htmlFor="removeDebugger">
                  Remove debugger statements
                </Label>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              type="submit"
              variant="default"
              disabled={!input || isLoading}
            >
              {isLoading ? "Minifying..." : "Minify"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClear}
              disabled={isLoading}
            >
              Clear
            </Button>
            <Button
              type="reset"
              variant="destructive"
              onClick={onReset}
              disabled={isLoading}
            >
              Reset
            </Button>
          </div>
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
  onMinify: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default JsMinifierInput;
