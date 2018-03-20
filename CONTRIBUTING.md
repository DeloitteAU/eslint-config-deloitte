# Contributing to ESLint Config Deloitte

> **Please note** while contributions are welcome, these configurations are being published with our use cases in mind and are opinionated by our engineers. We may not accept *feature* pull requests unless they are aligned with our needs.

To get started please [fork](https://github.com/DeloitteDigitalAPAC/eslint-config-deloitte#fork-destination-box) this code on Github.

At the root; run `npm install && npm run bootstrap`.

## Code structure

Currently the source is separated by ECMA version and technology. You will find the individual modules in the `packages` folder. These are published independently which is all facilitated by [lerna](https://github.com/lerna/lerna).

## Tests

In order to run tests/lint:

```bash
npm run test
```

## Publishing

The project publishes two packages to npm:

[eslint-config-deloitte](https://www.npmjs.com/package/eslint-config-deloitte)
[eslint-config-deloitte-react](https://www.npmjs.com/package/eslint-config-deloitte-react)

Instructions for publishing new releases:

- Check out the `master` branch
- Update the `CHANGELOG.md` file and commit
- Do not manually change version numbers in `lerna.json` or `package.json` files (they are updated programatically)
- Run Lerna's publish command, and pass in your One Time Password for npm as an environment variable: `NPM_CONFIG_OTP=yourtoken lerna publish`
- Select the new version (or enter a custom one)

Lerna will create a new release of the packages that have been updated. It will create a new git commit/tag and publish to npm.
