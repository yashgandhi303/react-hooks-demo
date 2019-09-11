module.exports = {
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '**/src/**/*.tsx',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 20,
      lines: 20,
    },
  },
  testURL: 'http://test.com/',
  // projects: ['./client', './server'],
};
