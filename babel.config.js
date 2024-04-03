module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          navigation: './src/navigation',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
