import React from "react";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

interface DuplicateLineRemovalOutputProps {
  output: string;
}

/**
 * Output component for the Duplicate Line Removal tool.
 * Displays the processed text in a readonly textarea with a copy button.
 *
 * @component
 * @param {DuplicateLineRemovalOutputProps} props - Component props
 * @returns {JSX.Element} The rendered output display
 */
const DuplicateLineRemovalOutput: React.FC<DuplicateLineRemovalOutputProps> = ({
  output,
}: DuplicateLineRemovalOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>
              The text after removing duplicate lines and applying sorting options.
            </CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} rows={10} readOnly data-output />
      </CardContent>
    </Card>
  );
};

export default DuplicateLineRemovalOutput;
