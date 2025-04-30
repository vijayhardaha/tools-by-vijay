"use client";

import React, { useState } from "react";

import CharacterCountInfo from "./CharacterCountInfo";
import CharacterCountInput from "./CharacterCountInput";
import CharacterCountOutput from "./CharacterCountOutput";

/**
 * Main component for the Character Count tool.
 * Manages the state and functionality for analyzing text statistics.
 *
 * @component
 * @returns {JSX.Element} The complete Character Count tool with input options, output display, and information.
 */
const CharacterCountTool: React.FC = (): React.JSX.Element => {
  const [text, setText] = useState<string>("");

  /**
   * Calculates text statistics based on the input string.
   *
   * @param {string} input - The input text.
   * @returns {Object} An object containing text statistics.
   */
  const calculateStats = (
    input: string
  ): {
    characters: number;
    words: number;
    sentences: number;
    paragraphs: number;
    spaces: number;
  } => {
    const characters = input.length;
    const words = input.trim().split(/\s+/).filter(Boolean).length;
    const sentences = input.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = input.split(/\n+/).filter(Boolean).length;
    const spaces = (input.match(/\s/g) || []).length;

    return { characters, words, sentences, paragraphs, spaces };
  };

  const stats = calculateStats(text);

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <CharacterCountInput text={text} setText={setText} />
        <CharacterCountOutput stats={stats} />
      </div>

      <div className="mt-16">
        <CharacterCountInfo />
      </div>
    </>
  );
};

export default CharacterCountTool;
