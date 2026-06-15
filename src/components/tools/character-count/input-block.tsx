'use client';

import type { JSX } from 'react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the CharacterCountInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} text - The current text input
 * @property {(value: string) => void} setText - Callback to update the text input
 */
interface InputBlockProps {
  text: string;
  setText: (value: string) => void;
}

/**
 * Component for inputting text to analyze character count statistics.
 *
 * @param {InputBlockProps} props - Component props.
 *
 * @returns {JSX.Element} The rendered input form.
 */
export function InputBlock({ text, setText }: InputBlockProps): JSX.Element {
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
}
