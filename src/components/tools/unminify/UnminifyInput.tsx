"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { RadioBox } from "@/components/ui/radiobox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Interface for the UnminifyInput component props.
 */
interface IUnminifyInputProps {
  input: string;
  setInput: (value: string) => void;
  codeType: string;
  setCodeType: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  isLoading: boolean;
  error?: string;
}

/**
 * Component for accepting code input and triggering unminification.
 *
 * @param {IUnminifyInputProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered UnminifyInput component.
 */
const UnminifyInput: React.FC<IUnminifyInputProps> = ({
  input,
  setInput,
  codeType,
  setCodeType,
  onSubmit,
  onClear,
  isLoading,
  error,
}: IUnminifyInputProps): React.JSX.Element => {
  /**
   * Handles the form submission event.
   *
   * @param {React.FormEvent} e - The form event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Code Input</CardTitle>
        <CardDescription>Paste your code to unminify and select the code type</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            placeholder="Paste code here..."
            rows={15}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <RadioBox
              name="codeType"
              id="javascript"
              checked={codeType === "javascript"}
              onCheckedChange={() => setCodeType("javascript")}
            >
              JavaScript
            </RadioBox>
            <RadioBox
              name="codeType"
              id="json"
              checked={codeType === "json"}
              onCheckedChange={() => setCodeType("json")}
            >
              JSON
            </RadioBox>
            <RadioBox
              name="codeType"
              id="html"
              checked={codeType === "html"}
              onCheckedChange={() => setCodeType("html")}
            >
              HTML/XML
            </RadioBox>
            <RadioBox
              name="codeType"
              id="css"
              checked={codeType === "css"}
              onCheckedChange={() => setCodeType("css")}
            >
              CSS
            </RadioBox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input || isLoading}>
              {isLoading ? "Unminifying..." : "Unminify"}
            </Button>

            <Button type="button" variant="outline" onClick={onClear} disabled={isLoading}>
              Clear
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
};

export default UnminifyInput;
