"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface CharacterCountInputProps {
  text: string;
  setText: (value: string) => void;
}

/**
 * Component for inputting text to analyze character count statistics.
 *
 * @param {CharacterCountInputProps} props - Component props.
 * @returns {React.JSX.Element} The rendered input form.
 */
const CharacterCountInput: React.FC<CharacterCountInputProps> = ({
  text,
  setText,
}: CharacterCountInputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Input</CardTitle>
        <CardDescription>Paste or type your text to analyze statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          rows={10}
          className="w-full"
          aria-label="Text input for character count tool"
        />
      </CardContent>
    </Card>
  );
};

export default CharacterCountInput;
