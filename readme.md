![Deloitte Digital](https://raw.githubusercontent.com/DeloitteDigital/DDBreakpoints/master/docs/deloittedigital-logo-white.png)

# Deloitte ESlint configs

These packages provides Deloitte Digital's code standards as an ESLint extensible config.

- [Installation for ES6 projects](#installation-for-es6-projects)
- [Installation for ES6 + React projects](#installation-for-es6--react-projects)
- [Installation for ES5 projects](#installation-for-es5-projects)

## Installation for ES6 projects

```bash
npm install --save-dev eslint-config-deloitte
```

### Usage

Add `"extends": ["eslint-config-deloitte"]` to your `.eslintrc.js` file.

**Example:**

```js
module.exports = {
	extends: [
		'eslint-config-deloitte'
	],
	globals: {
		clientX: true
	}
};
```

## Installation for ES6 + React projects

```bash
npm install --save-dev eslint-config-deloitte-react
```

### Usage

Add `"extends": ["eslint-config-deloitte-react"]` to your `.eslintrc.js` file.

**Example:**

```js
module.exports = {
	extends: [
		'eslint-config-deloitte-react'
	],
	globals: {
		clientX: true
	}
};
```


## Installation for ES5 projects

```bash
npm install --save-dev eslint-config-deloitte
```

### Usage

Add `"extends": ["eslint-config-deloitte/legacy"]` to your `.eslintrc.js` file.

**Example:**

```js
module.exports = {
	extends: [
		'eslint-config-deloitte/legacy'
	],
	globals: {
		clientX: true
	}
};
```


## Who is Deloitte Digital?

**Part Business. Part Creative. Part Technology. One hundred per cent digital.**

Pioneered in Australia, Deloitte Digital is committed to helping clients unlock the business value of emerging technologies. We provide clients with a full suite of digital services, covering digital strategy, user experience, content, creative, engineering and implementation across mobile, web and social media channels.

[http://www.deloittedigital.com/au](http://www.deloittedigital.com/au)

## LICENSE (BSD-3-Clause)
[View License](LICENSE)
