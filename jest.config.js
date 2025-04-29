export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./src/test.setup.ts'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  coverageReporters: ['json', 'text', 'clover', 'lcov'],
}