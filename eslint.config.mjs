import js from "@eslint/js";
import boundaries from "eslint-plugin-boundaries";
import eslintPluginImport from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.js", "**/*.mjs", "**/*.jsx", "**/*.ts", "**/*.tsx"],

    ignores: ["build/**", "node_modules/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: "readonly",
      },
    },

    plugins: {
      "simple-import-sort": simpleImportSort,
      import: eslintPluginImport,
      boundaries,
    },

    settings: {
      "boundaries/elements": [
        { type: "app", pattern: "src/app/*" },
        { type: "pages", pattern: "src/pages/*" },
        { type: "widgets", pattern: "src/widgets/*" },
        { type: "features", pattern: "src/features/*" },
        { type: "entities", pattern: "src/entities/*" },
        { type: "shared", pattern: "src/shared/*" },
      ],
    },

    rules: {
      "simple-import-sort/exports": "error",
      "no-unused-vars": "off",
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      eqeqeq: "error",
      curly: "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "react-dom$"],

            // third-party
            ["^@?\\w"],
            ["^@/app(/.*|$)"],
            ["^@/pages(/.*|$)"],
            ["^@/widgets(/.*|$)"],
            ["^@/features(/.*|$)"],
            ["^@/entities(/.*|$)"],
            ["^@/shared(/.*|$)"],

            // side effects
            ["^\\u0000"],

            // parent imports
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

            // same-folder
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

            // styles
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          policies: [
            {
              from: { element: { type: "app" } },
              allow: {
                to: { element: { type: ["pages", "widgets", "features", "entities", "shared"] } },
              },
            },
            {
              from: { element: { type: "pages" } },
              allow: [{ to: { element: { type: ["widgets", "features", "entities", "shared"] } } }],
            },

            {
              from: { element: { type: "widgets" } },
              allow: [{ to: { element: { type: ["features", "entities", "shared"] } } }],
            },

            {
              from: { element: { type: "features" } },
              allow: [{ to: { element: { type: ["entities", "shared"] } } }],
            },

            {
              from: { element: { type: "entities" } },
              allow: [{ to: { element: { type: "shared" } } }],
            },

            {
              from: { element: { type: "shared" } },
              allow: [{ to: { element: { type: "shared" } } }],
            },
          ],
        },
      ],
    },
  },
];
