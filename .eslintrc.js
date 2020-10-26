module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "array-callback-return": "warn",
    'import/no-unresolved': [1, { ignore: [
      
      // TODO: Add additional directories that you may want to use for 'absolute imports'       
      'api', 'db'] }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }]
    "prefer-default-export": "warn"
  },
};
