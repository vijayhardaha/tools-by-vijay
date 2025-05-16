import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the Base64EncodeDecodeOutput component.
 * @property {string} output - The processed Base64 string to display.
 */
interface IBase64EncodeDecodeOutputProps {
  output: string;
}

/**
 * A component that displays the result of a Base64 encoding or decoding operation.
 * It includes a textarea to show the output and a button to copy the output to the clipboard.
 *
 * @param {IBase64EncodeDecodeOutputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered component.
 */
const Base64EncodeDecodeOutput: React.FC<IBase64EncodeDecodeOutputProps> = ({
  output,
}: IBase64EncodeDecodeOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>
              The result of your Base64 encoding or decoding operation
            </CardDescription>
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

export default Base64EncodeDecodeOutput;
