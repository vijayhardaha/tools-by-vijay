"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { RadioBox } from "@/components/ui/radiobox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the Base64EncodeDecodeInput component.
 */
interface Base64EncodeDecodeInputProps {
  input: string;
  setInput: (value: string) => void;
  isEncoding: boolean;
  setIsEncoding: (value: boolean) => void;
  onProcess: () => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * A component for accepting user input for Base64 encoding or decoding.
 * It includes a textarea for input, radio buttons to select the mode, and action buttons.
 *
 * @param {Base64EncodeDecodeInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered input component.
 */
const Base64EncodeDecodeInput: React.FC<Base64EncodeDecodeInputProps> = ({
  input,
  setInput,
  isEncoding,
  setIsEncoding,
  onProcess,
  onClear,
  onReset,
}: Base64EncodeDecodeInputProps): React.JSX.Element => {
  /**
   * Handles the form submission to process the input.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProcess();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Text</CardTitle>
        <CardDescription>Enter the text to base64 encode or decode</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="base64-input"
            placeholder="Text to base64 encode or decode"
            rows={5}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex gap-4">
            <RadioBox
              id="encode-radio"
              name="base64-action"
              checked={isEncoding}
              onCheckedChange={(checked) => setIsEncoding(checked)}
            >
              Encode
            </RadioBox>
            <RadioBox
              id="decode-radio"
              name="base64-action"
              checked={!isEncoding}
              onCheckedChange={(checked) => setIsEncoding(!checked)}
            >
              Decode
            </RadioBox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Process
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

export default Base64EncodeDecodeInput;
