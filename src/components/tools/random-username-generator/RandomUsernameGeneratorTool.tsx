"use client";

import { useState } from "react";

import UsernameGeneratorInfo from "./RandomUsernameGeneratorInfo";
import UsernameGeneratorInput from "./RandomUsernameGeneratorInput";
import UsernameGeneratorOutput from "./RandomUsernameGeneratorOutput";

/**
 * A tool for generating random usernames.
 * @returns The RandomUsernameGeneratorTool component.
 */
const RandomUsernameGeneratorTool: React.FC = (): React.JSX.Element => {
  const [count, setCount] = useState<number>(1);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  /**
   * Generates random usernames.
   */
  const generateUsernames = (): void => {
    setError("");

    if (count <= 0 || count > 200) {
      setError("Please enter a number between 1 and 200.");
      setOutput([]);
      return;
    }

    const adjectives = [
      "Cool",
      "Fast",
      "Smart",
      "Brave",
      "Happy",
      "Lucky",
      "Clever",
      "Strong",
      "Bold",
      "Bright",
      "Fierce",
      "Gentle",
      "Kind",
      "Loyal",
      "Quick",
      "Sharp",
      "Witty",
      "Zesty",
      "Charming",
      "Daring",
      "Energetic",
      "Fearless",
      "Graceful",
      "Humble",
      "Jolly",
      "Mighty",
      "Noble",
      "Playful",
      "Radiant",
      "Savvy",
      "Vivid",
    ];
    const nouns = [
      "Tiger",
      "Eagle",
      "Shark",
      "Wizard",
      "Ninja",
      "Hero",
      "Phoenix",
      "Dragon",
      "Knight",
      "Samurai",
      "Pirate",
      "Ranger",
      "Warrior",
      "Falcon",
      "Wolf",
      "Panther",
      "Lion",
      "Bear",
      "Hawk",
      "Cheetah",
      "Leopard",
      "Fox",
      "Dolphin",
      "Stallion",
      "Viper",
      "Cobra",
      "Jaguar",
      "Otter",
      "Penguin",
      "Raven",
      "Swan",
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
    setError("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <UsernameGeneratorInput
          count={count}
          setCount={setCount}
          onGenerate={generateUsernames}
          onClear={handleClear}
          error={error}
        />
        {output.length > 0 && <UsernameGeneratorOutput output={output} />}
      </div>

      <div className="mt-16">
        <UsernameGeneratorInfo />
      </div>
    </>
  );
};

export default RandomUsernameGeneratorTool;
