/* eslint-disable */
const proxy = require('koa-proxies');

module.exports = {
  port: 8080,
  __hostname: '0.0.0.0',
  preserveSymlinks: true,
  watch: true,
  nodeResolve: true,
  appIndex: 'index.html',

  moduleDirs: ['node_modules', 'custom-modules'],
  middlewares: [
    proxy('/api', {
      target: 'http://localhost:7001',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api\//, '/'),
      headers: {
        'api-base-url': '/api',
      },
    }),
  ],
};
