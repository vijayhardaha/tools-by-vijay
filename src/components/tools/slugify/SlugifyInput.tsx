"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/classNameUtils";

/**
 * Props for the SlugifyInput component.
 */
interface ISlugifyInputProps {
  input: string;
  setInput: (value: string) => void;
  useUnderscore: boolean;
  setUseUnderscore: (value: boolean) => void;
  removeNumbers: boolean;
  setRemoveNumbers: (value: boolean) => void;
  useLowercase: boolean;
  setUseLowercase: (value: boolean) => void;
  useLitinize: boolean;
  setUseLitinize: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * A React component for generating slugs from input strings with various options.
 *
 * @param {ISlugifyInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered SlugifyInput component.
 */
const SlugifyInput: React.FC<ISlugifyInputProps> = ({
  input = "",
  setInput,
  useUnderscore = false,
  setUseUnderscore,
  removeNumbers = false,
  setRemoveNumbers,
  useLowercase = true,
  setUseLowercase,
  useLitinize = true,
  setUseLitinize,
  onSubmit,
  onClear,
  onReset,
}: ISlugifyInputProps): React.JSX.Element => {
  /**
   * Handles form submission and triggers slug generation.
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
        <CardTitle>Input String</CardTitle>
        <CardDescription>(Article title, tutorial title or any web page title)</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            id="text-input"
            type="text"
            placeholder="Enter text to slugify"
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
            <Checkbox id="useLowercase" checked={useLowercase} onCheckedChange={setUseLowercase}>
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
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Generate
            </Button>

            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>

            <Button type="reset" variant="destructive" onClick={onReset}>
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SlugifyInput;
