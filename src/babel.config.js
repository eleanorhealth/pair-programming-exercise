/* eslint-disable import/no-default-export */
const plugins = [];
const presets = [];

/**
 * Presets
 */
presets.push("@babel/preset-typescript");
presets.push(["@babel/preset-react", { runtime: "automatic" }]);

/**
 * Plugins
 */
const config = {
  presets,
  plugins,
};

module.exports = config;
