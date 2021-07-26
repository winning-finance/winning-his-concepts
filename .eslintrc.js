module.exports = {
  root: true,
  extends: [
    'standard-with-typescript'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 0
  }
}