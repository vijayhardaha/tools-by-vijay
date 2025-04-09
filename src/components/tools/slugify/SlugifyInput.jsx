"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Component for inputting text to generate slugs with various options
 *
 * @param {Object} props - Component props
 * @param {string} props.input - The input text to be slugified
 * @param {boolean} props.useUnderscore - Whether to use underscore instead of dash
 * @param {Function} props.setInput - Function to update input state
 * @param {boolean} props.removeNumbers - Whether to remove numbers from the slug
 * @param {boolean} props.useLowercase - Whether to convert the slug to lowercase
 * @param {boolean} props.useLitinize - Whether to latinize the text (convert accents)
 * @param {Function} props.setUseUnderscore - Function to toggle underscore usage
 * @param {Function} props.setRemoveNumbers - Function to toggle number removal
 * @param {Function} props.setUseLowercase - Function to toggle lowercase conversion
 * @param {Function} props.setUseLitinize - Function to toggle latinize usage
 * @param {Function} props.onGenerate - Function called when generate button is clicked
 * @param {Function} props.onClear - Function to clear the input
 * @param {Function} props.onReset - Function to reset all options to defaults
 * @returns {JSX.Element} The SlugifyInput component
 */
const SlugifyInput = ({
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
  /**
   * Handles form submission and triggers slug generation
   *
   * @param {React.FormEvent} e - The form event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input String</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          (Article title, tutorial title or any web page title)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Enter text to slugify"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
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
                className={`${!useUnderscore ? "bg-primary-400 text-foreground" : "hover:bg-foreground hover:text-background"}`}
              >
                <span className="text-xs">Separate with dash (-)</span>
              </Button>
              <Button
                size="sm"
                variant="default"
                onClick={() => setUseUnderscore(true)}
                className={`${useUnderscore ? "bg-primary-400 text-foreground" : "hover:bg-foreground hover:text-background"}`}
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
              type="reset"
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

SlugifyInput.propTypes = {
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

export default SlugifyInput;
