# Migration Guide: v3 → v4

## Why v4?

Version 4.0.0 addresses **Critical** and **High** severity vulnerabilities reported by Snyk across transitive dependencies (flatted, lodash, cross-spawn, minimatch, semver, and others). The fix required upgrading ESLint from v6 to v8 and all plugins to compatible versions.

## Requirements

| Requirement | v3 | v4 |
|-------------|----|----|
| Node.js     | >= 10 | **>= 18** |
| ESLint      | 6.x (bundled) | **8.x** (bundled) |
| Config format | `.eslintrc.js` | `.eslintrc.js` (unchanged) |

> ESLint 9 flat config (`eslint.config.js`) is **not** supported. The existing `.eslintrc.js` format continues to work.

## Breaking Changes

### 1. Node.js 18+ required

If your CI or local environment runs Node < 18, upgrade before installing v4.

### 2. Removed jsx-a11y rules (`@deloitte-digital-au/eslint-config-react`)

These rules were removed from `eslint-plugin-jsx-a11y` in v6.x:

| Removed rule | Replacement |
|--------------|-------------|
| `jsx-a11y/accessible-emoji` | No replacement needed — modern screen readers handle emoji natively |
| `jsx-a11y/no-onchange` | No replacement needed — modern browsers fire `onChange` reliably |
| `jsx-a11y/label-has-for` | Replaced by `jsx-a11y/label-has-associated-control` (same behaviour with `assert: 'either'`) |

**Action required:** If you reference any of these rules in your own overrides, rename or remove them.

### 3. Renamed import rule (`@deloitte-digital-au/eslint-config`)

| Old name | New name |
|----------|----------|
| `import/imports-first` | `import/first` |

**Action required:** If you override `import/imports-first` in your config, rename it to `import/first`.

## Non-Breaking Changes

- All other rules remain identical — no changes to linting behaviour.
- `experimentalObjectRestSpread` parser option removed (native in ES2018+, no effect on linting).
- `babel-eslint` references updated to `@babel/eslint-parser` in documentation (no runtime change unless you use the Babel parser).

## Upgrade Steps

1. **Update your `package.json`:**

   ```bash
   npm install @deloitte-digital-au/eslint-config@^4.0.0 --save-dev
   # or for React projects:
   npm install @deloitte-digital-au/eslint-config-react@^4.0.0 --save-dev
   # or for TypeScript projects:
   npm install @deloitte-digital-au/eslint-config-typescript@^4.0.0 --save-dev
   ```

2. **Check your Node version** — must be >= 18.

3. **Search your `.eslintrc.js` for removed/renamed rules** (see tables above) and update any overrides.

4. **Run ESLint** and verify no new errors:

   ```bash
   npx eslint . --ext .js,.jsx,.ts,.tsx
   ```

## Dependency Upgrades (Reference)

| Package | v3 | v4 |
|---------|----|----|
| eslint | ^6.0.0 | ^8.56.0 |
| eslint-plugin-import | ^2.18.0 | ^2.29.0 |
| eslint-plugin-jsx-a11y | ^6.2.1 | ^6.8.0 |
| eslint-plugin-react | ^7.14.2 | ^7.34.0 |
| @typescript-eslint/eslint-plugin | ^1.13.0 | ^5.62.0 |
| @typescript-eslint/parser | ^1.13.0 | ^5.62.0 |
| eslint-plugin-new-with-error | ^3.0.0 | ^5.0.0 |
| eslint-plugin-you-dont-need-lodash-underscore | ^6.5.0 | ^6.14.0 |
