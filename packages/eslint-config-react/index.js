module.exports = {
	extends: [
		'@deloitte-digital-au/eslint-config',
		'./rules/react',
		'./rules/jsx-a11y',
	].map(require.resolve),
};
