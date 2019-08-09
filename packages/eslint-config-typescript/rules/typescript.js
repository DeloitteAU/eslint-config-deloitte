module.exports = {
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				/**
				 *  Disable things that are checked by Typescript
				 */
				//Checked by Typescript - ts(2378)
				'getter-return': 'off',
				// Checked by Typescript - ts(2300)
				'no-dupe-args': 'off',
				// Checked by Typescript - ts(1117)
				'no-dupe-keys': 'off',
				// Checked by Typescript - ts(7027)
				'no-unreachable': 'off',
				// Checked by Typescript - ts(2367)
				'valid-typeof': 'off',
				// Checked by Typescript - ts(2588)
				'no-const-assign': 'off',
				// Checked by Typescript - ts(2588)
				'no-new-symbol': 'off',
				// Checked by Typescript - ts(2376)
				'no-this-before-super': 'off',
				// This is checked by Typescript using the option `strictNullChecks`.
				'no-undef': 'off',
				// This is already checked by Typescript.
				'no-dupe-class-members': 'off',
				// This is already checked by Typescript.
				'no-redeclare': 'off',
				/**
				 * 2. Enable more ideomatic code
				 */
				// Typescript allows const and let instead of var.
				'no-var': 'error',
				'prefer-const': 'error',
				// The spread operator/rest parameters should be prefered in Typescript.
				'prefer-rest-params': 'error',
				'prefer-spread': 'error',
				// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
				'no-explicit-any': 'error',
				// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
				'no-non-null-assertion': 'error',
				// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
				'no-empty-interface': 'error',
				// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
				'explicit-function-return-type': 'error',
			},
		},
	],
};
