"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import BulkSlugifyInfo from "./BulkSlugifyInfo";
import BulkSlugifyInput from "./BulkSlugifyInput";
import BulkSlugifyOutput from "./BulkSlugifyOutput";

const BulkSlugifyTool = () => {
  const [input, setInput] = useState("");
  const [useUnderscore, setUseUnderscore] = useState(false);
  const [removeNumbers, setRemoveNumbers] = useState(false);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useLitinize, setUseLitinize] = useState(true);
  const [generatedOutput, setGeneratedOutput] = useState("");

  const generateSlugs = (text) => {
    return text
      .split("\n")
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

  const handleGenerate = () => {
    const slugs = generateSlugs(input);
    setGeneratedOutput(slugs);
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
          onGenerate={handleGenerate}
          onClear={handleClear}
          onReset={handleReset}
        />
        <BulkSlugifyOutput output={generatedOutput} />
      </div>

      <div className="mt-16">
        <BulkSlugifyInfo />
      </div>
    </>
  );
};

export default BulkSlugifyTool;
