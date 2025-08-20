import next from "eslint-config-next";
export default [
  ...next(),
  { rules: {
      "react-dom/no-unsafe-target-blank": "off",
      "@typescript-eslint/consistent-type-definitions": "off"
    }
  }
];
