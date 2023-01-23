module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    // '@react-native-community',
    // 'plugin:react/recommended',
    // 'plugin:react/jsx-runtime',
    // 'plugin:prettier/recommended'
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'react/jsx-uses-react': 1,
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': ['error', { 'component': true, 'html': true }],
    'no-negated-condition': ['error'],
    'no-trailing-spaces': ['error'],
    'no-unneeded-ternary': ['error'],
    'quotes': ['error', 'single'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-imports': ['error'],
    'no-var': ['error'],
    'indent': [
      'error',
      2,
      {
        'FunctionDeclaration': {
          'parameters': 'first'
        },
        'FunctionExpression': {
          'parameters': 'first'
        },
        'CallExpression': {
          'arguments': 'first'
        },
        'ArrayExpression': 'first',
        'ObjectExpression': 'first',
        'SwitchCase': 1
      }
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
