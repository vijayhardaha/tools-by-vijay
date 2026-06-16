'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Main component for the Replace Quotes tool.
 * Manages the state and functionality for replacing quotes in text.
 *
 * @returns {JSX.Element} The complete Replace Quotes tool with input options, output display, and information
 */
export function ReplaceQuotes(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [replaceType, setReplaceType] = useState<'simple-to-curly' | 'curly-to-simple'>('simple-to-curly');
  const [replaceApostrophes, setReplaceApostrophes] = useState<boolean>(true);
  const [replaceStandaloneQuotes, setReplaceStandaloneQuotes] = useState<boolean>(false);

  /**
   * Computes the quote replacement reactively.
   */
  const output = useMemo<string>(() => {
    if (!input) return '';

    let replacedText: string = input;

    switch (replaceType) {
      case 'simple-to-curly':
        if (replaceApostrophes) {
          replacedText = replacedText
            // Replace apostrophes in contractions (e.g., isn't -> isn't)
            .replace(/\b(\w+)'(\w+)\b/g, '$1\u2019$2');
        }

        replacedText = replacedText
          // Replace double quotes used for quoting (e.g., "text" -> \u201ctext\u201d)
          .replace(/"([^"]*)"/g, '\u201c$1\u201d')
          // Replace single quotes used for quoting (e.g., 'text' -> \u2018text\u2019)
          .replace(/'([^']*)'/g, '\u2018$1\u2019');

        if (replaceStandaloneQuotes) {
          replacedText = replacedText
            // Replace remaining standalone double quotes
            .replace(/"/g, '\u201c')
            // Replace remaining standalone single quotes
            .replace(/'/g, '\u2018');
        }
        break;
      case 'curly-to-simple':
        replacedText = replacedText
          // Replace curly single quotes with straight quotes
          .replace(/[\u2018\u2019]/g, "'")
          // Replace curly double quotes with straight quotes
          .replace(/[\u201c\u201d]/g, '"');
        break;
      default:
        return input;
    }

    return replacedText;
  }, [input, replaceType, replaceApostrophes, replaceStandaloneQuotes]);

  /**
   * Clears the output while keeping the input and other states intact
   *
   * @returns {void}
   *
   * @function
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Resets all input fields, output, and options
   *
   * @returns {void}
   *
   * @function
   */
  const handleReset = (): void => {
    handleClear();
    setReplaceType('simple-to-curly');
    setReplaceApostrophes(true);
    setReplaceStandaloneQuotes(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          replaceType={replaceType}
          setReplaceType={setReplaceType}
          replaceApostrophes={replaceApostrophes}
          setReplaceApostrophes={setReplaceApostrophes}
          replaceStandaloneQuotes={replaceStandaloneQuotes}
          setReplaceStandaloneQuotes={setReplaceStandaloneQuotes}
          onReset={handleReset}
          onClear={handleClear}
        />

        <OutputBlock output={output} />
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
