const path = require('path');

// free or pro
const currentVariant = process.env.BUILD_CONFIG || 'free'; // Passed in command line

module.exports = api => {
  // api.cache becuase of this https://github.com/akameco/extract-react-intl-messages/issues/71
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'transform-inline-environment-variables',
        {
          include: ['NODE_ENV', 'BUILD_CONFIG'],
        },
      ],
      [
        'module-resolver',
        /**
         * The "@common" alias is simply used to simplify import paths.
         *
         * The "@env" alias dynamically loads environment config based on CYRUS_ENV.
         */
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.json',
            '.dev.ts',
            '.ios.ts',
            '.android.ts',
            '.ios.ts',
            '.ts',
            '.android.tsx',
            '.ios.tsx',
            '.tsx',
          ],
          alias: {
            '@buildVariant': [
              path.resolve(__dirname, `./src/build-variants/${currentVariant}`),
              path.resolve(__dirname, './src'),
            ],
            '@env': path.resolve(__dirname, `./src/env/${currentVariant}`),
          },
        },
      ],
    ],
  };
};
