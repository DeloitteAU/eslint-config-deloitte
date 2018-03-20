module.exports = {
	extends: [
		'./index.js',
	].map(require.resolve),
	env: {
		node: true,
	},
};
