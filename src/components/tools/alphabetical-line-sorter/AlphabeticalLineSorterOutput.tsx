import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

interface AlphabeticalLineSorterOutputProps {
  output: string;
}

/**
 * Output component for the Alphabetical Line Sorter tool.
 * Displays the sorted text in a readonly textarea with a copy button.
 *
 * @component
 * @param {AlphabeticalLineSorterOutputProps} props - Component props
 * @returns {JSX.Element} The rendered output display
 */
const AlphabeticalLineSorterOutput: React.FC<AlphabeticalLineSorterOutputProps> = ({
  output,
}: AlphabeticalLineSorterOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>The text after sorting lines alphabetically.</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} className="min-h-52" readOnly data-output />
      </CardContent>
    </Card>
  );
};

export default AlphabeticalLineSorterOutput;
