'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import latinize from 'latinize';
import slugify from 'slugify';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Main component for the Slugify Tool.
 *
 * @returns {JSX.Element} The complete Slugify Tool interface.
 */
export function Slugify(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [useUnderscore, setUseUnderscore] = useState<boolean>(false);
  const [removeNumbers, setRemoveNumbers] = useState<boolean>(false);
  const [useLowercase, setUseLowercase] = useState<boolean>(true);
  const [useLitinize, setUseLitinize] = useState<boolean>(true);

  // Compute slug reactively whenever input or options change
  const output = useMemo<string>(() => {
    if (!input) return '';

    let processedText = input;

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
  }, [input, useUnderscore, removeNumbers, useLowercase, useLitinize]);

  const handleClear = (): void => {
    setInput('');
  };

  const handleReset = (): void => {
    handleClear();
    setUseUnderscore(false);
    setRemoveNumbers(false);
    setUseLowercase(true);
    setUseLitinize(true);
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
    if ('useUnderscore' in values) {
      setUseUnderscore(values.useUnderscore);
    }
    if ('removeNumbers' in values) {
      setRemoveNumbers(values.removeNumbers);
    }
    if ('useLowercase' in values) {
      setUseLowercase(values.useLowercase);
    }
    if ('useLitinize' in values) {
      setUseLitinize(values.useLitinize);
    }
  };

  return (
    <>
      <div className="space-y-6 md:space-y-8">
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
          onClear={handleClear}
          onReset={handleReset}
        />

        <ExampleBlock onExample={handleExample} />

        <OutputBlock output={output} />
      </div>

      <InfoBlock />
    </>
  );
}
