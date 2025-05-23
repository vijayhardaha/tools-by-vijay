"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import SlugifyInfo from "./SlugifyInfo";
import SlugifyInput from "./SlugifyInput";
import SlugifyOutput from "./SlugifyOutput";

/**
 * Main component for the Slugify Tool.
 *
 * @returns {React.JSX.Element} The complete Slugify Tool interface.
 */
const SlugifyTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [useUnderscore, setUseUnderscore] = useState<boolean>(false);
  const [removeNumbers, setRemoveNumbers] = useState<boolean>(false);
  const [useLowercase, setUseLowercase] = useState<boolean>(true);
  const [useLitinize, setUseLitinize] = useState<boolean>(true);

  const generateSlug = (text: string): string => {
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
      replacement: useUnderscore ? "_" : "-",
      remove: removeNumbers ? /[0-9]/g : undefined,
      lower: useLowercase,
      strict: true,
    });

    return slug;
  };

  const handleSubmit = (): void => {
    const slug = generateSlug(input);
    setOutput(slug);
  };

  const handleClear = (): void => {
    setInput("");
    setOutput("");
  };

  const handleReset = (): void => {
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
