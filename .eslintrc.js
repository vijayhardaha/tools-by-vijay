module.exports = {
  root: true, // Indicates that this is the root ESLint configuration file and ESLint should not look for configurations in parent directories.
  extends: [
    "next", // Extends Next.js-specific ESLint rules.
    "next/core-web-vitals", // Includes rules for optimizing Next.js Core Web Vitals.
    "eslint:recommended", // Enables a set of core rules recommended by ESLint.
    "plugin:react/recommended", // Enables recommended rules for React.
    "plugin:jsx-a11y/recommended", // Enables accessibility rules for JSX.
    "plugin:prettier/recommended", // Integrates Prettier with ESLint to enforce consistent code formatting.
  ],
  plugins: [
    "react", // Adds React-specific linting rules.
    "jsx-a11y", // Adds accessibility linting rules for JSX.
    "import", // Adds rules for managing import/export syntax.
    "prettier", // Adds Prettier integration to enforce code formatting.
  ],
  env: {
    browser: true, // Defines global variables available in browser environments.
    node: true, // Defines global variables available in Node.js environments.
    es6: true, // Enables ES6 syntax and features.
  },
  parser: "@babel/eslint-parser", // Uses Babel ESLint parser to support modern JavaScript syntax.
  parserOptions: {
    ecmaVersion: "latest", // Specifies the ECMAScript version to use (latest version).
    sourceType: "module", // Allows the use of ECMAScript modules (import/export).
    ecmaFeatures: {
      jsx: true, // Enables linting for JSX syntax.
    },
  },
  rules: {
    // Customize ESLint rules here
    "react/react-in-jsx-scope": "off", // Disables the rule requiring React to be in scope when using JSX (not needed in Next.js).
    "prettier/prettier": "error", // Treats Prettier formatting issues as errors.
    "react/no-unknown-property": [
      "error",
      {
        ignore: [
          "jsx", // Allows the use of the 'jsx' property in JSX (e.g., for Emotion or other libraries).
          "global", // Allows the use of the 'global' property in JSX.
        ],
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // Node.js built-in modules like fs, path, etc.
          "external", // External packages from node_modules (react, next, lodash, etc.)
          "internal", // Internal modules using aliases (e.g., @/components)
          "parent", // Imports from parent directories (../foo)
          "sibling", // Imports from the same or sibling directories (./bar)
          "index", // Imports from the current directory (./)
          "object", // Object imports (import { foo } from 'foo')
          "type", // Type imports (import type { Foo } from 'foo')
        ],
        pathGroups: [
          {
            pattern: "react", // Specifies that React imports should be placed first
            group: "external", // Categorizes React as an external dependency
            position: "before", // Positions React imports before other external imports
          },
          {
            pattern: "next/**", // Matches all Next.js imports (next/router, next/image, etc.)
            group: "external", // Categorizes Next.js as external dependencies
            position: "before", // Places Next.js imports before other external imports but after React
          },
          {
            pattern: "@/**", // Matches all imports using the @ alias (project-specific absolute imports)
            group: "internal", // Categorizes aliased imports as internal
            position: "after", // Places them after regular internal imports
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "next"], // Prevents react and next imports from being matched by multiple patterns
        alphabetize: {
          order: "asc", // Sorts imports alphabetically in ascending order within each group
          caseInsensitive: true, // Makes alphabetical sorting case-insensitive
        },
        "newlines-between": "always", // Requires an empty line between each import group for better readability
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Automatically detects the React version to use for linting.
    },
  },
};
