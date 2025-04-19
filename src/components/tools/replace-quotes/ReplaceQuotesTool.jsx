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
const ReplaceQuotesTool = () => {
  const [textInput, setTextInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [replaceType, setReplaceType] = useState("simple-to-curly");
  const [replaceApostrophes, setReplaceApostrophes] = useState(true);
  const [replaceStandaloneQuotes, setReplaceStandaloneQuotes] = useState(false);

  /**
   * Handles the quote replacement process
   */
  const handleReplace = () => {
    try {
      setError("");

      if (!textInput.trim()) {
        setError("Please enter valid text content");
        setOutput("");
        return;
      }

      let replacedText = textInput;

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
    } catch (err) {
      setError(`Error processing text: ${err.message}`);
      setOutput("");
    }
  };

  /**
   * Resets all input fields, output, and options
   */
  const handleReset = () => {
    setTextInput("");
    setOutput("");
    setError("");
    setReplaceType("simple-to-curly");
    setReplaceApostrophes(true);
    setReplaceStandaloneQuotes(false);
  };

  /**
   * Clears the output while keeping the input and other states intact
   */
  const handleClear = () => {
    setTextInput("");
    setOutput("");
    setError("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <ReplaceQuotesInput
          textInput={textInput}
          setTextInput={setTextInput}
          replaceType={replaceType}
          setReplaceType={setReplaceType}
          onReplace={handleReplace}
          onReset={handleReset}
          onClear={handleClear}
          error={error}
          replaceApostrophes={replaceApostrophes}
          setReplaceApostrophes={setReplaceApostrophes}
          replaceStandaloneQuotes={replaceStandaloneQuotes}
          setReplaceStandaloneQuotes={setReplaceStandaloneQuotes}
        />
        <ReplaceQuotesOutput output={output} />
      </div>

      <div className="mt-16">
        <ReplaceQuotesInfo />
      </div>
    </>
  );
};

export default ReplaceQuotesTool;
