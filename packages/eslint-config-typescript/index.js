module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'@deloitte-digital-au/eslint-config',
		'./rules/typescript',
	].map(require.resolve),
	plugins: ['@typescript-eslint'],
};
