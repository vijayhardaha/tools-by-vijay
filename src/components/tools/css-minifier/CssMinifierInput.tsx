"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the minification options.
 */
interface IMinificationOptions {
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
 * Interface for the CssMinifierInput component props.
 */
interface ICssMinifierInputProps {
  input: string;
  setInput: (value: string) => void;
  options: IMinificationOptions;
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
 * @param {ICssMinifierInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered CssMinifierInput component.
 */
const CssMinifierInput: React.FC<ICssMinifierInputProps> = ({
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
}: ICssMinifierInputProps): React.JSX.Element => {
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
