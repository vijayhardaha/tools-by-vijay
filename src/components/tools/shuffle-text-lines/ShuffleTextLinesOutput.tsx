import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

interface ShuffleTextLinesOutputProps {
  output: string;
}

/**
 * Displays the shuffled text output in a card with a copy button.
 */
const ShuffleTextLinesOutput: React.FC<ShuffleTextLinesOutputProps> = ({
  output,
}: ShuffleTextLinesOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>The text after shuffling lines randomly.</CardDescription>
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

export default ShuffleTextLinesOutput;
