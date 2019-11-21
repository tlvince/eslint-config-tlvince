module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    },
  ],
}
