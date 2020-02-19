/* eslint-disable */
import cpy from 'rollup-plugin-cpy';
import { createDefaultConfig } from '@open-wc/building-rollup';

const workboxConfig = require('./workbox-config.js');
const { generateSW } = require('rollup-plugin-workbox');

// if you need to support IE11 use "modern-and-legacy-config" instead.
const config = [
  createDefaultConfig({
    input: 'index.html',
    plugins: {
      workbox: false,
    },
  }),
];

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
          'src/configs/**/*',
          'robots.txt',
          'api/trees/*.json', // remove this line, this is for demo purposes only
        ],
        dest: 'dist',

        options: {
          // parents makes sure to preserve the original folder structure
          parents: true,
          verbose: true,
        },
      }),
    ],
  },
  // Add plugin to the  config (generateSW when everything is done)
  {
    ...config[0],
    plugins: [...config[0].plugins, generateSW(workboxConfig)],
  },
];
