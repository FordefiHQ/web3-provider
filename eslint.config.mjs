import globals from 'globals';
import markdown from 'eslint-plugin-markdown';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import jest from 'eslint-plugin-jest';
import tsImport from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

const srcConfig = {
  plugins: {
    jsRecommended: eslintJs.configs.recommended,
    importRecommended: tsImport.configs.recommended,
    import: tsImport,
    'unused-imports': unusedImports,
  },
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...globals.es2020,
      ...globals.node,
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'warn',
  },
  rules: {
    'import/order': 'error',
    'import/no-unused-modules': 'error',
    'import/no-cycle': 'error',
    'import/no-unresolved': 'error',
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        node: true,
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '*.mts', '*.cts'],
    },
  },
};

export default [
  eslintPluginPrettierRecommended,
  {
    ...srcConfig,
    name: 'javascript',
    files: ['**/*.{js,mjs,cjs}'],
  },
  {
    ...srcConfig,
    name: 'typescript',
    files: ['**/*.{ts,mts,cts}'],
    plugins: {
      ...srcConfig.plugins,
      tsEslint: tsEslint.configs.recommended,
      importTypescript: tsImport.configs.typescript,
      '@typescript-eslint': eslintPluginTs,
    },
    languageOptions: {
      ...srcConfig.languageOptions,
      parser: tsEslint.parser,
    },
    rules: {
      ...srcConfig.rules,
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  {
    files: ['*.test.*', '*.spec.*'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      ...jest.configs['flat/recommended'],
    },
  },
  {
    // The plugin applies to markdown files and code blocks within markdown files.
    // It does not cover ```typescript code blocks, use ```ts instead.
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    processor: 'markdown/markdown',
  },
  {
    // Applies to ```ts code blocks within markdown files.
    files: ['**/*.md/*.ts'],
    rules: {
      'no-console': 'off',
      'import/no-unresolved': 'off',
    },
  },
  {
    ignores: ['node_modules', 'dist', 'docs'],
  },
];
