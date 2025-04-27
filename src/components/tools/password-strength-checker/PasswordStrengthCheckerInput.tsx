"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/**
 * Password Strength Checker Input Component
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.password - The current password value
 * @param {Function} props.onSubmit - Callback function when password changes
 * @param {Function} props.onClear - Callback function to clear the password
 * @returns {JSX.Element} Password input with visibility toggle and clear button
 */
const PasswordStrengthCheckerInput = ({ password, onSubmit, onClear }) => {
  /**
   * Handles password input changes
   *
   * @param {ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleChange = (e) => {
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

PasswordStrengthCheckerInput.propTypes = {
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default PasswordStrengthCheckerInput;
