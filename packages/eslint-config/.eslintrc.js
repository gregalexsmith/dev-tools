// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    'import/core-modules': ['react'],
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        semi: true,
        printWidth: 80,
        trailingComma: 'none',
        bracketSameLine: true
      }
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/order': [
      'error',
      { alphabetize: { order: 'asc', caseInsensitive: true } }
    ],
    'react/react-in-jsx-scope': 'off'
  }
};
