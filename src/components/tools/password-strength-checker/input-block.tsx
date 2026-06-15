'use client';

import type { JSX, ChangeEvent } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

/**
 * Interface for the PasswordStrengthCheckerInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} password - The current password input value
 * @property {(password: string) => void} onSubmit - Callback triggered when password changes
 * @property {() => void} onClear - Callback to clear the input
 */
interface InputBlockProps {
  password: string;
  onSubmit: (password: string) => void;
  onClear: () => void;
}

/**
 * Password Strength Checker Input Component
 *
 *  @param {InputBlockProps} props - Component props
 *
 * @returns {JSX.Element} Password input with visibility toggle and clear button
 */
export function InputBlock({ password, onSubmit, onClear }: InputBlockProps): JSX.Element {
  /**
   * Handles password input changes
   *
   * @param {ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onSubmit(e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Check Password Strength"
          desc="Enter a password to check its strength"
          onClear={onClear}
        />
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4 md:gap-6">
          <Input
            id="password"
            type="text"
            placeholder="Enter your password to check"
            value={password}
            onChange={handleChange}
          />
        </form>
      </CardContent>
    </Card>
  );
}
