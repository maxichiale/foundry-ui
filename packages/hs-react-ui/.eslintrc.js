module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // TODO enable typechecking on tests
  ignorePatterns: ['src/**/*.test.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-confusing-arrow': 0,
    'react/jsx-filename-extension': 0, // didn't like jsx in tsx lol
    'linebreak-style': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'react/jsx-curly-newline': 0,
    'object-curly-newline': 0,
    'react/jsx-indent': 0,
    'implicit-arrow-linebreak': 0,
    indent: 0,
    'max-len': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-case-declarations': 0,
    'no-multi-spaces': 0,
    'react/jsx-no-bind': 0,
    'no-plusplus': 0,
    'react/no-unescaped-entities': 0,
    'consistent-return': 0,
    'react/jsx-one-expression-per-line': 0,

    'import/no-extraneous-dependencies': 1,
    '@typescript-eslint/ban-types': 1, // StyledComponentBase<any, {}> failed every time
    'import/no-unresolved': 1,
    'import/extensions': 1,
    'comma-dangle': 1,
    'operator-linebreak': 1,
    'comma-spacing': 1,
    quotes: 1,
    'padded-blocks': 1,
    'react/jsx-tag-spacing': 1,
    'react/prop-types': 1,
    'react/no-array-index-key': 1,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
    'import/prefer-default-export': 1,
  },
};
