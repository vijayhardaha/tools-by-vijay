import React from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CharacterCountOutputProps {
  stats: {
    characters: number;
    words: number;
    sentences: number;
    paragraphs: number;
    spaces: number;
  };
}

/**
 * Displays the calculated text statistics.
 *
 * @param {CharacterCountOutputProps} props - Component props.
 * @returns {React.JSX.Element} The rendered card with text statistics.
 */
const CharacterCountOutput: React.FC<CharacterCountOutputProps> = ({
  stats,
}: CharacterCountOutputProps): React.JSX.Element => {
  /**
   * Renders a code block with specific styling.
   *
   * @param {string|number} code - The code to be displayed.
   * @returns {React.JSX.Element} The rendered code block.
   */
  const codeBlock = (code: string | number): React.JSX.Element | null =>
    typeof code === "string" || typeof code === "number" ? (
      <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">{code}</code>
    ) : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Characters:</strong> {codeBlock(stats.characters)}
          </div>
          <div>
            <strong>Words:</strong> {codeBlock(stats.words)}
          </div>
          <div>
            <strong>Sentences:</strong> {codeBlock(stats.sentences)}
          </div>
          <div>
            <strong>Paragraphs:</strong> {codeBlock(stats.paragraphs)}
          </div>
          <div>
            <strong>Spaces:</strong> {codeBlock(stats.spaces)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCountOutput;
