module.exports = {
	extends: [
		'@deloitte-digital-au/eslint-config',
		'./rules/react',
		'./rules/jsx-a11y',
	].map(require.resolve),
	overrides: {
		files: ['**/*.tsx'],
		rules: {
			'react/prop-types': 'off',
		},
	},
};
