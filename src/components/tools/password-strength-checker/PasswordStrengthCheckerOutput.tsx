"use client";

import React from "react";

import { LuCheck as CheckIcon, LuX as XIcon } from "react-icons/lu";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/utils/classNameUtils";

/**
 * Interface for the password strength analysis result.
 */
interface PasswordStrength {
  score: number;
  feedback: {
    warning: string;
    suggestions: string[];
  };
  criteria: {
    length: boolean;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasDigit: boolean;
    hasSpecialChar: boolean;
  };
}

/**
 * Interface for the PasswordStrengthCheckerOutput component props.
 */
interface PasswordStrengthCheckerOutputProps {
  strength: PasswordStrength;
}

/**
 * Helper function to render criteria with icons
 *
 * @param {boolean} isMet - Indicates if the criteria is met
 * @param {string} label - The label for the criteria
 * @returns {React.JSX.Element} - A div containing the icon and label
 */
const renderCriteria = (isMet: boolean, label: string): React.JSX.Element => (
  <div className="flex items-center gap-2">
    {isMet ? (
      <CheckIcon className="h-4 w-4 text-green-500" />
    ) : (
      <XIcon className="h-4 w-4 text-red-500" />
    )}
    <span className="text-sm">{label}</span>
  </div>
);

/**
 * Component to display password strength analysis results
 *
 * @component
 * @param {PasswordStrengthCheckerOutputProps} props - Component props
 * @returns {React.JSX.Element} The rendered password strength analysis
 */
const PasswordStrengthCheckerOutput: React.FC<PasswordStrengthCheckerOutputProps> = ({
  strength,
}: PasswordStrengthCheckerOutputProps): React.JSX.Element => {
  // Strength level names
  const strengthLevels: string[] = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  // Colors for different strength levels
  const strengthColors: string[] = [
    "bg-red-500", // Very Weak
    "bg-orange-500", // Weak
    "bg-yellow-500", // Fair
    "bg-green-400", // Good
    "bg-green-600", // Strong
  ];

  // Text colors for strength levels
  const strengthTextColors: string[] = [
    "text-red-500", // Very Weak
    "text-orange-500", // Weak
    "text-yellow-500", // Fair
    "text-green-400", // Good
    "text-green-600", // Strong
  ];

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
              <span className={cn("text-sm font-bold", strengthTextColors[strength.score])}>
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
              {renderCriteria(strength.criteria.length, "At least 8 characters")}
              {renderCriteria(strength.criteria.hasUppercase, "Contains uppercase letters")}
              {renderCriteria(strength.criteria.hasLowercase, "Contains lowercase letters")}
              {renderCriteria(strength.criteria.hasDigit, "Contains numbers")}
              {renderCriteria(strength.criteria.hasSpecialChar, "Contains special characters")}
            </div>
          </div>
        </>
      </CardContent>
    </Card>
  );
};

export default PasswordStrengthCheckerOutput;
