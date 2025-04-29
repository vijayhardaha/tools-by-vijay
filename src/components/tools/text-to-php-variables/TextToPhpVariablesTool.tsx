"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import TextToPhpVariablesInfo from "./TextToPhpVariablesInfo";
import TextToPhpVariablesInput from "./TextToPhpVariablesInput";
import TextToPhpVariablesOutput from "./TextToPhpVariablesOutput";

export type VariableCase = "camelCase" | "snake_case" | "PascalCase";

/**
 * Main component for the Text to PHP Variables tool.
 * Manages the state and functionality for converting multiline text to PHP variables.
 *
 * @component
 * @returns {JSX.Element} The complete text to PHP variables tool with input options and output display.
 */
const TextToPhpVariablesTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [variableCase, setVariableCase] = useState<VariableCase>("snake_case");
  const [error, setError] = useState<string>("");

  /**
   * Converts text to the selected variable case.
   *
   * @param {string} text - The input text to convert.
   * @returns {string} The converted variable name.
   */
  const convertToVariableCase = (text: string): string => {
    const slug = slugify(latinize(text), { lower: true, strict: true, replacement: "_" });
    switch (variableCase) {
      case "camelCase":
        return slug.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      case "PascalCase":
        return slug.replace(/(^|_)([a-z])/g, (_, __, letter) => letter.toUpperCase());
      case "snake_case":
      default:
        return slug;
    }
  };

  /**
   * Handles the conversion process.
   */
  const handleSubmit = (): void => {
    setError("");

    if (!input.trim()) {
      setError("Please enter valid text content.");
      setOutput("");
      return;
    }

    const lines = input
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length === 0) {
      setError("No valid lines found after processing.");
      setOutput("");
      return;
    }

    const variables = lines.map((line) => `$${convertToVariableCase(line)} = '';`).join("\n");

    setOutput(variables);
  };

  /**
   * Clears the input and output fields.
   */
  const handleClear = (): void => {
    setInput("");
    setOutput("");
    setError("");
  };

  /**
   * Resets the input and output fields to their initial state.
   */
  const handleReset = (): void => {
    handleClear();
    setVariableCase("snake_case");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <TextToPhpVariablesInput
          input={input}
          setInput={setInput}
          variableCase={variableCase}
          setVariableCase={(value) => setVariableCase(value as VariableCase)}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />
        {output && <TextToPhpVariablesOutput output={output} />}
      </div>

      <div className="mt-16">
        <TextToPhpVariablesInfo />
      </div>
    </>
  );
};

export default TextToPhpVariablesTool;
