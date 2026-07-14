/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["@stylistic/stylelint-plugin"],
  rules: {
    "@stylistic/color-hex-case": "lower",
  },
};
