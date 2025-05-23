import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the CountryNameGeneratorOutput component props.
 */
interface IUnminifyOutputProps {
  output: string;
}

/**
 * Component that displays the unminified code output.
 *
 * @param {IUnminifyOutputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered UnminifyOutput component.
 */
const UnminifyOutput: React.FC<IUnminifyOutputProps> = ({
  output,
}: IUnminifyOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Unminified Output</CardTitle>
            <CardDescription>Below is the unminified version of your code.</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} rows={15} readOnly data-output />
      </CardContent>
    </Card>
  );
};

export default UnminifyOutput;
