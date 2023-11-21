const path = require('path');
const os = require('os');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  cacheStores: ({FileStore}) => [
    new FileStore({
      root: path.join(os.tmpdir(), process.env.BUILD_CONFIG, 'metro-cache'),
    }),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
