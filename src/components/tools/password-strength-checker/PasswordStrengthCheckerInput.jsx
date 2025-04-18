"use client";

import { useState } from "react";

import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip } from "@/components/ui/tooltip";

/**
 * Password Strength Checker Input Component
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.password - The current password value
 * @param {Function} props.onPasswordChange - Callback function when password changes
 * @param {Function} props.onClear - Callback function to clear the password
 * @returns {JSX.Element} Password input with visibility toggle and clear button
 */
const PasswordStrengthCheckerInput = ({ password, onPasswordChange, onClear }) => {
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Toggles password visibility between plain text and hidden
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /**
   * Handles password input changes
   *
   * @param {ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleChange = (e) => {
    onPasswordChange(e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Check Password Strength</CardTitle>
        <CardDescription>Enter a password to check its strength</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password to check"
                value={password}
                onChange={handleChange}
                className="pr-10 font-mono text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center justify-center">
                <Tooltip text={showPassword ? "Hide password" : "Show password"}>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center p-0 text-gray-400 hover:text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>

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
  onPasswordChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default PasswordStrengthCheckerInput;
