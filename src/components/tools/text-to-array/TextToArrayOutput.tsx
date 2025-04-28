import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the Text To Array Output component.
 *
 * @interface TextToArrayOutputProps
 * @property {string} output - The converted array output to display.
 */
interface TextToArrayOutputProps {
  output: string;
}

/**
 * Text To Array Output component displays the converted array output in a card.
 * It includes a readonly textarea for the output and a copy button for convenience.
 *
 * @component
 * @param {TextToArrayOutputProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const TextToArrayOutput: React.FC<TextToArrayOutputProps> = ({
  output,
}: TextToArrayOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Converted Output</CardTitle>
            <CardDescription>Copy the generated array for use in your code</CardDescription>
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

export default TextToArrayOutput;
