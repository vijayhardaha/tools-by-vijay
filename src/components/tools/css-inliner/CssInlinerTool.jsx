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
   * Handles the inlining of CSS into HTML via API.
   */
  const handleInlineCss = async () => {
    try {
      const response = await fetch("/api/inline-css", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ html: htmlInput, css: cssInput }),
      });

      if (!response.ok) {
        throw new Error("Failed to inline CSS");
      }

      const data = await response.json();
      setOutput(data.formattedHtml);
    } catch (error) {
      console.error("Error inlining CSS:", error);
      setOutput("Error inlining CSS. Please check your input.");
    }
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
