"use client";

import React, { useState } from "react";

import DuplicateLineRemovalInfo from "./DuplicateLineRemovalInfo";
import DuplicateLineRemovalInput from "./DuplicateLineRemovalInput";
import DuplicateLineRemovalOutput from "./DuplicateLineRemovalOutput";

/**
 * Main component for the Duplicate Line Removal tool.
 * Manages the state and functionality for removing duplicate lines and sorting.
 *
 * @component
 * @returns {React.JSX.Element} The complete Duplicate Line Removal tool with input options, output display, and functionality
 */
const DuplicateLineRemovalTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [sortType, setSortType] = useState<"none" | "alphabetical" | "ascii">("none");
  const [reverseSort, setReverseSort] = useState<boolean>(false);

  /**
   * Processes the input to remove duplicate lines, sort them based on the selected sort type,
   * and optionally reverse the order.
   *
   * @function
   * @returns {void}
   */
  const handleSubmit = (): void => {
    const lines = input
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .filter((line) => line.length > 0)
      .filter((line, index, self) => self.indexOf(line) === index);

    let sortedLines = lines;

    if (sortType === "alphabetical") {
      sortedLines = [...lines].sort((a, b) => a.localeCompare(b));
    } else if (sortType === "ascii") {
      sortedLines = [...lines].sort();
    }

    if (reverseSort) {
      sortedLines.reverse();
    }

    setOutput(sortedLines.join("\n"));
  };

  /**
   * Clears the input and output fields.
   *
   * @function
   * @returns {void}
   */
  const handleClear = (): void => {
    setInput("");
    setOutput("");
  };

  /**
   * Resets all states to their initial values.
   *
   * @function
   * @returns {void}
   */
  const handleReset = (): void => {
    handleClear();
    setSortType("none");
    setReverseSort(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <DuplicateLineRemovalInput
          input={input}
          setInput={setInput}
          sortType={sortType}
          setSortType={(value: string) => {
            if (value === "none" || value === "alphabetical" || value === "ascii") {
              setSortType(value);
            }
          }}
          reverseSort={reverseSort}
          setReverseSort={setReverseSort}
          onSubmit={handleSubmit}
          onReset={handleReset}
          onClear={handleClear}
        />

        {output && <DuplicateLineRemovalOutput output={output} />}
      </div>

      <div className="mt-16">
        <DuplicateLineRemovalInfo />
      </div>
    </>
  );
};

export default DuplicateLineRemovalTool;
