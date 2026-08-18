/**
 * ========================================================================
 * Vitest Configuration
 * ========================================================================
 * Purpose: Test runner config for unit + DOM component tests with coverage.
 * Docs:    https://vitest.dev/config/
 * ========================================================================
 */

import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // JSX-aware transform for .tsx component files (React automatic runtime)
  plugins: [react()],

  // Shorthand for src/ imports
  resolve: { alias: { '@': resolve(import.meta.dirname, 'src') } },

  // --- Tests Configs ---
  test: {
    // jsdom environment for DOM component testing with Testing Library
    environment: 'jsdom',

    // Global setup: jest-dom matchers + console mock
    setupFiles: ['./vitest.setup.ts'],

    // Allow `describe`, `it`, `expect`, `vi` without imports
    globals: true,

    // Test file patterns
    include: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],

    // V8-based coverage with text/JSON/HTML reports
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'node_modules/',
        'vitest.config.ts',
        'vitest.setup.ts',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/*.d.ts',
        '**/dist/',
        '**/build/',
        // App Router page files are thin wrappers covered via their components
        'src/app/**/page.tsx',
        'src/app/**/layout.tsx',
        // API routes and the proxy guard run on the server; not unit-tested
        'src/app/api/**',
        'src/proxy.ts',
      ],
    },
  },
});
