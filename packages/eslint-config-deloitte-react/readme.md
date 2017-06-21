![Deloitte Digital](https://raw.githubusercontent.com/DeloitteDigital/DDBreakpoints/master/docs/deloittedigital-logo-white.png)

# eslint-config-deloitte-react

This package provides Deloitte Digital's ES6 + React code standards as an ESLint extensible config.

## Installation

```bash
npm install --save-dev eslint-config-deloitte-react
```

### Usage

Add `"extends": ["eslint-config-deloitte-react"]` to your `.eslintrc.js` file:

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

## Who is Deloitte Digital?

**Part Business. Part Creative. Part Technology. One hundred per cent digital.**

Pioneered in Australia, Deloitte Digital is committed to helping clients unlock the business value of emerging technologies. We provide clients with a full suite of digital services, covering digital strategy, user experience, content, creative, engineering and implementation across mobile, web and social media channels.

[http://www.deloittedigital.com/au](http://www.deloittedigital.com/au)

## LICENSE (BSD-3-Clause)
[View License](LICENSE)
