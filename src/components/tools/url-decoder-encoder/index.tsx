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
 * A tool for encoding and decoding URLs. It provides input, output, and informational components.
 *
 * @returns {JSX.Element} The rendered URL Decoder/Encoder Tool component.
 */
export function UrlDecoderEncoder(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [isEncoding, setIsEncoding] = useState<boolean>(true);

  /**
   * Computes the encoded/decoded URL reactively.
   */
  const output = useMemo<string>(() => {
    if (!input) return '';
    try {
      return isEncoding ? encodeURIComponent(input) : decodeURIComponent(input);
    } catch {
      return '';
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
