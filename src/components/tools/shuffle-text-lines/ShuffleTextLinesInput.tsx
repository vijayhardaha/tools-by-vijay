"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the Shuffle Text Lines input component props.
 */
interface IShuffleTextLinesInputProps {
  input: string;
  setInput: (value: string) => void;
  removeDuplicates: boolean;
  setRemoveDuplicates: (value: boolean) => void;
  removeEmptyLines: boolean;
  setRemoveEmptyLines: (value: boolean) => void;
  trimLines: boolean;
  setTrimLines: (value: boolean) => void;
  onSubmit: () => void;
  onReset: () => void;
  onClear: () => void;
}

/**
 * Input component for the Shuffle Text Lines tool.
 * Provides a form for text input and options to shuffle lines randomly.
 *
 * @component
 * @param {IShuffleTextLinesInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The input component for the Shuffle Text Lines tool.
 */
const ShuffleTextLinesInput: React.FC<IShuffleTextLinesInputProps> = ({
  input,
  setInput,
  removeDuplicates,
  setRemoveDuplicates,
  removeEmptyLines,
  setRemoveEmptyLines,
  trimLines,
  setTrimLines,
  onSubmit,
  onReset,
  onClear,
}: IShuffleTextLinesInputProps): React.JSX.Element => {
  /**
   * Handles form submission to shuffle lines.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shuffle Text Lines Input</CardTitle>
        <CardDescription>
          Enter your text and configure options to shuffle lines randomly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="text-input"
            placeholder="Enter text to shuffle..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <Checkbox
              id="remove-duplicates"
              checked={removeDuplicates}
              onCheckedChange={setRemoveDuplicates}
            >
              Remove Duplicate Lines
            </Checkbox>

            <Checkbox
              id="remove-empty-lines"
              checked={removeEmptyLines}
              onCheckedChange={setRemoveEmptyLines}
            >
              Remove Empty Lines
            </Checkbox>

            <Checkbox id="trim-lines" checked={trimLines} onCheckedChange={setTrimLines}>
              Trim Lines
            </Checkbox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default">
              Process
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

export default ShuffleTextLinesInput;
