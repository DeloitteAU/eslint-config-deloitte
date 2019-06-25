module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/es6',
		'./rules/imports',
	].map(require.resolve),
	plugins: [
		'eslint-plugin-you-dont-need-lodash-underscore',
		'eslint-plugin-new-with-error',
	],
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
