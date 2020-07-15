const CracoLessPlugin = require("craco-less");
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
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@avatar-bg": colors.accent,
              "@avatar-color": colors.text,
              "@badge-dot-size": "10px",
              "@border-color-base": colors.border,
              "@border-color-split": colors.border,
              "@drawer-body-padding": 0,
              "@font-family": font.family,
              "@font-size-sm": font.sizeSm,
              "@heading-color": "@text-color",
              "@layout-body-background": colors.bodyBg,
              "@layout-header-background": "transparent",
              "@layout-header-height": spacing.header,
              "@layout-sider-background": "@white",
              "@primary-color": colors.primary,
              "@text-color": colors.text,
              "@warning-color": colors.orange,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
