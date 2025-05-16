"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IPxToRemInputProps {
  pxValue: string;
  setPxValue: (value: string) => void;
  baseFontSize: number;
  setBaseFontSize: (value: number) => void;
}

/**
 * Component for inputting px value and base font size.
 *
 * @param {IPxToRemInputProps} props - Component props.
 * @returns {React.JSX.Element} The rendered input form.
 */
const PxToRemInput: React.FC<IPxToRemInputProps> = ({
  pxValue,
  setPxValue,
  baseFontSize,
  setBaseFontSize,
}: IPxToRemInputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Px to Rem Input</CardTitle>
        <CardDescription>Enter pixel value and base font size</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="px-value">Pixel Value (px)</Label>
            <Input
              id="px-value"
              type="number"
              value={pxValue}
              onChange={(e) => setPxValue(e.target.value)}
              placeholder="Enter px value"
              aria-label="Pixel value input"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="base-font-size">Base Font Size (px)</Label>
            <Input
              id="base-font-size"
              type="number"
              value={baseFontSize}
              onChange={(e) => setBaseFontSize(parseFloat(e.target.value) || 16)}
              placeholder="16"
              aria-label="Base font size input"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PxToRemInput;
