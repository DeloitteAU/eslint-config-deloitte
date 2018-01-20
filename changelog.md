## ESLint Config Deloitte Changelog

### [UNPUBLISHED]

- Added lerna to manage our packages
- Added contributing readme
- Added .nvmrc to promote node 8.7
- Updated travis build config and node version

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
