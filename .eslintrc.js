module.exports = {
    env: {
        browser: true
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "preact",
        "plugin:@typescript-eslint/recommended"
    ],
    ignorePatterns: ["/build"],
    plugins: [
        "import-quotes"
    ],
    rules: {
        "import-quotes/import-quotes": [1, "single"]
    },
};
