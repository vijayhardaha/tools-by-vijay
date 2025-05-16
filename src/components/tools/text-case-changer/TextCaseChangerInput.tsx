"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the TextCaseChangerInput component.
 */
interface ITextCaseChangerInputProps {
  input: string;
  setInput: (value: string) => void;
  textCase: string;
  setTextCase: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  error?: string;
}

/**
 * A component for accepting text input and selecting a text case transformation.
 * @param props - The props for the TextCaseChangerInput component.
 * @returns The TextCaseChangerInput component.
 */
const TextCaseChangerInput: React.FC<ITextCaseChangerInputProps> = ({
  input,
  setInput,
  textCase,
  setTextCase,
  onSubmit,
  onClear,
  onReset,
  error,
}: ITextCaseChangerInputProps): React.JSX.Element => {
  /**
   * Handles the form submission event.
   * @param e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Input</CardTitle>
        <CardDescription>Paste multiline text to change its case</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="text-input"
            placeholder={`Item 1\nItem 2\nItem 3`}
            rows={5}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Select
            id="text-case"
            value={textCase}
            onValueChange={setTextCase}
            options={[
              { value: "Sentence case", label: "Sentence Case" },
              { value: "lower case", label: "Lower Case" },
              { value: "UPPER CASE", label: "UPPER CASE" },
              { value: "Capitalized Case", label: "Capitalized Case" },
              { value: "aLtErNaTiNg cAsE", label: "Alternating Case" },
              { value: "Title Case", label: "Title Case" },
              { value: "InVeRsE CaSe", label: "Inverse Case" },
            ]}
          />

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

export default TextCaseChangerInput;
