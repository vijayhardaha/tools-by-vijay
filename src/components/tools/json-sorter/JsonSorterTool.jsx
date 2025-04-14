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
  /**
   * The JSON input string
   * @type {[string, function]} State and setter for JSON input
   */
  const [jsonInput, setJsonInput] = useState("");

  /**
   * Whether to spare (preserve) arrays
   * @type {[boolean, function]} State and setter for spare arrays option
   */
  const [spareArrays, setSpareArrays] = useState(true);

  /**
   * The sorted JSON output
   * @type {[string, function]} State and setter for the sorted output
   */
  const [sortedOutput, setSortedOutput] = useState("");

  /**
   * Any error message from the sorting process
   * @type {[string, function]} State and setter for error messages
   */
  const [error, setError] = useState("");

  /**
   * Handles the sorting process when user submits the form
   */
  const handleSort = () => {
    try {
      setError("");

      if (!jsonInput.trim()) {
        setError("Please enter valid JSON content");
        setSortedOutput("");
        return;
      }

      // Parse the JSON to validate it
      try {
        JSON.parse(jsonInput);
      } catch (err) {
        setError(`Invalid JSON: ${err.message}`);
        setSortedOutput("");
        return;
      }

      // Sort the JSON using jsonabc
      const output = jsonabc.sort(jsonInput, spareArrays);
      setSortedOutput(output);
    } catch (err) {
      setError(`Error sorting JSON: ${err.message}`);
      setSortedOutput("");
    }
  };

  /**
   * Resets all input fields and output
   */
  const handleReset = () => {
    setJsonInput("");
    setSpareArrays(true);
    setSortedOutput("");
    setError("");
  };

  /**
   * Clears only the JSON input field
   */
  const handleClear = () => {
    setJsonInput("");
    setSortedOutput("");
    setError("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <JsonSorterInput
          jsonInput={jsonInput}
          setJsonInput={setJsonInput}
          spareArrays={spareArrays}
          setSpareArrays={setSpareArrays}
          onSort={handleSort}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />
        <JsonSorterOutput output={sortedOutput} />
      </div>

      <div className="mt-16">
        <JsonSorterInfo />
      </div>
    </>
  );
};

export default JsonSorterTool;
