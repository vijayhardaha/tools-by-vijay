"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BulkSlugifyInput = ({
  input = "",
  useUnderscore = false,
  setInput,
  removeNumbers = false,
  useLowercase = true,
  useLitinize = true,
  setUseUnderscore,
  setRemoveNumbers,
  setUseLowercase,
  setUseLitinize,
  onGenerate,
  onClear,
  onReset,
}) => {
  const maxLines = 100;
  const linesUsed = input
    .split("\n")
    .filter((line) => line.trim() !== "").length;
  const linesRemaining = maxLines - linesUsed;

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    const newLines = newValue.split("\n").slice(0, maxLines); // Limit to maxLines
    setInput(newLines.join("\n")); // Remove extra lines
  };

  const handleInputBlur = () => {
    const cleanedInput = input
      .split("\n")
      .filter((line) => line.trim() !== "")
      .join("\n");
    setInput(cleanedInput);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Strings</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          (Article title, tutorial title or any web page title)
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Textarea
          placeholder="Enter multiple lines of text to slugify"
          value={input}
          rows={5}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <p className="text-muted-foreground text-sm">
          Lines used: <span className="font-bold">{linesUsed}</span> /{" "}
          {maxLines}
          {linesRemaining >= 0 ? (
            <span> ({linesRemaining} remaining)</span>
          ) : (
            <span className="text-red-500"> (Limit exceeded)</span>
          )}
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground text-sm">
            Currently using:{" "}
            <span className="font-bold">
              {useUnderscore ? "Underscore (_)" : "Dash (-)"}
            </span>
          </p>
          <div className="mb-2 flex">
            <Button
              size="sm"
              variant="default"
              onClick={() => setUseUnderscore(false)}
              className={`${
                !useUnderscore
                  ? "bg-primary-400 text-foreground"
                  : "hover:bg-foreground hover:text-background"
              }`}
            >
              <span className="text-xs">Separate with dash (-)</span>
            </Button>
            <Button
              size="sm"
              variant="default"
              onClick={() => setUseUnderscore(true)}
              className={`${
                useUnderscore
                  ? "bg-primary-400 text-foreground"
                  : "hover:bg-foreground hover:text-background"
              }`}
            >
              <span className="text-xs">Separate with underscore (_)</span>
            </Button>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="useLowercase"
              checked={useLowercase}
              onCheckedChange={setUseLowercase}
            />
            <Label htmlFor="useLowercase">Convert to lowercase</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remove-numbers"
              checked={removeNumbers}
              onCheckedChange={setRemoveNumbers}
            />
            <Label htmlFor="remove-numbers">Remove numbers</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="use-latinize"
              checked={useLitinize}
              onCheckedChange={setUseLitinize}
            />
            <Label htmlFor="use-latinize">Use latinize</Label>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-start gap-2">
        <Button
          variant="default"
          size="lg"
          onClick={onGenerate}
          disabled={!input}
        >
          Generate
        </Button>
        <Button variant="outline" size="lg" onClick={onClear}>
          Clear
        </Button>
        <Button variant="destructive" size="lg" onClick={onReset}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

BulkSlugifyInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  useUnderscore: PropTypes.bool.isRequired,
  setUseUnderscore: PropTypes.func.isRequired,
  removeNumbers: PropTypes.bool.isRequired,
  setRemoveNumbers: PropTypes.func.isRequired,
  useLowercase: PropTypes.bool.isRequired,
  setUseLowercase: PropTypes.func.isRequired,
  useLitinize: PropTypes.bool.isRequired,
  setUseLitinize: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default BulkSlugifyInput;
