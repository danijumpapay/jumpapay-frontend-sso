import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["dist"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint,
      prettier,
      import: importPlugin,
    },
    rules: {
      "no-case-declarations": "off",
      "default-param-last": "off",
      "import/prefer-default-export": "off",
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "no-console": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-inferrable-types": "error",
      indent: ["error", 2],
      semi: ["error", "always"],
      quotes: ["error", "double"],
      camelcase: "off",
      "import/no-extraneous-dependencies": "off",
      "no-param-reassign": "off",
      "prettier/prettier": "off",
      "no-nested-ternary": "off",

      // React hooks and refresh rules
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    extends: [
      js.configs.recommended,
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
  },
];
