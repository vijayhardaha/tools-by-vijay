'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import latinize from 'latinize';
import slugify from 'slugify';

import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

type VariableCase = 'camelCase' | 'snake_case' | 'PascalCase' | 'SCREAMING_SNAKE_CASE' | 'flatcase' | 'UPPERCASE';

/**
 * Main component for the Text to PHP Variables tool.
 * Manages the state and functionality for converting multiline text to PHP variables.
 *
 * @returns {JSX.Element} The complete text to PHP variables tool with input options and output display.
 */
export function TextToPhpVariables(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [variableCase, setVariableCase] = useState<VariableCase>('snake_case');

  /**
   * Converts text to the selected variable case.
   *
   * @param {string} text - The input text to convert.
   * @param {VariableCase} caseType - The target variable case.
   *
   * @returns {string} The converted variable name.
   */
  const convertToVariableCase = (text: string, caseType: VariableCase): string => {
    const slug = slugify(latinize(text), { lower: true, strict: true, replacement: '_' });
    switch (caseType) {
      case 'camelCase':
        return slug.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      case 'PascalCase':
        return slug.replace(/(^|_)([a-z])/g, (_, __, letter) => letter.toUpperCase());
      case 'SCREAMING_SNAKE_CASE':
        return slug.toUpperCase();
      case 'flatcase':
        return slug.replace(/_/g, '');
      case 'UPPERCASE':
        return slug.replace(/_/g, '').toUpperCase();
      case 'snake_case':
      default:
        return slug;
    }
  };

  // Derive error state from input — only shows when there's content that's all whitespace
  const error = input.length > 0 && !input.trim() ? 'Please enter valid text content.' : '';

  /**
   * Computes PHP variables reactively.
   */
  const output = useMemo<string>(() => {
    if (!input.trim()) return '';

    const lines = input
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length === 0) return '';

    return lines.map((line) => `$${convertToVariableCase(line, variableCase)} = '';`).join('\n');
  }, [input, variableCase]);

  /**
   * Clears the input and output fields.
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Resets the input and output fields to their initial state.
   */
  const handleReset = (): void => {
    handleClear();
    setVariableCase('snake_case');
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          variableCase={variableCase}
          setVariableCase={(value) => setVariableCase(value as VariableCase)}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />
        <OutputBlock output={output} />
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
