const path = require('path');

module.exports = {
  publicPath: './',
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/theme',
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
  ],
};
