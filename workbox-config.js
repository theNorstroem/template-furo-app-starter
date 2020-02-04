const path = require('path');

module.exports = {
  // config options can be found here: https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config
  swDest: path.join( 'dist', 'service-worker.js'),
  globDirectory: path.join( 'dist'),
  navigateFallback: 'index.html',
  cacheId: 'my-app',
  globPatterns: ['assets/**','**/*.{html,js,json}'],
  globStrict:true,
  mode:"Production"

};
