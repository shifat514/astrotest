module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:vue/vue3-recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        // "ecmaVersion": "latest",
        // // "parser": "@typescript-eslint/parser",
        // "sourceType": "module"
    },
    "plugins": [
        // "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names": "off",
        "vue/attribute-hyphenation": "off",
        "vue/script-indent": ["warn", 2, { "baseIndent": 1 }]
    }
}