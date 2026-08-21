'use client';

import type { JSX } from 'react';
import { useEffect, useState } from 'react';

import { createExampleHandler } from '@/components/tool/createExampleHandler';
import { ToolExampleBlock } from '@/components/tool/ToolExampleBlock';

import { COUNTRIES } from './countries';
import { EXAMPLES } from './examples';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * A tool for generating random country names.
 *
 * @returns {JSX.Element} The CountryNameGeneratorTool component.
 */
export function CountryNameGenerator(): JSX.Element {
  const [count, setCount] = useState<number>(1);
  const [output, setOutput] = useState<string[]>([]);
  const [regen, setRegen] = useState<number>(0);

  // Derive error state from count
  const error = count <= 0 || count > 200 ? 'Please enter a number between 1 and 200.' : '';

  /**
   * Generates random country names whenever count or the regen counter changes.
   * Uses useEffect because Math.random() is impure.
   */
  useEffect(() => {
    if (count <= 0 || count > 200) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Math.random() is impure, must use useEffect
      setOutput([]);
      return;
    }

    const generated = Array.from({ length: count }, () => COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]);

    setOutput(generated);
  }, [count, regen]);

  /**
   * Generates a fresh set of random country names.
   */
  const handleRandom = (): void => {
    setRegen((prev) => prev + 1);
  };

  /**
   * Clears the output and error states.
   */
  const handleClear = (): void => {
    setOutput([]);
  };

  const handleExample = createExampleHandler({ count: setCount });

  return (
    <>
      <div className="space-y-6">
        <ToolExampleBlock examples={EXAMPLES} onExample={handleExample} />

        <InputBlock count={count} setCount={setCount} onRandom={handleRandom} onClear={handleClear} error={error} />

        <OutputBlock output={output} />
      </div>

      <InfoBlock />
    </>
  );
}
