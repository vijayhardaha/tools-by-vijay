"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpTip } from "@/components/ui/helptip";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the DropdownToArrayInput component.
 */
interface IDropdownToArrayInputProps {
  input: string;
  setInput: (value: string) => void;
  outputFormat: string;
  setOutputFormat: (value: string) => void;
  arrayType: string;
  setArrayType: (value: string) => void;
  useSlugKeys: boolean;
  setUseSlugKeys: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  error?: string;
}

/**
 * DropdownToArrayInput component.
 *
 * A form component that allows users to paste HTML dropdown content and convert it into various array formats.
 *
 * @param {IDropdownToArrayInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered component.
 */
const DropdownToArrayInput: React.FC<IDropdownToArrayInputProps> = ({
  input,
  setInput,
  outputFormat,
  setOutputFormat,
  arrayType,
  setArrayType,
  useSlugKeys,
  setUseSlugKeys,
  onSubmit,
  onClear,
  onReset,
  error,
}: IDropdownToArrayInputProps): React.JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dropdown HTML</CardTitle>
        <CardDescription>
          Paste HTML select/dropdown content and convert to various array formats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="html-input">HTML Select/Dropdown Code</Label>
              <HelpTip text="Paste your HTML <select> element with <option> tags. You can also paste just the <option> tags." />
            </div>
            <Textarea
              id="html-input"
              placeholder={`<select>\n<option value='option1'>Option 1</option>\n<option value='option2'>Option 2</option>\n</select>`}
              className="min-h-28"
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
                  { value: "wordpress", label: "WordPress Select Options" },
                ]}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="array-type">Array Structure</Label>
                <HelpTip text="Simple: Just values. Numeric: Indexed entries with ID/position and values. Associative: Key-value pairs using option values as keys." />
              </div>
              <Select
                id="array-type"
                value={arrayType}
                onValueChange={setArrayType}
                options={[
                  { value: "associative", label: "Associative (Key-Value)" },
                  { value: "numeric", label: "Numeric (ID & Value)" },
                  { value: "simple", label: "Simple (Values Only)" },
                ]}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center">
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

export default DropdownToArrayInput;
