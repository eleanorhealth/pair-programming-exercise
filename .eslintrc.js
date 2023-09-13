module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["prettier", "react"],
  rules: {
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/consistent-type-definitions": 0,
    "@typescript-eslint/quotes": ["warn", "double"],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "never",
        functions: "never",
      },
    ],
    "react/jsx-props-no-spreading": [
      "warn",
      { html: "enforce", custom: "ignore" },
    ],
    "react/require-default-props": 0,
    "prettier/prettier": "warn",
  },
};
