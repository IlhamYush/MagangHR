module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Tambahkan aturan ini untuk memaksa LF sebagai end of line
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
};
