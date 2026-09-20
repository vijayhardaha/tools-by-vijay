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
  resolve: { alias: { '@': resolve('.', 'src') } },

  // --- Tests Configs ---
  test: {
    // jsdom environment for DOM component testing with Testing Library
    environment: 'jsdom',

    // Generous per-test budget: coverage instrumentation slows cold imports
    // of heavy config graphs past the 5s default under load spikes
    testTimeout: 20000,

    // Global setup: jest-dom matchers + console mock
    setupFiles: ['./vitest.setup.ts'],

    // Allow `describe`, `it`, `expect`, `vi` without imports
    globals: true,

    // Test file patterns
    include: ['**/*.test.{js,mjs,cjs,ts,tsx}', '**/*.spec.{js,mjs,cjs,ts,tsx}'],

    // V8-based coverage with text/JSON/HTML reports
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{js,mjs,cjs,ts,tsx}'],

      // Enforce the documented 100% target: vitest exits non-zero when any
      // metric in any file drops below it, instead of only printing numbers.
      thresholds: { statements: 100, branches: 100, functions: 100, lines: 100 },

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
