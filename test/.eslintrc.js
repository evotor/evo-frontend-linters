module.exports = {
    "root": true,
    // @evo/eslint-* packages are linked from local directory
    "extends": ["@evo/eslint-config-ng", "@evo/eslint-config-ng-templates"],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    }
};
