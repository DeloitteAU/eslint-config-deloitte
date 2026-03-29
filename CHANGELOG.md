## Changelog for Deloitte Digital's ESLint Config

### [4.0.0]

#### Security

- Upgraded ESLint from v6 to v8 and all plugins to their latest compatible versions to resolve Critical and High Snyk vulnerabilities (flatted, lodash, minimatch, cross-spawn, semver, ansi-regex, acorn, eslint-utils, brace-expansion, ajv)
- Added Yarn resolutions to pin transitive dependencies to safe versions

#### Breaking Changes

- **Minimum Node.js version is now 18** (was 10). ESLint 8 requires Node >=12.22; we target 18 LTS.
- **`jsx-a11y/accessible-emoji`** rule removed (deprecated — emoji handling is now built into the ARIA spec)
- **`jsx-a11y/no-onchange`** rule removed (deprecated — browsers fixed the underlying issue)
- **`jsx-a11y/label-has-for`** rule replaced with **`jsx-a11y/label-has-associated-control`** (same intent, updated API)

#### Changed

- `import/imports-first` renamed to `import/first` (deprecated alias updated)
- Removed deprecated `experimentalObjectRestSpread` and obsolete `ecmaFeatures` parser options
- `eslint-plugin-new-with-error` bumped to ^5.0.0 (ESLint 8 compatible)

#### Dependency Upgrades

| Package | From | To |
|---------|------|----|
| eslint | ^6.0.1 | ^8.56.0 |
| eslint-plugin-import | ^2.18.0 | ^2.29.0 |
| eslint-plugin-you-dont-need-lodash-underscore | ^6.5.0 | ^6.14.0 |
| eslint-plugin-new-with-error | ^2.0.0 | ^5.0.0 |
| @typescript-eslint/eslint-plugin | ^1.9.0 | ^5.62.0 |
| @typescript-eslint/parser | ^1.9.0 | ^5.62.0 |
| eslint-plugin-jsx-a11y | ^6.2.1 | ^6.8.0 |
| eslint-plugin-react | ^7.14.2 | ^7.34.0 |

#### Note

- Formatting rules (semi, quotes, indent, etc.) are deprecated in ESLint 8 but remain fully functional. For new projects, consider [@stylistic/eslint-plugin](https://eslint.style/).
- This config still uses `.eslintrc.js` format (not ESLint 9 flat config).

### [3.4.1]

- Enforce `async () => {}` instead of `async() => {}`.
- Added `eslint-plugin-you-dont-need-lodash-underscore` plugin
- Added `eslint-plugin-new-with-error` plugin
- Allow JSX in `.tsx` files
- Added a TypeScript config
- Migrated this mono repo from npm to yarn
- Update node version in .travis.yml
- Bump ajv from 6.10.0 to 6.12.6 by @dependabot in #39
 
### [3.4.0]

- Packages are now scoped to `@deloitte-digital-au`

### [3.3.1]

- Added overrides for Webpack, ESLint, Stylelint and Karma configuration files, to set the Node environment variable to true
- Updated the linting of this project
- Added documentation for publishing to npm

### [3.3.0]

- Added ECMAScript 2017 support
- Added lerna to manage our packages
- Added contributing readme
- Added .nvmrc to promote node 8.7
- Updated travis build config and node version
- Upgraded eslint 4.18
- Upgraded eslint-plugin-import to 2.9
- Upgraded eslint-plugin-react to 7.7
- Added `react/button-has-type` rule
- Added `react/no-this-in-sfc` rule
- Added `react/jsx-child-element-spacing` rule
- Added `react/jsx-max-depth` rule
- Updated `react/prefer-stateless-function` to off
- Updated `jsx-a11y/anchor-is-valid` to off
- Updated `react/jsx-key` from error to warn
- Updated `react/jsx-curly-brace-presence` to off
- Updated `react/jsx-no-bind` from error to warn
- Updated `react/jsx-filename-extension` from error to warn and now expects `.js`
- Updated `react/self-closing-comp` from error to warn
- Updated `react/no-array-index-key` from error to warn
- Updated `object-shorthand` from error to off

### [3.1.1]

- Fixed duplicate of `jsx-a11y/label-has-for` rule

### [3.1.0]

- Added npm lock files
- Moved npm prePublish script to prepublishOnly
- Upgraded ESLint to 4.9.0
- Upgraded ESLint plugin react to 7.4.0
- Upgraded ESLint plugin import to 2.7.0
- Upgraded ESLint plugin jsx a11y to 6.0.2
- Moved peerDepencies into dependencies (now install everything in one go since this is nearly always the case)
- Added new `jsx-a11y/label-has-for` rule
- Added new `jsx-a11y/anchor-is-valid` rule
- Added new `react/boolean-prop-naming` rule
- Added new `react/no-typos` rule
- Changed `arrow-body-style`, now is turned off
- Changed `arrow-parens`, removed require block body
- Changed `keyword-spacing`, now has overrides defined
- Changed `react/jsx-no-bind`, to be a bit more relaxed
- Fixed `jsx-a11y/href-no-hash` deprecated error

### [3.0.0]

- Upgraded ESLint to version 4.1
- Added switch-colon-spacing rule, a new ESLint 4 rule.

### [2.0.0]

- Now enforcing comma-dangle for multiline statements [#2](https://github.com/DeloitteDigitalAPAC/eslint-config-deloitte/pull/2)
- Turned off no-unresolved imports as it tends to raise false positives in webpack projects
- Added new React config package
- Updated Docs

### [1.0.1]

- Disallow debugger statements [#1](https://github.com/DeloitteDigitalAPAC/eslint-config-deloitte/pull/1).
