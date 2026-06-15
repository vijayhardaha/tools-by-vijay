'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import InfoBlock from './info-block';
import InputBlock from './input-block';
import OutputBlock from './output-block';

/**
 * Interface for the password strength feedback.
 */
interface PasswordFeedback {
  warning: string;
  suggestions: string[];
}

/**
 * Interface for the password strength criteria.
 */
interface PasswordCriteria {
  length: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasDigit: boolean;
  hasSpecialChar: boolean;
}

/**
 * Interface for the password strength analysis result.
 */
interface PasswordStrength {
  score: number;
  feedback: PasswordFeedback;
  criteria: PasswordCriteria;
}

/**
 * Default strength options for the password strength checker.
 */
const defaultStengthOptions: PasswordStrength = {
  score: 0,
  feedback: { warning: '', suggestions: [] },
  criteria: { length: false, hasUppercase: false, hasLowercase: false, hasDigit: false, hasSpecialChar: false },
};

/**
 * Password Strength Checker Tool Component
 *
 * Main component that handles password strength checking logic and renders
 * the input, output, and information components.
 *
 * @returns {JSX.Element} Complete password strength checker tool interface
 */
export default function PasswordStrengthChecker(): JSX.Element {
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<PasswordStrength>(defaultStengthOptions);

  /**
   * Evaluates password strength based on various criteria.
   *
   * @param {string} password - The password to analyze.
   *
   * @returns {PasswordStrength} Object containing score, feedback, and criteria.
   */
  const checkPasswordStrength = (password: string): PasswordStrength => {
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
    let warning = '';
    const suggestions = [];

    if (password.length < 8) {
      warning = 'Your password is too short';
      suggestions.push('Add more characters to make your password longer');
    }

    if (!criteria.hasUppercase || !criteria.hasLowercase) {
      suggestions.push('Mix uppercase and lowercase letters');
    }

    if (!criteria.hasDigit) {
      suggestions.push('Add numbers to your password');
    }

    if (!criteria.hasSpecialChar) {
      suggestions.push('Add special characters like !@#$%^&*');
    }

    if (/(.)\1{2,}/.test(password)) {
      suggestions.push('Avoid repeated characters');
    }

    if (/^(12345|qwerty|password|admin|letmein|welcome)$/i.test(password)) {
      warning = 'This is a commonly used password';
      suggestions.push('Avoid commonly used passwords');
    }

    return { score, feedback: { warning, suggestions }, criteria };
  };

  /**
   * Handles password changes and updates strength evaluation
   *
   * @param {string} newPassword - The new password value
   */
  const handleSubmit = (newPassword: string): void => {
    setPassword(newPassword);
    if (newPassword) {
      const result = checkPasswordStrength(newPassword);
      setStrength(result);
    } else {
      setStrength(defaultStengthOptions);
    }
  };

  /**
   * Resets password and strength state to initial values
   */
  const handleClear = (): void => {
    setPassword('');
    setStrength(defaultStengthOptions);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock password={password} onSubmit={handleSubmit} onClear={handleClear} />

        {password && <OutputBlock strength={strength} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
