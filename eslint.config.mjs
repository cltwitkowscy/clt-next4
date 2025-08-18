import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";

export default [
  { ignores: [".next/**", "node_modules/**", ".netlify/**", "netlify.toml", ".storybook/**"] },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: { "@next/next": nextPlugin },
    rules: { ...nextPlugin.configs["core-web-vitals"].rules }
  }
];
