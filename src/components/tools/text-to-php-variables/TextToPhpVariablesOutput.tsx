import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

interface ITextToPhpVariablesOutputProps {
  output: string;
}

/**
 * Output component for the Text to PHP Variables tool.
 *
 * @component
 * @param {ITextToPhpVariablesOutputProps} props - The props for the component.
 * @returns {JSX.Element} The rendered output component.
 */
const TextToPhpVariablesOutput: React.FC<ITextToPhpVariablesOutputProps> = ({
  output,
}: ITextToPhpVariablesOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Generated PHP Variables</CardTitle>
            <CardDescription>Copy the generated PHP variables for use in your code</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} rows={5} readOnly data-output />
      </CardContent>
    </Card>
  );
};

export default TextToPhpVariablesOutput;
