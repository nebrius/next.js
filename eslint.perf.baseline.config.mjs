import { defineConfig } from 'eslint/config';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
  { ignores: ['**/build/**', '**/*.astro'] },
  {
    files: ['**/*.{cjs,js,mjs,jsx,ts,tsx,cts,mts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-debugger': 'error',
    },
  },
]);
