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

  const handleReset = () => {
    setInput("");
    setOutput("");
    setReverseSort(false);
    setRemoveDuplicates(false);
    setSortType("standard");
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
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
