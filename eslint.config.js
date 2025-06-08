// @ts-check
import astarEslint from '@ansearch/config/linters/eslint.config.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(...astarEslint, {
  files: ['worker-configuration.d.ts'],
  rules: {},
});
