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
 * @returns {JSX.Element} The input component for the Replace Quotes tool
 */
const ReplaceQuotesInput = ({
  textInput,
  setTextInput,
  replaceType,
  setReplaceType,
  onReplace,
  onReset,
  error,
  replaceApostrophes,
  setReplaceApostrophes,
  replaceStandaloneQuotes,
  setReplaceStandaloneQuotes,
  onClear, // Add onClear prop
}) => {
  /**
   * Handles form submission by preventing default behavior and triggering the replace action.
   * @param {FormEvent} e - Form event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onReplace();
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
              className="min-h-52"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
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
            <Button type="submit" variant="default" disabled={!textInput}>
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
  textInput: PropTypes.string.isRequired,
  setTextInput: PropTypes.func.isRequired,
  replaceType: PropTypes.oneOf(["simple-to-curly", "curly-to-simple"]).isRequired,
  setReplaceType: PropTypes.func.isRequired,
  onReplace: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  error: PropTypes.string,
  replaceApostrophes: PropTypes.bool.isRequired,
  setReplaceApostrophes: PropTypes.func.isRequired,
  replaceStandaloneQuotes: PropTypes.bool.isRequired,
  setReplaceStandaloneQuotes: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default ReplaceQuotesInput;
