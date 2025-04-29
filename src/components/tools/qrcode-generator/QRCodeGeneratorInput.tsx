"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface QRCodeGeneratorInputProps {
  input: string;
  setInput: (value: string) => void;
  size: number;
  setSize: (value: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * QRCodeGeneratorInput is a React functional component that provides
 * input fields and controls for generating a QR code.
 *
 * @param {QRCodeGeneratorInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered QR code input component.
 */
const QRCodeGeneratorInput: React.FC<QRCodeGeneratorInputProps> = ({
  input,
  setInput,
  size,
  setSize,
  onSubmit,
  onClear,
  onReset,
}): React.JSX.Element => {
  /**
   * Handles the form submission to generate the QR code.
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
        <CardDescription>Enter the text or URL to generate a QR code</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            id="qr-input"
            type="text"
            placeholder="Enter text or URL"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <Label htmlFor="qr-size">QR Code Size: {size}px</Label>
            <Slider
              id="qr-size"
              value={size}
              min={128}
              max={512}
              step={16}
              onValueChange={(value) => setSize(value)}
            />
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

export default QRCodeGeneratorInput;
