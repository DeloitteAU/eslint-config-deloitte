module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/es6',
		'./rules/imports',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	overrides: [
		{
			files: [
				'.eslintrc.js',
				'.stylelintrc.js',
				'karma.conf.js',
				'webpack.config.js',
			],
			env: {
				node: true,
			},
		},
	],
};
