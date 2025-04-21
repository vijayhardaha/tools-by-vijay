"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import SlugifyInfo from "./SlugifyInfo";
import SlugifyInput from "./SlugifyInput";
import SlugifyOutput from "./SlugifyOutput";

const SlugifyTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [useUnderscore, setUseUnderscore] = useState(false);
  const [removeNumbers, setRemoveNumbers] = useState(false);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useLitinize, setUseLitinize] = useState(true);

  /**
   * Generates a slug from the given text based on the current settings.
   * @param {string} text - The input text to be slugified.
   * @returns {string} The generated slug.
   */
  const generateSlug = (text) => {
    let processedText = text;

    // Apply latinize if enabled
    if (useLitinize) {
      processedText = latinize(processedText);
    }

    // Apply lowercase if enabled
    if (useLowercase) {
      processedText = processedText.toLowerCase();
    }

    // Use slugify package
    let slug = slugify(processedText, {
      replacement: useUnderscore ? "_" : "-", // Replace spaces with underscore or dash
      remove: removeNumbers ? /[0-9]/g : null, // Remove numbers if enabled
      lower: useLowercase, // Convert to lowercase if enabled
      strict: true, // Strip special characters
    });

    return slug;
  };

  /**
   * Handles the generation of the slug and updates the output state.
   * This function is triggered when the "Generate" button is clicked.
   *
   * @function
   * @returns {void}
   */
  const handleSubmit = () => {
    const slug = generateSlug(input);
    setOutput(slug);
  };

  /**
   * Clears the input and output fields.
   * This function is triggered when the "Clear" button is clicked.
   *
   * @function
   * @returns {void}
   */
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  /**
   * Resets all input fields and settings to their default values.
   * This function is triggered when the "Reset" button is clicked.
   *
   * @function
   * @returns {void}
   */
  const handleReset = () => {
    handleClear();
    setUseUnderscore(false);
    setRemoveNumbers(false);
    setUseLowercase(true);
    setUseLitinize(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <SlugifyInput
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
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
        />

        {output && <SlugifyOutput output={output} />}
      </div>

      <div className="mt-16">
        <SlugifyInfo />
      </div>
    </>
  );
};

export default SlugifyTool;
