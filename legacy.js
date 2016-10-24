module.exports = {
	extends: [
		'./rules/best-practices'
	].map(require.resolve),
	env: {
		browser: true
	},
	rules: {
		strict: 'error',
	}
};
