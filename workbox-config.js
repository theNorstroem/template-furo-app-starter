const path = require('path');

module.exports = {
  // config options can be found here: https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config
  swDest: path.join(__dirname, 'dist', 'service-worker.js'),
  globDirectory: path.join(__dirname, 'dist'),
  importWorkboxFrom: 'local',
  navigateFallback: 'index.html',
  cacheId: 'my-app',
  globPatterns: ['**/*.{html,js,css}'],
};
