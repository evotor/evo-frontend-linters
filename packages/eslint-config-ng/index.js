module.exports = {
    "overrides": [
        {
            "files": ["*.ts"],
            "extends": [
                "plugin:@angular-eslint/recommended",
                // This is required if you use inline templates in Components
                "plugin:@angular-eslint/template/process-inline-templates",
                "plugin:@angular-eslint/ng-cli-compat",
                "plugin:@angular-eslint/ng-cli-compat--formatting-add-on",
                "eslint-config-prettier",
            ],
            "rules": {
                // basic
                "no-debugger": "off",
                "no-underscore-dangle": "off",
                "no-param-reassign": "off",
                "no-case-declarations": "error",
                "no-console": ["error", {allow: ["info", "assert", "warn", "error"]}],

                // basic typescript
                "function-paren-newline": ["error", "multiline-arguments"],
                "object-curly-spacing": ["error", "never"],
                "array-bracket-spacing": ["error", "never"],

                "no-useless-constructor": "off",
                "@typescript-eslint/no-useless-constructor": ["error"],
                "@typescript-eslint/no-inferrable-types": [
                    "error",
                    {ignoreParameters: true},
                ],
                "@typescript-eslint/prefer-readonly": ["error"],
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {accessibility: "no-public"},
                ],
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {argsIgnorePattern: "^_"},
                ],

                // member ordering
                "@typescript-eslint/member-ordering": [
                    "error",
                    {
                        default: [
                            "signature",
                            /**
                             * static fields
                             * [sort: public -> protected -> private]
                             **/
                            "public-static-field",
                            "protected-static-field",
                            "private-static-field",

                            /**
                             * abstract fields
                             * [sort: public -> protected -> private]
                             **/
                            "public-abstract-field",
                            "protected-abstract-field",
                            "private-abstract-field",

                            /**
                             * instance fields
                             * [sort: public -> private -> protected]
                             * [sort: decorated -> non-decorated]
                             **/
                            "public-decorated-field",
                            "public-instance-field",
                            "private-decorated-field",
                            "private-instance-field",
                            "protected-decorated-field",
                            "protected-instance-field",

                            /**
                             * constructors
                             * [sort: public -> protected -> private]
                             **/
                            "public-constructor",
                            "protected-constructor",
                            "private-constructor",

                            /**
                             * static methods
                             * [sort: public -> protected -> private]
                             **/
                            "public-static-method",
                            "protected-static-method",
                            "private-static-method",

                            /**
                             * abstract
                             * [sort: public -> private -> protected]
                             **/
                            "public-abstract-get",
                            "public-abstract-set",
                            "protected-abstract-get",
                            "protected-abstract-set",
                            "private-abstract-get",
                            "private-abstract-set",
                            "public-abstract-method",
                            "protected-abstract-method",
                            "private-abstract-method",

                            /**
                             * methods
                             * [sort: public -> protected -> private]
                             * [sort: decorated -> non-decorated]
                             **/
                            "public-decorated-method",
                            "public-instance-method",
                            "protected-decorated-method",
                            "protected-instance-method",
                            "private-decorated-method",
                            "private-instance-method",
                        ],
                    },
                ],

                // angular rules
                "@angular-eslint/directive-selector": [
                    "error",
                    {"type": "attribute", "style": "camelCase"}
                ],
                "@angular-eslint/component-selector": [
                    "error",
                    {"type": "element", "style": "kebab-case"}
                ],

                // naming conventions
                "camelcase": "off",
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        selector: "default",
                        format: ["camelCase"]
                    },
                    /**
                     * Class properties
                     *
                     * Allow UPPER_CASE for PUBLIC READONLY members:
                     *
                     * readonly inputMasks = {...};
                     * readonly INPUT_MASKS = INPUT_MASKS;
                     */
                    {
                        selector: "classProperty",
                        modifiers: ["readonly", "public"],
                        format: ["camelCase", "UPPER_CASE"],
                    },
                    /**
                     * Class properties and methods
                     *
                     * Allow underscore for PRIVATE members
                     */
                    {
                        selector: "memberLike",
                        modifiers: ["private"],
                        format: ["camelCase"],
                        leadingUnderscore: "allow",
                    },
                    /**
                     * Class properties and methods
                     *
                     * Allow underscore for PROTECTED members
                     */
                    {
                        selector: "memberLike",
                        modifiers: ["protected"],
                        format: ["camelCase"],
                        leadingUnderscore: "allow",
                    },
                    {
                        selector: "parameter",
                        format: ["camelCase"],
                        leadingUnderscore: "allow"
                    },
                    {
                        selector: "variable",
                        format: ["camelCase", "UPPER_CASE"]
                    },
                    {
                        selector: "enumMember",
                        format: ["camelCase", "UPPER_CASE"]
                    },
                    {
                        selector: "typeLike",
                        format: ["PascalCase"]
                    },
                    /**
                     * Interfaces
                     *
                     * "I" prefix is not allowed
                     * "Interface" suffix is not allowed
                     */
                    {
                        selector: "interface",
                        format: ["PascalCase"],
                        custom: {
                            regex: "^I[A-Z]|Interface$",
                            match: false,
                        },
                    },
                ],
            }
        }
    ]
};
