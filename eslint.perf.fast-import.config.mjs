import { join } from 'node:path'

import { defineConfig } from 'eslint/config'
import tsParser from '@typescript-eslint/parser'

import plugin from 'import-integrity-lint'

const debugLogging = process.env.DEBUG_LOGGING === '1'

export default defineConfig([
  {
    ignores: [
      '**/build/**',
      '**/*.astro',
      'turbopack/crates/turbopack-tests/tests/execution/turbopack/resolving/fragment/input/index.js',
    ],
  },
  {
    files: ['**/*.{cjs,js,mjs,jsx,ts,tsx,cts,mts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      'import-integrity': plugin,
    },
    settings: {
      'import-integrity': {
        packageRootDir: import.meta.dirname,
        debugLogging,
        ignorePatterns: ['test/e2e/typescript/extension-order/js-first.ts'],
      },
    },
    rules: {
      'import-integrity/no-cycle': 'error',
    },
  },
])
