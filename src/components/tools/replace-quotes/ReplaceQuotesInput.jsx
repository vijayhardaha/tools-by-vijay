"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioBox } from "@/components/ui/radiobox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Input component for the Replace Quotes tool.
 * Handles user input and actions for replacing quotes.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.input - The input text to process.
 * @param {function} props.setInput - Function to update the input text.
 * @param {"simple-to-curly"|"curly-to-simple"} props.replaceType - The type of quote replacement.
 * @param {function} props.setReplaceType - Function to update the replace type.
 * @param {boolean} props.replaceApostrophes - Whether to replace apostrophes.
 * @param {function} props.setReplaceApostrophes - Function to toggle replacing apostrophes.
 * @param {boolean} props.replaceStandaloneQuotes - Whether to replace standalone quotes.
 * @param {function} props.setReplaceStandaloneQuotes - Function to toggle replacing standalone quotes.
 * @param {string} [props.error] - Error message to display, if any.
 * @param {function} props.onSubmit - Function to handle form submission.
 * @param {function} props.onClear - Function to clear the input.
 * @param {function} props.onReset - Function to reset the form.
 * @returns {JSX.Element} The input component for the Replace Quotes tool.
 */
const ReplaceQuotesInput = ({
  input,
  setInput,
  replaceType,
  setReplaceType,
  replaceApostrophes,
  setReplaceApostrophes,
  replaceStandaloneQuotes,
  setReplaceStandaloneQuotes,
  error,
  onSubmit,
  onClear,
  onReset,
}) => {
  /**
   * Handles form submission by preventing default behavior and triggering the replace action.
   * @param {FormEvent} e - Form event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Replace Quotes</CardTitle>
        <CardDescription>Enter text and choose the type of quote replacement</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <Textarea
              id="text-input"
              placeholder="Enter your text here..."
              rows={10}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-base font-bold">Replace Type</h3>

              <div className="flex flex-col gap-2">
                <RadioBox
                  id="simple-to-curly"
                  name="replace-type"
                  checked={replaceType === "simple-to-curly"}
                  onCheckedChange={() => setReplaceType("simple-to-curly")}
                >
                  Simple to Curly Quotes
                </RadioBox>
                <RadioBox
                  id="curly-to-simple"
                  name="replace-type"
                  checked={replaceType === "curly-to-simple"}
                  onCheckedChange={() => setReplaceType("curly-to-simple")}
                >
                  Curly to Simple Quotes
                </RadioBox>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold">Additional Options</h3>

              <div className="flex flex-col gap-2">
                <Checkbox
                  id="replace-apostrophes"
                  checked={replaceApostrophes}
                  onCheckedChange={(checked) => setReplaceApostrophes(checked)}
                >
                  Replace Apostrophes
                </Checkbox>
                <Checkbox
                  id="replace-standalone-quotes"
                  checked={replaceStandaloneQuotes}
                  onCheckedChange={(checked) => setReplaceStandaloneQuotes(checked)}
                >
                  Replace Standalone Quotes
                </Checkbox>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Replace Quotes
            </Button>

            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>

            <Button type="button" variant="destructive" onClick={onReset}>
              Reset
            </Button>
          </div>

          {error && <p className="mt-2 text-red-500">{error}</p>}
        </form>
      </CardContent>
    </Card>
  );
};

ReplaceQuotesInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  replaceType: PropTypes.oneOf(["simple-to-curly", "curly-to-simple"]).isRequired,
  setReplaceType: PropTypes.func.isRequired,
  replaceApostrophes: PropTypes.bool.isRequired,
  setReplaceApostrophes: PropTypes.func.isRequired,
  replaceStandaloneQuotes: PropTypes.bool.isRequired,
  setReplaceStandaloneQuotes: PropTypes.func.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ReplaceQuotesInput;
