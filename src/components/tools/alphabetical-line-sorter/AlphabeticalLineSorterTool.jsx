"use client";

import { useState } from "react";

import AlphabeticalLineSorterInfo from "./AlphabeticalLineSorterInfo";
import AlphabeticalLineSorterInput from "./AlphabeticalLineSorterInput";
import AlphabeticalLineSorterOutput from "./AlphabeticalLineSorterOutput";

/**
 * Main component for the Alphabetical Line Sorter tool.
 * Manages the state and functionality for sorting lines alphabetically.
 *
 * @component
 * @returns {JSX.Element} The complete Alphabetical Line Sorter tool with input options, output display, and functionality
 */
const AlphabeticalLineSorterTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [reverseSort, setReverseSort] = useState(false);
  const [removeDuplicates, setRemoveDuplicates] = useState(false);
  const [sortType, setSortType] = useState("standard");

  /**
   * Handles the submission of the input text for sorting.
   * Processes the input based on the selected options (reverse sort, remove duplicates, sort type).
   * Updates the output state with the sorted lines.
   * @function
   * @returns {void}
   */
  const handleSubmit = () => {
    let lines = input.split("\n");

    if (removeDuplicates) {
      lines = [...new Set(lines)];
    }

    let sortedLines;
    if (sortType === "ascii") {
      sortedLines = [...lines].sort();
    } else {
      sortedLines = [...lines].sort((a, b) => a.localeCompare(b));
    }

    if (reverseSort) {
      sortedLines.reverse();
    }

    setOutput(sortedLines.join("\n"));
  };

  /**
   * Handles the clearing of the input and output states.
   * Resets the input and output to empty strings.
   * @function
   * @returns {void}
   */
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  /**
   * Handles the reset of the input and output states.
   * Resets all options to their default values.
   * @function
   * @returns {void}
   */
  const handleReset = () => {
    handleClear();
    setReverseSort(false);
    setRemoveDuplicates(false);
    setSortType("standard");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <AlphabeticalLineSorterInput
          input={input}
          setInput={setInput}
          reverseSort={reverseSort}
          setReverseSort={setReverseSort}
          removeDuplicates={removeDuplicates}
          setRemoveDuplicates={setRemoveDuplicates}
          sortType={sortType}
          setSortType={setSortType}
          onSubmit={handleSubmit}
          onReset={handleReset}
          onClear={handleClear}
        />

        {output && <AlphabeticalLineSorterOutput output={output} />}
      </div>

      <div className="mt-16">
        <AlphabeticalLineSorterInfo />
      </div>
    </>
  );
};

export default AlphabeticalLineSorterTool;
