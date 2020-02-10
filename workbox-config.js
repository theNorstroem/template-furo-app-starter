module.exports = {
  // config options can be found here: https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config
  //                                   https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW
  swDest: 'dist/service-worker.js',
  globDirectory: 'dist',
  cacheId: 'my-app',
  globPatterns: ['favicon.ico', 'assets/**', 'configs/**', '**/*.{html,js,json}'],
  globStrict: true,
  mode: 'production',
  cleanupOutdatedCaches: true,
  navigateFallback: 'index.html',
  navigateFallbackDenylist: [/^\/auth.*/],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        },
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-stylesheets',
      },
    }]
};
