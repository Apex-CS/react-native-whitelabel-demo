module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@buildVariant', './src/'],
          ['@env', './src/env/free'],
        ],
        extensions: [
          '.ts',
          '.d.ts',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.ts',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.json',
        ],
      },
    },
  },
};
