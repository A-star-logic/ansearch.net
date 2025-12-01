// @ts-check
import astarEslint from '@ansearch/config/linters/eslint.config.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(...astarEslint, {
  files: [
    'worker-configuration.d.ts',
    'src/content/config.ts',
    'src/lib/utils.ts',
    'src/env.d.ts',
    '.astro/*',
  ],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'import-x/no-unresolved': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'fp/no-rest-parameters': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'import-x/no-default-export': 'off',
  },

  ignores: ['.astro/*'],
});
