module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            'screens': './src/screens',
            'ui-kit': './src/ui-kit',
            'assets': './assets',
            'utils': './src/utils',
            'navigation': './src/navigation',
            'modules': './src/modules',
          },
        },
      ],
    ],
  };
};
