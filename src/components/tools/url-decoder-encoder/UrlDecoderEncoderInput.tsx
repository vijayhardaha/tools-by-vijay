"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { RadioBox } from "@/components/ui/radiobox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the UrlDecoderEncoderInput component props.
 */
interface IUrlDecoderEncoderInputProps {
  input: string;
  setInput: (value: string) => void;
  isEncoding: boolean;
  setIsEncoding: (value: boolean) => void;
  onProcess: () => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * A component for accepting user input for URL encoding or decoding.
 * It includes a textarea for input, radio buttons to select the mode, and action buttons.
 *
 * @param {IUrlDecoderEncoderInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered input component.
 */
const UrlDecoderEncoderInput: React.FC<IUrlDecoderEncoderInputProps> = ({
  input,
  setInput,
  isEncoding,
  setIsEncoding,
  onProcess,
  onClear,
  onReset,
}: IUrlDecoderEncoderInputProps): React.JSX.Element => {
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
        <CardDescription>Enter the URL to encode or decode</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="url-input"
            placeholder="Text to encode or decode"
            rows={5}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex gap-4">
            <RadioBox
              id="encode-radio"
              name="url-action"
              checked={isEncoding}
              onCheckedChange={(checked) => setIsEncoding(checked)}
            >
              Encode
            </RadioBox>
            <RadioBox
              id="decode-radio"
              name="url-action"
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

export default UrlDecoderEncoderInput;
