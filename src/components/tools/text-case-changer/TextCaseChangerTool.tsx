"use client";

import { useState } from "react";

import TextCaseChangerInfo from "./TextCaseChangerInfo";
import TextCaseChangerInput from "./TextCaseChangerInput";
import TextCaseChangerOutput from "./TextCaseChangerOutput";

/**
 * Type representing the various text case options available for transformation.
 */
export type TextCase =
  | "Sentence case"
  | "lower case"
  | "UPPER CASE"
  | "Capitalized Case"
  | "aLtErNaTiNg cAsE"
  | "Title Case"
  | "InVeRsE CaSe";

/**
 * A tool for changing the case of text input into various formats.
 * @returns The TextCaseChangerTool component.
 */
const TextCaseChangerTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [textCase, setTextCase] = useState<TextCase>("Sentence case");
  const [error, setError] = useState<string>("");

  /**
   * Converts the given text to the selected text case.
   * @param text - The input text to be transformed.
   * @returns The transformed text in the selected case.
   */
  const convertToTextCase = (text: string): string => {
    switch (textCase) {
      case "Sentence case":
        return text
          .toLowerCase()
          .replace(/(^\s*[a-z])|(\.\s*[a-z])/g, (match) => match.toUpperCase());
      case "lower case":
        return text.toLowerCase();
      case "UPPER CASE":
        return text.toUpperCase();
      case "Capitalized Case":
        return text
          .toLowerCase()
          .split(/\s+/)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      case "aLtErNaTiNg cAsE":
        return text
          .split("")
          .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
          .join("");
      case "Title Case":
        return text
          .toLowerCase()
          .split(/\s+/)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      case "InVeRsE CaSe":
        return text
          .split("")
          .map((char) => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()))
          .join("");
      default:
        return text;
    }
  };

  /**
   * Handles the submission of the input text for transformation.
   */
  const handleSubmit = (): void => {
    setError("");

    if (!input.trim()) {
      setError("Please enter valid text content.");
      setOutput("");
      return;
    }

    const convertedText = convertToTextCase(input.trim());
    setOutput(convertedText);
  };

  /**
   * Clears the input, output, and error states.
   */
  const handleClear = (): void => {
    setInput("");
    setOutput("");
    setError("");
  };

  /**
   * Resets the tool to its initial state, including the selected text case.
   */
  const handleReset = (): void => {
    handleClear();
    setTextCase("Sentence case");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <TextCaseChangerInput
          input={input}
          setInput={setInput}
          textCase={textCase}
          setTextCase={(value: string) => setTextCase(value as TextCase)}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />
        {output && <TextCaseChangerOutput output={output} />}
      </div>

      <div className="mt-16">
        <TextCaseChangerInfo />
      </div>
    </>
  );
};

export default TextCaseChangerTool;
