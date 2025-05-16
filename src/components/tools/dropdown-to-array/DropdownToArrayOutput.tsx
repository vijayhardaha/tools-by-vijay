import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the CountryNameGeneratorOutput component props.
 */
interface IDropdownToArrayOutputProps {
  output: string;
}

/**
 * DropdownToArrayOutput component.
 *
 * Displays the converted output and provides a copy button for easy copying.
 *
 * @param {DropdownToArrayOutputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered component.
 */
const DropdownToArrayOutput: React.FC<IDropdownToArrayOutputProps> = ({
  output,
}: IDropdownToArrayOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

export default DropdownToArrayOutput;
