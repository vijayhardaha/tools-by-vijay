"use client";

import { useState } from "react";

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
  const [textInput, setTextInput] = useState("");
  const [sortType, setSortType] = useState("none");
  const [reverseSort, setReverseSort] = useState(false);
  const [output, setOutput] = useState("");

  const handleProcess = () => {
    const lines = textInput
      .split("\n")
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

  const handleReset = () => {
    setTextInput("");
    setSortType("none");
    setReverseSort(false);
    setOutput("");
  };

  const handleClear = () => {
    setTextInput("");
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      <DuplicateLineRemovalInput
        textInput={textInput}
        setTextInput={setTextInput}
        sortType={sortType}
        setSortType={setSortType}
        reverseSort={reverseSort}
        setReverseSort={setReverseSort}
        onProcess={handleProcess}
        onReset={handleReset}
        onClear={handleClear}
      />
      <DuplicateLineRemovalOutput output={output} />
    </div>
  );
};

export default DuplicateLineRemovalTool;
