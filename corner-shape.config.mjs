/**
 * ======================================================================
 * Corner Shape Configuration
 * ======================================================================
 * Purpose: Applies the `corner-shape: squircle` CSS property to rounded
 *          utility classes, giving buttons and elements a softer,
 *          more refined rounded appearance.
 * Plugin:  tailwindcss-corner-shape (v4 compatible)
 * Docs:    https://www.npmjs.com/package/tailwindcss-corner-shape
 * ======================================================================
 */

import { createCornerShapePlugin } from 'tailwindcss-corner-shape/dist/v4.mjs';

export default createCornerShapePlugin({
  // Default corner shape applied to all rounded-* utilities.
  default: 'squircle',

  // Override corner shape per border-radius size.
  variants: {
    sm: 'squircle',
    base: 'squircle',
    lg: 'squircle',
    xl: 'squircle',
    '2xl': 'squircle',
    '3xl': 'squircle',
    full: 'round',
  },

  // Rounded utilities to exclude from corner-shape injection.
  exclude: ['rounded-none', 'rounded-full'],

  // Add !important to all corner-shape declarations.
  important: false,

  // Enable or disable the plugin entirely.
  enabled: true,
});
