"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import BulkSlugifyInfo from "./BulkSlugifyInfo";
import BulkSlugifyInput from "./BulkSlugifyInput";
import BulkSlugifyOutput from "./BulkSlugifyOutput";

/**
 * Main component for the Bulk Slugify Tool
 *
 * This component manages the state and functionality of the bulk slugify tool,
 * allowing users to convert multiple text strings into URL-friendly slugs
 * with various configuration options.
 *
 * @returns {JSX.Element} The complete Bulk Slugify Tool interface
 */
const BulkSlugifyTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [useUnderscore, setUseUnderscore] = useState(false);
  const [removeNumbers, setRemoveNumbers] = useState(false);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useLitinize, setUseLitinize] = useState(true);
  const [keepEmptyLines, setKeepEmptyLines] = useState(false);

  /**
   * Generates slugs from the input text based on configuration options
   *
   * @param {string} text - The input text to convert to slugs
   * @returns {string} The processed slugs as a newline-separated string
   */
  const generateSlugs = (text) => {
    return text
      .split("\n")
      .filter((line) => keepEmptyLines || line.trim() !== "")
      .map((line) => {
        let processedText = line;

        if (useLitinize) {
          processedText = latinize(processedText);
        }

        if (useLowercase) {
          processedText = processedText.toLowerCase();
        }

        return slugify(processedText, {
          replacement: useUnderscore ? "_" : "-",
          remove: removeNumbers ? /[0-9]/g : null,
          lower: useLowercase,
          strict: true,
        });
      })
      .join("\n");
  };

  /**
   * Handles the generation of slugs when the user clicks the generate button
   */
  const handleSubmit = () => {
    const slugs = generateSlugs(input);
    setOutput(slugs);
  };

  /**
   * Clears the input and output fields
   */
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  /**
   * Resets all form fields and options to their default values
   */
  const handleReset = () => {
    setInput("");
    setOutput("");
    setUseUnderscore(false);
    setRemoveNumbers(false);
    setUseLowercase(true);
    setUseLitinize(true);
    setKeepEmptyLines(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <BulkSlugifyInput
          input={input}
          setInput={setInput}
          useUnderscore={useUnderscore}
          setUseUnderscore={setUseUnderscore}
          removeNumbers={removeNumbers}
          setRemoveNumbers={setRemoveNumbers}
          useLowercase={useLowercase}
          setUseLowercase={setUseLowercase}
          useLitinize={useLitinize}
          setUseLitinize={setUseLitinize}
          keepEmptyLines={keepEmptyLines}
          setKeepEmptyLines={setKeepEmptyLines}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
        />

        {output && <BulkSlugifyOutput output={output} />}
      </div>

      <div className="mt-16">
        <BulkSlugifyInfo />
      </div>
    </>
  );
};

BulkSlugifyTool.propTypes = {};

export default BulkSlugifyTool;
