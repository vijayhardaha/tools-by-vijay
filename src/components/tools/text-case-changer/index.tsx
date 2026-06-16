'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Type representing the various text case options available for transformation.
 */
type TextCase =
  | 'Sentence case'
  | 'lower case'
  | 'UPPER CASE'
  | 'Capitalized Case'
  | 'aLtErNaTiNg cAsE'
  | 'Title Case'
  | 'InVeRsE CaSe';

/**
 * Converts the given text to the selected text case.
 *
 * @param {string} text - The input text to be transformed
 * @param {TextCase} textCase - The target text case
 *
 * @returns {string} The transformed text in the selected case
 */
const convertToTextCase = (text: string, textCase: TextCase): string => {
  switch (textCase) {
    case 'Sentence case':
      return text.toLowerCase().replace(/(^\s*[a-z])|(\.\s*[a-z])/g, (match) => match.toUpperCase());
    case 'lower case':
      return text.toLowerCase();
    case 'UPPER CASE':
      return text.toUpperCase();
    case 'Capitalized Case':
      return text
        .toLowerCase()
        .split('\n')
        .map((line) =>
          line
            .split(/\s+/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        )
        .join('\n');
    case 'aLtErNaTiNg cAsE':
      return text
        .split('')
        .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
        .join('');
    case 'Title Case':
      return text
        .toLowerCase()
        .split('\n')
        .map((line) =>
          line
            .split(/\s+/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        )
        .join('\n');
    case 'InVeRsE CaSe':
      return text
        .split('')
        .map((char) => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()))
        .join('');
    default:
      return text;
  }
};

/**
 * A tool for changing the case of text input into various formats.
 *
 * @returns {JSX.Element} The rendered TextCaseChangerTool component.
 */
export function TextCaseChanger(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [textCase, setTextCase] = useState<TextCase>('Sentence case');

  // Derive error state from input — only shows when user typed content that's all whitespace
  const error = input.length > 0 && !input.trim() ? 'Please enter valid text content.' : '';

  /**
   * Computes the text case transformation reactively.
   */
  const output = useMemo<string>(() => {
    if (!input.trim()) return '';

    return convertToTextCase(input.trim(), textCase);
  }, [input, textCase]);

  /**
   * Clears the input, output, and error states.
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Resets the tool to its initial state, including the selected text case.
   */
  const handleReset = (): void => {
    handleClear();
    setTextCase('Sentence case');
  };

  /**
   * Loads an example with predefined input values and options.
   *
   * @param {object} values - The example values.
   *
   * @returns {void}
   */
  const handleExample = (values: Record<string, any>): void => {
    if ('input' in values) {
      setInput(values.input);
    }
    if ('textCase' in values) {
      setTextCase(values.textCase);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          textCase={textCase}
          setTextCase={(value: string) => setTextCase(value as TextCase)}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />
        <ExampleBlock onExample={handleExample} />

        <OutputBlock output={output} />
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
