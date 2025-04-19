"use client";

import { useState } from "react";

import CssInlinerInfo from "./CssInlinerInfo";
import CssInlinerInput from "./CssInlinerInput";
import CssInlinerOutput from "./CssInlinerOutput";

const CssInlinerTool = () => {
  const [htmlInput, setHtmlInput] = useState("");
  const [cssInput, setCssInput] = useState("");
  const [output, setOutput] = useState("");

  /**
   * Handles the inlining of CSS into HTML.
   */
  const handleInlineCss = () => {
    // Example logic for inlining CSS (replace with actual implementation)
    const inlinedHtml = `<style>${cssInput}</style>\n${htmlInput}`;
    setOutput(inlinedHtml);
  };

  /**
   * Clears all input and output fields.
   */
  const handleClear = () => {
    setHtmlInput("");
    setCssInput("");
    setOutput("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <CssInlinerInput
          htmlInput={htmlInput}
          setHtmlInput={setHtmlInput}
          cssInput={cssInput}
          setCssInput={setCssInput}
          onInlineCss={handleInlineCss}
          onClear={handleClear}
        />
        {output && <CssInlinerOutput output={output} />}
      </div>

      <div className="mt-16">
        <CssInlinerInfo />
      </div>
    </>
  );
};

export default CssInlinerTool;
