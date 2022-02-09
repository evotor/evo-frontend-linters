# [Evotor](https://evotor.ru) linting configurations

## Usage

1. Install linters packages

* `npm i @evo/eslint-config-ng --save-dev` - for TS-files check
* `npm i @evo/eslint-config-ng-template --save-dev` - for Template files check

2. Extend your `.eslintrc.js` with installed packages:

```javascript
module.exports = {
    "root": true,
    "extends": [
        '@evo/eslint-config-ng',
        '@evo/eslint-config-ng-templates',
    ],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
}
```

## Contributing

... 
