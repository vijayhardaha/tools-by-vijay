import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CompressionInfo } from "@/components/ui/compressionInfo";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the HtmlMinifierOutput component props.
 */
interface IHtmlMinifierOutputProps {
  output: string;
  input: string;
}

/**
 * A React component that displays the minified HTML output along with compression information.
 * Includes a copy button to copy the output and a readonly textarea to view the minified HTML.
 *
 * @param {IHtmlMinifierOutputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered component.
 */
const HtmlMinifierOutput: React.FC<IHtmlMinifierOutputProps> = ({
  output,
  input,
}: IHtmlMinifierOutputProps): React.JSX.Element => {
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

export default HtmlMinifierOutput;
