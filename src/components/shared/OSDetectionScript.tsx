'use client';

import { useEffect } from 'react';

/**
 * OS Detection Script component.
 *
 * Detects the operating system and adds a CSS class to the HTML element
 * for OS-specific styling. Runs only on the client side, inside an effect:
 * mutating `documentElement` during render would be impure and re-run on
 * every layout re-render.
 *
 * @returns {null} This component renders nothing.
 */
export function OSDetectionScript(): null {
  useEffect(() => {
    const rootElement = document.documentElement;

    if (navigator.userAgent.includes('Mac OS X') || navigator.platform.includes('Mac')) {
      rootElement.classList.add('os-macos');
    }
  }, []);

  return null;
}
