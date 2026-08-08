'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { LuCopy as CopyIcon, LuCheck as CheckIcon } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { cn } from '@/utils/classnames';

/**
 * Props for the CopyButton component.
 *
 * @type {CopyButtonProps}
 * @property {string} text - The text to copy to clipboard
 * @property {string} [copyText] - The label when not yet copied
 * @property {string} [copiedText] - The label after successful copy
 * @property {string} [className] - Additional CSS classes
 * @property {boolean} [disabled] - Whether the button is disabled
 */
interface CopyButtonProps {
  text: string;
  copyText?: string;
  copiedText?: string;
  className?: string;
  disabled?: boolean;
}

/**
 * Reusable copy button component with copied state feedback.
 *
 * Falls back to `document.execCommand('copy')` when the async Clipboard API is
 * unavailable (e.g. insecure HTTP context or denied permissions) so the copy
 * never silently fails.
 *
 * @param {CopyButtonProps} props - The component props
 *
 * @returns {JSX.Element} The CopyButton component
 */
export function CopyButton({
  text,
  copyText = 'Copy',
  copiedText = 'Copied!',
  className = '',
  disabled,
}: CopyButtonProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the text to the clipboard and updates the copied state.
   * Uses the Clipboard API with a legacy execCommand fallback.
   *
   * @returns {Promise<void>}
   */
  const handleCopy = async (): Promise<void> => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Clipboard API unavailable (insecure context / denied permission) —
      // fall back to the legacy method.
      try {
        fallbackCopy(text);
        setCopied(true);
      } catch (fallbackError) {
        console.error('[CopyButton] Failed to copy text:', fallbackError);
      }
    } finally {
      setTimeout(() => setCopied(false), 1000);
    }
  };

  return (
    <Button
      variant={copied ? 'success' : 'secondary'}
      onClick={handleCopy}
      disabled={disabled || !text}
      className={cn('min-w-30', className)}
    >
      {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
      {copied ? copiedText : copyText}
    </Button>
  );
}

/**
 * Fallback copy implementation using a hidden textarea and execCommand.
 *
 * @param {string} text - The text to copy.
 *
 * @throws {Error} When the copy command reports failure.
 */
function fallbackCopy(text: string): void {
  const textarea = document.createElement('textarea');

  // Hide the textarea without removing it from the layout flow.
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.opacity = '0';
  textarea.style.pointerEvents = 'none';
  textarea.setAttribute('readonly', '');
  textarea.value = text;

  document.body.appendChild(textarea);

  try {
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    const successful = document.execCommand('copy');

    if (!successful) {
      throw new Error('execCommand copy failed');
    }
  } finally {
    document.body.removeChild(textarea);
  }
}
