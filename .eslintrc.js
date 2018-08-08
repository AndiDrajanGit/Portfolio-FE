module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react'
  ],
  'plugins': ['react', 'prettier'],
  'globals': {
    '__DEV__': true
  },
  'env': {
    'browser': true
  },
  'rules': {
    'import/no-extraneous-dependencies': ['error', { 'packageDir': '.' }],
    'import/prefer-default-export': 'off',
    'max-len': ['error', { 'code': 100, ignoreUrls: true }],
    'no-underscore-dangle': 'off',
    'react/no-array-index-key': 'off',
    'no-console': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'react/forbid-prop-types': 'off',
    'prettier/prettier': 'error'
  },
  'settings': {
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', 'src']
      }
    }
  }
}