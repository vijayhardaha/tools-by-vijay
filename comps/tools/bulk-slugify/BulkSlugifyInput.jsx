"use client";

import PropTypes from "prop-types";

import { Button } from "../../../../comps/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../../../../comps/ui/card";
import { Checkbox } from "../../../../comps/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "../../../../comps/ui/textarea";

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
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Strings</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          (Article title, tutorial title or any web page title)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            placeholder="Enter multiple lines of text to slugify"
            value={input}
            rows={5}
            onChange={handleInputChange}
          />

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

          <div className="flex justify-start gap-2">
            <Button type="submit" variant="default" size="lg" disabled={!input}>
              Generate
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={onClear}>
              Clear
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="lg"
              onClick={onReset}
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
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
