'use client';

import type { JSX } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Alert } from '@/components/ui/alert';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the TextToPhpVariablesInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {(value: string) => void} setInput - Callback to update the input
 * @property {string} variableCase - The selected variable naming convention
 * @property {(value: string) => void} setVariableCase - Callback to update naming convention
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset all options
 * @property {string} [error] - Current error message, if any
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  variableCase: string;
  setVariableCase: (value: string) => void;
  onClear: () => void;
  onReset: () => void;
  error?: string;
}

/**
 * Input component for the Text to PHP Variables tool.
 *
 * @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered input component.
 */
export function InputBlock({
  input,
  setInput,
  variableCase,
  setVariableCase,
  onClear,
  onReset,
  error,
}: InputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Text Input"
          desc="Paste multiline text to generate PHP variables"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:gap-6">
          <Textarea
            id="text-input"
            placeholder={`Item 1\nItem 2\nItem 3`}
            rows={5}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Select
            id="variable-case"
            value={variableCase}
            onValueChange={setVariableCase}
            options={[
              { value: 'camelCase', label: 'Camel Case' },
              { value: 'PascalCase', label: 'Pascal Case' },
              { value: 'snake_case', label: 'Snake Case' },
              { value: 'SCREAMING_SNAKE_CASE', label: 'Screaming Snake Case' },
              { value: 'flatcase', label: 'Flat Case' },
              { value: 'UPPERCASE', label: 'Uppercase' },
            ]}
          />

          {error && <Alert variant="danger" title="Error" text={error} />}
        </div>
      </CardContent>
    </Card>
  );
}
