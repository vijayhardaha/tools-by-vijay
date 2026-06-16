'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Main component for the Character Count tool.
 * Manages the state and functionality for analyzing text statistics.
 *
 * @returns {JSX.Element} The complete Character Count tool with input options, output display, and information.
 */
export function CharacterCount(): JSX.Element {
  const [text, setText] = useState<string>('');

  /**
   * Calculates text statistics based on the input string.
   *
   * @param {string} input - The input text.
   *
   * @returns {object} An object containing text statistics.
   */
  const calculateStats = (
    input: string
  ): { characters: number; words: number; sentences: number; paragraphs: number; spaces: number } => {
    const characters = input.length;
    const words = input.trim().split(/\s+/).filter(Boolean).length;
    const sentences = input.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = input.split(/\n+/).filter(Boolean).length;
    const spaces = (input.match(/\s/g) || []).length;

    return { characters, words, sentences, paragraphs, spaces };
  };

  const stats = calculateStats(text);

  /**
   * Loads an example with predefined input values and options.
   *
   * @param {object} values - The example values.
   *
   * @returns {void}
   */
  const handleExample = (values: Record<string, any>): void => {
    if ('text' in values) {
      setText(values.text);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock text={text} setText={setText} />
        <ExampleBlock onExample={handleExample} />

        <OutputBlock stats={stats} />
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
