module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    "jest/globals": true
  },
  globals: {
    client: "readonly"
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "jest",
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/no-var-requires": [1],
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ]
  }
};
