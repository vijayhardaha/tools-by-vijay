"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils/classNameUtils";

interface BulkSlugifyInputProps {
  input: string;
  useUnderscore: boolean;
  setInput: (value: string) => void;
  removeNumbers: boolean;
  useLowercase: boolean;
  useLitinize: boolean;
  setUseUnderscore: (value: boolean) => void;
  setRemoveNumbers: (value: boolean) => void;
  setUseLowercase: (value: boolean) => void;
  setUseLitinize: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  keepEmptyLines: boolean;
  setKeepEmptyLines: (value: boolean) => void;
}

/**
 * Component for user input and configuration options for the Bulk Slugify tool
 *
 * This component provides a form for users to input text strings to be slugified,
 * along with configuration options for the slugification process such as separator
 * type, case conversion, number removal, and character normalization.
 */
const BulkSlugifyInput: React.FC<BulkSlugifyInputProps> = ({
  input = "",
  useUnderscore = false,
  setInput,
  removeNumbers = false,
  useLowercase = true,
  useLitinize = true,
  setUseUnderscore,
  setRemoveNumbers,
  setUseLowercase,
  setUseLitinize,
  onSubmit,
  onClear,
  onReset,
  keepEmptyLines = false,
  setKeepEmptyLines,
}: BulkSlugifyInputProps): React.JSX.Element => {
  /**
   * Handles form submission to generate slugs
   *
   * @param {Object} e - Event object
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Strings</CardTitle>
        <CardDescription>(Article titles, tutorial titles or any web page titles)</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="text-input"
            placeholder="Enter multiple lines of text to slugify"
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-sm">
              Currently separating with:{" "}
              <span className="font-bold">{useUnderscore ? "Underscore (_)" : "Dash (-)"}</span>
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={!useUnderscore ? "default" : "outline"}
                onClick={() => setUseUnderscore(false)}
                disabled={!useUnderscore}
                className={cn("!opacity-100")}
              >
                <span className="text-xs">With dash (-)</span>
              </Button>
              <Button
                size="sm"
                variant={useUnderscore ? "default" : "outline"}
                onClick={() => setUseUnderscore(true)}
                disabled={useUnderscore}
                className={cn("!opacity-100")}
              >
                <span className="text-xs">With underscore (_)</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Checkbox id="use-lowercase" checked={useLowercase} onCheckedChange={setUseLowercase}>
              Convert to lowercase
            </Checkbox>

            <Checkbox
              id="remove-numbers"
              checked={removeNumbers}
              onCheckedChange={setRemoveNumbers}
            >
              Remove numbers
            </Checkbox>

            <Checkbox id="use-latinize" checked={useLitinize} onCheckedChange={setUseLitinize}>
              Use latinize
            </Checkbox>

            <Checkbox
              id="keep-empty-lines"
              checked={keepEmptyLines}
              onCheckedChange={setKeepEmptyLines}
            >
              Keep empty lines
            </Checkbox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Generate
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

export default BulkSlugifyInput;
