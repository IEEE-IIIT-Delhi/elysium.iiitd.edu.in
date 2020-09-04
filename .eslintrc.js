module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    serviceworker: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 0,
        'import/no-duplicates': 0,
        'import/no-mutable-exports': 0,
        'no-return-assign': 0,
        'no-multiple-empty-lines': ['error', {
          max: 1,
          maxBOF: 2,
          maxEOF: 0
        }]
      }
    }
  ],
  rules: {
  }
}
