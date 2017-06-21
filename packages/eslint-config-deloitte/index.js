module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/es6',
		'./rules/imports',
	].map(require.resolve)
};
