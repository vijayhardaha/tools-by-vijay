"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Output component for the Replace Quotes tool.
 * Displays the processed text after replacing quotes with copy functionality.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.output - The processed text to display
 * @returns {JSX.Element} The rendered card with output display and copy functionality
 */
interface ReplaceQuotesOutputProps {
  output: string;
}

const ReplaceQuotesOutput: React.FC<ReplaceQuotesOutputProps> = ({
  output,
}: ReplaceQuotesOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>The text after replacing quotes</CardDescription>
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

export default ReplaceQuotesOutput;
