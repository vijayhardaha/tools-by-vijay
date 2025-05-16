import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the CountryNameGeneratorOutput component props.
 */
interface ITextCaseChangerOutputProps {
  output: string;
}

/**
 * Component for displaying the transformed text and providing a copy button.
 *
 * @param {ITextCaseChangerOutputProps} props - The props for the TextCaseChangerOutput component.
 * @returns {React.JSX.Element} The TextCaseChangerOutput component.
 */
const TextCaseChangerOutput: React.FC<ITextCaseChangerOutputProps> = ({
  output,
}: ITextCaseChangerOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Converted Text</CardTitle>
            <CardDescription>Copy the converted text for use</CardDescription>
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

export default TextCaseChangerOutput;
