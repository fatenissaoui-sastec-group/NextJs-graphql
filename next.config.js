const withFonts = require('next-fonts');
const withI18n = require('next-translate')

module.exports = withI18n((withFonts(({
  cssModules: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}))))

