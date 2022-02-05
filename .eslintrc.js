module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['react', 'react-native', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': 2,
        'no-shadow': 0,
        'no-undef': 0,
        'react-native/no-unused-styles': 1,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
      },
    },
  ],
};
