'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import latinize from 'latinize';
import slugify from 'slugify';

import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Main component for the Bulk Slugify Tool
 *
 * This component manages the state and functionality of the bulk slugify tool,
 * allowing users to convert multiple text strings into URL-friendly slugs
 * with various configuration options.
 *
 * @returns {JSX.Element} The complete Bulk Slugify Tool interface
 */
export function BulkSlugify(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [useUnderscore, setUseUnderscore] = useState<boolean>(false);
  const [removeNumbers, setRemoveNumbers] = useState<boolean>(false);
  const [useLowercase, setUseLowercase] = useState<boolean>(true);
  const [useLitinize, setUseLitinize] = useState<boolean>(true);
  const [keepEmptyLines, setKeepEmptyLines] = useState<boolean>(false);

  /**
   * Computes slugs reactively whenever input or options change
   */
  const output = useMemo<string>(() => {
    if (!input) return '';

    return input
      .split('\n')
      .filter((line) => keepEmptyLines || line.trim() !== '')
      .map((line) => {
        let processedText = line;

        if (useLitinize) {
          processedText = latinize(processedText);
        }

        if (useLowercase) {
          processedText = processedText.toLowerCase();
        }

        return slugify(processedText, {
          replacement: useUnderscore ? '_' : '-',
          remove: removeNumbers ? /[0-9]/g : undefined,
          lower: useLowercase,
          strict: true,
        });
      })
      .join('\n');
  }, [input, useUnderscore, removeNumbers, useLowercase, useLitinize, keepEmptyLines]);

  /**
   * Clears the input and output fields
   */
  const handleClear = () => {
    setInput('');
  };

  /**
   * Resets all form fields and options to their default values
   */
  const handleReset = () => {
    handleClear();
    setUseUnderscore(false);
    setRemoveNumbers(false);
    setUseLowercase(true);
    setUseLitinize(true);
    setKeepEmptyLines(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
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
          keepEmptyLines={keepEmptyLines}
          setKeepEmptyLines={setKeepEmptyLines}
          onClear={handleClear}
          onReset={handleReset}
        />

        <OutputBlock output={output} />
      </div>

      <InfoBlock />
    </>
  );
}
