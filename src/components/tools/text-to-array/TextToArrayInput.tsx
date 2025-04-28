"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpTip } from "@/components/ui/helptip";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface TextToArrayInputProps {
  input: string;
  setInput: (value: string) => void;
  outputFormat: string;
  setOutputFormat: (value: string) => void;
  arrayType: string;
  setArrayType: (value: string) => void;
  trimLines: boolean;
  setTrimLines: (value: boolean) => void;
  removeEmptyLines: boolean;
  setRemoveEmptyLines: (value: boolean) => void;
  useSlugKeys: boolean;
  setUseSlugKeys: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  error?: string;
}

/**
 * Component for inputting multiline text and configuring conversion options.
 * Provides a form with controls for text input, output format, and array structure.
 *
 * @component
 * @param {Object} props - Component props
 * @returns {JSX.Element} The rendered form with conversion options
 */
const TextToArrayInput: React.FC<TextToArrayInputProps> = ({
  input,
  setInput,
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
  onSubmit,
  onClear,
  onReset,
  error,
}: TextToArrayInputProps): React.JSX.Element => {
  /**
   * Handles form submission by preventing default behavior and triggering conversion
   * @param {React.FormEvent} e - Form event object
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Input</CardTitle>
        <CardDescription>Paste multiline text and convert to various array formats</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="text-input">Multiline Text</Label>
              <HelpTip text="Enter or paste text with one item per line. Each line will become an element in the resulting array." />
            </div>
            <Textarea
              id="text-input"
              placeholder={`Item 1\nItem 2\nItem 3`}
              rows={5}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="output-format">Output Format</Label>
                <HelpTip text="Select the programming language and format for the output array or object" />
              </div>

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
              <div className="flex items-center gap-2">
                <Label htmlFor="array-type">Array Structure</Label>
                <HelpTip text="Simple: Just values. Numeric: Indexed entries with ID/position and values. Associative: Key-value pairs." />
              </div>
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

          <div className="flex flex-wrap gap-4">
            <Checkbox id="trim-lines" checked={trimLines} onCheckedChange={setTrimLines}>
              Trim whitespace from each line
            </Checkbox>

            <Checkbox
              id="remove-empty-lines"
              checked={removeEmptyLines}
              onCheckedChange={setRemoveEmptyLines}
            >
              Remove empty lines
            </Checkbox>

            <Checkbox id="use-slug-keys" checked={useSlugKeys} onCheckedChange={setUseSlugKeys}>
              Use slugified keys
            </Checkbox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
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

export default TextToArrayInput;
