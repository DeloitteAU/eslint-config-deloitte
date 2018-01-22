module.exports = {
	extends: [
		'./index',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	env: {
		node: true,
	},
};
