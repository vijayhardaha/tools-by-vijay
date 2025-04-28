"use client";

import { useState } from "react";

import ReplaceQuotesInfo from "./ReplaceQuotesInfo";
import ReplaceQuotesInput from "./ReplaceQuotesInput";
import ReplaceQuotesOutput from "./ReplaceQuotesOutput";

/**
 * Main component for the Replace Quotes tool.
 * Manages the state and functionality for replacing quotes in text.
 *
 * @component
 * @returns {JSX.Element} The complete Replace Quotes tool with input options, output display, and information
 */
const ReplaceQuotesTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [replaceType, setReplaceType] = useState<"simple-to-curly" | "curly-to-simple">(
    "simple-to-curly"
  );
  const [replaceApostrophes, setReplaceApostrophes] = useState<boolean>(true);
  const [replaceStandaloneQuotes, setReplaceStandaloneQuotes] = useState<boolean>(false);

  /**
   * Handles the quote replacement process
   *
   * @function
   * @returns {void}
   */
  const handleSubmit = (): void => {
    let replacedText: string = input;

    switch (replaceType) {
      case "simple-to-curly":
        if (replaceApostrophes) {
          replacedText = replacedText
            // Replace apostrophes in contractions (e.g., isn't → isn’t)
            .replace(/\b(\w+)'(\w+)\b/g, "$1’$2");
        }

        replacedText = replacedText
          // Replace double quotes used for quoting (e.g., "text" → “text”)
          .replace(/"([^"]*)"/g, "“$1”")
          // Replace single quotes used for quoting (e.g., 'text' → ‘text’)
          .replace(/'([^']*)'/g, "‘$1’");

        if (replaceStandaloneQuotes) {
          replacedText = replacedText
            // Replace remaining standalone double quotes → “
            .replace(/"/g, "“")
            // Replace remaining standalone single quotes → ‘
            .replace(/'/g, "‘");
        }
        break;
      case "curly-to-simple":
        replacedText = replacedText
          // Replace curly single quotes with straight quotes
          .replace(/[‘’]/g, "'")
          // Replace curly double quotes with straight quotes
          .replace(/[“”]/g, '"');
        break;
      default:
        throw new Error("Invalid replace type");
    }

    setOutput(replacedText);
  };

  /**
   * Clears the output while keeping the input and other states intact
   *
   * @function
   * @returns {void}
   */
  const handleClear = (): void => {
    setInput("");
    setOutput("");
  };

  /**
   * Resets all input fields, output, and options
   *
   * @function
   * @returns {void}
   */
  const handleReset = (): void => {
    handleClear();
    setReplaceType("simple-to-curly");
    setReplaceApostrophes(true);
    setReplaceStandaloneQuotes(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <ReplaceQuotesInput
          input={input}
          setInput={setInput}
          replaceType={replaceType}
          setReplaceType={setReplaceType}
          replaceApostrophes={replaceApostrophes}
          setReplaceApostrophes={setReplaceApostrophes}
          replaceStandaloneQuotes={replaceStandaloneQuotes}
          setReplaceStandaloneQuotes={setReplaceStandaloneQuotes}
          onSubmit={handleSubmit}
          onReset={handleReset}
          onClear={handleClear}
        />

        {output && <ReplaceQuotesOutput output={output} />}
      </div>

      <div className="mt-16">
        <ReplaceQuotesInfo />
      </div>
    </>
  );
};

export default ReplaceQuotesTool;
