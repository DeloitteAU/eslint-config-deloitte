module.exports = {
	extends: [
		'./rules/best-practices'
	].map(require.resolve),
	rules: {
		strict: 'error',
	}
};
