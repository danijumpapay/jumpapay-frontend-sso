import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import airbnbBase from "eslint-config-airbnb-base";

export default tseslint.config(
  { ignores: ["dist", "postcss.config.js"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslintPlugin,
      prettier,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
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
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "camelcase": "off",
      "import/no-extraneous-dependencies": "off",
      "no-param-reassign": "off",
      "prettier/prettier": "off",
      "no-nested-ternary": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
)