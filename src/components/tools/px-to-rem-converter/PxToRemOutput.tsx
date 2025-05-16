import React from "react";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Input } from "@/components/ui/input";

interface IPxToRemOutputProps {
  remValue: string;
}

/**
 * Displays the calculated rem value.
 *
 * @param {IPxToRemOutputProps} props - Component props.
 * @returns {React.JSX.Element} The rendered card with the rem value.
 */
const PxToRemOutput: React.FC<IPxToRemOutputProps> = ({
  remValue,
}: IPxToRemOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rem Value</CardTitle>
        <CardDescription>Converted rem value based on input</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            type="text"
            value={remValue ? `${remValue}rem` : ""}
            readOnly
            placeholder="Enter valid values to see the result"
            data-output
          />
          <CopyButton text={remValue ? `${remValue}rem` : ""} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PxToRemOutput;
