import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the CssInlinerOutput component.
 * @property {string} output - The resulting HTML with inlined CSS to display.
 */
interface CssInlinerOutputProps {
  output: string;
}

/**
 * A component that displays the output of the CSS inliner tool.
 * It includes a card layout with a copy button and a read-only textarea to show the inlined HTML.
 *
 * @param {CssInlinerOutputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered CssInlinerOutput component.
 */
const CssInlinerOutput: React.FC<CssInlinerOutputProps> = ({
  output,
}: CssInlinerOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>
              The resulting HTML with inlined CSS will appear below.
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

export default CssInlinerOutput;
