import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the UrlDecoderEncoderOutput component.
 * @property {string} output - The processed URL string to display.
 */
interface IUrlDecoderEncoderOutputProps {
  output: string;
}

/**
 * A component that displays the result of a URL encoding or decoding operation.
 * It includes a textarea to show the output and a button to copy the output to the clipboard.
 *
 * @param {IUrlDecoderEncoderOutputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered component.
 */
const UrlDecoderEncoderOutput: React.FC<IUrlDecoderEncoderOutputProps> = ({
  output,
}: IUrlDecoderEncoderOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>The result of your URL encoding or decoding operation</CardDescription>
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

export default UrlDecoderEncoderOutput;
