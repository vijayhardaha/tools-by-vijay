import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the UnminifyOutput component.
 * @property {string} output - The unminified code output.
 */
interface UnminifyOutputProps {
  output: string;
}

/**
 * A component that displays the unminified code output.
 *
 * @param {UnminifyOutputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered UnminifyOutput component.
 */
const UnminifyOutput: React.FC<UnminifyOutputProps> = ({
  output,
}: UnminifyOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Unminified Output</CardTitle>
          <CardDescription>Below is the unminified version of your code.</CardDescription>
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

export default UnminifyOutput;
