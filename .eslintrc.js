module.exports = {
  extends: [
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["prettier", "react"],
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
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
      "error",
      { html: "enforce", custom: "ignore" },
    ],
    "react/require-default-props": 0,
    "prettier/prettier": "error",
  },
};
