// eslint.config.js
// @ts-check
import js from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // arquivos/paths a ignorar
  {
    ignores: ["node_modules/**", "coverage/**", "dist/**"]
  },

  // regras recomendadas do ESLint
  js.configs.recommended,

  // opções gerais do projeto
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.jest,
        // Node
        process: "readonly",
        console: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
        // Testes
        jest: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-undef": "error"
    }
  },

  // ajustes específicos para testes
  {
    files: ["tests/**/*.test.js"],
    rules: {
      "no-console": "off"
    }
  }
];
