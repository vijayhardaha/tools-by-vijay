"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/**
 * Interface for the CountryNameGeneratorInput component props.
 */
interface CountryNameGeneratorInputProps {
  count: number;
  setCount: (value: number) => void;
  onGenerate: () => void;
  onClear: () => void;
  error?: string;
}

/**
 * A component for accepting input to generate country names.
 *
 * @param {CountryNameGeneratorInputProps}props - The props for the CountryNameGeneratorInput component.
 * @returns {React.JSX.Element} The CountryNameGeneratorInput component.
 */
const CountryNameGeneratorInput: React.FC<CountryNameGeneratorInputProps> = ({
  count,
  setCount,
  onGenerate,
  onClear,
  error,
}: CountryNameGeneratorInputProps): React.JSX.Element => {
  /**
   * Handles the form submission event.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Country Name Generator</CardTitle>
        <CardDescription>Generate random country names</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            id="count-input"
            type="number"
            placeholder="Enter number of countries"
            value={count}
            min={1}
            step={1}
            max={200}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default">
              Generate
            </Button>

            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
};

export default CountryNameGeneratorInput;
