const svelteConfig = require('@repo/eslint-config/svelte');

module.exports = [
  ...svelteConfig,
  {
    files: ['src/**/*.{ts,js,svelte}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        alert: 'readonly',
        confirm: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        history: 'readonly',
        localStorage: 'readonly',
        location: 'readonly',
        navigator: 'readonly',
        sessionStorage: 'readonly',
        window: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
