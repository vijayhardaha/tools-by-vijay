'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import { createExampleHandler } from '@/components/tool/createExampleHandler';
import { ToolExampleBlock } from '@/components/tool/ToolExampleBlock';

import { EXAMPLES } from './examples';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * A tool for encoding and decoding Base64 strings. It provides input, output, and informational components.
 *
 * @returns {JSX.Element} The rendered Base64 Encode/Decode Tool component.
 */
export function Base64EncodeDecode(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [isEncoding, setIsEncoding] = useState<boolean>(true);

  /**
   * Computes the base64 encoded/decoded output reactively.
   */
  const output = useMemo<string>(() => {
    if (!input) return '';
    try {
      return isEncoding ? btoa(input) : atob(input);
    } catch {
      return 'Error: Invalid input for the selected mode.';
    }
  }, [input, isEncoding]);

  /**
   * Clears the input and output fields.
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Resets the tool to its initial state, clearing input/output and setting mode to encoding.
   */
  const handleReset = (): void => {
    handleClear();
    setIsEncoding(true);
  };

  const handleExample = createExampleHandler({ input: setInput, isEncoding: setIsEncoding });

  return (
    <>
      <div className="space-y-6">
        <ToolExampleBlock examples={EXAMPLES} onExample={handleExample} />

        <InputBlock
          input={input}
          setInput={setInput}
          isEncoding={isEncoding}
          setIsEncoding={setIsEncoding}
          onClear={handleClear}
          onReset={handleReset}
        />

        <OutputBlock output={output} />
      </div>

      <InfoBlock />
    </>
  );
}
