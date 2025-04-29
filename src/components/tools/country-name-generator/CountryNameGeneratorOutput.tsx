import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the CountryNameGeneratorOutput component.
 */
interface CountryNameGeneratorOutputProps {
  output: string[];
}

/**
 * A component for displaying the generated country names.
 * @param props - The props for the CountryNameGeneratorOutput component.
 * @returns The CountryNameGeneratorOutput component.
 */
const CountryNameGeneratorOutput: React.FC<CountryNameGeneratorOutputProps> = ({
  output,
}: CountryNameGeneratorOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Generated Country Names</CardTitle>
            <CardDescription>Copy the generated names for use</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output.join("\n")} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea rows={8} value={output.join("\n")} readOnly data-output />
      </CardContent>
    </Card>
  );
};

export default CountryNameGeneratorOutput;
