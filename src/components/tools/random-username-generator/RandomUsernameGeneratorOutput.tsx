import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the CountryNameGeneratorOutput component props.
 */
interface IRandomUsernameGeneratorOutputProps {
  output: string[];
}

/**
 * A component for displaying the generated usernames.
 * @param props - The props for the RandomUsernameGeneratorOutput component.
 * @returns The RandomUsernameGeneratorOutput component.
 */
const RandomUsernameGeneratorOutput: React.FC<IRandomUsernameGeneratorOutputProps> = ({
  output,
}: IRandomUsernameGeneratorOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Generated Usernames</CardTitle>
            <CardDescription>Copy the generated usernames for use</CardDescription>
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

export default RandomUsernameGeneratorOutput;
