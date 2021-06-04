module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
    './src/lib-components/**/*'
  ]
};
