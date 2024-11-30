module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 여기에 규칙을 추가하세요
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
