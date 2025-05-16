"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface IBarcodeGeneratorInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

/**
 * BarcodeGeneratorInput is a React functional component that provides
 * input fields and controls for generating a barcode.
 *
 * @param {IBarcodeGeneratorInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered barcode input component.
 */
const BarcodeGeneratorInput: React.FC<IBarcodeGeneratorInputProps> = ({
  input,
  setInput,
  onSubmit,
  onClear,
}: IBarcodeGeneratorInputProps): React.JSX.Element => {
  /**
   * Handles the form submission to generate the barcode.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Data</CardTitle>
        <CardDescription>Enter the text to generate a barcode</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            id="barcode-input"
            type="text"
            placeholder="Enter text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Generate
            </Button>

            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BarcodeGeneratorInput;
