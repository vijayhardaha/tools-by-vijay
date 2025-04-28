import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

interface JsonSorterOutputProps {
  output: string;
}

/**
 * Displays the sorted JSON output with copy functionality.
 *
 * @param {JsonSorterOutputProps} props - Component props.
 * @returns {JSX.Element} The rendered card with output display and copy functionality.
 */
const JsonSorterOutput: React.FC<JsonSorterOutputProps> = ({
  output,
}: JsonSorterOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>The alphabetically sorted JSON output</CardDescription>
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

export default JsonSorterOutput;
