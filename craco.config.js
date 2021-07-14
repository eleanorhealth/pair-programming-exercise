const { ESLINT_MODES } = require("@craco/craco");
const ESLINT_CONFIG = require("./.eslintrc");
const colors = require("./src/theme/colors");
const spacing = require("./src/theme/spacing");
const font = require("./src/theme/font");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.extends,
    configure: ESLINT_CONFIG,
  },
};
