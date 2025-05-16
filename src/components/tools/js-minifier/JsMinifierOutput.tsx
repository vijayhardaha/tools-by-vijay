import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CompressionInfo } from "@/components/ui/compressionInfo";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

interface IJsMinifierOutputProps {
  output: string;
  input: string;
}

/**
 * Component that displays the minified JavaScript output and provides copy functionality.
 *
 * @param {IJsMinifierOutputProps} props - The component props.
 * @returns {JSX.Element} The JsMinifierOutput component.
 */
const JsMinifierOutput: React.FC<IJsMinifierOutputProps> = ({
  output,
  input,
}: IJsMinifierOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Minified Output</CardTitle>
            <CardDescription>
              <CompressionInfo input={input} output={output} />
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

export default JsMinifierOutput;
