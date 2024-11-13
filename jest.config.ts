import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^next/image$': '<rootDir>/src/test/mock/next/image.tsx',
  },
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: 'coverage',
  collectCoverage: true,
};

module.exports = createJestConfig(customJestConfig);
