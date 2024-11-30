// eslint-disable-next-line no-undef
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@services': './src/services',
        },
      },
    ],
  ],
};
