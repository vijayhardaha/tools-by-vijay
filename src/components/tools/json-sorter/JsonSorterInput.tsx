"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpTip } from "@/components/ui/helptip";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface IJsonSorterInputProps {
  input: string;
  setInput: (value: string) => void;
  spareArrays: boolean;
  setSpareArrays: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  error?: string;
}

/**
 * Component for inputting JSON and configuring sorting options.
 *
 * @param {IJsonSorterInputProps} props - Component props.
 * @returns {React.JSX.Element} The rendered form with sorting options.
 */
const JsonSorterInput: React.FC<IJsonSorterInputProps> = ({
  input,
  setInput,
  spareArrays,
  setSpareArrays,
  onSubmit,
  onClear,
  onReset,
  error,
}: IJsonSorterInputProps): React.JSX.Element => {
  /**
   * Handles form submission by preventing default behavior and triggering sorting.
   *
   * @param {FormEvent} e - Form event object.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>JSON Input</CardTitle>
        <CardDescription>Paste your JSON and sort keys alphabetically</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="json-input">JSON Content</Label>
              <HelpTip text="Enter or paste valid JSON that you want to sort alphabetically by keys." />
            </div>

            <Textarea
              id="json-input"
              placeholder={`{\n\t"zebra": 1,\n\t"apple": 2,\n\t"banana": 3\n}`}
              rows={10}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="spare-arrays" checked={spareArrays} onCheckedChange={setSpareArrays}>
              Spare plain arrays
            </Checkbox>
            <HelpTip text="Preserve the original order of simple arrays (don't sort array elements)" />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
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

export default JsonSorterInput;
