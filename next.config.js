const path = require('path');

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/tests\//));

    return config;
  },
};
