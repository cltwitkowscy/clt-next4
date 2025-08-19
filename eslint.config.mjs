import js from '@eslint/js';
import ts from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

export default [
  { ignores: ['.next/', 'node_modules/', 'dist/', 'build/', '.netlify/', 'coverage/'] },

  // JS ogólny
  {
    ...js.configs.recommended,
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.node, ...globals.browser }
    },
    rules: { 'no-console': 'off', 'no-undef': 'off' }
  },

  // TS/TSX
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: ts,
      ecmaVersion: 2022,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      globals: { ...globals.node, ...globals.browser }
    },
    plugins: { '@typescript-eslint': tsPlugin, import: {} },
    rules: {
      'no-console': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
];
