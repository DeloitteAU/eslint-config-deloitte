module.exports = {
	extends: [
		'eslint-config-deloitte',
		'./rules/react',
		'./rules/jsx-a11y',
	].map(require.resolve),
};
