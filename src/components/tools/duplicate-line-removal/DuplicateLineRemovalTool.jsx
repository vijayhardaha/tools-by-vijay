"use client";

import { useState } from "react";

import DuplicateLineRemovalInfo from "./DuplicateLineRemovalInfo";
import DuplicateLineRemovalInput from "./DuplicateLineRemovalInput";
import DuplicateLineRemovalOutput from "./DuplicateLineRemovalOutput";

/**
 * Main component for the Duplicate Line Removal tool.
 * Manages the state and functionality for removing duplicate lines and sorting.
 *
 * @component
 * @returns {JSX.Element} The complete Duplicate Line Removal tool with input options, output display, and functionality
 */
const DuplicateLineRemovalTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [sortType, setSortType] = useState("none");
  const [reverseSort, setReverseSort] = useState(false);

  /**
   * Processes the input to remove duplicate lines, sort them based on the selected sort type,
   * and optionally reverse the order.
   *
   * @function
   * @returns {void}
   */
  const handleSubmit = () => {
    const lines = input.split("\n").filter((line, index, self) => self.indexOf(line) === index);
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
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  /**
   * Resets all states to their initial values.
   *
   * @function
   * @returns {void}
   */
  const handleReset = () => {
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
          setSortType={setSortType}
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
