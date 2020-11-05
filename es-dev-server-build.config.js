/* eslint-disable */
const proxy = require('koa-proxies');

module.exports = {
  port: 8888,
  hostname: 'localhost',
  preserveSymlinks: false,
  watch: false,
  nodeResolve: false,
  appIndex: 'index.html',
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
