import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import pluginImportX from 'eslint-plugin-import-x'

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
    settings: {
      'import-x/extensions': [
        '.ts',
        '.tsx',
        '.cts',
        '.mts',
        '.js',
        '.jsx',
        '.cjs',
        '.mjs',
      ],
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts'],
      },
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          extensions: [
            '.ts',
            '.tsx',
            '.cts',
            '.mts',
            '.js',
            '.jsx',
            '.cjs',
            '.mjs',
          ],
          extensionAlias: {
            '.js': ['.ts', '.js'],
          },
          project: [
            'tsconfig.json',
            'packages/*/tsconfig.json',
            'crates/*/tsconfig.json',
            'crates/*/js/tsconfig.json',
          ],
        }),
      ],
    },
    plugins: {
      'import-x': pluginImportX,
    },
    rules: {
      'import-x/no-cycle': ['error', { allowUnsafeDynamicCyclicDependency: true }],
    },
  },
])
