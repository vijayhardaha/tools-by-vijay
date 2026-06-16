'use client';

import type { JSX } from 'react';
import { useEffect, useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * A tool for generating random usernames.
 *
 * @returns {JSX.Element} The RandomUsernameGeneratorTool component.
 */
const adjectives = [
  'Cool',
  'Fast',
  'Smart',
  'Brave',
  'Happy',
  'Lucky',
  'Clever',
  'Strong',
  'Bold',
  'Bright',
  'Fierce',
  'Gentle',
  'Kind',
  'Loyal',
  'Quick',
  'Sharp',
  'Witty',
  'Zesty',
  'Charming',
  'Daring',
  'Energetic',
  'Fearless',
  'Graceful',
  'Humble',
  'Jolly',
  'Mighty',
  'Noble',
  'Playful',
  'Radiant',
  'Savvy',
  'Vivid',
];

const nouns = [
  'Tiger',
  'Eagle',
  'Shark',
  'Wizard',
  'Ninja',
  'Hero',
  'Phoenix',
  'Dragon',
  'Knight',
  'Samurai',
  'Pirate',
  'Ranger',
  'Warrior',
  'Falcon',
  'Wolf',
  'Panther',
  'Lion',
  'Bear',
  'Hawk',
  'Cheetah',
  'Leopard',
  'Fox',
  'Dolphin',
  'Stallion',
  'Viper',
  'Cobra',
  'Jaguar',
  'Otter',
  'Penguin',
  'Raven',
  'Swan',
];

/**
 * A tool for generating random usernames.
 *
 * @returns {JSX.Element} The RandomUsernameGeneratorTool component.
 */
export function RandomUsernameGenerator(): JSX.Element {
  const [count, setCount] = useState<number>(1);
  const [output, setOutput] = useState<string[]>([]);

  // Derive error state from count
  const error = count <= 0 || count > 200 ? 'Please enter a number between 1 and 200.' : '';

  /**
   * Generates random usernames whenever count changes.
   * Uses useEffect because Math.random() is impure.
   */
  useEffect(() => {
    if (count <= 0 || count > 200) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Math.random() is impure, must use useEffect
      setOutput([]);
      return;
    }

    const generated = Array.from({ length: count }, () => {
      const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const noun = nouns[Math.floor(Math.random() * nouns.length)];
      const number = Math.floor(Math.random() * 1000);
      return `${adjective}${noun}${number}`;
    });

    setOutput(generated);
  }, [count]);

  /**
   * Clears the output and error states.
   */
  const handleClear = (): void => {
    setOutput([]);
  };

  /**
   * Loads an example with predefined input values and options.
   *
   * @param {object} values - The example values.
   *
   * @returns {void}
   */
  const handleExample = (values: Record<string, any>): void => {
    if ('count' in values) {
      setCount(values.count);
    }
  };

  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <InputBlock count={count} setCount={setCount} onClear={handleClear} error={error} />
        <ExampleBlock onExample={handleExample} />

        <OutputBlock output={output} />
      </div>

      <InfoBlock />
    </>
  );
}
