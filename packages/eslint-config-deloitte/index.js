module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/es6',
		'./rules/imports',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2016,
		sourceType: 'module',
	},
	rules: {
		strict: 'error',
	}
};
