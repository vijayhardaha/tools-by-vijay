"use client";

import PropTypes from "prop-types";
import { LuCheck as CheckIcon, LuX as XIcon } from "react-icons/lu";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/utils/classNameUtils";

/**
 * Component to display password strength analysis results
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.strength - The password strength evaluation results
 * @param {number} props.strength.score - Score from 0-4 indicating password strength
 * @param {Object} props.strength.feedback - Feedback on the password
 * @param {string} props.strength.feedback.warning - Warning message about password weakness
 * @param {string[]} props.strength.feedback.suggestions - List of suggestions to improve the password
 * @param {Object} props.strength.criteria - Password criteria evaluation
 * @param {boolean} props.strength.criteria.length - If password meets minimum length
 * @param {boolean} props.strength.criteria.hasUppercase - If password contains uppercase letters
 * @param {boolean} props.strength.criteria.hasLowercase - If password contains lowercase letters
 * @param {boolean} props.strength.criteria.hasDigit - If password contains numbers
 * @param {boolean} props.strength.criteria.hasSpecialChar - If password contains special characters
 * @param {string} props.password - The password being evaluated
 * @returns {JSX.Element} The rendered password strength analysis
 */
const PasswordStrengthCheckerOutput = ({ strength, password }) => {
  // Strength level names
  const strengthLevels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  // Colors for different strength levels
  const strengthColors = [
    "bg-red-500", // Very Weak
    "bg-orange-500", // Weak
    "bg-yellow-500", // Fair
    "bg-green-400", // Good
    "bg-green-600", // Strong
  ];

  // Text colors for strength levels
  const strengthTextColors = [
    "text-red-500", // Very Weak
    "text-orange-500", // Weak
    "text-yellow-500", // Fair
    "text-green-400", // Good
    "text-green-600", // Strong
  ];

  if (!password) return;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Password Strength Results</CardTitle>
        <CardDescription>How secure is your password?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Strength</span>
              <span
                className={cn(
                  "text-sm font-bold",
                  strengthTextColors[strength.score]
                )}
              >
                {strengthLevels[strength.score]}
              </span>
            </div>
            <Progress
              value={(strength.score + 1) * 20}
              className="h-2"
              indicatorClassName={strengthColors[strength.score]}
            />
          </div>

          {strength.feedback.warning && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-500">
              <p className="text-sm font-medium">{strength.feedback.warning}</p>
            </div>
          )}

          {strength.feedback.suggestions.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-bold">Suggestions to improve:</h3>
              <ul className="list-inside list-disc space-y-1 pl-2 text-sm">
                {strength.feedback.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="text-sm font-bold">Password criteria:</h3>
            <div className="space-y-1 pl-2">
              <div className="flex items-center gap-2">
                {strength.criteria.length ? (
                  <CheckIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <XIcon className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">At least 8 characters</span>
              </div>
              <div className="flex items-center gap-2">
                {strength.criteria.hasUppercase ? (
                  <CheckIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <XIcon className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">Contains uppercase letters</span>
              </div>
              <div className="flex items-center gap-2">
                {strength.criteria.hasLowercase ? (
                  <CheckIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <XIcon className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">Contains lowercase letters</span>
              </div>
              <div className="flex items-center gap-2">
                {strength.criteria.hasDigit ? (
                  <CheckIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <XIcon className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">Contains numbers</span>
              </div>
              <div className="flex items-center gap-2">
                {strength.criteria.hasSpecialChar ? (
                  <CheckIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <XIcon className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">Contains special characters</span>
              </div>
            </div>
          </div>
        </>
      </CardContent>
    </Card>
  );
};

PasswordStrengthCheckerOutput.propTypes = {
  strength: PropTypes.shape({
    score: PropTypes.number.isRequired,
    feedback: PropTypes.shape({
      warning: PropTypes.string.isRequired,
      suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    criteria: PropTypes.shape({
      length: PropTypes.bool.isRequired,
      hasUppercase: PropTypes.bool.isRequired,
      hasLowercase: PropTypes.bool.isRequired,
      hasDigit: PropTypes.bool.isRequired,
      hasSpecialChar: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  password: PropTypes.string.isRequired,
};

export default PasswordStrengthCheckerOutput;
