module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/es6',
		'./rules/imports',
		'./rules/react'
	].map(require.resolve)
};
