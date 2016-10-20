# eslint-config-deloitte

This package provides Deloitte Digital's code standards as a .eslintrc extensible config.

# Installation


```bash
npm install --save-dev dd-eslint-config-deloitte
```

# Usage

Add `"extends": "deloitte"` to your .eslintrc file.

Example

```json
{
  "extends": "deloitte",
  "env": {
    "browser": true,
    "jasmine": true,
    "node": true
  },
  "plugins": [
  ]
}
```