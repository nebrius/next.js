import { defineConfig } from 'oxlint';

const debugLogging = process.env.DEBUG_LOGGING === '1';

export default defineConfig({
  jsPlugins: [{ name: 'import-integrity', specifier: 'import-integrity-lint' }],
  categories: { correctness: 'off' },
  rules: {
    'import-integrity/no-cycle': 'error',
  },
  settings: {
    'import-integrity': {
      packageRootDir: import.meta.dirname,
      debugLogging,
    },
  },
  // Cosmetic: keeps the oxlint file walk symmetric with
  // oxlint.perf.import.config.ts. import-integrity-lint already ignores
  // `build/` internally (DEFAULT_IGNORE_DIRECTORIES) and treats `.astro`
  // files as non-code, so these patterns are a no-op for cycle detection
  // but match the baseline lint scope across both configs.
  ignorePatterns: ['build', '*.astro'],
});
