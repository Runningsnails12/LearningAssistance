module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': true,
    'es2021': true
  },
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'extraFileExtensions': ['.vue'],
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  
  'rules': {
    'indent': [
      'warn',
      2
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ]
}
