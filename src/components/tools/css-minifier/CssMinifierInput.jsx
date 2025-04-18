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
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component for CSS minifier input and options
 *
 * @param {Object} props - Component props
 * @param {string} props.input - The CSS input to be minified
 * @param {Function} props.setInput - Function to update input state
 * @param {Object} props.options - Minification options
 * @param {Function} props.updateOption - Function to update a specific option
 * @param {Function} props.updateSpacesOption - Function to update a spaces option
 * @param {Function} props.onMinify - Function called when minify button is clicked
 * @param {Function} props.onClear - Function to clear the input
 * @param {Function} props.onReset - Function to reset all options to defaults
 * @param {boolean} props.isLoading - Whether minification is in progress
 * @returns {JSX.Element} The CssMinifierInput component
 */
const CssMinifierInput = ({
  input = "",
  setInput,
  options,
  updateOption,
  updateSpacesOption,
  onMinify,
  onClear,
  onReset,
  isLoading,
}) => {
  /**
   * Handles form submission and triggers CSS minification
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
        <CardTitle>CSS Input</CardTitle>
        <CardDescription>
          Paste your CSS code and customize minification options
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            placeholder="Paste CSS code here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-28 font-mono text-sm"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-base font-semibold">Optimization Level</h3>
              <div className="flex items-center space-x-2">
                <Select
                  value={options.level.toString()}
                  onValueChange={(value) =>
                    updateOption("level", parseInt(value, 10))
                  }
                  options={[
                    { value: "0", label: "Level 0 - Basic compression" },
                    {
                      value: "1",
                      label: "Level 1 - Standard compression (Default)",
                    },
                    { value: "2", label: "Level 2 - Advanced compression" },
                  ]}
                  className="w-full"
                />
              </div>

              <div className="flex items-center space-x-2 pt-4">
                <Checkbox
                  id="compress"
                  checked={options.compress}
                  onCheckedChange={(checked) =>
                    updateOption("compress", checked)
                  }
                />
                <Label htmlFor="compress">Enable compression</Label>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold">Formatting Options</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="beforeBlockBegins"
                  checked={options.format.spaces.beforeBlockBegins}
                  onCheckedChange={(checked) =>
                    updateSpacesOption("beforeBlockBegins", checked)
                  }
                />
                <Label htmlFor="beforeBlockBegins">Space before blocks</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="beforeValue"
                  checked={options.format.spaces.beforeValue}
                  onCheckedChange={(checked) =>
                    updateSpacesOption("beforeValue", checked)
                  }
                />
                <Label htmlFor="beforeValue">Space before values</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="aroundSelectorRelation"
                  checked={options.format.spaces.aroundSelectorRelation}
                  onCheckedChange={(checked) =>
                    updateSpacesOption("aroundSelectorRelation", checked)
                  }
                />
                <Label htmlFor="aroundSelectorRelation">
                  Space around selector relations
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

CssMinifierInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  updateSpacesOption: PropTypes.func.isRequired,
  onMinify: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CssMinifierInput;
