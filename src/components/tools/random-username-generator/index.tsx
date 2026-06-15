'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * A tool for generating random usernames.
 *
 * @returns {JSX.Element} The RandomUsernameGeneratorTool component.
 */
export function RandomUsernameGenerator(): JSX.Element {
  const [count, setCount] = useState<number>(1);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  /**
   * Generates random usernames.
   */
  const generateUsernames = (): void => {
    setError('');

    if (count <= 0 || count > 200) {
      setError('Please enter a number between 1 and 200.');
      setOutput([]);
      return;
    }

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

    const generated = Array.from({ length: count }, () => {
      const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const noun = nouns[Math.floor(Math.random() * nouns.length)];
      const number = Math.floor(Math.random() * 1000);
      return `${adjective}${noun}${number}`;
    });

    setOutput(generated);
  };

  /**
   * Clears the output and error states.
   */
  const handleClear = (): void => {
    setOutput([]);
    setError('');
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          count={count}
          setCount={setCount}
          onGenerate={generateUsernames}
          onClear={handleClear}
          error={error}
        />
        {output.length > 0 && <OutputBlock output={output} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
