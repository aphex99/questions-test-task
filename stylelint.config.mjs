/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["@stylistic/stylelint-plugin"],
  rules: {
    "@stylistic/color-hex-case": "lower",
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]*$",
      { message: "Expected class selector to be camelCase" },
    ],
  },
};
