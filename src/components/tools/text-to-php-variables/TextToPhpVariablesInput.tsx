"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ITextToPhpVariablesInputProps {
  input: string;
  setInput: (value: string) => void;
  variableCase: string;
  setVariableCase: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  error?: string;
}

/**
 * Input component for the Text to PHP Variables tool.
 *
 * @component
 * @param {TextToPhpVariablesInputProps} props - The props for the component.
 * @returns {JSX.Element} The rendered input component.
 */
const TextToPhpVariablesInput: React.FC<ITextToPhpVariablesInputProps> = ({
  input,
  setInput,
  variableCase,
  setVariableCase,
  onSubmit,
  onClear,
  onReset,
  error,
}: ITextToPhpVariablesInputProps): React.JSX.Element => {
  /**
   * Handles form submission.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Input</CardTitle>
        <CardDescription>Paste multiline text to generate PHP variables</CardDescription>
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
            id="variable-case"
            value={variableCase}
            onValueChange={setVariableCase}
            options={[
              { value: "camelCase", label: "Camel Case" },
              { value: "snake_case", label: "Snake Case" },
              { value: "PascalCase", label: "Pascal Case" },
            ]}
          />

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

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
};

export default TextToPhpVariablesInput;
