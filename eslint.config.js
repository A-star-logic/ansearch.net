// @ts-check
import astarEslint from '@ansearch/config/linters/eslint.config.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(...astarEslint, {
  files: [
    'worker-configuration.d.ts',
    'src/content/config.ts',
    'src/lib/utils.ts',
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
  },
});
