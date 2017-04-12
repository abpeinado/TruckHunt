/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

// Add this file to the root directory of your project
module.exports = {
  "root": true,
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "sourceType": "script",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  // Add custom rules here
  // http://eslint.org/docs/rules/
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "comma-dangle": ["error", "never"],
    "no-console": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "no-console": "off",
    "max-len": "off",
    "class-methods-use-this": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/no-array-index-key": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off"
  },
  "allow": ["warn", "error", "log"]
};
