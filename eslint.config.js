// eslint.config.js
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/', 'dist/', 'build/', '**/**/*.test.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser, // Add browser globals (e.g., window, document, console, etc.)
        ...globals.es2021, // Add ES2021 globals (e.g., Promise, Set, Map, etc.)
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // Disable prop-types since we're using TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow implicit return types
      '@typescript-eslint/no-unused-vars': 'warn', // Warn about unused variables
      'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks
      'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in useEffect
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
