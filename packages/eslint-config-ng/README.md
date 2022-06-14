# @evo/eslint-config-ng

Evotor eslint configuration for Angular applications.

## Usage

1. Install package

* `npm i @evo/eslint-config-ng --save-dev`

2. Extend your `.eslintrc.js` with installed packages:

```javascript
module.exports = {
    "root": true,
    "extends": [
        '@evo/eslint-config-ng'
    ],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "project": ["./tsconfig.app.json"]
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
}
```
