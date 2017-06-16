module.exports = {
	env: {
		browser: true
	},

	globals: {
		DDIGITAL: true,
		DD: true
	},

	rules: {
		// Disallow debugger;
		//http://eslint.org/docs/rules/no-debugger
		'no-debugger': 'error',

		// Disallow bitwise operators
		// http://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',

		// Require Camelcase
		// http://eslint.org/docs/rules/camelcase
		'camelcase': ['error', {
			properties: 'never'
		}],

		// Require Following Curly Brace Conventions
		// http://eslint.org/docs/rules/curly
		'curly': ['error', 'all'],

		// Require === and !==
		// http://eslint.org/docs/rules/eqeqeq
		'eqeqeq': ['error', 'always', {
			'null': 'ignore' // eslint-disable-line quote-props
		}],

		// Require Guarding for-in
		// http://eslint.org/docs/rules/guard-for-in
		'guard-for-in': 'error',

		// Require IIFEs to be Wrapped
		// http://eslint.org/docs/rules/wrap-iife
		'wrap-iife': ['error', 'any'],

		// Disallow Early Use
		// http://eslint.org/docs/rules/no-use-before-define
		'no-use-before-define': 'error',

		// Require constructor function names to begin with a capital letter
		// http://eslint.org/docs/rules/new-cap
		'new-cap': 'error',

		// Disallow Use of caller/callee
		// http://eslint.org/docs/rules/no-caller
		'no-caller': 'error',

		// Disallow empty block statements
		// http://eslint.org/docs/rules/no-empty
		'no-empty': ['error', {
			allowEmptyCatch: true
		}],

		// Disallow the unary operators ++ and --
		// http://eslint.org/docs/rules/no-plusplus
		'no-plusplus': ['error', {
			allowForLoopAfterthoughts: true
		}],

		// Enforce the consistent use of single quotes
		// http://eslint.org/docs/rules/quotes
		'quotes': ['error', 'single'],

		// Disallow Undeclared Variables
		// http://eslint.org/docs/rules/no-undef
		'no-undef': 'error',

		// Warn of Unused Variables
		// http://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': 'warn',

		// Require or disallow strict mode directives
		// babel inserts `'use strict';` for you, so if your project uses babel, override this rule to 'strict': ['error', 'never']
		// http://eslint.org/docs/rules/strict
		'strict': 'error',

		// Require or disallow semicolons instead of ASI
		// http://eslint.org/docs/rules/semi
		'semi': 'error',

		// Enforce consistent spacing before opening parenthesis in function definitions
		// http://eslint.org/docs/rules/space-before-function-parentheses
		'space-before-function-paren': ['error', 'never'],

		// Disallow or enforce spaces inside of brackets
		// http://eslint.org/docs/rules/array-bracket-spacing
		'array-bracket-spacing': ['error', 'never'],

		// Disallow or enforce spaces inside of parentheses
		// http://eslint.org/docs/rules/space-in-parens
		'space-in-parens': ['error', 'never'],

		// Require quotes around object literal property names
		// http://eslint.org/docs/rules/quote-props
		'quote-props': ['error', 'consistent-as-needed'],

		// Enforce consistent spacing between keys and values in object literal properties
		// http://eslint.org/docs/rules/key-spacing
		'key-spacing': ['error', {
			beforeColon: false,
			afterColon: true
		}],

		// Require or disallow spaces before/after unary operators
		// http://eslint.org/docs/rules/space-unary-ops
		'space-unary-ops': ['error', {
			words: false,
			nonwords: false
		}],

		// Disallow mixed spaces and tabs for indentation
		// http://eslint.org/docs/rules/no-mixed-spaces-and-tabs'
		'no-mixed-spaces-and-tabs': 'error',

		// Disallow trailing whitespace at the end of lines
		// http://eslint.org/docs/rules/no-trailing-spaces
		'no-trailing-spaces': 'error',

		// Require or disallow trailing commas
		// http://eslint.org/docs/rules/comma-dangle
		'comma-dangle': ['error', 'always-multiline'],

		// Disallow Yoda Conditions
		// http://eslint.org/docs/rules/yoda
		'yoda': ['error', 'never'],

		// Disallow with statements
		// http://eslint.org/docs/rules/no-with
		'no-with': 'error',

		// Disallow multiple empty lines
		// http://eslint.org/docs/rules/no-multiple-empty-lines
		'no-multiple-empty-lines': 'error',

		// Require Or Disallow Space Before Blocks
		// http://eslint.org/docs/rules/space-before-blocks
		'space-before-blocks': ['error', 'always'],

		// Disable variables to be declared together
		// http://eslint.org/docs/rules/one-var
		'one-var': 'off',

		// Comma style
		// http://eslint.org/docs/rules/comma-style
		'comma-style': ['error', 'last'],

		// Require Spaces Around Infix Operators
		// http://eslint.org/docs/rules/space-infix-ops
		'space-infix-ops': 'error',

		// Require file to end with single newline
		// http://eslint.org/docs/rules/eol-last
		'eol-last': 'error',

		// Require Dot Notation
		// http://eslint.org/docs/rules/dot-notation
		'dot-notation': 'error',

		// Enforce consistent spacing before and after keywords
		// http://eslint.org/docs/rules/keyword-spacing
		'keyword-spacing': ['error', {}],

		// Require Consistent This
		// http://eslint.org/docs/rules/consistent-this
		'consistent-this': ['error', '_this'],

		// Enforce consistent linebreak style
		// http://eslint.org/docs/rules/linebreak-style
		'linebreak-style': ['error', 'unix'],

		// Enforce consistent indentation
		// http://eslint.org/docs/rules/indent
		'indent': ['error', 'tab', {
			SwitchCase: 1
		}],

		// Require Brace Style
		// http://eslint.org/docs/rules/brace-style
		'brace-style': ['warn', '1tbs', {
			allowSingleLine: true
		}]
	}
};
