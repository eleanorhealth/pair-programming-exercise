module.exports = {
  extends: [
    "airbnb-typescript",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["prettier", "react"],
  rules: {
    "@typescript-eslint/quotes": ["warn", "double"],
    "@typescript-eslint/semi": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
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
