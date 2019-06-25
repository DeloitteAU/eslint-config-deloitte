module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/es6',
		'./rules/imports',
		'plugin:you-dont-need-lodash-underscore/all', //all rules set to error
		//'plugin:new-with-error', //FIXME: Cant make this work ?? Why ??
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
