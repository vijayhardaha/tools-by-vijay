'use client';

/**
 * OS Detection Script component.
 *
 * Detects the operating system and adds a CSS class to the HTML element
 * for OS-specific styling. Runs only on the client side.
 *
 * @returns {null} This component renders nothing.
 */
export function OSDetectionScript(): null {
  if (typeof window !== 'undefined') {
    const d = document.documentElement;
    if (navigator.userAgent.includes('Mac OS X') || navigator.platform.includes('Mac')) {
      d.classList.add('os-macos');
    }
  }

  return null;
}
