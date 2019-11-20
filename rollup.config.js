import cpy from 'rollup-plugin-cpy';
import {createCompatibilityConfig} from '@open-wc/building-rollup';

const {generateSW} = require('rollup-plugin-workbox');
const path = require('path');

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });
const config = createCompatibilityConfig({
  input: './index.html',
  plugins: {
    workbox: false,
  },
});

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
          "manifest.json",
          "favicon.ico",
          "assets/**/*",
          "configs/**/*"
        ],
        dest: 'dist',
        options: {
          // parents makes sure to preserve the original folder structure
          parents: true,
        },
      }),
    ],
  },

  // leave the second config untouched
  {
    ...config[1],
    plugins: [
      ...config[1].plugins,
      generateSW({
        // config options can be found here: https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config
        swDest: path.join(__dirname, 'dist', 'service-worker.js'),
        globDirectory: path.join(__dirname, 'dist'),
        importWorkboxFrom: 'local',
        navigateFallback: 'index.html',
        cacheId: 'my-app',
        globPatterns: ['**/*.{html,js,css}'],
      })],
  },
];


