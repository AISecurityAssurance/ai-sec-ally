import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json"],
        sourceType: "module",
      },
    },
    rules: {
      "quotes": ["error", "double"],
      "indent": ["error", 2],
    },
  },
  {
    ignores: ["lib/**/*", "generated/**/*"],
  }
);
