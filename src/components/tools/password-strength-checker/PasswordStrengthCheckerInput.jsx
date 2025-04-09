"use client";

import { useState } from "react";

import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordStrengthCheckerInput = ({
  password,
  onPasswordChange,
  onClear,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    onPasswordChange(e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Check Password Strength</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Enter a password to check its strength
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password to check"
                value={password}
                onChange={handleChange}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <Button
              type="button"
              variant="destructive"
              size="lg"
              onClick={onClear}
            >
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
