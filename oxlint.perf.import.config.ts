import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['import'],
  categories: { correctness: 'off' },
  rules: {
    'import/no-cycle': 'error',
  },
  // Keep this in sync with oxlint.perf.fast-import.config.ts. `build/` is
  // excluded because import-integrity-lint excludes it from its dependency
  // graph by default (see DEFAULT_IGNORE_DIRECTORIES in eslint-plugin-fast-
  // import). `*.astro` is excluded because import-integrity-lint treats .astro
  // files as non-code, so cycles through them are not tracked.
  ignorePatterns: ['build', '*.astro'],
});
