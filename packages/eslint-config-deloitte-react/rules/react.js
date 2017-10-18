module.exports = {
	plugins: [
		'react',
	],

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},

	rules: {
		// Specify whether double or single quotes should be used in JSX attributes
		// http://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': ['error', 'prefer-double'],

		// Prevent extraneous defaultProps on components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
		'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],

		// Prevent missing displayName in a React component definition
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
		'react/display-name': ['error', { ignoreTranspilerName: false }],

		// Forbid certain props on Components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
		'react/forbid-component-props': 'off',

		// Forbid certain elements
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
		'react/forbid-elements': 'off',

		// Forbid certain elements
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
		'react/forbid-prop-types': ['error', { forbid: ['any'] }],

		// Forbid foreign propTypes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
		'react/forbid-foreign-prop-types': 'error',

		// Prevent usage of Array index in keys
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
		'react/no-array-index-key': 'error',

		// Prevent passing children as props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
		'react/no-children-prop': 'error',

		// Prevent problem with children and props.dangerouslySetInnerHTML
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		'react/no-danger-with-children': 'error',

		// Prevent usage of dangerous JSX properties
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		'react/no-danger': 'off',

		// Prevent problem with children and props.dangerouslySetInnerHTML
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		'react/no-danger-with-children': 'error',

		// Prevent usage of deprecated methods
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		'react/no-deprecated': 'warn',

		// Prevent usage of setState in componentDidMount
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
		'react/no-did-mount-set-state': 'error',

		// Prevent usage of setState in componentDidUpdate
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
		'react/no-did-update-set-state': 'error',

		// Prevent direct mutation of this.state
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
		'react/no-direct-mutation-state': 'error',

		// Prevent usage of findDOMNode
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
		'react/no-find-dom-node': 'error',

		// Prevent usage of isMounted
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
		'react/no-is-mounted': 'error',

		// Prevent multiple component definition per file
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		'react/no-multi-comp': 'error',

		// Prevent usage of shouldComponentUpdate when extending React.PureComponent
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
		'react/no-redundant-should-component-update': 'error',

		// Prevent usage of the return value of React.render
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
		'react/no-render-return-value': 'error',

		// Prevent usage of setState
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
		'react/no-set-state': 'off',

		// Prevent using string references in ref attribute
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
		'react/no-string-refs': 'error',

		// Prevent invalid characters from appearing in markup
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		'react/no-unescaped-entities': 'error',

		// Prevent usage of unknown DOM property (fixable)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
		'react/no-unknown-property': 'error',

		// Prevent definitions of unused prop types
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
		'react/no-unused-prop-types': ['error', { skipShapeProps: true, customValidators: [] }],

		// Prevent usage of setState in componentWillUpdate
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
		'react/no-will-update-set-state': 'error',

		// Enforce ES5 or ES6 class for React Components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		'react/prefer-es6-class': 'error',

		// Enforce stateless React Components to be written as a pure function
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

		// Prevent missing props validation in a React component definition
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		'react/prop-types': 'error',

		// Prevent missing React when using JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		'react/react-in-jsx-scope': 'error',

		// Enforce a defaultProps definition for every prop that is not a required prop
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
		'react/require-default-props': 'error',

		// Enforce React components to have a shouldComponentUpdate method
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
		'react/require-optimization': 'off',

		// Enforce ES5 or ES6 class for returning value in render function
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
		'react/require-render-return': 'error',

		// Prevent extra closing tags for components without children (fixable)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		'react/self-closing-comp': 'error',

		// Enforce component methods order
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
		'react/sort-comp': ['error', {
			order: [
				'static-methods',
				'/^(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'lifecycle',
				'/^(get|set).+$/',
				'everything-else',
				'/^handle.+$/',
				'/^render.+$/',
				'render',
			],
		}],

		// Enforce propTypes declarations alphabetical sorting
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
		'react/sort-prop-types': 'off',

		// Enforce style prop value being an object
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
		'react/style-prop-object': 'error',

		// Prevent void DOM elements (e.g. <img />, <br />) from receiving children
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
		'react/void-dom-elements-no-children': 'error',

		// Enforce boolean attributes notation in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		'react/jsx-boolean-value': 'warn',

		// Validate closing bracket location in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
		'react/jsx-closing-bracket-location': 'error',

		// Validate closing tag location in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
		'react/jsx-closing-tag-location': 'error',

		// Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
		'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

		// Enforce or disallow spaces around equal signs in JSX attributes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
		'react/jsx-equals-spacing': ['error', 'never'],

		// Restrict file extensions that may contain JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

		// Configure the position of the first property
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
		'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

		// Enforce event handler naming conventions in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
		'react/jsx-handler-names': ['error', {
			eventHandlerPrefix: '_handle',
			eventHandlerPropPrefix: 'on',
		}],

		// Validate JSX indentation
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		'react/jsx-indent': ['error', 'tab'],

		// Validate props indentation in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		'react/jsx-indent-props': ['error', 'tab'],

		// Validate JSX has key prop when in array or iterator
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		'react/jsx-key': 'error',

		// Limit maximum of props on a single line in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
		'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

		// Prevent usage of .bind() and arrow functions in JSX props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		'react/jsx-no-bind': ['error', {
			ignoreRefs: true,
			allowArrowFunctions: true,
			allowBind: false,
		}],

		// Prevent comments from being inserted as text nodes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
		'react/jsx-no-comment-textnodes': 'error',

		// Prevent duplicate props in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
		'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],

		// Prevent usage of unwrapped JSX strings
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
		'react/jsx-no-literals': 'off',

		// Prevent usage of unsafe target='_blank'
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
		// REASONING: https://mathiasbynens.github.io/rel-noopener/
		'react/jsx-no-target-blank': 'warn',

		// Disallow undeclared variables in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		'react/jsx-no-undef': ['warn', { allowGlobals: true }],

		// Enforce PascalCase for user-defined JSX components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		'react/jsx-pascal-case': 'error',

		// Enforce props alphabetical sorting
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
		'react/jsx-sort-props': 'off',

		// Validate whitespace in and around the JSX opening and closing brackets
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
		'react/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
		}],

		// Prevent React to be incorrectly marked as unused
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		'react/jsx-uses-react': 'error',

		// Prevent variables used in JSX to be incorrectly marked as unused
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
		'react/jsx-uses-vars': 'error',

		// Prevent missing parentheses around multilines JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
		'react/jsx-wrap-multilines': ['error', {
			declaration: true,
			assignment: true,
			return: true,
			arrow: true,
		}],

		// Enforces consistent naming for boolean props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
		'react/boolean-prop-naming': ['off', {
			propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
			rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
		}],

		// Prevents common typos
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
		'react/no-typos': 'error',

		// Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
		'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
	},
};
