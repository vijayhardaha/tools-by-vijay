"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for minification options.
 * @property {number} level - The optimization level for minification.
 * @property {boolean} compress - Whether to enable compression.
 * @property {object} format - Formatting options for spaces.
 * @property {object} format.spaces - Space formatting options.
 * @property {boolean} format.spaces.aroundSelectorRelation - Space around selector relations.
 * @property {boolean} format.spaces.beforeBlockBegins - Space before blocks.
 * @property {boolean} format.spaces.beforeValue - Space before values.
 */
interface MinificationOptions {
  level: number;
  compress: boolean;
  format: {
    spaces: {
      aroundSelectorRelation: boolean;
      beforeBlockBegins: boolean;
      beforeValue: boolean;
    };
  };
}

/**
 * Props for the CssMinifierInput component.
 * @property {string} input - The CSS input string.
 * @property {(value: string) => void} setInput - Function to update the CSS input.
 * @property {MinificationOptions} options - The minification options.
 * @property {(key: string, value: any) => void} updateOption - Function to update a minification option.
 * @property {(key: string, value: boolean) => void} updateSpacesOption - Function to update a space formatting option.
 * @property {() => void} onSubmit - Function to handle form submission.
 * @property {() => void} onClear - Function to clear the input.
 * @property {() => void} onReset - Function to reset the form to default values.
 * @property {boolean} isLoading - Whether the form is in a loading state.
 * @property {string} [error] - Optional error message to display.
 */
interface CssMinifierInputProps {
  input: string;
  setInput: (value: string) => void;
  options: MinificationOptions;
  updateOption: (key: string, value: any) => void;
  updateSpacesOption: (key: string, value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  isLoading: boolean;
  error?: string;
}

/**
 * A component for accepting CSS input and configuring minification options.
 * It includes a form with input fields, checkboxes, and buttons for customization and actions.
 *
 * @param {CssMinifierInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered CssMinifierInput component.
 */
const CssMinifierInput: React.FC<CssMinifierInputProps> = ({
  input,
  setInput,
  options,
  updateOption,
  updateSpacesOption,
  onSubmit,
  onClear,
  onReset,
  isLoading,
  error,
}: CssMinifierInputProps): React.JSX.Element => {
  /**
   * Handles the form submission event.
   * Prevents the default form submission and triggers the onSubmit callback.
   *
   * @param {React.FormEvent} e - The form event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>CSS Input</CardTitle>
        <CardDescription>Paste your CSS code and customize minification options</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            placeholder="Paste CSS code here..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-base font-semibold">Optimization Level</h3>
              <div className="flex flex-col gap-4">
                <Select
                  value={options.level.toString()}
                  onValueChange={(value) => updateOption("level", parseInt(value, 10))}
                  options={[
                    {
                      value: "0",
                      label: "Level 0 - Basic compression",
                    },
                    {
                      value: "1",
                      label: "Level 1 - Standard compression (Default)",
                    },
                    {
                      value: "2",
                      label: "Level 2 - Advanced compression",
                    },
                  ]}
                  className="w-full"
                />

                <Checkbox
                  id="compress"
                  checked={options.compress}
                  onCheckedChange={(checked) => updateOption("compress", checked)}
                >
                  Enable compression
                </Checkbox>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold">Formatting Options</h3>

              <div className="flex flex-col gap-2">
                <Checkbox
                  id="beforeBlockBegins"
                  checked={options.format.spaces.beforeBlockBegins}
                  onCheckedChange={(checked) => updateSpacesOption("beforeBlockBegins", checked)}
                >
                  Space before blocks
                </Checkbox>

                <Checkbox
                  id="beforeValue"
                  checked={options.format.spaces.beforeValue}
                  onCheckedChange={(checked) => updateSpacesOption("beforeValue", checked)}
                >
                  Space before values
                </Checkbox>

                <Checkbox
                  id="aroundSelectorRelation"
                  checked={options.format.spaces.aroundSelectorRelation}
                  onCheckedChange={(checked) =>
                    updateSpacesOption("aroundSelectorRelation", checked)
                  }
                >
                  Space around selector relations
                </Checkbox>
              </div>
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

export default CssMinifierInput;
