"use client";

import { useState } from "react";

import PasswordStrengthCheckerInfo from "./PasswordStrengthCheckerInfo";
import PasswordStrengthCheckerInput from "./PasswordStrengthCheckerInput";
import PasswordStrengthCheckerOutput from "./PasswordStrengthCheckerOutput";

/**
 * Password Strength Checker Tool Component
 *
 * Main component that handles password strength checking logic and renders
 * the input, output, and information components.
 *
 * @component
 * @returns {JSX.Element} Complete password strength checker tool interface
 */
const PasswordStrengthCheckerTool = () => {
  const [password, setPassword] = useState("");
  /**
   * @typedef {Object} StrengthCriteria
   * @property {boolean} length - Whether password meets minimum length requirement
   * @property {boolean} hasUppercase - Whether password contains uppercase letters
   * @property {boolean} hasLowercase - Whether password contains lowercase letters
   * @property {boolean} hasDigit - Whether password contains numbers
   * @property {boolean} hasSpecialChar - Whether password contains special characters
   *
   * @typedef {Object} Feedback
   * @property {string} warning - Warning message for weak passwords
   * @property {string[]} suggestions - Array of improvement suggestions
   *
   * @typedef {Object} PasswordStrength
   * @property {number} score - Password strength score (0-4)
   * @property {Feedback} feedback - User feedback about password strength
   * @property {StrengthCriteria} criteria - Specific criteria met by the password
   */
  const [strength, setStrength] = useState({
    score: 0,
    feedback: {
      warning: "",
      suggestions: [],
    },
    criteria: {
      length: false,
      hasUppercase: false,
      hasLowercase: false,
      hasDigit: false,
      hasSpecialChar: false,
    },
  });

  /**
   * Evaluates password strength based on various criteria
   *
   * @param {string} password - The password to analyze
   * @returns {PasswordStrength} Object containing score, feedback, and criteria
   */
  const checkPasswordStrength = (password) => {
    // Initialize criteria
    const criteria = {
      length: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasDigit: /[0-9]/.test(password),
      hasSpecialChar: /[^A-Za-z0-9]/.test(password),
    };

    // Calculate score (0-4)
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (criteria.hasUppercase && criteria.hasLowercase) score += 1;
    if (criteria.hasDigit) score += 0.5;
    if (criteria.hasSpecialChar) score += 1.5;

    // Cap at 4
    score = Math.min(4, Math.floor(score));

    // Generate feedback
    let warning = "";
    const suggestions = [];

    if (password.length < 8) {
      warning = "Your password is too short";
      suggestions.push("Add more characters to make your password longer");
    }

    if (!criteria.hasUppercase || !criteria.hasLowercase) {
      suggestions.push("Mix uppercase and lowercase letters");
    }

    if (!criteria.hasDigit) {
      suggestions.push("Add numbers to your password");
    }

    if (!criteria.hasSpecialChar) {
      suggestions.push("Add special characters like !@#$%^&*");
    }

    if (/(.)\1{2,}/.test(password)) {
      suggestions.push("Avoid repeated characters");
    }

    if (/^(12345|qwerty|password|admin|letmein|welcome)$/i.test(password)) {
      warning = "This is a commonly used password";
      suggestions.push("Avoid commonly used passwords");
    }

    return {
      score,
      feedback: {
        warning,
        suggestions,
      },
      criteria,
    };
  };

  /**
   * Handles password changes and updates strength evaluation
   *
   * @param {string} newPassword - The new password value
   */
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    if (newPassword) {
      const result = checkPasswordStrength(newPassword);
      setStrength(result);
    } else {
      setStrength({
        score: 0,
        feedback: {
          warning: "",
          suggestions: [],
        },
        criteria: {
          length: false,
          hasUppercase: false,
          hasLowercase: false,
          hasDigit: false,
          hasSpecialChar: false,
        },
      });
    }
  };

  /**
   * Resets password and strength state to initial values
   */
  const handleClear = () => {
    setPassword("");
    setStrength({
      score: 0,
      feedback: {
        warning: "",
        suggestions: [],
      },
      criteria: {
        length: false,
        hasUppercase: false,
        hasLowercase: false,
        hasDigit: false,
        hasSpecialChar: false,
      },
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <PasswordStrengthCheckerInput
          password={password}
          onPasswordChange={handlePasswordChange}
          onClear={handleClear}
        />
        <PasswordStrengthCheckerOutput strength={strength} password={password} />
      </div>

      <div className="mt-16">
        <PasswordStrengthCheckerInfo />
      </div>
    </>
  );
};

export default PasswordStrengthCheckerTool;
