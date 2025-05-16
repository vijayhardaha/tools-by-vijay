"use client";

import React, { useState } from "react";

import PxToRemInfo from "./PxToRemInfo";
import PxToRemInput from "./PxToRemInput";
import PxToRemOutput from "./PxToRemOutput";

/**
 * Main component for the Px to Rem Converter tool.
 * Manages the state and functionality for converting px to rem.
 *
 * @component
 * @returns {React.JSX.Element} The complete Px to Rem Converter tool with input options, output display, and information.
 */
const PxToRemConverterTool: React.FC = (): React.JSX.Element => {
  const [pxValue, setPxValue] = useState<string>("");
  const [baseFontSize, setBaseFontSize] = useState<number>(16);

  /**
   * Converts px to rem based on the base font size.
   *
   * @param {string} px - The pixel value.
   * @param {number} base - The base font size.
   * @returns {string} The calculated rem value.
   */
  const calculateRem = (px: string, base: number): string => {
    const pxNumber = parseFloat(px);
    return !isNaN(pxNumber) && base > 0 ? (pxNumber / base).toFixed(2) : "";
  };

  const remValue = calculateRem(pxValue, baseFontSize);

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <PxToRemInput
          pxValue={pxValue}
          setPxValue={setPxValue}
          baseFontSize={baseFontSize}
          setBaseFontSize={setBaseFontSize}
        />
        <PxToRemOutput remValue={remValue} />
      </div>

      <div className="mt-16">
        <PxToRemInfo />
      </div>
    </>
  );
};

export default PxToRemConverterTool;
