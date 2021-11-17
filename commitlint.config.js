module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-length': [2, 'always', 5000],
  },
};
