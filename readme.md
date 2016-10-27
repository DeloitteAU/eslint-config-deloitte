# eslint-config-deloitte

This package provides Deloitte Digital's code standards as an ESLint extensible config.

## Installation


```bash
npm install --save-dev eslint-config-deloitte
```

## Usage in projects with an ES6 codebase

Add `"extends": ["eslint-config-deloitte"]` to your .eslintrc.js file:

```js
module.exports = {
	root: true,
	extends: [
		'eslint-config-deloitte'
	],
	globals: {
		clientX: true
	},
	rules: {
		'comma-dangle': ['error', 'always']
	}
};
```

## Usage in projects without an ES6 codebase

Add `"extends": ["eslint-config-deloitte/legacy"]` to your .eslintrc.js file:

```js
module.exports = {
	root: true,
	extends: [
		'eslint-config-deloitte/legacy'
	],
	globals: {
		clientX: true
	},
	rules: {
		'comma-dangle': ['error', 'always']
	}
};
```

If your project uses ES6 only in certain directories, like unit tests or build scripts, you may wish to add another .eslintrc.js file just to that directory.

## Who is Deloitte Digital?

**Part Business. Part Creative. Part Technology. One hundred per cent digital.**

Pioneered in Australia, Deloitte Digital is committed to helping clients unlock the business value of emerging technologies. We provide clients with a full suite of digital services, covering digital strategy, user experience, content, creative, engineering and implementation across mobile, web and social media channels.

[http://www.deloittedigital.com/au](http://www.deloittedigital.com/au)

## LICENSE (BSD-3-Clause)
[View License](LICENSE)
