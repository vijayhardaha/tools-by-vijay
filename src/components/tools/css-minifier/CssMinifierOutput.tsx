import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CompressionInfo } from "@/components/ui/compressionInfo";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the CssMinifierOutput component.
 * @property {string} output - The minified CSS output.
 * @property {string} input - The original CSS input.
 */
interface CssMinifierOutputProps {
  output: string;
  input: string;
}

/**
 * A component that displays the minified CSS output.
 * It includes a card layout with compression statistics, a copy button, and a read-only textarea.
 *
 * @param {CssMinifierOutputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered CssMinifierOutput component.
 */
const CssMinifierOutput: React.FC<CssMinifierOutputProps> = ({
  output,
  input,
}: CssMinifierOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

export default CssMinifierOutput;
