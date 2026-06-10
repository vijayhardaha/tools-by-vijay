'use client';

import type { JSX, ChangeEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

/**
 * Interface for the PasswordStrengthCheckerInput component props.
 */
interface PasswordStrengthCheckerInputProps {
  password: string;
  onSubmit: (password: string) => void;
  onClear: () => void;
}

/**
 * Password Strength Checker Input Component
 *
 *  @param {PasswordStrengthCheckerInputProps} props - Component props
 *
 * @returns {JSX.Element} Password input with visibility toggle and clear button
 */
const PasswordStrengthCheckerInput = ({
  password,
  onSubmit,
  onClear,
}: PasswordStrengthCheckerInputProps): JSX.Element => {
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
        <CardTitle>Check Password Strength</CardTitle>
        <CardDescription>Enter a password to check its strength</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <Input
            id="password"
            type="text"
            placeholder="Enter your password to check"
            value={password}
            onChange={handleChange}
          />

          <div className="flex justify-start gap-2">
            <Button type="button" variant="destructive" onClick={onClear}>
              Clear
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PasswordStrengthCheckerInput;
