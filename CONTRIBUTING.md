# Contributing to eslint-config-deloitte

> **Please note** while contributions are welcome, these configurations are being published with our use cases in mind 
and are opinionated by our engineers. We may not accept *feature* pull requests unless they are aligned with our needs.

To get started please [fork](https://github.com/DeloitteDigitalAPAC/eslint-config-deloitte#fork-destination-box) 
this code on github.

At the root; run `npm install && npm run bootstrap`.

## Code structure

Currently the source is separated by ECMA version and technology. You will find the individual modules in the
`packages` folder. These are published independently which is all facilitated by [lerna](https://github.com/lerna/lerna).  

## Commands

In order to run tests/lint:

```bash
npm run test
```

In order to publish. (Please note we use [fixed versioning mode](https://github.com/lerna/lerna#fixedlocked-mode-default) with lerna)

```bash
npm run publish
```
