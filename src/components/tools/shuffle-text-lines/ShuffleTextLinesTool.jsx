"use client";

import { useState } from "react";

import ShuffleTextLinesInfo from "./ShuffleTextLinesInfo";
import ShuffleTextLinesInput from "./ShuffleTextLinesInput";
import ShuffleTextLinesOutput from "./ShuffleTextLinesOutput";

/**
 * A tool for shuffling lines of text with options to remove duplicates.
 * @returns {JSX.Element} The ShuffleTextLinesTool component.
 */
const ShuffleTextLinesTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [removeDuplicates, setRemoveDuplicates] = useState(false);
  const [removeEmptyLines, setRemoveEmptyLines] = useState(true);
  const [trimLines, setTrimLines] = useState(true);

  /**
   * Handles the submission of the input text, shuffles the lines, and updates the output.
   */
  const handleSubmit = () => {
    let lines = input.split("\n");

    if (removeDuplicates) {
      lines = [...new Set(lines)];
    }

    if (trimLines) {
      lines = lines.map((line) => line.trim());
    }

    if (removeEmptyLines) {
      lines = lines.filter((line) => line !== "").filter((line) => line.length > 0);
    }

    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }

    setOutput(lines.join("\n"));
  };

  /**
   * Clears the input and output fields.
   */
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  /**
   * Resets the tool to its initial state, clearing input, output, and options.
   */
  const handleReset = () => {
    handleClear();
    setRemoveDuplicates(false);
    setRemoveEmptyLines(true);
    setTrimLines(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <ShuffleTextLinesInput
          input={input}
          setInput={setInput}
          removeDuplicates={removeDuplicates}
          setRemoveDuplicates={setRemoveDuplicates}
          removeEmptyLines={removeEmptyLines}
          setRemoveEmptyLines={setRemoveEmptyLines}
          trimLines={trimLines}
          setTrimLines={setTrimLines}
          onSubmit={handleSubmit}
          onReset={handleReset}
          onClear={handleClear}
        />

        {output && <ShuffleTextLinesOutput output={output} />}
      </div>

      <div className="mt-16">
        <ShuffleTextLinesInfo />
      </div>
    </>
  );
};

export default ShuffleTextLinesTool;
