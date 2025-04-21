"use client";

import { useState } from "react";

import jsonabc from "jsonabc";

import JsonSorterInfo from "./JsonSorterInfo";
import JsonSorterInput from "./JsonSorterInput";
import JsonSorterOutput from "./JsonSorterOutput";

/**
 * Main component for the JSON Sorter tool.
 * Manages the state and functionality for sorting JSON objects alphabetically.
 *
 * @component
 * @returns {JSX.Element} The complete JSON sorter tool with input options, output display, and information
 */
const JsonSorterTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [spareArrays, setSpareArrays] = useState(true);
  const [error, setError] = useState("");

  /**
   * Handles the sorting process when user submits the form
   *
   * @function
   * @returns {void}
   */
  const handleSubmit = () => {
    try {
      setError("");

      if (!input.trim()) {
        setError("Please enter valid JSON content");
        setOutput("");
        return;
      }

      // Parse the JSON to validate it
      try {
        JSON.parse(input);
      } catch (err) {
        setError(`Invalid JSON: ${err.message}`);
        setOutput("");
        return;
      }

      // Sort the JSON using jsonabc
      const output = jsonabc.sort(input, spareArrays);
      setOutput(output);
    } catch (err) {
      setError(`Error sorting JSON: ${err.message}`);
      setOutput("");
    }
  };

  /**
   * Clears only the JSON input field
   *
   * @function
   * @returns {void}
   */
  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  /**
   * Resets all input fields and output
   *
   * @function
   * @returns {void}
   */
  const handleReset = () => {
    handleClear();
    setSpareArrays(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <JsonSorterInput
          input={input}
          setInput={setInput}
          spareArrays={spareArrays}
          setSpareArrays={setSpareArrays}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />

        {output && <JsonSorterOutput output={output} />}
      </div>

      <div className="mt-16">
        <JsonSorterInfo />
      </div>
    </>
  );
};

export default JsonSorterTool;
