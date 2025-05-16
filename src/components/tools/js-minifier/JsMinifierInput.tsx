"use client";

import { IMinifyOptions } from "@/components/tools/js-minifier/JsMinifierTool";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the JavaScript Minifier input component props.
 */
interface IJsMinifierInputProps {
  input: string;
  setInput: (value: string) => void;
  options: IMinifyOptions;
  updateOption: (key: keyof IMinifyOptions, value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  isLoading: boolean;
  error?: string;
}

/**
 * Component for JavaScript minifier input and options.
 *
 * @param {IJsMinifierInputProps} props - Component props.
 * @returns {React.JSX.Element} The JsMinifierInput component.
 */
const JsMinifierInput: React.FC<IJsMinifierInputProps> = ({
  input,
  setInput,
  options,
  updateOption,
  onSubmit,
  onClear,
  onReset,
  isLoading,
  error,
}: IJsMinifierInputProps): React.JSX.Element => {
  /**
   * Handles form submission and triggers JavaScript minification.
   *
   * @param {FormEvent} e - The form event.
   */
  const handleSubmit = (e: React.FormEvent) => {
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

export default JsMinifierInput;
