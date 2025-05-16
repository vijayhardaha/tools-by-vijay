"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/**
 * Interface for the PasswordStrengthCheckerInput component props.
 */
interface IPasswordStrengthCheckerInputProps {
  password: string;
  onSubmit: (password: string) => void;
  onClear: () => void;
}

/**
 * Password Strength Checker Input Component
 *
 * @component
 * @param {IPasswordStrengthCheckerInputProps} props - Component props
 * @returns {React.JSX.Element} Password input with visibility toggle and clear button
 */
const PasswordStrengthCheckerInput: React.FC<IPasswordStrengthCheckerInputProps> = ({
  password,
  onSubmit,
  onClear,
}: IPasswordStrengthCheckerInputProps): React.JSX.Element => {
  /**
   * Handles password input changes
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
