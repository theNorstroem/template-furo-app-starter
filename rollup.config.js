/* eslint-disable */
import cpy from 'rollup-plugin-cpy';
import { createCompatibilityConfig } from '@open-wc/building-rollup';

const { generateSW } = require('rollup-plugin-workbox');

// if you need to support IE11 use "modern-and-legacy-config" instead.
const config = createCompatibilityConfig({
  input: './index.html',
  plugins: {
    workbox: false,
  },
});
const workboxConfig = require('./workbox-config.js');

// if you use an array of configs, you don't need the copy task to be executed for both builds.
// we can add the plugin only to the first rollup config:
export default [
  // add plugin to the first config
  {
    ...config[0],
    plugins: [
      ...config[0].plugins,
      cpy({
        // copy over all images files
        files: [
          'manifest.json',
          'favicon.ico',
          'assets/**/*',
          'configs/**/*',
          'es-dev-server-build.config.js',
          'robots.txt',
        ],
        dest: 'dist',
        options: {
          // parents makes sure to preserve the original folder structure
          parents: true,
        },
      }),
    ],
  },

  // Add plugin to the second config (generateSW when everything is done)
  {
    ...config[1],
    plugins: [...config[1].plugins, generateSW(workboxConfig)],
  },
];
