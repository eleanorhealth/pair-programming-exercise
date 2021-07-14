const { ESLINT_MODES } = require("@craco/craco");
const ESLINT_CONFIG = require("./.eslintrc");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.extends,
    configure: ESLINT_CONFIG,
  },
};
