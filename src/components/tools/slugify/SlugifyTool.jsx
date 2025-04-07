"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import SlugifyInfo from "./SlugifyInfo";
import SlugifyInput from "./SlugifyInput";
import SlugifyOutput from "./SlugifyOutput";

const SlugifyTool = () => {
  const [input, setInput] = useState("");
  const [useUnderscore, setUseUnderscore] = useState(false);
  const [removeNumbers, setRemoveNumbers] = useState(false);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useLitinize, setUseLitinize] = useState(true);
  const [generatedOutput, setGeneratedOutput] = useState("");

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

  const handleGenerate = () => {
    // Generate the slug only when the button is clicked
    const slug = generateSlug(input);
    setGeneratedOutput(slug);
  };

  const handleClear = () => {
    setInput("");
    setGeneratedOutput("");
  };

  const handleReset = () => {
    setInput("");
    setGeneratedOutput("");
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
          onGenerate={handleGenerate}
          onClear={handleClear}
          onReset={handleReset}
        />
        <SlugifyOutput output={generatedOutput} />
      </div>

      <div className="mt-16">
        <SlugifyInfo />
      </div>
    </>
  );
};

export default SlugifyTool;
